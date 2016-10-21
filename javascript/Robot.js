"use strict";
// Main iife
var Robot = (function(originalRobot) {

  originalRobot = {};

    /*
        Base Robot Function
    */
    originalRobot.robot = function(name) {
        this.class = null;
        this.weapon = null;
        this.playerName = name || "unknown robot";
    };

    originalRobot.robot.prototype.setClass = function(newClass) {
        this.class = newClass;
    };

    originalRobot.robot.prototype.attack = function(target, oppenent){
    this.totalDamage = Robot.Model.randomValue(5, 1) + oppenent.class.damage;
    target.class.health -= this.totalDamage;
          if(target.class.health <= 0) {
            // That way you don't display a negative hp
            target.class.health = 0;
        }
        return this.totalDamage;
    };

    return originalRobot;
} (Robot || {}));

