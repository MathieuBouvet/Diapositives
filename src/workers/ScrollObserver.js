import {DataWorker} from "./DataWorker";
export class ScrollObserver extends DataWorker {

	constructor(state){
		super(state, ["currentSlide"]);
	}

	update(){
		console.log(this);
	}
}