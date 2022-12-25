
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

