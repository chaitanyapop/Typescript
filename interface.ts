/*Interface in TS is same as "type" in TS. The main difference is once the type is create we cannot re-declare it but in interface we can
 re-declare it with new value and it will get merged with the earlier declared interface*/

 interface User_h{
    readonly dbID:number,
    email:string,
    userId:number,
    googleId?:string,// optional
    startTrial():string,
    getCoupon(user:string, id:number):string
 }

 interface User_h {
    githubToken?: string
}/*Here we are re-declaring the same interface but it will not throw an error and it will merge this with previously declared interface 
instance if User_h. This we cannot do in case of "type" */

interface Admin extends User_h
{
    admin_id:string
}/*In this we are extending properties of User_h to admin. This we can do in type using & operator */

/*any variable using "user_h" as its type then required things should be there */

let ab_u:User_h={
    dbID:10,
    email:"abc",
    userId:10,
    startTrial:function(){return ""},
    getCoupon:function(user:string,id:number):string{return ""}

} // this is how we can use interface