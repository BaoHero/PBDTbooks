var userArray = [];
var productArray = [];
var genresArray = [];
var dangnhap = [];
var admin = [];
var sanpham = [];
//localStorage.clear()
function createProduct() {
  if (localStorage.getItem("product") == null) {
    productArray = [
      // English Books
      {
        productId: 1,
        genresId: "EngBooks",
        author: "Todd Mcfarlane",
        img: "imgs/EngBooks/1.webp",
        name: "Spawn Compendium, Color Edition, Volume 1",
        price: 20000,
        information:
          "TODD McFARLANE unleashed his signature creation, SPAWN, in 1992. In doing so, he created the most successful independent comic book in history. Add in collaborations with industry giants ALAN MOORE, FRANK MILLER, TONY DANIEL, and GRANT MORRISON, and SPAWN's future as a legend was sealed.",
      },
      {
        productId: 2,
        genresId: "EngBooks",
        author: "Sam Hamm",
        img: "imgs/EngBooks/2.webp",
        name: "Batman 89",
        price: 40000,
        information:
          "Continuing the adventures of the Dark Knight from Tim Burton's classic movie Batman, Batman '89 pulls on a number of threads left dangling by that film while continuing in the tradition of DC's very successful Batman '66 series.",
      },
      {
        productId: 3,
        genresId: "EngBooks",
        author: "Ryan north",
        img: "imgs/EngBooks/3.jpg",
        name: "Fantastic Four (2022)",
        price: 10000,
        information:
          "Whatever Happened To The Fantastic Four? Its the start of a new era for the Fantastic Four...and they are already in a ton of trouble. Something has gone terribly wrong in New York, and the Thing and Alicia are traveling across America to escape it! But when they stop in a small town for the night and wake up the morning before they arrived, they find themselves caught in a time loop that is been going on since before they were born...",
      },
      {
        productId: 4,
        genresId: "EngBooks",
        author: "Stan Lee",
        img: "imgs/EngBooks/4.webp",
        name: "Doctor Doom: The Book Of Doom Omnibus",
        price: 17500,
        information:
          "Bow before the majesty of Doctor Doom! The greatest villain of all is celebrated in a tome of tyranny six decades in the making! Featuring the Latverian ruler's first battle with the accursed Reed Richards and his Fantastic Four — and their most epic clashes since!",
      },
      {
        productId: 5,
        genresId: "EngBooks",
        author: "Brian Michael Bendis",
        img: "imgs/EngBooks/5.jpg",
        name: "Avengers Vs. X-Men Omnibus",
        price: 22000,
        information:
          "arth’s Mightiest Heroes battle the Children of the Atom in a crossover so huge it calls for Marvel’s biggest ever Omnibus! Get the whole story of the Phoenix Force’s return to Earth, an event that kicks off an all-out war between the Avengers and the X-Men!",
      },
      {
        productId: 6,
        genresId: "EngBooks",
        author: "Stephen King",
        img: "imgs/EngBooks/6.webp",
        name: "Fairy Tale",
        price: 37000,
        information:
          "Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.",
      },
      {
        productId: 7,
        genresId: "EngBooks",
        author: "Colleen Hoover",
        img: "imgs/EngBooks/7.webp",
        name: "Verity",
        price: 21000,
        information:
          "Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of It Ends With Us.",
      },
      {
        productId: 8,
        genresId: "EngBooks",
        author: "Ashley Flowers",
        img: "imgs/EngBooks/8.webp",
        name: "All Good People Here: A Novel",
        price: 35000,
        information:
          "#1 NEW YORK TIMES BESTSELLER • In the propulsive debut novel from the host of the #1 true crime podcast Crime Junkie, a journalist uncovers her hometown’s dark secrets when she becomes obsessed with the unsolved murder of her childhood neighbor—and the disappearance of another girl twenty years later.",
      },
      {
        productId: 9,
        genresId: "EngBooks",
        author: "Louise Penny",
        img: "imgs/EngBooks/9.jpg",
        name: "A World of Curiosities: A Novel (Chief Inspector Gamache Novel, 18)",
        price: 42000,
        information:
          "Chief Inspector Armand Gamache returns in the eighteenth book in #1 New York Times bestseller Louise Penny's beloved series.",
      },
      {
        productId: 10,
        genresId: "EngBooks",
        author: "Laura Dave",
        img: "imgs/EngBooks/10.webp",
        name: "The Last Thing He Told Me: A Novel",
        price: 23000,
        information:
          "The instant #1 New York Times bestselling mystery and Reese Witherspoon Book Club pick that’s captivated more than two million readers about a woman searching for the truth about her husband’s disappearance…at any cost.",
      },
      {
        productId: 11,
        genresId: "EngBooks",
        author: "John Kanell",
        img: "imgs/EngBooks/11.webp",
        name: "Preppy Kitchen: Recipes for Seasonal Dishes and Simple Pleasures (A Cookbook)",
        price: 40000,
        information:
          "Decadent, delicious seasonal comfort foods and desserts you can make at home no matter what your cooking level from the beloved social media star @PreppyKitchen.",
      },
      {
        productId: 12,
        genresId: "EngBooks",
        author: "Coloring Book Cafe",
        img: "imgs/EngBooks/12.webp",
        name: "Country Collection Coloring Book",
        price: 20000,
        information:
          "Are you looking for a delightful country collection of coloring pages which feature all kinds of different scenes? Want to breathe life into tons of different settings and scenery? Or are you looking for a way to relieve anxiety and destress? Then this book is for you!",
      },
      {
        productId: 13,
        genresId: "EngBooks",
        author: "Anthony William",
        img: "imgs/EngBooks/13.jpg",
        name: "Medical Medium Brain Saver",
        price: 60000,
        information:
          "Discover why millions rely on the #1 New York Times best-selling Medical Medium for health answers and natural healing protocols they can’t find anywhere else to over 100 symptoms, nervous system diseases, and disorders.",
      },
      {
        productId: 14,
        genresId: "EngBooks",
        author: "Bridget Coloring Press",
        img: "imgs/EngBooks/14.webp",
        name: "You Fucking Got This",
        price: 90000,
        information:
          "Relax Your Mind With This Beautiful Sweary Adult Coloring Book.Be Honest, You’ve had a Shitty Day.",
      },
      {
        productId: 15,
        genresId: "EngBooks",
        author: "KC Davis LPC",
        img: "imgs/EngBooks/15.jpg",
        name: "How to Keep House While Drowning: A Gentle Approach to Cleaning and Organizing ",
        price: 20000,
        information:
          "This revolutionary approach to cleaning and organizing helps free you from feeling ashamed or overwhelmed by a messy home.",
      },
      {
        productId: 16,
        genresId: "EngBooks",
        author: "Chris Miller",
        img: "imgs/EngBooks/16.jpg",
        name: "Chip War: The Quest to Dominate the World's Most Critical Technology",
        price: 30000,
        information:
          "An epic account of the decades-long battle to control what has emerged as the world’s most critical resource—microchip technology—with the United States and China increasingly in conflict.",
      },
      {
        productId: 17,
        genresId: "EngBooks",
        author: "Martin Kleppmann",
        img: "imgs/EngBooks/17.webp",
        name: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
        price: 46000,
        information:
          "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers.",
      },
      {
        productId: 18,
        genresId: "EngBooks",
        author: "Eric Matthes",
        img: "imgs/EngBooks/18.webp",
        name: "Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming",
        price: 43000,
        information:
          "The best-selling Python book in the world, with over 1 million copies sold! A fast-paced, no-nonsense, updated guide to programming in Python.",
      },
      {
        productId: 19,
        genresId: "EngBooks",
        author: "Gayle Laakmann McDowell",
        img: "imgs/EngBooks/19.webp",
        name: "Cracking the Coding Interview: 189 Programming Questions and Solutions",
        price: 70000,
        information:
          "I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.",
      },
      {
        productId: 20,
        genresId: "EngBooks",
        author: "Alex Xu",
        img: "imgs/EngBooks/20.webp",
        name: "System Design Interview – An insider's guide",
        price: 71000,
        information:
          "System design interviews are the most difficult to tackle of all technical interview questions. This book is Volume 1 of the System Design Interview - An insider’s guide series that provides a reliable strategy and knowledge base for approaching a broad range of system design questions.",
      },
      // Life books
      {
        productId: 21,
        genresId: "Life",
        author: "Trần Khánh Dư",
        img: "imgs/Life/1.jpg",
        name: "Tiểu thuyết lịch sử lưu sơn minh",
        price: 80000,
        information:
          "Sách nói về lịch sử của lưu sơn minh.",
      },
      {
        productId: 22,
        genresId: "Life",
        author: "Nguyễn Thanh Xuân",
        img: "imgs/Life/2.png",
        name: "Sự trỗi dậy và suy tàn của các vương quốc",
        price: 40000,
        information:
          "Biến đổi kinh tế và quân sự từ năm 1500 đến năm 2000.",
      },
      {
        productId: 23,
        genresId: "Life",
        author: "Đinh Mạc",
        img: "imgs/Life/3.jpg",
        name: "Thời gian tươi đẹp",
        price: 15000,
        information:
          "Tiểu thuyết về tuổi thanh xuân.",
      },
      {
        productId: 24,
        genresId: "Life",
        author: "Đỗ Thùy Dương",
        img: "imgs/Life/4.jpg",
        name: "Con gái Bà Triệu thế kỉ 21",
        price: 27500,
        information:
          "Câu chuyện về những người phụ nữ Việt Nam ghi dấu ấn",
      },
      {
        productId: 25,
        genresId: "Life",
        author: "Vũ Trọng Phụng",
        img: "imgs/Life/5.jpg",
        name: "Làm gì",
        price: 22000,
        information:
          "Câu chuyện về cuộc sống mưu sinh của người con gái nghèo khổ",
      },
      {
        productId: 26,
        genresId: "Life",
        author: "Thùy Dương",
        img: "imgs/Life/6.jpg",
        name: "Vẽ theo phong cách Kawaii",
        price: 37000,
        information:
          "Hướng dẫn vẽ theo mẫu.",
      },
      {
        productId: 27,
        genresId: "Life",
        author: "Mai Rio",
        img: "imgs/Life/7.jpg",
        name: "Hiểu về hóa học",
        price: 29000,
        information:
          "Kiến thức về hóa học dành cho học sinh dở hóa.",
      },
      {
        productId: 28,
        genresId: "Life",
        author: "Dominic",
        img: "imgs/Life/8.jpg",
        name: "Siêu trí nhớ",
        price: 32000,
        information:
          "Sách về cậu bé với trí nhớ siêu việt.",
      },
      {
        productId: 29,
        genresId: "Life",
        author: "Nguyễn Thị Nhung",
        img: "imgs/Life/9.jpg",
        name: "Mỹ Thuật 7",
        price: 45000,
        information:
          "Sách mỹ thuật lớp 7.",
      },
      {
        productId: 30,
        genresId: "Life",
        author: "Thùy Dương",
        img: "imgs/Life/10.jpg",
        name: "Cậu không hề nhỏ bé",
        price: 29000,
        information:
          "Sách kể về câu chuyện sâu sắc đáng suy ngẫm.",
      },
      {
        productId: 31,
        genresId: "Life",
        author: "Hoàng Văn Vân",
        img: "imgs/Life/11.jpg",
        name: "Tiếng Anh 6",
        price: 40000,
        information:
          "Sách tiếng anh dành cho học sinh lớp 6.",
      },
      // Manga
      {
        productId: 32,
        genresId: "Manga",
        author: "Kim Đồng",
        img: "imgs/Manga/1.jpg",
        name: "Cây khế",
        price: 20000,
        information:
          "Chuyện về 2 anh em và cây khế",
      },
      {
        productId: 33,
        genresId: "Manga",
        author: "Kim Đồng",
        img: "imgs/Manga/2.jpg",
        name: "Thần đồng Đất việt",
        price: 40000,
        information:
          "Truyện cười kể về một cậu bé hài hước.",
      },
      {
        productId: 34,
        genresId: "Manga",
        author: "Tô Hoài",
        img: "imgs/Manga/3.jpg",
        name: "Dế mèn phiêu lưu kí",
        price: 70000,
        information:
          "Chuyến phiêu lưu đầy mạo hiểm của dế mèn và nhiều bài học được đúc kết.",
      },
      {
        productId: 35,
        genresId: "Manga",
        author: "Kim đồng",
        img: "imgs/Manga/4.jpg",
        name: "Tấm Cám",
        price: 57500,
        information:
          "Truyện về gia đình có 2 chị em đấu đá nhau.",
      },
      {
        productId: 36,
        genresId: "Manga",
        author: "Kim Đồng",
        img: "imgs/Manga/5.jpg",
        name: "Con rồng cháu tiên",
        price: 22000,
        information:
          "Truyện kể về cặp đôi Âu Cơ và Lạc Long Quân sinh đẻ.",
      },
      {
        productId: 37,
        genresId: "Manga",
        author: "Trương Tố Lan",
        img: "imgs/Manga/6.jpg",
        name: "Phải chủ động nói ra",
        price: 37000,
        information:
          "Cuốn sách đọc để rèn lại nhân cách sống.",
      },
      {
        productId: 38,
        genresId: "Manga",
        author: "Hosoda Mamoru",
        img: "imgs/Manga/7.jpg",
        name: "Những đứa con của sói",
        price: 61000,
        information:
          "Truyện nhật bản kể về câu chuyện của cậu bé sói.",
      },
      {
        productId: 39,
        genresId: "Manga",
        author: "Himiko",
        img: "imgs/Manga/8.jpg",
        name: "Đứa con của thần tượng",
        price: 45000,
        information:
          "Truyện kể về số phận của nữ thần tượng Aoi.",
      },
      {
        productId: 40,
        genresId: "Manga",
        author: "Kirito",
        img: "imgs/Manga/9.jpg",
        name: "Sword art Online",
        price: 42000,
        information:
          "Câu chuyện về kiếm sĩ trong trò chơi nọ .",
      },
      // Novel
      {
        productId: 41,
        genresId: "Novel",
        author: "Paolo Coelo",
        img: "imgs/Novel/1.jpg",
        name: "Nhà Giả Kim",
        price: 53000,
        information:
          "Sách nói về giả kim thuật sư và chuyến hành trình của ông.",
      },
      {
        productId: 42,
        genresId: "Novel",
        author: "Lô Lô",
        img: "imgs/Novel/2.jpg",
        name: "Vì em gặp anh",
        price: 43000,
        information:
          "Sách nói về câu chuyện tình yêu của đôi nam nữ.",
      },
      {
        productId: 43,
        genresId: "Novel",
        author: "Ekuni Kaori",
        img: "imgs/Novel/3.jpg",
        name: "Lấp Lánh",
        price: 57000,
        information:
          "Tiểu thuyết về một câu chuyện động lòng người.",
      },
      {
        productId: 44,
        genresId: "Novel",
        author: "JK Rowling",
        img: "imgs/Novel/4.jpeg",
        name: "Harry Porter",
        price: 73000,
        information:
          "Câu chuyện về cậu bé sử dụng phép thuật làm chấn động thế giới.",
      },
      {
        productId: 45,
        genresId: "Novel",
        author: "Nguyễn Thành Vũ",
        img: "imgs/Novel/5.jpg",
        name: "Hoàng Tử Bé",
        price: 93000,
        information:
          "Câu chuyện về cậu bé và chú chó phiêu lưu cùng nhau.",
      },
      {
        productId: 46,
        genresId: "Novel",
        author: "Cơ Hiểu An",
        img: "imgs/Novel/6.jpg",
        name: "Đơn Giản",
        price: 63000,
        information:
          "Vũ khí sắc bén ứng phó với thế gian phức tạp.",
      },
      {
        productId: 47,
        genresId: "Novel",
        author: "Hồng Sakura",
        img: "imgs/Novel/7.jpg",
        name: "Xu Xu đừng khóc",
        price: 23000,
        information:
          "Tiểu thuyết về cô bé hay khóc nhè và câu chuyện cảm động phía sau.",
      },
      {
        productId: 48,
        genresId: "Novel",
        author: "Hân Như",
        img: "imgs/Novel/8.jpg",
        name: "Điều bí mật",
        price: 57000,
        information:
          "Tiểu thuyết về một câu chuyện bí mật, bạn mua đọc thì sẽ biết bí mật là gì =)).",
      },
      {
        productId: 49,
        genresId: "Novel",
        author: "Nam Cố",
        img: "imgs/Novel/9.jpg",
        name: "Sống là âm thầm bùng nổ",
        price: 83000,
        information:
          "Câu chuyện khiến ta suy ngẫm về cuộc sống và sự cống hiến của mình.",
      },
      {
        productId: 50,
        genresId: "Novel",
        author: "Jo Kyung ran",
        img: "imgs/Novel/10.jpg",
        name: "Ái Tình nơi đầu lưỡi",
        price: 47000,
        information:
          "Chuyện tình yêu của tuổi thanh xuân như thế nào , cuốn sách này sẽ giải đáp tất cả !",
      },
      {
        productId: 51,
        genresId: "Novel",
        author: "Emilli William",
        img: "imgs/Novel/22.jpg",
        name: "Học cách để yêu",
        price: 53000,
        information:
          "Tôi chưa bao giờ biết yêu thương là gì, đó là nội dung của sách, đọc để biết yêu thương là gì !",
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
      username: "thuan",
      password: "admin",
      email: "thuan@gmail.com",
      fullname: "Thuận",
      address: "2 adv - P16 - Q8",
      phone: "0123466431",
      giohang: cart,
      tt: "unblock",
    };
    var user2 = {
      username: "anhkhoa",
      password: "admin",
      email: "khoa@gmail.com",
      fullname: "Anh Khoa",
      address: "2 adv - P16 - Q8",
      phone: "0124321342",
      giohang: cart,
      tt: "unblock",
    };
    var user3 = {
      username: "giabao",
      password: "admin",
      email: "giabao@gmail.com",
      fullname: "Trần Gia Bảo",
      address: "2 adv - P16 - Q8",
      phone: "0123238944",
      giohang: cart,
      tt: "unblock",
    };
    userArray.push(user1);
    userArray.push(user2);
    userArray.push(user3);
    admin.push(user1);
    admin.push(user2);
    admin.push(user3);

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
      { genres_name: "Sách tiếng anh", id: "EngBooks" },
      { genres_name: "Đời sống con người", id: "Life" },
      { genres_name: "Truyện tranh trẻ em", id: "Manga" },
      { genres_name: "Tiểu thuyết", id: "Novel" },
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
        tempitem = filter_price(tempitem, 0, 30000);
        break;
      case "2":
        tempitem = filter_price(tempitem, 30000, 70000);
        break;
      case "3":
        tempitem = filter_price(tempitem, 70000, 100000);
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
