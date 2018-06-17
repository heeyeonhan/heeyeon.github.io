// Ball  - ball.js

function Ball(width, height, config) {
  this.width = width
  this.height = height
  this.config = config
  this.visible = this.config.status === 'Active' ? true : false

  this.x = parseInt(Math.random() * width)
  this.y = parseInt(Math.random() * height)
  this.radius = this.config.radius
  this.color = this.config.color

  this.x_speed = 2 + parseInt(Math.random() * 3)
  this.y_speed = this.x_speed

  this.update = function() {
    if (this.x > this.width - this.radius) this.x_speed = this.x_speed * -1
    if (this.x < this.radius) this.x_speed = this.x_speed * -1
    this.x += this.x_speed

    if (this.y > this.height - this.radius) this.y_speed = this.y_speed * -1
    if (this.y < this.radius) this.y_speed = this.y_speed * -1
    this.y += this.y_speed
  }

  this.draw = function(ctx) {
    if (this.visible) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }

  this.click = function() {
    if (
      Math.abs(mouseX - this.x) < this.radius &&
      Math.abs(mouseY - this.y) < this.radius &&
      this.visible
    ) {
      return true
    }
    return false
  }
}
