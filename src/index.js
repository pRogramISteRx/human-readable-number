module.exports = function toReadable (number) {
    let singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let firstDozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'eight', 'nine'];
    let string = '';
    
    if (number >= 0 && number < 10) {
        string = singleDigits[number];
    } else if (number < 20) {
        string = firstDozen[String(number)[1]];
    } else if (number < 100 && String(number)[1] != 0) {
        string = dozens[String(number)[0]] + ' ' + singleDigits[String(number)[1]];  
    } else if (number < 100 && String(number)[1] == 0) {
        string = dozens[String(number)[0]];
    } else if (String(number)[1] == 0 && String(number)[2] != 0) {
        string = singleDigits[String(number)[0]] + ' hundred ' + singleDigits[String(number)[2]];
    } else if (String(number)[1] == 0 && String(number)[2] == 0) {
        string = singleDigits[String(number)[0]] + ' hundred';
    } else if (String(number)[1] == 1) {
        string = singleDigits[String(number)[0]] + ' hundred ' + firstDozen[String(number)[2]];
    } else if (String(number)[2] == 0) {
        string = singleDigits[String(number)[0]] + ' hundred ' + dozens[String(number)[1]];
    } else {
        string = singleDigits[String(number)[0]] + ' hundred ' + dozens[String(number)[1]] + ' ' + singleDigits[String(number)[2]];
    }
    return string;
}

