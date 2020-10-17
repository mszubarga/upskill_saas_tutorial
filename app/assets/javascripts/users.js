/* global $, Stripe */
// document ready
$(document).on('turbolinks:load', function(){
    var theForm = $('#pro_form');
    var submitBtn = $('#form-submit-btn');
    
    // set stripe public key
    Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content'));
    
    // when user clicks form submit btn
    submitBtn.click(function(event){
        // prevent default submission behaviour
        event.preventDefault();
        
        // collect credit card fields 
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        // send the card information to stripe
        Stripe.createToken({
            number: ccNum,
            cvc: cvcNum,
            exp_month: expMonth,
            exp_year: expYear
        }, stripeResponseHandler);
        
    });
    
    

    // stripe will return a card token
    // inject card token as hidden field into form.
    // submit form to our rails app
});
