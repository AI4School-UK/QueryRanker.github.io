
function gradeMult(){
    //send words to filter
    let words = filter(document.getElementById('listiInput').value)
    //loop through all the files 
    for(let i = 0;i < files.length; i++){
        let grade=0
        let checkfile = filter(files[i].content);
        for(let j = 0;j < words.length; j++){
            for(let k = 0;k < checkfile.length; k++){
                //if a word in the train file appears in the test file add 1
                if (words[j].toLowerCase() === checkfile[k].toLowerCase()){
                    grade += 1;}
            }
        }
        files[i].grade = grade
    }
    arrange()
}

