// const body = document.querySelector("body")

// const h1 = document.createElement("h1")
// h1.textContent = "Algoritm IT Center!"

// // body.append(h1)
// body.prepend(h1)

// let text = document.createTextNode("")
// text = "salom"

// h1.append(text)

// const box = document.createElement("div")
// box.style.cssText = `
//   width : 200px;
//   height: 200px;
//   border: 2px solid red;
//   background-color: pink;
// `;

// body.prepend(box)

// box.append("Salom")
// box.prepend("Alik")

// box.before("Hiii")
// box.after("Hello")

// h1.remove()

// const box2 = document.createElement("div")
// box2.style.cssText = `
//   width : 200px;
//   height: 200px;
//   border: 2px solid blue;
//   background-color: lightblue;
// `;

// box.replaceWith(box2)


const body = document.querySelector("body")

body.style.cssText = `
  background-color: rgb(234, 247, 240);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const card = document.createElement("div")
card.style.cssText = `
  width: 440px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: white;
  padding: 10px;
`;
body.prepend(card)

const img = document.createElement("img")
img.setAttribute("src", "./image.jpg")
img.style.cssText = `
  width: 100%;
  border-radius: 20px;
`;

card.append(img)

const innerWrapper = document.createElement("div")
innerWrapper.style.cssText = `
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
`;

card.append(innerWrapper)

const btnWrapper = document.createElement("div")
innerWrapper.append(btnWrapper)

const btn1 = document.createElement("button")
btn1.style.cssText = `
  padding: 5px 8px;
  border: 1px solid gray;
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  margin-right: 5px;
`;
btn1.textContent = "Nature"

const btn2 = document.createElement("button")
btn2.style.cssText = `
  padding: 5px 12px;
  border: 1px solid gray;
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  margin-left: 5px;
`;

btn2.textContent = "Lake"

btnWrapper.append(btn1)
btnWrapper.append(btn2)

const h1 = document.createElement("h1")
h1.textContent = "Logo di Braies"
h1.style.cssText = `
  font-weight: 400;
`;

innerWrapper.append(h1)

const p = document.createElement("p")
p.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quaerat dolores autem, blanditiis ipsam mollitia culpa. Excepturi non hic sint!"
p.style.cssText = `
  font-size: 18px;
  letter-spacing: 1px;
  color: #afafaf;
`;

innerWrapper.append(p)

const submitWrap = document.createElement("div")
submitWrap.style.cssText = `
  width: 100%;
  display: flex;
  justify-content: center;
`

innerWrapper.append(submitWrap)

const submit = document.createElement("button")
submit.textContent = "Read Mode..."
submit.style.cssText = `
  padding: 15px 20px;
  border-radius: 20px;
  background-color: rgb(187,229,255);
  cursor: pointer;
  border: none;
  font-weight: bold;
`

submitWrap.append(submit)