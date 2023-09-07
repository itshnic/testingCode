"use strict";
let basket = document.querySelector(".basket__logo_body"),
	rect = basket.getBoundingClientRect();
let posLeft = rect.left,
	posRight = rect.right,
	posTop = rect.top,
	posBottom = rect.bottom;
console.log(posBottom, posTop, posLeft, posRight);
