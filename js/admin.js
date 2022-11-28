function num_page(){
    var a = document.getElementById('num_page').value;
    if(localStorage.getItem('num_page') == null){
        localStorage.setItem("num_page", JSON.stringify(a));
    }
    else {
        localStorage.removeItem('num_page');
        localStorage.setItem("num_page", JSON.stringify(a));
    }
}