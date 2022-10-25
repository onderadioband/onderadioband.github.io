// @ts-nocheck
// @ts-ignore
//const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

gsap.from(".about-content", {
  opacity: 0,
  scale: 0.7,
  duration: 4,
  ease: Power3.easeOut,
})

gsap.from(".about-img", {
  opacity: 0,
  scale: 0.7,
  duration: 4,
  ease: Power3.easeOut,
})

var listen = document.getElementById("listen-div")
listen.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#music", offsetY: 70 },
  })
})
