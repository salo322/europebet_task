const rectangles = document.querySelectorAll('.rec');
      rectangles.forEach((rectangle)=>{
		  console.log(rectangle)
		  
		  rectangle.addEventListener('click',()=>{
		

			rectangles.forEach(element => {
				element.classList.remove('activeR')
			});
			  rectangle.classList.add('activeR')
		     if(rectangle.classList.contains('activeR')){
				 console.log(rectangle.childNodes[11])
				 document.querySelectorAll('.underLine').forEach((underline)=>{
					 underline.style.opacity = '0.6'
				 })
				 rectangle.childNodes[11].style.opacity = '1'
			 }
			 if(document.querySelector('.rectangle1').classList.contains('activeR')){
				document.querySelector('.boom_section').style.display = 'block'
				document.querySelector('.egt_section').style.display = 'none'
				document.querySelector('.playNgo_section').style.display = 'none'
			}else if(document.querySelector('.rectangle2').classList.contains('activeR')){
				document.querySelector('.boom_section').style.display = 'none'
				document.querySelector('.egt_section').style.display = 'block'
				document.querySelector('.playNgo_section').style.display = 'none'
			}else if(document.querySelector('.rectangle3').classList.contains('activeR')){
				document.querySelector('.boom_section').style.display = 'none'
				document.querySelector('.egt_section').style.display = 'none'
				document.querySelector('.playNgo_section').style.display = 'block'
			}
		  })
	  })


const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");
		const lines1 = document.querySelectorAll(".line")
		const lines2 = document.querySelectorAll(".line2")
		const lines3 = document.querySelectorAll(".line3")
        
		let current = 0;
		let prev = 2;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => {
				i == 0 ? gotoPrev() : gotoNext()
				
			});
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : current-1 ;

		const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < 3; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next === 3) {
				next = 0;
			}

			if (prev === -1) {
				prev = 2;
			}
           
			console.log(prev,next)
			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}

		const acordion = Array.from(document.getElementsByClassName("accordion"));
		const arrows = document.querySelectorAll('.acordion_inner_div img')
		console.log(arrows)
		acordion.forEach(element => {
			element.addEventListener('click', function() {
				this.classList.toggle("active");
				let index =  acordion.indexOf( this );
				let specificArrow =  arrows[index];
				if(specificArrow.classList.contains('arrow-active')) {
				   specificArrow.classList.remove('arrow-active')
				}
				else {
				   specificArrow.classList.add('arrow-active')
				}
				let panel = this.nextElementSibling;
				panel.style.maxHeight ?  panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
			})
		});



		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:true,
			autoplayTimeout:1000,
			responsive:{
				0:{
					items:1
				},
				300:{
					items:3
				},
				600:{
					items:5
				},
				1000:{
					items:8
				},
				1700:{
					items:12
				}
			}
		})

	

		