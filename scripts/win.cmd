@echo off
del .\adios-backend
git submodule init
git submodule update
cd .\adios-backend
yarn install
cd ..
