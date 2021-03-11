studentarray=[];
function submit(){
    var name1=document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;
    var name3=document.getElementById("n3").value;
    var name4=document.getElementById("n4").value;
    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);
    console.log (studentarray);
    document.getElementById("displayname").innerHTML=studentarray;
    document.getElementById("sb").style.display="none";
    document.getElementById("sb2").style.display="inline-block";
}
function sorting(){
    studentarray.sort();
    console.log (studentarray);
    document.getElementById("displayname").innerHTML=studentarray;
}