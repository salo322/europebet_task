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
				
				// let slidesArray = Array.from(slides);
				// slidesArray.forEach((slide)=>{
				// 	console.log(slidesArray.indexOf(document.querySelector(".active")))
				// 	let index = slidesArray.indexOf(document.querySelector(".active"))
					    
				// 	if(slide.classList.contains('active')){
		
				// 		lines1[index].style.background = '#fff'
				// 		lines1[index].style.opacity = '1'
				// 		lines2[index].style.background = '#fff'
				// 		lines2[index].style.opacity = '1'
				// 		lines3[index].style.background = '#fff'
				// 		lines3[index].style.opacity = '1'
				// 	}if(slide.classList.contains("next")){
				// 		lines1[index].style.background = '#DFCDF8'
				// 		lines1[index].style.opacity = '0.6'
				// 		lines2[index].style.background = '#DFCDF8'
				// 		lines2[index].style.opacity = '0.6'
				// 		lines3[index].style.background = '#DFCDF8'
				// 		lines3[index].style.opacity = '0.6'
				// 	}if(slide.classList.contains("prev")){
				// 		lines1[index].style.background = '#DFCDF8'
				// 		lines1[index].style.opacity = '0.6'
				// 		lines2[index].style.background = '#DFCDF8'
				// 		lines2[index].style.opacity = '0.6'
				// 		lines3[index].style.background = '#DFCDF8'
				// 		lines3[index].style.opacity = '0..6'
				// 	}
				// })
			});
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 3) {
				next = 0;
			}

			if (prev == -1) {
				prev = 2;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}

