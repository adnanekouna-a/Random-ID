// DOM variables
const image = document.querySelector("#id-image")
const first_name = document.querySelector("#first-name")
const last_name = document.querySelector("#last-name")
const nationality = document.querySelector("#nationality")
const gender = document.querySelector("#gender")
const date_of_birth = document.querySelector("#dob")
const phone = document.querySelector("#phone")


fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    first_name.textContent = data.results[0].name.first
    last_name.textContent = data.results[0].name.last
    gender.textContent = data.results[0].gender
    nationality.textContent = data.results[0].location.country
    date_of_birth.textContent = data.results[0].dob.date.slice(0,10)
    phone.textContent = data.results[0].phone
    image.setAttribute("src",data.results[0].picture.large)
  })
  .catch(error => console.error(error));