import * as navBar from "/scripts/navJS.js";
import * as skill from "/scripts/skills.js";
import * as portfolio from "/scripts/porfolio.js";
import * as stats from "/scripts/stats.js";
import * as scrolls from "/scripts/scrollTo.js";

var i = 0;
let words = ["UI/UX Designer", "Backend Devolp", "Web Developer"];

setInterval(function () {
  $("#words").text(words[i]);
  i++;
  if (i >= words.length) {
    i = 0;
  }
}, 3000);

navBar.navBar();
navBar.navFixed();
skill.loadPercents();
portfolio.displayWebsites();
portfolio.showSort();
stats.loadHoursStats();
scrolls.scrolls();
scrolls.SectionUnderline();
