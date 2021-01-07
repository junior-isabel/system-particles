/**
 * 
 * @param {*} ctx - contexto 2d para draw 
 * @param {*} n - number de particulas na tela
 */
const SystemParticle = function (ctx, n) {
    const env = Vector(ctx.canvas.width, ctx.canvas.height)
    const system = {}
    let particles = []
    let maxDistanceOfConnect = 120
    system.run = function () {
        system.draw()
    }

    system.start = function () {
        for(let i = 0; i < n; i++) {
            particles.push(Particle(ctx, Math.random() * env.x, Math.random() * env.y))
        }
    }
    system.draw = function () {

        for (let i = 0; i < particles.length; i++) {
            let particle = particles[i]
            particle.draw()
            particle.checkEdge2(Vector(-100, -100), Vector.add(env, Vector(100, 100)))
               

            for (let j = i + 1; j < particles.length; j++) {
               let distance = Vector.sub(particles[i].position, particles[j].position)
               if (distance.mag < maxDistanceOfConnect) {
                   particle.connect(particles[j].position, distance.mag, maxDistanceOfConnect)
               }
            }
            particle.update()
        }

        let counter = n - particles.length
        if (counter) {
            for(let i = 0; i < counter; i++) {
                particles.push(Particle(ctx, Math.random() * env.x, Math.random() * env.y))
            }
        }
    }
    return system
}