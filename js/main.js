$(function(){

    let showPopup = function(){
        $('.popup-container').css('display', 'flex');
    };

    $('.order-call').on('click', function(){
        showPopup();
    });

    $('.close').on('click', function(){
        clearForm();
        closePopup();
    });
});