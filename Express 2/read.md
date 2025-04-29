npm init -y

install tsc compiler then create new tsconfig file
npx tsc --init
set the paths
"rootDir": "./src",
"outDir": "./dist",

add jest as dependency
npm install --save-dev ts-jest  @jest/globals

Initialize jest.config.ts
npx ts-jest config:init

update in package.json
"scripts": {
    "test": "jest"
},

npm i supertest
supertest will take care of port and logic on which express is runnning

write test in src/test/sum.test.ts
.test file will be auto read by jest while running app