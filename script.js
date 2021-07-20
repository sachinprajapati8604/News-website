//creating object for key and base url
const NewsApi = {
  key: '54ec9bc7896f46439460eed2180e8708',
  baseurl: 'https://newsapi.org/v2/'
}

function topHeadlines() {
  fetch(`${NewsApi.baseurl}top-headlines?country=in&apiKey=${NewsApi.key}`)
    .then(res => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      let parent = document.getElementById('parent');
      let heading = document.createElement('h2');
      heading.id = 'heading';
      parent.append(heading);
      heading.innerHTML = `Top Indian Headlines`;
      let hr = document.createElement('hr');
      parent.append(hr);
      let row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';
      data.articles.slice(0, 4).forEach(art => {
        let date = new Date(art.publishedAt);
        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
          `
            <div class="card h-100">
            <img src="${art.urlToImage}" class="card-img-top" alt="Image not available">
            <div class="card-body">
              <h5 class="card-title">${art.title}</h5>
              <p class="card-text max-lines">${art.description}</p>
              <h6 class="text">Source : <span class="text-muted">${art.source.name}</span>  <a href="${art.url}">view full article </a> </h6>
            </div>
            <div class="card-footer">
              <small class="text-muted">article updated on  ${dateManage(date)}</small>
            </div>
          </div>
        
            `;
        row.append(col);

      });

      parent.append(row);
    })
}

function TechnologyNews() {
  fetch(`${NewsApi.baseurl}top-headlines?country=in&category=technology&apiKey=${NewsApi.key}`)
    .then(res => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      let parent = document.getElementById('parent');
      let heading = document.createElement('h2');
      heading.id = 'heading';
      parent.append(heading);

      heading.innerHTML = `Top Technology Headlines`;
      let hr = document.createElement('hr');
      parent.append(hr);
      let row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';
      data.articles.slice(0, 4).forEach(art => {
        let date = new Date(art.publishedAt);
        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
          `
            <div class="card h-100">
            <img src="${art.urlToImage}" class="card-img-top" alt="Image not available">
            <div class="card-body">
              <h5 class="card-title">${art.title}</h5>
              <p class="card-text max-lines">${art.description}</p>
              <h6 class="text">Source : <span class="text-muted">${art.source.name}</span>  <a href="${art.url}">view full article </a> </h6>
            </div>
            <div class="card-footer">
              <small class="text-muted">article updated on  ${dateManage(date)}</small>
            </div>
          </div>
        
            `;
        row.append(col);
      });
      parent.append(row);
    })
}

function BusinessNews() {
  fetch(`${NewsApi.baseurl}top-headlines?country=in&category=business&apiKey=${NewsApi.key}`)
    .then(res => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      let parent = document.getElementById('parent');
      let heading = document.createElement('h2');
      heading.id = 'heading';
      parent.append(heading);

      heading.innerHTML = `Top Business Headlines`;
      let hr = document.createElement('hr');
      parent.append(hr);
      let row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';
      data.articles.slice(0, 4).forEach(art => {
        let date = new Date(art.publishedAt);
        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
          `
            <div class="card h-100">
            <img src="${art.urlToImage}" class="card-img-top" alt="Image not available">
            <div class="card-body">
              <h5 class="card-title">${art.title}</h5>
              <p class="card-text max-lines">${art.description}</p>
              <h6 class="text">Source : <span class="text-muted">${art.source.name}</span>  <a href="${art.url}">view full article </a> </h6>
            </div>
            <div class="card-footer">
              <small class="text-muted">article updated on  ${dateManage(date)}</small>
            </div>
          </div>
        
            `;
        row.append(col);
      });
      parent.append(row);
    })
}

function SportsNews() {
  fetch(`${NewsApi.baseurl}top-headlines?country=in&category=sports&apiKey=${NewsApi.key}`)
    .then(res => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      let parent = document.getElementById('parent');
      let heading = document.createElement('h2');
      heading.id = 'heading';
      parent.append(heading);

      heading.innerHTML = `Top Sports Headlines`;
      let hr = document.createElement('hr');
      parent.append(hr);
      let row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';
      data.articles.slice(0, 4).forEach(art => {
        let date = new Date(art.publishedAt);
        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
          `
            <div class="card h-100">
            <img src="${art.urlToImage}" class="card-img-top" alt="Image not available">
            <div class="card-body">
              <h5 class="card-title">${art.title}</h5>
              <p class="card-text max-lines">${art.description}</p>
              <h6 class="text">Source : <span class="text-muted">${art.source.name}</span>  <a href="${art.url}">view full article </a> </h6>
            </div>
            <div class="card-footer">
              <small class="text-muted">article updated on  ${dateManage(date)}</small>
            </div>
          </div>
        
            `;
        row.append(col);
      });
      parent.append(row);
    })
}

