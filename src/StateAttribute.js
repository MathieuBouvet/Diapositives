export class StateAttribute {
	constructor(container, value, name="state"){
		this.container = container;
		this.value = value;
		this.name = name;
	}

	set(value, forceSync=false){
		if(!forceSync){
			setTimeout( () => {
				this.set(value, true);
			}, 0);
		}else{
			if(this.value != value){
					this.container.stateChanged(this.name, value);
			}
			this.value = value;
		}
	}


}