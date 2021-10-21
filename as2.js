const a = 4
const b = 11
const c = 7
let discriminant = (b * b - 4 * a * c)

if (discriminant > 0 && a!==0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        console.log("x1 =" + x1 + " and x2 =" + x2);
}

else if (discriminant == 0 && a!==0) {
        x = -b / (2 * a);
        console.log("x =" + x);
}

else if (discriminant < 0 && a!==0) {

         console.log("Unsolvable")
    }

else {
    console.log("Unsolvable")
}

