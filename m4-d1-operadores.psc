Algoritmo operatoria_numeros
	// se inician variables
	Definir num1, num2, suma, resta Como Entero
	Definir division, multiplicacion, modulo Como Real
	// se pide a usuario ingresar n�meros mayores a cero
	Escribir 'Escribe el primer n�mero'
	Leer num1
	Escribir 'Escribe el segundo n�mero'
	Leer num2
	// se suman variables y se muestra el resultado
	suma <- num1+num2
	Escribir 'El resultado de la suma es: ', suma
	// se restan variables y se muestra el resultado
	resta <- num1-num2
	Escribir 'El resultado de la resta es: ', resta
	// se dividen variables y se muestra el resultado
	division <- num1/num2
	Escribir 'El resultado de la divisi�n es: ', division
	// se multiplican variables y se muestra el resultado
	multiplicacion <- num1*num2
	Escribir 'El resultado de la multiplicaci�n es: ', multiplicacion
	// se calcula m�dulo de variables y se muestra el resultado
	modulo <- num1 MOD num2
	Escribir 'El resultado del m�dulo es: ', modulo
FinAlgoritmo