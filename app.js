fetch("http://barkwire-api.herokuapp.com/dogs")
  .then(response => response.json())
  .then(dogLi);


function dogLi(response) {
  console.log(response);
  response.dogs.map(dog => {
    const dogli = document.createElement("li");
    dogli.innerHTML = `
    <h2>${dog.name}</h2>
    <p>${dog.description}</p>
    <img src="${dog.imageUrl}"/>
    <p>${dog.imageCaption}</p>
    `;
    document.querySelector("#dogs").appendChild(dogli);
  });
}
