export const wasmBrowserLoader = async (wasmModuleUrl, importObject) => {
  let response = undefined;

  if (!importObject) {
    importObject = {
      env: {
        abort: () => console.log("Abort!")
      }
    };
  }
  // gives unsupported MIME type error if server does not support .wasm extension
  // if (WebAssembly.instantiateStreaming) {
  //   response = await WebAssembly.instantiateStreaming(
  //     fetch(wasmModuleUrl),
  //     importObject
  //   );
  // } else {
  const fetchAndInstantiateTask = async () => {
    const wasmArrayBuffer = await fetch(wasmModuleUrl).then(reponse =>
      reponse.arrayBuffer()
    );
    return WebAssembly.instantiate(wasmArrayBuffer, importObject);
  };
  response = await fetchAndInstantiateTask();
  // }

  return response;
};
