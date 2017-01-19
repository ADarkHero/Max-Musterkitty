function mobilenav(){
	var element = document.getElementById("menu");
	style = window.getComputedStyle(element);
	check = style.getPropertyValue("display");
	
	var menu = document.querySelector("#menu");
	var body = document.querySelector("#body");
	var smallmenu = document.querySelector("#smallmenu");
			
	if(check === "none"){
		smallmenu.style.display = "block";
		menu.style.display = "block";
		body.style.overflow = "hidden";
	}
	else {
		smallmenu.style.display = "none";
		menu.style.display = "none";
		body.style.overflow = "visible";
	}
}