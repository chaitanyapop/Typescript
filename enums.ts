/**
 * enums in TypeScript are similar to constants in JavaScript. 
 * They are a way to define a set of named values that are immutable and can be referenced throughout your code. Once you declare an enum, the values within it cannot be changed, just like constants
 */

enum User_on {
    name="Chaitanya",
    age=24,
    city="Pune"
} /*Now this structure will remain as it is throughout the code and we cannot change it */

User_on.name // this will give Chaitanya. Instead of creating multiple constants we can group them insie enum nad we can have proper 
// structure of constants. E.g User_on enum has all user constants likewise we can create group of constants for bank details and we can
//create a set of it.

/*If default values are not assigned then it will take 0,1,2,3 numbers as its values means name will be 0 age will be 1 city will be 2 */