
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const button = document.getElementById("sendInquiryBtn");
  const buttonText = button.querySelector(".button-text");
  const status = document.getElementById("formStatus");


  if (!form) {
    console.error("Contact form not found.");
    return;
  }


  form.addEventListener("submit", async function (event) {

    /*
     * Stop the browser from leaving the website.
     */
    event.preventDefault();


    /*
     * Make sure the browser's built-in
     * validation is satisfied.
     */
    if (!form.checkValidity()) {

      form.reportValidity();

      return;

    }


    /*
     * Clear previous status.
     */

    status.className = "form-status";

    status.textContent = "";


    /*
     * Change button to:
     *
     * Sending...
     */

    button.disabled = true;

    button.classList.add("sending");

    buttonText.textContent = "Sending...";


    /*
     * Collect all form information.
     */

    const formData = new FormData(form);


    try {

      /*
       * Send the form to FormSubmit
       * without leaving the page.
       */

      const response = await fetch(
        form.action,
        {
          method: "POST",

          body: formData,

          headers: {
            "Accept": "application/json"
          }
        }
      );


      /*
       * Check whether FormSubmit
       * accepted the submission.
       */

      if (!response.ok) {

        throw new Error(
          "Unable to submit the inquiry."
        );

      }


      /*
       * SUCCESS
       */

      button.classList.remove("sending");

      buttonText.textContent = "Inquiry Sent Successfully";

      status.className =
        "form-status success";

      status.textContent =
        "Thank you. Your inquiry has been received. Our team will get back to you shortly.";


      /*
       * Clear the form.
       */

      form.reset();


      /*
       * Keep the success message
       * visible for 5 seconds.
       */

      setTimeout(function () {

        button.disabled = false;

        buttonText.textContent = "Send Inquiry";

        status.className = "form-status";

        status.textContent = "";

      }, 5000);


    } catch (error) {

      /*
       * ERROR
       */

      console.error(
        "Form submission error:",
        error
      );


      button.classList.remove("sending");

      button.disabled = false;

      buttonText.textContent = "Try Again";


      status.className =
        "form-status error";

      status.textContent =
        "We could not send your inquiry. Please check your internet connection and try again.";


    }

  });

});
document.addEventListener("DOMContentLoaded",()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];AOS.init({duration:700,once:true,offset:60});setTimeout(()=>$("#pageLoader").classList.add("hide"),500);
const header=$("#siteHeader"),progress=$("#scrollProgress"),back=$("#backTop");window.addEventListener("scroll",()=>{let y=scrollY,max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(y/max*100)+"%";header.classList.toggle("scrolled",y>10);back.classList.toggle("show",y>600)});back.onclick=()=>scrollTo({top:0,behavior:"smooth"});
const menu=$("#menuToggle"),nav=$("#mainNav");menu.onclick=()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"));menu.querySelector("i").className=nav.classList.contains("open")?"fa-solid fa-xmark":"fa-solid fa-bars"};$$(".main-nav a").forEach(a=>a.onclick=()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")});
const theme=$("#themeToggle"),saved=localStorage.getItem("fauna-theme");if(saved==="dark")document.body.classList.add("dark");theme.onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("fauna-theme",document.body.classList.contains("dark")?"dark":"light");theme.querySelector("i").className=document.body.classList.contains("dark")?"fa-solid fa-sun":"fa-solid fa-moon"};
let slide=0,slides=$$(".hero-slide"),dots=$$(".dot");function show(n){slide=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle("active",i===slide));dots.forEach((d,i)=>d.classList.toggle("active",i===slide))}$("#nextSlide").onclick=()=>show(slide+1);$("#prevSlide").onclick=()=>show(slide-1);dots.forEach((d,i)=>d.onclick=()=>show(i));setInterval(()=>show(slide+1),6500);
const counters=$$(".counter");let counted=false;const count=()=>{if(counted)return;let box=$(".stats-section").getBoundingClientRect();if(box.top<innerHeight){counted=true;counters.forEach(c=>{let target=+c.dataset.target,suffix=c.dataset.suffix||"",start=performance.now(),dur=1600;function tick(t){let v=Math.min(target,Math.floor(target*((t-start)/dur)));c.textContent=v.toLocaleString()+suffix;if(v<target)requestAnimationFrame(tick)}requestAnimationFrame(tick)})}};addEventListener("scroll",count);count();
$$(".whatsapp-product").forEach(a=>a.onclick=e=>{e.preventDefault();let p=a.dataset.product;open("https://wa.me/254732973396?text="+encodeURIComponent("Hello Fauna Services Ltd, I would like to inquire about "+p+"."),"_blank")});
let ti=0,tests=$$(".testimonial");function test(n){ti=(n+tests.length)%tests.length;tests.forEach((x,i)=>x.classList.toggle("active",i===ti))}$("#testNext").onclick=()=>test(ti+1);$("#testPrev").onclick=()=>test(ti-1);setInterval(()=>test(ti+1),7000);
const light=$("#lightbox"),li=$("#lightboxImage"),lic=$("#lightboxIcon"),lt=$("#lightboxTitle");$$(".gallery-item").forEach(g=>g.onclick=()=>{let img=g.querySelector("img");lt.textContent=g.dataset.title;lic.className=g.querySelector("i").className;if(img&&img.style.display!=="none"&&img.getAttribute("src")){li.src=img.src;li.style.display="block";lic.style.display="none"}else{li.style.display="none";lic.style.display="block"}light.classList.add("open")});$("#closeLightbox").onclick=()=>light.classList.remove("open");light.onclick=e=>{if(e.target===light)light.classList.remove("open")};
$("#contactForm").onsubmit=e=>{e.preventDefault();let d=new FormData(e.target),subject=encodeURIComponent(d.get("subject")),body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\n\nMessage:\n${d.get("message")}`);location.href=`mailto:faunaservicesltdnkr@gmail.com?subject=${subject}&body=${body}`};$("#newsletterForm").onsubmit=e=>{e.preventDefault();alert("Thank you. Newsletter integration can be connected to FormSubmit or another email service.")};
const sections=$$("main section[id]"),links=$$(".main-nav a");let observer=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+en.target.id))}),{rootMargin:"-35% 0px -55%"});sections.forEach(s=>observer.observe(s))});
