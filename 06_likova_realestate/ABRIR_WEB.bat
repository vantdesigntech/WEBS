@echo off
title 06 - LIKOVA Real Estate
cd /d "%~dp0"
if not exist "node_modules\vite\bin\vite.js" (
    rmdir "node_modules" 2>nul
    if exist "E:\WEBS\WEBS PORTFOLIO\07_garcy_studio\node_modules\vite\bin\vite.js" (
        mklink /J "node_modules" "E:\WEBS\WEBS PORTFOLIO\07_garcy_studio\node_modules" >nul
    )
)
echo Iniciando 06 - LIKOVA Real Estate en http://127.0.0.1:5178 ...
node ".\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 5178 --open
pause
