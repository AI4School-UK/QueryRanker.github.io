

function gradeSearch(){
    //send words to filter
    let words = filter(document.getElementById('listiInput').value)
    
    //loop through all the files 
    for(let i = 0;i < files.length; i++){
        let grade=0
        let checkfile = filter(files[i].content)
        //delete duplicates of each word in the train
        checkfile = [...new Set(checkfile.map(checkfile => checkfile.toLowerCase()))];
        for(let j = 0;j < checkfile.length; j++){
            let infile = 0
            //check if a word in train appears in test, if yes change infile to 1 and go to next word
            for(let k = 0;k < words.length; k++){
                if (words[k].toLowerCase() === checkfile[j].toLowerCase()){
                    infile = 1;
                    break
                }
            }
            grade += infile
        }
        files[i].grade = grade
    }
    arrange()
}