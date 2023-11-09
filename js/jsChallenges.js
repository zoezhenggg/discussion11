// function resetBackground() {
//     document.querySelector('h1').style.backgroundColor = 'white';
// }

// document.querySelector('h1').addEventListener('mouseenter', changeBackground);
// document.querySelector('h1').addEventListener('mouseleave', resetBackground);

function challenge1(element) {
    if (element.checked == true) {
        document.querySelector('#emailDiv').style.display = 'block';
    }
    else {
        document.querySelector('#emailDiv').style.display = 'none';
    }
}

function challenge2(element) {
    if (element.checked == true) {
        document.querySelector('#home').value = document.querySelector('#bill').value;
    }
    console.log('checked');
}
document.querySelector('#sameAddress').addEventListener('click', challenge2);


