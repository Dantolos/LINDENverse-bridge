const fs = require('fs');
const path = require('path');

export function getDirectoryStructure(directory) {
     const pagesDirectory = path.join(process.cwd(), 'pages/data', directory);
     const files = fs.readdirSync(pagesDirectory);

     const structure = files.map((file) => {
          const filePath = path.join(pagesDirectory, file);
          const stats = fs.statSync(filePath);

          if (stats.isDirectory()) {
               return {
                    name: file,
                    type: 'directory',
                    children: getDirectoryStructure(path.join(directory, file)),
               };
          } else {
               return {
                    name: file,
                    type: 'file',
               };
          }
     });

     return structure;
}
