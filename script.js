function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

var love = setInterval(function() {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;

  var heart1 = document.createElement('div');
  heart1.className = 'heart';
  heart1.style.width = r_size + 'px';
  heart1.style.height = r_size + 'px';
  heart1.style.left = r_left + '%';
  heart1.style.background = 'rgba(255,' + (r_bg - 25) + ',' + r_bg + ',1)';
  heart1.style.animation = 'love ' + r_time + 's ease';

  var heart2 = document.createElement('div');
  heart2.className = 'heart';
  heart2.style.width = (r_size - 10) + 'px';
  heart2.style.height = (r_size - 10) + 'px';
  heart2.style.left = (r_left + r_num) + '%';
  heart2.style.background = 'rgba(255,' + (r_bg - 25) + ',' + (r_bg + 25) + ',1)';
  heart2.style.animation = 'love ' + (r_time + 5) + 's ease';

  document.querySelector('.bg_heart').appendChild(heart1);
  document.querySelector('.bg_heart').appendChild(heart2);

  document.querySelectorAll('.heart').forEach(function(heart) {
    var top = parseInt(heart.style.top.replace(/[^-\d\.]/g, ''));
    var width = parseInt(heart.style.width.replace(/[^-\d\.]/g, ''));
    if (top <= -100 || width >= 150) {
      heart.remove();
    }
  });
}, 500);
