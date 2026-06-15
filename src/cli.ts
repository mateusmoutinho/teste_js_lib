#!/usr/bin/env node

import { greet } from './index';

const args = process.argv.slice(2);
const name = args[0] || 'World';

console.log(greet(name));
