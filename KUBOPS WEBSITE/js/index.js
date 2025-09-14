const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('is-visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.cards-container .cards').forEach(c=>obs.observe(c));

  (function(){
    const btn = document.querySelector('.kb-menu-toggle');
    const drawer = document.getElementById('kbDrawer');
    const closeBtn = drawer.querySelector('.kb-drawer__close');
    const backdrop = document.getElementById('kbBackdrop');

    function openDrawer(){
      drawer.classList.add('is-open');
      backdrop.hidden = false;
      btn.setAttribute('aria-expanded','true');
      drawer.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer(){
      drawer.classList.remove('is-open');
      backdrop.hidden = true;
      btn.setAttribute('aria-expanded','false');
      drawer.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);
    window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeDrawer(); });
  })();