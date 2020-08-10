document.querySelector('.form').addEventListener('submit', function(event){
    let n1 =  parseFloat(document.querySelector('#txtv1').value);
    let n2 =  parseFloat(document.querySelector("#txtv2").value);
    let op =  parseInt(document.querySelector("#txtop").value);
    let cal = 0;
    let resultado = document.querySelector("#resultado");
    //cancela o submit
    event.preventDefault();

    if(op===1){
        cal = n1+n2;

    } else if(op===2){
        cal = n1-n2;

    } else if(op===3){
        cal = n1*n2;

    } else if(op===4){
        cal = n1/n2;
    }

    resultado.innerHTML = "<strong>Resposta: "+cal+"</strong>";
});

