const contador = require('./helpers/contador');


export function app() {
    console.log(contador);
    document.getElementById("root").innerHTML = `
    <header class="header container-fluid">
        <div class="tittle">
            <a class="tittle-A" href="">
                Contador
            </a>
            <a class="tittle-A" href="">
                Cronometro
            </a>
        </div>
        <div class="header-hour d-flex">
            <p class="hours-perse" id="actualTime">Hora Actual: 23:59:59</p>
        </div>
    </header>
    <div class="body">
        <div class="primary-container container-fluid d-flex">
            <div class="sub-div-count">
                <button class="buttons-primary" id="resta1">
                    -
                </button>
            </div>
            <div class="sub-div-count">
                <p class="counts-primary" id="count">0</p>
            </div>
            <div class="sub-div-count">
                <button class="buttons-primary" id="suma1">
                    +
                </button>
            </div>
        </div>
        <div class="count-buttuns">
            <button class="buttons" id="daySum">Guardar Dia</button>
            <Button class="buttons" id="weekSum">Guardar Semana</Button>
        </div>
        <div class="count-buttons">
            <button class="buttons" id="unDaySum">Eliminar Dia</button>
            <Button class="buttons" id="unWeekSum">Eliminar Semana</Button>
        </div>
        <div class="count-secundary">
            <h4 class="sub-tittle" >Contador del dia :</h4>
            <p class="counts" id="dayCount">0</p>
        </div>
        <div class="count-secundary">
            <h4 class="sub-tittle" >Contador de la semana :</h4>
            <p class="counts" id="weekCount">0</p>
        </div>
        <div class="count-secundary">
            <h4 class="sub-tittle" >Total del mes (dividido en semanas) :</h4>
            <p class="counts" id="monthCount">0</p>
        </div>
        <div class="count-secundary">
            <h4 class="sub-tittle" >Total :</h4>
            <p class="counts" id="totalMonth">0</p>
        </div>
        <div class="count-secundary">
            <h4 class="sub-tittle">Tiempo promedio entre matches :</h4>
            <p class="counts" id="timeCount">0</p>
        </div>
    </div>
    `;
    
};