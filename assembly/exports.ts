export function callMeFromJavascript(a: i32, b: i32): i32 {
  return addIntegerWithConstant(a, b);
}

export const CONST_FOR_JAVASCRIPT: i32 = 4321;

function addIntegerWithConstant(a: i32, b: i32): i32 {
  return a + b + ADD_CONSTANT;
}

const ADD_CONSTANT: i32 = 1;
