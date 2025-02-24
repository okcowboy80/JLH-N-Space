
function randomizeFacts(response) {
  let article = Math.floor(Math.random() * response.length);
  while (response[article].details.length > 300) {
    article = Math.floor(Math.random() * response.length);
  }
  return article;
}

fetch('https://api.spacexdata.com/v4/history')
  .then(response => response.json())
  .then(response => {

    const article = randomizeFacts(response);

    let info = "";
    let title = response[article].title;
    let details = response[article].details;

    info = `<h3>${title}</h3>`;
    info += `<h4>${details}</h4>`
    document.getElementById("speech-paragraph").innerHTML = info;
  })
  .catch(err => console.error(err));

window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== "https://www.snapengage.com") return;
    console.log(event.data);
    console.log(event.data.data);
    // ...
    // Events are present inside event.data
    // You can use data inside event.data by assigning a variable
    // e.g.: let eventPayload = event.data
    let htmlString = "";

    let eventPayload = event.data;
    let data = eventPayload.data;
    let agent = eventPayload.agentEmail;
    let name = eventPayload.data.name;
    let convId = eventPayload.conversationId;
    let type = eventPayload.type;
    let widgetId = eventPayload.data.widgetId;
    htmlString += "<p>Conversation ID: " + convId + "</p>"
    htmlString += "<p>Type: " + type + "</p>"
    htmlString += "<p>Agent: " + agent + "</p>";
    htmlString += "<p>Text: " + data.text + "</p>"
    htmlString += "<p>Name Captured: " + name + "</p>";
    htmlString += "<p>Widget ID: " + widgetId + "</p>"
    let div = document.createElement('div');
    div.style.color = 'white';
    div.innerHTML = htmlString;
    let body = document.querySelector('body');
    body.appendChild(div);
  },
  false
);

