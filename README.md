# Docx-Merger

Javascript Library for Merging Docx files.

This is a fork of https://github.com/scholarcy/docx-merger with updated dependencies and some fixes.

It's only been tested with NodeJS but according to the original authors it should work in the browser too.

The fork has:
- replaced webpack with esbuild as the build tool
- added type definitions

## Purpose

To merge docx files with rich contents using javascript.

The Library preserves the Styles, Tables, Images, Bullets and Numberings of input files.

## Table of Contents

1. [Installation](#installation)
1. [Usage Nodejs](#usage-nodejs)
1. [Usage Browser](#usage-browser)
1. [TODO](#todo)
1. [Known Issues](#known-issues)

## Installation

```shell
npm install @valentiniljaz/docx-merger
```

**[Back to top](#table-of-contents)**

### Usage in Nodejs

Read input files as binary and pass it to the `DocxMerger` constructor fuction as a array of files.

Then call the save function with first argument as `nodebuffer`, check the example below.

```js
const DocxMerger = require('./../src/index');

const fs = require('fs');
const path = require('path');

(async () => {
    const file1 = fs.readFileSync(path.resolve(__dirname, 'template-0.docx'), 'binary');
    const file2 = fs.readFileSync(path.resolve(__dirname, 'template-1.docx'), 'binary');
    const docx = new DocxMerger();
    await docx.initialize({},[file1,file2]);
    // SAVING THE DOCX FILE
    const data = await docx.save('nodebuffer');
    fs.writeFileSync("output.docx", data);
})()
```

**[Back to top](#table-of-contents)**

### Known Issues

- Microsoft Word in Windows shows some error due to numbering and styling.

**[Back to top](#table-of-contents)**


## See also

If you find this Rollup plugin useful, you might also be interested in my other project, [Webacus](https://webacus.dev).

<p>
  <a href="https://webacus.dev" title="Webacus">
    <img src="https://webacus.dev/imgs/icons/webacus_square_logo.jpg" alt="Webacus" width="100px">
  </a>
</p>

<p>
  Webacus is the all-in-one toolkit designed to streamline the workflow of web developers. It solves the common problem of needing to quickly perform micro-tasks like encoding/decoding strings or formatting data by providing a unified platform with over 120 interconnected tools. Instead of searching for individual online tools, developers can access everything they need within Webacus, benefiting from a consistent interface and the ability to chain operations together for complex tasks. This local-first approach ensures speed, security, and privacy, allowing developers to focus on coding rather than managing tools.
</p>
