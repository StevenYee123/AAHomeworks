document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = e => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach(li => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items
  const addPlaces = e => {
    e.preventDefault();

    //get the input text
    const favoriteInput = document.querySelector(".favorite-input");

    //get the value and assign it to a new "li"
    const val = favoriteInput.value;
    favoriteInput.value = "";
    const newLi = document.createElement("li");
    newLi.textContent = val;

    //add item to the list
    const list = document.getElementById("sf-places");
    list.appendChild(newLi);
  };

  const favoriteSubmit = document.querySelector(".favorite-submit");
  favoriteSubmit.addEventListener("click", addPlaces);

  // adding new photos
  // Clicking the "photo-show-button" will show/hide the form to add a puppy
  // when submitted the form will append a new list item containing an <img> tag to the bottom of the "puppy" list
  //remember that an <li> element is going to contain a <img> tag!
  const showForm = e => {
    const divForm = document.querySelector(".photo-form-container");
    if (divForm.className === "photo-form-container hidden") {
      divForm.className = "photo-form-container";
    } else {
      divForm.className = "photo-form-container hidden";
    }
  };

  const photoButton = document.querySelector(".photo-show-button");
  photoButton.addEventListener("click", showForm);

  const photoSubmit = (e) => {
    e.preventDefault(); 
    const photoInput = document.querySelector(".photo-url-input"); 

    //take the val and make the field empty...
    const URL = photoInput.value;
    photoInput.value = "";

    //make and image with the URL
    const img = document.createElement("img");
    img.src = URL;

    //make a new li element and put the img on it...
    const newLi = document.createElement("li");
    newLi.appendChild(img);

    //add photos to doggie list
    const dogPhotos = document.querySelector(".dog-photos");
    dogPhotos.appendChild(newLi);
  }

  const dogSubmit = document.querySelector(".photo-url-submit");
  dogSubmit.addEventListener("click", photoSubmit);
});





  // const photoFormShowButton = document.querySelector(".photo-show-button");
  // photoFormShowButton.addEventListener("click", showPhotoForm);
  // const handlePhotoSubmit = e => {
  //   e.preventDefault();
  //   const photoUrlInput = document.querySelector(".photo-url-input");
  //   const photoUrl = photoUrlInput.value;
  //   photoUrlInput.value = "";
  //   const newImg = document.createElement("img");
  //   newImg.src = photoUrl;
  //   const newPhotoLi = document.createElement("li");
  //   newPhotoLi.appendChild(newImg);
  //   const dogPhotosList = document.querySelector(".dog-photos");
  //   dogPhotosList.appendChild(newPhotoLi);
  // };
  // const photoSubmitButton = document.querySelector(".photo-url-submit");
  // photoSubmitButton.addEventListener("click", handlePhotoSubmit);

