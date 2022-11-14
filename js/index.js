var userArray = [];
var productArray = [];
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
    a.style.display = "flex";
    var b = document.getElementById("page_user");
    b.style.opacity = 0.25;
}
function closef(st) {
    var a = document.getElementById(st);
    a.style.display = "none";
    var b = document.getElementById("page_user");
    b.style.opacity = 1;
}
function show_password() {
    a = document.getElementById("psw");
    b = document.getElementById("showpsw");
    if (b.checked == true)
        a.setAttribute("type", "text");
    else {
        a.setAttribute("type", "password");
    }
}
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
    document.getElementById("genres__item").innerHTML += '<a href="#">' + genres[genres.length - 1] + '</a>';
    for (i = 0; i < genres.length; i++) {
        console.log(genres[i]);
    }
}
function show_password(st) {
    a = document.getElementById(st);
    b = document.getElementById("showpsw");
    if (b.checked == true)
        a.setAttribute("type", "text");
    else {
        a.setAttribute("type", "password");
    }
}
function create_admin() {
    var a = "admin";
    if (localStorage.getItem('User') == null) {
        alert("tk admin: admin mk: admin");
        var user1 = { username: 'thinhphat', password: 'admin', email: 'ntp@gmail.com', fullname: 'Nguyễn Thịnh Phát', address: '2 adv - P16 - Q8', phone: '012341' };
        var user2 = { username: 'quocdai', password: 'admin', email: 'lqd@gmail.com', fullname: 'Lâm Quốc Đại', address: '2 adv - P16 - Q8', phone: '012342' };
        var user3 = { username: 'ducthang', password: 'admin', email: 'ddt@gmail.com', fullname: 'Đào Đức Thắng', address: '2 adv - P16 - Q8', phone: '012343' };
        var user4 = { username: 'giabao', password: 'admin', email: 'tgb@gmail.com', fullname: 'Trần Gia Bảo', address: '2 adv - P16 - Q8', phone: '012344' };
        userArray.push(user1);
        userArray.push(user2);
        userArray.push(user3);
        userArray.push(user4);
        localStorage.setItem('User', JSON.stringify(userArray));
    }
}

function handle_signin() {
    console.log("helooo");
    if (localStorage.getItem('User') == null) {
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('User'));
    var tk = document.getElementById("email_sin").value;
    var mk = document.getElementById("psw_sin").value;
    var flat = 0;
    var am = "'page_admin'";
    var us = "'page_user'";
    for (i = 0; i < userArray.length; i++) {
        if (tk == userArray[i].username && mk == userArray[i].password) {
            closeb('signin');
            alert("bạn đã đăng nhập tài khoản " + tk);
            document.getElementById('infor_user').innerHTML = '<i class="fas fa-user-check" id="infor_user">' + userArray[i].fullname + '</i>';
            openf('logout');
            if (tk == 'thinhphat' || tk == 'quocdai' || tk == 'giabao' || tk == 'ducthang' && mk == 'admin') {
                document.getElementById("admin_button").innerHTML = '<i class="fas fa-pencil-alt" type="button" onclick="closeb(' + us + ') + openb(' + am + ')"></i>';
            }
            closef("form_sin");
            flat = 1;
        }
    }
    if (flat = 0) {
        alert("sai tài khoản hoặc mật khẩu vui lòng nhập lại");
        document.getElementById("signin_form").reset();
        return false;
    }
}
function reload_site() {
    location.reload();
}
function adduser() {
    var a = window.location.href;
    if (a.indexOf("?") == -1) {
        return false;
    }
    else {
        var userArray = JSON.parse(localStorage.getItem('User'));
        console.log(a);
        // lấy email từ url
        var temp = a.slice(a.indexOf("email_sup="), a.indexOf("&usern_sup"));
        console.log(temp);
        var emai = temp.slice(temp.indexOf("=") + 1);
        var t = emai.indexOf("%40");
        if (t != -1) {
            emai = emai.slice(0, t) + '@' + emai.slice(t + 3);
        }
        console.log(emai);
        //lấy username
        temp = a.slice(a.indexOf("usern_sup="), a.indexOf("&psw_sup"));
        console.log(temp);
        var uname = temp.slice(temp.indexOf("=") + 1);
        console.log(uname);
        //lấy password
        temp = a.slice(a.indexOf("psw_sup="), a.indexOf("&psw_repeat"))
        console.log(temp);
        var passw = temp.slice(temp.indexOf("=") + 1);
        console.log(passw);
        // lap lại password
        temp = a.slice(a.indexOf("psw_repeat="), a.indexOf("&fullname"))
        console.log(temp);
        var rpassw = temp.slice(temp.indexOf("=") + 1);
        console.log(rpassw);
        // lấy full name
        temp = a.slice(a.indexOf("fullname="));
        console.log(temp);
        var n = temp.slice(temp.indexOf("=") + 1);
        var name = "";
        for (i = 0; i < n.length; i++) {
            if (n[i] == "+") {
                name += " ";
            }
            else {
                name += n[i];
            }
        }
        console.log(name);
        var flat = 1;
        if (passw != rpassw) {
            alert("Mật khẩu và lặp lại mật khẩu khác nhau vui lòng nhập lại");
            document.getElementById("signup_form").reset();
            flat = 0;
            return false;
        }
        else {
            for (i = 0; i < userArray.length; i++) {
                if (userArray[i].username == uname) {
                    alert("Tên tài khoản đã tồn tại");
                    document.getElementById("signup_form").reset();
                    flat = 0;
                    return false;
                }
                else if (uname.length < 5) {
                    alert("Tên đăng nhập ít nhất 5 ký tự");
                    document.getElementById("usern_sup").reset();
                    flat = 0;
                    return false;
                }
            }
        }
        if (flat == 1) {
            var user = { username: uname, password: passw, email: emai, fullname: name, address: '', phone: '' };
            userArray.push(user);
            localStorage.setItem('User', JSON.stringify(userArray));
            alert("Đăng ký tài khoản thành công");
            closef('form_sup');
            openf('form_sin');
        }
    }
}
function setting() {

}
function test() {
    console.log("gi")
}

