window.addEventListener('load', function () {

    function leerQueryString() {
        //obtiene la queryString Completa
        const querystring = window.location.search
        //convierte la query string en objeto
        const params = new URLSearchParams(querystring)
        let id = params.get('Id')
        return id
    }

    function cargarArtistas() {

        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${leerQueryString()}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.name);
                document.querySelector('.fa-crown').innerHTML = res.name
                fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${leerQueryString()}/artists`)
                    .then(response => response.json())
                    .then(result => {

                        for (res in result.data) {
                            document.querySelector('.MainContent').innerHTML += `
                            
                            <article class="card">
                              <div class="informacion details">
                                <h1>${result.data[res].name}</h1>
                                <a href="./detail-artist.html?id=${result.data[res].id}"   class="btn">ver mas</a>
                                <img src="${result.data[res].picture}">
                              </div>
                            </article>
                        
                            `
                        }



                    })
            })

            .catch(error => console.log('error', error));
    }

    cargarArtistas()

})