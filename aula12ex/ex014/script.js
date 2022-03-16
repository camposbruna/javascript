function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = 'manha-p.png'
    document.body.style.background = '#facc9f'
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = 'tarde-p.png'
    document.body.style.background = '#bb786f'
  } else {
    // Boa noite
    img.src = 'noite-p.png'
    document.body.style.background = '#1d2341'
  }

}
