var horas = 0
var sec = 0
var min = 0
var interval 

function twoDigits(digit){
    if(digit < 10){
        return ('0'+ digit)
    }else {
        return (digit)
    }
}



function start () {
    cronometro()
  interval = setInterval(cronometro, 1)

}



function pause() {
    clearInterval(interval)
}

function stop() {
 clearInterval(interval)
 sec=0
 min=0
 document.getElementById("relogio").innerHTML = '00:00:00'
}


function cronometro (){
    sec++
    if(sec==60){
        min++
        sec==0
        if(min==60)
        min==0
        horas++
    }
    document.getElementById("relogio").innerText=horas+':'+min+':'+sec+
}