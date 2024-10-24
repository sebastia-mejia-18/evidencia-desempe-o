document.getElementById('calcularBtn').addEventListener('click', calcularCostoEstacionamiento);
document.getElementById('otroVehiculoBtn').addEventListener('click', reiniciar);

function calcularCostoEstacionamiento() {
    const precioPorHora1 = 3000;
    const precioPorHora2 = 2500;
    const precioPorHora3 = 2000;

    const horaEntrada = document.getElementById('horaEntrada').value;
    const horaSalida = document.getElementById('horaSalida').value;

    if (!horaEntrada || !horaSalida) {
        alert("Por favor, ingrese ambas horas.");
        return;
    }

    const [horaE, minutoE] = horaEntrada.split(':').map(Number);
    const [horaS, minutoS] = horaSalida.split(':').map(Number);

    const minutosEntrada = horaE * 60 + minutoE;
    const minutosSalida = horaS * 60 + minutoS;

    let duracionHoras = (minutosSalida - minutosEntrada) / 60;

    if (duracionHoras < 0) {
        alert("La hora de salida debe ser mayor que la hora de entrada.");
        return;
    }

    let costo;

    if (duracionHoras < 2) {
        costo = duracionHoras * precioPorHora1;
    } else if (duracionHoras <= 5) {
        costo = duracionHoras * precioPorHora2;
    } else {
        costo = duracionHoras * precioPorHora3;
    }

    document.getElementById('resultado').innerText = `Costo de estacionamiento: $${costo.toFixed(2)}`;
    document.getElementById('otroVehiculoBtn').style.display = 'block';
}

function reiniciar() {
    document.getElementById('horaEntrada').value = '';
    document.getElementById('horaSalida').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('otroVehiculoBtn').style.display = 'none';
}
