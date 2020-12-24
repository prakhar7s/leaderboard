const playersList = document.querySelector("#players-list");

const loading = document.querySelector("#loading");

setTimeout(() => {
  getUsers();
}, 1500);

function getUsers() {
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      users.slice(0, 5).map((user) => createListItem(user.name, user.email));
      loading.style.display = "none";
    });
}

function createListItem(name, email) {
  const li = document.createElement("li");
  const mark = document.createElement("mark");
  const small = document.createElement("small");
  mark.innerHTML = name;
  small.innerHTML = email;

  li.innerHTML += mark.outerHTML + small.outerHTML;

  playersList.appendChild(li);
}
