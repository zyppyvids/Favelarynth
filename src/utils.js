// Used to get a random number (by default between 1 and 5, inclusive)
const random = (min = 1, max = 6, isFloat = false) => 
{
    let number = Math.random() * (max - min) + min;

    return isFloat ? number : Math.floor(number);
};

// Used to determine whether a number is between two
const between = (number, lower, higher) =>
{
    return number >= lower && number <= higher;
};
