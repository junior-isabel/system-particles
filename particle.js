/**
 * 
 * @param {*} ctx - context 2d para draw 
 * @param {*} x 
 * @param {*} y 
 */
const Particle = function (ctx, x, y) {
    let position = Vector(x, y)
    let velocity = Vector(Math.random() * 4 -2, Math.random() * 4 - 2)
    const particle =  {
        get position () {
            return position
        }
    }
    let mass = Math.random() * 3 + 2
    particle.draw = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = '#444'
        ctx.arc(position.x, position.y, mass, 0, 2 * Math.PI)
        ctx.fill()
        ctx.restore()
    }
    particle.connect = function (vector, mag, maxLengthMag = 200) {
        ctx.save()
        ctx.beginPath()
        ctx.globalAlpha = 0.23
        ctx.lineWidth = 1 - mag / maxLengthMag
        ctx.moveTo(position.x, position.y)
        ctx.lineTo(vector.x, vector.y)
        ctx.closePath()
        ctx.stroke()

        ctx.restore()
    }
    particle.update = function () {

        position.add(velocity)
    }
    particle.checkEdge2 = function (min, max) {
        if (!max) return
        if (position.x < min.x - mass || position.x > max.x) {
            velocity = Vector(velocity.x * -1, velocity.y)
        }
        if (position.y < min.y - mass || position.y > max.y) {
            velocity = Vector(velocity.x, velocity.y * -1)
        }
    }
    particle.checkEdge = function (obstacle) {

        return (position.x < 0 || position.x > obstacle.x || position.y < 0 || position.y > obstacle.y)
    }
    return particle
}