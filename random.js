function myCallback() {
  let random = Math.floor(Math.random() * 400);
  let scale = Math.floor(Math.random() * 100);
  //const comet = document.getElementById("comet");
  const root = document.documentElement;
  root.style.setProperty("--change", random + "px");
  root.style.setProperty("--scale", scale + "px");
  //comet.style.top = "" + random + "px;";
  //console.log("Random is: " + random + "px;");
}

setInterval(myCallback, 4000);
