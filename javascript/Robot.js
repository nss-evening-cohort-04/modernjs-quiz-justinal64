"use strict";
// Main iife
var Robot = (function(originalRobot) {

  originalRobot = {};

    /*
        Base Robot Function
    */
    originalRobot.Robot = function(name) {
        this.class = null;
        this.weapon = null;
        this.playerName = name || "unknown robot";
        this.health = Math.floor(Math.random() * 40 + 100);
    };

    // originalRobot.robotTest = function() {
    //     this.baseDamage = Math.floor(Math.random() * 10);
    //     this.weapon = null;
    // };
    // originalRobot.robotTest.prototype = new originalRobot.Robot();

    return originalRobot;
} (Robot || {}));



