let btn = document.getElementById("boton");


function empezar() {
    let num1 = +prompt("Inserta primer número entre 1 y 50");
    let num2 = +prompt("Inserta segundo número entre 1 y 50");
    if (num1 > 50 || num1 < 1 || num2 > 50 || num2 < 1) {
        while (num1 > 50 || num1 < 1 || num2 > 50 || num2 < 1) {
            alert("Error, número no válido");
            num1 = +prompt("Inserta primer número entre 1 y 50");
            num2 = +prompt("Inserta segundo número entre 1 y 50");

        }
        if ((num1 < 50 || num1 > 1) && (num2 < 50 || num2 > 1)) {

            resultado(num1, num2);

        }

    } else if ((num1 < 50 || num1 > 1) && (num2 < 50 || num2 > 1)) {

        resultado(num1, num2);

    }
};

btn.addEventListener("click", empezar);


function resultado(num1, num2) {
    const resultado = new Array;
    sumar(num1, num2);
    pares(num1, num2);
    rango(num1, num2);
    primos(num1, num2);
    alert(`${resultado}`)

    function sumar(num1, num2) {
        let operacion = num1 + num2;

        resultado.push(`La suma de ${num1} y ${num2} es ${operacion} \n`)
    }

    function pares(num1, num2) {
        if ((num1 % 2 == 0) && (num2 % 2 == 0) && (num1 == num2)) {
            resultado.push(`Los dos números son pares ${num1} \n`)

        } else if ((num1 % 2 != 0) && (num2 % 2 != 0) && (num1 == num2)) {
            resultado.push(`Los dos números son impares ${num1} \n`)


        } else if ((num1 % 2 == 0) && (num2 % 2 == 0)) {
            resultado.push(`Los dos números son pares \n`)

        } else if ((num1 % 2 != 0) && (num2 % 2 != 0)) {
            resultado.push(`Los dos números son impares ${num1} y ${num2} \n`)

        } else if (num1 % 2 == 0 || num2 % 2 == 0) {
            if (num1 % 2 == 0) {
                resultado.push(`El primer número es par ${num1} y el segundo es impar ${num2} \n`);
            } else if (num2 % 2 == 0) {
                resultado.push(`El segundo número es par ${num2} y el primero es impar ${num1} \n`);
            }
        }
    }


    function rango(num1, num2) {
        if (num1 % 2 == 0 && num1 < num2) {
            const numA1 = new Array;
            for (let i = num1; i <= num2; i += 2) {

                numA1.push(i);

            }
            resultado.push(`Rango: ${numA1} \n`)
        } else if (num1 % 2 != 0 && num1 < num2) {
            const numA2 = new Array;
            for (let i = num1 + 1; i <= num2; i += 2) {
                console.log(i);

                numA2.push(i);

            }
            resultado.push(`Rango: ${numA2} \n`)

        } else if (num1 % 2 == 0 && num1 > num2) {
            const numA3 = new Array;
            for (let i = num1 - 1; i >= num2; i -= 2) {
                console.log(i);

                numA3.push(i);

            }
            resultado.push(`Rango: ${numA3} \n`)

        } else if (num1 % 2 != 0 && num1 > num2) {
            const numA4 = new Array;
            for (let i = num1; i >= num2; i -= 2) {

                console.log(i);

                numA4.push(i);

            }
            resultado.push(`Rango: ${numA4} \n`)

        } else if (num1 % 2 != 0 && num1 == num2) {

            resultado.push(`Rango: ${num1} \n`)

        } else if (num1 % 2 == 0 && num1 == num2) {

            resultado.push(`Rango: ${num1} \n`)

        }

    }


    function primos(num1, num2) {
        if (num1 != num2) {
            let isprime = num1 == 1 ? false : true;

            for (let i = 2; i < num1; i++) {
                num1 % i == 0 ? isprime *= false : isprime *= true;
            };


            let isprime2 = num2 == 1 ? false : true;

            for (let i = 2; i < num2; i++) {
                num2 % i == 0 ? isprime2 *= false : isprime2 *= true;
            };


            resultado.push(`${num1} ${isprime? 'es primo':'no es primo'} y ${num2} ${isprime2? 'es primo':'no es primo'}`)
        } else if (num1 == num2) {
            let isprime = num1 == 1 ? false : true;

            for (let i = 2; i < num1; i++) {
                num1 % i == 0 ? isprime *= false : isprime *= true;
            };
            resultado.push(`${num1} ${isprime? 'es primo':'no es primo'}`)

        }

    }

}