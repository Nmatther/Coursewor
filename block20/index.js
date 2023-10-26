const form = document.querySelector('form');
const input = document.querySelector('input');
const singleSort = document.getElementById('sortOne');
const sortAll = document.getElementById('sortAll');

const nums = [];
const oddBank = [];
const evenBank = [];

form.addEventListener('submit', (number) => {
    number.preventDefault();
    nums.push(input.value);
    input.value = '';
    render();
});

singleSort.addEventListener('click', (firstEntry) => {
    firstEntry.preventDefault();
    render()

});

sortAll.addEventListener('click', (entries) => {
    entries.preventDefault();
    splitOddAndEven(nums);
    render();
});

function render() {
    const numbersEl = document.querySelector('#numberBank');
    const numBank = nums.join('')
    numbersEl.textContent = numBank;

    const oddsEl = document.querySelector('#odds');
    oddsEl.textContent = returnObject.odd;

    const evenEl = document.querySelector('#evens');
    evenEl.textContent = returnObject.even;
}

function singleSort (nums) {
    // check First element of nums array to see if it is odd or even. Then remove number and add to corrspondign odd or even array
    const firstElement = nums.shift();
    if (firstElement % 2 === 1){
        return evenBank.push(firstElement);
    } else {
        return oddBank.push(firstElement);
    }

}
function splitOddAndEven (nums) {

    // filter out the odd numbers
    const odd = nums.filter((number) => number % 2 === 1);

  // filter out the even numbers
    const even = nums.filter((number) => number % 2 === 0);

    //create an object with the odd and even array in it
    const returnObject = {
        even,
        odd,
    };

    return returnObject;
}
