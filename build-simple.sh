#!/usr/bin/env bash

echo 'pulling master branch on server'
ssh gallery "cd Gallery13 && git pull origin master"

echo 'update npm and bower dependancies'
echo 'npm on server...'
ssh gallery "cd ~/gallery13/server && npm install"

echo 'bower in client...'
ssh gallery "cd ~/gallery13/client && bower install"

echo 'npm in client'
ssh gallery "cd ~/gallery13/client && npm install"

echo building ember client into server assets
ssh gallery "cd ~/gallery13/client && ember build --environment=production --output-path=../server/assets/."
