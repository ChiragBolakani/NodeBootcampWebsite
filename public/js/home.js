renderMap();

function renderMap() {
  mapboxgl.accessToken = `pk.eyJ1IjoiZGpiZWdnaW5uenoiLCJhIjoiY2t1bzZ4YzNnMDB2MTJvcDVsMTZnZTFneSJ9.8OLKPweP0-TZMWuUIu7tNw`;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.060982, 42.35725],
    zoom: 18,
  });
}

function subscribe() {
  if (document.getElementById("email").value !== "") {
    const data = {
      email: document.getElementById("email").value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/home/test", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
    console.log("req sent...");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        const serverResponse = JSON.parse(xhr.response);
        alert(serverResponse.message);
      }
    };
  } else {
    alert("Please enter an email");
  }
}
