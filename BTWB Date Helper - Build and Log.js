// ==UserScript==
// @name         BTWB Date Helper - Build and Log
// @namespace    https://russellgeoff.github.io/
// @version      0.1
// @description  Makes it easier to adjust the date on workouts
// @author       You
// @match        https://beyondthewhiteboard.com/workouts/logger
// @match        https://beyondthewhiteboard.com/workouts/logger/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var run = function() {
        if (location.hash.substr(0,8) != '#log?bto') return;

        setTimeout(function () {
        document.getElementById("workout_session_performedDate").type = "";
        }, 500);
    };

    run();
    window.onhashchange = run;
})();

