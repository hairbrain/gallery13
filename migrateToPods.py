"""
Migration Tool for Ember-cli
----------------------------
**This will NOT change any paths in the files. It only does a naive
copy of the file itself.**

Moves all the files from the "rails" directory structure:

|- controllers/
|  |- index.js
|- routes/
|  |- index.js
|- views/
|  |- index.js

Directory Structure to the "pod" style directory structure:

|- pods/
|  |- index/
|  |  |- controller.js
|  |  |- route.js
|  |  |- view.js

"""
from os import path, walk, mkdir
from shutil import copyfile, rmtree
 
def strip_base_component(component, file_path):
    """
    Takes the files path and removes the prefixed component from import
    e.g.
        'controllers/index-text.js' -> 'index-text.js'
    """
    return file_path[len(component) + 1:]
 
def strip_test_name(file_name):
    """
    Takes a test file name, and removes the '-test.js' from the end
    """
    return file_name[:-len("-test.js")]
 
def get_pod_directory(component, file_path, file_name):
    """
    Takes a file path starting with the component {controllers,routes,views}
    and returns the pod path and filename
    'pods/', '{controller,route,view}-test.js'
    """
    pod_path = strip_base_component(component, file_path)
    pod_path += '/' + strip_test_name(file_name)
    print 'Pod Path:', 'pods' + pod_path
 
    return (
        'pods' + pod_path,
        component + '-test.js'
    )
 
def move_file(path_a, file_a, path_b, file_b):
    """
    Moves a file from source path, to destination path. Removes the
    source on successful transfer
    """
    if not path.exists(path_b + '/' + file_b):
        print 'Copying:', path_a + '/' + file_a, ' -> ', path_b + '/' + file_b
        copyfile(path_a + '/' + file_a, path_b + '/' + file_b)
    else:
        print 'Destination file already exists', path_b + '/' + file_b
 
def migrate_files(component, files, source_path):
    """
    Migrates the given list of files from the src folder:
        {controller,route,view}s/**/*-test.js
    to the destination:
        pods/**/*/{controller,route,view}-test.js
    """
    if len(files) is not 0:
        print 'Discovered Files', files
    else:
        destination_path, destination_filename = get_pod_directory(
            component, source_path, '')
 
        create_if_not_exists(destination_path)
        print 'No files in Directory'
 
    for source_file_name in files:
        destination_path, destination_filename = get_pod_directory(
            component, source_path, source_file_name)
 
        print "Path and name", destination_path, destination_filename
        if destination_path is not '':
            create_if_not_exists(destination_path)
        move_file(
            source_path,
            source_file_name,
            destination_path,
            destination_filename)
 
def walk_directories(component):
    """
    Function to walk through all the directories in the component folder list
    Will then call function to copy over files
    """
 
    for root, subdirs, files in walk(
            path.dirname(component + 's/')
        ):
 
        print 'Walking Directory', root
        create_if_not_exists('pods/' + strip_base_component(component, root))
        migrate_files(component, files, root)
        print ''
 
def remove_dir(directory_path):
    """
    To be run only after the files have been copied.
    Recursively removes a directory.
    """
    print "Removing directory:", directory_path
    rmtree(directory_path)
 
def create_if_not_exists(directory_name):
    """
    Makes a directory if it doesn't exist
    """
    if not path.exists(directory_name + '/'):
        mkdir(directory_name, 0755)
 
def main():
    """
    Kickoff Method
    """
    create_if_not_exists('pods')
    components = [
        'controller',
        'route',
        'view'
    ]
    for component in components:
        walk_directories(component)
        remove_dir(component + 's/')
 
if __name__ == '__main__':
    main()
