// 1-8 tests

import chai from "chai"
import castArray from "../src/castArray.js"

const expect = chai.expect

describe("castArray.test_1", () => {
    it("Cast input 1 as array.", () =>{
        expect(castArray(1)).to.equal([1])
    });
})

describe("castArray.test_2", () => {
    it("Cast { 'a': 1 } as array.", () =>{
        expect(castArray({ 'a': 1 })).to.equal([{ 'a': 1 }])
    });
})

describe("castArray.test_3", () => {
    it("Cast 'abc' as array.", () =>{
        expect(castArray('abc')).to.equal(['abc'])
    });
})

describe("castArray.test_4", () => {
    it("Cast null as array", () =>{
        expect(castArray(null)).to.equal([null])
    });
})

describe("castArray.test_5", () => {
    it("Cast undefined as array.", () =>{
        expect(castArray(undefined)).to.equal([undefined])
    });
})

describe("castArray.test_6", () => {
    it("Cast [] as array.", () =>{
        expect(castArray([])).to.equal([])
    });
})

describe("castArray.test_7", () => {
    it("Cast [1,2,3] as array.", () =>{
        expect(castArray([1,2,3])).to.equal([1,2,3])
    });
})

describe("castArray.test_8", () => {
    it("CastArray used without argument", () =>{
        expect(castArray()).to.equal([])
    });
})