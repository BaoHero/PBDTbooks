var userArray = [];
var productArray = [];
var genresArray = [];
var dangnhap = [];
var admin = [];
var sanpham = [];
$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  // $('.load').delay(1000).fadeOut('fast');
  $(".load").delay(1000).fadeOut("fast");
});
function createProduct() {
  if (localStorage.getItem("product") == null) {
    productArray = [
      // Comics & Graphic Novels
      {
        productId: 1001,
        genresId: "CGN",
        author: "Todd Mcfarlane",
        img: "imgs/1001.webp",
        name: "Spawn Compendium, Color Edition, Volume 1",
        price: 1000,
        information:
          "TODD McFARLANE unleashed his signature creation, SPAWN, in 1992. In doing so, he created the most successful independent comic book in history. Add in collaborations with industry giants ALAN MOORE, FRANK MILLER, TONY DANIEL, and GRANT MORRISON, and SPAWN's future as a legend was sealed.",
      },
      {
        productId: 1002,
        genresId: "CGN",
        author: "Sam Hamm",
        img: "imgs/1002.webp",
        name: "Batman 89",
        price: 400,
        information:
          "Continuing the adventures of the Dark Knight from Tim Burton's classic movie Batman, Batman '89 pulls on a number of threads left dangling by that film while continuing in the tradition of DC's very successful Batman '66 series.",
      },
      {
        productId: 1003,
        genresId: "CGN",
        author: "Ryan north",
        img: "imgs/1003.jpg",
        name: "Fantastic Four (2022-)",
        price: 100,
        information:
          "Whatever Happened To The Fantastic Four?” It’s the start of a new era for the Fantastic Four...and they’re already in a ton of trouble. Something has gone terribly wrong in New York, and the Thing and Alicia are traveling across America to escape it! But when they stop in a small town for the night and wake up the morning before they arrived, they find themselves caught in a time loop that’s been going on since before they were born...",
      },
      {
        productId: 1004,
        genresId: "CGN",
        author: "Stan Lee",
        img: "imgs/1004.webp",
        name: "Doctor Doom: The Book Of Doom Omnibus",
        price: 1750,
        information:
          "Bow before the majesty of Doctor Doom! The greatest villain of all is celebrated in a tome of tyranny six decades in the making! Featuring the Latverian ruler's first battle with the accursed Reed Richards and his Fantastic Four — and their most epic clashes since!",
      },
      {
        productId: 1005,
        genresId: "CGN",
        author: "Brian Michael Bendis",
        img: "imgs/1005.jpg",
        name: "Avengers Vs. X-Men Omnibus",
        price: 2200,
        information:
          "arth’s Mightiest Heroes battle the Children of the Atom in a crossover so huge it calls for Marvel’s biggest ever Omnibus! Get the whole story of the Phoenix Force’s return to Earth, an event that kicks off an all-out war between the Avengers and the X-Men!",
      },
      // Mystery, thriller and suspense
      {
        productId: 1006,
        genresId: "MTS",
        author: "Stephen King",
        img: "imgs/1006.webp",
        name: "Fairy Tale",
        price: 370,
        information:
          "Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.",
      },
      {
        productId: 1007,
        genresId: "MTS",
        author: "Colleen Hoover",
        img: "imgs/1007.webp",
        name: "Verity",
        price: 210,
        information:
          "Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of It Ends With Us.",
      },
      {
        productId: 1008,
        genresId: "MTS",
        author: "Ashley Flowers",
        img: "imgs/1008.webp",
        name: "All Good People Here: A Novel",
        price: 350,
        information:
          "#1 NEW YORK TIMES BESTSELLER • In the propulsive debut novel from the host of the #1 true crime podcast Crime Junkie, a journalist uncovers her hometown’s dark secrets when she becomes obsessed with the unsolved murder of her childhood neighbor—and the disappearance of another girl twenty years later.",
      },
      {
        productId: 1009,
        genresId: "MTS",
        author: "Louise Penny",
        img: "imgs/1009.jpg",
        name: "A World of Curiosities: A Novel (Chief Inspector Gamache Novel, 18)",
        price: 420,
        information:
          "Chief Inspector Armand Gamache returns in the eighteenth book in #1 New York Times bestseller Louise Penny's beloved series.",
      },
      {
        productId: 1010,
        genresId: "MTS",
        author: "Laura Dave",
        img: "imgs/10010.webp",
        name: "The Last Thing He Told Me: A Novel",
        price: 230,
        information:
          "The instant #1 New York Times bestselling mystery and Reese Witherspoon Book Club pick that’s captivated more than two million readers about a woman searching for the truth about her husband’s disappearance…at any cost.",
      },
      //Crafts, Hobbies & Home
      {
        productId: 1011,
        genresId: "CHH",
        author: "John Kanell",
        img: "imgs/10011.webp",
        name: "Preppy Kitchen: Recipes for Seasonal Dishes and Simple Pleasures (A Cookbook)",
        price: 400,
        information:
          "Decadent, delicious seasonal comfort foods and desserts you can make at home no matter what your cooking level from the beloved social media star @PreppyKitchen.",
      },
      {
        productId: 1012,
        genresId: "CHH",
        author: "Coloring Book Cafe",
        img: "imgs/10012.webp",
        name: "Country Collection Coloring Book",
        price: 200,
        information:
          "Are you looking for a delightful country collection of coloring pages which feature all kinds of different scenes? Want to breathe life into tons of different settings and scenery? Or are you looking for a way to relieve anxiety and destress? Then this book is for you!",
      },
      {
        productId: 1013,
        genresId: "CHH",
        author: "Anthony William",
        img: "imgs/10013.jpg",
        name: "Medical Medium Brain Saver",
        price: 600,
        information:
          "Discover why millions rely on the #1 New York Times best-selling Medical Medium for health answers and natural healing protocols they can’t find anywhere else to over 100 symptoms, nervous system diseases, and disorders.",
      },
      {
        productId: 1014,
        genresId: "CHH",
        author: "Bridget Coloring Press",
        img: "imgs/10014.webp",
        name: "You Fucking Got This",
        price: 100,
        information:
          "Relax Your Mind With This Beautiful Sweary Adult Coloring Book.Be Honest, You’ve had a Shitty Day.",
      },
      {
        productId: 1015,
        genresId: "CHH",
        author: "KC Davis LPC",
        img: "imgs/10015.jpg",
        name: "How to Keep House While Drowning: A Gentle Approach to Cleaning and Organizing ",
        price: 20,
        information:
          "This revolutionary approach to cleaning and organizing helps free you from feeling ashamed or overwhelmed by a messy home.",
      },
      //Computers and Technology
      {
        productId: 1016,
        genresId: "CT",
        author: "Chris Miller",
        img: "imgs/10016.jpg",
        name: "Chip War: The Quest to Dominate the World's Most Critical Technology",
        price: 0,
        information:
          "An epic account of the decades-long battle to control what has emerged as the world’s most critical resource—microchip technology—with the United States and China increasingly in conflict.",
      },
      {
        productId: 1017,
        genresId: "CT",
        author: "Martin Kleppmann",
        img: "imgs/10017.webp",
        name: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
        price: 460,
        information:
          "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers.",
      },
      {
        productId: 1018,
        genresId: "CT",
        author: "Eric Matthes",
        img: "imgs/10018.webp",
        name: "Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming",
        price: 430,
        information:
          "The best-selling Python book in the world, with over 1 million copies sold! A fast-paced, no-nonsense, updated guide to programming in Python.",
      },
      {
        productId: 1019,
        genresId: "CT",
        author: "Gayle Laakmann McDowell",
        img: "imgs/10019.webp",
        name: "Cracking the Coding Interview: 189 Programming Questions and Solutions",
        price: 700,
        information:
          "I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.",
      },
      {
        productId: 1020,
        genresId: "CT",
        author: "Alex Xu",
        img: "imgs/10020.webp",
        name: "System Design Interview – An insider's guide",
        price: 710,
        information:
          "System design interviews are the most difficult to tackle of all technical interview questions. This book is Volume 1 of the System Design Interview - An insider’s guide series that provides a reliable strategy and knowledge base for approaching a broad range of system design questions.",
      },
    ];
    localStorage.setItem("product", JSON.stringify(productArray));
  }
}

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
  var b = document.getElementById("page_main");
  b.style.opacity = 0.25;
}
function closef(st) {
  var a = document.getElementById(st);
  a.style.display = "none";
  var b = document.getElementById("page_main");
  b.style.opacity = 1;
}
function openflex(st) {
  var a = document.getElementById(st);
  a.style.display = "flex";
  var b = document.getElementById("page_main");
  b.style.opacity = 0.25;
}

