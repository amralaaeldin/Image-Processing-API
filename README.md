# Image Processing API

## Description

_Image Processing API_ is project that provides endpoints you can easily get image resized to specific dimensions

## How to run it

- Open CMD
- Write command 'git clone https://github.com/amralaaeledin/Image-Processing-API.git'
- Write command 'npm install'
- Write command 'npm run build'
- Write command 'node ./build'
- Visit 'localhost:7000/' in browser

## Commands

- 'npm run clean' : to run prettier and linting the project
- 'npm run test' : to run tests
- 'npm run start' : to run ts version of the project
- 'npm run build' : to build js version of the project

## Supported Endpoints

### GET

- `welcome page`                                       / <br/>
- `resize image to certain height and width`           /image?filename={imageName}&width={width}&height={height} <br/>
- `resize image to certain width and suitable height`  /image?filename={imageName}&width={width} <br/>
- `resize image to certain height and suitable width`  /image?filename={imageName}&height={height} <br/>

### Parameters

filename : Required : can be any of these values [encenadaport | fjord | icelandwaterfall | palmtunnel | santamonica]
width : optional : can be any numeric value
height : optional : can be any numeric value

## Technologies Used

- nodejs
- typescript
- express
- jasmine
- supertest
- sharp
