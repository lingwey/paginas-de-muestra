const $calcularTiempo = document.querySelector('#calcular');
$calcularTiempo.onclick = function (){
    const  segundos1 = Number(document.querySelector('#segundos').value);
    const  segundos2 = Number(document.querySelector('#segundos-dos').value);
    const  segundos3 = Number(document.querySelector('#segundos-tres').value);
    const  segundos4 = Number(document.querySelector('#segundos-cuatro').value);
    const  segundos5 = Number(document.querySelector('#segundos-cinco').value);

    const  minutos1 = Number(document.querySelector('#minutos').value);
    const  minutos2 = Number(document.querySelector('#minutos-dos').value);
    const  minutos3 = Number(document.querySelector('#minutos-tres').value);
    const  minutos4 = Number(document.querySelector('#minutos-cuatro').value);
    const minutos5 = Number(document.querySelector('#minutos-cinco').value);

    const horas1 = Number(document.querySelector('#horas').value);
    const horas2 = Number(document.querySelector('#horas-dos').value);
    const horas3 = Number(document.querySelector('#horas-tres').value);
    const horas4 = Number(document.querySelector('#horas-cuatro').value);
    const horas5 = Number(document.querySelector('#horas-cinco').value);

    let segundosTotales = segundos1 + segundos2 + segundos3 + segundos4 + segundos5;
    let minutosTotales = minutos1 + minutos2 + minutos3 + minutos4 + minutos5;
    let horasTotales = horas1 + horas2 + horas3 + horas4 + horas5;


    while (segundosTotales > 60){
        minutosTotales += 1;
        segundosTotales -= 60;

    }

    while (minutosTotales > 60){
        horasTotales +=1;
        minutosTotales -= 60;
    }

    console.log ("hora total: " + horasTotales)
    console.log ("minutos totales: " + minutosTotales)
    console.log ("segundos totales: " + segundosTotales)

    const principal = document.querySelector('body');
    const seccion = document.createElement('div');
    const parrafoTiempo = document.createElement('p')
    const mostrarTiempo = document.createTextNode (`el tiempo total es de ${horasTotales}:${minutosTotales}:${segundosTotales}`)

    parrafoTiempo.appendChild(mostrarTiempo);
    seccion.appendChild(parrafoTiempo);
    principal.appendChild(seccion);


    return false
}
