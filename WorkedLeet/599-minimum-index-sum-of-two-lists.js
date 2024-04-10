function find(list1, list2) {
  let res = []; // resultant list
  let max_possible_sum = list1.length + list2.length - 2;

  // iterating over sum in ascending order
  for (let sum = 0; sum <= max_possible_sum; sum++) {
    // iterating over one list and check index
    // (Corresponding to given sum) in other list
    for (let i = 0; i <= sum; i++)
      // put common Strings in resultant list
      if (
        i < list1.length &&
        sum - i < list2.length &&
        list1[i] == list2[sum - i]
      )
        res.push(list1[i]);

    // if common String found then break as we are
    // considering index sums in increasing order.
    if (res.length > 0) break;
  }

  // print the resultant list
  for (let i = 0; i < res.length; i++) console.log(res[i] + " ");
}

// Creating list1
let list1 = [];
list1.push("GeeksforGeeks");
list1.push("Udemy");
list1.push("Coursera");
list1.push("edX");

// Creating list2
let list2 = [];
list2.push("Codecademy");
list2.push("Khan Academy");
list2.push("GeeksforGeeks");
list1.push("Udemy");

find(list1, list2);

// This code is contributed by mukesh07.
