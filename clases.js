
// Cálculo de interés y tasa de interés
class CalculoInteres {
    constructor (montoFinal, montoInicial) {
this.interes = montoFinal - montoInicial;
this.tasa = Number.parseFloat((this.interes/montoInicial)*100).toFixed(2);
    }
    mensajeInteres() {
        $(".resultados").html("");
        $(".resultados").append(`
        <div>
        <p>El interes a pagar es ${this.interes} ARS y la tasa de interés es ${this.tasa} %</p>
        </div>`
        )}
}

// Calculadora plazo fijo
class CalculoPlazo {
    constructor (inversion, tasa, plazo) {
this.inversion = inversion;
this.tasa = tasa/100; 
this.plazo = plazo; 
this.ganancia = inversion*this.tasa*this.plazo/12;
this.montoPlazo = (this.ganancia+inversion).toFixed(2); 
    } 
    mensajePlazo() {
        $(".resultados").html("");
        $(".resultados").append(`
        <div>
        <p>El interes generado es de ${this.ganancia.toFixed(2)} ARS y el monto final del plazo fijo es ${this.montoPlazo} ARS</p>
        </div>`
        )}
}

// Calculadora Sueldo neto - No incluye deducción de impuesto a las ganancias
class CalculoSueldo {
    constructor (sueldoBruto) {
this.sueldoBruto = sueldoBruto;
this.sueldoNeto = this.sueldoBruto*0.83;  
    } 
    mensajeSueldo() {
        $(".resultados").html("");
        $(".resultados").append(`
        <div><p>Su sueldo bruto es ${this.sueldoBruto} ARS y su sueldo neto es ${this.sueldoNeto} ARS</p>
        </div>`
        )}
}

