function findMax (array) {
    function find(array, condition) {
        let target = array[0]
        for (let i = 1; i < array.length; i++) {
        if (condition(target, i))
            target = array[i];
        }
        return target;
    }
    
    let minMaxArray = [];
    let minimum = find(array, (x, y)=>{return y < x;});
    let maximum = find(array, (x, y)=>{return y > x;});
    minMaxArray.push(minimum);
    if (minimum !== maximum) {
        minMaxArray.push(maximum);
    }	
    return minMaxArray;
}
module.exports = findMax; 