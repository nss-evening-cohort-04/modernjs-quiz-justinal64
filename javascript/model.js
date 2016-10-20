"use strict";
// 1. Define at least 2 specific robot model functions for each type
// 2. Give each robot model a different range of health.
// 3. For example, one model can have health range of 50-80,
// and another one will have a range of 60-120.
// To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 4. Give each robot model a different range of damage they do using the same technique

var Robot = (function(robotModal) {

    robotModal.Test = function(name) {
        this.wheels = 0;
    };

    robotModal.Tester = function(name) {
        this.wheels = 2;
    };

    robotModal.Testest = function(name) {
        this.wheels = 4;
    };

    // robotModal.Testest = function() {
    //     this.baseDamage = Math.floor(Math.random() * 10);
    //     this.weapon = null;
    // };
    // robotModal.robotTest.prototype = new originalRobot.Robot();

    return robotModal;
} (Robot || {}));

console.log("Robot", Robot);