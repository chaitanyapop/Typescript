/*If we have a function and we want to return an object from it then in norma TS return defincation we can mention an object and we can
mention specific keys as well which will get returned,
In a similar way we can accept an object as an argument and we can define types of that key in function defination so that while passing
an object we should follow those rules  */

function createUser({name: string, isPaid: boolean}){}
/*while passing an object we should pass name as a string and isPaid as a boolean value */

function createCourse():{name: string, price: number}{
        return {name: "reactjs", price: 399}
    }
/*here we have mentioned a returned structure of an object then it should be returned in that way only */

/*Now the above code where we are passing an arguments looks messy to avoid that we can create our own types in TS.
Inside those types we can mention multiple key and values will be premitive or non-premitive types. That type can be used by multiple
functions */
type User={
    readonly id:number
    name:string,
    age:number,
    isPaid:boolean,
    creditDetails?:number
}
type Company={
    readonly name:string,
    id:number
}

type AllDetails=User & Company
function newUser(user:User){}
/*while passing an object to the newUser function it should follow the template which is mentioned inisde an user "type".
"readonly" specifies that the value cannot be edit it can only be read.
"?" specifies this value is not a compulsion to pass if user passes it then ok if not then also no issue.
"&" is used to combine all the types in one single type*/
