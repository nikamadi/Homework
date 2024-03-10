// with let keyword

let adi = 1;
// let adi = 2; we cannot redeclare global variable with let
document.write(adi);

// block scope
{
  let a = 5;
  let b = 6;
  document.write(a);
}
// document.write(b); this will not work because let provide block scope

// value of variable can change with let
let num = 10;
document.write(num); // here value is 10
num = 20;
document.write(num); //here value is 20

//with var keyword
var ad = 1;
var ad = 0.1; //we can redeclare variable with var
document.write(ad);

//variable declare with var dont have block scope
{
  var block = 0.113;
}
document.write(block); //dont have block scope

//redeclaring variable inside block will redeclare the variable inside the block
var aditi = 5;
{
  var aditi = 50;
}
document.write(aditi);

//with const keyword

const dd = 30;
dd = 40; // this will not work because we cannot redeclare with const
document.write(dd);

//we can redeclare const in different blocks only
const c = 0.4; //allowed
{
  const c = 30; //allowed
  document.write(c);
}
document.write(c);

//we cannot reassign variable with const
const bbb = 40;
bbb = 30; //this will not work we cannot reassign variable in const
document.write(bbb);

//we can declare array,object,function,regexp using const

//we can create an constant object...
const car = { type: "nexon", model: "500", color: "red" };
//we can also change the property
car.color = "white";
