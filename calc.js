const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-Opera');
const botonIgual = document.getElementsByName('data-Igual')[0];
const botonDelete = document.getElementsByName('data-Delete')[0];
var result = document.getElementById('result');
var OpeActual = '';
var OpeAnterior = '';
var Operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
       agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})

botonDelete.addEventListener('click', function(){
    clearInterval();
    actualizarDisplay();
})

function selectOperacion(op){
    if(OpeActual === '') return;
    if(OpeAnterior === ''){
        calcular()
    }
    Operacion = op.toString();
    OpeAnterior = OpeActual;
    OpeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(OpeAnterior);
    const actual = parseFloat(OpeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(Operacion){
        case '+':
            calculo = anterior + actual; 
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    OpeActual = calculo;
    Operacion = undefined;
    OpeAnterior = '';
}

function agregarNumero(num){
    OpeActual = OpeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    OpeActual = '';
    OpeAnterior = '';
    Operacion = undefined;
}

function actualizarDisplay(){
    result.vaulue = OpeActual;
}

clear();

