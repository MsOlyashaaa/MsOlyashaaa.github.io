const usersDiv = document.getElementById('users');

function addUser() {
  fetch('https://randomuser.me/api').then((r) => {
    return r.json();
  }).then((r) => {
    const fullUser = r.results[0];
    const person = new Person(
      fullUser.picture,
      fullUser.name,
      fullUser.location.country,
      fullUser.location.postcode,
      fullUser.phone);
    person.createPersonDiv();
  });
}

function clearUsers() {
  while (usersDiv.firstChild) usersDiv.removeChild(usersDiv.firstChild);
}

class Person {
  constructor(picture, name, country, postcode, phone) {
    this.picture = picture;
    this.name = name;
    this.country = country;
    this.postcode = postcode;
    this.phone = phone;
  }

  getFullName() {
    return `${this.name.title} ${this.name.first} ${this.name.last}`;
  }

  createPersonDiv() {
    const user = document.createElement('div');
    user.id = 'user';

    const imgElement = document.createElement('img');
    imgElement.src = this.picture.medium;
    imgElement.alt = 'user photo'
    user.appendChild(imgElement);

    const info = document.createElement('span');
    info.innerHTML = `${this.getFullName()}<br>Country: ${this.country}<br>Postcode: ${this.postcode}<br>Phone: ${this.phone}`;
    user.appendChild(info);

    usersDiv.appendChild(user);

    console.log(this.picture.thumbnail, this.getFullName(), this.country, this.postcode, this.phone);
  }
}