const book = {
    infor : "",
    price: 0,
    img :"",
    genre:""
};
var userArray = [];
function openf(st){
    var a = document.getElementById(st);
    a.style.display = "flex";
    var b = document.getElementById("page_user");
    b.style.opacity = 0.25;
}
function closef(st){
    var a = document.getElementById(st);
    a.style.display = "none";
    var b = document.getElementById("page_user");
    b.style.opacity = 1;
}
function closeb(st){
    var a = document.getElementById(st);
    a.style.display = "block";
}
function closeb(st){
    var a = document.getElementById(st);
    a.style.display = "none";
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
function create_admin(){
    var a = "admin";
    if(localStorage.getItem('User') == null){
        alert("tk admin: admin mk: admin");
        var user = {username:'admin',password:'admin',email:'ntp@gmail.com',fullname:'Nguyen Thinh Phat',address:'2 adv - P16 - Q8',phone:'01234' };
        userArray.push(user);
        localStorage.setItem('User',JSON.stringify(userArray));
    }
}

function handle_signin(){
    console.log("helooo");
    if(localStorage.getItem('User') == null){
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('User'));
    var tk = document.getElementById("email_sin").value;
    var mk = document.getElementById("psw_sin").value;
        var flat = 0;
    for(i = 0; i < userArray.length; i++){
        if(tk == userArray[i].username && mk == userArray[i].password){
            closeb('signin');
            alert("bạn đã đăng nhập tài khoản " + tk);
            document.getElementById('infor_user').innerHTML = '<i class="fas fa-user-check" id="infor_user">'+userArray[i].fullname+'</i>';
            if(tk == 'admin' && mk == 'admin'){
                document.getElementById("admin_button").innerHTML = '<i class="fas fa-pencil-alt" onclick=""></i>';
            }
            flat = 1;
        }
    }
    if(flat = 0){
        alert("sai tài khoản hoặc mật khẩu vui lòng nhập lại");
        document.getElementById("signin_form").reset();
        return false;
    }
}

function adduser(){
        var a = window.location.href;
        if(a.indexOf("?") == -1){
            return false;
        }
        else {
        var userArray = JSON.parse(localStorage.getItem('User'));
        console.log(a);
        // lấy email từ url
        var temp = a.slice(a.indexOf("email_sup="),a.indexOf("&usern_sup"));
        console.log(temp);
        var emai = temp.slice(temp.indexOf("=")+1);
        var t = emai.indexOf("%40");
        if(t != -1){
            emai = emai.slice(0,t) + '@'+emai.slice(t+3);
        }
        console.log(emai);
        //lấy username
        temp = a.slice(a.indexOf("usern_sup="),a.indexOf("&psw_sup"));
        console.log(temp);
        var uname = temp.slice(temp.indexOf("=")+1);
        console.log(uname);
        //lấy password
        temp = a.slice(a.indexOf("psw_sup="),a.indexOf("&psw_repeat"))
        console.log(temp);
        var passw = temp.slice(temp.indexOf("=")+1);
        console.log(passw);
        // lap lại password
        temp = a.slice(a.indexOf("psw_repeat="),a.indexOf("&fullname"))
        console.log(temp);
        var rpassw = temp.slice(temp.indexOf("=")+1);
        console.log(rpassw);
        // lấy full name
        temp = a.slice(a.indexOf("fullname="));
        console.log(temp);
        var n = temp.slice(temp.indexOf("=")+1);
        var name = "";
        for(i = 0; i < n.length;i++){
            if(n[i] == "+"){
                name += " ";
            }
            else{
                name += n[i];
            }
        }
        console.log(name);
        var flat = 1;
        if(passw != rpassw){
            alert("Mật khẩu và lặp lại mật khẩu khác nhau vui lòng nhập lại");
            document.getElementById("signup_form").reset();
            flat = 0;
            return false;
        }
        else {
            for(i = 0; i < userArray.length; i++){
                if(userArray[i].username == uname){
                    alert("Tên tài khoản đã tồn tại");
                    document.getElementById("signup_form").reset();
                    flat = 0;
                    return false;
                }
                else if(uname.length < 5){
                    alert("Tên đăng nhập ít nhất 5 ký tự");
                    document.getElementById("usern_sup").reset();
                    flat = 0;
                    return false;
                }
            }
        }
        if(flat == 1){
            var user = {username:uname,password:passw,email:emai,fullname:name,address:'',phone:''};
            userArray.push(user);
            localStorage.setItem('User',JSON.stringify(userArray));
            alert("Đăng ký tài khoản thành công");
            closef('form_sup');
            openf('form_sin');
        }
    }
}
function test(){
    var a = "+12";
    console.log(a);
    a = a[0] + " " + a[2];
    console.log(a);
}
