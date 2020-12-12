const http = require('http');

http.createServer((resq, res) =>{

    res.writeHead(200, {'content-Type':'application/json'});

    let salida = {
        nombre: 'URIEL',
        edad: 26,
        grupo: 'vencedor', 
        url: resq.url
    }
    res.write(JSON.stringify(salida));
    //res.write('hola mundo');
    res.end();
}).listen(8080);

console.log('Escuechando el puerto 8080');