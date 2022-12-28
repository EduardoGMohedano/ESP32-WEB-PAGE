function ON(color){
    document.getElementById("led1").style.backgroundColor = 'green';
    document.getElementById("estado_led1").innerHTML = "Encendido";
}

function OFF(color){
    document.getElementById("led1").style.backgroundColor = 'red';
    document.getElementById("estado_led1").innerHTML = "Apagado";
}

const pwm_valor = document.querySelector('.pwm')
pwm_valor.addEventListener('click', function(){
    val = this.value;
    document.getElementById("estado_led2").innerHTML = val;
})