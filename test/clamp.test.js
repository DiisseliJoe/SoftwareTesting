// 1-9 tests

import chai from "chai"
import clamp from "../src/clamp.js"

const expect = chai.expect

describe("clamp.test_1", () => {
    it("Number parameter is positive, lower negative, upper positive.", () =>{
        expect(clamp(10,-5,5)).to.equal(5)
    });
})

describe("clamp.test_2", () => {
    it("Number parameter is zero, lower negative, upper positive.", () =>{
        expect(clamp(0,-5,5)).to.equal(0)
    });
})

describe("clamp.test_3", () => {
    it("Number parameter is negative, lower is negative, upper is positive.", () =>{
        expect(clamp(-10,-5,5)).to.equal(-5)
    });
})

describe("clamp.test_4", () => {
    it("Lower and upper bound both negative, number negative.", () =>{
        expect(clamp(-4,-3,-5)).to.equal(-4)
    });
})

describe("clamp.test_5", () => {
    it("Lower and upper bound both negative, number positive.", () =>{
        expect(clamp(4,-3,-1)).to.equal(-1)
    });
})

describe("clamp.test_6", () => {
    it("Lower and upper bound both positive, number positive.", () =>{
        expect(clamp(6,3,5)).to.equal(5)
    });
})

describe("clamp.test_7", () => {
    it("Lower parameter 0.", () =>{
        expect(clamp(-3,0,5)).to.equal(0)
    });
})

describe("clamp.test_8", () => {
    it("Upper parameter 0.", () =>{
        expect(clamp(3,-2,0)).to.equal(0)
    });
})

describe("clamp.test_9", () => {
    it("Lower parameter equal to upper parameter. ", () =>{
        expect(clamp(10,-3,-3)).to.equal(-3)
    });
})