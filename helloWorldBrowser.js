import { wasmBrowserLoader } from "./wasmBrowserLoader.js";

const runWasmAdd = async () => {
  const wasmModule = await wasmBrowserLoader("./build/optimized.wasm");

  const { exports } = wasmModule.instance;
  const result = exports.add(12345, 54321);

  document.body.textContent = `Hello World! add from wasm: ${result}`;
};

runWasmAdd();
