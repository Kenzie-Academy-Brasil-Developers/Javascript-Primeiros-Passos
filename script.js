let nome = prompt('Digite o nome do aluno')

let materiaMatematica = (prompt("Digite a matéria"))
let notaMatematica = parseFloat(prompt('Digite a nota de matemática'))
let presencaMatematica = parseInt(prompt('Qual a presença?'))

let materiaPortugues = (prompt("Digite a matéria"))
let notaPortugues = parseFloat(prompt('Digite a nota de portugês'))
let presencaPortugues = parseInt(prompt('Qual a presença?'))

let materiaInformatica = (prompt("Digite a matéria"))
let notaInformatica = parseFloat(prompt('Digite a nota de informática'))
let presencaInformatica = parseInt(prompt('Qual a presença?'))

let materiaGeografia = (prompt("Digite a matéria"))
let notaGeografia = parseFloat(prompt('digite a nota de geografia'))
let presencaGeografia = parseInt(prompt('Qual a presença?'))

let materiaIngles = (prompt("Digite a matéria"))
let notaIngles = parseFloat(prompt('Digite a nota de inglês'))
let presencaIngles = parseInt(prompt('Qual a presença?'))

let materiaHistoria = (prompt("Digite a matéria"))
let notahistoria = parseFloat(prompt('Digite a nota de história'))
let presencaHistoria = parseInt(prompt('Qual a presença?'))

let materiaFilosofia = (prompt("Digite a matéria"))
let notaFilosofia = parseFloat(prompt('Digite a nota de filosofia'))
let presencaFilosofia = parseInt(prompt('Qual a presença?'))

let materiaSociologia = (prompt("Digite a matéria"))
let notaSociologia = parseFloat(prompt('Digite a nota de sociologia'))
let presencaSociologia = parseInt(prompt('Qual a presença?'))

let materiaLiteratura = (prompt("Digite a matéria"))
let notaLiteratura = parseFloat(prompt('Digite a nota de literatura'))
let presencaLiteratura = parseInt(prompt('Qual a presença?'))

let materiaEducacaoFisica = (prompt("Digite a matéria"))
let notaEducacaoFisica = parseFloat(prompt('Digite a nota de educação física'))
let presencaEducacaoFisica = parseInt(prompt('Qual a presença?'))

let somar = notaMatematica
 + notaPortugues 
 + notaInformatica
 + notaGeografia
 + notaIngles
 + notahistoria
 + notaFilosofia
 + notaSociologia
 + notaLiteratura
 + notaEducacaoFisica

let media = somar / 10
let presenca = presencaMatematica
+ presencaPortugues
+ presencaInformatica
+ presencaGeografia
+ presencaIngles
+ presencaHistoria
+ presencaFilosofia
+ presencaSociologia
+ presencaLiteratura
+ presencaEducacaoFisica

let mediaP = presenca / 10

if (media >= 8 && mediaP >= 6) {
  alert(
    `a nota do aluno ${nome} é de ${media.toFixed(2)}
     e sua nota de presença de ${mediaP.toFixed(2)} 
     Aluno aprovado! `
  )
} else {
  alert(
    `a nota do aluno ${nome} é de ${media.toFixed(2)}
     e sua nota de presença de ${mediaP.toFixed(2)} 
     Aluno reprovado!`
  )
}

