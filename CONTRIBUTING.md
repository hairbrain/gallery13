# Guidelines for Contributing to Gallery13

## Issues

In general, work should not be done without an issue being filed first.

After an issue is filed, it must be tagged with `accepted` by a hairbrain contributor.  
Please only submit pull requests for accepted issues.
If you plan to work on an issue, leave a comment in the issue that you are working on it and when you expect to have a PR ready. 
Some examples of good comments are:

- "I'll take a look at this over the weekend."
- "I'm going to do this, give me two weeks."
- "Working on this" (as in, I'm working on it right now)
 
*Todo: integrate waffle.io into issue workflow*

## Pull Requests

New features and bug fixes should be made in a branch dedicated solely to that feature or bug fix.  
To merge changes back with the main branch, a pull request should be submitted, following these guidelines:

- Make sure there is an issue for any pull request you send.
- The pull request must have a description. The description should explain what you did and how its effects can be seen.
- The commit message should say "(fixes #1234)" at the end of the description if it closes out an existing issue (replace 1234 with the issue number).
  - If the commit doesn't completely fix the issue, then use `(refs #1234)` instead of `(fixes #1234)`
- The change should introduce no functional regression. Be sure to run `npm test` to verify your changes before submitting a pull request.
- Make separate pull requests for unrelated changes.
- All changes must be accompanied by tests, even if the feature you're working on previously had no tests.
- Only one commit is allowed per pull request. If you have multiple commits, they should be squashed before the PR is merged.

### Step 1: Create a new branch

The first step to sending a pull request is to create a new branch. Give the branch a descriptive name that describes what it is you're fixing, such as:

    git checkout -b fix-broken-config

### Step 2: Make your changes

Make the changes to the code and tests and then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:

    Tag: Message (fixes #1234)

The Tag is one of the following:
- Fix - for a bug fix.
- Update - for a backwards-compatible enhancement.
- Breaking - for a backwards-incompatible enhancement.
- Docs - changes to documentation only.
- Build - changes to build process only.
- New - implemented a new feature.
- Upgrade - for a dependency upgrade.

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the end. 

### Step 3: Rebase onto upstream

Before you send the pull request, be sure to rebase onto the upstream source. This ensures your code is running on the latest available code.

```
git fetch upstream
git rebase upstream/master
```

### Step 4: Run the tests

After rebasing, be sure to run all of the tests once again to make sure nothing broke:

    npm test

### Step 5: Squash your commits

There shuld be just one commit per pull request. If you have used multiple commits, be sure to [squash](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) your commits.

### Step 6: Send the pull request

Now you're ready to send the pull request. Go to your fork and then follow the GitHub documentation on how to send a pull request.

## Governance

Committers:
- Are expected to work on public branches of the source repository and submit pull requests from that branch to the master branch.
- Are expected to delete their public branches when they are no longer necessary.
- May submit small changes (documentation updates, changes to tests or code comments, configuration changes) without pull requests.
- Must submit pull requests for any non-trivial changes.
- Have their work reviewed by other contributors before acceptance into the repository.
- May label issues as they are submitted ("accepted" label should only be added for bugs, and only if the committer verified the bug as valid).
- May close issues if they are duplicates of already resolved issues.


*This contribution guide is a derivative of the excellent [ESLint guide](http://eslint.org/docs/developer-guide/contributing.html).*

*This governance model is a derivative of the [ESLint model](http://eslint.org/docs/developer-guide/governance).*
