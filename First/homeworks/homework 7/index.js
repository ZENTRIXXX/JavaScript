

// ------------------------------------------------------------------------------------------------------------

let yosh = 16;

if (yosh >= 18) {
    console.log("Siz katta yoshdagisiz.");
} else {
    console.log("Siz hali voyaga yetmagansiz.");
}

// ------------------------------------------------------------------------------------------------------------

let day = 3;

switch (day) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    default:
        console.log("Bunday kun yo'q");
}

// ------------------------------------------------------------------------------------------------------------

let age = 20;

let result = age >= 18 ? "Katta yosh" : "Voyaga yetmagan";
console.log(result);