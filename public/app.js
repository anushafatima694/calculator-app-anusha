function getValue(num){
    var inp = document.getElementById('input')
    inp.value += num
}



function  calculateValue(){
    var  inp  = document.getElementById('input')
    var get = inp.value
    var calc = eval(get)
    inp.value = calc
}



function clearValue(){
    var  inp  = document.getElementById('input')
    inp.value = ''
}