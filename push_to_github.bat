@echo off
title Push Guitar Studio to GitHub
echo =======================================================
echo   Deploying Guitar Studio to Harshit975shukla
echo =======================================================
cd /d "C:\Users\shukl\guitar-chord-studio"

echo.
echo 1. Pushing to GitHub (origin main)...
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo =======================================================
    echo   SUCCESS! Pushed to GitHub!
    echo   Your app will be live in ~60 seconds at:
    echo   https://harshit975shukla.github.io/guitar-chord-studio/
    echo =======================================================
) else (
    echo.
    echo [NOTE] If you haven't created the repository yet, please open:
    echo https://github.com/new?name=guitar-chord-studio
    echo and click "Create repository", then run this script again.
)
echo.
pause
