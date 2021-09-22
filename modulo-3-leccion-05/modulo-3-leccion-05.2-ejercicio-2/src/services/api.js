// Fichero src/services/api.js
const callToApi = (searchName) => {
    // Llamamos al API
    return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
      .then(response => response.json())
      .then(data => {
        // Cuando responde el API podemos limpiar los datos aquí
        //USANDO MAP PARA LIMPIAR LOS DATOS:
        // let cleanData = data.map( (showInfo) => {
        //     return {
        //         name: showInfo.show.name,
        //         id: showInfo.show.id,
        //         image: showInfo.show.image
        //     }
        // })
        // return cleanData;
        //USANDO UN FOR PARA LIMPIAR LOS DATOS:
        let result = [];
        for (let i = 0; i < data.length; i++) {
            result[i]=data[i].show;           
        }
        console.log(result);       
        console.log(result.image); 
        return result;
        
      });
  };
  
  export default callToApi;