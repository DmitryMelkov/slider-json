let http = new XMLHttpRequest();
const content = document.querySelector('.content')

http.open('get', 'json-1.json', true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = '';

    for (let item of products) {
      output += `
      <div class="slider">
       <h3 class="slider__title">${item.title}</h3>
       <span class="slider__subtitle">${item.subtitle}</span>
        <img class="slider__img" src="${item.pic}" alt="slider-img">
      </div>
      `;
    }
    content.innerHTML = output
  }
};
