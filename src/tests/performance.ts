// REMOVE FILE AT PRODUCTION
// Contain performances related functions
// Path : src/tests/performance.ts
//--


/**
 * Sync Function to get the execution time of a function on console
 * @Sync
 * @param {CallableFunction} fc Function to be executed
 * @param {*} parameters Parameters of the function to be executed
 * @param {boolean} flag Flag to indicate if the function to be executed has parameters
 * @returns {Promise<void | { success : boolean } >} return a promise with the result of the execution
 */
export function syncTimeTest(fc: CallableFunction, parameters: any = null, flag: boolean = false) : { success : boolean } {
  try {
      const t1 = performance.now(); // start time
      flag ?  fc(parameters) :  fc(); // appel function 
      const t2 = performance.now(); // end time
      console.log({
        Execution: `${fc.name}(${parameters})`,
        Time: `${t2 - t1} ms`,
      });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}



/**
 * Async Function to get the execution time of a function on console
 * @Async
 * @param {CallableFunction} fc Function to be executed
 * @param {*} parameters Parameters of the function to be executed
 * @param {boolean} flag Flag to indicate if the function to be executed has parameters
 * @returns {Promise<void | { success : boolean } >} return a promise with the result of the execution
 */
export async function asyncTimeTest(
  fc: CallableFunction,
  parameters: any = null,
  flag: boolean = false
): Promise<void | { success : boolean }> {
  async () => {
    try {
        const t1 = performance.now();
        console.log("go test");
        flag ? await fc(parameters) : await fc();
        const t2 = performance.now();
        console.log({
          Execution: `${fc.name}(${parameters})`,
          Time: `${t2 - t1} ms`,
        });
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  }
}
