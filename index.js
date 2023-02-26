var t = 0;
var n = 0;
var time = 0;
var input = "";
var bInput = "";
var boutput = "";
var arrA = Array();
var arrB = Array();
var arrPreviousB = Array();
function load(){
    initTable();
    randomArray()
    copy()
    time = 0;
    bInput = ""
    boutput = "";
    document.querySelector("#bInput").innerHTML = "Binary input: "
    t = parseInt(document.querySelector("#t").value);
    n = parseInt(document.querySelector("#n").value);
    input = document.querySelector("#input").value;
    for (let i = 0; i < input.length; i++) {
        bInput += `${input[i].charCodeAt(0).toString(2)}`;
    }
    document.querySelector("#bInput").innerHTML += bInput;
    addRow("",arrA,arrB,"");
    generateOutput();
}

function generateOutput(){
    for (let i = 0; i < bInput.length; i++) {
        copy();
        if(bInput[i] == 1){
            randomArray();
        }
        isEqual(bInput[i]);
    }
    Output()
    
}
function randomArray(){
    for (let i = 0; i < n; i++) {
        let j = Math.floor((Math.random() * 10)) <= 4;
        arrA[i] = j;
        arrB[i] = !j;
    }
}

function copy(){
    for (let i = 0; i < arrB.length; i++) {
        arrPreviousB[i] = arrB[i]
    }
}

function isEqual(i){
    let out = '0';
    for (let i = 0; i < n; i++) {
        if (arrB[i] != arrPreviousB[i]) {
            out = '1';
            break
        }
    }
    boutput += out;
    addRow(i,arrA,arrB,out);
}

function Output(){
    document.querySelector("#boutput").innerHTML = `Binary output: ${boutput}`;
    document.querySelector("#output").innerHTML = "output: "
    document.querySelector("#output").innerHTML += boutput
    .split()
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('');
}

function initTable(){
    document.querySelector('table').innerHTML =      
    `<tr>
        <th>Time Interval</th>
        <th></th>
        <th>Input</th>
        <th></th>
        <th>Source A</th>
        <th></th>
        <th>Source B</th>
        <th></th>
        <th>output</th>
    </tr>`
}

function addRow(_input,_aarA,_aarB,_output){
let imgA = ''
let imgB = ''
    for (let i = 0; i < n; i++) {
        if(_aarA[i]){
            imgA+=`<img src="up.jpeg" style="height:20px" />`
        }else{
            imgA+=`<img src="down.jpg" style="height:20px" />`
        }
        if(_aarB[i]){
            imgB+=`<img src="up.jpeg" style="height:20px" />`
        }else{
            imgB+=`<img src="down.jpg" style="height:20px" />`
        }
    }

    document.querySelector('table').innerHTML +=
    `<tr>
        <td>${time} - ${time + t}</td>
        <td></td>
        <td>${_input}</td>
        <td></td>
        <td>${imgA}</td>
        <td></td>
        <td>${imgB}</td>
        <td></td>
        <td>${_output}</td>
    </tr>`
    time += t;
}