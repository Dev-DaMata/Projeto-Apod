    $(".video").hide() // ele esconde o  tag de video (.hide)
    $('#btn').click(function () { //esse é a achão do botão 
        var data = $('#data').val(); // ele esta pegando a data que o usuario selecionou e add na api 
        console.log(data);
        $.ajax({ // o começo da api
            url: `https:api.nasa.gov/planetary/apod?api_key=ZrXw96z5JVLotfMMIt7IZYsjjwFgjEJzD2tLzhdg&date=${data}`, // add a url da api + a key(chave) &date = ${data}
            success: function (data) { //se a api der certo "success"  
                console.log(data);
                $(".titulo").text(data.title)//estou chamando o id do titulo, .text significa texto
                $(".imagem").attr("src", data.url)//estou chamando o id da img, attr(significa atributo)
                $(".descri").text(data.explanation)//estou chamando o id do descri, text significa texto
                if (data.media_type == 'video') { //se o media_type for video
                    $(".video").attr("src", data.url).show()// vai aparecer a tag de video(.show())
                    $(".imagem").hide()//e esconde a tag (.hide())
                } else if (data.media_type == 'image') { // se o media_type for imagem
                    $(".imagem").attr("src", data.url).show()// vai aparecer a tag de imagem(.show())
                    $(".video").hide()//e esconde a tag (.hide())
                }


            },
            error: function (erro) { // se a api der erro "error "
                console.error(erro)
                alert('Deu erro, tente novamente  ') // aparece um alerta dizendo que deu erro 
            }
        })
    })



    function result(saida) { // função do result do html
        var imagem = $("#imagem") // pegando a imagem da api
        if (saida.midia_Type == 'image') { // se tiver uma imagem ela deve imprimir no html
            imagem.html(`<img class="img" src="${saida.url}"/> `) // ele esta pegando a imagem do api da nasa e jogando no meu html
        } else {
            imagem.html(`<iframe class="img" src="${saida.url}?autoplay=1&mute=1"></iframe>`)//se não for ele da um auto play 
        }
    }