// 1-4

//

// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"

//below for node 10
//var chai = require("chai")
//var sum = require ("../sum.js")
//const expect = chai.expect

//describe("Sum", () => {
// it("adds positive number to positive number", () =>{
//     expect(sum(3,6)).to.equal(9)
// });
//})

import chai from "chai"
import camelCase from "../src/camelCase.js"

const expect = chai.expect

describe("camelCase.test_1", () => {
    it("Converts string containing '-' to camel case.", () =>{
        expect(camelCase("-foo-bar—")).to.equal("fooBar")
    });
})

describe("camelCase.test_2", () => {
    it("Converts string containing '_' to camel case.", () =>{
        expect(camelCase("_foo-bar__")).to.equal("fooBar")
    });
})

describe("camelCase.test_3", () => {
    it("Converts string containing space to camel case.", () =>{
        expect(camelCase("foo bar")).to.equal("fooBar")
    });
})

describe("camelCase.test_4", () => {
    it("Converts string containing capital letters to camel case.", () =>{
        expect(camelCase("FOOBAR")).to.equal("fooBar")
    });
})
