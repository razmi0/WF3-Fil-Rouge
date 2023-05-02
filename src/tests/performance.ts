// REMOVE FILE AT PRODUCTION
// Contain performances related functions
// Path : src/tests/performance.ts
//--



/**
 * Function to get the execution time of a function on console
 * @async
 * @param {CallableFunction} fc Function to be executed
 * @param {*} parameters Parameters of the function to be executed
 * @returns {Promise<void>}
 */
export async function timeTest(
  fc: CallableFunction,
  parameters: any
): Promise<void> {
  try{
    if (!fc || !parameters) {
      throw new Error("Missing parameters");
    }
    const t1 = performance.now();
    await fc(parameters);
    const t2 = performance.now();
    console.log({
      Execution: `${fc.name}(${parameters})`,
      Time: `${t2 - t1} ms`,
    });
  } catch (error) {
    console.warn(error);
  }
}
