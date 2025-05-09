const mediaArray = [
  {
    imageID: 0,
    imageSrc: "./media/2024-12-02_16-40-55_2715-Frogs-0015.svg",
    imageAlt: "Majestic frog facing slightly left.",
  },
  {
    imageID: 1,
    imageSrc: "./media/2024-12-02_17-31-24_3135-Squirrels-0003.svg",
    imageAlt: "Squirrel sitting on its haunches, pretending to hold a nut.",
  },
  {
    imageID: 2,
    imageSrc: "./media/2024-12-04_11-45-44_4441-Hedgehog-0002.svg",
    imageAlt: "A cute hedgehog standing on four short legs, facing left",
  },
];

function updateBackground(idIndex) {
  // ask me if I've ever done this before!
  if (idIndex >= mediaArray.length) {
    console.log("updateBackground called with out of range index - ignored");
    return;
  }

  // get id of any existing element with class of "theBackground"
  let existingID = document.getElementsByClassName("theBackground");

  // check if we have one, or more - what happens if we have more? do we get an array or null or just the first found - so many questions so little time.
  // check if id is the same as current displayed image - if so just exit

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
    let newThumb = document.createElement("img");
    // set the src
    newThumb.setAttribute("src", mediaArray[i].imageSrc);
    // TODO temp image size until CSS done
    newThumb.setAttribute("width", "50");
    document.getElementById("thumbnailsID").appendChild(newThumb);
  }
}

// testing
populateThumbnails();
updateBackground(1);

// testing
//updateBackground(2);

// list of media still to add to the media array
//
// 2024-12-02_16-59-55_3802-Frogs-0049.svg
//
// 2024-12-02_17-38-17_2518-Squirrels-0018.svg
// 2024-12-04_11-45-44_4441-Hedgehog-0002.svg
// 2024-12-04_12-36-06_6434-Rabbit-0004.svg
// 2024-12-04_12-38-54_8810-Rabbit-0011.svg
// 2024-12-04_13-36-31_7882-Elephant-0001.svg
// 2024-12-04_14-17-49_8608-Elephant-0085.svg
// 2024-12-04_15-33-20_1483-Duck-0010.svg
// 2024-12-04_16-39-36_8198-BearLogo-0047.svg
// 2024-12-04_17-08-36_3238-BearLogo-0070.svg
// 2024-12-05_13-03-06_9318-Cat-0014.svg
// 2024-12-05_13-49-49_8735-Chicken-0008.svg
// 2024-12-05_13-50-37_2575-Chicken-0009.svg
