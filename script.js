// Slider arrows scroll the track by one item
document.querySelectorAll('[data-slider]').forEach(function (slider) {
  var track = slider.querySelector('[data-track]');
  function step() {
    var item = track.firstElementChild;
    return item ? item.getBoundingClientRect().width + 32 : track.clientWidth;
  }
  slider.querySelector('[data-prev]').addEventListener('click', function () {
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  slider.querySelector('[data-next]').addEventListener('click', function () {
    track.scrollBy({ left: step(), behavior: 'smooth' });
  });
});

// Video lightbox: play button starts it, clicking the video pauses it
document.querySelectorAll('[data-video]').forEach(function (box) {
  var video = box.querySelector('video');
  var play = box.querySelector('.lightbox__play');
  play.addEventListener('click', function () { video.play(); });
  video.addEventListener('click', function () { video.pause(); });
  video.addEventListener('play', function () { box.classList.add('is-playing'); });
  video.addEventListener('pause', function () { box.classList.remove('is-playing'); });
});

// Tabs: buttons with data-tab show the matching data-panel inside the same [data-tabs]
document.querySelectorAll('[data-tabs]').forEach(function (group) {
  var buttons = group.querySelectorAll('[data-tab]');
  var panels = group.querySelectorAll('[data-panel]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-tab');
      buttons.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== id; });
    });
  });
});
