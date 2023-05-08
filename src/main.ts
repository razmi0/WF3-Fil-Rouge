// Description: Main file for the project
// path to the file: main.js
// --


import { Body } from "./components/module.js";
import { syncTimeTest, asyncTimeTest } from "./tests/performance.js";

//------------------------------------//
//---------- Body Rendering ----------//
//------------------------------------//


console.log("Begin of main.js");
//--

(async () => {
    
    const t1 = performance.now();
    //--
    const body = new Body();
    await body.run();
    //--
    const t2 = performance.now();
    //--
    console.log(`Execution time : ${t2 - t1} ms`);
})();
// const body = new Body();
// const test = await asyncTimeTest(body.run);
// console.log(test);

console.log("End of main.js");
