/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigspots = big;
    this.medspots = medium;
    this.smallspots = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch(carType){
        case 1:
            if(this.bigspots >= 1){
                this.bigspots--;
                return true;
            } else {
                return false;
            }
        case 2:
            if(this.medspots >= 1){
                this.medspots--;
                return true;
            } else {
                return false;
            }
        case 3:
            if(this.smallspots >= 1){
                this.smallspots--;
                return true;
            } else {
                return false;
            }
        default:
            return 0;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */