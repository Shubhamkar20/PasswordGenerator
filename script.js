

function generatePassword() {
    const inputBox = document.getElementById('Password');
    let btn = document.getElementById('generateBtn');

    let upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let loweLetter = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let specialSymbol = '@#$%^&*()_+`|}{[]></=-';

    let passLength = 12;

    let passUpperGen = upperLetter[Math.floor(Math.random() * (upperLetter.length))];
    let passLowerGen = loweLetter[Math.floor(Math.random() * (loweLetter.length))];
    let passNumGen = num[Math.floor(Math.random() * (num.length))];
    let passSymbol = specialSymbol[Math.floor(Math.random() * (specialSymbol.length))];

    let allChar = passUpperGen + passLowerGen + passNumGen + passSymbol;
    // console.log(Password)
    let Password = '';
    Password += passUpperGen;
    Password += passLowerGen;
    Password += passNumGen;
    Password += passSymbol;

    while (passLength > Password.length) {
        Password += allChar[Math.floor(Math.random() * (allChar.length))]
    }
    inputBox.value = Password;
    // console.log(Password)
}

function copyPass(event) {
    event.preventDefault()
    const inputBox = document.getElementById('Password');
    // if (inputBox.value = null) {
    //     alert('Please Generate a Password.');
    // }
    // else{
    //     inputBox.select();
    //     document.execCommand('copy');
    // }
    inputBox.select();
    document.execCommand('copy');
}
// console.log(upperLetter[Math.random()])