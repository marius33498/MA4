

  fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
         // we’ll write this function next
            loopThroughResults(json);
        })
        .catch(function(error) {
            console.log(error);
        });


  


    // i need help to set up a to do list
   
    

