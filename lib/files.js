// This serves as basic file management

// NEEDS TO:
// 1. Get the current directory (to get a default repo name)
// 2. check whether a directory exists (to determine whether the current folder is already
// a Git repository by looking for a folder named .git).

const fs = require('fs');
const path = require('path');

module.exports = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },
    direcrtoryExists: (FilePath) => {
        return fs.existsSync(filePath);
    }
};