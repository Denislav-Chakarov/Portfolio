export const loadPercents = () => {
  let percents = [95, 85, 90, 50, 95, 50];
  let skills = document.getElementsByClassName("skillbarFill");
  let temp = 0;
  $(".skillbarFill").css("display", "none");
  document.addEventListener("scroll", () => {
    const offset = -document
      .getElementById("skillSectionId")
      .getBoundingClientRect().top;
    if (offset > -400 && $(".skillbarFill").css("display") == "none") {
      $(".skillbarFill").css("display", "block");
      for (let i = 0; i < skills.length; i++) {
        skills[i].animate([{ width: `0%` }, { width: `${percents[i]}%` }], {
          duration: 1500,
          fill: "forwards",
          easing: "ease-out",
        });
      }
    }
  });
};
