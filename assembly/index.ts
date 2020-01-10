// The entry file of your WebAssembly module.
let a = new Map<String, String>();
a.set("key", "value");

export function add(a: i32, b: i32): i32 {
  return a + b;
}
