// СЛАЙДЕР СЕРВИСА

const sliderServices = $(document).ready(function() {
	$(".services__list-label button").click(function() {
		$(".services__list-label button").removeClass("toggle");
		$(this).addClass("toggle");
		$(".services__description-item").addClass("description-item")
		let buttonServices = $(this).attr("data-button");
		$(`${".description"}-${buttonServices}`).removeClass("description-item");
	});
});


// МОДАЛЬНОЕ ОКНО

const	modalWindow = document.querySelector(".modal-window"),
			modalBtnSubmit = modalWindow.querySelector(".modal-window__btn"),
			modalBtnClose = modalWindow.querySelector(".modal__close"),
			writeUsBtn = document.querySelector(".write-us__btn"),
			escBtn = 27;

const onPopupEscPress = (evt) => {
	if (evt.keyCode === escBtn) {
		modalWindow.classList.add("modal-window__close");
	}
};

const openPopup = () => {
	modalWindow.classList.remove("modal-window__close");
	document.addEventListener("keydown", onPopupEscPress);
};

const closePopup = () => {
	modalWindow.classList.add("modal-window__close");
	document.removeEventListener("keydown", onPopupEscPress);
};

writeUsBtn.addEventListener("click", (evt) => {
	evt.preventDefault();
	openPopup();
});

modalBtnClose.addEventListener("click", () => {
	closePopup();
});

modalBtnSubmit.addEventListener("click", () => {
	closePopup();
});