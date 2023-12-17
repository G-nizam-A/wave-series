document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i+1}`] = new Swiper(n, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125
	})
})
bindSwipers(slider1, slider2, slider3, slider4);

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content",{
   delay: -0.2,
   marginTop: "0%"
})

// document.addEventListener("DOMContentLoaded", function() {
// 	// Simulate content loading
// 	simulateContentLoading();
//   });
  
//   function simulateContentLoading() {
// 	const progressBar = document.querySelector(".progress-bar");
// 	const preloader = document.querySelector(".preloader");
// 	const mainContent = document.querySelector("#mainContent");
  
// 	let progress = 0;
// 	const interval = setInterval(function() {
// 	  progress += 5; // Adjust the increment based on your loading progress
// 	  progressBar.style.width = progress + "%";
  
// 	  if (progress >= 100) {
// 		clearInterval(interval);
// 		preloader.style.display = "none";
// 		mainContent.style.display = "block";
// 	  }
// 	}, 100); // Adjust the interval based on your loading progress
//   }

document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})


  
document.addEventListener("DOMContentLoaded", function() {
	// Simulate content loading
	setTimeout(function() {
	  // Hide preloader
	  document.querySelector(".preloader").style.display = "none";
	  
	  // Show main content
	//   document.querySelector("#mainContent").style.display = "block";
	}, 2000); // Adjust the timeout value based on your content loading time
  });