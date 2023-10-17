import sayHello from "../utils/helloworld.mjs";
import assert from "assert";

it("tests Hello World", () => {
    const hello = sayHello();

    assert.equal(hello, "hello");
})

console.log(sayHello());

