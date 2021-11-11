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
       //creo un div que agrupa el P y el boton. 
       let newdiv = document.createElement('div');
       newdiv.id = 'capa'+i;
       newdiv.style.display='flex';
       newdiv.style.flexDirection='row';
    
       //nuevo P + textos
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

       //añado boton
       let newbtn = document.createElement('button');
       newbtn.id = 'boton'+i;
       textbtn=document.createTextNode('X');
       newbtn.appendChild(textbtn)

       //añado al html
       document.getElementById('contenedor').appendChild(newdiv)
       document.getElementById('capa'+i).appendChild(newp)
       document.getElementById('capa'+i).appendChild(newbtn)

       
       //listeners
       document.getElementById("boton"+i).addEventListener("click",function(event){this.parentNode.remove();})

       i=i+1;
      
    })

};
document.querySelector("button").addEventListener("click",function(event){conApi(document.querySelector("input").value)} );
