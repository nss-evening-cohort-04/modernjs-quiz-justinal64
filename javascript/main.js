"use strict";
var Robot;
const $playerName = $('#player-name');
const $playerRobot = $('#robot-player');
const $enemyName = $('#enemy-name');
const $enemyRobot = $('#robot-enemy');
const $attack = $('#attack');
let player = new Robot.robot();
let enemy = new Robot.robot();

// eventListeners
// Once the input field loses focus player.playerName field is assigned the value
$playerName.focusout(() => {
    player.playerName = $playerName.val();
});

// eventListener for the "select" for the player
$playerRobot.change(() => {
    $.each(Robot.Model, (event, index) => {
        if($playerRobot.val() === event) {
            player.setClass(new index());
        }
    });
});

// Once the input field loses focus enemy.playerName field is assigned the value
$enemyName.focusout(() => {
    enemy.playerName = $enemyName.val();
});

// eventListener for the "select" for the enemy
$enemyRobot.change(() => {
    $.each(Robot.Model, (event, index) => {
        if($enemyRobot.val() === event) {
            enemy.setClass(new index());
        }
    });
});

// Logic for the attack button
$attack.click(() => {
    let damage = player.attack(enemy, player);
    populateLogs(enemy.playerName, player.playerName, damage);
    if(enemy.class.health <= 0) {
        $('#combat').prepend(`<div class="result">${player.playerName} WON THE FIGHT!!</div>`);
        tryAgain();
    } else {
        damage = enemy.attack(player, enemy);
        populateLogs(player.playerName, enemy.playerName, damage);
    }
    if(player.class.health <= 0) {
        $('#combat').prepend(`<div class="result">${enemy.playerName} WON THE FIGHT!!</div>`);
        tryAgain();
    }
});

// Populate select options
$.each(Robot.Model, (event, index) => {
    if(event != "randomValue") {
        $playerRobot.append(`<option value="${event}">${event}</option>`);
        $enemyRobot.append(`<option value="${event}">${event}</option>`);
    }
});

// Populate battle log field
function populateLogs(target, attacking, damage) {
    $('#combat').prepend(`<div>${attacking} hit ${target} for ${damage}</div>`);
}

// Used to add a button that will let the user reload the page to play again.
function tryAgain() {
    // disable attack button
    $attack.prop('disabled', true);
    // add try again button to page. This will reload the page when clicked.
    $('#try-again').append(`<button type="button" href="#" class="btn btn-success" onClick="window.location.reload()">Try Again</button>`);
}


