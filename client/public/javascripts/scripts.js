$(document).ready(function(){

   $('#link-cadastro').click(function(){
       $('.form-login').css('display','none');
       $('.login-conta').css('display','none');
       $('.form-cadastro').css('display','block');
       $('.cadastro-conta').css('display','block');
   });

   $('#link-login').click(function(){
    $('.form-login').css('display','block');
    $('.login-conta').css('display','block');
    $('.form-cadastro').css('display','none');
    $('.cadastro-conta').css('display','none');
});
    
});






 


