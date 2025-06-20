const requestUrl = "https://api.github.com/users/the-tushar-sonar";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    // console.log(typeof data);
    // console.log(data.avatar_url);
    // console.log(data.name);
    // console.log(data.followers);

    document.querySelector("#name").textContent = data.name;
    document.querySelector("#pic").src = data.avatar_url;
    document.querySelector("#followers").textContent = `Followers : ${data.followers}`;
    document.querySelector(".add-friend").href = data.html_url;
  }
};
xhr.send();