// Hiển thị mật khẩu
function show_password() {
  a = document.getElementById("psw");
  b = document.getElementById("showpsw");
  if (b.checked == true) a.setAttribute("type", "text");
  else {
    a.setAttribute("type", "password");
  }
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
function show_password(st) {
  a = document.getElementById(st);
  b = document.getElementById("showpsw");
  if (b.checked == true) a.setAttribute("type", "text");
  else {
    a.setAttribute("type", "password");
  }
}

// Tạo tài khoản admin và lưu vào local storage
function create_admin() {
  var a = "admin";
  if (
    localStorage.getItem("User") == null &&
    localStorage.getItem("admin") == null
  ) {
    sanpham.push("hello");
    sanpham.push("phat");
    alert("tk admin: admin mk: admin");
    var user1 = {
      username: "thinhphat",
      password: "admin",
      email: "ntp@gmail.com",
      fullname: "Nguyễn Thịnh Phát",
      address: "2 adv - P16 - Q8",
      phone: "012341",
    };
    var user2 = {
      username: "quocdai",
      password: "admin",
      email: "lqd@gmail.com",
      fullname: "Lâm Quốc Đại",
      address: "2 adv - P16 - Q8",
      phone: "012342",
    };
    var user3 = {
      username: "ducthang",
      password: "admin",
      email: "ddt@gmail.com",
      fullname: "Đào Đức Thắng",
      address: "2 adv - P16 - Q8",
      phone: "012343",
    };
    var user4 = {
      username: "giabao",
      password: "admin",
      email: "tgb@gmail.com",
      fullname: "Trần Gia Bảo",
      address: "2 adv - P16 - Q8",
      phone: "012344",
      san: sanpham,
    };
    userArray.push(user1);
    userArray.push(user2);
    userArray.push(user3);
    userArray.push(user4);
    admin.push(user1);
    admin.push(user2);
    admin.push(user3);
    admin.push(user4);

    localStorage.setItem("admin", JSON.stringify(admin));
    localStorage.setItem("User", JSON.stringify(userArray));
  }
}

// Hàm nút đăng nhập
function handle_signin() {
  if (localStorage.getItem("User") == null) {
    return false;
  }
  var userArray = JSON.parse(localStorage.getItem("User"));
  var tk = document.getElementById("email_sin").value;
  var mk = document.getElementById("psw_sin").value;
  if (tk == "" || mk == "") {
    alert("khong duoc de trong");
    if (mk == "") {
      document.getElementById("psw_sin").focus();
    }
    if (tk == "") {
      document.getElementById("email_sin").focus();
    }

    return false;
  }
  console.log(tk + mk);
  var flat = 0;
  for (i = 0; i < userArray.length; i++) {
    if (tk == userArray[i].username && mk == userArray[i].password) {
      if (sessionStorage.getItem("dangnhap") == null) {
        var a = userArray[i];
        dangnhap.push(a);
        sessionStorage.setItem("dangnhap", JSON.stringify(dangnhap));
        alert("Đăng nhập vào tài khoản " + dangnhap[0].username);
      } else {
        console.log("khac null");
        sessionStorage.removeItem("dangnhap");
        dangnhap.pop();
        var a = userArray[i];
        dangnhap.push(a);
        sessionStorage.setItem("dangnhap", JSON.stringify(dangnhap));
        alert("Đăng nhập vào tài khoản " + dangnhap[0].username);
      }
      flat = 1;
    }
  }
  if (flat == 0) {
    alert("sai tài khoản hoặc mật khẩu vui lòng nhập lại");
    email_sin.focus();
    return false;
  }
  location.reload();
}
// function signin12() {

//     if (a != undefined) {
//         closeb('signin');
//         alert("bạn đã đăng nhập tài khoản " + tk);
//         document.getElementById('infor_user').innerHTML = '<i class="fas fa-user-check" id="infor_user">' + fullname + '</i>';
//         openb('logout');
//         if (tk == 'thinhphat' || tk == 'quocdai' || tk == 'giabao' || tk == 'ducthang') {
//             document.getElementById("admin_button").innerHTML = '<i class="fas fa-pencil-alt" type="button" onclick="login_admin()"></i>';
//         }
//         closef("form_sin");
//     }
// }
function signin() {
  if (sessionStorage.getItem("dangnhap") == null) {
    return false;
  } else {
    openb("logout");
    dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
    userArray = JSON.parse(localStorage.getItem("User"));
    admin = JSON.parse(localStorage.getItem("admin"));
    for (i = 0; i < admin.length; i++) {
      console.log("heloooooo");
      if (dangnhap[0].username == admin[i].username) {
        document.getElementById("admin_button").innerHTML =
          '<i class="fas fa-pencil-alt" type="button" onclick="login_admin()"></i>';
      }
      if (dangnhap[0].username == userArray[i].username) {
        document.getElementById("infor_user").innerHTML =
          '<i class="fas fa-user-check" id="infor_user">' +
          dangnhap[0].fullname +
          "</i>";
      }
    }
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
  if (st.length < 5) {
    alert("ten tai khoan phai lon hon 5 ky tu");
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
  if (mk <= 5 || mk != rpmk) return false;
  else return true;
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
    usern_sup.focus();
  } else {
    if (kiemtramk(mk, rpmk) == false) {
      alert("mật khẩu phải lớn hơn 5 ký tự và lặp lại phải giống");
      document.getElementById("psw_sup").focus();
    } else {
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
//ham hien thi sach san pham
function print_item(a) { }
function show_list1() {
  if (localStorage.getItem("product") == null) {
    return false;
  }
  var templist = [];
  productArray = JSON.parse(localStorage.getItem("product"));
  var a = getQueryVariable("genres");
  var temp = "";
  var temp1 = "'infor_book'";
  if (a != undefined && a != "danhsach") {
    for (i = 0; i < productArray.length; i++) {
      if (productArray[i].genresId == a) {
        templist.push(productArray[i]);
      }
    }
  } else if (a == undefined || a == "danhsach") {
    for (i = 0; i < productArray.length; i++) { }
  }
  document.getElementById("list__books").innerHTML = temp;
}
function show_list() {
  if (localStorage.getItem("product") == null) {
    return false;
  }
  productArray = JSON.parse(localStorage.getItem("product"));
  var a = getQueryVariable("genres");
  var temp = "";
  var temp1 = "'infor_book'";
  if (a != undefined && a != "danhsach") {
    for (i = 0; i < productArray.length; i++) {
      if (productArray[i].genresId == a) {
        console.log(productArray[i].productId);
        var temp =
          temp +
          '<dFiv id="' +
          productArray[i].productId +
          '"class="item" onclick="show_infor_book(' +
          productArray[i].productId +
          ") + openflex(" +
          temp1 +
          ')"><div class="item__inside"><div class="img_book"><img src="' +
          productArray[i].img +
          '" alt=""></div><div class="book_name">' +
          productArray[i].name +
          '</div><div class="book_price"><span>$' +
          productArray[i].price +
          "</span></div></div></dFiv>";
      }
    }
  } else if (a == undefined || a == "danhsach") {
    for (i = 0; i < productArray.length; i++) {
      var temp =
        temp +
        '<div id="' +
        productArray[i].productId +
        '"class="item" onclick="show_infor_book(' +
        productArray[i].productId +
        ") +openflex(" +
        temp1 +
        ')"><div class="item__inside"><div class="img_book"><img src="' +
        productArray[i].img +
        '" alt=""></div><div class="book_name">' +
        productArray[i].name +
        '</div><div class="book_price"><span>$' +
        productArray[i].price +
        "</span></div></div></div>";
    }
  }
  document.getElementById("list__books").innerHTML = temp;
}

function show_infor_book(s) {
  // var s = getQueryVariable("product");
  // var a = getQueryVariable('clicked');
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
      // document.querySelector(
      //   ".buybt"
      // ).innerHTML = `<button type="button" onclick="addtocart(productArray[i])">Buy now</button>`;
      document.querySelector(
        ".buybt"
      ).innerHTML = `<button type="button" onclick="addtocart(this)">Buy now</button>`;
    }
  }
}
//code trang
function show_page(num_page) {
  var hr = location.href;
  var temp = "";
  if (getQueryVariable("genres") != undefined) {
    for (i = 0; i < num_page; i++) {
      temp += `<a class="item_page" href="${hr}&page=${i}">${i}</a>`;
    }
  } else {
    for (i = 0; i < num_page; i++) {
      temp += `<a class="item_page" href="${hr}?page=${i}">${i}</a>`;
    }
  }
  document.querySelector(".list_page").innerHTML = temp;
}

function renderPagesList(total) {
  let html = "";
  for (let i = 1; i <= total; i++) {
    html += `
          <a href="#">
              <li class="page_list-items">${i}</li>
          </a>
      `;
  }
  document.querySelector(".page_list").innerHTML = html;
}

// renderPagesList(totalPages);

function changePage(productList) {
  const pagesList = document.querySelectorAll(".page_list a");
  pagesList.forEach(function (item, index) {
    item.onclick = function () {
      let value = index + 1;
      currentPage = value;
      s = (currentPage - 1) * itemPerPage;
      e = currentPage * itemPerPage;
      renderProduct(productList, s, e);
    };
  });
}

var cart = [];
function test() {
  console.log("hellooooo");
}
function addtocart(product) {
  // openb("comfirm_buy");
  console.log(product);
  if (sessionStorage.getItem("dangnhap") == null) {
    alert("Bạn chưa đăng nhập!");
    closeb("infor_book");
    closeb("comfirm_buy");
    openb("form_sin");
    closeb("comfirm_buy");
    return false;
  }
  dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
  // const yes = document.querySelector(".yes");
  // const no = document.querySelector(".no");

  var sl = document.getElementById("numbook").value;
  console.log(sl);
  if (sl <= 0) {
    alert("Số lượng sai quy tắc!");
    closeb("comfirm_buy");
    return false;
  }

  var btn = product.parentElement.parentElement.parentElement.parentElement;
  var hinh = btn.children[1].children[0].src;
  var ten = btn.children[2].children[0].children[0].children[0].innerHTML;
  var gia = btn.children[2].children[0].children[3].children[0].innerHTML;
  var item = { hinh, ten, gia, sl };
  //kiem tra cart tren session
  if (sessionStorage.getItem("cart")) {
    cart = JSON.parse(sessionStorage.getItem("cart"));
  }
  cart.push(item);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  // window.location.href = "shopping_cart.html";
}

//Hien thi cart
function showcarts() {
  // window.location.href = "shopping_cart.html";
  var gh = JSON.parse(sessionStorage.getItem("cart"));
  var kq = "";
  if (gh != null) {
    for (let i = 0; i < gh.length; i++) {
      let total = parseInt(gh[i]["gia"]) * parseInt(gh[i]["sl"]);
      kq +=
        `<tr class="product">
              <td class="product-item">
                  <div class="info">
                      <img src="` +
        gh[i]["hinh"] +
        `" alt="">
                      <div>
                          <p>` +
        gh[i]["ten"] +
        `</p>
                      </div>
                  </div>
              </td>
              <td class="product-price">$` +
        gh[i]["gia"] +
        `</td>
              <td><input type="number" value="` +
        gh[i]["sl"] +
        `" min="1" class="product-quantity"></td>
              <td class="product-total">$` +
        total +
        `</td>
              <td class="remove">
                  <button>Remove</button>
              </td></tr>`;
    }
  } else {
    kq += "Your Cart is empty.";
  }

  document.getElementById("showcart").innerHTML = kq;
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

// Thêm sản phẩm
function AddProduct() {
  productArray = JSON.parse(localStorage.getItem("product"));
  var newproduct = {
    productId: document.getElementById("addProductId").value,
    genresId: document.getElementById("addGenresId").value,
    author: document.getElementById("addAuthor").value,
    img: document.getElementById("addImg").value,
    name: document.getElementById("addName").value,
    price: document.getElementById("addPrice").value,
    information: document.getElementById("addInformation").value,
  };
  productArray.push(newproduct);
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

function show_listAdmin() {
  if (localStorage.getItem("product") == null) {
    return false;
  }
  productArray = JSON.parse(localStorage.getItem("product"));
  var a = getQueryVariable("genres");
  var temp = "";
  if (a != undefined) {
    for (i = 0; i < productArray.length; i++) {
      if (productArray[i].genresId == a) {
        var temp =
          temp +
          '<div id="' +
          productArray[i].productId +
          '"class="item"><div class="item__inside"><div class="img_book"><img src="' +
          productArray[i].img +
          '" alt=""></div><div class="book_name">' +
          productArray[i].name +
          '</div><div class="book_price"><span>$' +
          productArray[i].price +
          "</span></div></div></div>";
      }
    }
  } else if (a == undefined) {
    for (i = 0; i < productArray.length; i++) {
      var temp =
        temp +
        '<div id="' +
        productArray[i].productId +
        '"class="item" onmouseover="change(true)" onmouseout="change(false)"><div class="item__inside"><div class="img_book"><img src="' +
        productArray[i].img +
        '" alt=""></div><div class="book_name">' +
        productArray[i].name +
        '</div><div class="book_price"><span>$' +
        productArray[i].price +
        "</span></div></div></div>";
    }
  }
  document.getElementById("list__booksAdmin").innerHTML = temp;
}

function editProduct(editProductId) {
  productArray = JSON.parse(localStorage.getItem("product"));
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].productId == editProductId) {
      if (comfirm("Bạn muốn chỉnh sửa sản phẩm này?")) {
      }
    }
  }
}

// js form dang nhap dang ky
function js_login() {
  const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");
  pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
      console.log("hi");
      pwFields.forEach((pwField) => {
        if (pwField.type == "password") {
          pwField.type = "text";

          pwShowHide.forEach((icon) => {
            icon.classList.replace("uil-eye-slash", "uil-eye");
          });
        } else {
          pwField.type = "password";

          pwShowHide.forEach((icon) => {
            icon.classList.replace("uil-eye", "uil-eye-slash");
          });
        }
      });
    });
  });

  signUp.addEventListener("click", () => {
    container.classList.add("active");
  });
  login.addEventListener("click", () => {
    container.classList.remove("active");
  });
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
  const a = document.querySelector(".left-menu-close");
  const b = document.querySelector(".left-menu-inside");
  const c = document.querySelector(".left-menu-option");
  a.style.display = "block";
  b.style.display = "block";
  c.style.display = "block";
  a.classList.add("left-menu-open");
  var d = document.querySelector(".menu-background");

  d.style.display = "block";
  d.addEventListener("click", () => {
    a.classList.remove("left-menu-open");
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  });
}

var index = 1;

changeImage = function () {
  var slider = ["imgs/slider_1.jpg", "imgs/slider_2.jpg", "imgs/slider_3.jpg"];
  document.getElementById("image").src = slider[index];
  index++;
  if (index == 3) {
    index = 0;
  }
};
setInterval(changeImage, 3000);
function ShowGenres() {
  document.getElementById("body__genres").style.display = "block";
}

// ham tat tag
function close_left_menu() {
  const a = document.querySelector(".left-menu-close");
  const b = document.querySelector(".left-menu-inside");
  const c = document.querySelector(".left-menu-option");
  const d = document.querySelector(".menu-background");
  a.classList.remove("left-menu-open");
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
}

