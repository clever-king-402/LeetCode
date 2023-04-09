var twoSum = function (nums, target) {
  dix = {};
  var value = 0;
  for (i = 0; i < nums.length; i++) {
    value = target - nums[i];
    if (value in dix) {
      return [i, dix[value]];
    }
    dix[nums[i]] = i;
  }
};

console.log(twoSum([1, 2, 3, 4, 5], 6));
