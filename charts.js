function showSection(section) {
  const userType = localStorage.getItem("userType");
  let data;

  if (section === 'pre-seed') {
    data = [30, 10, 5, 2];
    document.getElementById("welcome").innerHTML = `
      <h2>مرحبًا ${userType === 'ra2ed' ? 'رائد الأعمال' : 'المستثمر العزيز'}</h2>
      <p>تحليل عروض ما قبل البذرة</p>
    `;
  } else if (section === 'seed') {
    data = [20, 15, 8, 3];
    document.getElementById("welcome").innerHTML = `<h2>تحليل عروض البذرة</h2>`;
  }

  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['تقنية', 'صحة', 'تعليم', 'طاقة'],
      datasets: [{
        label: 'عدد العروض',
        data: data,
        backgroundColor: '#1a73e8'
      }]
    }
  });
}

function uploadFile() {
  document.getElementById("upload-area").style.display = "block";
}

function analyzeFile() {
  alert("تم تحليل الملف بنجاح! (في النسخة الحقيقية نستخدم PapaParse لتحليل CSV)");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function logout() {
  localStorage.removeItem("userType");
  window.location.href = "index.html";
}

// عند التحميل
window.onload = function() {
  if (!localStorage.getItem("userType")) {
    window.location.href = "index.html";
  } else {
    showSection('pre-seed');
  }
};