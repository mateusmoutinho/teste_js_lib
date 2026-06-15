#!/usr/bin/env node


const args = process.argv.slice(2);
const aaa = args[0] || 'World';

console.log(greet(aaa));
