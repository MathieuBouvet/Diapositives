import {Diapo} from "./Diapo";
import {PseudoState} from "./PseudoState";

(function($){
	$(function(){
		var arr = [1,2];
		const [ test1, test2 ] = arr;
		console.log(test1);
		var diapo = new Diapo("#main", "article", ".diapo-slide");
		diapo.displaySlides();
		diapo.state.displayMe();

	});
	
})(jQuery);
