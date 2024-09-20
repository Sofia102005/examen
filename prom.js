/*definicion de variables*/
const codigoError = document.getElementById("codigoError");
const listaEstudiantes = document.getElementById('listaEstudiantes');


/*definicion metodos */ 
const promEstudiante = (nota1, nota2, nota3, nota4) => {
    return{
    nota1: parseFloat (nota1),
    nota2: parseFloat (nota2),
    nota3: parseFloat (nota3),
    nota4: parseFloat (nota4),
    calProm: function() {
        return (((this.nota1*0.2)+(this.nota2*0.2) +(this.nota3*0.2)+ (this.nota4*0.4))/4)
    },
    aprob: function() {
        return this.calcularDef() >= 3.0 ? "Aprobado" : "No aprobo";
    }
    }
}


const cargarRegistro = (estudiante)=>{

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
    btnCeld.appendChild(eleminiarBtn);


    row.appendChild(nombreCeld);
    row.appendChild(codigoCeld);
    row.appendChild(nota1Celd);
    row.appendChild(nota2Celd);
    row.appendChild(nota3Celd);
    row.appendChild(nota4Celd);
    row.appendChild(btnCeld);

    const tbody = listaEstudiantes.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);
}