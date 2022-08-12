let nome = prompt('Digite o nome do aluno')

let matematica = parseFloat(prompt('Digite a nota de matemática'))
let pMatematica = parseInt(prompt('Qual a presença?'))

let portugues = parseFloat(prompt('Digite a nota de portugês'))
let pportugues = parseInt(prompt('Qual a presença?'))

let informatica = parseFloat(prompt('Digite a nota de informática'))
let pinformatica = parseInt(prompt('Qual a presença?'))

let geografia = parseFloat(prompt('digite a nota de geografia'))
let pgeografia = parseInt(prompt('Qual a presença?'))

let ingles = parseFloat(prompt('Digite a nota de inglês'))
let pingles = parseInt(prompt('Qual a presença?'))

let historia = parseFloat(prompt('Digite a nota de história'))
let phistoria = parseInt(prompt('Qual a presença?'))

let filosofia = parseFloat(prompt('Digite a nota de filosofia'))
let pfilosofia = parseInt(prompt('Qual a presença?'))

let sociologia = parseFloat(prompt('Digite a nota de sociologia'))
let psociologia = parseInt(prompt('Qual a presença?'))

let literatura = parseFloat(prompt('Digite a nota de literatura'))
let pliteratura = parseInt(prompt('Qual a presença?'))

let educacaoFisica = parseFloat(prompt('Digite a nota de educação física'))
let peducacaoFisica = parseInt(prompt('Qual a presença?'))

let somar = matematica + portugues + informatica + geografia + ingles + historia + filosofia + sociologia + literatura + educacaoFisica 
let media = somar / 2
let presenca = pMatematica + pportugues + pinformatica + pgeografia + pingles + phistoria + pfilosofia + psociologia + pliteratura + peducacaoFisica
let mediaP = presenca / 2

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

