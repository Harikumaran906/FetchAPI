
function getUsers() {
  const usersDiv = document.getElementById("users");
  usersDiv.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.forEach(function(user) {
        const div = document.createElement("div");
        div.className = "userbox";
        div.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>City: ${user.address.city}</p>
        `;
        usersDiv.appendChild(div);
      });
    })
    .catch(function(error) {
      usersDiv.innerHTML = "Something went wrong";
      console.log("Error happened:", error);
    });
}

window.onload = getUsers;
document.getElementById("reload").addEventListener("click", getUsers);
