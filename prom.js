/*definicion de variables*/
const codigoError = document.getElementById("codigoError");
const listaEstudiantes = document.getElementById('listaEstudiantes');


/*definicion metodos */ 
const cargarRegistro = (contacto)=>{
    const row = document.createElement('tr');

    const nombreCeld = document.createElement('td');
    nombreCeld.textContent = contacto.nombre;

    const codigoCeld = document.createElement('td');
    codigoCeld.textContent = contacto.codigo;
    
    const nota1Celd = document.createElement('td');
    nota1Celd.textContent = contacto.nota1;

    const nota2Celd = document.createElement('td');
    nota2Celd.textContent = contacto.nota2;

    const nota3Celd = document.createElement('td');
    nota3Celd.textContent = contacto.nota3;

    const nota4Celd = document.createElement('td');
    nota4Celd.textContent = contacto.nota4Celd;

    const btnCeld = document.createElement('td');
    const eleminiarBtn = document.createElement('button');
    eleminiarBtn.textContent = 'Borrar';
    eleminiarBtn.addEventListener('click',()=>{
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