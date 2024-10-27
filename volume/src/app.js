// container
let container = document.querySelector("#container");

// tools-data
let toolsData = document.querySelector("#tools-data");

// video
let video = document.querySelector("#video");

// other variables
let videoLoaded = false;
let mouseX;
let mappedValue = 0; // variable for mapped mouse position

// events
window.addEventListener("mousemove", mouseMoveFn, true); // event listener for mousemove
window.addEventListener("keydown", keyPressFn, true); // event listener for keypress

// mouse click function
function mouseClickFn(event) {
  if (videoLoaded) {
    video.muted = false;
  }
}

// key press function to unmute with "M" key
function keyPressFn(event) {
  if (event.key === "m" || event.key === "M") {
    video.muted = false;
  }
}

// mousemove function to map mouseX to a range of 0-1 for volume
function mouseMoveFn(event) {
  mouseX = event.clientX; // get mouse X position
  mappedValue = mapRange(mouseX, 0, window.innerWidth, 0, 1); // map to 0-1 for volume
  video.volume = mappedValue; // set video volume
  toolsData.innerHTML = `Volume: ${(mappedValue * 100).toFixed(0)}%`; // display volume as percentage
}

// map range function
// linearly maps value from the range (a..b) to (c..d)
function mapRange(value, a, b, c, d) {
  value = (value - a) / (b - a);
  return c + value * (d - c);
}
 