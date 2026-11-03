@echo off
title 14 - KAFE Roast & Dessert Chocolatier
cd /d "%~dp0"
if not exist "node_modules\vite\bin\vite.js" (
    rmdir "node_modules" 2>nul
    if exist "E:\WEBS\WEBS PORTFOLIO\07_garcy_studio\node_modules\vite\bin\vite.js" (
        mklink /J "node_modules" "E:\WEBS\WEBS PORTFOLIO\07_garcy_studio\node_modules" >nul
    )
)
echo Iniciando 14 - KAFE Roast ^& Dessert Chocolatier en http://127.0.0.1:5186 ...
node ".\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 5186 --open
pause
