/*Ways to declare an array in TS */
let arr:number[]=[] //here we have initialized an empty array
let arr2:string[]=[] 

type User_one={
    name:string,
    age:number
}
let arr3:User_one[]=[]
arr3.push({name:"ch",age:24}) /*This is how we can define array of our own type */

//nested array
let arr4:number[][]=[[2,3]]
arr4[0].push(4)

//one more way to declare array in TS but above method is also fine
let arr5:Array<number>=[]