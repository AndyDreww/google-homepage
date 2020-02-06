var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var arrow = this.querySelector('i');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      arrow.classList.remove('la-angle-up');
      arrow.classList.add('la-angle-down');
      panel.style.border = 'none';      
      this.style.borderBottom = '1px solid rgb(223, 225, 229)';
      panel.style.paddingBottom = '0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 10 + "px";
      arrow.classList.remove('la-angle-down');
      arrow.classList.add('la-angle-up');
      panel.style.border = '1px solid rgb(223, 225, 229)';
      this.style.borderBottom = 'none';
      panel.style.borderTop = 'none';
      panel.style.paddingBottom = '40px';
    } 
  });
}