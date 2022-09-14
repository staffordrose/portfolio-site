import * as THREE from 'three'

interface GetModal {
  scene: THREE.Scene
  baseColor: number
  actionColor: number
  modalColor: number
  overlayColor: number
}

export default function getModal({
  scene,
  baseColor,
  actionColor,
  modalColor,
  overlayColor,
}: GetModal) {
  const modal = new THREE.Group()
  modal.renderOrder = 0.9
  modal.position.z = -0.9
  scene.add(modal)

  /**
   * Body
   */
  const modalBody = new THREE.Group()
  modalBody.renderOrder = 0.8
  modalBody.position.set(0, -1, 0.1)
  modal.add(modalBody)

  const modalBaseMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    opacity: 0,
    transparent: true,
  })

  // Header
  const modalHeaderGeometry = new THREE.PlaneGeometry(1, 0.3)
  const modalHeader = new THREE.Mesh(modalHeaderGeometry, modalBaseMaterial)
  modalHeader.renderOrder = 0.79
  modalHeader.position.set(-0.7, 0.55, 0.01)
  modalBody.add(modalHeader)

  // Text
  const modalTextGeometry = new THREE.PlaneGeometry(2.4, 0.1)

  const modalText1 = new THREE.Mesh(modalTextGeometry, modalBaseMaterial)
  modalText1.renderOrder = 0.79
  modalText1.position.set(0, 0.2, 0.01)
  modalBody.add(modalText1)

  const modalText2 = new THREE.Mesh(modalTextGeometry, modalBaseMaterial)
  modalText2.renderOrder = 0.79
  modalText2.position.set(-0.7, 0, 0.01)
  modalText2.scale.x = 0.4
  modalBody.add(modalText2)

  // Buttons
  const modalBtnGeometry = new THREE.PlaneGeometry(1.15, 0.4)

  const modalBtn1Material = new THREE.MeshBasicMaterial({
    color: actionColor,
    opacity: 0,
    transparent: true,
  })
  const modalBtn1 = new THREE.Mesh(modalBtnGeometry, modalBtn1Material)
  modalBtn1.renderOrder = 0.79
  modalBtn1.position.set(-0.625, -0.5, 0.01)

  const modalBtn2Material = new THREE.MeshBasicMaterial({
    color: actionColor,
    opacity: 0,
    transparent: true,
  })
  const modalBtn2 = new THREE.Mesh(modalBtnGeometry, modalBtn2Material)
  modalBtn2.renderOrder = 0.79
  modalBtn2.position.set(0.625, -0.5, 0.01)

  modalBody.add(modalBtn1, modalBtn2)

  // Background
  const modalBgGeometry = new THREE.PlaneGeometry(2.6, 1.6)
  const modalBgMaterial = new THREE.MeshBasicMaterial({
    color: modalColor,
    opacity: 0,
    transparent: true,
  })
  const modalBg = new THREE.Mesh(modalBgGeometry, modalBgMaterial)
  modalBg.renderOrder = 0.8
  modalBody.add(modalBg)

  /**
   * Overlay
   */
  const modalOverlayGeometry = new THREE.PlaneGeometry(3, 6.5)
  const modalOverlayMaterial = new THREE.MeshBasicMaterial({
    color: overlayColor,
    opacity: 0,
    transparent: true,
  })
  const modalOverlay = new THREE.Mesh(
    modalOverlayGeometry,
    modalOverlayMaterial,
  )
  modalOverlay.renderOrder = 0.9
  modal.add(modalOverlay)

  return {
    modal,
    modalBody,
    modalBaseMaterial,
    modalBtn1Material,
    modalBtn2,
    modalBtn2Material,
    modalBgMaterial,
    modalOverlayMaterial,
  }
}
