function mudarImagem(nomeImagem) {
  var imagem = document.getElementById("imagem-roupa");
  imagem.src = nomeImagem;
}
function cadastrarCliente(event) {
  event.preventDefault();

  var cpfInput = document.getElementById("cpf");
  var cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (!cpfPattern.test(cpfInput.value)) {
    alert("Formato de CPF inválido!");
    return;
  }

  alert("Cliente cadastrado!");
}
