var array_one = [
  "apple",
  "dog",
  "cat",
  "food",
  "kite",
  "elephant",
  "lunch",
  "book",
  "laptop",
];
var array_two = ["dog", "goose", "kite", "meal", "laptop"];

// filter creates a new array of whatever items in array_one match array_two using the include method
// which returns true if an item in array_one matches array_two

const filterArrays = array_one.filter((item) => array_two.includes(item));

console.log(filterArrays);
