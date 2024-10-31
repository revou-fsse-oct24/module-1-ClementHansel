var progress = setInterval(function () {
  var $bar = $(".bar");

  if ($bar.width() >= 400) {
    clearInterval(progress);
    $(".progress").removeClass("active");
  } else {
    $bar.width($bar.width() + 40);
  }
  $bar.text($bar.width() / 4 + "%");
}, 800);
