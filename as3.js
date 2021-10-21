let x1 = -2
let x2 = 5
let y1 = 8
let y2 = -9

// length=√((x2-x1)²+(y2-y1)²) 

let a=x2-x1;
let b=y2-y1;

if (x1>=0 && x2>=0 && y1>=0 && y2>=0) 
{
    let length = Math.sqrt((a**2)+(b**2));
    console.log(length);
}
if (x1<0 || x2<0 || y1<0 || y2<0)
{ 
    let length = Math.sqrt((a*a)+(b*b));
    console.log(length);
}
