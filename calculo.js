
// Array Calculos
const operaciones = [{ id: 1, accion: "Calcular Interes" }, 
{ id: 2,  accion: "Calcular Plazo fijo" },
{ id: 3,  accion: "Calcular Sueldo neto" },
{id: 4, accion: "Cotización dólar"}];

const cotizacionUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

//Carga en jQuery
for (const operacion of operaciones) {
    $(".operaciones").append(
    `<div>
    <button type="button" class="btn-calcular" value="${operacion.id}">${operacion.accion}</button>
    </div>`);
}

//Asociar botones al cálculo
$('.btn-calcular').click(function() {
    const accionId = this.value;
    if (accionId == 1) {
        $(".calculos").html("");
        $(".calculos").append(`
        <div">
        <form>
        <label for="montoI">Ingrese el monto en efectivo: </label><br>
        <input type="number" id="montoI" name="montoInicial"><br>
        <label for="montoF">Ingrese monto final a pagar en cuotas:</label><br>
        <input type="number" id="montoF" name="montoFinal"><br>
        <input type="submit" id="btn-calculo" value="Calcular">
        </form>
        </divid=>`);
        $("#btn-calculo").click(function(e) {
            e.preventDefault();
            let montoInicial = parseInt($("#montoI").val());
            let montoFinal = parseInt($("#montoF").val());
            const calculo1 = new CalculoInteres(montoFinal, montoInicial);
            const enJSON = JSON.stringify(calculo1);
            console.log(enJSON);
            localStorage.setItem("resultadoInteres", enJSON); //Se guarda el último resultado de la operación
        calculo1.mensajeInteres();
        })    
    }
    else if (accionId == 2) {
        $(".calculos").html("");
        $(".calculos").append(`
        <div>
        <form>
        <label for="montoI">Ingrese el monto a depositar en el plazo fijo: </label><br>
        <input type="number" id="inversion" name="inversion"><br>
        <label for="montoF">Ingrese la TNA (%): </label><br>
        <input type="number" id="tasa" name="tasa"><br>
        <label for="montoF">Ingrese el plazo en meses: </label><br>
        <input type="number" id="plazo" name="plazo"><br>
        <input type="submit" id="btn-calculo" value="Calcular">
        </form>
        </div>`);
        $("#btn-calculo").click(function(e) {
            e.preventDefault();
            let inversion = parseFloat($("#inversion").val());
            let tasa = parseFloat($("#tasa").val());
            let plazo = parseInt($("#plazo").val());
            const plazo1 = new CalculoPlazo (inversion, tasa, plazo);
            const enJSON = JSON.stringify(plazo1);
            console.log(enJSON);
            localStorage.setItem("resultadoPlazo", enJSON); //Se guarda el último resultado de la operación
            plazo1.mensajePlazo();
        })
        }
    else if (accionId == 3) {
        $(".calculos").html("");
        $(".calculos").append(`
        <div>
        <form id="form3">
        <label for="montoI">Ingrese su sueldo bruto: </label><br>
        <input type="number" id="sueldo" name="sueldo"><br>
        <input type="submit" id="btn-calculo" value="Calcular">
        </form>
        </div>`);
        $("#btn-calculo").click(function(e) {
            e.preventDefault();
            let sueldoBruto = parseInt($("#sueldo").val());
            if (sueldoBruto>175000) {
                alert (`Su sueldo es muy alto, no podemos calcular el sueldo neto.`);
            } else {
                const sueldo1 = new CalculoSueldo (sueldoBruto);
                const enJSON = JSON.stringify(sueldo1);
                console.log(enJSON);
                localStorage.setItem("resultadoSueldo", enJSON); //Se guarda el último resultado de la operación
                sueldo1.mensajeSueldo();
            }
        })
    }
    else if (accionId == 4) {
        $(".calculos").html("");
        $(".calculos").append(`<div><button id='btn1'>Dolar Oficial</button></div>`);
        $(".calculos").append(`<div><button id='btn2'>Dolar Blue</button></div>`);
        $('#btn1').click(() => {
            $.get(cotizacionUrl, function(cotizacion, estado) {
                
                if (estado != "success") {
                    alert("Todo se daño :'( ");
                } else {
                        $(".resultados").html("");
                        $(".resultados").append(`
                            <div>
                                <h3>${cotizacion[0].casa.nombre}</h3>
                                <p>Compra: ${cotizacion[0].casa.compra}</p>
                                <p>Venta: ${cotizacion[0].casa.venta}</p>
                            </div>
                        `)
                }
            });
        });
        $('#btn2').click(() => {
            $.get(cotizacionUrl, function(cotizacion, estado) {
                
                if (estado != "success") {
                    alert("Todo se daño :'( ");
                } else {
                        $(".resultados").html("");
                        $(".resultados").append(`
                            <div>
                                <h3>${cotizacion[1].casa.nombre}</h3>
                                <p>Compra: ${cotizacion[1].casa.compra}</p>
                                <p>Venta: ${cotizacion[1].casa.venta}</p>
                            </div>
                        `)
                }
            });
        });
    }
})

//Test
$(document).ready(() => {
    console.log("El DOM está listo");
    $(".title").fadeOut("slow", function(){
        $(".title").fadeIn(1000);
        })
    $("h2").fadeOut("slow", function(){
    $("h2").fadeIn(1000);
    })
})

