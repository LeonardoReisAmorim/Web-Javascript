document.getElementById('btnexecutar').addEventListener('click', function(event){
    alert('dados enviados com sucesso');
    let altura = parseFloat(document.getElementById('txtalt').value);
    let peso = parseFloat(document.getElementById('txtpeso').value);
    let imc = calcimc(altura,peso);
    let timc = tipoimc(imc);

    event.preventDefault();

    document.getElementById('txtimc').innerHTML = imc.toFixed(2);
    document.getElementById('txttipo').innerHTML = timc;
})


function calcimc(a,b){
    let conta = 0;
    conta = b/(a*a);
    return conta;
}


function tipoimc(x){
    if(x>=0 && x<16){
        return "Magreza grave";
    } else if(x>=16 && x<17){
        return "Magreza Moderada";
    } else if(x>=17 && x<18.5){
        return "Magreza Leve"
    } else if(x>=18.5 && x<25){
        return "Saudável"
    } else if(x>=25 && x<30){
        return "Sobrepeso";
    } else if(x>=30 && x<35){
        return "Obesidade Grau I"
    } else if(x>=35 && x<40){
        return "Obesidade Grau II (severa)";
    } else if(x>=40){
        return "Obesidade Grau III (mórbida)"
    }
}

