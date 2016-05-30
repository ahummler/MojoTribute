// window.alert("sometext");

// if (typeof jQuery != 'undefined') {

//     alert("jQuery library is loaded!");

// }else{

//     alert("jQuery library is not found!");

// }
$(window).load(function() {
   $('div').each(function(i) {
      $(this).delay((i + 1) * 1250).fadeIn(12000);
   });
});

// $(document).ready(function () {
//     $('div').fadeIn(10000).removeClass('mojo');
// });


// $(document).ready(function() {
//     $('div').fadeOut(1);
//     $('div').removeClass('hidden');
//     $('div').fadeIn(1000);
// });

// $(function() {
// $('#test').fadeOut(100, function() {
//     $(this).text('Bunny').fadeIn(100);
// });
//  $('#test').fadeOut(100, function() {
//     $(this).text('Turtle').fadeIn(100);
// });
