// // console.log("Height", window.innerHeight);
// // console.log("Width", window.innerWidth );

// console.log("Height", window.outerHeight);
// console.log("Width", window.outerWidth );

// const h1 = document.querySelector("h1")
// // console.log(h1.parentNode);
// // console.log(h1.parentElement);
// h1.style.color = "red"
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// const body = document.querySelector("body")

// console.log(body.childNodes);
// console.log(body.children);
// body.children[0].style.backgroundColor = "pink"

const h1 = document.getElementsByTagName("h1")[0]
h1.style.color = "red"

const h2 = document.getElementsByClassName("title2")[0]
h2.style.color = "blue"

const h3 = document.getElementsByName("s21")[0]
h3.style.color = "green"

const h4 = document.getElementById("dom")
h4.style.color = "orange"

// const firstLi = document.querySelector("li")
const firstLi = document.querySelectorAll("li")
console.log(firstLi);
