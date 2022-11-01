const book = {
    infor : "",
    price: 0,
    img :"",
    genre:""
};
genres = ["Hành động", "Phiêu lưu", "Xuyên Không"];

function handle_signin(){
    a = document.getElementById("page_admin");
    b = document.getElementById("page_user");
    console.log(a.style.display);
    console.log(b.style.display);
    none = "none";
    block = "block";
    if(a.style.display == "none"){
        a.style.display = "block";
        b.style.display = "none";
    }
    else {
        a.style.display = "none";
        b.style.display = "block";
    }
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
