$(document).ready(function(){

//--------------  menu  ---------------------------//

$(".fa-bars").click(function(){
  $(".menu").toggleClass("showMenu");
}) 

//-------------  video  -------------------------//

$(".btnPlay").click(function(){
  if ($("#myVideo").get(0).paused){
    $("#myVideo").get(0).play();
    $(".btnPlay").html(`<i class="fas fa-pause"></i>`);
    $(".btnPlay").animate({opacity: "0.3"} ,1000);
  }
  else {
    $("#myVideo").get(0).pause();
    $(".btnPlay").html(`<i class="fas fa-play"></i>`);
    $(".btnPlay").animate({opacity: "1"} ,1000);
  }
  
})

//---------------------  carousel  ---------------//


createQuote();  
  function createQuote(){

    const slides = [ 
        { para: "Quote 2" , author: "Author 2" } ,
        { para: "Quote 3" , author: "Author 3" }
    ]

    for(i=0 ;i < slides.length ; i++){
      var node = document.createElement("div")
      node.classList.add("quote");


      var para = document.createElement("p");
      para.innerHTML = slides[i].para
      node.appendChild(para);

      var foot = document.createElement("h3");
      foot.innerHTML = slides[i].author
      node.appendChild(foot);

      const owlCarousel = document.querySelector(".owl-carousel");
      owlCarousel.append(node);
     
    }
  }
  $(".owl-carousel").owlCarousel({
    loop: true,
    items:1,
    dots: true
    
  });










//-------------------------------------------------//
});