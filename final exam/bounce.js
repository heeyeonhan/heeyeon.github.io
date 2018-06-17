// Bounce.js

var COUNT = 20
const array = []
var balls = []
var canvas

var mouseX = 0
var mouseY = 0

const list = document.getElementById('list')
const activeBallstatus = document.getElementById('activeballs')
const deletedBallstatus = document.getElementById('deletedballs')
let active = 0
let deleted = 0

window.onload = function() {
  canvas = document.getElementById('my_canvas')
  canvas.onmousemove = function(evt) {
    var rect = canvas.getBoundingClientRect()
    mouseX = evt.clientX - rect.left
    mouseY = evt.clientY - rect.top
  }
  canvas.onmouseout = function(evt) {
    mouseX = -1
    mouseY = -1
  }

  canvas.onclick = function(evt) {
    for (x = 0; x < balls.length; x++) {
      if (balls[x].click()) {
        const doc = array[x]
        const key = doc.key
        delete doc.key

        doc.status = 'Deleted'
        db.ref('ball/' + key).update(doc)
        balls[x].visible = false
        console.log(doc)
      }
    }
  }

  db.ref('ball').on('child_added', function(data) {
    const doc = data.val()
    doc.key = data.key
    array.push(doc)
    list.innerHTML += `
        <tr>
          <td>${doc.id}</td>
          <td>${doc.color}</td>
          <td>${doc.radius}</td>
          <td>${doc.status}</td>
        </tr>
      `
    balls.push(new Ball(canvas.width, canvas.height, doc))
    doc.status === 'Active' ? active++ : deleted++
    activeBallstatus.innerText = active
    deletedBallstatus.innerText = deleted
    console.log(doc)
  })

  db.ref('ball').on('child_changed', function(data) {
    const doc = data.val()
    list.innerHTML = `
    <tr>
        <th>Ball ID</th>
        <th>Color</th>
        <th>Radius</th>
        <th>Status</th>
    </tr>
    `

    active = 0
    deleted = 0
    array.forEach(element => {
      if (element.id === doc.id) {
        element.status = doc.status
      }
      list.innerHTML += `
        <tr>
          <td>${element.id}</td>
          <td>${element.color}</td>
          <td>${element.radius}</td>
          <td>${element.status}</td>
        </tr>
      `
      element.status == 'Active' ? active++ : deleted++
      activeBallstatus.innerText = active
      deletedBallstatus.innerText = deleted
    })
  })

  myLoop()
}

function myLoop() {
  let ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (x = 0; x < balls.length; x++) {
    balls[x].draw(ctx)
    balls[x].update()
  }
  setTimeout(myLoop, 1000 / 70)
}
