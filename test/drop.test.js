// 1-6 tests

import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect

describe("drop.test_1", () => {
    it("Array is empty.", () =>{
        expect(drop([])).to.equal([])
    });
})

describe("drop.test_2", () => {
    it("n is 0", () =>{
        expect(drop([1,2,3],0)).to.equal([1,2,3])
    });
})

describe("drop.test_3", () => {
    it("n is bigger than length.", () =>{
        expect(drop([1,2,3],5)).to.equal([])
    });
})

describe("drop.test_4", () => {
    it("Check if array remains same.", () =>{
        expect(drop([1,2,3],5)).to.equal([])
    });
})

describe("drop.test_5", () => {
    it("n is not given.", () =>{
        expect(drop([1,2,3])).to.equal([2,3])
    });
})

describe("drop.test_6", () => {
    it("n is lower than length of array but bigger than 1.", () =>{
        expect(drop([1,2,3])).to.equal([3])
    });
})
