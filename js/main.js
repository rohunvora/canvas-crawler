document.addEventListener('DOMContentLoaded', () => {
  console.log("hello!")

  //movement tag
  let movementDisplay = document.getElementById('movement')
  //canvas
  let game = document.getElementById('game')
  //set some canvas configs
  game.setAttribute('height', 400)
  game.setAttribute('width', 800)

  //context
  let ctx = game.getContext('2d');

  const drawBox = (x, y, size, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size)
  }

  drawBox(200, 100, 200, 'hotpink')

  //DRAW A BOX
  //set a fill color
  ctx.fillStyle = 'white'
  //set a line color
  ctx.strokeStyle = 'red'
  //set a line width, defaults to pixels
  ctx.lineWidth = 5;
  //call the fillRect to draw the filled square
  //args (x: number, y: number, w: number, h: number)
  ctx.fillRect(10, 10, 100, 100)
  //call strokeRect to draw the line rectangle
  ctx.strokeRect(10, 10, 100, 100)


})
