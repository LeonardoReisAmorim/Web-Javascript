document.querySelector('#btnexecutar').addEventListener('click', function(){
    let notas = [];
    let soma = 0;
    let media = 0;
    let erro = 0;
    notas.push(parseFloat(document.getElementById('txtaluno1').value));
    notas.push(parseFloat(document.getElementById('txtaluno2').value));
    notas.push(parseFloat(document.getElementById('txtaluno3').value));
    for(let i in notas){
        if(notas[i]>10){
            erro = 1;
        }else{
            soma += notas[i];
        }
    }
    if(erro){
        alert("dados invalidos, insira a nota menor que 10");
    }else{
        media = soma/notas.length;
        document.querySelector('#a1').innerHTML = notas[0];
        document.querySelector('#a2').innerHTML = notas[1];
        document.querySelector('#a3').innerHTML = notas[2];
        let situ = situaluno(media);
        document.querySelector('#situacao').innerHTML = situ + " sua media e: "+media.toFixed(1);
    }
});

function situaluno(x){
    if(x>=0 && x<7) return "reprovado";
    if(x>=7 && x<=9.9) return "aprovado";
    if(x===10) return "parabens";
}

