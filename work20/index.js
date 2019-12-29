$('#fold>ul>li:first').find('.wrap').css({
    dispiay: 'block'
});
$('#fold>ul>li').click(function(){
    $(this).siblings('li').find('.wrap').css({
        display: 'none'
    });
    $(this).find('.wrap').css({
        display: 'block'
    });
});