import {StateAttribute} from "./StateAttribute";
import {PseudoState} from "./PseudoState";

export class Diapo {
	constructor(containerSelector, contentSelector, slidesSelector){
		this.containerSelector = containerSelector;
		this.contentSelector = contentSelector;
		this.slidesSelector = slidesSelector;

		this.slides = jQuery(slidesSelector);

		this.state = new PseudoState(this, {
			currentSlide: 0,
		})

		jQuery(contentSelector).click(this.slideInc);
	}

	displaySlides(){
		console.log(this.slides);
	}

	slideInc = () => {
		this.state.set({
			currentSlide: 2,
		});
		console.log("test async");
	}

	stateChanged(attrName, newValue){
		console.log("Changed: "+attrName+" new Vallue: "+newValue);
	}
}