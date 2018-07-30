#!/usr/bin/env node

const readline = require('readline')

function main() { 
  const cmdline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
};

main(); 

