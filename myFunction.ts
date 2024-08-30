function addTwo(num: number) //This is how we can define the data type for an argument of a function
{
    return num+2
}
addTwo("ch")

function toUpper(str:string)
{
    return str.toUpperCase()
}
toUpper("D")
/*if we have put the type restriction for an argument then while passing an argument we cannot pass the incorrect one, it will throw 
an error */

/*Default value */
function myFun(name:string, age:number, isPaid:boolean=false)
{
    console.log(name,age,isPaid)
}
myFun("ch",20) 
/*if we have mentioned a default value then it will not throw an error wvwn if we pass the two arguments. If we are passing two arguments
and default value is not mentioned then it will give us an error */

/*Defining specific return type */
function nums(num:number):number
{
    return num+2
}
/**This is how we can define a return type which I have mentioend currently as a number so that any other dev cannot expect any other
 * data type from this function other than number
 */

function ab():void
{
    throw new Error("hello")
}

// Summary:
// void: Used for functions that complete execution but do not return any meaningful value. Common in functions that perform actions (like logging) but don't need to return anything.
// never: Used in functions that are not supposed to return or complete normally. Common in error handling, infinite loops, and ensuring all cases are covered in conditional logic.



