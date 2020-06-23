const merge = function(nums1, m, nums2, n) {
  // const mergedAndSorted = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort();
    
  // nums1 = [...mergedAndSorted];
  // console.log(nums1);

  nums1.splice(m);

  nums2.forEach((currentValue) => {
    const insertIndex = nums1.findIndex((value) => currentValue <= value);

    if (insertIndex === -1) nums1.splice(nums1.length, 0, currentValue);
    else nums1.splice(insertIndex, 0, currentValue);
  })

  console.log(nums1);

  return null;
};

const result = merge(
  [1,2,3,0,0,0],
  3,
  [2,5,6],
  3); // expected [1,2,2,3,5,6];
