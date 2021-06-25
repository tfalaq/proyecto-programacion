window.addEventListener('load', function () {

   //obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id genero
var generoId = objetoQuery.get('id');


//con la propiedad fetch(promesa), traigo el endpoint, la info de los generos y sus id
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+ generoId)
 //then = una vez que me llegue, convierto la info 
 //que estaba en string a formato json
.then(function(response){
    return response.json()
})
.then(function(data){

     // imprimo en consola los datos que contiene el genero

    console.log(data);


         // una vez que hago esto en la consola se ven todos los datos traidos por la API
         // donde posteriormente vamos a usarlos en el innerHTML

let subtitulo = document.querySelector(".Subtitle")

        //declaro la variable seleccionando en el documento el subtitulo

   subtitulo.innerHTML=`
   ${data.name}
   `

   // a este le agrego el nombre del genero perteneciente

   // si hay un error, lo imprime en consola
    
}).catch(function(error){
    console.error(error)
})


//luego hago otro fetch(promesa), traigo el url de deezer,
//la info de los generos sumado a los artistas


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+generoId+"/artists")

//una vez que me llegue el callback de la API,
//convierto toda la info que nos trae deezer de string a formato json

.then(function(response){
    return response.json()
})
.then(function(data){

    console.log(data);

     // una vez que hago esto en la consola se ven todos los datos traidos por la API
     // donde posteriormente vamos a usarlos en el innerHTML
    
  //aca pongo los datos que quiero cambiar

    let artistaGenero = data.data
    
    let contenedorArtistas = document.querySelector(".MainContent")

    //declaro las variables y selecciono en el documento el MainContent
    

    // usamos el bucle for con el inicio en =0, la condicion <10
    // y el modificsdor incrementa el bucle a medida que pasa
    // si el i< 10 es verdadero, va atraernos 10 artistas con su imagen,
    // su nombre, el tipo y su ID. El bucle termina ahi, ya que no llega a dar
    // otra vuelta mas porque es falso ya que i<10
    
   for (let i = 0; i < 10 ; i++) {
       const artista = artistaGenero[i];
      
       contenedorArtistas.innerHTML += `<article class="card">
        <div class="avatar" style="background-image: url(${artista.picture_big})"></div>
        <div class="informacion">
          <h1>${artista.name}</h1>
          
          <h3 id=infosingle>
            Type:${artista.type} </h3>
         
            
            </div>
            <a class="btn" href="detail-artist.html?id=${artista.id}"> Ver Más</a>
        
        </article> `
       
       
       
   }
    // si hay un error, lo imprime en consola :)
}).catch(function(error){
    console.error(error)
})
})