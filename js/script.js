let btnCheck = document.querySelector('.check-select')
btnCheck.addEventListener('click', function(){
    let choose = document.querySelector('#choose-model')
    if(choose.value == 1) {
        document.querySelector('.area-percent1').style.display = 'block'
        document.querySelector('.area-percent2').style.display = "none"
        document.querySelector('.area-percent3').style.display = "none"
    } else if (choose.value == 2) {
        document.querySelector('.area-percent1').style.display = "none"
        document.querySelector('.area-percent2').style.display = "block"
    }
})

let buttonCalc = document.querySelector('.btn-calc')
let buttonClear = document.querySelector('.btn-clear')

buttonCalc.addEventListener('click', function(){
    let n1 = document.querySelector('#percent')
    let n2 = document.querySelector('#value-percent')
    let percent = Number(n1.value)
    let valuePercent = Number(n2.value)
    let $calc = (percent / 100) * valuePercent
    let result = document.querySelector('.result').innerHTML = $calc.toFixed(2)
})

buttonClear.addEventListener('click', function(){
    let result = document.querySelector('.result').innerHTML = "--"
    let clearPercent = document.querySelector('#percent').value = ""
    let clearValuePercent = document.querySelector('#value-percent').value = ""
})

//AREA 2
let buttonCalc2 = document.querySelector('.btn-calc2')
let buttonClear2 = document.querySelector('.btn-clear2')

buttonCalc2.addEventListener('click', function(){
    let n1 = document.querySelector('#percent2')
    let n2 = document.querySelector('#value-percent2')
    let percent = Number(n1.value)
    let valuePercent = Number(n2.value)
    let $calc = (percent * 100) / valuePercent
    let result = document.querySelector('.result2').innerHTML = $calc.toFixed(2) + ' %'
})

buttonClear2.addEventListener('click', function(){
    let result = document.querySelector('.result2').innerHTML = "--"
    let clearPercent = document.querySelector('#percent2').value = ""
    let clearValuePercent = document.querySelector('#value-percent2').value = ""
})

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       alert('Somente números é permitido!')
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

 