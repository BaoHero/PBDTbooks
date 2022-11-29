function num_page() {
  var a = document.getElementById('num_page').value;
  if (localStorage.getItem('num_page') == null) {
    localStorage.setItem("num_page", JSON.stringify(a));
  }
  else {
    localStorage.removeItem('num_page');
    localStorage.setItem("num_page", JSON.stringify(a));
  }
}
var userArray = [];
var productArray = [];
var genresArray = [];
var dangnhap = [];
var admin = [];
var sanpham = [];
$(window).on('load', function (event) {
  $('body').removeClass('preloading');
  // $('.load').delay(1000).fadeOut('fast');
  $('.load').delay(1000).fadeOut('fast');
});
// Hàm đóng , mở 
function openb(st) {
  var a = document.getElementById(st);
  a.style.display = "block";
}
function closeb(st) {
  var a = document.getElementById(st);
  a.style.display = "none";
}
function openf(st) {
  var a = document.getElementById(st);
  a.style.display = "block";
  var b = document.getElementById("page_user");
  b.style.opacity = 0.25;
}
function closef(st) {
  var a = document.getElementById(st);
  a.style.display = "none";
  var b = document.getElementById("page_admin");
  b.style.opacity = 1;
}
function openflex(st) {
  var a = document.getElementById(st);
  a.style.display = "flex";
  var b = document.getElementById("page_admin");
  b.style.opacity = 0.25;
}

// Thêm sản phẩm
function addgenres() {
  console.log(genres.length);
  a = document.getElementById("add_genre").value;
  genres[genres.length] = a;
  console.log(a);
  for (i = 0; i < genres.length - 1; i++) {
    if (a == genres[i]) {
      alert("Thể loại đã nhập đã có vui lòng nhập lại");
      add_genre.focus();
      return false;
    }
    if (a == "") {
      alert("Không được nhập rỗng");
      add_genre.focus();
      return false;
    }
  }
  document.getElementById("genres__item").innerHTML +=
    '<a href="#">' + genres[genres.length - 1] + "</a>";
  for (i = 0; i < genres.length; i++) {
    console.log(genres[i]);
  }
}

function login_admin() {
  location.href = "admin.html";
}
function reload_site(s) {
  location.href = s;
}

// Hàm đăng xuất
function logout() {
  confirm("Bạn có chắc muốn đăng xuất");
  sessionStorage.removeItem("dangnhap");
  location.href = "index.html";
}

// Kiểm tra tài khoản khi đăng ký
function kiemtratk(st) {
  if (localStorage.getItem("User") == null) {
    return false;
  }
  userArray = JSON.parse(localStorage.getItem("User"));
  if (st.length < 5 && st.length > 0) {
    alert("ten tai khoan phai lon hon 5 ky tu");
    return false;
  }
  if (st == "") {
    alert("Không được để trống tài khoản.");
    return false;
  }
  for (i = 0; i < userArray.length; i++) {
    if (userArray[i].username == st) {
      alert("tai khoan da ton tai");
      return false;
    }
  }
  return true;
}
function kiemtramk(mk, rpmk) {
  if (mk == "" || rpmk == "") {
    alert("Không được để trống mật khẩu");
    return false
  }
  else if (mk <= 5 || mk != rpmk) {
    alert("mật khẩu phải lớn hơn 5 ký tự và lặp lại phải giống");
    return false;
  }
  else return true;
}

function kiemtraemail(event) {
  if (event == "") {
    alert("Không được để trống Email.");
    return false;
  }
  return true;
}

function kiemtrafullname(event) {
  if (event == "") {
    alert("Không được để trống họ tên.");
    return false;
  }
  return true;
}


