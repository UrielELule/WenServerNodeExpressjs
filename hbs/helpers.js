const hbs = require('hbs'); 

//Helpers
hbs.registerHelper('date', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('mes', ()=>{
    return new Date().getMonth();
});

hbs.registerHelper('horas', ()=>{
    return new Date().getHours();
});

hbs.registerHelper('capitalizar',(texto)=> {
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});