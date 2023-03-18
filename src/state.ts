const state = {
    data: {
        nombre:"",
    },
    listeners:[],
    getState() {
        return this.data;
    },
    setState(newState){
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
        }
        console.log("Soy el state, he cambiado", this.dat);
    },
    subscribe(callback: (any) => any){
        this.listeners.push(callback);
    },
};

export { state };