fetch("https://api.github.com")
    .then(response => response.json())
    .then(content => {
        Octokit.request('GET /eliphu')

        var picPlace = document.createElement("p");
        var pic = document.createElement("img");
        document.appendChild(picPlace);
        pic.src = content.avatar_url;
        picPlace.appendChild(pic);
    })
    .catch(err => {
        console.error(err.message);
    })