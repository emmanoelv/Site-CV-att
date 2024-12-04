// script.js

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }
  
// Alterna entre os modos claro e escuro
function toggleTheme() {
    document.body.classList.toggle('dark');
  
    // Muda o ícone do botão com base no tema ativo
    const switcher = document.getElementById('theme-switcher');
    if (document.body.classList.contains('dark')) {
      switcher.textContent = '☀️'; // Ícone de Sol
    } else {
      switcher.textContent = '🌙'; // Ícone de Lua
    }
  }