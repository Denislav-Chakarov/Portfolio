const animateSort = () => {
  const list2 = document.querySelector(".PortfolioRow").animate(
    [
      { opacity: "0.5", transform: "translateY(5%)" },
      { opacity: "1", transform: "translateY(0%)" },
    ],
    {
      duration: 800,
    }
  );
};

let list_items = [
  {
    name: "Project: Nebula",
    url: "https://nebula-water.netlify.app/",
    img: "nebulaThumb.PNG",
    tag: "Web_Design",
  },
  {
    name: "Project: Noble-shop",
    url: "https://noble-shop.netlify.app/",
    img: "nobleThumb.PNG",
    tag: "Web_Design",
  },
  {
    name: "Project: Foxium",
    url: "#",
    img: "foxiumThumb.PNG",
    tag: "PHP",
  },
  {
    name: "Project: PhpIntern",
    url: "#",
    img: "phpinternThumb.PNG",
    tag: "PHP",
  },
  {
    name: "Project: Ezium",
    url: "https://ezium.netlify.app/",
    img: "eziumThumb.PNG",
    tag: "Web_Design",
  },
];
let newArr = [];

export const displayWebsites = () => {
  const container = document.querySelector(".PortfolioRow");
  container.innerHTML = "";
  const PortfolioHTML = newArr
    .map((website) => {
      const { img, name, url } = website;
      return (
        `<div class="col-12 col-lg-4 ">
        <div class='WebsiteContainer'>
        <img class='portfolioImg' width="450" height="300" src="img/` +
        img +
        `"
        />
        <div class='img_overlay'>
           <div class='img_title'>` +
        name +
        `</div>
           <a href='` +
        url +
        `' target='_blank' class='goToWebsite'>visit</a>
         </div>
         </div>
      </div>`
      );
    })
    .join("");
  container.innerHTML = PortfolioHTML;
  return container;
};

for (var i = 0; i < list_items.length; i++) {
  newArr.push(list_items[i]);
}

const defaultSort = () => {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    newArr.push(list_items[j]);
  }
};
const WebDesignSort = () => {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    if (list_items[j].tag === "Web_Design") {
      newArr.push(list_items[j]);
    }
  }
};
const PhpSort = () => {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    if (list_items[j].tag === "PHP") {
      newArr.push(list_items[j]);
    }
  }
};

export const showSort = () => {
  $(".websiteTypes li").eq(0).addClass("active");
  $(".websiteTypes li").click(function (e) {
    let index = $(".websiteTypes li").index(this);
    if (e.target.innerHTML === "ALL") {
      defaultSort();
      displayWebsites();
      $(".websiteTypes li").removeClass("active");
      $(".websiteTypes li").eq(index).addClass("active");
    } else if (e.target.innerHTML === "WEB DESIGN") {
      WebDesignSort();
      displayWebsites();
      $(".websiteTypes li").removeClass("active");
      $(".websiteTypes li").eq(index).addClass("active");
    } else if (e.target.innerHTML === "PHP") {
      console.log("yep");
      PhpSort();
      displayWebsites();
      $(".websiteTypes li").removeClass("active");
      $(".websiteTypes li").eq(index).addClass("active");
    }
  });
};
