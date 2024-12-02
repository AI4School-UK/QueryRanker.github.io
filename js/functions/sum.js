
//function gradeSum(){
//    //send words to filter
//    let words = filter(document.getElementById('listiInput').value)
//    console.log(words)
//    
//    
//    //loop through all the files 
//    for(let i = 0;i < files.length; i++){
//        let grade=0
//        let checkfile = filter(files[i].content)
//        //delete duplicates of each word
//        checkfile = [...new Set(checkfile.map(checkfile => checkfile.toLowerCase()))];
//        for(let j = 0;j < checkfile.length; j++){
//            for(let k = 0;k < words.length; k++){
//                //if a word in the train file appears in the test file add 1
//                if (words[k].toLowerCase() === checkfile[j].toLowerCase()){
//                    grade += 1;
//                }
//            }
//        }
//        files[i].grade = grade
//    }
//    arrange()
//}