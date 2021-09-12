"use strict";

const TOPLINKS = document.querySelectorAll(".topLink");
const BOTTOMLINKS = document.querySelectorAll(".bottomLink");
const gridContainer = document.querySelector(".gridContainer");

const products = [
  {
    image: "images/walnut_speakers.png",
    imageDescription:
      "Walnut speakers pointing outwards with amplifier in the middle",
    productName: "Walnut Speakers & Amp",
    cost: 559.0,
  },
  {
    image: "images/maple_lamp.png",
    imageDescription: "Maple bottomed lamp with dome light on top",
    productName: "Maple Lamp",
    cost: 109.0,
  },
  {
    image: "images/walnut_planter.png",
    imageDescription: "Walnut pot with mushrooms and grass growing out top",
    productName: "Walnut Planter",
    cost: 39.0,
  },
  {
    image: "images/m18_chair.png",
    imageDescription:
      "Comfortable looking grey wool chair with wooden legs splayed out",
    productName: "M18 Chair, Grey Wool Felt",
    cost: 330.0,
  },
  {
    image: "images/pilot_stool.png",
    imageDescription:
      "plastic stool molded to fit bottom with rounded wooden legs",
    productName: "Pilot Stool, Black",
    cost: 263.0,
  },
  {
    image: "images/beoplay.png",
    imageDescription: "Rose-Gold speaker Beoplay brand on wooden legs",
    productName: "B&O BeoPlay A9 - Rose Gold",
    cost: 2999.0,
  },
  {
    image: "images/joey_roth.png",
    imageDescription: "Joey Roth computer speakers one big 2 small",
    productName: "Joey Roth CRM-001 Ceramic",
    cost: 495.0,
  },
  {
    image: "images/v5bt_bamboo.png",
    imageDescription:
      "Bamboo material bluetooth speaker with felt for speaker wrapping halfway round speaker unit",
    productName: "V5BT Bamboo Speaker",
    cost: 200.0,
  },
  {
    image: "images/walnut_iphone.png",
    imageDescription: "Phone case made to look like it is made of walnut wood",
    productName: "Walnut Iphone Case",
    cost: 79.0,
  },
  {
    image: "images/walnut_watch.png",
    imageDescription:
      "Interestingly designed watch with walnut face with holes in it (round)",
    productName: "Walnut Watch (Round)",
    cost: 239.0,
  },
  {
    image: "images/polk_audio.png",
    imageDescription:
      "Bluetooth speaker semi circle shaped with polk logo at front and walnut top and bottom panels",
    productName: "Polk Audio Wireless",
    cost: 705.0,
  },
  {
    image: "images/zebra_series.png",
    imageDescription:
      "Side table made of wood with rounded legs that splay outwards",
    productName: "Zebra Series Varberg Table",
    cost: 89.0,
  },
  {
    image: "images/pots_pedestal.png",
    imageDescription:
      "Small tables made of wood with legs in shape of an x horixontally with a shell on the smaller one and a pot on the second one",
    productName: "POTS Pedestal Set",
    cost: 67.0,
  },
  {
    image: "images/soundlink_bluetooth.png",
    imageDescription:
      "Bluetooth Speaker in the shape of a rectangle mostly silver with wooden accent on bottom",
    productName: "Soundlink Bluetooth Mobile",
    cost: 300.0,
  },
  {
    image: "images/wall_clock.png",
    imageDescription:
      "White wall clock with black hands anmd black markers for time around clock face",
    productName: 'Wall Clock OJ Black 31.5"',
    cost: 100.0,
  },
  {
    image: "images/cherry_wood.png",
    imageDescription:
      "Notepad with front cover made to look like cherry wood with title field notes on cover",
    productName: "Cherry Wood Graph 3-Pack",
    cost: 10.0,
  },
  {
    image: "images/laptopStand.jpg",
    imageDescription: "A stand for a laptop made of wood",
    productName: "Maple Laptop Riser",
    cost: 150.0,
  },
  {
    image: "images/blueDeskPad.jpg",
    imageDescription: "A non-stick desk pad matte blue in colour",
    productName: "Matte Desk Pad (Medium Plus / Navy)",
    cost: 60.0,
  },
  {
    image: "images/brass_pen.jpg",
    imageDescription: "Black and walnut pen stand",
    productName: "Black and Walnut Pen Stand Set",
    cost: 100.0,
  },
  {
    image: "images/walnut_desk_shelf.jpg",
    imageDescription:
      "Walnut desk shelf with two tv's next to each other on top of the shelf",
    productName: "Walnut Desk Shelf",
    cost: 220.0,
  },
  {
    image: "images/desk_tray.jpg",
    imageDescription: "Desk tray with miscellaneous items in each section",
    productName: "Desk Organizer Tray",
    cost: 120.0,
  },
];

const ADDCLASS = function (arr, index) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove("selected");
  }
  arr[index].classList.add("selected");
};

const displayProductItems = function (productArr, startIndex, finalIndex) {
  let displayProducts = productArr.slice(startIndex, finalIndex).map((prod) => {
    return `<div class="gridItem">
              <img
                src="${prod.image}"
                alt="${prod.imageDescription}"
              />
              <p>${prod.productName}</p>
              <p>$${prod.cost.toFixed(2)}</p>
            </div>`;
  });
  displayProducts = displayProducts.join("");
  gridContainer.innerHTML = displayProducts;
};

displayProductItems(products, 0, 16);
BOTTOMLINKS[0].addEventListener("click", function (e) {
  e.preventDefault();
  ADDCLASS(BOTTOMLINKS, 0);
  gridContainer.innerHTML = "";
  displayProductItems(products, 0, 16);
});

BOTTOMLINKS[1].addEventListener("click", function (e) {
  e.preventDefault();
  ADDCLASS(BOTTOMLINKS, 1);
  gridContainer.innerHTML = "";
  displayProductItems(products, 16, 32);
});
