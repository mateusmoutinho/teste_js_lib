#!/usr/bin/env node
import { greet } from '../lib/index';
const args = process.argv.slice(2);
const aaa = args[0] || 'World';

console.log(greet(aaa));
