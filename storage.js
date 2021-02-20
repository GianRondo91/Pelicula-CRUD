class UserStorage {

    state = [];

    constructor() {
        console.log('se ha creado una instancia de Store');
        this.state = [];
    }

    async findById(id){  // PROMISE OF INSTACE
        const instance = this.state[id-1];
        if(!instance) {
            return null;
        } 
        return instance
    }

    async updateById(id, object){
        await this.findById(id);
        this.state[id-1] = object;
        return object;
    }

    async deleteById(id){
        return this.updateById(id,null);
    }

    async set(object) {
        this.state.push(object)
        return this.state.length;
    }

    async get(){
        return this.state
        .map((element, index) => element ? {...element, id:index+1} : null)
        .filter((element) => element !== null)
        .slice(-10);
    }

}

module.exports = UserStorage;