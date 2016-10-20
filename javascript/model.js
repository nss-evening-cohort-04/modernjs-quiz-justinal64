"use strict";
// 1. Define at least 2 specific robot model functions for each type
// 2. Give each robot model a different range of health.
// 3. For example, one model can have health range of 50-80,
// and another one will have a range of 60-120.
// To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 4. Give each robot model a different range of damage they do using the same technique

var Robot = (function(robotModal) {

    robotModal.model1 = function() {    // number between 0 - 20
        this.health = Math.floor(Math.random() * (20 - 0 + 1));
    };

    robotModal.model2 = function() {    // number between 20 - 40
        this.health = Math.floor(Math.random() * (40 - 20 + 1) + 20);
    };

    robotModal.model3 = function() {    // number between 40 - 60
        this.health = Math.floor(Math.random() * (60 - 40 + 1) + 40);
    };

    robotModal.model4 = function() {    // number between 60 - 80
        this.health = Math.floor(Math.random() * (80 - 60 + 1) + 60);
    };

    robotModal.model5 = function() {    // number between 80 - 100
        this.health = Math.floor(Math.random() * (100 - 80 + 1) + 80);
    };

    robotModal.model6 = function() {    // number between 100 - 120
        this.health = Math.floor(Math.random() * (120 - 100 + 1) + 100);
    };

    // robotModal.robotTest.prototype = new originalRobot.Robot();
    // robotModal.Testest = function() {
    //     this.baseDamage = Math.floor(Math.random() * 10);
    //     this.weapon = null;
    // };
    // robotModal.robotTest.prototype = new originalRobot.Robot();

    return robotModal;
} (Robot || {}));


var model1 = new Robot.model1();
var model2 = new Robot.model2();
var model3 = new Robot.model3();
var model4 = new Robot.model4();
var model5 = new Robot.model5();
var model6 = new Robot.model6();
console.log("model1", model1);
console.log("model2", model2);
console.log("model3", model3);
console.log("model4", model4);
console.log("model5", model5);
console.log("model6", model6);