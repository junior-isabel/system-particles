
let requestFrameId
const ctx = document.querySelector('#canvas').getContext('2d')
const env = Vector(ctx.canvas.width, ctx.canvas.height)
const systemParticle = SystemParticle(ctx, 100)

/**
 * function principal para inicializar o projecto
 */

function main () {
    systemParticle.start()
   loop()

}

function loop () {
    cancelAnimationFrame(requestFrameId)
    requestFrameId = requestAnimationFrame(loop)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    systemParticle.run()

}


requestAnimationFrame(main)