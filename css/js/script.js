const prefereMenosMovimento = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;


const temMouse = window.matchMedia("(pointer: fine)").matches;

if (!prefereMenosMovimento && temMouse) {
  const raiz = document.documentElement;

  
  let alvoX = 0;
  let alvoY = 0;
  let atualX = 0;
  let atualY = 0;

  
  window.addEventListener("mousemove", (evento) => {
    alvoX = (evento.clientX / window.innerWidth) * 2 - 1;
    alvoY = (evento.clientY / window.innerHeight) * 2 - 1;
  });

  
  function animar() {
    atualX += (alvoX - atualX) * 0.08;
    atualY += (alvoY - atualY) * 0.08;

    raiz.style.setProperty("--mx", atualX.toFixed(3));
    raiz.style.setProperty("--my", atualY.toFixed(3));

    requestAnimationFrame(animar);
  }

  animar();
}
