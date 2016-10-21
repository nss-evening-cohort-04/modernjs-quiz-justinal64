"use strict";
var Robot = (function(robotType) {

    robotType.Type = {};

    robotType.Type.Drone = function(name) {
        this.wheels = 0;
    };

    robotType.Type.Bipedal = function(name) {
        this.wheels = 2;
    };

    robotType.Type.Atv = function(name) {
        this.wheels = 4;
    };

    return robotType;
} (Robot || {}));



