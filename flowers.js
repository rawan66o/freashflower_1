// // scroller
// let el = document.querySelector(".scroller");
// let height =
//   document.documentElement.scrollHeight - document.documentElement.clientHeight;
// window.addEventListener("scroll", () => {
//   const scrollTop = document.documentElement.scrollTop;
//   el.style.width = `${(scrollTop / height) * 100}%`;
// });

// gray mood
function toggleMoodBage() {
  var bodyStyle = getComputedStyle(document.body);
  var currentBageColor = bodyStyle.getPropertyValue('--mood-bage-color');

  if (currentBageColor === '#dcdcdc') {
      document.body.style.setProperty('--mood-bage-bg', '#dcdcdc');
      document.body.style.setProperty('--mood-bage-color', '#fff');
  } else {
      document.body.style.setProperty('--mood-bage-bg', '#fff');
      document.body.style.setProperty('--mood-bage-color', '#dcdcdc');
  }
}

// rename title
function rename() {
  alert("changed title of website to the best center");
  document.getElementById('test2').innerHTML = "The Best Center";
}