import { wasmBrowserLoader } from "./wasmBrowserLoader.js";

const runWasmAdd = async () => {
  const wasmModule = await wasmBrowserLoader("./build/optimized.wasm");

  const { exports } = wasmModule.instance;

  console.log(exports.callMeFromJavascript(333, 412));
  console.log(exports.CONST_FOR_JAVASCRIPT.valueOf());
  console.log("this is not exported", exports.ADD_CONSTANT);
  const result = exports.add(12345, 54321);

  document.body.textContent = `Hello World! add from wasm: ${result}`;
};

runWasmAdd();
