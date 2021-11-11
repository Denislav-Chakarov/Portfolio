export const loadHoursStats = () => {
  const counters = document.querySelectorAll(".count");
  const speed = 1000;
  $(".count").css("display", "none");
  document.addEventListener("scroll", () => {
    const offset = -document.getElementById("hoursId").getBoundingClientRect()
      .top;
    if (offset > -550 && $(".count").css("display") == "none") {
      $(".count").css("display", "block");
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute("data-target"));
          const count = parseInt(counter.innerText);
          const increment = Math.trunc(target / speed);
          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  });
};
