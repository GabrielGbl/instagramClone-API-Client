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

   $('#publicar').click(function(){
      $('.postagem').css('display','block');
   });

   $('#cancelar').click(function(){
      $('.postagem').css('display','none');
   });

   $('#publicar_post').click(function(){
        const formData = new FormData();
        const imagem = document.getElementById('imagem_post').files[0];
        const texto = $('#texto_post').val();

        formData.append("imagem", imagem);
        formData.append("texto", texto);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                //let resposta = xhr.responseText;
                //$('.msg').html(resposta);
                window.location = "/home";
            }
        }

        xhr.open("POST","http://localhost:8080/api");
        xhr.send(formData);
   });

   $('#btn-cadastrar').click(function(){
       const formData = new FormData();
       const email = $('#email').val();
       const nome_completo = $('#nome-completo').val();
       const username_cadastro = $('#username-cadastro').val();
       const password_cadastro = $('#password-cadastro').val();

       formData.append("email", email);
       formData.append("nome_completo", nome_completo);
       formData.append("nome_usuario", username_cadastro);
       formData.append("senha_usuario", password_cadastro);

       let xhr = new XMLHttpRequest();
       
       xhr.onreadystatechange = function(){
           if(xhr.readyState == 4){
               window.location = "/home";
           }
       }

       xhr.open("POST", "http://localhost:8080/api/cadastro");
       xhr.send(formData);
   });
    
});






 


