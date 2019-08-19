// const servicesBtn = document.querySelectorAll(".services__btn");
// const servicesList = document.querySelector(".services__description-list");
// const servicesItem = servicesList.querySelector(".services__description-item");

// servicesBtn.forEach((btn) => {
// 	btn.addEventListener('click', (evt) => {
// 		if (btn === evt.target) {
// 			btn.classList.remove("toggle")
// 	})
// });




$(".services__list-label").on("click", "button", function(){
	$(this).addClass("toggle").siblings().removeClass("toggle");
});