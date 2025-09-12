function startDice(event) {
  event.preventDefault();

  const box = document.getElementById("diceBox");
  box.innerHTML = '<div class="dice-face" id="diceFace"></div>';

  const diceFace = document.getElementById("diceFace");

  let counter = 0;
  const interval = setInterval(() => {
    const random = Math.floor(Math.random() * 6) + 1;
    renderDiceFace(diceFace, random);
    counter++;
    if (counter > 15) {
      clearInterval(interval);

      // Risultato finale
      const finalResult = Math.floor(Math.random() * 6) + 1;
      renderDiceFace(diceFace, finalResult);

      // Dopo 2.5 secondi mostra solo il pulsante ritorna
      setTimeout(() => {
        diceFace.innerHTML = "";
        const resetBtn = document.createElement("a");
        resetBtn.href = "#";
        resetBtn.className = "btn2";
        resetBtn.textContent = "Back";
        resetBtn.onclick = resetDice;
        diceFace.appendChild(resetBtn);
      }, 2500);
    }
  }, 100);
}

function renderDiceFace(container, number) {
  container.innerHTML = "";

  const positions = {
    1: [[50, 50]],
    2: [[25, 25], [75, 75]],
    3: [[25, 25], [50, 50], [75, 75]],
    4: [[25, 25], [25, 75], [75, 25], [75, 75]],
    5: [[25, 25], [25, 75], [50, 50], [75, 25], [75, 75]],
    6: [[25, 25], [25, 50], [25, 75], [75, 25], [75, 50], [75, 75]]
  };

  positions[number].forEach(pos => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = pos[0] + "%";
    dot.style.top = pos[1] + "%";
    container.appendChild(dot);
  });
}

function resetDice(event) {
  event.preventDefault();
  const box = document.getElementById("diceBox");
  box.innerHTML = `
    <h3>Dice Roller</h3>
    <p>A dice that you can roll whenever you want here</p>
    <a href="#" onclick="startDice(event)" class="btn2">Try!</a>
  `;
}
