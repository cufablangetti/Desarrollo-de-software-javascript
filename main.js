// Ejerciocio N2

let a = 5
let b = 4

let c = a + b
console.log(`La suma de a y b es: ${c}`)

//Ejercicio 3
let nombre = prompt('Hola! ¿Cuál es tu nombre?')
console.log(`Hola, ${nombre}!`)

//2.Operadores lógicos y condicionales
//Ejercicio 1
let a2 = 30
let b2 = 5
let c2 = 50
let mayor = Math.max(a2, b2, c2)
console.log(`El mayor de los tres números es: ${mayor}`)

//Ejercicio 2
let numeroIngresado = prompt('Ingresa un número y te diré si es par o impar')
numeroIngresado % 2 === 0
  ? console.log(`El número ${numeroIngresado} es par`)
  : console.log(`El número ${numeroIngresado} es impar`)

//3.Operadores de asignación y bucles
//Ejercicio 1
let n = 10
while (n > 0) {
  console.log(n)
  n--
}

//Ejercicio 2
let numero
do {
  numero = prompt('Ingresa un número mayor a 100:')
} while (numero <= 100)
console.log(`Ingresaste un número mayor a 100: ${numero}`)

//4. Funciones de JavaScript
//Ejercicio 1

function esPar(numero) {
  
  return numero % 2 === 0;
}
console.log(`El número 4 es par: ${esPar(4)}`);
console.log(`El número 7 es par: ${esPar(7)}`);
console.log(`El número 10 es par: ${esPar(10)}`);
console.log(`El número 13 es par: ${esPar(13)}`); 


//Ejercicio 2

function convertirCelsiusAFahrenheit(celsius) {
  
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

console.log(`${0} °C son equivalentes a ${convertirCelsiusAFahrenheit(0)} °F`);
console.log(`${25} °C son equivalentes a ${convertirCelsiusAFahrenheit(25)} °F`);
console.log(`${100} °C son equivalentes a ${convertirCelsiusAFahrenheit(100)} °F`);


//5. Objetos en JavaScript
//Ejercicio 1
let persona = {
  nombre: 'Constanza',
  edad: 20,
  ciudad: 'Coquimbito, Maipu',
  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad
  },
}
console.log("Antes de cambiar la ciudad:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

persona.cambiarCiudad('Barrio Coreano')

console.log("\nDespués de cambiar la ciudad:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

//Ejercicio 2
let libro = {
  titulo: 'Cien años de soledad',
  autor: 'Gabriel García Márquez',
  año: 1967,
  esAntiguo: function () {
    const añoActual = new Date().getFullYear()
    return añoActual - this.año > 10 ? true : false
  },
}
console.log(`El libro ${libro.titulo} es antiguo: ${libro.esAntiguo()}`)

//6. Arrays en JavaScript
//Ejercicio 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {

    numerosMultiplicados[i] = numeros[i] * 2;
}


console.log("Array original:", numeros);
console.log("Array con números multiplicados por 2:", numerosMultiplicados);


//Ejercicio 2
const pares = []
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i)
  }
}
console.log(`Primeros 10 números pares: ${pares}`)

//7. Introducción al DOM
//Ejercicio 1
const parrafo = document.getElementsByTagName('p')
const changeColorButton = document.getElementById('change-color-button')

changeColorButton.addEventListener('click', () => {
  if (parrafo[0].style.color === 'blue') {
    for (let i = 0; i < parrafo.length; i++) {
      parrafo[i].style.color = 'black'
    }
    changeColorButton.innerText = 'Cambiar color a azul'
    return
  }

  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.color = 'blue'
  }
  changeColorButton.innerText = 'Cambiar color a negro'
})

//Ejercicio 2
const alertButton = document.getElementById('alert-button')
alertButton.addEventListener('click', () => {
  let mensaje = document.getElementById('alert-input').value
  alert(`Has ingresado: ${mensaje}`)
})

//8. Eventos en DOM
//Ejercicio 1
const listItems = document.querySelectorAll('li')
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.textContent)
  })
})

//Ejercicio 2
const input = document.getElementById('input')
const disableInputButton = document.getElementById('disableInputButton')
const enableInputButton = document.getElementById('enableInputButton')
disableInputButton.addEventListener('click', () => {
  if (input.disabled === false) {
    input.disabled = true
    disableInputButton.disabled = true
    enableInputButton.disabled = false
  }
  return
})
enableInputButton.addEventListener('click', () => {
  if (input.disabled === true) {
    input.disabled = false
    disableInputButton.disabled = false
    enableInputButton.disabled = true
  }
  return
})

//9. LocalStorage
const emailInput = document.getElementById('email-input')
const saveButton = document.getElementById('save-button')

saveButton.addEventListener('click', () => {
  localStorage.setItem('email', emailInput.value)
  findEmail()
})

const findEmail = () => {
  const result = localStorage.getItem('email')
  if (result) {
    document.getElementById(
      'saved-email'
    ).innerHTML = `<p>Correo guardado: ${result}</p><button id="clear-button">Eliminar Correo Guardado</button>`
    const clearButton = document.getElementById('clear-button')
    clearButton.addEventListener('click', () => {
      localStorage.removeItem('email')
    })
  }
}
findEmail()





