const book = {
    infor : "",
    price: 0,
    img :"",
    genre:""
};
genres = ["Hành động", "Phiêu lưu", "Xuyên Không"];

function handle_signin(){
    var a = document.getElementById("page_admin");
    
    if(a.style.display == "none"){
        a.style.display = "block";
    }
    else {
        a.style.display = "none";
    }
}
function dangnhap(){
    var a = document.getElementById("form_sin");
    a.style.display = "flex";
    var b = document.getElementById("page_user");
    b.style.opacity = 0.25;
}
function closedn(){
    var a = document.getElementById("form_sin");
    a.style.display = "none";
    var b = document.getElementById("page_user");
    b.style.opacity = 1;
}
function addgenres(){
    console.log(genres.length);
    a = document.getElementById("add_genre").value;
    genres[genres.length] = a;
    console.log(a);
    for(i = 0 ; i < genres.length-1;i++){
        if(a == genres[i]){
            alert("Thể loại đã nhập đã có vui lòng nhập lại");
            add_genre.focus();
            return false;
        }
        if(a == ""){
            alert("Không được nhập rỗng");
            add_genre.focus();
            return false;
        }
    }
    document.getElementById("genres__item").innerHTML += '<a href="#">'+genres[genres.length-1]+'</a>';
    for(i = 0 ; i < genres.length;i++){
        console.log(genres[i]);
    }
}
function show_password(){
    a=document.getElementById("psw");
    b = document.getElementById("showpsw");
    if(b.checked == true)
        a.setAttribute("type","text");
    else{
        a.setAttribute("type","password");
    }
}
