setInterval(() => {
  var hour = document.querySelector("#hour");
  var minutes = document.querySelector("#minutes");
  var seconds = document.querySelector("#seconds");
  var ampm = document.querySelector("#ampm");

  let day = new Date();
  let hr = day.getHours();
  let mn = day.getMinutes();
  let sc = day.getSeconds();
  let am = "AM";

  if (hr > 12) {
    hr = hr - 12;
    let am = "PM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  mn = mn < 10 ? "0" + mn : mn;
  sc = sc < 10 ? "0" + sc : sc;

  hour.innerHTML = hr;
  minutes.innerHTML = mn;
  seconds.innerHTML = sc;
  ampm.innerHTML = am;
}, 1000);
