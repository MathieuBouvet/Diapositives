
export class DataWorker {

	constructor(state, dataToRegister){
		this.state = state;
		for(let i=0 ; i<dataToRegister.length ; i++){
			this.state.registerObserver(dataToRegister[i], this.update.bind(this));
		}
	}

	update(){
		console.log("Must be overridden in a child class");
	}
}