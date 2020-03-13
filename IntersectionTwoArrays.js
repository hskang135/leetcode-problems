var intersection = function(nums1, nums2) {
  let set = new Set(nums1);
  for(let item of set) {
    if(!nums2.includes(item)) {
      set.delete(item);
    }
  }
  return [...set];
};

intersection(2, 5);
console.log(intersection);

