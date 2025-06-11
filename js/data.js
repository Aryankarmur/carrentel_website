const pickupLocation = document.querySelector("#pickupLocation");
const dropLocation = document.querySelector("#dropLocation");
const pickupDate = document.querySelector("#pickupDate");
const pickupTime = document.querySelector("#pickupTime");
const selectedCar = document.querySelector("#selectedCar");
const username = document.querySelector("#name");
const contact = document.querySelector("#contact");
const submitBtn = document.querySelector("#dataSubmit");
const error = document.getElementById("error");

contact.addEventListener("input", () => {
  const value = contact.value;

  // Allow only digits
  contact.value = value.replace(/\D/g, "");

  // Show error if not 10 digits
  if (contact.value.length > 0 && contact.value.length !== 10) {
    error.textContent = "Contact number must be exactly 10 digits";
  } else {
    error.textContent = "";
  }
});

// button on click event
submitBtn.addEventListener("click", () => {
  if (
    contact.value === "" ||
    dropLocation.value === "Drop Location" ||
    pickupDate.value === "" ||
    pickupLocation.value === "Pickup Location" ||
    pickupTime.value === "" ||
    selectedCar.value === "Select A Car" ||
    username.value === ""
  ) {
    alert("Plese Enter Your Data! ");
  } else {
    if (error.textContent === "") {
      alert("Your Cab Is Booked! ");
      const url =
        "https://wa.me/+916352481426?text=" +
        "Pickup Location: " +
        pickupLocation.value +
        "%0a" +
        "Drop Location: " +
        dropLocation.value +
        "%0a" +
        "Pickup Date: " +
        pickupDate.value +
        "%0a" +
        "Pickup Time: " +
        pickupTime.value +
        "%0a" +
        "Selected Car: " +
        selectedCar.value +
        "%0a" +
        "User Name: " +
        username.value +
        "%0a" +
        "Contact Number: " +
        contact.value +
        "%0a" +
        "Thanks!";
      window.open(url).focus();
    } else {
      alert("Please Enter Valid Contact Number!");
    }
  }
});
