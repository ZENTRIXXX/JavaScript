let webbrain = {
  frontend: [
    { course: "react", price: 120 },
    { course: "vue", price: 110 },
    { course: "angular", price: 100 },
  ],
  backend: [
    { course: "java", price: 120 },
    { course: "php", price: 110 },
    { course: "nodejs", price: 100 },
  ],
  mobile: {
    android: [
      { course: "android", price: 120 },
      { course: "flutter", price: 110 },
    ],
    ios: [
      { course: "ios", price: 120 },
      { course: "flutter", price: 110 },
    ],
  },
};

let total = 0;

for (let key in webbrain) {
  let value = webbrain[key];

  if (Array.isArray(value)) {
    value.forEach(item => {
      total += item.price;
    });
  } else {
    for (let innerKey in value) {
      value[innerKey].forEach(item => {
        total += item.price;
      });
    }
  }
}

console.log(total);