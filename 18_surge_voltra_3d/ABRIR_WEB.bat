@echo off
chcp 65001 >nul
title 18 - VOLTRA X1 3D WebGL Experience (Port 8095)
cd /d "%~dp0"
echo ==========================================================
echo   VOLTRA X1 — E-BIKE DE MONTAÑA EN CARBONO (3D WebGL)
echo   85 Nm · 120 km · 21 kg · 160 mm · 4.490 €
echo ==========================================================
echo Iniciando servidor en http://localhost:8095 ...
start "" "http://localhost:8095"
python -m http.server 8095
pause
