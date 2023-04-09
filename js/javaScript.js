function soma() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '+'
}

function sub() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '-'
}

function mult() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '*'
}

function div() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '/'
}

function porce() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '%'
}
function tb0() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '0'
}

function tb1() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '1'
}

function tb2() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '2'
}

function tb3() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '3'
}

function tb4() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '4'
}

function tb5() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '5'
}

function tb6() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '6'
}

function tb7() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '7'
}

function tb8() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '8'
}

function tb9() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML
  tela.innerHTML = valor + '9'
}
function clean() {
  let tela = document.getElementById('tela')
  tela.innerHTML = ''
}
function ingual() {
  let tela = document.getElementById('tela')
  let valor = tela.innerHTML

  if (valor) {
    let resultado = eval(valor)
    tela.innerHTML = resultado
  }
}
//Trocar de tema

var botaoTema = document.querySelectorAll('.button_TEMAs')

botaoTema[0].addEventListener('click', () => {
  let tema = document.getElementById('tagBody')
  let tema_botao_icon = document.getElementById('icon_img')
  let tema_logo = document.querySelector('div.tagName')

  if (tema.classList.contains('tema_B')) {
    //O da vez "A"
    tema.classList.add('tema_A')
    tema.classList.remove('tema_B')
    tema_botao_icon.classList.add('background_icon_img_A')
    tema_botao_icon.classList.remove('background_icon_img_B')
    tema_logo.classList.add('tagName_A')
    tema_logo.classList.remove('tagName_B')
  } else {
    //O da vez "B"
    tema.classList.add('tema_B')
    tema.classList.remove('tema_A')
    tema_botao_icon.classList.add('background_icon_img_B')
    tema_botao_icon.classList.remove('background_icon_img_A')
    tema_logo.classList.add('tagName_B')
    tema_logo.classList.remove('tagName_A')
  }
})

//------------------------------------------------------------------

var informacao_tema = document.querySelectorAll('.button_TEMAs')

informacao_tema[0].addEventListener('mouseenter', function () {
  let informacao = document.getElementById('informaçao_button_tema')
  informacao.classList.add('informaçao_button_tema_A')
  informacao.classList.remove('informaçao_button_tema_B')
  informacao.classList.add('p_A')
  informacao.classList.remove('p_B')
})

informacao_tema[0].addEventListener('mouseout', function () {
  let informacao = document.getElementById('informaçao_button_tema')
  informacao.classList.remove('informaçao_button_tema_A')
  informacao.classList.add('informaçao_button_tema_B')
  informacao.classList.remove('p_A')
  informacao.classList.add('p_B')
})
