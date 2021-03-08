// modal 1

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {

    modal.style.display = "none";
  }
  if (event.target == modal2) {


    modal2.style.display = "none";
  }
  if (event.target == modal3) {

    modal3.style.display = "none";
  }
  if (event.target == modal4) {


    modal4.style.display = "none";
  }



}




// modal 2



var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btns = document.getElementById("modal2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btns.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
}



// modal 3





var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btns = document.getElementById("modal3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btns.onclick = function () {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal3.style.display = "none";
}


/* modal 4  */

var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btns = document.getElementById("modal4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btns.onclick = function () {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal4.style.display = "none";
}



/* ************************************************************************************************************************************ */


/*  countdown timer */



/* build this with functional programming paradigm way. i just need to figure how.
hours, minutes and seconds in an effecient way. */

document.getElementById('go').setAttribute('onclick', 'count()')

function count() {

  let h = Number(document.querySelector('#hr').value);
  let m = Number(document.querySelector('#me').value);
  let s = Number(document.querySelector('#sd').value);


  let timer = setInterval(countd, 1000)

  function countd(timer) {

    let date = new Date();




    let hour = date.getHours() - date.getHours() + h;
    let minute = date.getMinutes() - date.getMinutes() + m;
    let second = date.getSeconds() - date.getSeconds() + s;
    console.log(typeof minute)

    if (hour < 10) {
      hour = '0' + hour
    }
    if (minute < 10) {
      minute = '0' + minute
    }
    if (second < 10) {
      second = '0' + second;
    }

    document.querySelector('#hr').value = hour;
    document.querySelector('#me').value = minute;
    document.querySelector('#sd').value = second;



  }
  countd()
}



/* ************************************************************************************************************************************ */



/* ************************************************************************************************************************************ */
/* plug-in to force the text input elements to take only numbers */

$(document).ready(function () {
  $(".countdownInput").forceNumeric();
});

// forceNumeric() plug-in implementation
jQuery.fn.forceNumeric = function () {
  return this.each(function () {
    $(this).keydown(function (e) {
      var key = e.which || e.keyCode;

      if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
        // numbers   
        key >= 48 && key <= 57 ||
        // Numeric keypad
        key >= 96 && key <= 105 ||
        // comma, period and minus, . on keypad
        key == 190 || key == 188 || key == 109 || key == 110 ||
        // Backspace and Tab and Enter
        key == 8 || key == 9 || key == 13 ||
        // Home and End
        key == 35 || key == 36 ||
        // left and right arrows
        key == 37 || key == 39 ||
        // Del and Ins
        key == 46 || key == 45)
        return true;

      return false;
    });
  });
}

/* ************************************************************************************************************************************ */


/* ************************************************************************************************************************************ */

/*Stopwatch and its button functionalities */



document.querySelector('#start').setAttribute('onclick', 'start()')

function start() {
  document.querySelector('#start').removeAttribute('onclick', 'start()')

  let val = document.querySelector('#display').value;
  let h = val.slice(0, 2);
  let m = val.slice(4, 6);
  let s = val.slice(8, 10);
  if (Number(s) < 10) {
    s = s.slice(-1);
  } else {
    s = s;
  }
  let msec = document.querySelector('#display2').value.slice(1, 3);
  let hv;
  let mv;
  let i;
  let milli;

  if (h === '00' && m === '00' && s === '00') {
    hv = 1;
    mv = 1;
    i = 0;
    milli = 0;
  } else {
    hv = h;
    mv = m;
    i = s;
    milli = msec;

  }

  let timeout = setInterval(myLoop, 10);

  function myLoop(timeout) {


    if (milli < 100 && milli < 10) {
      milli++;
      msec = '0' + milli;
    } else if (milli < 100 && milli > 9) {
      milli++;
      msec = milli;

    } else if (milli > 99) {
      i++
      milli = 0;
    }


    if (i < 10) {
      s = '0' + i;
    } else {
      s = i;
    }


    if (i < 60) {

    } else if (i > 59 && mv < 10) {
      i = 0;
      s = '0' + i;

      m = '0' + (mv++);

    } else if (i > 59 && mv > 9) {
      i = 0;
      s = '0' + i;

      m = mv++;;
    }


    if (mv > 59 && hv < 10) {
      mv = 0;
      h = '0' + (hv++);
    } else if (mv > 59 && hv > 9) {
      mv = 0;
      h = (hv++);
    }
    let disply = h + ': ' + m + ': ' + s;
    let disply2 = '. ' + msec

    $('#display').attr('value', disply)
    $('#display2').attr('value', disply2)


  };



  document.querySelector('#stop').addEventListener('click', () => {
    document.querySelector('#start').setAttribute('onclick', 'start()')
    clearInterval(timeout);
  });


  document.getElementById('reset').addEventListener('click', () => {
    document.querySelector('#start').setAttribute('onclick', 'start()')
    let p = document.getElementById('displayT');
    p.innerHTML = '';
    clearInterval(timeout);
    $('#display').attr('value', '00: 00: 00')
    $('#display2').attr('value', ':00')
  });

  /* when closing the modal it resets as well */
  document.getElementById('close').addEventListener('click', () => {
    let p = document.getElementById('displayT');
    p.innerHTML = '';
    clearInterval(timeout);
    document.querySelector('#display').setAttribute('value', '00: 00: 00')
    document.querySelector('#display2').setAttribute('value', ':00')


  });

};



$('#lap').click(() => {
  let p = document.createElement('P');
  let display = document.getElementById('display').value;
  let display2 = document.getElementById('display2').value;



  p.innerHTML = display + display2;
  document.getElementById('displayT').appendChild(p).setAttribute('class', 'laps');

})

/* ************************************************************************************************************************************ */







/* **********************************************digital clock************************************************ */




function currentTime() {
  const date = new Date(); /* creating object of Date class */
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector("#digitalClock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
  let t = setTimeout(function () { currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime()

/* ************************************************************************************************************ */



/* const temperature = document.querySelector('#temp').innerHTML;
console.log(temperature) */


