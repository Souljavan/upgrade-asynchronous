const baseUrl = 'https://api.nationalize.io';

function redondea(param){
    return param.toFixed(2)
}

let i=1;
function conApi(param){
    fetch(baseUrl+'/?name='+param)
    .then((response) => {
        return response.json()
    })
    .then((datajson)=> {
       console.log(datajson); 
       let newp = document.createElement('p');
       newp.id='p'+i;
       newp.textContent="El nombre "+datajson.name;
       for (let y=0;y<datajson.country.length;y++){
        if (y==0){
            newp.textContent=newp.textContent+" tiene un "+redondea(datajson.country[y].probability*100)+"% de ser de "+datajson.country[y].country_id;
        }else{
            newp.textContent=newp.textContent+" y un "+redondea(datajson.country[y].probability*100)+"% de ser de "+datajson.country[y].country_id;
        }
       }
       i=i+1;
       document.body.appendChild(newp)
       
    })

};
document.querySelector("button").addEventListener("click",function(event){conApi(document.querySelector("input").value)} );
