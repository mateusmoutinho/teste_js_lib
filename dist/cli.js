#!/usr/bin/env node
"use strict";
function greet(name) {
    return `Hello, ${name}! This is from the library.`;
}
function sub(a, b) {
    return a - b;
}
const args = process.argv.slice(2);
const aaa = args[0] || 'World';
console.log(greet(aaa));
