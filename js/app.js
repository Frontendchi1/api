const overlay = document.querySelector('.overlay')
const art = document.querySelector('.article-list')


const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState == 4 && request.status == 200) {
    const data = JSON.parse(request.responseText);
    updateUI(data);
    overlay.classList.add('hidden')
  } else if (request.readyState == 4) {
    console.log("error");
    overlay.classList.add('hidden')
  } else {
    overlay.classList.remove('hidden')
  }
});

request.open("GET", "http://localhost:3000/articles");
request.send();

function updateUI(data) {
  data.forEach((article) => {
    console.log(article);
  });
}
