// 1-4 tests

import chai from "chai"
import toString from "../src/toString.js"

const expect = chai.expect

describe("toString.test_1", () => {
    it("Converting null to string.", () =>{
        expect(toString(null)).to.equal("")
    });
})

describe("toString.test_2", () => {
    it("Converting -0 to string.", () =>{
        expect(toString(-0)).to.equal("-0")
    });
})

describe("toString.test_3", () => {
    it("Converting array to string.", () =>{
        expect(toString([1,2,3])).to.equal("1,2,3")
    });
})

describe("toString.test_4", () => {
    it("Converting undefined to string.", () =>{
        expect(toString(undefined)).to.equal("")
    });
})