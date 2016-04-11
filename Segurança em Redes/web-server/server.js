//Importando módulo http
var http = require('http');

//Lista de códigos de status.
//console.log(http.STATUS_CODES);

//Constante da porta
const PORT = 8080;

function pedido(request, response){
	response.end("Funcionou: "+request.url);
}

//Criando servidor
var server = http.createServer(pedido);

//Iniciando servidor
server.listen(PORT, function(){
	console.log("Server rodando em %s.",PORT);
});