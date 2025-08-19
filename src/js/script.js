/* ========================== Pegadas =================================*/

const background = document.getElementById('background');
const numberOfPaws = 100;
const pawImageUrl = '/src/img/peg.png';


function createPaw(i) {
  const paw = document.createElement('div');
  paw.classList.add('paw');
  paw.style.left = Math.random() * 100 + 'vw';
  paw.style.top = -Math.random() * 100 + 'px';
  paw.style.backgroundImage = `url(${pawImageUrl})`;
  paw.style.animationDuration = 10 + Math.random() * 15 + 's';
  paw.style.opacity = Math.random();

  background.appendChild(paw);
}

for (let i = 0; i < numberOfPaws; i++) {
  const delay = Math.random() * 5000;
  setTimeout(() => createPaw(i), delay);
}

/* ==================================================================*/


async function curiousCat() {
  document.getElementById("result").innerHTML = ""

  const curiosidade = await fetch("https://catfact.ninja/fact");
  const result = await curiosidade.json();

  const API_Traducao = await fetch(`https://api.mymemory.translated.net/get?q=${result.fact}&langpair=en|pt`);
  const traducao = await API_Traducao.json();
  const curiosidadeTraduzida = traducao.responseData.translatedText;


 let div = document.getElementById("result");
 let p = document.createElement("p");

  p.innerText = curiosidadeTraduzida
  p.innerHTML += "<br> Gostaria de ver outra curiosidade?"

  div.appendChild(p);

}