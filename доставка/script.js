     function popup(){
    var btn = document.getElementById("btn_white").innerHTML;
    if(btn == "Log In"){
      document.querySelector(".popup").style.display = "flex";
      $(".popup").animate({opacity: '1'} , "slow");
      document.body.style.overflow = "hidden";
    }
    else{
      logout();
    }
  }

  function close_popup(){
    $(".popup").animate({opacity: '0'}, "slow");
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
    document.querySelector(".popup").style.display = "none";
  }

function login(name){
  document.querySelector(".user_profile").style.display = "inline";
  document.getElementById("user_name").innerHTML = name;
  document.getElementById("btn_white").innerHTML = "Log Out";
  close_popup();
}

function logout(){
  document.querySelector(".user_profile").style.display = "none";
  document.getElementById("btn_white").innerHTML = "Log In";
}