function adduser() {
  if (localStorage.getItem("User") == null) {
    return false;
  }
  userArray = JSON.parse(localStorage.getItem("User"));
  var tk = document.getElementById("usern_sup").value;
  var emai = document.getElementById("email_sup").value;
  var mk = document.getElementById("psw_sup").value;
  var rpmk = document.getElementById("psw_repeat").value;
  var name = document.getElementById("fullname").value;
  console.log(tk + mk + rpmk + mk.length);
  if (kiemtratk(tk) == false) {
    var inputtk = document.getElementById("usern_sup");
    inputtk.style.borderBlockEndColor = "red";
    usern_sup.focus();
  }
  else if (kiemtraemail(emai) == false) {
    var inputemail = document.getElementById("email_sup");
    inputemail.style.borderBlockEndColor = "red";
    email_sup.focus();
  }
  else if (kiemtramk(mk, rpmk) == false) {
    var inputmk = document.getElementById("psw_sup");
    var inputrpmk = document.getElementById("psw_repeat");
    inputmk.style.borderBlockEndColor = "red";
    inputrpmk.style.borderBlockEndColor = "red";
    document.getElementById("psw_sup").focus();
  }
  else if (kiemtrafullname(name) == false) {
    var inputfullname = document.getElementById("fullname");
    inputfullname.style.borderBlockEndColor = "red";
    fullname.focus();
  }
  else {
    var user = {
      username: tk,
      password: mk,
      email: emai,
      fullname: name,
      address: "",
      phone: "",
    };
    userArray.push(user);
    alert("đăng ký thành công");
    localStorage.setItem("User", JSON.stringify(userArray));
  }
}


// Tạo mảng danh sách để có thể tìm kiếm dựa trên danh mục
function createGenres() {
  if (localStorage.getItem("genres") == null) {
    genresArray = [
      { genres_name: "Comics & Graphic Novels", id: "CGN" },
      { genres_name: "Mystery, thriller and suspense", id: "MTS" },
      { genres_name: "Crafts, Hobbies & Home", id: "CHH" },
      { genres_name: "Computers and Technology", id: "CT" },
    ];
    localStorage.setItem("genres", JSON.stringify(genresArray));
  }
}
// Hiển thị danh mục thể loại
function show_genres() {
  if (localStorage.getItem("genres") == null) {
    return false;
  }
  var a = "";
  genresArray = JSON.parse(localStorage.getItem("genres"));
  for (i = 0; i < genresArray.length; i++) {
    a =
      a +
      '<a href="?genres=' +
      genresArray[i].id +
      '" class="genres__item" id="' +
      genresArray[i].id +
      '">' +
      genresArray[i].genres_name +
      "</a>";
  }
  document.getElementById("genres__list").innerHTML += a;
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
        "<p>" + productArray[i].information + "</p>"
      document.querySelector(".modify").innerHTML = `<a href = "#addsp" type="button" onclick="closef('infor_book') + suasanpham('${productArray[i].productId}')">Thay doi thong tin san pham</a>`;
    }
  }
}
function splitgenres(a) {
  var b = a.split(" ");
  var c = ''
  for (i = 0; i < b.length; i++) {
    c += b[i][0];
  }
  
  c = c.toUpperCase();
  return c;
}
function suasanpham(a) {
  if (localStorage.getItem('product') == null) {
    return false;
  }
  if (localStorage.getItem('genres') == null) {
    return false;
  }
  var index;
  var index2;
  productArray = JSON.parse(localStorage.getItem('product'));
  genresArray = JSON.parse(localStorage.getItem('genres'));
  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].productId == a) {
      index = i;
    }
  }
  for (i = 0; i < genresArray.length; i++) {
    if (productArray[index].genresId == genresArray[i].id) {
      index2 = i;
    }
  }
  console.log(genresArray[index2].genres_name);
  document.getElementById('modifyGenresId').setAttribute("value", genresArray[index2].genres_name);
  document.getElementById('modifyAuthor').setAttribute("value", productArray[index].author);
  document.getElementById('modifyImg').setAttribute("value", productArray[index].img);
  document.getElementById('modifyName').setAttribute("value", productArray[index].name);
  document.getElementById('modifyPrice').setAttribute("value", productArray[index].price);
  document.getElementById('modifyInformation').setAttribute("value", productArray[index].information);
  document.getElementById('modifyproduct_button').setAttribute("onclick", `ModifyProduct('${productArray[index].productId}')`);
}
function ModifyProduct(a) {
  productArray = JSON.parse(localStorage.getItem("product"));
  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].productId == a) {
      index = i;
    }
  }
  productArray[index].productId = Number(a);
  productArray[index].genresId= document.getElementById("modifyGenresId").value;
  productArray[index].author= document.getElementById("modifyAuthor").value;
  productArray[index].img= document.getElementById("modifyImg").value;
  productArray[index].name= document.getElementById("modifyName").value;
  productArray[index].price= Number(document.getElementById("modifyPrice").value);
  productArray[index].information= document.getElementById("modifyInformation").value;

    localStorage.setItem("product", JSON.stringify(productArray));
}
// Thêm sản phẩm
function AddProduct() {
  productArray = JSON.parse(localStorage.getItem("product"));
  var newid = Number(productArray[productArray.length-1].productId+1);
  var newproduct = {
    productId: newid,
    genresId: splitgenres(document.getElementById("addGenresId").value),
    author: document.getElementById("addAuthor").value,
    img: document.getElementById("addImg").value,
    name: document.getElementById("addName").value,
    price: document.getElementById("addPrice").value,
    information: document.getElementById("addInformation").value,
  };
  productArray.push(newproduct);
  genresArray = JSON.parse(localStorage.getItem("genres"));
  var check = 0;
  var genrestemp = splitgenres(document.getElementById('addGenresId').value);
  console.log(genrestemp);
  console.log(genresArray[0].id)
  for(i = 0; i< genresArray.length; i++){
    if(genresArray[i].id == genrestemp){
      check = 1;
      break;
    }
  }
  if(check == 0){
    var newgenres = {genres_name:document.getElementById("addGenresId").value,id:splitgenres(document.getElementById("addGenresId").value)};
    genresArray.push(newgenres);
    localStorage.setItem("genres", JSON.stringify(genresArray));
  }
  localStorage.setItem("product", JSON.stringify(productArray));
}

