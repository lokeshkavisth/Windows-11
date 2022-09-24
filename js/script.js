$(document).ready(function () {
  // function for apps panel

  $(".fa-windows").click(function () {
    $(".win-panel").slideToggle("hide-show");
  });

  // Time function

  setInterval(() => {
    let h = new Date();
    let m = new Date();
    let ampm = "AM";

    h = h.getHours();
    m = m.getMinutes();

    ampm = h >= 12 ? (ampm = "PM") : ampm;
    h = h > 12 ? h - 12 : h;
    m = m >= 60 ? m - 60 : m;
    h = h < 10 ? (h = "0" + h) : h;
    m = m < 10 ? (m = "0" + m) : m;

    $(".hour").text(h);
    $(".minute").text(m);
    $(".am-pm").text(ampm);
  }, 1000);

  // date function

  let today = new Date();
  var format = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  let date = today.toLocaleDateString("en-US", format);
  $(".date").text(date);
});
