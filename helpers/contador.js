//Contadores
//Suma actual/Dia
const count= [];
//Suma del semana
const weekCount = [];
//Suma del mes
const monthCount = [];
//Suma total
const total = [];
//Match tiempos
let matchTimer = []; //let ya que vamos a alterar su valor a diferencia de los otros arrays
let hourMatch = [];
let minMatch = [];
let secMatch = [];
const calculoPromedio = [];
const promedio = [];

//Acumulador de del dia
const reducer = (accumulator, acumulador1) => accumulator + acumulador1; 



//funcion suma 
//Utilizando addEventListener
const countSum = () =>{
    document.getElementById("count").innerHTML++; // aumento en el Dom +1
    count.push(1); //push +1 por click
    sumaTotal = count.reduce(reducer);  //suma total del array diario
    document.getElementById("dayCount").innerHTML = sumaTotal; // muestra del total del dia
    totalSumaShow();
    firstMatchTime();
}
let suma1  = document.getElementById("suma1"); //boton de suma
suma1.addEventListener("click",countSum); // activar el evento del boton

//funcion resta
const countRest = () =>{
    if(count.length<1){ //si array count es menor a 1 muestra 0 en la cuenta del dia
        document.getElementById("dayCount").innerText = `0`;
    }else{
        document.getElementById("count").innerHTML--; //si la suma es mayor a 0 y clickeamos en el boton resta, resta un elemento del array y muestra el resultado actual
        count.pop(); // eliminamos un elemento del array count
        sumaTotal = count.reduce(reducer);
        document.getElementById("dayCount").innerHTML = sumaTotal;
    }
    totalSumaShow();
}
let resta1  = document.getElementById("resta1"); //boton de resta
resta1.addEventListener("click",countRest); // activar el evento del boton



//SUMA SEMANA
//Usando onclick function

//captura boton guardado de dia
let totalDaySum = document.getElementById("daySum");
//funcion suma del dia, y pasado a semana
totalDaySum.onclick = function daySave(){// sumamos el total del dia, lo pasamos a semana, y reiniciamos los contadores diarios
    weekCount.push(count.reduce(reducer));
    document.getElementById("weekCount").innerHTML = weekCount;
    while (count!=0){count.pop();}
    document.getElementById("dayCount").innerText = `0`;
    document.getElementById("count").innerText = `0`;
}


//captura boton eliminador de dia
let unTotalDaySum = document.getElementById("unDaySum");
//funcion eliminador de dia , onclick boton
unTotalDaySum.onclick = function unDaySum(){
    if(weekCount.length==0){
        document.getElementById("weekCount").innerText = "0";
    }else{
        weekCount.pop();
        document.getElementById("weekCount").innerHTML = weekCount;
    }
    totalSumaShow();
};



// SUMA A MES

//captura boton guardado de la semana
const totalWeekSum  = document.getElementById("weekSum");
//funcion click semana a mes
totalWeekSum.onclick = function weekSum(){
    if(weekCount.length>=1 && count.length>=1){
        weekCountTot = weekCount.reduce(reducer);
        countDayTot = count.reduce(reducer);
        dayAndWeekTot = countDayTot + weekCountTot;
        monthCount.push(dayAndWeekTot);//si la longitud de dia y semana es mayor que 1 sumamos y pusheamos
    }else if(weekCount.length>=1){
        monthCount.push(weekCount.reduce(reducer)); //si la longitud solo de la semana es mayor 1 pusheamos
    }else if(count.length>=1){
        monthCount.push(count.reduce(reducer)); // solo si la longitud de dia es mayor a 1 pusheamos
    };
    while (weekCount!=0){weekCount.pop();} //ya que pusheamos a al mes eliminamos el contenido de dia y semana
    while (count!=0){count.pop();}
    document.getElementById("monthCount").innerHTML = monthCount; // mostramos datos actuales 
    document.getElementById("weekCount").innerText = `0`;
    document.getElementById("dayCount").innerText = `0`;
    document.getElementById("count").innerText = `0`;
};

