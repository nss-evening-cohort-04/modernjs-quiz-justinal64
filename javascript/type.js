"use strict";
// Define three robot type functions (e.g. Drone, Bipedal, ATV).\
// Each type must have a unique property, for example, if it is aerial or ground based

var Robot = (function(robotType) {

    robotType.Drone = function(name) {
        this.wheels = 0;
    };
    robotType.Drone.prototype = new Robot.robot();

    robotType.Bipedal = function(name) {
        this.wheels = 2;
    };
    robotType.Bipedal.prototype = new Robot.robot();

    robotType.Atv = function(name) {
        this.wheels = 4;
    };
    robotType.Atv.prototype = new Robot.robot();

    // robotType.Testest = function() {
    //     this.baseDamage = Math.floor(Math.random() * 10);
    //     this.weapon = null;
    // };
    // robotType.robotTest.prototype = new originalRobot.Robot();

    return robotType;
} (Robot || {}));

var tester = new Robot.Drone();
console.log("Drone prototype", tester);
// console.log("Robot", Robot.Player("test"));
// var tester = new Robot.robotTest();
// tester.playerName = "Test";
// tester.weapon = "Sword";
// console.log("tester", tester);


