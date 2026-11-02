(()=>{
 const home=document.getElementById('home'),archive=document.getElementById('archive');
 if(home&&archive){
  const show=(isArchive)=>{home.classList.toggle('active',!isArchive);archive.classList.toggle('active',isArchive);const h=document.getElementById(isArchive?'archive-title':'home-title');h.tabIndex=-1;h.focus({preventScroll:true});window.scrollTo(0,0)};
  const syncView=()=>show(window.location.hash==='#archive');
  document.getElementById('enter')?.addEventListener('click',()=>{window.location.hash='archive';syncView()});
  document.getElementById('back')?.addEventListener('click',()=>{window.location.hash='home';syncView()});
  window.addEventListener('hashchange',syncView);
  syncView();
 }
 const stages=[...document.querySelectorAll('[data-stage]')];
 if(stages.length){
  const select=(name)=>{stages.forEach(s=>s.classList.toggle('active',s.dataset.stage===name));window.scrollTo({top:0,behavior:'instant'});let heading=document.querySelector('[data-stage="'+name+'"] h2');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true})}};
  document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.go)));
 }
})();