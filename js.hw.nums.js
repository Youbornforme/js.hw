let nums = [4,3,2,7,11,15];
let target = 9;
let counter = []

for (var i = 0; i < nums.length; i++) {
	for (var j = i + 1; j < nums.length; j++){
		if (nums[i] + nums[j] === target) {
			counter[0] = i;
			counter[1] = j;
			break;

		}

	}
}
console.log(counter)
console.log("Because " + nums[counter[0]] + " + " + nums[counter[1]] +" == " + target + ", we return [" + counter + "]")