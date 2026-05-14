const inputTexto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

inputTexto.addEventListener('input',(event) => {
    const text = event.target.value;
    resultado.textContent = inputTexto.value;
    if (text.length > 20 ){
        resultado.style.background='red';
    }else{
        resultado.style.background='green';
    }
    
});