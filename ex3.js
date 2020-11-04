const formData = new FormData();
formData.append("Elizabeth", [{"name": "USA", "year": 2000}, {"name": "Canada", "year": 2001}]);
//I get a 500 server error and I'm not sure why

fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST", 
    body: formData
})
    .then(response => response.json())
    .then(msg => {
        console.log(msg);
    })

    .catch(err => {
        console.error(err.message);
    })