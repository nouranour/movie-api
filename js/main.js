var myHttp = new XMLHttpRequest();
var allMoveies = [];

function getData() {
    myHttp.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR35pdeZf8WwtZjge6utGimezrXh2XrK5qEFz1kSboKLGHwGvmHj7czx6QI');
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            allMoveies = JSON.parse(myHttp.response).results;
            displayMovies();

        }

    })
}
getData();

function displayMovies() {
    var cartoona = ``;
    for (var i = 0; i < allMoveies.length; i++) {
        cartoona += `<div class="col-md-6 col-lg-4 my-3 ">  <div class="movie shadow rounded position-relative">
        <div class="post">
        <img class="w-100 img-fluid rounded" src="https://image.tmdb.org/t/p/w500${allMoveies[i].poster_path}" alt="">
        <div class="layer d-flex align-items-center ">
        <div class="info ">
            <h2>${allMoveies[i].original_title}</h2>
            <p>${allMoveies[i].overview} </p>
            <p>rate: ${allMoveies[i].vote_average}</p>
            <p>${allMoveies[i].release_date}</p>
        </div>
    </div>
        </div></div>  </div>`;
    }
    document.getElementById('postRow').innerHTML = cartoona;
};
//
// var searchInput = document.getElementById("search-input");
// searchInput.onkeyup = function() {

//     var cartoona = ``;
//     var term = searchInput.value;
//     for (var i = 0; i < allMoveies.length; i++) {
//         if (allMoveies[i]............... {
//             cartoona += `<div class="col-md-6 col-lg-4 my-3 ">  <div class="movie shadow rounded position-relative">
//             <div class="post">
//             <img class="w-100 img-fluid rounded" src="https://image.tmdb.org/t/p/w500${allMoveies[i].poster_path}" alt="">
//             <div class="layer d-flex align-items-center ">
//             <div class="info ">
//                 <h2>${allMoveies[i].original_title}</h2>
//                 <p>${allMoveies[i].overview} </p>
//                 <p>rate: ${allMoveies[i].vote_average}</p>
//                 <p>${allMoveies[i].release_date}</p>
//             </div>
//         </div>
//             </div></div>  </div>`;
//         }
//         document.getElementById('postRow').innerHTML = cartoona;
//     }
// }

//
let nvWidth = 0;


$("#toggleBar").click(function() {

    if (nvWidth == 0) {
        $(".nav-tab-menu").addClass("open-menu").removeClass("close-menu");
        nvWidth = $(".nav-tab-menu").width() - 10;
        $(".sidebar-sec").css("left", nvWidth),
            $(".fa-bars").toggleClass("fa-times");
        $(".nav-tab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
            $(".nav-tab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
            $(".nav-tab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
            $(".nav-tab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1400),
            $(".nav-tab-menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 1500),
            $(".nav-tab-menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 1600);
    } else {
        $(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"),
            $(".fa-bars").toggleClass("fa-times"),
            $(".sidebar-sec").css("left", 0),
            $(".nav-tab-menu li").animate({ opacity: "0", paddingTop: "500px" }, 500);
    }


});



//form
let userName = document.getElementById("name"),
    userEmail = document.getElementById("email"),
    userPhone = document.getElementById("phone"),
    userAge = document.getElementById("age"),
    userPassword = document.getElementById("password"),
    userRePassword = document.getElementById("rePassword"),
    userNamealert = document.getElementById("namealert"),
    userEmailalert = document.getElementById("emailalert"),
    userPhonealert = document.getElementById("phonealert"),
    userAgealert = document.getElementById("agealert"),
    userPasswordalert = document.getElementById("passwordalert"),
    userRePasswordalert = document.getElementById("repasswordalert"),
    submitBtn = document.getElementById("submitBtn");
//
function validateUsername() {
    var regex = /^[a-z A-z 0-9]{3,15}$/;

    if (regex.test(userName.value) == true) {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        userNamealert.style.display = "none";
        submitBtn.disabled = false;
        return true;

    } else {
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        userNamealert.style.display = "block";
        submitBtn.disabled = true;
        return false;
    };
};
userName.addEventListener("keyup", validateUsername);


//useremail
function validateuserEmail() {
    var regex = /^[\w_\.]+@([\w-]+\.)+[\w-]{3,}$/;
    if (regex.test(userEmail.value) == true) {
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        userEmailalert.style.display = "none";
        submitBtn.disabled = false;
        return true;

    } else {
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        userEmailalert.style.display = "block";
        submitBtn.disabled = true;
        return false;
    };
};

userEmail.addEventListener("keyup", validateuserEmail);
//password
function validatePassword() {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (regex.test(userPassword.value) == true) {
        userPassword.classList.add("is-valid");
        userPassword.classList.remove("is-invalid");
        userPasswordalert.style.display = "none";
        submitBtn.disabled = false;
        return true;

    } else {
        userPassword.classList.add("is-invalid");
        userPassword.classList.remove("is-valid");
        userPasswordalert.style.display = "block";
        submitBtn.disabled = true;
        return false;
    };
};

userPassword.addEventListener("keyup", validatePassword);
//repassword

function validateRePassword() {
    if (userPassword.value == userRePassword.value) {
        userRePassword.classList.add("is-valid");
        userRePassword.classList.remove("is-invalid");
        userRePasswordalert.style.display = "none";
        submitBtn.disabled = false;
        return true;
    } else {
        userRePassword.classList.add("is-invalid");
        userRePassword.classList.remove("is-valid");
        userRePasswordalert.style.display = "block";
        submitBtn.disabled = true;
        return false;
    };
};

userRePassword.addEventListener("keyup", validateRePassword);

// phone
function validatePhonenumber() {
    var regex = /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;

    if (regex.test(userPhone.value) == true) {
        userPhone.classList.add("is-valid");
        userPhone.classList.remove("is-invalid");
        userPhonealert.style.display = "none";
        submitBtn.disabled = false;
        return true;

    } else {
        userPhone.classList.add("is-invalid");
        userPhone.classList.remove("is-valid");
        userPhonealert.style.display = "block";
        submitBtn.disabled = true;
        return false;
    };
};
userPhone.addEventListener("keyup", validatePhonenumber);
// Age
function validateAge() {
    var regex = /^[1-7][0-9]?$|^80$/;

    if (regex.test(userAge.value) == true) {
        userAge.classList.add("is-valid");
        userAge.classList.remove("is-invalid");
        userAgealert.style.display = "none";
        submitBtn.disabled = false;

        return true;

    } else {
        userAge.classList.add("is-invalid");
        userAge.classList.remove("is-valid");
        userAgealert.style.display = "block";
        submitBtn.disabled = true;
        return false;
    };
};

userAge.addEventListener("keyup", validateAge);



















document.getElementById("contact").addEventListener("click", function()

    {
        validateUsername() && validateuserEmail() && validatePassword() &&
            validateRePassword() && validatePhonenumber() && validateAge();
        document.getElementById("submitBtn").disabled = true;
        document.getElementById("submitBtn").disabled = false;
    });