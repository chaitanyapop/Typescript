/**In TypeScript, a tuple is a special type of array that allows you to specify the exact types and the exact number of elements that the array should have. 
 * This is useful when you want to group a fixed number of elements with different types together */

let a:[string,number,number]=["a",2,2]
/*In above example we have defined a specific type on each indexes then the upcoming values should be in that way only */

/*Modification */
//a[0]=2 // now this will give an error because we have defined 0 index as string

a[0]="hello"

/*tuple with rest operator */

let b:[string,...number[]]=["hello",2,3,4,5]
/*here we are saying that first element should be a string but onwards it should be an array of numbers */

/*tuples basically helps us to make a proper structure of an array */