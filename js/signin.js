function show_password(){
    a=document.getElementById("psw");
    b = document.getElementById("showpsw");
    if(b.checked == true)
        a.setAttribute("type","text");
    else{
        a.setAttribute("type","password");
    }
}