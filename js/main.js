$(function(){

    let showPopup = function(){
        $('.popup-container').css('display', 'flex');
    };

    let clearForm = function(){
        $('.popup-container > input[type="text"]').val('');
    };

    $('.order-call').on('click', function(){
        showPopup();
    });

    $('.close').on('click', function(){
        clearForm();
        closePopup();
    });
});