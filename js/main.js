// Sticky Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
      
    } else {
        $(".top-nav").removeClass("light-header");

    }

     if (scroll >= 170) {
          $("#cart-sidebar").addClass("sticky");
    } else {

        $("#cart-sidebar").removeClass("sticky");
    }
});



// Below code for Popup sign box
$(function() {
    
        $('#login-form-link').click(function(e) {
    		$("#login-form").delay(100).fadeIn(100);
     		$("#register-form").fadeOut(100);
    		$('#register-form-link').removeClass('active');
    		$(this).addClass('active');
    		e.preventDefault();
    	});
    	$('#register-form-link').click(function(e) {
    		$("#register-form").delay(100).fadeIn(100);
     		$("#login-form").fadeOut(100);
    		$('#login-form-link').removeClass('active');
    		$(this).addClass('active');
    		e.preventDefault();
    	});

});


// Below code for add qunatity
 $(document).ready(function(){
        var quantity = 1;

        $('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            $('#quantity').val(quantity + 1);
        });

        $('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            if(quantity > 1){
                $('#quantity').val(quantity - 1);
            }
        });

    });


$(document).ready(function(){
    $(".cat_2,.cat_3").hide();

    $(".catt_1").click(function(){
        $(".cat_1").slideDown();
        $(".cat_2,.cat_3").slideUp();

    })
    $(".catt_2").click(function(){
        $(".cat_2").slideDown();
        $(".cat_1,.cat_3").slideUp();

    })
    $(".catt_3").click(function(){
        $(".cat_3").slideDown();
        $(".cat_1,.cat_2").slideUp();

    })
})


function pageRedirect() {
      window.location.href = "product.html";
    }    