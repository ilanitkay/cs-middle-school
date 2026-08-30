// ניווט מובייל
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // סימון "השלמתי פרק זה" - נשמר בדפדפן המקומי
  var doneCheckbox = document.querySelector("[data-mark-done]");
  if (doneCheckbox) {
    var key = doneCheckbox.getAttribute("data-mark-done");
    doneCheckbox.checked = localStorage.getItem(key) === "1";
    doneCheckbox.addEventListener("change", function () {
      localStorage.setItem(key, doneCheckbox.checked ? "1" : "0");
    });
  }

  // סימון פרקים שהושלמו בעמוד רשימת הפרקים
  document.querySelectorAll("[data-chapter-key]").forEach(function (row) {
    var key = row.getAttribute("data-chapter-key");
    if (localStorage.getItem(key) === "1") {
      row.classList.add("is-done");
    }
  });
});
