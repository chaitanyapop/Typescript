let user:string 
let flag:boolean
let age:number
/*When it comes to the number it is understandable that it considers both int and float variables it does not have specific anything for it */
//user=27 // here only it will give me an error that number cannot be assigned to the string

/**
let user:string 
let flag:boolean
let age:number

In above code we have we have defined a type to each varaible but typescript is smart enough to understand the type of a variable 
even if we have not specifically mentioned it.

e.g
let b=90

b="chaitanya"

Now in this code, I have not mentioend a data type while declaring a "b" but when I assign a 90 value to it then TS has identified it as
a number and put a type safety for it. When I assigned b="chaitanya" then it has given me an error and this a more precised way
 */

/**
 * Any-
 * 
 * When any data type is not mentioned for a varaible and we have not declared a value for it then it is considered as an "any" data type.
 * This data type should not be used oftenly because it reduces the type safety of the code
 * 
 * let b
 */

/**
 when to use this code 
 let user:string 
let flag:boolean
let age:number

When any function is returning a value, on that function some other dev has worked on and we are expecting that function should return a
string then in that case we can mention a type safety to that varaible where we are placing the value which is being returned by the function
If function is returning a boolean then we can catch the error at initial stage only that the returned value is incorrect
 */

let b




