const dataTable = document.getElementById('tabla');
let rows = dataTable.children[1].getElementsByTagName('tr');

function ocult(){
    document.getElementById("submits").hidden = true;
}

function agregar(){
    
    var tbody = document.querySelector("#tabla tbody");
    var gusto = document.getElementById("ngustos").value;
    var rows = "";
    var cero = 0;
    var boton = '<button onclick="mostrar();editar(event);" type="button" class="btn btn-link" style="text-decoration: none;">Editar</button>'

    rows += "<td>" + gusto + "</td><td>" + cero + "</td><td>" + boton + '</td>';
    var tr = document.createElement("tr");
    tr.innerHTML = rows;
    tbody.appendChild(tr)
}

function mostrar(){
    document.getElementById("submits").hidden = false;
}

function editar(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.children[0].innerHTML = '<input id="gusto" type="text" name="gustos" value="" size="4">';
    e.target.parentElement.parentElement.children[1].innerHTML = '<input id="porcentaje" type="text" name="porcen" value="" size="2">';
    e.target.parentElement.parentElement.children[2].innerHTML = '<p style="color: gray">Ya se esta editando</p>';
}

function envio(){
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var gusto = document.getElementById("gusto").value;
    var porcentaje = document.getElementById("porcentaje").value;

    window.location.href = "resultado.html?nombre=" + nombre + "&email=" + email + "&telefono=" + telefono + "&gusto=" + gusto + "&porcentaje=" + porcentaje;
}