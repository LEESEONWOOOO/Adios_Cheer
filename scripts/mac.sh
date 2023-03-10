#!/bin/bash
git submodule foreach git pull origin master
cd ./adios-backend
yarn install
cd ..