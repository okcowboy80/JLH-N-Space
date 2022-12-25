function myCallback() {
  let random = Math.floor(Math.random() * 400);
  //const comet = document.getElementById("comet");
  const root = document.documentElement;
  root.style.setProperty("--change", random + "px");
  //comet.style.top = "" + random + "px;";
  //console.log("Random is: " + random + "px;");
}

setInterval(myCallback, 4000);
