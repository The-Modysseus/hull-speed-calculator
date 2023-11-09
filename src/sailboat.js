class Sailboat{
    constructor(name, length){
        this.name = name;
        this.length = length;
    }
    
    getHullSpeed(){
        return 1.34 * Math.sqrt(this.length);
    }
}