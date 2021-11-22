Array.prototype.customArrSort = function() {
    let isSorted = false;

    while (!isSorted) {

        isSorted = true;


        for (let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                let next = this[i + 1]
                this[i + 1] = this[i];

                this[i] = next;
                isSorted = false;

            }

        }

    }
    return this;
}

2, 8, 9, 11, 19

let arr = [9, 8, 2, -8, 11, 19];
console.log(arr);

console.log(arr.customArrSort());