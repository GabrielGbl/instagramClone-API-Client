$(document).ready(function(){

    
   //BOTÃO PARA MUDAR DE FORM DO LOGIN PARA O CADASTRO 
   $('#link-cadastro').click(function(){
       $('.form-login').css('display','none');
       $('.login-conta').css('display','none');
       $('.form-cadastro').css('display','block');
       $('.cadastro-conta').css('display','block');
   });
   //BOTÃO PARA MUDAR DE FORM DO CADASTRO PARA O LOGIN
   $('#link-login').click(function(){
      $('.form-login').css('display','block');
      $('.login-conta').css('display','block');
      $('.form-cadastro').css('display','none');
      $('.cadastro-conta').css('display','none');
   });

   //SCRIPT PARA MOSTRAR O FORM DE POSTAGEM
   $('#publicar').click(function(){
      $('.postagem').css('display','block');
      $('#container-timeline').css('display','none');
   });

   //SCRIPT PARA ESCONDER O FORM DE POSTAGEM
   $('#cancelar').click(function(){
      $('.postagem').css('display','none');
      $('#  container-timeline').css('display','block');
   });

   //CONSUMINDO A API E INSERINDO O POST
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

   //CONSUMINDO A API E INSERINDO USUÁRIOS
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

   //CONSUMINDO API E EXIBINDO POSTAGEM NA TIMELINE
   function carregarPostagens(){
       let xhr = new XMLHttpRequest();
       xhr.open("GET", "http://localhost:8080/api");      

       xhr.onload = function(){
          if(xhr.status === 200){
            $('#container-timeline').css('display','block');
            let data = $.parseJSON(xhr.responseText);

            data.forEach(function(data){
                $('#container-timeline').append(
                    '<div class="post-timeline">' +
                        '<div class="user"><p>gabriell__augusto</p></div>' +
                        '<div class="conteudo">' +
                        '<img src="http://localhost:8080/imagens/' + data.imagem +'" />'+
                        '</div><div class="texto"><p>'
                            + data.texto +
                        '</p></div>' +
                        '<div class="comentarios" id="comentarios_'+data._id +'"> ' + 
                                '<div class="input-group">' +
                                '<input type="text" id="post_'+data._id+'" class="form-control" id="comentar" placeholder="Adicione um comentário...">' +
                                '<span class="input-group-btn">' +
                                '<button class="btn btn-comentar" value="'+ data._id +'"  type="button"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button></span></div>' +
                        '</div>' +
                    '</div>'
                );

                if(data.comentarios != undefined){
                    let comentarios = data.comentarios;
                    comentarios.forEach(function(comentario){
                        $('#comentarios_'+data._id).append(
                            '<div class="comentario">' +
                            '<p> usuário </p> ' + comentario.comentario +
                            '</div>'
                        );
                    });
                }
            });
            
            $('.btn-comentar').click(function(){
                let id = this.value;
                let id_input_comentario = 'post_' + id;
                let comentario = $('#'+id_input_comentario).val();
                
                let xhr = new XMLHttpRequest();
                xhr.open('PUT', 'http://localhost:8080/api/'+id);
                xhr.setRequestHeader('Content-Type', 'application/json');

                xhr.onload = function(){
                    if(xhr.status === 200){
                        window.location.href = '/home';
                    }
                }
                xhr.send(JSON.stringify({comentario : comentario}));                   
            });
          }
       }
       xhr.send();
   }

   carregarPostagens();
  

});








 


