// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$ (document) .ready (function () {
})


// the code isn't run until the browser has finished rendering all the elements
// in the html.
/*console.log()*/

$(function () {
    // TODO: Add a listener for click events on the save button. This code should

    // use the id in the containing time-block as a key to save the user input in
    /*var hiddenBox = $(".btn")*/
    $(".btn").on ("click", function (event) {
      console.log ("buttomclick")
      var time=$(this).parent().attr("id")
      console.log (time)
      var value=$(this).siblings(".description").val()
      console.log(value)
      localStorage.setItem(time,value)


      function colorupdater() {
        var time=dayjs().hour()
        console.log(time)

      } 
      colorupdater()
    })

    $(".btn").on ("click", function (event) {
      console.log ("buttomclick")
      var time=$(this).parent().attr("id")
      console.log (time)
      var value=$(this).siblings(".description").val()
      console.log(value)
      localStorage.setItem(time.value)

      function colorupdator() {
        var time=dayjs().hour()
        console.log(time)
      }
      colorupdater()
    })



  
    // local storage. HINT: What does `this` reference in the click listener
    

    // function? How can DOM traversal be used to get the "hour-x" id of the

    // time-block containing the button that was clicked? How might the id be

    // useful when saving the description in local storage?
    
/*var past = 100;
var present = true;
var future = 80;
    //
    (past>= 100) {
      console.log("past!")
    }

    if (past < 50) {
      console.log(50);
    }

    if(x<50 {
      console.log(50)
    })

    if(expression) === true) {
      console.log(expression1);
    } else {
      console.log("Not Lunchtime!!")
    }

    if(expression) {
      console.log(expression)
    }

    // TODO: Add code to apply the past, present, or future class to each time

    // block by comparing the id to the current hour. HINTS: How can the id

    // attribute of each time-block be used to conditionally add or remove the

    // past, present, and future classes? How can Day.js be used to get the

    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });