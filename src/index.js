import {Diapo} from "./Diapo";
import {PseudoState} from "./PseudoState";

(function($){
	$(function(){
		var diapo = new Diapo("#main", "article", ".diapo-slide");
		diapo.displaySlides();
		diapo.state.displayMe();

	});
	
})(jQuery);
