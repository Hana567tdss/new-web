var  numfield1=document.getElementById('numfield1');
var  numfield2=document.getElementById('numfield2');
var  resultfield=document.getElementById('resultfield');
// alert(numfield1.value);
// numfield1.value ="hi sd";

// resultfield.innerText = "test2";
var form = document.getElementById('xiswhatpercentofy');

form.addEventListener('submit', function(event) {
    if (!numfield1.value || !numfield2.value){
        alert("please enter value in the fields");
    }
    else{
        var x = parseFloat(numfield1.value);
        var y = parseFloat(numfield2.value);
    //    alert(x + y);
    var result= x / y;
    var percent= result*100;
    // alert(percent);
    resultfield.innerText="answer:" + percent + "%";
    event.preventDefault();
    }
     } );