import {PseudoState} from "./PseudoState";
import {ScrollObserver} from "./workers/ScrollObserver";

export class Diapo {
	constructor(containerSelector, contentSelector, slidesSelector){
		this.containerSelector = containerSelector;
		this.contentSelector = contentSelector;
		this.slidesSelector = slidesSelector;

		this.slides = jQuery(slidesSelector);

		this.state = new PseudoState();
		this.testDataWorker = new ScrollObserver(this.state, ["currentSlide"]);
		this.state.displayMe();

		jQuery(contentSelector).click(this.slideInc);
	}

	displaySlides(){
		console.log(this.slides);
	}

	slideInc = () => {
		console.log(this);
		this.state.set({
			currentSlide: this.state.get("currentSlide")+1,
		}, true);
		console.log("test async");
		this.state.displayMe();
	}

	onCurrentSlideChange = (changed) => {
		console.log(changed.name+" has changed. Was: "+changed.previousValue+". Now: "+changed.newValue);
		console.log(this);
	}

	onTestChange = (changed) => {
		console.log(changed.newValue);
	}
}