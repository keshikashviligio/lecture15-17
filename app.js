// selectors
// const h1 = document.querySelector('h1');
// if(h1){
//    h1.style.color = 'red';
// }
// const paragraphs = document.querySelectorAll('p.p-3');
//
// // console.log('paragraphs', paragraphs);
//
// const idSelector = document.getElementById('page-title');
// const h1ByTagName = document.getElementsByTagName('p');
// selectors //

// console.log(idSelector, h1ByTagName);
// console.log(document);
// console.log(h1);

// Create element, delete, append, change attributes
const newDiv = document.createElement('div');
// newDiv.innerText = 'New div text content';
// newDiv.innerText = '<strong>New div text content</strong>';
// newDiv.innerHTML = '<strong>New div text content</strong>';
const newStrong = document.createElement('strong');
newStrong.innerText = 'New div text content';
newDiv.appendChild(newStrong);
newDiv.classList.add('new-div');

document.body.appendChild(newDiv);
const h1 = document.querySelector('h1');
if (h1) {
  // h1.classList.add('new-class-name-for-h1');
  // h1.classList.remove('new-class-name-for-h1');
  // h1.classList.replace('new-class-name-for-h1', 'very-new-class');
  // h1.classList.toggle('new-class-name-for-h1');
  // setTimeout(() => {
  //   h1.classList.toggle('new-class-name-for-h1');
  // }, 5000)
  h1.setAttribute('title', 'this is h1');
  h1.setAttribute('data-id', 10);
  console.log(h1.getAttribute('id'));
}
const newDivFromDom = document.querySelector('.new-div');
if (newDivFromDom) {
  console.log(newDivFromDom.classList);
  newDivFromDom.remove();
}
// setTimeout(() => {
//   const h1 = document.querySelector('h1');
//   if(h1){
//     h1.remove();
//   }
// }, 3000)
// console.log(newDiv);

const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
];

const renderUsers = () => {
  const userListContainer = document.querySelector('#user-list');
  let userNodeString = '';
  users.forEach(user => {
    userNodeString += `<div class="user-item">
      <span class="user-id">${user.id}</span>  
      <span>${user.first_name} ${user.last_name}</span>  
      <span>${user.email}</span>  
      <span><img src="${user.avatar}" /></span>  
      </div>`;
    // userNodeString = userNodeString + 'a'
  });
  userListContainer.innerHTML = userNodeString;

  console.log(userNodeString);
}

renderUsers();

const myButton = document.querySelector('#my-button');
if(myButton){
  myButton.addEventListener('click', e => {
    // e.target არის იგივე ტიპის რასაც აბრუნებს querySelector ან createElement
    console.log('MyButton clicked', e.target.getAttribute('data-id'));
  });
}
