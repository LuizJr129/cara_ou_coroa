function sorteador(event, moeda) {
  event.preventDefault();

  let sorteado = Math.floor(Math.random() * 2) + 1;

  const imagem = document.getElementById("Imagem");
  const Score = document.getElementById("Score");
  const card = document.getElementById("card");

  let valorAtual = Number(Score.textContent);

  if (sorteado == 1) {
    if (moeda === "Cara") {
      Score.textContent = valorAtual + 10;
    } else {
      Score.textContent = valorAtual - 10;
      valorAtual = valorAtual - 10;
    }
    imagem.src = "../fotos/cara.png";
  }
  if (sorteado == 2) {
    if (moeda === "Coroa") {
      Score.textContent = valorAtual + 10;
      valorAtual = valorAtual + 10;
    } else {
      Score.textContent = valorAtual - 10;
      valorAtual = valorAtual - 10;
    }
    imagem.src = "../fotos/coroa.png";
  }

  if (valorAtual < 0) {
    Score.style.color = "#DC3545";
    card.style.border = "1px solid #DC3545";
  } else {
    Score.style.color = "#1C7ED6";
    card.style.border = "1px solid #1c7ed6";
  }
}
