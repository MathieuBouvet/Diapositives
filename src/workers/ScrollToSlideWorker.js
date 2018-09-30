import {DataWorker} from "./DataWorker";

export class ScrollToSlideWorker extends DataWorker {

	constructor(state){
		super(state, [
			"mode",
			"scrollPosition",
			"slideHeight",
			"slideWidth",
		]);
	}

	update(){
		var newSlide;
		if(this.state.get("mode") === "vertical"){
			newSlide = Math.max(-1, 
				Math.floor(
					this.state.get("scrollPosition") / this.state.get("slideHeight")
					)
				);
		}else{

		}
		this.state.set({
			currentSlide: newSlide,
		});
	}
}