# Flashcards
The intention behind this repository is to create a game for flashcards to learn the basics of js and webdev.
___

## Table of contents
- [Project description](#project-description)
- [Install](#install)
- [Use](#use)
___

## Project Description
___

## Install
### Git clone this repository.
```
git clone https://github.com/SoftwareShenzheneer/flashcards.git
```
___

## Use
The current concept is that there will be several aspects:
1. db - a database containing learning status per user. For now focus is on a single user mocked in a json file.
2. engine - this is where the magic happens. Implementation of Space Repetition System (SRS) algorithm for learning. 
3. server - just a simple way to serve the engine to a website
4. website - a basic, dumb, frontend. It should not know how to do anything else except render things. Styling done with html, css and js. Scripting done in js.

As far as the user is concerned, the only thing they should need to do is enter the page, make sure their user is active (logging in preferably) and go through the lessons. Current idea is just click-a-card based, might add to this idea with text input fields at some point (or at least click correct characters).

