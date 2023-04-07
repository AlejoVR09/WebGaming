// Importamos Express desde la carpeta node_modules
const express = require('express');
const cors = require('cors')
// Creamos la aplicación de Express
const app = express();
app.use(cors())
app.use(express.json())

// Escojemos un puerto por el que el servidor web escuchará
const port = 3000;

// Página para visualizar el mensaje "¡Hola Express!"
// app.get('/', (req, res) => {
//   res.send('¡Hola Express!');
// });

app.get('/datos', (req, res) => {
    const datos = '12345';
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(datos);
});

let jugadores=[];



class Jugador{
  constructor(id){
      this.id = id;
  }

  asignarMokepon(mokepon){
    this.mokepon=mokepon;
  }

  cambiarPosicion(x,y){
    this.x=x;
    this.y=y;
  }

}

class Mokepon{
  constructor(nombre){
    this.nombre=nombre;
  }
}

app.get('/unirse',(req,res)=>{
    let id=`${Math.random()}`;
    let jugador=new Jugador(id);
    
    jugadores.push(jugador);
    // res.setHeader('Access-Control-Allow-Origin','*');
    res.send(id);
})

app.post('/mokepon/:jugadorid',(req, res) =>{
  const jugadorid= req.params.jugadorid || "";
  const nombreMokepon = req.body.mokepon || "";
  const mokepon = new Mokepon(nombreMokepon);
  const index= jugadores.findIndex((jugador) => jugadorid === jugador.id)
  if (index>=0) {
    jugadores[index].asignarMokepon(mokepon);
  }
  res.end()
})

app.post('/mokepon/:jugadorid/posicion', (req,res) => {
  const jugadorid = req.params.jugadorid;
  const x=req.body.x;
  const y=req.body.y;
  const index= jugadores.findIndex((jugador) => jugadorid === jugador.id)
  if (index>=0) {
    jugadores[index].cambiarPosicion(x,y)
  }

  const enemigos =jugadores.filter((jugador) => jugador.id !== jugadorid);
  res.send({
    enemigos
  });
})




// Activamos el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`¡Servidor listo!`);
});