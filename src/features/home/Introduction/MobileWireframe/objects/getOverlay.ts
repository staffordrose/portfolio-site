import * as THREE from 'three'

type GetOverlay = {
  overlayScene: THREE.Scene
  screenShape: THREE.Shape
  overlayColor: number
}

export const getOverlay = ({
  overlayScene,
  screenShape,
  overlayColor,
}: GetOverlay) => {
  const overlayShape = new THREE.Shape()
    .moveTo(-20, -20)
    .lineTo(20, -20)
    .lineTo(20, 20)
    .lineTo(-20, 20)
    .lineTo(-20, -20)
  overlayShape.holes.push(screenShape)

  const overlayGeometry = new THREE.ShapeBufferGeometry(overlayShape)
  const overlayMaterial = new THREE.MeshBasicMaterial({
    color: overlayColor,
    opacity: 0.5,
    transparent: true,
  })
  const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
  overlay.position.z = 1.1
  overlayScene.add(overlay)

  return { overlayMaterial }
}
