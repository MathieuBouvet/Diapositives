import {Diapo} from "./Diapo";

(function($){
	$(function(){
		var diapo = new Diapo("#main", "article", ".diapo-slide");
		diapo.displaySlides();
	});
	
})(jQuery);
