import * as THREE from 'three'

type GetHeader = {
  scene: THREE.Scene
  actionColor: number
  headerColor: number
  logoColor: number
}

export const getHeader = ({
  scene,
  actionColor,
  headerColor,
  logoColor,
}: GetHeader) => {
  const header = new THREE.Group()
  header.position.set(0, 3, 0.5)
  scene.add(header)

  /**
   * Logo
   */
  const logoGeometry = new THREE.CircleGeometry(0.18, 6)
  const logoMaterial = new THREE.MeshBasicMaterial({ color: logoColor })
  const logo = new THREE.Mesh(logoGeometry, logoMaterial)
  logo.position.set(-1.2, 0, 0.01)
  header.add(logo)

  /**
   * Menu button
   */
  const menuBtnGeometry = new THREE.PlaneGeometry(0.4, 0.4)
  const menuBtnMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
  })
  const menuBtn = new THREE.Mesh(menuBtnGeometry, menuBtnMaterial)
  menuBtn.position.set(1.2, 0, 0.01)
  header.add(menuBtn)

  /**
   * Background
   */
  const headerBgGeometry = new THREE.PlaneGeometry(3, 0.5)
  const headerBgMaterial = new THREE.MeshBasicMaterial({ color: headerColor })
  const headerBg = new THREE.Mesh(headerBgGeometry, headerBgMaterial)
  header.add(headerBg)

  return {
    header,
    menuBtn,
    menuBtnMaterial,
    headerBgMaterial,
    logoMaterial,
  }
}
