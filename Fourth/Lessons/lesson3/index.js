const h1 = document.querySelector("h1")

// innerHTML:

// h1.innerHTML = "Algoritm"
// h1.innerHTML = "<span>Algoritm</span>"

// outerHTML:

// h1.outerHTML = "Algoritm"
// h1.outerHTML = "<i><b>Algoritm</b></i>"

// h1.innerHTML = "Namangan IT"
// h1.innerHTML = "<h2>Namangan IT</h2>" // ❌

// h1.textContent = "Chust"
// h1.textContent = "<p>Chust</p>"  // ❌

// console.log(h2.innerText);
// console.log(h2.textContent);

// const p = document.querySelector("p")
// console.log(p.hasAttribute("style"));
// console.log(p.hasAttribute("type"));
// if (p.hasAttribute("style")) {
//     console.log(p.getAttribute("style"));
//     p.setAttribute("class", "text")
//     p.removeAttribute("style")
// }

h1.innerHTML = "<em>men Algoritm oquv markazida oqiyman</em>"
h1.setAttribute("class", "item")
console.log(h1);
                            

const item = document.querySelector(".item")
console.log(item);

const em = item.children[0]

em.setAttribute("id", "item")

const ten = document.getElementById("item")
console.log(ten);


ten.setAttribute("style", "color:red")
ten.innerHTML = "<u>men Algoritm oquv markazida oqiyman7</u>"