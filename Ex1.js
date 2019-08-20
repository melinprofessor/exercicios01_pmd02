let nota1 = 10
const nota2 = 10
const resultado = (nota1 + nota2) / 2;

// 1º Solução
if(resultado >= 7 && resultado >10) {
    console.log('Aprovado')
}else if(resultado < 7) {
    console.log('Reprovado');
}else {
    console.log("Aprovado com Distinção")
}

// 2º Solução
if(resultado === 10) {
    console.log("Aprovado com Distinção")
} else if(resultado >= 7 && resultado >10) {
    console.log('Aprovado')
}else {
   console.log('Reprovado')
}

