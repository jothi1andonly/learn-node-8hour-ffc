const fs = require('fs');
console.log("starting async")
fs.readFile('./content/sub-folder/first file','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }else{
        const first= result
        fs.readFile('./content/sub-folder/second file','utf8',(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            else{
                const second = result
                fs.writeFile('./content/write async',`${first} ${second}`,(err,result)=>{
                    if (err){
                        console.error();
                        return;
                    }
                    console.log("writing has been done")
                })
            }
        })
    }
})
console.log("node is free now")