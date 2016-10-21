"use strict";
var Robot = (function(robotModal) {

    robotModal.Model = {};

    robotModal.Model.Healer = function() {
        this.name = "Healer";
        this.health = robotModal.Model.randomValue(20, 240); // number between 20 - 40
        this.damage = robotModal.Model.randomValue(25, 30); // number between 25 - 30
    };
    robotModal.Model.Healer.prototype = new Robot.Type.Drone();

    robotModal.Model.Caster = function() {
        this.name = "Caster";
        this.health = robotModal.Model.randomValue(20, 40); // number between 20 - 40
        this.damage = robotModal.Model.randomValue(20, 25); // number between 20 - 25
    };
    robotModal.Model.Caster.prototype = new Robot.Type.Drone();

    robotModal.Model.Buffer = function() {
        this.name = "Buffer";
        this.health = robotModal.Model.randomValue(40, 60); // number between 40 - 60
        this.damage = robotModal.Model.randomValue(15, 20); // number between 15 - 20
    };
    robotModal.Model.Buffer.prototype = new Robot.Type.Bipedal();

    robotModal.Model.Support = function() {
        this.name = "Support";
        this.health = robotModal.Model.randomValue(60, 80); // number between 60 - 80
        this.damage = robotModal.Model.randomValue(10, 15); // number between 10 - 15
    };
    robotModal.Model.Support.prototype = new Robot.Type.Bipedal();

    robotModal.Model.Melee = function() {
        this.name = "Melee";
        this.health = robotModal.Model.randomValue(80, 100); // number between 80 - 100
        this.damage = robotModal.Model.randomValue(5, 10); // number between 5 - 10
    };
    robotModal.Model.Melee.prototype = new Robot.Type.Atv();

    robotModal.Model.Tank = function() {
        this.name = "Tank";
        this.health = robotModal.Model.randomValue(100, 120); // number between 100 - 120
        this.damage = robotModal.Model.randomValue(1, 5); // number between 1 - 5
    };
    robotModal.Model.Tank.prototype = new Robot.Type.Atv();

    robotModal.Model.randomValue = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return robotModal;
} (Robot || {}));
