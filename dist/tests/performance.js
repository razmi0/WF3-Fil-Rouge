// REMOVE FILE AT PRODUCTION
// Contain performances related functions
// Path : src/tests/performance.ts
//--
/**
 * Function to get the execution time of a function on console
 * @async
 * @param {CallableFunction} fc Function to be executed
 * @param {*} parameters Parameters of the function to be executed
 * @param {boolean} flag Flag to indicate if the function to be executed has parameters
 * @returns {Promise<void | { success : boolean } >} return a promise with the result of the execution
 */
export function syncTimeTest(fc, parameters = null, flag = false) {
    try {
        const t1 = performance.now();
        flag ? fc(parameters) : fc();
        const t2 = performance.now();
        console.log({
            Execution: `${fc.name}(${parameters})`,
            Time: `${t2 - t1} ms`,
        });
        return { success: true };
    }
    catch (error) {
        console.error(error);
        return { success: false };
    }
}
export async function asyncTimeTest(fc, parameters = null, flag = false) {
    try {
        const t1 = performance.now();
        flag ? await fc(parameters) : await fc();
        const t2 = performance.now();
        console.log({
            Execution: `${fc.name}(${parameters})`,
            Time: `${t2 - t1} ms`,
        });
        return { success: true };
    }
    catch (error) {
        console.error(error);
        return { success: false };
    }
}
//# sourceMappingURL=performance.js.map