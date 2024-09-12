/*Union is used when we are not sure what type of value will come inside the variable then we make the union of data types.
e.g we have variable called movie_name and inside it a name can be a number and string so we need to union both of these data types */

let movie_name:number|string
movie_name="abc"
movie_name=24 // both are valid

type user={
    name:string
    readonly id:number
}
type admin={
    name:string
    readonly id:number
}
let user_one:user|admin={name:"ch",id:2} /*readonly means we can create it but once it is created we cannot change it */

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
  
}
/*In the above function even if we have mentioned that accepted parameters are number or string then we cannot apply the inbuilt methods
of number and string to it. To apply it we first need to put if block in which if it is a string then this else number properties */

/*Array- If we want to create an array which accepts number string and boolean */
let arr_5:(number|string|boolean)[]=[] // now this array can accept anything mentioned in union block

/*Now the above mentioned things are premitive data types but we can create an union of values as well */

let seats:"Window"|"aisle"|"middle"
seats="chaitanya"// this will give an error because we have mentioned that values can be from above three only