# A Simple TypeScript Example

A simple repository to showcase how to use typescript

## Use Case

I enjoy seeing how clean TypeScript looks and all of the benefits that it offers compared to plain Javascript, but I never knew how to set one up. This project aims to set a simple `Hello World` TypeScript project.

I leveraged the following knowledge base articles in order to make this repository:
- https://www.digitalocean.com/community/tutorials/typescript-new-project
- https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/ 

## Project Structure 

### tsconfig.json

The TSCconfig file is a JSON file that describes how tsc compiler will convert the TypeScript code into Javascript

### .eslintrc

The eslint file is a JSON file that allows users to run a linter on there code and make sure that the code that they are producing is of good quality. The ESLint will validate that the build is using the correct variable declaration types, double quote vs single quote and so on.

### .eslintignore

This defines files and folders that should not be linted

### package.json

The package.json defines the dependencies and the build commands used to build this project

## How to build

Simply perform the following tasks:

1. Execute `npm install` in the root of the folder
2. Execute `npm run lint` to validate the syntax is valid
    - You should not see any errors being returned as the result of this command
3. Execute `npm run build` in order convert the src/**.ts files into Javascript
4. `cd dist`
5. Execute `node index.js` in order to see the output of the command


# Contributors

- [Patrique Legault](https://github.com/pat-lego)
