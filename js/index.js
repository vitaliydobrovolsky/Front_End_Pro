const anyNumbers = [1,2,3,4,5,6,10,11,14,18,19,57,53,59,105,189,145,1025, 998, 587, 558, 6598]

const evenNumbers = anyNumbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers)