@echo off
echo Deploy on production...
git push origin main:prod
git push origin main:main
echo Updating local production branch...
git pull origin prod:prod
