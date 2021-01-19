function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
    
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  let x
  x = 5
  console.log(x)

  let y = 14
  y = y + 1
  let z = x + y

  let output
  output = z
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}