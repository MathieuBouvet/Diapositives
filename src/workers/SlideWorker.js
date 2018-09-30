import {DataWorker} from "./DataWorker";

export class SlideWorker extends DataWorker {

	constructor(state){
		super(state, [
			"currentSlide",
		]);
	}

	update(){
		var slides = jQuery(".diapo-slide");
		var currentSlide = this.state.get("currentSlide");
		if(currentSlide === slides.length-1){
			slides.removeClass("slide-fixed").width("").height("");
		}else{
			for(let i=0 ; i<slides.length-1 ; i++){
				if(i <= currentSlide){
					this.fixSlide(jQuery(slides[i]));
				}else{
					this.detachSlide(jQuery(slides[i]));
				}
			}
		}
	}

	fixSlide(slide){
		var height = slide.height();
		var width = slide.width();
		slide.addClass("slide-fixed");
		slide.width(width).height(height);
	}
	detachSlide(slide){
		slide.removeClass("slide-fixed");
		slide.width("").height("");
	}
}