import { personajes } from "./data.js";

const element = document.getElementById('comenzar');
element.addEventListener('click', personajesHarryPotter);
const card = document.getElementById('personajes')

function personajesHarryPotter() {
  let random = Math.floor(Math.random() * personajes.length);

  let personaje = personajes.find((perso) => perso.id == parseInt(random));

  card.innerHTML = `
  <div class="container-personaje-card" >
    <div class="personaje-card" >
        <img class="imagen" src="${personaje.image}" alt="personas">
        <div class="letter">
            <li> ${personaje.name}</li>
            <li>${personaje.house || 'Por definir'}</li>
        </div>
        <button id="randomPersonaje" class="random">Nuevo Personaje</button>
    </div>
  </div>
  `;
  const buttonRandom = document.getElementById('randomPersonaje')
  buttonRandom.addEventListener('click', personajesHarryPotter);
}
