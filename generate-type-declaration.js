const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'dist'); // Assuming the src directory is one level above /scripts/
const targetFile = path.join(__dirname, 'dist', 'index.d.ts'); // Assuming the dist directory is one level above /scripts/

function generateIndexFileContents(type, componentNames) {
  const fileComment = '// THIS FILE IS AUTO GENERATED\n';
  const exportStatements = componentNames
    .map((name) => {
      let statement = '';
      if (type === 'esm') {
        statement = `export { default as ${name} } from './Svg${name}';`;
      }
      if (type === 'cjs') {
        statement = `module.exports.${name} = require('./Svg${name}');`;
      }
      return statement;
    })
    .join('\n');
  const content = `${fileComment}${exportStatements}`
  return content;
}

function writeIndexFile(type, componentDir, content) {
  fs.writeFileSync(path.join(componentDir, `index.${type}.js`), content, 'utf8');
}

// Read the module directories: esm/ cjs/
const moduleFolders = fs
  .readdirSync(sourceDir)
  .filter((folder) => fs.statSync(path.join(sourceDir, folder)).isDirectory());


// Iterate the module directories.
moduleFolders.forEach((moduleFolder) => {
  // Set the path to the module directory.
  const moduleDir = path.join(sourceDir, moduleFolder);

  // Read the component directories inside of each module directory.
  const componentFolders = fs
      .readdirSync(moduleDir)
      .filter((folder) => fs.statSync(path.join(moduleDir, folder)).isDirectory());

  // Iterate the component directories.
  componentFolders.forEach((componentFolder) => {
    // Set the path to the component directory.
    const componentDir = path.join(moduleDir, componentFolder);

    // Read the component file names
    const componentNames = fs
      .readdirSync(componentDir)
      .filter((file) => file.endsWith('.d.ts') && file !== 'index.d.ts')
      .map((file) => file.replace('.d.ts', ''));

    const indexFileContent = generateIndexFileContents(moduleFolder, componentNames);
    writeIndexFile(moduleFolder, componentDir, indexFileContent);
  });

});

const typeFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith('.d.ts') && file !== 'index.d.ts')
  .map((file) => file.replace('.d.ts', ''));

const exportStatements = typeFiles
  .map((file) => {
    return `export const Svg${file}: SvgIconComponent;`;
  })
  .join('\n');


const indexFileContent = `
import { SVGProps } from "react";\n
type SvgIconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;\n
${exportStatements}\n
`;

fs.writeFileSync(targetFile, indexFileContent, 'utf8');