//Xóa sản phẩm
function deleteProduct(deleteproductId) {
  productArray = JSON.parse(localStorage.getItem("product"));
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].productId == deleteproductId) {
      if (confirm("Chắc chưa?")) {
        productArray.splice(i, 1);
      }
    }
  }
}
//PhanTrang

function searching() {
  var tk = document.getElementById('searbox').value;

}
function increase_sort(list) {
  for (i = 0; i < list.length - 1; i++) {
    for (j = i + 1; j < list.length; j++) {
      if (list[i].price > list[j].price) {
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}
function decrease_sort(list) {
  for (i = 0; i < list.length - 1; i++) {
    for (j = i + 1; j < list.length; j++) {
      if (list[i].price < list[j].price) {
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}
function show_list() {
  if (localStorage.getItem("product") == null) {
    return false;
  }
  var itemPerPage = 0;
  if (localStorage.getItem('num_page') == null) {
    var itemPerPage = 8;
  }
  else {
    var itemPerPage = Number(JSON.parse(localStorage.getItem("num_page")));
  }
  productArray = JSON.parse(localStorage.getItem("product"));
  sessionStorage.removeItem('sp');
  var a = getQueryVariable('genres');
  var b = getQueryVariable('search');
  const trang = 8
  var tem1 = productArray;
  if ((a != undefined && a != 'danhsach') || b != undefined) {
    var tem1 = [];
    if (a != undefined && b == undefined) {
      for (i = 0; i < productArray.length; i++) {
        if (productArray[i].genresId == a) {
          tem1.push(productArray[i]);
        }
      }
    }
    else if (b != undefined && a == undefined) {
      for (i = 0; i < productArray.length; i++) {
        if (productArray[i].name == b) {
          tem1.push(productArray[i]);
        }
      }
    }
    else {
      for (i = 0; i < productArray.length; i++) {
        if (productArray[i].name == b && productArray[i].genresID == a) {
          tem1.push(productArray[i]);
        }
      }
    }
  }

  var a = (getQueryVariable("page"));
  if (a == undefined) {
    a = 1;
  }
  else {
    a = Number(a);
  }
  tempitem = tem1;
  tempitem.length;
  totalPages = Math.ceil(tempitem.length / itemPerPage);
  PagesList(totalPages);
  var start = (a - 1) * itemPerPage;
  //sap xep
  var e = document.getElementById('sort').value;
  if (e == "1") {
    tempitem = increase_sort(tempitem);
  }
  else if (e == "2") {
    tempitem = decrease_sort(tempitem);
  }
  show(tempitem, start, itemPerPage + start);
}
function search() {

}
function show(arr, start, end) {
  var temp1 = "'infor_book'";
  var t = '';
  console.log(start);
  console.log(end);
  if (end > arr.length) {
    end = arr.length;
  }
  for (i = start; i < end; i++) {
    var t =
      t +
      '<div id="' +
      arr[i].productId +
      '"class="item" onclick="show_infor_book(' +
      arr[i].productId +
      ") +openflex(" +
      temp1 +
      ')"><div class="item__inside"><div class="img_book"><img src="' +
      arr[i].img +
      '" alt=""></div><div class="book_name">' +
      arr[i].name +
      '</div><div class="book_price"><span>$' +
      arr[i].price +
      "</span></div></div></div>";
  }
  document.getElementById("list__books").innerHTML = t;
}

function PagesList(total) {
  var b = window.location.href;
  let html = '';
  for (let i = 1; i <= total; i++) {

    html += `
          <a class="decopage" href="${getPageVariable(b)}&page=${i}">${i}              
          </a>
      `;
  }
  document.querySelector(".list_page").innerHTML = html;
}
function filter_price(arr, start, end) {
  var temp = [];
  if (end != -1) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].price >= start && arr[i].price <= end) {
        temp.push(arr[i]);
      }
    }
  }
  else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].price >= start) {
        temp.push(arr[i]);
      }
    }
  }
  return temp;
}
function getPageVariable(variable) {
  var query = window.location.href;
  var temp = query.split("&page=");
  if (temp[0].indexOf('?') == -1) {
    temp[0] = temp[0] + '?';
  }
  return decodeURIComponent(temp[0]);
}
// renderPagesList(totalPages);
function changePage(productList) {
  const pagesList = document.querySelectorAll(".page_list a");
  pagesList.forEach(function (item, index) {
    item.onclick = function () {
      let value = index + 1;
      currentPage = value
      s = (currentPage - 1) * itemPerPage;
      e = currentPage * itemPerPage;
      renderProduct(productList, s, e);
    }
  })
}

