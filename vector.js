/**
 * 
 * @param {*} x - coordenada x do vector 
 * @param {*} y - coordenada y do vector
 */
const Vector = function (x, y) {

  const vector = {
    get x() {
      return x
    },
    get y() {
      return y
    },
    get mag () {
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    }
  }

  /**
   * 
   * @param {*} v - vector para add a este vector 
   */
  vector.add = function (v) {
    x += v.x
    y += v.y
  }
  /**
   * 
   * @param {*} v - vector para sub a este vector 
   */
  vector.sub = function (v) {
    x += v.x
    y += v.y
  }
  /**
   * 
   * @param {*} k - number escalar para multiplar o vector 
   */
  vector.mult = function (k) {
    x *= k
    y *= k
  }
  /**
   * 
   * @param {*} k - number escalar para div o vector 
   */
  vector.div = function (k) {
    if (k !== 0) {
      x /= k
      y /= k
    }
    return vector
  }
  vector.normalize = function () {
    let mag = vector.mag
    if (mag !== 0) {
      x /= mag
      y /= mag
    }
  }
  vector.get = function () {
    return Vector(x, y)
  }

  return vector
}
/**
 * 
 * @param {*} v1 - vector  
 * @param {*} v2 - vector
 * @return {*} return um novo vector
 */
Vector.add = function (v1, v2) {
  return Vector(v1.x + v2.x, v1.y + v2.y)
}

Vector.sub = function (v1, v2) {
  return Vector(v1.x - v2.x, v1.y - v2.y)
}

Vector.mult = function (v1, k) {
  return Vector(v1.x * k, v1.y * k)
}

Vector.div = function (v1, k) {
  if (k === 0) return Vector(v1.x, v1.y)
  return Vector(v1.x / k, v1.y / k)
}

Vector.normalize = function (v1, v2) {
  let vector = Vector.sub(v1, v2)
  vector.normalize()
  return vector
}