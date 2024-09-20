/* definición de variables */
const codigoError = document.getElementById("codigoError");
const listaEstudiantes = document.getElementById('listaEstudiantes');
const formEstudiante = document.getElementById('formEstudiante');

/* definición métodos */
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

const cargarRegistro = (estudiante) => {
    const row = document.createElement('tr');
    
    const nombreCeld = document.createElement('td');
    nombreCeld.textContent = estudiante.nombre;

    const codigoCeld = document.createElement('td');
    codigoCeld.textContent = estudiante.codigo;

    const nota1Celd = document.createElement('td');
    nota1Celd.textContent = estudiante.nota1;

    const nota2Celd = document.createElement('td');
    nota2Celd.textContent = estudiante.nota2;

    const nota3Celd = document.createElement('td');
    nota3Celd.textContent = estudiante.nota3;

    const nota4Celd = document.createElement('td');
    nota4Celd.textContent = estudiante.nota4;

    const btnCeld = document.createElement('td');
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Borrar';
    eliminarBtn.addEventListener('click', () => {
        row.remove();
    });
    btnCeld.appendChild(eliminarBtn);

    row.appendChild(nombreCeld);
    row.appendChild(codigoCeld);
    row.appendChild(nota1Celd);
    row.appendChild(nota2Celd);
    row.appendChild(nota3Celd);
    row.appendChild(nota4Celd);
    row.appendChild(btnCeld);

    const tbody = listaEstudiantes.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);
};

formEstudiante.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const codigo = document.getElementById('codigo').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;

    const estudiante = promEstudiante(nota1, nota2, nota3, nota4);
    estudiante.nombre = nombre;
    estudiante.codigo = codigo;

    cargarRegistro(estudiante);   

    formEstudiante.reset();
});
