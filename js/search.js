document.getElementById('searchFile').addEventListener('click', (event) => {
    const functionValue = document.getElementById('dropdown01').textContent;
    //Check the value selected in the dropdown and pick according to it
    //if(functionValue === document.getElementById('gradeSum').textContent){gradeSum()}
    if(functionValue === document.getElementById('gradeSearch').textContent){gradeSearch()}
    else if(functionValue === document.getElementById('gradeMult').textContent){gradeMult()}
    else{alert("Select a ranking function")}
});

//change the textcontent of the ranking function to the selected name
//document.getElementById('gradeSum').addEventListener('click', (event) => {
//    const functionValue = document.getElementById('dropdown01');
//    functionValue.textContent = document.getElementById('gradeSum').textContent;
//});

document.getElementById('gradeSearch').addEventListener('click', (event) => {
    const functionValue = document.getElementById('dropdown01');
    functionValue.textContent = document.getElementById('gradeSearch').textContent;
});

document.getElementById('gradeMult').addEventListener('click', (event) => {
    const functionValue = document.getElementById('dropdown01');
    functionValue.textContent = document.getElementById('gradeMult').textContent;
});
