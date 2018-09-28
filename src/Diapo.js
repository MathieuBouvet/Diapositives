export class Diapo {
	constructor(containerSelector, contentSelector, slidesSelector){
		this.containerSelector = containerSelector;
		this.contentSelector = contentSelector;
		this.slidesSelector = slidesSelector;

		this.slides = jQuery(slidesSelector);
	}

	displaySlides(){
		console.log(this.slides);
	}
}