import {StateAttribute} from "./StateAttribute";
import {PseudoState} from "./PseudoState";

export class Diapo {
	constructor(containerSelector, contentSelector, slidesSelector){
		this.containerSelector = containerSelector;
		this.contentSelector = contentSelector;
		this.slidesSelector = slidesSelector;

		this.slides = jQuery(slidesSelector);

		this.state = new PseudoState({
			currentSlide: [0, this.onCurrentSlideChange],
		})

		jQuery(contentSelector).click(this.slideInc);
	}

	displaySlides(){
		console.log(this.slides);
	}

	slideInc = () => {
		console.log(this);
		this.state.set({
			currentSlide: this.state.get("currentSlide")+1,
		});
		console.log("test async");
		this.state.displayMe();
	}

	onCurrentSlideChange = (changed) => {
		console.log(changed.name+" has changed. Was: "+changed.previousValue+". Now: "+changed.newValue);
		console.log(this);
	}
}