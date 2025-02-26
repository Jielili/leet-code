
var AnimalShelf = function() {
    this.dogs = []
    this.cats = []
};

/** 
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
    const [id, type] = animal
    if (type === 0) {
        this.cats.push(id)
    } else {
        this.dogs.push(id)
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
    if (!this.cats.length) {
        return this.dequeueDog()
    } else if (!this.dogs.length) {
        return this.dequeueCat()
    } else {
        const cat_id = this.cats[0]
        const dog_id = this.dogs[0]
        if(cat_id < dog_id) {
            return this.dequeueCat()
        } else {
            return this.dequeueDog()
        }
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
    if (this.dogs.length) {
        return [this.dogs.shift(), 1]
    } else {
        return [-1, -1]
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
    if (this.cats.length) {
        return [this.cats.shift(), 0]
    } else {
        return [-1, -1]
    }
};

/** 
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */