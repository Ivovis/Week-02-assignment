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

function updateBackground(idIndex) {
  // ask me if I've ever done this before!
  if (idIndex >= mediaArray.length) {
    console.log("updateBackground called with out of range index - ignored");
    return;
  }

  // clear any elements within the background container
  // I'll need to change this later if I add a transition effect between changing backgrounds
  document.getElementById("backgroundID").innerHTML = "";

  // make img element
  let newImage = document.createElement("img");

  // set image source
  newImage.setAttribute("src", mediaArray[idIndex].imageSrc);
  // set alt text
  newImage.setAttribute("alt", mediaArray[idIndex].imageAlt);
  // set class
  newImage.setAttribute("class", "theBackground");
  // set an id to the index
  newImage.setAttribute("id", mediaArray[idIndex].imageID);
  // TODO temp image size until CSS done
  newImage.setAttribute("width", "200");
  // add it to the container
  document.getElementById("backgroundID").appendChild(newImage);

  // remove old image if it exists (or use for transition later)
}

function populateThumbnails() {
  // get the thumbnail container
  let tc = document.getElementById("thumbnailsID");

  // loop through all the images in the array and add each one to the container
  for (let i = 0; i < mediaArray.length; i++) {
    // create the element to hold the thumbnail
    const newThumb = document.createElement("img");

    newThumb.setAttribute("src", mediaArray[i].imageSrc);
    //  maybe text to the alt text to include its function to change the background image
    newThumb.setAttribute("alt", mediaArray[i].imageAlt);
    newThumb.setAttribute("id", mediaArray[i].imageID);
    newThumb.setAttribute("class", "thumbnail");

    // TODO temp image size until CSS done
    //newThumb.setAttribute("width", "50");

    // attach listener to the element
    newThumb.addEventListener("click", function (event) {
      const idx = event.target.id;

      // leaving the below comment in, is was used to test for expected behavior

      //   console.log(
      //     "id from the event listener '",
      //     idx,
      //     "' is type of ",
      //     typeof idx
      //   );

      updateBackground(Number(idx));
    });
    // attach the element to the container
    document.getElementById("thumbnailsID").appendChild(newThumb);
  }
}

// was testing is now init!
populateThumbnails();
updateBackground(1);
