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


// КАРТА ПОПАП

const mapPopup = document.querySelector(".map-popup"),
			mapPopupClose = mapPopup.querySelector(".map-popup__close"),
			mapPopupOpen = document.querySelector(".information__contacts--img");

const mapPopupEscPress = (evt) => {
	if (evt.keyCode === escBtn) {
		mapPopup.classList.add("map-popup__btn-close");
	}
};
			
const mapOpen = () => {
	mapPopup.classList.remove("map-popup__btn-close");
	document.addEventListener("keydown", mapPopupEscPress);
};

const mapClose = () => {
	mapPopup.classList.add("map-popup__btn-close");
	document.removeEventListener("keydown", mapPopupEscPress);
};

mapPopupOpen.addEventListener("click", () => {
	mapOpen();
});

mapPopupClose.addEventListener("click", (evt) => {
	evt.preventDefault();
	mapClose();
});