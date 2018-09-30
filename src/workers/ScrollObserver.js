import {DataWorker} from "./DataWorker";

export class ScrollObserver extends DataWorker {

	constructor(state){
		super(state, [
			"mode",
			"headerHeight",
			"menuHeight",
		]);

		window.addEventListener('scroll', this.update.bind(this));
	}

	update(){
		var newScrollPosition;
		if(this.state.get("mode") === "vertical"){
			newScrollPosition = window.scrollY - this.state.get("headerHeight") + this.state.get("menuHeight");
		}else{

		}
		this.state.set({
			scrollPosition: newScrollPosition
		});
	}
}