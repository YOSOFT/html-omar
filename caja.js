
window.onload = function() {
    var contenedor = document.getElementById('contenedor');
    var texto = document.getElementById('texto');
    var boton =  document.getElementById('boton');
    var color = document.getElementById('color');
    boton.addEventListener('click', function(){
        console.log("Se hizo click");
        var caja = document.createElement('div');
        caja.innerText= texto.value;
        caja.classList.add('caja');
        caja.style.backgroundColor=color.value;
        contenedor.appendChild(caja);
    })
}
