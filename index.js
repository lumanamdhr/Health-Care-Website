function validatecontact(){
    var n= document.contactform.name.value;
    var message=document.contactform.message.value;
    var e= document.contactform.email.value;
    var atposition=e.indexOf("@");
    var dotposition=e.lastIndexOf(".");
    if(n==""|| n=="NULL"){
        alert("Please enter your name");
        return false;
    }
    else if(atposition<1||dotposition<atposition+2||dotposition+2>=e.length){
            alert("Please enter a valid email address");
            return false;
        }
    else{
        if(message==""|| message=="NULL"){
            alert("Please provide your meassage for us");
            return false;
        }
    }
}

function validateform(){
    var n= document.myform.name.value;
    var fname=document.myform.f_nam.value;
    var num=document.myform.number.value;
    var e= document.myform.email.value;
    var atposition=e.indexOf("@");
    var dotposition=e.lastIndexOf(".");
    if(n==""|| n=="NULL"){
        alert("Please enter your name");
        return false;
    }
    else if(fname==""||fname=="NULL"){
        alert("Please enter your father's name");
        return false;
    }
    else if(atposition<1||dotposition<atposition+2||dotposition+2>=e.length){
            alert("Please enter a valid email address");
            return false;
        }
    else{
        if(isNaN(num)){
            alert("Enter Number Value only");
            return false;
        }
    }
}