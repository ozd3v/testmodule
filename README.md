<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://raw.githubusercontent.com/ozd3v/variostips/main/octa-no-gb.png" alt="Project logo"></a>
</p>

<h3 align="center">Create a "private"  React Module</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> How to create a private module in React using Typescript and use it in a project
from a private repository in github, NO npm package
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Test](#tests)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](./CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

How to create a npm "module" for React, with typescript, but using github as a private repository

## 🏁 Getting Started <a name = "getting_started"></a>

Create proyecti with vite, select react and typescript
```
yarn create vite
yarn init
```


### Prerequisites

What things you need to install the software and how to install them.

```
yarn add -D react react-dom typescript @types/react
yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn remove react react-dom
yarn add -D react react-dom
```

### Config Files

create a tsconfig.json file in the project root with the following content:

```
{
    "compilerOptions": {
        "module": "esnext",
        "lib": [
            "dom",
            "esnext"
        ],
        "importHelpers": true,
        "declaration": true,
        "sourceMap": false,
        "rootDir": "./src",
        "outDir": "./dist/esm",
        "strict": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "moduleResolution": "node",
        "jsx": "react",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": [
        "src"
    ],
    "exclude": [
        "dist",
        "node_modules"
    ],
    "references": [
        {
            "path": "./tsconfig.node.json"
        }
    ]
}
```

create .eslintrc

```
{
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "JSX": true
  }
}
```

Add .eslintignore:

```
node_modules
dist
```

Change package.json , add to scripts section:
  
  ```
  "lint": "eslint \"{**/*,*}.{js,ts,jsx,tsx}\""
  ```
Add Author and License to package.json

```
"author": "Ozdev",
"license": "MIT",
```
add keywords to package.json

```
  "keywords": []
```
replace build script in package.json with:

```
    "build": "yarn build:esm && yarn build:cjs",
    "build:esm": "tsc",
    "build:cjs": "tsc --module commonjs --outDir dist/cjs"
```
and add to scripts 
```
    "prepare": "npm run build",
    "prepublishOnly": "npm test && npm run lint"
```
add files to package.json

```
  "files": [
    "dist",
    "src",
    "LICENSE",
    "README.md"
  ],
```

add repository to package.json

```
  "repository": {
    "type": "git",
    "url": "git+
```

add types, module:
```
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js",
  "types": "./dist/esm/index.d.ts",
```

final package.json should looks like (this repo sample):
```
{
  "name": "somename",
  "private": true,
  "version": "1.0.0",
  "description": "",
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js",
  "types": "./dist/esm/index.d.ts",
  "author": "ozd3v",
  "license": "MIT",
  "keywords": [
    "react",
    "typescript",
    "awesome-project"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ozd3v/testmodule.git"
  },
  "peerDependencies": {},
  "files": [
    "dist",
    "src",
    "LICENSE",
    "README.md"
  ],
  "scripts": {
    "dev": "vite",
    "build": "yarn build:esm && yarn build:cjs",
    "build:esm": "tsc",
    "build:cjs": "tsc --module commonjs --outDir dist/cjs",
    "preview": "vite preview",
    "lint": "eslint \"{**/*,*}.{js,ts,jsx,tsx}\"",
    "test": "jest --config jestconfig.json",
    "prepare": "npm run build",
    "prepublishOnly": "npm test && npm run lint"
  },
  "dependencies": {},
  "devDependencies": {
...
...
...
  }
}
```

create jestconfig.json: 
```
{
    "transform": {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "testEnvironment": "jsdom"
}
```
Change peerDependecies acording with the actual project needs.

## 🔧 Running the tests <a name = "tests"></a>

to run test
  
  ```
  yarn test
  ```

## 🎈 Usage <a name="usage"></a>

All settings done, make some changes in the code, create your own componets and publish to github private repo:
```
git add .
git commit -m "initial commit"
git push origin master
git tag -a v1.0.0 -m "my version 1.0.0"
git push origin --tags
```


## 🚀 Deployment <a name = "deployment"></a>

From the project that will use de module (replace url with the actual repo url):
  
  ```
  yarn add https://github.com/ozd3v/testmodule.git
  ```

from some jsx/tsx file
  
  ``` 
  import { MyCounter } from 'testmodule';
  ...
  ...
  <MyCounter />
  ```

## ✍️ Authors <a name = "authors"></a>

- [@ozd3v](https://github.com/ozd3v) - Idea & Initial work

See also the list of [contributors](https://github.com/ozd3v/testmodule/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References:
  https://www.pluralsight.com/guides/react-typescript-module-create
  https://stackoverflow.com/questions/43411864/how-to-install-package-from-github-repo-in-yarn
  https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca
  https://git-scm.com/book/en/v2/Git-Basics-Tagging

