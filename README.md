# Dungeon basements - Looking for the shortest path

This is an exercise of programming logic.

The goal is to go down the stairs if the basement allows it.

The input is a xlsx file with 12 sheets as levels, of which the first 6 have exit, and the rest do not.

## Instructions

![Alt text](https://irvingvillanueva.com/img/exercises/dungeon_basement_level5.png "Dungeon basement level 5")

Reach the stairs moving the character step by step, the path should be in the fewest possible movements.
The character begins in the upper right corner.

Inside the xlsx there are cells with value 1 representing the path and 0 representing a wall.
Design your own levels to test the code by adding more sheets to the xlsx using 0 and 1 to build the paths!

### Challenge yourself

Select the difficulty and complete the code.

- Easy - You will get a lot of help to solve the exercise
- Medium - You will get moderate help.
- Hard - You will not have help and you will have to develop everything on your own.

### Suggested Commands
**install node_modules with package.json**
```bash
npm install
```
**install node_modules with package.json and execute medium.js**
```bash
npm start
```
**Execute your selected difficult**
```bash
node hard.js
```

## Level results
| Level | Has exit | Dead end  |
| :---: | :---: | :---: |
| 1 | Yes | No |
| 2 | Yes | No |
| 3 | Yes | No |
| 4 | Yes | No |
| 5 | Yes | No |
| 6 | Yes | No |
| 7 | No | Yes |
| 8 | No | Yes |
| 9 | No | Yes |
| 10 | No | Yes |
| 11 | No | Yes |
| 12 | No | Yes |