
/* ***************************************************Keydown response********************************************************************** */
var keys = document.querySelectorAll('.buttons');
var i;

for (i = 0; keys.length > i; i++) {

    keys[i].addEventListener('click', keyDown)
}


function keyDown() {

    let button = this.innerHTML;
    animation(button);
    keyInsert(button);
}


document.addEventListener('keydown', function (event) {
    if (event.key === '/') {
        console.log('might work with eventlistener')

        keyInsert('÷')
    } else {

        keyInsert(event.key)

    }

})

function keyPr(key) {

    let insertingItem = document.getElementById(key).value;
    console.log('checking the value')
    let index;
    let endingChar;
    let divide;
    let disp = document.querySelector('.dispCalc1')
    let lastChar = disp.innerHTML;

    if (key === '/') {
        key = '÷';
    } else {

        if (lastChar === '0') {
            if (key.match(/\./) && !lastChar.match(/(\+|\*|\-|\÷|\(|\))$/)) {
                document.querySelector('.dispCalc1').insertAdjacentText("beforeend", key);

            } else {
                del();
                document.querySelector('.dispCalc1').insertAdjacentText("beforeend", key);
            }
        } else {

            if (!lastChar.match(/(\+|\*|\-|\÷|\(|\)|\.)$/)) {
                document.querySelector('.dispCalc1').insertAdjacentText("beforeend", key);
            } else {
                if (key.match(/(\+|\*|\-|\÷|\/|\(|\)|\.)$/)) {
                    del();
                    document.querySelector('.dispCalc1').insertAdjacentText("beforeend", key);
                } else {
                    document.querySelector('.dispCalc1').insertAdjacentText("beforeend", key);
                }
            }
        }
    }

}







function keyInsert(key) {

    switch (key) {
        case '1':
            keyPr(key)
            animation(key)

            break;
        case '2':
            keyPr(key)
            animation(key)


            break;
        case '3':
            keyPr(key)
            animation(key)


            break;
        case '4':
            keyPr(key)
            animation(key)


            break;
        case '5':
            keyPr(key)
            animation(key)


            break;
        case '6':
            keyPr(key)
            animation(key)


            break;
        case '7':
            keyPr(key)
            animation(key)


            break;
        case '8':
            keyPr(key)
            animation(key)


            break;

        case '9':
            keyPr(key)
            animation(key)
            break;
        case '0':
            keyPr(key)
            animation(key)


            break;
        case '.':
            keyPr(key)
            animation(key)


            break;
        case '÷':
            console.log(key)

            keyPr(key)
            animation(key)


            break;
        case '+':
            keyPr(key)
            animation(key)


            break;
        case '*':
            keyPr(key)
            animation(key)


            break;
        case '-':
            keyPr(key)
            animation(key)


            break;
        case '=':
            equal();
            animation(key)

            break;
        case 'Enter':
            equal();

            break;
        case '(':
            keyPr(key)
            animation(key)


            break;
        case ')':
            keyPr(key)
            animation(key)


            break;
        case 'Backspace':

            del()
            break;
        default:
            console.log('something is wrong')




    }


}


function animation(key) {
    if (key === '÷') {
        key === '/';
        let activeButton = document.getElementById(key);
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    } else {
        let activeButton = document.getElementById(key);
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}





/* *********************************************CE button functionality*********************************************************************** */

const del = function () {

    let disp = document.querySelector('.dispCalc1')
    let currentChars = disp.innerHTML;
    let del = currentChars.lastIndexOf(currentChars) + currentChars.length - 1;
    del = currentChars.slice(0, del);
    console.log(del)
    disp.innerHTML = del;

}

document.querySelector('.del').setAttribute('onClick', 'del()')


/* clear functionality */

function clearIt() {

    let disp = document.querySelector('.dispCalc1')
    let disp2 = document.querySelector('.dispCalc2')

    let currentChars = disp.innerHTML;
    let del = currentChars.lastIndexOf(currentChars) - currentChars.length;
    del = currentChars.slice(0, del);
    console.log(del)
    disp.innerHTML = del + '0';
    disp2.innerHTML = del + '0';

}

/* rounding up function */

function round() {
    let numb = document.querySelector('.dispCalc2');
    let m = numb.innerHTML;
    m = Math.round(Number(m));
    numb.innerHTML = m;
}

/* **********************************************Math processing*************************************************************** */


const equal = function () {


    let disp = document.querySelector('.dispCalc1');
    let disp2 = document.querySelector('.dispCalc2');

    let replaced = disp.innerHTML.replace(/÷/g, '/')
    let results = eval(replaced);
    console.log(results)

    if (results === NaN) {
        disp2.innerHTML = 'ERROR'
    } else {
        disp2.innerHTML = results;
    }

}



document.querySelector('.equal').setAttribute('onClick', 'equal()')




/* **********************************************square root*************************************************************** */

function square(){
    let num = document.querySelector('.dispCalc2');
    let res = num.innerHTML/2;
    num.innerHTML = res
}

/* **********************************************square root*************************************************************** */


function pow(){
    let num = document.querySelector('.dispCalc2');
    let res = num.innerHTML*num.innerHTML;
    num.innerHTML = res;

}




