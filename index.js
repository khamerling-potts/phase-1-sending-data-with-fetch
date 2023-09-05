// Add your code here
function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((data) => handleResponse(data))
    .catch((error) => {
      document.querySelector("body").innerHTML = error.message;
    });
}

function handleResponse(user) {
  console.log(user);
  document.querySelector("body").innerHTML = user.id;
}
