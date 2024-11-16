var userArray = [];
var productArray = [];
var genresArray = [];
var dangnhap = [];
var admin = [];
var sanpham = [];
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
        genresId: "MTAS",
        author: "Stephen King",
        img: "imgs/1006.webp",
        name: "Fairy Tale",
        price: 370,
        information:
          "Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.",
      },
      {
        productId: 1007,
        genresId: "MTAS",
        author: "Colleen Hoover",
        img: "imgs/1007.webp",
        name: "Verity",
        price: 210,
        information:
          "Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of It Ends With Us.",
      },
      {
        productId: 1008,
        genresId: "MTAS",
        author: "Ashley Flowers",
        img: "imgs/1008.webp",
        name: "All Good People Here: A Novel",
        price: 350,
        information:
          "#1 NEW YORK TIMES BESTSELLER • In the propulsive debut novel from the host of the #1 true crime podcast Crime Junkie, a journalist uncovers her hometown’s dark secrets when she becomes obsessed with the unsolved murder of her childhood neighbor—and the disappearance of another girl twenty years later.",
      },
      {
        productId: 1009,
        genresId: "MTAS",
        author: "Louise Penny",
        img: "imgs/1009.jpg",
        name: "A World of Curiosities: A Novel (Chief Inspector Gamache Novel, 18)",
        price: 420,
        information:
          "Chief Inspector Armand Gamache returns in the eighteenth book in #1 New York Times bestseller Louise Penny's beloved series.",
      },
      {
        productId: 1010,
        genresId: "MTAS",
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
        genresId: "CAT",
        author: "Chris Miller",
        img: "imgs/10016.jpg",
        name: "Chip War: The Quest to Dominate the World's Most Critical Technology",
        price: 0,
        information:
          "An epic account of the decades-long battle to control what has emerged as the world’s most critical resource—microchip technology—with the United States and China increasingly in conflict.",
      },
      {
        productId: 1017,
        genresId: "CAT",
        author: "Martin Kleppmann",
        img: "imgs/10017.webp",
        name: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
        price: 460,
        information:
          "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers.",
      },
      {
        productId: 1018,
        genresId: "CAT",
        author: "Eric Matthes",
        img: "imgs/10018.webp",
        name: "Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming",
        price: 430,
        information:
          "The best-selling Python book in the world, with over 1 million copies sold! A fast-paced, no-nonsense, updated guide to programming in Python.",
      },
      {
        productId: 1019,
        genresId: "CAT",
        author: "Gayle Laakmann McDowell",
        img: "imgs/10019.webp",
        name: "Cracking the Coding Interview: 189 Programming Questions and Solutions",
        price: 700,
        information:
          "I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.",
      },
      {
        productId: 1020,
        genresId: "CAT",
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

// Thêm thể loại
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

// Tạo tài khoản admin và lưu vào local storage
function create_admin() {
  var a = "admin";
  if (
    localStorage.getItem("User") == null &&
    localStorage.getItem("admin") == null
  ) {
    var user1 = {
      username: "thinhphat",
      password: "admin",
      email: "ntp@gmail.com",
      fullname: "Nguyễn Thịnh Phát",
      address: "2 adv - P16 - Q8",
      phone: "012341",
      giohang: cart,
      tt: "unblock",
    };
    var user2 = {
      username: "quocdai",
      password: "admin",
      email: "lqd@gmail.com",
      fullname: "Lâm Quốc Đại",
      address: "2 adv - P16 - Q8",
      phone: "012342",
      giohang: cart,
      tt: "unblock",
    };
    var user3 = {
      username: "ducthang",
      password: "admin",
      email: "ddt@gmail.com",
      fullname: "Đào Đức Thắng",
      address: "2 adv - P16 - Q8",
      phone: "012343",
      giohang: cart,
      tt: "unblock",
    };
    var user4 = {
      username: "giabao",
      password: "admin",
      email: "tgb@gmail.com",
      fullname: "Trần Gia Bảo",
      address: "2 adv - P16 - Q8",
      phone: "012344",
      giohang: cart,
      tt: "unblock",
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
  var flat = 0;
  for (i = 0; i < userArray.length; i++) {
    if (tk == userArray[i].username && mk == userArray[i].password) {
      if (userArray[i].tt == "block") {
        alert("Tài khoản của bạn đã bị khoá!");
        return false;
      }
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
function signin() {
  if (sessionStorage.getItem("dangnhap") == null) {
    return false;
  } else {
    openb("logout");
    var temp = "";
    dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
    userArray = JSON.parse(localStorage.getItem("User"));
    admin = JSON.parse(localStorage.getItem("admin"));
    for (i = 0; i < admin.length; i++) {
      if (dangnhap[0].username == admin[i].username) {
        document.getElementById("admin_button").innerHTML =
          // '<i class="fas fa-pencil-alt" type="button" onclick="login_admin()"></i>';
          '<div class="admin_button"  type="button" onclick="login_admin()"> Đi đến trang admin </div>';
      }
      if (dangnhap[0].address != "") {
        document.querySelector(
          ".address_vt"
        ).innerHTML = `<span>${dangnhap[0].address}</span>`;
      }
    }
    for (i = 0; i < userArray.length; i++) {
      if (dangnhap[0].username == userArray[i].username) {
        temp =
          '<i class="fas fa-user-check" id="infor_user">' +
          dangnhap[0].fullname +
          "</i>";
      }
    }
    console.log(temp);
    document.getElementById("infor_user").innerHTML =
      temp + document.getElementById("infor_user").innerHTML;
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
  if (confirm("Bạn có chắc muốn đăng xuất")) {
    sessionStorage.removeItem("dangnhap");
    location.href = "index.html";
  }
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

  if (check_space(st) == false) {
    alert("Tài khoảng không được có khoảng trắng!");
    return false;
  }

  if (check_dau(st) == false) {
    alert("Tài khoản không được chứa ký tự đặc biệt.");
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
    return false;
  }

  if (check_space(mk) == false) {
    alert("Mật khẩu không được có khoảng trắng!");
    return false;
  }

  if (check_dau(mk) == false) {
    alert("Mật khẩu không được chứa ký tự đặc biệt.");
    return false;
  }

  if (mk <= 5 || mk != rpmk) {
    alert("mật khẩu phải lớn hơn 5 ký tự và lặp lại phải giống");
    return false;
  }
  return true;
}

function kiemtraemail(event) {
  var pattern = /^\w+@[a-zA-Z]{3,}\.com$/i;
  if (event == "") {
    alert("Không được để trống Email.");
    return false;
  } else if (!pattern.test(event)) {
    alert("Không đúng cú pháp email!");
    return false;
  }
  return true;
}
function check_infor() {
  if (sessionStorage.getItem("dangnhap") == null) {
    return false;
  } else {
    dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
    if (dangnhap[0].phone != "") {
      document.getElementById("sdt").innerHTML = dangnhap[0].phone;
    }
    if (dangnhap[0].address != "") {
      document.getElementById("diachi").innerHTML = dangnhap[0].address;
    }
    sessionStorage.setItem("dangnhap", JSON.stringify(dangnhap));
  }
}

function add_infor() {
  if (sessionStorage.getItem("dangnhap") == null) {
    return false;
  } else {
    userArray = JSON.parse(localStorage.getItem("User"));
    dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
    for (i = 0; i < userArray.length; i++) {
      if (userArray[i].username == dangnhap[0].username) {
        if (check_phone(document.getElementById("phone_num").value) == true) {
          userArray[i].phone = document.getElementById("phone_num").value;
          userArray[i].address = document.getElementById("address").value;
          dangnhap[0].phone = document.getElementById("phone_num").value;
          dangnhap[0].address = document.getElementById("address").value;
          localStorage.setItem("User", JSON.stringify(userArray));
          sessionStorage.setItem("dangnhap", JSON.stringify(dangnhap));
          location.reload();
        }
      }
    }
  }
}
function check_dau(event) {
  dem = 0;
  for (i = 0; i < event.length; i++) {
    if (
      (event[i] >= "a" && event[i] <= "z") ||
      (event[i] >= "A" && event[i] <= "Z") ||
      (event[i] >= 0 && event[i] <= 9)
    ) {
      dem++;
    }
  }

  console.log(dem);
  console.log(event.length);
  if (dem != event.length) {
    return false;
  }
  return true;
}

function check_space(event) {
  if (event.indexOf(" ") != -1) {
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

function check_phone(event) {
  var phone = /^0\d{9}$/;
  if (!phone.test(event)) {
    alert(
      "Số điện thoại không có ký tự đặt biệt và phải 10 ký tự và bắt đầu bằng 0!"
    );
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
  } else if (kiemtraemail(emai) == false) {
    var inputemail = document.getElementById("email_sup");
    inputemail.style.borderBlockEndColor = "red";
    email_sup.focus();
  } else if (kiemtramk(mk, rpmk) == false) {
    var inputmk = document.getElementById("psw_sup");
    var inputrpmk = document.getElementById("psw_repeat");
    inputmk.style.borderBlockEndColor = "red";
    inputrpmk.style.borderBlockEndColor = "red";
    document.getElementById("psw_sup").focus();
  } else if (kiemtrafullname(name) == false) {
    var inputfullname = document.getElementById("fullname");
    inputfullname.style.borderBlockEndColor = "red";
    fullname.focus();
  } else {
    var user = {
      username: tk,
      password: mk,
      email: emai,
      fullname: name,
      giohang: [],
      address: "",
      phone: "",
      tt: "unblock",
    };
    userArray.push(user);
    alert("đăng ký thành công");
    localStorage.setItem("User", JSON.stringify(userArray));
  }
}
function splitgenres(a) {
  var b = a.split(" ");
  var c = "";
  for (i = 0; i < b.length; i++) {
    c += b[i][0];
  }

  c = c.toUpperCase();
  console.log(c);
  return c;
}
// Tạo mảng danh sách để có thể tìm kiếm dựa trên danh mục
function createGenres() {
  if (localStorage.getItem("genres") == null) {
    genresArray = [
      { genres_name: "Comics & Graphic Novels", id: "CGN" },
      { genres_name: "Mystery, thriller and suspense", id: "MTAS" },
      { genres_name: "Crafts, Hobbies & Home", id: "CHH" },
      { genres_name: "Computers and Technology", id: "CAT" },
    ];
    localStorage.setItem("genres", JSON.stringify(genresArray));
  }
}
// Hiển thị danh mục thể loại
function show_genres() {
  if (localStorage.getItem("genres") == null) {
    return false;
  }

  let a = "";
  const genresArray = JSON.parse(localStorage.getItem("genres"));

  for (let i = 0; i < genresArray.length; i++) {
    if (genresArray[i].genres_name) {
      a += `
        <li 
          onClick="activeSidebar('${genresArray[i].id}')"
          class="item_genres">
          <a 
            href="?genres=${genresArray[i].id}" 
            class="genres__item">
            ${genresArray[i].genres_name}
          </a>
        </li>
      `;
    }
  }

  document.getElementById("genres__list").innerHTML = a;
}
//ham hien thi sach san pham

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
          '<div id="' +
          productArray[i].productId +
          '"class="item" onclick="show_infor_book(' +
          productArray[i].productId +
          ") +turnonflex(" +
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
  } else if (a == undefined || a == "danhsach") {
    for (i = 0; i < productArray.length; i++) {
      var temp =
        temp +
        '<div id="' +
        productArray[i].productId +
        '"class="item" onclick="show_infor_book(' +
        productArray[i].productId +
        ") +turnonflex(" +
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
      document.querySelector(
        ".buybt"
      ).innerHTML = `<button type="button" onclick="addtocart('${productArray[i].productId}')">Buy now</button>`;
    }
  }
}
//code trang

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
  if (localStorage.getItem("num_page") == null) {
    var itemPerPage = 8;
  } else {
    var itemPerPage = Number(JSON.parse(localStorage.getItem("num_page")));
  }
  productArray = JSON.parse(localStorage.getItem("product"));
  sessionStorage.removeItem("sp");
  var a = getQueryVariable("genres");

  const trang = 8;
  var tem1 = productArray;
  if (a != undefined && a != "danhsach") {
    var tem1 = [];
    if (a != undefined) {
      for (i = 0; i < productArray.length; i++) {
        if (productArray[i].genresId == a) {
          tem1.push(productArray[i]);
        }
      }
    }
  }
  var d = document.getElementById("sort_gia").value;
  switch (d) {
    case "0":
      break;
    case "1":
      break;
  }
  var a = getQueryVariable("page");
  if (a == undefined) {
    a = 1;
  } else {
    a = Number(a);
  }
  tempitem = tem1;
  tempitem.length;
  totalPages = Math.ceil(tempitem.length / itemPerPage);
  PagesList(totalPages);
  var start = (a - 1) * itemPerPage;
  //timkiem
  var b = document.querySelector("#searbox");
  if (b.value != "") {
    var searchar = [];
    for (i = 0; i < tempitem.length; i++) {
      if (chuanhoa(tempitem[i].name).indexOf(chuanhoa(b.value)) != -1) {
        searchar.push(tempitem[i]);
      }
    }
    tempitem = searchar;
  }
  //sap xep
  var e = document.getElementById("sort").value;
  if (e == "1") {
    tempitem = increase_sort(tempitem);
  } else if (e == "2") {
    tempitem = decrease_sort(tempitem);
  }
  //loc theo gia

  var f = document.getElementById("sort_gia").value;
  if (f != "0") {
    switch (f) {
      case "1":
        tempitem = filter_price(tempitem, 0, 500);
        break;
      case "2":
        tempitem = filter_price(tempitem, 500, 1000);
        break;
      case "3":
        tempitem = filter_price(tempitem, 1000, 2000);
        break;
      case "4":
        tempitem = filter_price(tempitem, 2000, -1);
        break;
    }
    totalPages = Math.ceil(tempitem.length / itemPerPage);
    start = (a - 1) * itemPerPage;
    console.log(start);
    PagesList(totalPages);
  }
  show(tempitem, start, itemPerPage + start);
}
function chuanhoa(st) {
  st = st.toUpperCase();
  var temp = st.split(" ");
  var s = "";
  for (f = 0; f < st.length; f++) {
    s = s + st[f];
  }
  return s;
}
function filter_price(arr, start, end) {
  var temp = [];
  if (end != -1) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].price >= start && arr[i].price <= end) {
        temp.push(arr[i]);
      }
    }
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].price >= start) {
        temp.push(arr[i]);
      }
    }
  }
  return temp;
}
function show(arr, start, end) {
  var temp1 = "'infor_book'";
  var t = "";
  console.log(start);
  console.log(end);
  if (end > arr.length) {
    end = arr.length - 1;
  }
  for (i = start; i < end; i++) {
    var t =
      t +
      '<div id="' +
      arr[i].productId +
      '"class="item" onclick="show_infor_book(' +
      arr[i].productId +
      ") +turnonflex(" +
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
  let html = "";
  for (let i = 1; i <= total; i++) {
    html += `
          <a class="decopage" href="${getPageVariable(
            b
          )}&page=${i}">${i}              
          </a>
      `;
  }
  document.querySelector(".list_page").innerHTML = html;
}
function getPageVariable(variable) {
  var query = window.location.href;
  var temp = query.split("&page=");
  if (temp[0].indexOf("?") == -1) {
    temp[0] = temp[0] + "?";
  }
  return decodeURIComponent(temp[0]);
}

function opengiohang() {
  if (sessionStorage.getItem("dangnhap") == null) {
    alert("Bạn chưa đăng nhập");
    turnoff(".cart");
    turnoffbg();
    return false;
  } else {
    location.href = "shopping_cart.html";
  }
}
var cart = [];
function addtocart(product) {
  if (sessionStorage.getItem("cart") == null) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
  cart = JSON.parse(sessionStorage.getItem("cart"));
  // openb("comfirm_buy");

  if (sessionStorage.getItem("dangnhap") == null) {
    alert("Bạn chưa đăng nhập!");
    closeb("infor_book");
    turnon(".form__login--signup");
    return false;
  }

  dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
  userArray = JSON.parse(localStorage.getItem("User"));
  for (i = 0; i < userArray.length; i++) {
    if (dangnhap[0].username == userArray[i].username) {
      var index = i;
      break;
    }
  }
  if (userArray[i].address == "" || userArray[i].phone == "") {
    alert("Bạn chưa bổ sung địa chỉ hoặc số điện thoại!");
    closeb("infor_book");
    turnon(".add_userinfor");
    return false;
  }
  // const yes = document.querySelector(".yes");
  // const no = document.querySelector(".no");

  var sl = Number(document.getElementById("numbook").value);
  console.log(sl);
  if (sl <= 0) {
    alert("Số lượng sai quy tắc!");
    return false;
  }
  productArray = JSON.parse(localStorage.getItem("product"));
  for (i = 0; i < productArray.length; i++) {
    if (productArray[i].productId == product) {
      console.log(productArray[i].productId);
      index = i;
      break;
    }
  }
  const date = new Date();
  item = {
    makh: dangnhap[0].username,
    sp: productArray[index],
    soluong: sl,
    date: date,
  };
  console.log(item);
  cart.push(item);
  alert("Thêm vào đơn hàng thành công");
  sessionStorage.setItem("cart", JSON.stringify(cart));
  if (cart.length == 1) {
    location.reload();
  }
  location.reload();
}

function showdonhang() {
  if (sessionStorage.getItem("cart") == null) {
    document.querySelector(".name_cart").innerHTML = "Bạn chưa có đơn hàng nào";
    return false;
  }
  cart = JSON.parse(sessionStorage.getItem("cart"));
  console.log("a" + cart.length);
  var tong = 0;
  var s = "";
  for (i = 0; i < cart.length; i++) {
    s =
      s +
      `<div class="title__item__inside">         
      <div class="tenitem">${cart[i].sp.name}</div>
      <div class="tacgia">${cart[i].sp.author}</div>
      <div class="giaitem">${cart[i].sp.price}</div>
      <div class="soluong">${cart[i].soluong}</div>
      <div ><span class="huyitem" onclick="huyitem('${i}')">Huỷ</span></div>        
    </div>    
    <hr class="hrcart"> `;
    tong = tong + cart[i].sp.price * cart[i].soluong;
  }
  document.querySelector(".title__item_2").innerHTML = s;
  document.querySelector(".total__money").innerHTML = tong;
}
function huyitem(n) {
  if (sessionStorage.getItem("cart") == null) {
    return false;
  }
  cart = JSON.parse(sessionStorage.getItem("cart"));
  for (i = 0; i < cart.length; i++) {
    if (cart.length == 1) {
      if (confirm("Bạn chắc muốn huỷ sản phẩm này??")) {
        sessionStorage.removeItem("cart");
        location.reload();
      }
    } else if (i == n) {
      console.log(n);
      if (confirm("Bạn chắc muốn huỷ sản phẩm này??")) {
        cart.splice(i, 1);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
      }
    }
  }
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
document.querySelector(".title__item__left");

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
  a.classList.add("left-menu-open");
  b.style.display = "block";
  c.style.display = "block";
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
function ShowGenres() {
  var a = document.querySelector(".body__genres");
  a.style.display = "block";
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

function log_in() {
  if (sessionStorage.getItem("dangnhap") == null) {
    return false;
  } else {
    dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
    userArray = JSON.parse(localStorage.getItem("User"));
    admin = JSON.parse(localStorage.getItem("admin"));
    console.log(admin[0].username);
    var sinbt = document.querySelector(".sin_bt");
    for (i = 0; i < userArray.length; i++) {
      if (dangnhap[0].username == userArray[i].username) {
        sinbt.style.display = "none";
        document.querySelector(".username").innerHTML = dangnhap[0].fullname;
        document.querySelector(".username").innerHTML = dangnhap[0].fullname;
      }
    }
  }
}
var cartlist = [];
function xacnhancart() {
  var date = new Date();
  if (sessionStorage.getItem("dangnhap") == null) {
    alert("Vui lòng đăng nhập trước khi mua");
    return false;
  }
  if (sessionStorage.getItem("cart") == null) {
    alert("Chưa có đơn hàng nào");
    return false;
  }
  userArray = JSON.parse(localStorage.getItem("User"));
  cart = JSON.parse(sessionStorage.getItem("cart"));
  dangnhap = JSON.parse(sessionStorage.getItem("dangnhap"));
  for (i = 0; i < userArray.length; i++) {
    if (userArray[i].username == dangnhap[0].username) {
      index = i;
      break;
    }
  }
  var mahd = dangnhap[0].username + "-" + date;
  var total = 0;
  for (i = 0; i < cart.length; i++) {
    total = total + cart[i].sp.price * cart[i].soluong;
  }
  var newproduct = {
    mahd: mahd,
    item: cart,
    buydate: date,
    tt: "Chưa xử lý",
    total: total,
  };
  userArray[index].giohang.push(newproduct);
  localStorage.setItem("User", JSON.stringify(userArray));
  sessionStorage.removeItem("cart");
  location.reload();
}
