//Hien thi cart
var cart = []
var productArray = []
var userArray = []
var dangnhap = []
function showcarts() {
    if (JSON.parse(sessionStorage.getItem('dangnhap')) == null) {
        return false;
    }
    dangnhap = JSON.parse(sessionStorage.getItem('dangnhap'));
    userArray = JSON.parse(localStorage.getItem('User'));
    var index;
    for (i = 0; i < userArray.length; i++) {
        if (dangnhap[0].username == userArray[i].username) {
            index = i; break;
        }
    }
    var s = ''
    for (i = 0; i < userArray[index].giohang.length; i++) {
        console.log(i)
        console.log(userArray[index].giohang.length)
        s = s + `<div id="hoadon">
        <div class="hoadon_infor">
            <div class="tendon">${userArray[index].giohang[i].mahd}</div>
            <div class="buydate">${userArray[index].giohang[i].buydate}</div>
            <div class="${ttcolor(userArray[index].giohang[i].tt)}">${userArray[index].giohang[i].tt}</div>
            <div class="giadon">${userArray[index].giohang[i].total}</div>
            <div class="huydon_right">
                <div class="huydon" onclick="huyitem(${index + ',' +i})">Huỷ</div>
                <i class="fa fa-caret-down" aria-hidden="true" onclick="open_hoadon(${String(i)})"></i>
            </div>
        </div>
    </div>
    <hr>
    <div class="hoadon_dropdown" id="${'sp' + i}">
        <div class="dropdown" id=${'dsp' + i}>
            <div class="ct_hoadon">
                ${'' + show_item(index, i)}
            </div>
            <div class="total-price">
                <table>
                    <tr>
                        <td>Phí vận hành web:</td>
                        <td>$30</td>
                    </tr>
                    <tr>
                        <td>Tổng cộng:</td>
                        <td>$${userArray[index].giohang[i].total + 30}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <hr>`;
        console.log(i)
    }
    console.log(s);
    document.querySelector('.chuahoadon').innerHTML = s;
}
function huyitem(index,n) {
    
    if (localStorage.getItem('User') == null) {
        return false;
    }
    userArray= JSON.parse(localStorage.getItem('User'));
    for(i = 0; i< userArray[index].giohang.length; i++){
        console.log('heln')
        if (i == n) {
            console.log(n);
            if (confirm("Bạn chắc muốn huỷ sản phẩm này??")) {
                userArray[index].giohang.splice(i, 1);
                localStorage.setItem("User", JSON.stringify(userArray));
                location.reload();
            }
        }
    }
    
}

function show_item(index, cart) {
    dangnhap = JSON.parse(sessionStorage.getItem('dangnhap'));
    userArray = JSON.parse(localStorage.getItem('User'));
    var temp = ''
    for (j = 0; j < userArray[index].giohang[cart].item.length; j++) {
        temp = temp + showsp(userArray[index].giohang[cart].item[j].sp);
    }
    console.log(temp)
    return temp;
}
function showsp(sp) {
    temp = `<div id="${sp.productId}" class="item" onclick="show_infor_book('${sp.productId}') +turnonflex('infor_book')">
        <div class="item__inside">
            <div class="img_book"><img src="${sp.img}" alt=""></div>
            <div class="book_name">${sp.name}</div>
            <div class="book_price"><span>$${sp.price}</span></div>
        </div>
    </div>`

    return temp;
}
function show_infor_book(s) {
    if (localStorage.getItem("product") == null) {
        return false;
    }
    productArray = JSON.parse(localStorage.getItem("product"));
    for (i = 0; i < productArray.length; i++) {
        if (productArray[i].productId == s) {
            document.getElementById("infor_book_img").innerHTML =
                '<img src="' + productArray[i].img + '" alt="">';
            document.getElementById("book_title").innerHTML =
                "<span>" + productArray[i].name + "</span>";
            document.getElementById("author_name").innerHTML =
                "By <span>" + productArray[i].author + "</span> (Author)";
            document.getElementById("price").innerHTML =
                "$ <span>" + productArray[i].price + "</span>";
            document.getElementById("informa").innerHTML =
                "<p>" + productArray[i].information + "</p>";
        }
    }
}

function open_hoadon(id) {
    var a = document.querySelector('#sp' + id);
    var b = document.querySelector('#dsp' + id)
    b.classList.toggle('drop')
    a.classList.toggle('open_hoadon');
}
function turnon(idturnon) {
    const a = document.querySelector(idturnon);
    const b = document.querySelector(".menu-background");
    var c = document.getElementById("page_main");
    b.style.display = "block";
    a.style.display = "block";
    b.addEventListener("click", () => {
        a.style.display = "none";
        c.style.opacity = 1;
        b.style.display = "none";
    });
}

function turnoffbg() {
    const a = document.querySelector(".menu-background");
    a.style.display = "none";
}

function turnoff(evnet) {
    const a = document.querySelector(evnet);
    a.style.display = "none";
}

function turnonflex(st) {
    const a = document.querySelector(".menu-background");
    var b = document.getElementById("page_main");
    var c = document.getElementById(st);
    a.style.display = "block";
    c.style.display = "flex";
    // b.style.opacity = 0.25;
    a.addEventListener("click", () => {
        c.style.display = "none";
        b.style.opacity = 1;
        a.style.display = "none";
    });
}
function closef(st) {
    var a = document.getElementById(st);
    a.style.display = "none";
}
function openflex(st) {
    var a = document.getElementById(st);
    a.style.display = "flex";
    var b = document.getElementById("page_main");
    b.style.opacity = 0.25;
}
function reload_site(s) {
    location.href = s;
}
function ttcolor(st){
    if(st == "Đã xử lý"){
      return 'trangthaixanh'
    }
    else return 'trangthai'
  }