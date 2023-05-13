// Description: Main file for the project
// path to the file: main.js
// --
import DbData from "./services/DbData.js";
import { Header, Body } from "./components/Modules.js";
//------------------------------------//
//---------- Body Rendering ----------//
//------------------------------------//
const body = new Body();
(async () => {
    //------------------------------------//
    performance.mark("start");
    const data = await new DbData().getProducts();
    body.run(data);
    performance.mark("end");
    //------------------------------------//
    //------------------------------------//
    performance.measure("fetch and run ", "start", "end");
    const measure1 = performance.getEntriesByName("fetch and run ");
    // @ts-ignore
    console.log("fetch and run  : " + measure1[0].duration);
    //------------------------------------//
})();
const header = new Header();
header.run();
//# sourceMappingURL=main.js.map