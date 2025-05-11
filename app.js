// I bet theres a way to place this in an external file!
const mediaArray = [
  {
    imageID: 0,
    imageSrc: "./media/2024-12-02_16-40-55_2715-Frogs-0015.svg",
    imageAlt: "Majestic frog facing slightly right.",
  },
  {
    imageID: 1,
    imageSrc: "./media/2024-12-02_17-31-24_3135-Squirrels-0003.svg",
    imageAlt: "Squirrel sitting on its haunches, pretending to hold a nut.",
  },
  {
    imageID: 2,
    imageSrc: "./media/2024-12-04_11-45-44_4441-Hedgehog-0002.svg",
    imageAlt: "A cute hedgehog standing on four short legs, facing left.",
  },
  {
    imageID: 3,
    imageSrc: "./media/2024-12-04_15-33-20_1483-Duck-0010.svg",
    imageAlt: "A cute duck, facing left.",
  },
  {
    imageID: 4,
    imageSrc: "/media/2024-12-05_13-49-49_8735-Chicken-0008.svg",
    imageAlt: "A cute Chicken facing directly at you.",
  },
  {
    imageID: 5,
    imageSrc: "/media/2024-12-04_12-38-54_8810-Rabbit-0011.svg",
    imageAlt: "A Rabbit with long ears, facing left",
  },
  {
    imageID: 6,
    imageSrc: "/media/2024-12-04_13-36-31_7882-Elephant-0001.svg",
    imageAlt: "A majestic elephant, facing you front on",
  },
  {
    imageID: 7,
    imageSrc: "/media/2024-12-04_17-08-36_3238-BearLogo-0070.svg",
    imageAlt: "A face of a friendly bear, the kind used for logo",
  },
  {
    imageID: 8,
    imageSrc: "/media/2024-12-02_16-59-55_3802-Frogs-0049.svg",
    imageAlt: "A frog, facing left",
  },
  {
    imageID: 9,
    imageSrc: "/media/2024-12-05_13-03-06_9318-Cat-0014.svg",
    imageAlt: "A small young cat, waiting for attention",
  },
  {
    imageID: 10,
    imageSrc: "/media/2024-12-02_17-38-17_2518-Squirrels-0018.svg",
    imageAlt:
      "A Squirrel sitting on its hind legs, with front paws raised as if eating.",
  },
  {
    imageID: 11,
    imageSrc: "/media/2024-12-04_12-36-06_6434-Rabbit-0004.svg",
    imageAlt: "A cute bunny sitting, facing you",
  },
  {
    imageID: 12,
    imageSrc: "/media/2024-12-04_14-17-49_8608-Elephant-0085.svg",
    imageAlt: "An elephant, appears to be sitting,facing you",
  },
  {
    imageID: 13,
    imageSrc: "/media/2024-12-04_16-39-36_8198-BearLogo-0047.svg",
    imageAlt: "A small teddy bear, facing you",
  },
  {
    imageID: 14,
    imageSrc: "/media/2024-12-05_13-50-37_2575-Chicken-0009.svg",
    imageAlt: "An adult chicken standing, facing left",
  },
];

let currentImageIndex = 0;

function updateBackground(idIndex) {
  if (idIndex >= mediaArray.length || idIndex < 0) {
    console.log("updateBackground called with out of range index - ignored");
    return;
  }
  document.getElementById("backgroundID").innerHTML = "";
  const newImage = document.createElement("img");
  newImage.setAttribute("src", mediaArray[idIndex].imageSrc);
  newImage.setAttribute("alt", mediaArray[idIndex].imageAlt);
  newImage.setAttribute("class", "theBackground");
  newImage.setAttribute("id", mediaArray[idIndex].imageID);

  document.getElementById("backgroundID").appendChild(newImage);
}

function populateThumbnails() {
  for (let i = 0; i < mediaArray.length; i++) {
    const newThumb = document.createElement("img");

    newThumb.setAttribute("src", mediaArray[i].imageSrc);
    newThumb.setAttribute("alt", mediaArray[i].imageAlt);
    newThumb.setAttribute("id", mediaArray[i].imageID);
    newThumb.setAttribute("class", "thumbnail");
    newThumb.addEventListener("click", function (event) {
      const idx = event.target.id;
      clearAllBorders();
      this.setAttribute("border", "3px solid");
      currentImageIndex = Number(idx);
      updateBackground(Number(idx));
    });

    document.getElementById("thumbnailsID").appendChild(newThumb);
  }
}

// a bit of a hack but gets the job done when clicking a thumbnail
function clearAllBorders() {
  let thumbs = document
    .getElementById("thumbnailsID")
    .getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].setAttribute("border", "");
  }
}

// there seems to be some debate over using document or window onload
// it seems that window is better supported at this time
window.onload = function () {
  populateThumbnails();
  updateBackground(currentImageIndex);
  document
    .getElementById("thumbnailsID")
    .getElementsByClassName("thumbnail")
    [currentImageIndex].setAttribute("border", "3px solid");

  // attach call function to the thumbnailsID container to handle arrow key presses
  document
    .getElementById("thumbnailsID")
    .addEventListener("keydown", function (event) {
      // console.log("Key down event:", event);
      // console.log("the key", event.key);

      // reacting to ArrowUp and left, only if currentImageIndex is in range
      if (
        (event.key === "ArrowUp" || event.key === "ArrowLeft") &&
        currentImageIndex > 0
      ) {
        const thumbs = document
          .getElementById("thumbnailsID")
          .getElementsByClassName("thumbnail");
        thumbs[currentImageIndex].setAttribute("border", ""); // clear the old
        currentImageIndex--;
        thumbs[currentImageIndex].setAttribute("border", "3px solid"); // highlight the new
        updateBackground(currentImageIndex);
      }

      // reacting to ArrowDown and right, only if currentImageIndex is in range
      if (
        (event.key === "ArrowDown" || event.key === "ArrowRight") &&
        currentImageIndex < mediaArray.length - 1
      ) {
        // get array of thumbnail images within thumbnailsID element
        const thumbs = document
          .getElementById("thumbnailsID")
          .getElementsByClassName("thumbnail");
        thumbs[currentImageIndex].setAttribute("border", ""); // clear the old
        currentImageIndex++;
        thumbs[currentImageIndex].setAttribute("border", "3px solid"); // highlight the new
        updateBackground(currentImageIndex);
      }
    });
};
