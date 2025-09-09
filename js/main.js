document.addEventListener('DOMContentLoaded',()=>{
  const navToggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.top-nav');
  if(navToggle){navToggle.addEventListener('click',()=>nav.classList.toggle('open'));}

  const forms=document.querySelectorAll('form');
  forms.forEach(form=>{form.addEventListener('submit',e=>{
    const email=form.querySelector("input[type='email']");
    if(email && !email.value.includes('@')){e.preventDefault();alert('Enter valid email');}
  });});

  const faders=document.querySelectorAll('.fade-in');
  const appearOptions={threshold:0.2,rootMargin:'0px 0px -50px 0px'};
  const appearOnScroll=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('show');observer.unobserve(entry.target);});},appearOptions);
  faders.forEach(fader=>{appearOnScroll.observe(fader);});
});