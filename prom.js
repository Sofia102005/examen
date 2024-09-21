const formEstudiante = document.getElementById('registro');
const msgCodigo = document.getElementById("msgCodigo");
const estudiantes = []; 

/* Definición de métodos */
const promEstudiante = (nota1, nota2, nota3, nota4) => {
    return {
        nota1: parseFloat(nota1),
        nota2: parseFloat(nota2),
        nota3: parseFloat(nota3),
        nota4: parseFloat(nota4),
        calProm: function() {
            return ((this.nota1 * 0.2) + (this.nota2 * 0.2) + (this.nota3 * 0.2) + (this.nota4 * 0.4));
        },
        aprob: function() {
            return this.calProm() >= 3.0 ? "Aprobado" : "No aprobó";
        }
    };
};

const codigoValidator = {
    comprobarCodigo: function(codigo) {
        return estudiantes.some(est => est.codigo === codigo);
    },
    mostrarMensaje: function(mensaje) {
        msgCodigo.textContent = mensaje;
    }
};

const cargarRegistro = (estudiante) => {
    const row = document.createElement('tr');
    
    const codigoCeld = document.createElement('td');
    codigoCeld.textContent = estudiante.codigo;

    const nombreCeld = document.createElement('td');
    nombreCeld.textContent = estudiante.nombre;

    const nota1Celd = document.createElement('td');
    nota1Celd.textContent = estudiante.nota1;

    const nota2Celd = document.createElement('td');
    nota2Celd.textContent = estudiante.nota2;

    const nota3Celd = document.createElement('td');
    nota3Celd.textContent = estudiante.nota3;

    const nota4Celd = document.createElement('td');
    nota4Celd.textContent = estudiante.nota4;

    const defCeld = document.createElement('td');
    defCeld.textContent = estudiante.calProm().toFixed(2);

    const aprobCeld = document.createElement('td');
    aprobCeld.textContent = estudiante.aprob(); 

    const btnCeld = document.createElement('td');
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Borrar';
    eliminarBtn.addEventListener('click', () => {
        row.remove(); 
 
        const index = estudiantes.indexOf(estudiante);
        if (index > -1) {
            estudiantes.splice(index, 1);
        }
    });
    btnCeld.appendChild(eliminarBtn);

    row.appendChild(codigoCeld);
    row.appendChild(nombreCeld);
    row.appendChild(nota1Celd);
    row.appendChild(nota2Celd);
    row.appendChild(nota3Celd);
    row.appendChild(nota4Celd);
    row.appendChild(defCeld);
    row.appendChild(aprobCeld);
    row.appendChild(btnCeld);

    const tbody = document.querySelector('tbody');
    tbody.appendChild(row);
};

formEstudiante.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;

    if (codigo.length > 10) {
        msgCodigo.textContent = "El código debe tener máximo 10 caracteres.";
        return;  
    } else if (codigoValidator.comprobarCodigo(codigo)) {
        codigoValidator.mostrarMensaje("El código ya existe en la tabla.");
        return;
    } else {
        msgCodigo.textContent = "";  
    }

    const estudiante = promEstudiante(nota1, nota2, nota3, nota4);
    estudiante.codigo = codigo;
    estudiante.nombre = nombre;

    estudiantes.push(estudiante); 
    cargarRegistro(estudiante);

    formEstudiante.reset();
});
