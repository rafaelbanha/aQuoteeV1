$(document).ready(function(){


    $('.nav-item a').click(function(link){

        link.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop:$(target).offset().top - 150
        },500);


    });


    

    $(".contact-form" ).submit(function(event) {
        
        // Stop form from submitting normally
        event.preventDefault();
        
        // Serialize submitted form data and get action
        var $form = $(this),
        url = $form.attr("action");
        
        // Send the data using post
        var posting = $.post(url, $form.serialize());
        
        // Put the results in a div
        posting.done(function(data) {
            // Parse response
            var response = $.parseJSON(data),
                target = $('#status-messages');
            
            // Add error/success classes
            if (response.status == 1) {
                target.removeClass('error');
                target.addClass('success');
            } else if (response.status == 0) {
                target.removeClass('success');
                target.addClass('error');
            }
            
            // Append message
            target.empty().append(response.message).hide().fadeIn(400);
        });
    });






});
