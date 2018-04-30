// ==UserScript==
// @name         BTWB Date Helper - Find and Log
// @namespace    https://russellgeoff.github.io/
// @version      0.1
// @description  Makes it easier to adjust the date on workouts
// @author       You
// @match        https://beyondthewhiteboard.com/workouts/*/workout_sessions/new
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("workout_session_session_date").type = "";
})();

