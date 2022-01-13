#!/usr/bin/env sh

# 发生错误时终止
set -e

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M main &&
git remote add origin git@github.com:gjf610/vv-box-website.git
git push -f -u origin main
cd -
echo https://gjf610.github.io/vv-box-website/index.html