// Description: Main file for the project
// path to the file: main.js
// --

import { Header, Body } from "./components/Modules.js";
import { syncTimeTest, asyncTimeTest } from "./tests/performance.js";

//------------------------------------//
//---------- Body Rendering ----------//
//------------------------------------//



(async()=> {
 performance.mark("start");
const header = new Header();
header.run();
const body = new Body();
await body.run();
performance.mark("body run");

performance.measure("rendering", "start", "body run");


const measure1 = performance.getEntriesByName("rendering");

// @ts-ignore
console.log("Total Time : " + measure1[0].duration);

})();

