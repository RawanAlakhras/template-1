$(document).ready(function(){
//add active class to navbar
$( '.navbar' ).find( 'li.active' ) 
.removeClass( 'active' ); 
var url = window.location;
   $('.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
   $('.navbar-nav a').filter(function() {
        return this.href == url;
   }).parent().addClass('active').siblings().removeClass('active');
//end
$('.carousel').carousel({
    interval: 3000
  })
  

  
});
