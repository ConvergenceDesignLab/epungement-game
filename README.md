# Expungement Game

## Concept

The expungement game was produced by IAM students at Columbia College during Eden Unluata's Authoring Interactive Media class. The students were working with [Convergence Design Lab](https://www.convergencedesignlab.org), [Mikva Challenge](https://www.mikvachallenge.org/) and [LRNG](https://www.lrng.org/) to design a game for an online learning playlist around expungement. (A learning playlist is a collection of learning activities around a theme.)

From Convergence Design Lab:

> We brought the project to Eden Unluata, professor of the Authoring Interactive Media course at Columbia College, where students created designs of video games about expungement for their final project. We selected one of the designs and offered summer internships to students from the class to build out a final game to be included as an activity in the learning playlist on LRNG.

For more context on the project, see Convergence's [project write-up](https://www.convergencedesignlab.org/work/expungement-playlist/).

## Technical

The game appears to have been build with a combination of Construct 3 and straight HTML/JS/CSS.

### Running

For running the game, simply open up the `expungement-game` folder in your choosen http server. One way if you have Node installed, open a terminal in the `expungement-game` folder and run:

```
npm i -g http-server
http-server -c-1 -o
```

### Deploying

You can copy the contents of the `expungement-game` folder to a server for deploying, just make sure you are copying the `expugment-game` folder within this repository and _not_ the whole repository (which includes .git and the readme).

### Changelog

01/18/19

- Modified the generated Construct 3 code to use relative URLs rather than hard-coded URLS, @mikewesthad
- Removed unused dependencies, @mikewesthad
- Reorganized things so that there was no "globals" folder needed above the project, @mikewesthad
