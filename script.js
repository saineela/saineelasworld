const highlight = document.querySelector('.highlight');

function moveHighlight(el) {
  const rect = el.getBoundingClientRect();
  const navRect = el.parentElement.getBoundingClientRect();
  highlight.style.width = rect.width + "px";
  highlight.style.transform = `translate(${rect.left - navRect.left}px, -50%)`;
  highlight.style.opacity = 1;
}

function hideHighlight() {
  highlight.style.opacity = 0;
}

function lightText(e, el) {
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = (x / rect.width) * 100;
  el.style.background = `linear-gradient(90deg,
    #8e24aa 0%,
    #b388ff ${percent-10}%,
    #d1a9ff ${percent}%,
    #b388ff ${percent+10}%,
    #8e24aa 100%)`;
  el.style.webkitBackgroundClip = "text";
  el.style.webkitTextFillColor = "transparent";
}

function resetText(el) {
  el.style.background = "none";
  el.style.webkitBackgroundClip = "initial";
  el.style.webkitTextFillColor = "#8e24aa";
}
