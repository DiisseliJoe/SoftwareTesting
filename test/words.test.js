// 1-5 tests

import chai from "chai"
import words from "../src/words.js"

const expect = chai.expect

describe("words.test_1", () => {
    it("pattern is not given.", () =>{
        expect(words("ape, banana, & cola")).to.equal(["ape","banana","cola"])
    });
})

describe("words.test_2", () => {
    it("pattern is given.", () =>{
        expect(words("ape, banana, & cola", /[^,]+/g)).to.equal(["ape","banana","&","cola"])
    });
})

describe("words.test_3", () => {
    it("string includes Unicode characters.", () =>{
        expect(words("äiti, maa")).to.equal(['äiti','maa'])
    });
})

describe("words.test_4", () => {
    it("string does not include Unicode characters.", () =>{
        expect(words("Hello, World")).to.equal['Hello','World']
    });
})

describe("words.test_5", () => {
    it("string is empty.", () =>{
        expect(words()).to.equal([])
    });
})