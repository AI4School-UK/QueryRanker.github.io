let files = [];
const whitelist ="qwertyuiopasdfghjklzxcvbvnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"

const Header = document.createElement('div');
Header.className = "row";
const scoreHeader = document.createElement('h5')
scoreHeader.className = "col-6";
scoreHeader.textContent = "Retrieval Score";
const fileHeader = document.createElement('h5')
fileHeader.className = "col-6";
fileHeader.textContent = "File Name";
Header.appendChild(scoreHeader)
Header.appendChild(fileHeader)

document.getElementById('filePicker').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});
//upload files
document.getElementById('fileInput').addEventListener('change', (event) => {
    const fileArea = document.getElementById('mainBody');
    const items = event.target.files;
    //loop through all the files
    for (let i = 0; i < items.length; i++) {
        const file = items[i];
        const reader = new FileReader();
        reader.onload = function(event) {
            //fetch content of the file
            const fileContent = event.target.result;
            let newfile = 1
            //check by name if its a new file or not
            for(let j = 0; j < files.length; j++){
                if (files[j].name === file.name){
                    newfile = 0;
                    files[j].content = fileContent;
                    files[j].grade = 0;
                    files[j].upload = 1;
                    const Score = document.getElementById(files[j].name)
                    Score.textContent = files[j].grade;
                    arrange()
                }
            }
            //if new file add it to the files list
            if(newfile){
                files.push({
                    name: file.name,
                    content: fileContent,
                    grade: 0,
                    upload: 1
                });
                //add the file to the html
                const fileRow = document.createElement('div');
                fileRow.className = "row";
                const fileScore = document.createElement('div')
                fileScore.className = "col-6";
                fileScore.textContent = 0;
                fileScore.id = file.name
                const fileName = document.createElement('div')
                fileName.className = "col-6";
                const fileLink = document.createElement('a')
                fileLink.textContent = file.name;
                const blob = new Blob([fileContent], { type: "text/plain" });
                const fileURL = URL.createObjectURL(blob);
                fileLink.href = fileURL;
                fileLink.target = '_blank';
                fileName.appendChild(fileLink)
                fileRow.appendChild(fileScore)
                fileRow.appendChild(fileName)
                fileArea.appendChild(fileRow);
            } 
        };
        reader.onerror = function() {
            alert(`An error occurred while reading ${file.name}.`);
        };
        reader.readAsText(file);
    }
        
      
});  

document.getElementById('queryPicker').addEventListener('click', () => {
    document.getElementById('queryInput').click();
});
//upload query file
document.getElementById('queryInput').addEventListener('change', (event) => {
    const items = event.target.files;
    //check if there exists a file
    if(items[0]){
        const file = items[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            //fetch content of the file and change all enter keys to spaces
            const fileContent = event.target.result;
            let filter = fileContent.replace(/(\r\n|\r|\n)/g, ' ');
            document.getElementById('listiInput').value = filter;
        };
        reader.onerror = function() {
            alert(`An error occurred while reading ${file.name}.`);
        };
        reader.readAsText(file);
    }
}); 


function arrange(){
    files.sort((a, b) => b.grade - a.grade);
    const fileArea = document.getElementById('mainBody');
    fileArea.innerHTML = ""
    fileArea.appendChild(Header)
    for(let i = 0; i < files.length; i++){

        const fileRow = document.createElement('div');
        fileRow.className = "row";

        const fileScore = document.createElement('div')
        fileScore.className = "col-6";
        fileScore.textContent = files[i].grade;
        fileScore.id = files[i].name

        const fileName = document.createElement('div')
        fileName.className = "col-6";
        const fileLink = document.createElement('a')
        fileLink.textContent = files[i].name;
        const blob = new Blob([files[i].content], { type: "text/plain" });
        const fileURL = URL.createObjectURL(blob);
        fileLink.href = fileURL;
        fileLink.target = '_blank';

        fileName.appendChild(fileLink)

        fileRow.appendChild(fileScore)
        fileRow.appendChild(fileName)

        fileArea.appendChild(fileRow);
    }
}