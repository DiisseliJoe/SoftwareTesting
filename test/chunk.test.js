// tests form 1 to 6
// named chunk.test_1 - ...test_6

import chai from "chai"
import chunk from "../src/chunk.js"

const expect = chai.expect

describe("chunk.test_1", () => {
    it("Array with two values wih 0 for length of chunk.", () =>{
        expect(chunk(['a','b'], 0)).to.equal([])
    });
})

describe("chunk.test_2", () => {
    it("Check if parameter array is changed.", () =>{
        expect(chunk(['a','b','c','d'], 4)).to.equal(['a','b','c','d'])
    });
})

describe("chunk.test_3", () => {
    it("Array can split evenly.", () =>{
        expect(chunk(['a','b','c','d'], 2)).to.equal([['a','b'],['c' ,'d']])
    });
})

describe("chunk.test_4", () => {
    it("Array cannot split evenly.", () =>{
        expect(chunk(['a','b','c','d'], 3)).to.equal([['a','b','c'],['d']])
    });
})

describe("chunk.test_5", () => {
    it("CSize parameter bigger than length of array.", () =>{
        expect(chunk(['a','b','c','d'], 5)).to.equal(['a','b','c','d'])
    });
})

describe("chunk.test_6", () => {
    it("Size parameter equal to length of array", () =>{
        expect(chunk(['a','b','c','d'], 4)).to.equal(['a','b','c','d'])
    });
})
