/* eslint-disable no-undef */
import sum from "../sum";

test("Sum of two number is ", ()=>{
    const result = sum(3,4);

    //Assertion 
    expect(result).toBe(7); 
})