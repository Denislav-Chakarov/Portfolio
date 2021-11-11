export const scrolls = () => {
  const mouseNav = document.getElementsByClassName("mouseNav")[0];
  mouseNav.addEventListener("click", () => {
    document.getElementsByClassName("aboutScroll")[0].scrollIntoView({
      behavior: "smooth",
    });
  });
  const aboutBtn = document.querySelectorAll(".aboutBtn");
  for (let i = 0; i < aboutBtn.length; i++) {
    aboutBtn[i].addEventListener("click", () => {
      document.getElementsByClassName("aboutScroll")[0].scrollIntoView({
        behavior: "smooth",
      });
    });

    const skillBtn = document.querySelectorAll(".skillBtn");
    for (let i = 0; i < skillBtn.length; i++) {
      skillBtn[i].addEventListener("click", () => {
        document.getElementsByClassName("skillsScroll")[0].scrollIntoView({
          behavior: "smooth",
        });
      });
    }
    const homeBtn = document.querySelectorAll(".homeBtn");
    for (let i = 0; i < skillBtn.length; i++) {
      homeBtn[i].addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    const portfolioBtn = document.querySelectorAll(".portfolioBtn");
    for (let i = 0; i < portfolioBtn.length; i++) {
      portfolioBtn[i].addEventListener("click", () => {
        document.getElementsByClassName("PorfolioSection")[0].scrollIntoView({
          behavior: "smooth",
        });
      });
    }
    const experienceBtn = document.querySelectorAll(".experienceBtn");
    for (let i = 0; i < experienceBtn.length; i++) {
      experienceBtn[i].addEventListener("click", () => {
        document.getElementsByClassName("experienceScroll")[0].scrollIntoView({
          behavior: "smooth",
        });
      });
    }
    const contactBtn = document.querySelectorAll(".contactBtn");
    for (let i = 0; i < contactBtn.length; i++) {
      contactBtn[i].addEventListener("click", () => {
        document.getElementsByClassName("contactSection")[0].scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

export const SectionUnderline = () => {
  document.addEventListener("scroll", () => {
    const offset = -document
      .getElementsByClassName("firstSection")[0]
      .getBoundingClientRect().top;
    if (offset > 0 && offset < 400) {
      $(".homeBtn").addClass("viewAction2");
      $(".aboutBtn").removeClass("viewAction");
      $(".skillBtn").removeClass("viewAction");
      $(".portfolioBtn").removeClass("viewAction");
      $(".experienceBtn").removeClass("viewAction");
      $(".contactBtn").removeClass("viewAction");
    } else if (offset > 600 && offset < 1200) {
      $(".homeBtn").removeClass("viewAction2");
      $(".aboutBtn").addClass("viewAction");
      $(".skillBtn").removeClass("viewAction");
      $(".portfolioBtn").removeClass("viewAction");
      $(".experienceBtn").removeClass("viewAction");
      $(".contactBtn").removeClass("viewAction");
    } else if (offset > 1200 && offset < 1600) {
      $(".skillBtn").addClass("viewAction");
      $(".aboutBtn").removeClass("viewAction");
      $(".homeBtn").removeClass("viewAction2");
      $(".portfolioBtn").removeClass("viewAction");
      $(".experienceBtn").removeClass("viewAction");
      $(".contactBtn").removeClass("viewAction");
    } else if (offset > 1600 && offset < 2800) {
      $(".portfolioBtn").addClass("viewAction");
      $(".aboutBtn").removeClass("viewAction");
      $(".homeBtn").removeClass("viewAction2");
      $(".skillBtn").removeClass("viewAction");
      $(".experienceBtn").removeClass("viewAction");
      $(".contactBtn").removeClass("viewAction");
    } else if (offset > 2800 && offset < 3200) {
      $(".portfolioBtn").removeClass("viewAction");
      $(".aboutBtn").removeClass("viewAction");
      $(".homeBtn").removeClass("viewAction2");
      $(".skillBtn").removeClass("viewAction");
      $(".experienceBtn").addClass("viewAction");
      $(".contactBtn").removeClass("viewAction");
    } else if (offset > 3200) {
      $(".portfolioBtn").removeClass("viewAction");
      $(".aboutBtn").removeClass("viewAction");
      $(".homeBtn").removeClass("viewAction2");
      $(".skillBtn").removeClass("viewAction");
      $(".experienceBtn").removeClass("viewAction");
      $(".contactBtn").addClass("viewAction");
    }
  });
};
