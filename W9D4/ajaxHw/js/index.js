console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: "GET",
  URL:
    "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=82ed46a0114622681521ab40bbe31a5d",
  success(ele) {
    console.log(`Here's what we have: ${ele}`);
  },
  error() {
    console.log("Uh oh! Something unexpected happened...");
  }
});
// Add another console log here, outside your AJAX request
console.log("Finished!!");