import { wasmBrowserLoader } from "./wasmBrowserLoader.js";

const runWasmAdd = async () => {
  console.log("runWasmAdd");

  const wasmModule = await wasmBrowserLoader("./build/optimized.wasm");
  console.log("wasmModule", wasmModule);

  const { exports } = wasmModule.instance;
  const result = exports.add(12345, 54321);

  document.body.textContent = `Hello World! add from wasm: ${result}`;
};

runWasmAdd();
