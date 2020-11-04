const paintings = [
    {
      "name": "The Starry Night",
      "year": "1889",
      "artist": "Vincent Van Gogh"
    },
    {
      "name": "The Scream",
      "year": "1893",
      "artist": "Edvard Munch"
    },
    {
      "name": "Guernica",
      "year": "1937",
      "artist": "Pablo Picasso"
    }
  ]


var table = document.getElementById("paintings");


for (i of paintings){
    var tRow = document.createElement("tr");
    table.appendChild(tRow);

    var tName = document.createElement("td");
    tName.textContent = i.name;
    tRow.appendChild(tName);

    var tYear = document.createElement("td");
    tYear.textContent = i.year;
    tRow.appendChild(tYear);

    var tArt = document.createElement("td");
    tArt.textContent = i.artist;
    tRow.appendChild(tArt);
}