<template>
  <div class="skills-section-wrapper">
    <section class="skills-section">
      <div class="content-container">
        <div class="skills-title-container">
          <h2 class="skills-title">Skills</h2>
          <div class="skills-line">
            <img src="https://via.placeholder.com/100x20/9e14fa/ffffff?text=Deco1" alt="Decoração 1"
              style="z-index: 2" />
            <img src="https://via.placeholder.com/100x20/574a68/ffffff?text=Deco2" alt="Decoração 2"
              style="z-index: 1" />
          </div>
        </div>

        <!-- PRIMEIRA LINHA -->
        <div class="skills-grid-container">
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo"
                class="skill-logo" />
              <p class="skill-name">HTML</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo"
                class="skill-logo" />
              <p class="skill-name">CSS</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript logo" class="skill-logo" />
              <p class="skill-name">JavaScript</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript logo" class="skill-logo" />
              <p class="skill-name">TypeScript</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React logo"
                class="skill-logo" />
              <p class="skill-name">React</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js logo"
                class="skill-logo" />
              <p class="skill-name">Vue.js</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap logo" class="skill-logo" />
              <p class="skill-name">Bootstrap</p>
            </a>
          </div>
        </div>

        <!-- SEGUNDA LINHA-->
        <div class="skills-grid-container">
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python logo"
                class="skill-logo" />
              <p class="skill-name">Python</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C# logo"
                class="skill-logo" />
              <p class="skill-name">C#</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL logo"
                class="skill-logo" />
              <p class="skill-name">MySQL</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma logo"
                class="skill-logo" />
              <p class="skill-name">Figma</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git logo"
                class="skill-logo" />
              <p class="skill-name">Git</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                alt="Photoshop logo" class="skill-logo" />
              <p class="skill-name">Photoshop</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                alt="Illustrator logo" class="skill-logo" />
              <p class="skill-name">Illustrator</p>
            </a>
          </div>
        </div>

        <!-- ÚLTIMA LINHA -->
        <div class="skills-last-row">
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clipstudio/clipstudio-original.svg"
                alt="Clip Studio Paint logo" class="skill-logo" />
              <p class="skill-name">ClipStudio</p>
            </a>
          </div>
          <div class="skill-card">
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gamemakerstudio/gamemakerstudio-original.svg"
                alt="GameMaker logo" class="skill-logo" />
              <p class="skill-name">GameMaker</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.skills-section-wrapper {
  background-color: var(--cor-fundo);
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.skills-section {
  background-color: var(--cor-branca);
  width: 100%;
  padding: 80px 0 110px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: none;
}

.content-container {
  max-width: 1400px;
  width: 95%;
  margin: 0 auto;
}

.skills-title-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.skills-title {
  font-family: 'Poppins', sans-serif;
  color: var(--roxo-claro);
  font-size: 3em;
  font-weight: 900;
  margin: 0;
}

.skills-line {
  position: relative;
  width: 100px;
  height: 20px;
  margin-top: 10px;
}

.skills-line img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  top: 0;
  left: 0;
}

.skills-grid-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 25px;
  width: 100%;
  margin-top: 40px;
  justify-content: center;
}

.skills-last-row {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 25px;
  margin-top: 30px;
}

.skill-card {
  background-color: var(--cor-branca);
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, border 0.3s ease;
  border: 2px solid var(--roxo-desligado);
}

.skill-card:hover {
  background-color: var(--cor-fundo);
  transform: scale(1.1);
  border: 2px solid transparent;
}

.skill-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: filter 0.3s ease, color 0.3s ease;
  padding-top: 15px;
}

.skill-card a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

img.skill-logo {
  filter: grayscale(100%) brightness(0.6);
}

i.skill-logo {
  color: var(--roxo-escuro);
}

.skill-card:hover img.skill-logo {
  filter: grayscale(0%);
}

.skill-card:hover i.skill-logo {
  color: var(--amarelo);
}

.skill-name {
  margin-top: 15px;
  font-weight: 900;
  font-size: 0.9em;
  color: var(--roxo-escuro);
  text-align: center;
  transition: color 0.3s ease;
  text-decoration: none;
  font-style: italic;
  font-family: 'Poppins', sans-serif;
}

.skill-card:hover .skill-name {
  color: var(--cor-branca);
}


@media (max-width: 1024px) {
  .skills-grid-container {
    flex-wrap: wrap;
  }

  .skill-card {
    width: calc((100% - 6 * 25px) / 7);
    height: 120px;
    padding: 15px;
  }

  .skills-last-row .skill-card {
    width: calc((100% - 25px) / 2);
  }

  .skill-logo {
    width: 65px;
    height: 65px;
  }
}

@media (max-width: 768px) {
  .skills-grid-container {
    flex-basis: 100%;
  }

  .skill-card {
    width: 100px;
    height: 100px;
    padding: 12px;
  }

  .skill-logo {
    width: 55px;
    height: 55px;
  }

  .skills-title {
    font-size: 2.5em;
  }
}

@media (max-width: 480px) {
  .skills-grid-container {
    gap: 15px;
  }

  .skill-card {
    width: 80px;
    height: 80px;
    padding: 8px;
  }

  .skill-logo {
    width: 45px;
    height: 45px;
  }

  .skill-name {
    font-size: 0.7em;
  }

  .skills-title {
    font-size: 2em;
  }
}
</style>