//funcion eliminar ultimo ingreso del mes
const unweekSum = document.getElementById("unWeekSum");
unweekSum.onclick = function unWeekSum (){
    document.getElementById("monthCount").innerText = "0";
    if(monthCount.length==0){
        document.getElementById("monthCount").innerText = "0";
    }else{
        monthCount.pop();
        document.getElementById("monthCount").innerHTML = monthCount;
    }
    totalSumaShow();
}



// TOTAL SHOW
const totalSumaShow = () => {
    total.push(count.concat(...weekCount,...monthCount));
    if(total.length===0){
        total.pop();
        document.getElementById("totalMonth").innerHTML = "0";
    }else if(total.length===1){
        document.getElementById("totalMonth").innerHTML = total.reduce(reducer);
    }else if(total.length>1){
        total.shift();
        supertotal = total.reduce(reducer);
        //console.log(supertotal.reduce(reducer)); debug console.log
        document.getElementById("totalMonth").innerHTML = supertotal.reduce(reducer);
    }
}



// Funcion del reloj (hora actual)
function muestraReloj() {
    let fechaHora = new Date();
    let [horas,minutos,segundos] = [fechaHora.getHours(),fechaHora.getMinutes(),fechaHora.getSeconds()]
    let actualTime = `${horas}:${minutos}:${segundos}`;
    document.getElementById("actualTime").innerHTML = actualTime;
}
setInterval(muestraReloj, 1000);



//FUNCION PARA CALCULAR MINUTO EN EL QUE SE MATCHEA (hora,minuto,segundos)
//Esto se resta el primer match al segundo, y calcula cuanto tiempo tardo en enncontrarse,
//al hacer esto con todos los match, sumarlos, y dividirlo, sacamos promedio de cuanto es el tiempo promedio en encontrar un match
//hora minutos segundos
const firstMatchTime = () =>{
    if (count.length===1){
        let start = new Date()
        let [hour, minutes, seconds] = [start.getHours(), start.getMinutes(), start.getSeconds()];
        hourMatch.push(hour);
        minMatch.push(minutes);
        secMatch.push(seconds);
    }else{
        let end = new Date();
        let [hour2, minutes2, seconds2] = [end.getHours(), end.getMinutes(), end.getSeconds()];
        secMatch.push(seconds2); //pusheamos el segundos contador de segundos para restar
        let resSec = secMatch[1]-secMatch[0]; //pusheado al array y apartir de este se reta dando la cantidad se segundos de diferencia entre uno y otro
        //debug 
        console.log(`segundos que se restaran, antes de eliminar uno de estos = ${secMatch}`)
        if(secMatch.length>=2){  //una vez pusheado a promedio sacamos el primer elemento del array
            promedio.push(resSec);  //pusheamos resultad de la resta la cual nos da cuanto tiempo se tardo en encontrar(hacer click)
            secMatch.shift();
        }
    }
    //debug
    const asd = () =>{
        console.log(`secmatch (segundos) = ${secMatch}  (segundos de match (click +))`)
        console.log(`promedio = ${promedio} (suma de los match(click +), dividido cantidad de click(match))`)
    }
    asd();
    //imprecion promedio
    let media = promedio.reduce(reducer)/promedio.length;
    document.getElementById("timeCount").innerHTML = media; // promedio, sumamos el contenido, y lo dividimos por la cantidad de elementos para calcular la media(promedio)
}
//en lugar de segundos hacerlo con la cantidad de milisegundos del dia, y transformarlo a hora minuto y segundos
const aaa = () => {
    let mili = new Date();
    let mil = mili.getUTCMilliseconds();
    console.log(mil);
}
//setInterval(aaa, 1000)


// ya fue hacer solo por hora/minutos, no contar segundos. guardarlos en un array y este array guardarlo en una base de datos, hacer el backEnd, y base de datos mysql