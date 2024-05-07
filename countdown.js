var daysEl = document.getElementById('days');

function daysLeft(){
  var eidDate = new Date('16 june,2024');
  var now = new Date();
  var diff = eidDate - now;
  var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  daysEl.textContent = days;
};

daysLeft();