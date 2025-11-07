console.log("conexion exitosa...")

//1. Pedir los datos de una persona (Nombre, apellidos, edad) y mostrarlos a través de una alerta.
function pedirDatos() {
    let nombre = prompt("Ingresa nombre: ")
    let apellido = prompt("Ingresa apellido: ")
    let edad = parseInt(prompt("Ingresa edad: "))
    alert(`Tu nombre es ${nombre} ${apellido} y tu edad es: ${edad}  `)
    console.log(`Tu nombre es ${nombre} ${apellido} y tu edad es: ${edad}  `)
};

//2. Pedir un número, dividirlo en 3 partes, sumar 10 y multiplicarlo por 2, luego mostrar el resultado en una alerta.
function pedirNumero() {
    let num = parseInt(prompt("Ingrese un número:"));
    let resultado = ((num / 3) + 10) * 2;
    alert(`El resultado es: ${resultado}`);
    console.log(`El resultado es: ${resultado}`)
};

//3. Leer 2 números y deducir si están en orden creciente o decreciente. Mostrar en cada caso “Estado creciente”, “Estado Decreciente”
function crecienteDecreciente() {
    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));
    if (a < b) {
        alert("Estado creciente");
    } else if (a > b) {
        alert("Estado decreciente");
    } else {
        alert("Son iguales");
    }
};

//4. Leer 5 números (bucle), calcular su promedio y mostrar el resultado.
function promedio() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i}:`));
        suma += num;
    }
    let promedio = suma / 5;
    alert(`El promedio es: ${promedio}`);
};

//5. Calcular la suma de los N primeros números naturales. (N es ingresado por el usuario). Ejemplo: N=3 → alerta: 1 + 2 + 3 = 6
function sumaNaturales() {
    let suma = 0;
    let numero = parseInt(prompt("Ingresa numero: "));
    let contador = 1;
    let resultado = "suma: 0";
    while (contador <= numero) {
        suma += contador;
        resultado += ` + ${contador} `;
        contador++
    }
    alert(` ${resultado} = ${suma}`)
};

//6. Mostrar en alerta los 100 primeros números pares. (Bucle)
function pares() {
    let pares = "";
    for (let i = 2; i <= 100; i += 2) {
        pares += i + " ";
    }
    alert(pares);
};

//7. Mostrar en alerta los 100 primeros números impares. (Bucle)
function primerosImpares() {
    let impares = "";
    for (let i = 1; i <= 100; i += 2) {
        impares += i + " ";
    }
    alert(impares);
};

//8. Sumar 5 números leídos por teclado - Mostrar resultado (Bucle)
function sumaNumeros() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        suma += parseInt(prompt(`Ingrese número ${i}:`));
    }
    alert(`La suma es: ${suma}`);
};

//9. Modificar el anterior para que permita sumar N números leídos por teclado. El valor de N se debe leer previamente por teclado.
function numerosSuma() {
    let N = parseInt(prompt("¿Cuántos números desea sumar?"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += parseFloat(prompt(`Ingrese número ${i}:`));
    }
    alert(`La suma es: ${suma}`);
};

//16. Crear programa para calcular el factorial de N (N!=1·2·3·...·N).
function factorial() {
    let N = parseInt(prompt("Ingrese N:"));
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    alert(`${N}! = ${factorial}`);
};
