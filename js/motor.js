const btnAceptar = document.querySelector("#btnAceptar");

// Función que devuelve una promesa
function makeRequest(method, url)
{
    
    // 1. Crear el objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // 2. Crear y devolver la promesa
    return new Promise(function(resolve, reject)
    {
        // 3. Abrir la conexión con el método y la url indicada
        xhr.open(method, url, true);

        // 5a. Escuchar el evento load, que se dispara cuando la petición termina
        xhr.onload = function()
        {
            // si el estado de la respuesta es 200
            if (xhr.status === 200)
                {
                    // Resolver la promesa con la respuesta como texto
                    resolve(xhr.responseText);
                } 
                // Si el estado de la respuesta no es 200
                else 
                {
                    // Rechazar la promesa con el estado de la respuesta como motivo
                    reject(xhr.status);
                }
        };

        // 5b. Escuchas el evento error
        xhr.onerror = function()
        {
            // Rechazar la promesa
            reject("Error de red");
        }

        // Enviar la petición
        xhr.send();

    });
};

// Función que devuelve una promesa

btnAceptar.addEventListener("click", function(){
        

        // Realizar la petición
        makeRequest('GET', 'servidor.php')

        .then(function(respuesta){
            // Si la promesa se resuelve, mostrar la respuesta en el div
            // console.log(respuesta);
            document.getElementById(d1.id).innerHTML = respuesta;
            console.log("Ok");
        })

        .catch(function(error){
            // Si la promesa se rechaza, mostrar el error por consola
            console.error(error);
            console.log("ERROR");
        });
      

});

