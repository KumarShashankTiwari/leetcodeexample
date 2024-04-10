//HCF or Highest Common Factor is the greatest number which divides each of the two or more numbers.
// HCF is also called the Greatest Common Measure (GCM)

function findHCF(numbers) {
  // If only one number is given, its HCF is itself
  if (numbers.length === 1) {
    return numbers[0];
  }

  // Sort the numbers in ascending order
  numbers.sort(function(a, b) {
    return a - b;
  });

  // Find the HCF of the two smallest numbers
  var a = numbers[0];
  var b = numbers[1];
  var hcf = 1;
  for (var i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }

  // Recursively find the HCF of the remaining numbers
  var remaining = numbers.slice(2);
  remaining.unshift(hcf);
  return findHCF(remaining);
}

// Example usage:
var numbers = [12, 24, 36];
var hcf = findHCF(numbers);
console.log(hcf); // Output: 12
