@echo off
title BY.ALEXANDER - 66 GREENE ST SOHO NY (Port 5188)
cd /d "%~dp0"
echo Iniciando servidor de desarrollo BY.ALEXANDER en http://localhost:5188 ...
start "" http://localhost:5188
npm run dev -- --port 5188
pause
