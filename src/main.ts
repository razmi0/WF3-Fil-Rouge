// Description: Main file for the project
// path to the file: main.js
// --

import { Body } from "./components/ComponentsModule.js";
import { syncTimeTest, asyncTimeTest } from "./tests/performance.js";

//------------------------------------//
//---------- Body Rendering ----------//
//------------------------------------//

const body = new Body();
await body.run();
