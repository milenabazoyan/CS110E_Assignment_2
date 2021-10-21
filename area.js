let triangle_length = 20
let trinagle_base = 1
let rectangle_height = 10
let rectangle_length = 8
let triangle_area = ((triangle_length*trinagle_base)/2)
let rectangle_area = (rectangle_height*rectangle_length)
if (triangle_area > rectangle_area) {
    console.log("The triangle has a bigger area")
}
if (rectangle_area > triangle_area) {
    console.log("The rectangle has a bigger area")
}
if (rectangle_area === triangle_area) {
    console.log("The rectangle and triangle areas are equal");
}
