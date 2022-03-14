import { add,sub } from "./Arithmetic";
test("check functions",()=>{
    expect(add(10,5)).toBe(15)
})
test("check sub function",()=>{
    expect(sub(10,5)).not.toBe(-5)
})