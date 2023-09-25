const htmlLevel = Number(prompt('Vyjářite svoji HTML úroveň jako číslo 0–100'));
const cssLevel = Number(prompt('Vyjářite svoji HTML úroveň jako číslo 0–100'));
const jsLevel = Number(prompt('Vyjářite svoji HTML úroveň jako číslo 0–100'));
const updateSkill = (percent, skillId) => {
    console.log(percent);
    const el = document.querySelector(`#${skillId}`);
    if (!el) {
        return 'Uncorrect element id';
    }
    const valueEl = el.querySelector('.skill__value');
    if (!valueEl) {
        el.innerHTML += '<div class="skill-error">There is no value element</div>';
        return;
    }
    if (Number.isNaN(percent) || percent < 0 || percent > 100) {
        el.innerHTML += `<div class="skill-error">The value ${percent} isn't correct percent</div>`;
        return;
    }
    valueEl.textContent = `${percent} / 100`;
    const progressEl = el.querySelector('.skill__progress');
    if (!progressEl) {
        el.innerHTML += '<div class="skill-error">There is no progress element</div>';
        return;
    }
    progressEl.style.width = percent + '%';
}
updateSkill(htmlLevel, 'skill1');
updateSkill(cssLevel, 'skill2');
updateSkill(jsLevel, 'skill3');