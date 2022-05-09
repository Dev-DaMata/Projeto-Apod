    $(".video").hide()
    $('#btn').click(function () { //esse é a achão do botão 
        var data = $('#data').val(); // ele esta pegando a data que o usuario selecionou e add na api 
        $.ajax({ // o começo da api
            url: `https:api.nasa.gov/planetary/apod?api_key=ZrXw96z5JVLotfMMIt7IZYsjjwFgjEJzD2tLzhdg&date=${data}`, // add a url da api + a key(chave) &date = ${data}
            success: function (data) { //se a api der certo "success"  
                console.log(data);
                $(".titulo").text(data.title)
                $(".imagem").attr("src", data.url)
                $(".descri").text(data.explanation)
                if (data.media_type == 'video') {
                    $(".video").attr("src", data.url).show()
                    $(".imagem").hide()
                } else if (data.media_type == 'image') {
                    $(".imagem").attr("src", data.url).show()
                    $(".video").hide()
                }


            },
            error: function (erro) { // se a api der erro "error "
                alert('Deu erro, tente novamente  ') // aparece um alerta dizendo que deu erro 
            }
        })
    })



    function result(saida) { // função do result do html
        var imagem = $("#imagem") // pegando a imagem da api
        if (saida.midia_Type == 'image') { // se tiver uma imagem ela deve imprimir no html
            imagem.html(`<img class="img" src="${saida.url}"/> `) // ele esta pegando a imagem do api da nasa e jogando no meu html
        } else {
            imagem.html(`<iframe class="img" src="${saida.url}?autoplay=1&mute=1"></iframe>`)
        }
    }