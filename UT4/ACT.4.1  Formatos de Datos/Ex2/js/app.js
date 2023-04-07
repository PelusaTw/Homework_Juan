let listaEmpleados = [
    {
        "id":1,
        "nombre":"Lionel Messi",
        "telefono":"648-898-769",
        "especialidad": ["Creador"," Regateador"," GOAT"] ,
        "departamentos":"PSG"
    },
    {
        "id":2,
        "nombre":"Joan Gomila",
        "telefono":"631-455-779",
        "especialidad":"Python",
        "departamentos":"Desarrollo"
    },
    {
        "id":3,
        "nombre":"Sara Gomez",
        "telefono":"653-378-889",
        "especialidad":"Java",
        "departamentos":"Desarrollo"
    },
    {
        "id":4,
        "nombre":"Ismael Lozano",
        "telefono":"908-436-232",
        "especialidad":"Portero",
        "departamentos":"IES Emili Darder"
    }
]

const lista = document.querySelector("#lista")

function mostrarLista() {
    for(empleado of listaEmpleados){
        lista.innerHTML += `
            <tr>
                <td>${empleado.id}</td>
                <td>${empleado.nombre}</td>
                <td>${empleado.telefono}</td>
                <td>${empleado.especialidad}</td>
                <td>${empleado.departamentos}</td>
               
            </tr>

        `;
        
    }

}
 mostrarLista();
