# TS-Calculator

1) Creating package.json file.. Write in terminal:    npm init -y
2) Creating tsconfig.json file.. Write in terminal:    tsc --init
3) Installing Inquirer.. Write in terminal:     npm i inquirer
4) Dev dependencies inquirer.. Write in terminal:    npm install @types/inquirer -D

Editing in Files:

1) In tsconfig.json change target from "target": "es2016"  to "target": "ES2022"
2) In tsconfig.json change "module": "commonjs",  to "module":"NodeNext",
3) In tsconfig.json uncomment "moduleResolution" and change it to "moduleResolution":"NodeNext",
4) In package.json add "type":"module", after "main":"index.js"
