import * as THREE from 'three'

interface GetScreen {
  scene: THREE.Scene
  screenColor: number
}

export default function getScreen({ scene, screenColor }: GetScreen) {
  const sx = -1.5
  const sy = -3.25
  const sw = 3
  const sh = 6.5
  const sr = 0.125

  const screenShape = new THREE.Shape()
    .moveTo(sx, sy + sr)
    .lineTo(sx, sy + sh - sr)
    .quadraticCurveTo(sx, sy + sh, sx + sr, sy + sh)
    .lineTo(sx + sw - sr, sy + sh)
    .quadraticCurveTo(sx + sw, sy + sh, sx + sw, sy + sh - sr)
    .lineTo(sx + sw, sy + sr)
    .quadraticCurveTo(sx + sw, sy, sx + sw - sr, sy)
    .lineTo(sx + sr, sy)
    .quadraticCurveTo(sx, sy, sx, sy + sr)

  const screenGeometry = new THREE.ShapeBufferGeometry(screenShape)
  const screenMaterial = new THREE.MeshBasicMaterial({
    color: screenColor,
  })
  const screen = new THREE.Mesh(screenGeometry, screenMaterial)
  scene.add(screen)

  return {
    screenShape,
    screenMaterial,
  }
}
