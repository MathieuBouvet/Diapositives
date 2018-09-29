import {Diapo} from "./Diapo";

export class PseudoState {

	constructor(stateObject) {
		for (let prop in stateObject){
			this[prop] = {};
			 ([ this[prop].value, this[prop].callback=this.emptyCallback ] = stateObject[prop]);
		}

	}
	emptyCallback(propChanged){
		console.log(propChanged.name+" changed but no callback set");
	}
	displayMe(){
		console.log(this);
	}

	get(propName){
		return this[propName].value;
	}

	set(stateObject, force=false){
		if(force){
			for( let prop in stateObject ){
				if(this[prop] !== undefined && this[prop].value !== stateObject[prop]){
					this[prop].callback({
						name: prop,
						previousValue: this[prop].value,
						newValue: stateObject[prop],
					});
					this[prop].value = stateObject[prop];
				}
			}
		}else{
			setTimeout( () => {
				this.set(stateObject, true);
			});
		}
	}
}