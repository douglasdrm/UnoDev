const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); toggle.setAttribute('aria-label', 'Abrir menu'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => { filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); }); let visible = 0; projects.forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) visible++; }); document.querySelector('#filter-status').textContent = `${visible} projetos exibidos.`; }));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#brief-form').addEventListener('submit', event => { event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return; const name = form.elements.name.value.trim(); const idea = form.elements.idea.value.trim(); if (!idea) { form.elements.idea.setCustomValidity('Conte um pouco sobre sua ideia.'); form.elements.idea.reportValidity(); return; } const message = `Olá! Vim pelo site da Unodev.${name ? ` Meu nome é ${name}.` : ''}\n\nProjeto: ${form.elements.type.value}\n\n${idea}`; const url = `https://wa.me/5521994076331?text=${encodeURIComponent(message)}`; const link = document.querySelector('#message-link'); link.href = url; link.hidden = false; document.querySelector('#form-status').textContent = 'Sua mensagem está pronta. Abra o WhatsApp para revisar e enviar.'; link.focus(); });
document.querySelector('#idea').addEventListener('input', event => event.target.setCustomValidity(''));
