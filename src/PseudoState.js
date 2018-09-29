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
		for( let prop in stateObject ){
			if(this[prop] !== undefined){
				this.setSingle(prop, stateObject[prop], force);
			}
		}
	}

	setSingle(name, newValue, force){
		if(this[name].value !== newValue){
			if(force){
				this[name].callback({
					name: name,
					previousValue: this[name].value,
					newValue: newValue,
				});
				this[name].value = newValue;
			}else{
				setTimeout( () => {
					this.setSingle(name, newValue, true);
				})
			}
		}
	}
}