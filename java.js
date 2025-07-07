document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");
  const msg = document.getElementById("mensagemSucesso");

  // Preenche os campos com dados salvos
  const dadosSalvos = JSON.parse(localStorage.getItem("cadastro")) || {};
  if (dadosSalvos.nome) document.getElementById("nome").value = dadosSalvos.nome;
  if (dadosSalvos.email) document.getElementById("email").value = dadosSalvos.email;
  if (dadosSalvos.pais) document.getElementById("pais").value = dadosSalvos.pais;

  if (dadosSalvos.genero) {
    const genero = document.querySelector(`input[name="genero"][value="${dadosSalvos.genero}"]`);
    if (genero) genero.checked = true;
  }

  if (dadosSalvos.interesses) {
    dadosSalvos.interesses.forEach(valor => {
      const checkbox = document.querySelector(`input[name="interesse"][value="${valor}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }

  // Envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede envio real

    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    const dados = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      pais: document.getElementById("pais").value,
      genero: document.querySelector('input[name="genero"]:checked')?.value,
      interesses: Array.from(document.querySelectorAll('input[name="interesse"]:checked')).map(i => i.value)
    };

    localStorage.setItem("cadastro", JSON.stringify(dados));

    msg.textContent = "✅ Seus dados foram enviados com sucesso!";
    form.reset();
  });
});
