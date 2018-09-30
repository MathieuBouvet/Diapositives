import {PseudoState} from "./PseudoState";
import {ScrollObserver} from "./workers/ScrollObserver";
import {ScrollToSlideWorker} from "./workers/ScrollToSlideWorker";
import {SlideWorker} from "./workers/SlideWorker";

export class Diapo {
	constructor(containerSelector, contentSelector, slidesSelector){
		this.containerSelector = containerSelector;
		this.contentSelector = contentSelector;
		this.slidesSelector = slidesSelector;

		this.slides = jQuery(slidesSelector);

		this.state = new PseudoState();
		this.scrollObserver = new ScrollObserver(this.state);
		this.scrollToSlide = new ScrollToSlideWorker(this.state);
		this.slideWorker = new SlideWorker(this.state);


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