// Your code here
const dodger = document.getElementById("dodger");

//dodger.style.backgroundColor = "";
dodger.style.bottom = "0px";
//dodger.style.up = "200px"
dodger.style.left = "180px";

// document.addEventListener("keydown", function (event) {
//     console.log(event);
//   });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        console.log(e.key)
      moveDodgerLeft();
    }
  });









  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right >= 0 && right <=360 ) {
      dodger.style.left = `${right + 1}px` 
      
    }

  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        console.log(e.key)
      moveDodgerRight();
    }
  });





  function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.replace("px", "");
    const up = parseInt(upNumbers, 10);
  
    if (up >= 0 && up <= 380) {
      dodger.style.bottom = `${up + 1}px` 
      console.log(dodger.style.bottom = `${up + 1}px` )
      
    }

  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        console.log(e.key)
      moveDodgerUp();
    }
  });





  function moveDodgerDown() {
    const downNumbers = dodger.style.bottom.replace("px", "");
    const down = parseInt(downNumbers, 10);
    
    if (down >= 1 && down !== -1 ) {
      dodger.style.bottom = `${down - 1}px` 
      console.log(dodger.style.bottom = `${down - 1}px` )
    }

  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
        console.log(e.key)
      moveDodgerDown();
    }
  });
  