//tao mang danh sach sach
function createProduct() {
    if (localStorage.getItem('product') == null) {
        var productArray = [
            // Superhero Comics & Graphic Novels
            { productId: 1001, author: 'Todd Mcfarlane', img: 'imgs/1001.webp', name: 'Spawn Compendium, Color Edition, Volume 1', price: 1000000, information: 'TODD McFARLANE unleashed his signature creation, SPAWN, in 1992. In doing so, he created the most successful independent comic book in history. Add in collaborations with industry giants ALAN MOORE, FRANK MILLER, TONY DANIEL, and GRANT MORRISON, and SPAWN\'s future as a legend was sealed.' },
            { productId: 1002, author: 'Sam Hamm', img: 'imgs/1002.webp', name: 'Batman \'89', price: 400000, information: 'Continuing the adventures of the Dark Knight from Tim Burton\'s classic movie Batman, Batman \'89 pulls on a number of threads left dangling by that film while continuing in the tradition of DC\'s very successful Batman \'66 series.' },
            { productId: 1003, author: 'Ryan north', img: 'imgs/1003.jpg', name: 'Fantastic Four (2022-)', price: 100000, information: 'Whatever Happened To The Fantastic Four?” It’s the start of a new era for the Fantastic Four...and they’re already in a ton of trouble. Something has gone terribly wrong in New York, and the Thing and Alicia are traveling across America to escape it! But when they stop in a small town for the night and wake up the morning before they arrived, they find themselves caught in a time loop that’s been going on since before they were born...' },
            { productId: 1004, author: 'Stan Lee', img: 'imgs/1004.webp', name: 'Doctor Doom: The Book Of Doom Omnibus', price: 1750000, information: 'Bow before the majesty of Doctor Doom! The greatest villain of all is celebrated in a tome of tyranny six decades in the making! Featuring the Latverian ruler\'s first battle with the accursed Reed Richards and his Fantastic Four — and their most epic clashes since!' },
            { productId: 1005, author: 'Brian Michael Bendis', img: 'imgs/1005.jpg', name: 'Avengers Vs. X-Men Omnibus', price: 2200000, information: 'arth’s Mightiest Heroes battle the Children of the Atom in a crossover so huge it calls for Marvel’s biggest ever Omnibus! Get the whole story of the Phoenix Force’s return to Earth, an event that kicks off an all-out war between the Avengers and the X-Men!' },
            // Mystery, thriller and suspense
            { productId: 1006, author: 'Stephen King', img: 'imgs/1006.webp', name: 'Fairy Tale', price: 370000, information: 'Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.' },
            { productId: 1007, author: 'Colleen Hoover', img: 'imgs/1007.webp', name: 'Verity', price: 210000, information: 'Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of It Ends With Us.' },
            { productId: 1008, author: 'Ashley Flowers', img: 'imgs/1008.webp', name: 'All Good People Here: A Novel', price: 350000, information: '#1 NEW YORK TIMES BESTSELLER • In the propulsive debut novel from the host of the #1 true crime podcast Crime Junkie, a journalist uncovers her hometown’s dark secrets when she becomes obsessed with the unsolved murder of her childhood neighbor—and the disappearance of another girl twenty years later.' },
            { productId: 1009, author: 'Louise Penny', img: 'imgs/1009.jpg', name: 'A World of Curiosities: A Novel (Chief Inspector Gamache Novel, 18)', price: 420000, information: 'Chief Inspector Armand Gamache returns in the eighteenth book in #1 New York Times bestseller Louise Penny\'s beloved series.' },
            { productId: 10010, author: 'Laura Dave', img: 'imgs/10010.webp', name: 'The Last Thing He Told Me: A Novel', price: 230000, information: 'The instant #1 New York Times bestselling mystery and Reese Witherspoon Book Club pick that’s captivated more than two million readers about a woman searching for the truth about her husband’s disappearance…at any cost.' },
            //Crafts, Hobbies & Home
            { productId: 10011, author: 'John Kanell', img: 'imgs/10011.webp', name: 'Preppy Kitchen: Recipes for Seasonal Dishes and Simple Pleasures (A Cookbook)', price: 400000, information: 'Decadent, delicious seasonal comfort foods and desserts you can make at home no matter what your cooking level from the beloved social media star @PreppyKitchen.' },
            { productId: 10012, author: 'Coloring Book Cafe', img: 'imgs/10012.webp', name: 'Country Collection Coloring Book', price: 200000, information: 'Are you looking for a delightful country collection of coloring pages which feature all kinds of different scenes? Want to breathe life into tons of different settings and scenery? Or are you looking for a way to relieve anxiety and destress? Then this book is for you!' },
            { productId: 10013, author: 'Anthony William', img: 'imgs/10013.jpg', name: 'Medical Medium Brain Saver', price: 600000, information: 'Discover why millions rely on the #1 New York Times best-selling Medical Medium for health answers and natural healing protocols they can’t find anywhere else to over 100 symptoms, nervous system diseases, and disorders.' },
            { productId: 10014, author: 'Bridget Coloring Press', img: 'imgs/10014.webp', name: 'You Fucking Got This', price: 100000, information: 'Relax Your Mind With This Beautiful Sweary Adult Coloring Book.Be Honest, You’ve had a Shitty Day.' },
            { productId: 10015, author: 'KC Davis LPC', img: 'imgs/10015.jpg', name: 'How to Keep House While Drowning: A Gentle Approach to Cleaning and Organizing ', price: 200000, information: 'This revolutionary approach to cleaning and organizing helps free you from feeling ashamed or overwhelmed by a messy home.' },
            //Computers and Technology
            { productId: 10016, author: 'Chris Miller', img: 'imgs/10016.jpg', name: 'Chip War: The Quest to Dominate the World\'s Most Critical Technology', price: 0, information: 'An epic account of the decades-long battle to control what has emerged as the world’s most critical resource—microchip technology—with the United States and China increasingly in conflict.' },
            { productId: 10017, author: 'Martin Kleppmann', img: 'imgs/10017.webp', name: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems', price: 460000, information: 'Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers.' },
            { productId: 10018, author: 'Eric Matthes', img: 'imgs/10018.webp', name: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming', price: 430000, information: 'The best-selling Python book in the world, with over 1 million copies sold! A fast-paced, no-nonsense, updated guide to programming in Python.' },
            { productId: 10019, author: 'Gayle Laakmann McDowell', img: 'imgs/10019.webp', name: 'Cracking the Coding Interview: 189 Programming Questions and Solutions', price: 700000, information: 'I am not a recruiter. I am a software engineer. And as such, I know what it\'s like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I\'ve been through this as a candidate and as an interviewer.' },
            { productId: 10020, author: 'Alex Xu', img: 'imgs/10020.webp', name: 'System Design Interview – An insider\'s guide', price: 710000, information: 'System design interviews are the most difficult to tackle of all technical interview questions. This book is Volume 1 of the System Design Interview - An insider’s guide series that provides a reliable strategy and knowledge base for approaching a broad range of system design questions.' },

        ];
        localStorage.setItem('product', JSON.stringify(productArray));
    }
}
//ham hien thi sach
function show_list() {
    document.getElementById('show_list_hero').style.display = 'none';
    document.getElementById('show_list_mystery').style.display = 'none';
    document.getElementById('show_list_home').style.display = 'none';
    document.getElementById('show_list_com').style.display = 'none';
    var productArray = JSON.parse(localStorage.getItem('product'));
    var s = "";
    for (i = 0; i < productArray.length; i++) {
        var a = '<div class="books"><img src="' + productArray[i].img + '" class="image"><span class="book_name"><div class="name">' + productArray[i].name + '</div></span><span class="author_name"><div class="name_author">By ' + productArray[i].author + '</div></span><div class="price">' + productArray[i].price + 'đ</div></div>';
        s += a;
    }
    document.getElementById('show_list').innerHTML = s;
    // document.getElementById('show_list').style.display='block';
}
//Hiển thị loại sách mình muốn
// Truyện tranh và tiểu thuyết
function createProductHero() {
    if (localStorage.getItem('producthero') == null) {
        var productArrayHero = [
            // Superhero Comics & Graphic Novels
            { productId: 1001, author: 'Todd Mcfarlane', img: 'imgs/1001.webp', name: 'Spawn Compendium, Color Edition, Volume 1', price: 1000000 },
            { productId: 1002, author: 'Sam Hamm', img: 'imgs/1002.webp', name: 'Batman 89', price: 400000 },
            { productId: 1003, author: 'Ryan north', img: 'imgs/1003.jpg', name: 'Fantastic Four (2022-)', price: 100000 },
            { productId: 1004, author: 'Stan Lee', img: 'imgs/1004.webp', name: 'Doctor Doom: The Book Of Doom Omnibus', price: 1750000 },
            { productId: 1005, author: 'Brian Michael Bendis', img: 'imgs/1005.jpg', name: 'Avengers Vs. X-Men Omnibus', price: 2200000 },
        ];
        localStorage.setItem('productHero', JSON.stringify(productArrayHero));
    }
}
function Hero_Novel() {
    document.getElementById('show_list').style.display = 'none';
    document.getElementById('show_list_mystery').style.display = 'none';
    document.getElementById('show_list_home').style.display = 'none';
    document.getElementById('show_list_com').style.display = 'none';
    var productArrayHero = JSON.parse(localStorage.getItem('productHero'));
    var s = "";
    for (i = 0; i < productArrayHero.length; i++) {
        var a = '<div class="books"><img src="' + productArrayHero[i].img + '" class="image"><span class="book_name"><div class="name">' + productArrayHero[i].name + '</div></span><span class="author_name"><div class="name_author">By ' + productArrayHero[i].author + '</div></span><div class="price">' + productArrayHero[i].price + 'đ</div></div>';
        s += a;
    }
    document.getElementById('show_list_hero').innerHTML = s;
    document.getElementById('show_list_hero').style.display = 'block';
}
// Huyền ảo và kinh dị
function createProductMystery() {
    if (localStorage.getItem('productmystery') == null) {
        var productArrayMystery = [
            // Mystery, thriller and suspense
            { productId: 1006, author: 'Stephen King', img: 'imgs/1006.webp', name: 'Fairy Tale', price: 370000 },
            { productId: 1007, author: 'Colleen Hoover', img: 'imgs/1007.webp', name: 'Verity', price: 210000 },
            { productId: 1008, author: 'Ashley Flowers', img: 'imgs/1008.webp', name: 'All Good People Here: A Novel', price: 350000 },
            { productId: 1009, author: 'Louise Penny', img: 'imgs/1009.jpg', name: 'A World of Curiosities: A Novel (Chief Inspector Gamache Novel, 18)', price: 420000 },
            { productId: 10010, author: 'Laura Dave', img: 'imgs/10010.webp', name: 'The Last Thing He Told Me: A Novel', price: 230000 }
        ];
        localStorage.setItem('productMystery', JSON.stringify(productArrayMystery));
    }
}
function Mystery() {
    document.getElementById('show_list').style.display = 'none';
    document.getElementById('show_list_hero').style.display = 'none';
    document.getElementById('show_list_home').style.display = 'none';
    document.getElementById('show_list_com').style.display = 'none';
    var productArrayMystery = JSON.parse(localStorage.getItem('productMystery'));
    var s = "";
    for (i = 0; i < productArrayMystery.length; i++) {
        var a = '<div class="books"><img src="' + productArrayMystery[i].img + '" class="image"><span class="book_name"><div class="name">' + productArrayMystery[i].name + '</div></span><span class="author_name"><div class="name_author">By ' + productArrayMystery[i].author + '</div></span><div class="price">' + productArrayMystery[i].price + 'đ</div></div>';
        s += a;
    }
    document.getElementById('show_list_mystery').innerHTML = s;
    document.getElementById('show_list_mystery').style.display = 'block';
}
// Cuộc sống
function createProductHome() {
    if (localStorage.getItem('producthome') == null) {
        var productArrayHome = [
            //Crafts, Hobbies & Home
            { productId: 10011, author: 'John Kanell', img: 'imgs/10011.webp', name: 'Preppy Kitchen: Recipes for Seasonal Dishes and Simple Pleasures (A Cookbook)', price: 400000 },
            { productId: 10012, author: 'Coloring Book Cafe', img: 'imgs/10012.webp', name: 'Country Collection Coloring Book', price: 200000 },
            { productId: 10013, author: 'Anthony William', img: 'imgs/10013.jpg', name: 'Medical Medium Brain Saver', price: 600000 },
            { productId: 10014, author: 'Bridget Coloring Press', img: 'imgs/10014.webp', name: 'You Fucking Got This', price: 100000 },
            { productId: 10015, author: 'KC Davis LPC', img: 'imgs/10015.jpg', name: 'How to Keep House While Drowning: A Gentle Approach to Cleaning and Organizing ', price: 20000 }
        ];
        localStorage.setItem('producthome', JSON.stringify(productArrayHome));
    }
}
function home() {
    document.getElementById('show_list').style.display = 'none';
    document.getElementById('show_list_hero').style.display = 'none';
    document.getElementById('show_list_mystery').style.display = 'none';
    document.getElementById('show_list_com').style.display = 'none';
    var productArrayHome = JSON.parse(localStorage.getItem('producthome'));
    var s = "";
    for (i = 0; i < productArrayHome.length; i++) {
        var a = '<div class="books"><img src="' + productArrayHome[i].img + '" class="image"><span class="book_name"><div class="name">' + productArrayHome[i].name + '</div></span><span class="author_name"><div class="name_author">By ' + productArrayHome[i].author + '</div></span><div class="price">' + productArrayHome[i].price + 'đ</div></div>';
        s += a;
    }
    document.getElementById('show_list_home').innerHTML = s;
    document.getElementById('show_list_home').style.display = 'block';
}
// Khoa học công nghệ
function createProductCom() {
    if (localStorage.getItem('productcom') == null) {
        var productArrayCom = [
            //Computers and Technology
            { productId: 10016, author: 'Chris Miller', img: 'imgs/10016.jpg', name: 'Chip War: The Quest to Dominate the World\'s Most Critical Technology', price: 0 },
            { productId: 10017, author: 'Martin Kleppmann', img: 'imgs/10017.webp', name: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems', price: 460000 },
            { productId: 10018, author: 'Eric Matthes', img: 'imgs/10018.webp', name: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming', price: 430000 },
            { productId: 10019, author: 'Gayle Laakmann McDowell', img: 'imgs/10019.webp', name: 'Cracking the Coding Interview: 189 Programming Questions and Solutions', price: 700000 },
            { productId: 10020, author: 'Alex Xu', img: 'imgs/10020.webp', name: 'System Design Interview – An insider\'s guide', price: 710000 }
        ];
        localStorage.setItem('productcom', JSON.stringify(productArrayCom));
    }
}
function Computer() {
    document.getElementById('show_list').style.display = 'none';
    document.getElementById('show_list_hero').style.display = 'none';
    document.getElementById('show_list_mystery').style.display = 'none';
    document.getElementById('show_list_home').style.display = 'none';
    var productArrayCom = JSON.parse(localStorage.getItem('productcom'));
    var s = "";
    for (i = 0; i < productArrayCom.length; i++) {
        var a = '<div class="books"><img src="' + productArrayCom[i].img + '" class="image"><span class="book_name"><div class="name">' + productArrayCom[i].name + '</div></span><span class="author_name"><div class="name_author">By ' + productArrayCom[i].author + '</div></span><div class="price">' + productArrayCom[i].price + 'đ</div></div>';
        s += a;
    }
    document.getElementById('show_list_com').innerHTML = s;
    document.getElementById('show_list_com').style.display = 'block';
}
function batmenu() {
    document.getElementById('genres__item').style.display = 'block';
}
function tatmenu() {
    document.getElementById('genres__item').style.display = 'none';
}


