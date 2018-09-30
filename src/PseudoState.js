import {PseudoStateAttribute} from "./PseudoStateAttribute";

export class PseudoState {

	constructor() {
		this.relevantScroll = new PseudoStateAttribute(0);
		this.currentSlide = new PseudoStateAttribute(0);

		

	}
	displayMe(){
		console.log(this);
	}

	get(propName){
		return this[propName].value;
	}

	registerObserver(name, observerCallback){
		if(this[name] !== undefined){
			this[name].registered.push(observerCallback);
		}else{
			console.log("Registration failed: "+name+" does not exist in state.");
		}
	}

	set(stateObject, force=false){
		for( let prop in stateObject ){
			if(this[prop] !== undefined){
				this.setSingle(prop, stateObject[prop], force);
			}
		}
	}

	setSingle(name, newValue, force){
		if(this[name].value !== newValue){
			if(force){
				this[name].value = newValue;
				this.notifyObserversFor(name);
			}else{
				setTimeout( () => {
					this.setSingle(name, newValue, true);
				});
			}
		}
	}

	notifyObserversFor(name){
		var observers = this[name].registered;
		for(let i=0 ; i<observers.length ; i++){
			observers[i]();
		}
	}
}