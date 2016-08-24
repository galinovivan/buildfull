$(document).ready(function() {
  var menu = {
      nav: $('#mobileMenu'),
      close: $('#menuCloseToggle'),
      open: $('#nav_toggle'),
      newClass: 'active',
      menuInit: function() {
          if (this.nav.hasClass(this.newClass)) {
              this.nav.removeClass(this.newClass);
          } else {
              this.nav.addClass(this.newClass);
          }
      }
  };
    menu.open.click(function(event) {
      menu.menuInit();
        event.preventDefault();
    });
    menu.close.click(function(event) {
        menu.menuInit();
        event.preventDefault();
    })
});

