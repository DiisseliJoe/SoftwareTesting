// 1-9 tests

import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect

describe("compact.test_1", () => {
    it("Array includes false.", () =>{
        expect(compact([1,2,false,3])).to.eql([1,2,3])
    });
})

describe("compact.test_2", () => {
    it("Array includes true.", () =>{
        expect(compact([1,2,true,3])).to.eql([1,2,true,3])
    });
})

describe("compact.test_3", () => {
    it("Array includes null.", () =>{
        expect(compact([1,2,null,3])).to.eql([1,2,3])
    });
})

describe("compact.test_4", () => {
    it("Array includes NaN.", () =>{
        expect(compact([1,2,NaN,3])).to.eql([1,2,3])
    });
})

describe("compact.test_5", () => {
    it("Array includes 0.", () =>{
        expect(compact([0,1,2,3,0])).to.eql([1,2,3])
    });
})

describe("compact.test_6", () => {
    it("Array includes “”. ", () =>{
        expect(compact([1,2,"",3])).to.eql([1,2,3])
    });
})

describe("compact.test_7", () => {
    it("Array includes undefined.", () =>{
        expect(compact([1,2,undefined,3])).to.eql([1,2,3])
    });
})

describe("compact.test_8", () => {
    it("Array is empty.", () =>{
        expect(compact([])).to.eql([])
    });
})

describe("compact.test_9", () => {
    it("Check if array remains same.", () =>{
        expect(compact([0,1,2,3,""])).to.eql([1,2,3])
    });
})

describe("compact.test_10", () => {
    it("Array consist only falsey values.", () =>{
        expect(compact([0,NaN,undefined,null,""])).to.eql([])
    });
})