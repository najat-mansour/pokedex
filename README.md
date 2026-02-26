# Pokedex
### Overview
This is a project (basically a course) in [Boot.dev](https://www.boot.dev) platform called [Build a Pokedex in TypeScript](https://www.boot.dev/courses/build-pokedex-cli-typescript). It is a part of **Foothill Technology Solutions (FTS)** <u>Back-End Internship Roadmap</u>.  

It comes after three previous courses: 
* [Learn Git](https://www.boot.dev/courses/learn-git)
* [Learn TypeScript](https://www.boot.dev/courses/learn-typescript)
* [Learn HTTP Clients in TypeScript](https://www.boot.dev/courses/learn-http-clients-typescript)
___ 

### What is Pokedex? 
A Pokedex is a CLI application that keeps track of the Pokémon a player has seen or caught, including their names, locations, types, stats, and helps players build and organize their collection. All data are fetched from [PokeAPI](https://pokeapi.co/) external API. 
___

### Project Main Technology(ies)
##### Main Language 
* `TypeScript`
##### Node Modules 
* `readline`: Reading data from a readable stream. 
* `vitest`: Performing Unit-Testing. 
___

### Project Architecture
* `dist`: The compiled `JavaScript` code. 
* `src`: The project source code as the following: 
    * `api`: External-API Integration. 
    * `cache`: Caching Configuration.
    * `commands`: Commands' Implementations.
    * `state.ts`: Contains the state of the project. 
    * `repl.ts`: Handles the REPL process. 
    * `main.ts`: The entry-point of the project. 
___ 

### How to run it? 
```shell
git clone https://github.com/najat-mansour/pokedex.git
cd pokedex 
npm install
npm start
```
You must have `Node.js` installed in your machine. 
___

### Author
&copy; Najat Mansour - Feb. 2026