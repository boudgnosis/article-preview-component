const BTN_SHARE = document.getElementById("btn-share");
const MENU_SHARE = document.getElementById('menu-share')

BTN_SHARE.addEventListener("click", () => {
		BTN_SHARE.classList.toggle("active")
		MENU_SHARE.classList.toggle("menu__share-active");
});
