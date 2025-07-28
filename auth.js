function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "ra2ed" && password === "123") {
    localStorage.setItem("userType", "ra2ed");
    window.location.href = "dashboard.html";
  } else if (username === "mostathmer" && password === "123") {
    localStorage.setItem("userType", "investor");
    window.location.href = "dashboard.html";
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
  }
}

function googleLogin() {
  alert("تسجيل الدخول بحساب Google (محاكى) - يمكنك المتابعة كـ رائد أعمال أو مستثمر");
  localStorage.setItem("userType", "investor");
  window.location.href = "dashboard.html";
}