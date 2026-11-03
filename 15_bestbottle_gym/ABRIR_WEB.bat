@echo off
title 15 - BEST BOTTLE BEST GYM (Bauhaus Gym Hydration Dropshipping)
cd /d "%~dp0"
if not exist "node_modules" (
    echo Instalando dependencias...
    call npm install
)
echo Iniciando servidor en http://localhost:5187 ...
start "" "http://localhost:5187"
call npx vite --port 5187 --host
pause
