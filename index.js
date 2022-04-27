const express = require("express");
const app = express();

//criando a rota inicial
app.get("/", function(req, res){
    res.send("Bem vindo ao meu site!");
});

app.get("/produtos", function(req, res){
    res.send("Aqui é a página de produtos...");
});

app.get("/carrinho", function(req, res){
    res.send("Aqui é a página do carrinho...");
});

app.get("/teste", function(req, res){
    res.send("<h1>Mudança drástica</h1>");
});

app.get("/termometro/:temperatura", function(req, res){
    var temp = req.params.temperatura;
    var mensage;

    if(temp <= 34){
        mensage = "<span style='color: blue'>Temperatura abaixo do normal. Procure um médico!</span>";
    }else if(temp >= 34.1 && temp <= 36.9){
        mensage = "<span style='color: green'>Sua temperatura está Normal</span>";
    }else if(temp >= 37){
        mensage = "<span style='color: red'>Vc está com febre</span>"
    }

    res.send("<b>Retorno da consulta: </b>" + mensage);
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Erro ao iniciar.");
    }else{
        console.log("Servidor iniciado.");
    }
});