function ScienceNews() {
  fetch(`${NewsApi.baseurl}top-headlines?country=in&category=science&apiKey=${NewsApi.key}`)
    .then(res => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      let parent = document.getElementById('parent');
      let heading = document.createElement('h2');
      heading.id = 'heading';
      parent.append(heading);

      heading.innerHTML = `Top Science Headlines`;
      let hr = document.createElement('hr');
      parent.append(hr);
      let row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';
      data.articles.slice(0, 4).forEach(art => {
        let date = new Date(art.publishedAt);
        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
          `
            <div class="card h-100">
            <img src="${art.urlToImage}" class="card-img-top" alt="Image not available">
            <div class="card-body">
              <h5 class="card-title">${art.title}</h5>
              <p class="card-text max-lines">${art.description}</p>
              <h6 class="text">Source : <span class="text-muted">${art.source.name}</span>  <a href="${art.url}">view full article </a> </h6>
            </div>
            <div class="card-footer">
              <small class="text-muted">article updated on  ${dateManage(date)}</small>
            </div>
          </div>
        
            `;
        row.append(col);
      });
      parent.append(row);
    })
}

function HealthNews() {
  fetch(`${NewsApi.baseurl}top-headlines?country=in&category=health&apiKey=${NewsApi.key}`)
    .then(res => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      let parent = document.getElementById('parent');
      let heading = document.createElement('h2');
      heading.id = 'heading';
      parent.append(heading);

      heading.innerHTML = `Top Health Headlines`;
      let hr = document.createElement('hr');
      parent.append(hr);
      let row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';
      data.articles.slice(0, 4).forEach(art => {
        let date = new Date(art.publishedAt);
        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
          `
            <div class="card h-100">
            <img src="${art.urlToImage}" class="card-img-top" alt="Image not available">
            <div class="card-body">
              <h5 class="card-title">${art.title}</h5>
              <p class="card-text max-lines">${art.description}</p>
              <h6 class="text">Source : <span class="text-muted">${art.source.name}</span>  <a href="${art.url}">view full article </a> </h6>
            </div>
            <div class="card-footer">
              <small class="text-muted">article updated on  ${dateManage(date)}</small>
            </div>
          </div>
        
            `;
        row.append(col);
      });
      parent.append(row);
    })
}

function EntertainmentNews() {
  fetch(`${NewsApi.baseurl}top-headlines?country=in&category=entertainment&apiKey=${NewsApi.key}`)
    .then(res => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      let parent = document.getElementById('parent');
      let heading = document.createElement('h2');
      heading.id = 'heading';
      parent.append(heading);
      heading.innerHTML = `Top Entertainment Headlines`;
      let hr = document.createElement('hr');
      parent.append(hr);
      let row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';
      data.articles.slice(0, 4).forEach(art => {
        let date = new Date(art.publishedAt);
        let col = document.createElement('div');
        col.className = 'col-3';
        col.innerHTML =
          `
            <div class="card h-100">
            <img src="${art.urlToImage}" class="card-img-top" alt="Image not available">
            <div class="card-body">
              <h5 class="card-title">${art.title}</h5>
              <p class="card-text max-lines">${art.description}</p>
              <h6 class="text">Source : <span class="text-muted">${art.source.name}</span>  <a href="${art.url}">view full article </a> </h6>
            </div>
            <div class="card-footer">
              <small class="text-muted">article updated on  ${dateManage(date)}</small>
            </div>
          </div>
        
            `;
        row.append(col);
      });
      parent.append(row);
    })
}

window.addEventListener('load', (event) => {

  startTime();
  // ul.append(datetime)
  // console.log(datetime)
  EntertainmentNews();
  HealthNews();
  ScienceNews();
  SportsNews();
  BusinessNews();
  TechnologyNews();
  topHeadlines();
})

//date manage for return  current date
function dateManage(dateArg) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];
  let hours = dateArg.getHours();
  let minute = dateArg.getMinutes();
  // console.log(year+" "+date+" "+day+" "+month);
  return `${date} ${month} ${year} at ${hours}:${minute}`
}

function startTime() {
  const today = new Date();
  let d = today.getDate();
  let mon = today.getMonth();
  let y = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('datetime_a').innerHTML = `${d}-${mon + 1}-${y} , ${h}:${m}:${s}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

