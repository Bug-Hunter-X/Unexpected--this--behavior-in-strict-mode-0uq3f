# Unexpected 'this' behavior in strict mode

This repository demonstrates a common JavaScript error related to the `this` keyword, specifically in strict mode.  The example shows how calling a function without properly binding `this` results in `undefined` in strict mode. The solution provides several approaches to correct this behavior.

## Bug

In the provided `bug.js`, the `myFunc` function logs the value of `this` to the console. When called directly, it logs `undefined` in strict mode, while it may log the global object in non-strict mode.  This is often unexpected and can lead to subtle bugs.

## Solution

The `bugSolution.js` file shows different ways to fix this issue, using methods such as `bind()`, arrow functions, and setting `this` within a self-executing function.