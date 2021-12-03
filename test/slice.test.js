//1-7 tests

import chai from "chai"
import slice from "../src/slice.js"

const expect = chai.expect

describe("slice.test_1", () => {
    it("Negative start and end parameters for slicing array.", () =>{
        expect(slice([1,2,3,4], -2, -1)).to.eql([3])
    });
})

describe("slice.test_2", () => {
    it("Empty array as parameter.", () =>{
        expect(slice([])).to.eql([])
    });
})

describe("slice.test_3", () => {
    it("Start parameter bigger than length of array.", () =>{
        expect(slice([1,2,3,4], 5)).to.eql([])
    });
})

describe("slice.test_4", () => {
    it("End parameter bigger than length of array.", () =>{
        expect(slice([1,2,3,4], 1, 6)).to.eql([2,3,4])
    });
})

describe("slice.test_5", () => {
    it("End parameter bigger than start parameter.", () =>{
        expect(slice([1,2,3,4], 3, 2)).to.eql([3])
    });
})

describe("slice.test_6", () => {
    it("Start parameter equal to end parameter.", () =>{
        expect(slice([1,2,3,4], 2, 2)).to.eql([])
    });
})

describe("slice.test_7", () => {
    it("Check if parameter array is changed", () =>{
        expect(slice([1,2,3,4])).to.eql([1,2,3,4])
    });
})