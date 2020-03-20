$(function(){
    $('#left, .divTableCell').sortable({
    connectWith: ('#left, .divTableCell'),
})
})

$('#button1').click(function(){
    $('.help_Image').css('display','block')
    $('#button1').css('display','none')
    $('#button2').css('display','block')
})


$('#button2').click(function(){
    $('.help_Image').css('display','none')
    $('#button1').css('display','block')
    $('#button2').css('display','none')
})

