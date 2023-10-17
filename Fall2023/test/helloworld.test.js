import myName from "../helloworld.js";
import assert from "assert";

it("My name is there", ()=> {
    const name = myName();

    assert.equal(name, "McKenna");
});