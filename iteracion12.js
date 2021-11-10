const baseUrl = 'https://api.nationalize.io';

function conApi(param){
    fetch(baseUrl+'/?name='+param)
    .then((response) => {
        return response.json()
    })
    .then((datajson)=> {
       console.log(datajson); 
    })

};
document.querySelector("button").addEventListener("click",function(event){conApi(document.querySelector("input").value)} );
