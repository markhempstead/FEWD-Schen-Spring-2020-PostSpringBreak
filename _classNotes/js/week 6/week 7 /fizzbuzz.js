// FIZZBUZZ

// for each number from 1 through 100
// if the number is divisible by 3 console.log 'Fizz'
// if the number is divisble by 5 console.log "Buzz"
// if the number is divisble by both console.log 'Fizzbuzz'

for (var i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 5 == 0 && i % 3 === 0) {
    console.log("Fizzbuzz");
  } else if (i % 5 === 0) {
    console.log(i + ": Buzz");
  } else if (i % 3 === 0) {
    console.log(i + ": Fizz");
  }
}
