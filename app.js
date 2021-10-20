// requerimos express
const express = require ('express');
// requerir funcionalidad path para correlacionar las rutas
const path = require ('path')
//creamos variable que reuna las funcionalidades de express
const app = express ();
//Levantamos servidor
app.listen(3030, () =>
    console.log('Servidor corriendo'));
//definimos las rutas para que el servidor de response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/Registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
//Dejamos la carpeta public para que la app pueda tomar sus propiedades
app.use(express.static('public'));

app.listen(process.env.PORT || 3030, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});

