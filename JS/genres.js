window.addEventListener('load', function(){


    window.addEventListener('load', function () {

        function buscarGeneros() {
            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre?")
                .then(response => response.json())
                .then(result => {
                   
                    for (res in result.data) {
                        console.log(result.data[res].id);
                        document.querySelector('.MainContentGenre').innerHTML += `
                        <article class="card">
                            <div class="informacion details">
                            <h1>${result.data[res].name}</h1>
                            <a href="./detail-genres.html?Id=${result.data[res].id}"   class="btn">ver mas</a>
                            <img  src="${result.data[res].picture}">
                            </div>
                      </article>
                    
                    }
    
                   
    
                })
                .catch(error => console.log('error', error));
        }
    
    
    
        buscarGeneros()
    
    
})