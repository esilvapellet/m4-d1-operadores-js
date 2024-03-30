Algoritmo operatoria_numeros
	// se inician variables
	Definir num1, num2, suma, resta Como Entero
	Definir division, multiplicacion, modulo Como Real
	// se pide a usuario ingresar números mayores a cero
	Escribir 'Escribe el primer número'
	Leer num1
	Escribir 'Escribe el segundo número'
	Leer num2
	// se suman variables y se muestra el resultado
	suma <- num1+num2
	Escribir 'El resultado de la suma es: ', suma
	// se restan variables y se muestra el resultado
	resta <- num1-num2
	Escribir 'El resultado de la resta es: ', resta
	// se dividen variables y se muestra el resultado
	division <- num1/num2
	Escribir 'El resultado de la división es: ', division
	// se multiplican variables y se muestra el resultado
	multiplicacion <- num1*num2
	Escribir 'El resultado de la multiplicación es: ', multiplicacion
	// se calcula módulo de variables y se muestra el resultado
	modulo <- num1 MOD num2
	Escribir 'El resultado del módulo es: ', modulo
FinAlgoritmo