// Description: Main file for the project
// path to the file: app.js
// --
import DbData from "./services/DbData.js";
import { Header, Main } from "./components/Modules.js";
//------------------------------------//
//---------- Main Rendering ----------//
//------------------------------------//
const body = new Main();
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
//# sourceMappingURL=app.js.map