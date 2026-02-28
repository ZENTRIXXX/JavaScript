// 1
function masala1() {
  for (let i = 5; i <= 50; i++) {
    console.log(i);
  }
}

// 2
function masala2() {
  let sum = 0;
  for (let i = 10; i <= 20; i++) {
    sum += i;
  }
  console.log( sum);
}

// 3
function masala3() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// 4
function masala4() {
  for (let i = 1; i <= 5; i++) {
    console.log( i * i);
  }
}

// 5
function masala5() {
  for (let i = 1; i <= 5; i++) {
    console.log( i * i * i);
  }
}

// 6
function masala6() {
  let kopaytma = 1;
  for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
      kopaytma *= i;
    }
  }
  console.log( kopaytma);
}

// 7
function masala7() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    }
  }
  console.log( sum);
}


masala1();
masala2();
masala3();
masala4();
masala5();
masala6();
masala7();
