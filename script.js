let main = ""

do {

    main = prompt(` 
        1- ÁREA DO TRIÂNGULO
        2- ÁREA DO RETÂNGULO
        3- ÁREA DO QUADRADO
        4- ÁREA DO TRAPÉZIO
        5- ÁREA DO CÍRCULO
        6- SAIR`)

    switch (main) {
        case "1":
            function areaTriangulo(){
                let base1 = parseFloat(prompt("Digite a base do triângulo:"))
                let altura1 = parseFloat(prompt("Digite a altura do triângulo:"))
                const area1 = base1 * altura1 / 2
                return area1
            }
            alert(`A área do triângulo é ${areaTriangulo()}`)
            break
        case "2":
            function areaRetangulo(){
                let base2 = parseFloat(prompt("Digite a base do retângulo:"))
                let altura2 = parseFloat(prompt("Digite a altura do retângulo:"))
                const area2 = base2 * altura2
                return area2
            }
            alert(`A área do retângulo é ${areaRetangulo()}`)
            break
        case "3":
            function areaQuadrado(){
                let lado = parseFloat(prompt("Digite a primeira face do quadrado:"))
                const area3 = lado * lado
                return area3
            }
            alert(`A área do quadrado é ${areaQuadrado()}`)
            break
        case "4":
            function areaTrapezio(){
                let baseMaior = parseFloat(prompt("Digite a base maior:"))
                let baseMenor = parseFloat(prompt("Digite a base menor:"))
                let altura4 = parseFloat(prompt("Digite a altura:"))
                const area4 = (baseMaior + baseMenor) * altura4 / 2
                return area4
            }
            alert(`A área do trapézio é ${areaTrapezio()}`)
            break
        case "5":
            function areaCirculo(){
            const pi = 3.14
            let raio = parseFloat(prompt("Digite o raio:"))
            const area5 = pi * raio * raio
            return area5
            }
            alert(`A área do circulo é ${areaCirculo()}`)
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")

    }
}while(main !== "6")