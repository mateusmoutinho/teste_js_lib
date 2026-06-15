#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const args = process.argv.slice(2);
const name = args[0] || 'World';
console.log((0, index_1.greet)(name));
