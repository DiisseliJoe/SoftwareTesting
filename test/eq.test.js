// 1-16 tests


import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("eq.test_1", () => {
    it("value parameter is NaN and other is NaN.", () =>{
        expect(eq(NaN,NaN)).to.equal(true)
    });
})

describe("eq.test_2", () => {
    it("value parameter is +0 and other is -0.", () =>{
        expect(eq(+0,-0)).to.equal(true)
    });
})

describe("eq.test_3", () => {
    it("value parameter is number and other is number with same value.", () =>{
        expect(eq(5,5)).to.equal(true)
    });
})

describe("eq.test_4", () => {
    it("value parameter is number and other is number with different value ", () =>{
        expect(eq(5,3)).to.equal(false)
    });
})

describe("eq.test_5", () => {
    it("value parameter different type than other.", () =>{
        expect(eq('a',{'a':1})).to.equal(false)
    });
})

describe("eq.test_6", () => {
    it("value parameter is undefined ", () =>{
        expect(eq(undefined,5)).to.equal(true)
    });
})

describe("eq.test_7", () => {
    it("value parameter is null.", () =>{
        expect(eq(null,5)).to.equal(true)
    });
})

describe("eq.test_8", () => {
    it("value parameter is string and other is string with same value.", () =>{
        expect(eq('a','a')).to.equal(true)
    });
})

describe("eq.test_9", () => {
    it("value parameter is string and other is string with different value.", () =>{
        expect(eq('a','b')).to.equal(false)
    });
})

describe("eq.test_10", () => {
    it("value parameter is false and other is false.", () =>{
        expect(eq(false,false)).to.equal(true)
    });
})

describe("eq.test_11", () => {
    it("value parameter is true and other is true.", () =>{
        expect(eq(true,true)).to.equal(true)
    });
})

describe("eq.test_12", () => {
    it("value parameter is symbol and other is Symbol with same value.", () =>{
        expect(eq(Symbol(1),Symbol(1))).to.equal(true)
    });
})

describe("eq.test_13", () => {
    it("value parameter is symbol and other is Symbol with different value.", () =>{
        expect(eq(Symbol(1),Symbol(2))).to.equal(false)
    });
})

describe("eq.test_14", () => {
    it("value parameter is Object and other is same object.", () =>{
        var obj = new Object();
        expect(eq(obj,obj)).to.equal(true)
    });
})

describe("eq.test_15", () => {
    it("value parameter is object and other is object with same data.", () =>{
        expect(eq({'a':1},{'a':1})).to.equal(false)
    });
})

describe("eq.test_16", () => {
    it("value parameter is string and other is object which hold that string as data.", () =>{
        expect(eq('a',{'a':1})).to.equal(false)
    });
})