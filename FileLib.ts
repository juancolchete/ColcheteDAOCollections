const fs = require('fs');
class FileLib{
    static gen(path, content) {
        fs.writeFile(path, content, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
}

export default FileLib;