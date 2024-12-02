document.getElementById('upload_file').addEventListener('click', (event) => {    
    const txtContent = document.getElementById('message-text').value
    const textTitle = document.getElementById('recipient-name').value
    //if either body or title is empty send an alert
    if (txtContent === "" || textTitle === "") {
        alert("Both Title and Body are required!");
      }
    //else add the created text to the txt file list
    else{
        files.push({
            name: `${textTitle}.txt`,
            content: txtContent,
            grade: 0,
            upload: 0
        });
        arrange()
        document.getElementById('message-text').value = ""
        document.getElementById('recipient-name').value = ""
        $('#exampleModal').modal('hide');
    }

});

//show created documents
document.getElementById('createdDocumentsToggle').addEventListener('click', (event) => {    
    $('#createdDocuments').modal('show');
    const area = document.getElementById('createdDocumentsId')
    //empty its html
    area.innerHTML = ""

    //manually add the header
    const Header = document.createElement('div');
    Header.className = "row";
    const fileHeader = document.createElement('h5')
    fileHeader.className = "col-6";
    fileHeader.textContent = "File Name";
    Header.appendChild(fileHeader)

    area.appendChild(Header)
    files.sort((a, b) => b.grade - a.grade);
    for(let i = 0; i < files.length; i++){
        {
            //loop through all the files and add them to the show documents
            const fileRow = document.createElement('div');
            fileRow.className = "row";

            const fileName = document.createElement('div')
            fileName.className = "col-6";
            const fileLink = document.createElement('a')
            fileLink.textContent = files[i].name;
            const blob = new Blob([files[i].content], { type: "text/plain" });
            const fileURL = URL.createObjectURL(blob);
            fileLink.href = fileURL;
            fileLink.target = '_blank';
            fileName.appendChild(fileLink)

            fileRow.appendChild(fileName)
            area.appendChild(fileRow);
        }
    }  
});

//slice all the irrelavent content such as double spaces 
function slice(words){
    for(let j = 0;j < words.length; j++){
        while (words[j].length > 0) {
            if (!whitelist.includes(words[j][words[j].length - 1])) {
                words[j] = words[j].slice(0, -1);}
            else if (!whitelist.includes(words[j][0])) {
                words[j] = words[j].slice(1);}
            else {break;}
        }
    }
    return words
}

//filter all characters that are not a-z, A-Z, 0-9
function filter(txt){
    let filterInput = txt.replace(/(\r\n|\r|\n)/g, ' ');
    filterInput = filterInput.replace(/'\w*/g, ''); 
    filterInput = filterInput.replace(/[^a-zA-Z0-9 ]/g, ' ');
    let words = filterInput.split(' ')
    words = slice(words)
    words = words.filter(item => item !== "");
    return words
}