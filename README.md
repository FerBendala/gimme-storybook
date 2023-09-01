# Fer storybook
## Description
This library was developed to provide reusable components to accelerate the development of React applications.
## Recomended steps
### Install prettier extension in vscode
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
### MDX
#### Install extension for vscode
https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx
#### MDX Documentation
https://mdxjs.com/docs/
## Usage
### Instalation
Clone the repository and then run `npm install` to install all necessary dependencies.
```bash
git clone https://github.com/gardocki/next-price-blocks.git
cd next-price-blocks
npm install
```
### Development
You can start the Storybook development server with the command `npm run dev`, which will run on port 6006.
```bash
npm run dev
```
### Build
Use the command `npm run build` to build the project with Rollup.
```bash
npm run build
```
Additionally, you can generate a static Storybook version with the command `npm run build-storybook`.
```bash
npm run build-storybook
```
### Linter
This project uses ESLint for code analysis. You can check if your code complies with the linting rules with `npm run lint` and automatically fix errors with `npm run lint:fix`.
```bash
npm run lint
npm run lint:fix
```
