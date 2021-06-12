window.addEventListener('load', function(){

    let urlArtist=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`
    async function RealizarPeticion(url,mensajeError){
        try {
          let response=await fetch(url)
          let respuesta=await response.json()
          return respuesta
        } catch (error) {
            console.log(`Ocurrio un error en ${mensajeError}, ${error}`);
        }
      }

    function leerQueryString(){
        //obtiene la queryString Completa
        const querystring = window.location.search
        console.log(querystring);
        //convierte la query string en objeto
        const params = new URLSearchParams(querystring)
        console.log(params);
        let id=params.get('Id')
        return id
    }

   async function BuscarArtista(){
       let respuesta=await RealizarPeticion(`${urlArtist}${leerQueryString()}`,'DetailArtist')
       let titulo=document.createElement('h2');
       let imagenArista=document.createElement('img');
       imagenArista.src=respuesta.picture_medium
       document.querySelector('main').appendChild(titulo)
       document.querySelector('main').appendChild(imagenArista)
   }
   BuscarArtista()

    
})