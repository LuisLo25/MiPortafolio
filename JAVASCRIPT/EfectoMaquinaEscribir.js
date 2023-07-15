const maquina=document.getElementById('Texto')
const maquinaEscribir=(text='',tiempo=200,etiqueta='')=>{
    let arrayCaracteres=text.split('')
    etiqueta.innerHTML=''
    let cont=0
    let escribir=setInterval(function(){
        etiqueta.innerHTML+=arrayCaracteres[cont]
        cont++
        if(cont===arrayCaracteres.length)
        {
            cont=0
            etiqueta.innerHTML=''
        }
    },tiempo)
}
const maquinaEscribir2=(text='',tiempo=200,etiqueta='')=>{
    let arrayCaracteres=text.split('')
    etiqueta.innerHTML=''
    let cont=0
    let escribir=setInterval(function(){
        etiqueta.innerHTML+=arrayCaracteres[cont]
        cont++
        if(cont===arrayCaracteres.length)
        {
            clearInterval(escribir)
        }
    },tiempo)
}
maquinaEscribir("Desarrollador Junior Front-End ",300,maquina)
