function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if(fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if(idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src','img/crianca-homem.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src','img/jovem-homem.png')
      } else if (idade < 60) {
        //Adulto
        img.setAttribute('src', 'img/adulto-homem.png')
      } else {
        //Idoso
        img.setAttribute('src', 'img/idoso-homem.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if(idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'img/crianca-mulher.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'img/jovem-mulher.png')
      } else if (idade < 60) {
        //Adulto
        img.setAttribute('src', 'img/adulta-mulher.png')
      } else {
        //Idoso
        img.setAttribute('src', 'img/idoso-mulher.png')
      }
    }    
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
  }
}
