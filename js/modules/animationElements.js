export default function initAnimation(){const a=new IntersectionObserver((function(a){a.forEach((a=>{const i=a.target;a.isIntersecting&&(i.classList.contains("init-animate-1")?i.classList.add("animate-animate-1"):i.classList.contains("init-animate-2")?i.classList.add("animate-animate-2"):i.classList.contains("init-animate-3")?i.classList.add("animate-animate-3"):i.classList.contains("init-animate-4")?i.classList.add("animate-animate-4"):i.classList.contains("init-animate-5")?i.classList.add("animate-animate-5"):i.classList.contains("init-reverse-animation")&&i.classList.add("animate-reverse-animation"),i.style.opacity="1")}))}),{threshold:.1,rootMargin:"0px 0px -5% 0px"});Array.from(document.querySelectorAll(".init-animate-1, .init-animate-2, .init-animate-3, .init-animate-4, .init-animate-5, .init-reverse-animation")).forEach((i=>{i.style.opacity="0",a.observe(i)}))}