var cart = [];
function addtocart(product) {
  openb('comfirm_buy');
  console.log(product)
  if (sessionStorage.getItem('dangnhap') == null) {
    alert("Bạn chưa đăng nhập!");
    closeb("infor_book");
    closeb("comfirm_buy")
    openb("form_sin");
    closeb('comfirm_buy')
    return false;
  }
  dangnhap = JSON.parse(sessionStorage.getItem('dangnhap'));
  const yes = document.querySelector('.yes');
  const no = document.querySelector('.no');

  var sl = document.getElementById("numbook").value;
  console.log(sl);
  if (sl <= 0) {
    alert("Số lượng sai quy tắc!");
    closeb('comfirm_buy');
    return false;
  }
  yes.addEventListener("click", () => {
    item1 = { userid: dangnhap[0], product: product, soluong: sl };
    cart.push(item1);
    sessionStorage.setItem("tempcart", JSON.stringify(cart));
    closeb('comfirm_buy');
  });
  no.addEventListener("click", () => {
    closeb('comfirm_buy');
  })
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}


function buybook() {
  var a = getQueryVariable("dangnhap");
  if (a != "true") {
    closef("infor_book");
    openf("form_sin");
  } else {
  }
}
function usersite() {
  window.location.href = "index.html";
}
function open_left_menu() {
  var a = document.querySelector(".left-menu-close");
  var c = document.querySelector(".left-menu-inside");
  c.style.display = "block";
  a.classList.add("left-menu-open");
  var b = document.querySelector(".menu-background");

  b.style.display = "block";
  b.addEventListener("click", () => {
    a.classList.remove("left-menu-open");
    c.style.display = "none";
    b.style.display = "none";
  });
}
