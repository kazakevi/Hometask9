const fse = require('fs-extra')
fse.ensureDir('./temp1', () => {
    console.log('Directory is created');
    fse.ensureFile("./temp1/file.txt", () =>{
        console.log('File is created');
            fse.ensureDir('./temp2', () =>{
                console.log('Directory2 is created');
                    fse.move("./temp1/file.txt", "/temp2/file.txt", () => {
                        console.log("File is moved!!!");
                            fse.remove("./temp2/file.txt", () => {
                                console.log("File is deleted!!!");
                                    fse.remove("./temp2", () => {
                                        console.log("Folder is deleted!!!");
                                            fse.remove("./temp1", () => {
                                                console.log("Folder2 is deleted!!!");
                                    })

                            })

            })
            
            })

    })
})


})
