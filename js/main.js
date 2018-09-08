

//Navbar from solid to transparent transition
$(document).ready(function() {
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class depending on position
    if($(this).scrollTop() > 500) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });

  let currentTestimonial = 0;

  $('.actions button.back').click(()=>{

            const before = $('.carousel-wrapper .testimonial.active').prev();
            const current = $('.carousel-wrapper .testimonial.active');

            if(before.length === 0){
                $('.carousel-wrapper .testimonial').last().addClass('active')
             }else{
                 before.addClass('active')
             }

            current.removeClass('active')
  })

  $('.actions button.next').click(()=>{

    const next = $('.carousel-wrapper .testimonial.active + .testimonial');
    const current = $('.carousel-wrapper .testimonial.active');

    if(next.length === 0){
       $('.carousel-wrapper .testimonial').first().addClass('active')
    }else{
        next.addClass('active')
    }
    
    current.removeClass('active')


})


});


function caroselActions(action){





}