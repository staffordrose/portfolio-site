import * as THREE from 'three'

interface GetNavigation {
  scene: THREE.Scene
  screenColor: number
  baseColor: number
  actionColor: number
  modalColor: number
}

export default function getNavigation({
  scene,
  screenColor,
  baseColor,
  actionColor,
  modalColor,
}: GetNavigation) {
  const navigation = new THREE.Group()
  navigation.position.set(3.25, 0, 0.7)
  scene.add(navigation)

  /**
   * Navigation header
   */
  const navHeaderGeometry = new THREE.PlaneGeometry(1, 0.35)
  const navHeaderMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
  })
  const navHeader = new THREE.Mesh(navHeaderGeometry, navHeaderMaterial)
  navHeader.position.set(-0.9, 3, 0.01)
  navigation.add(navHeader)

  /**
   * Navigation buttons
   */
  const navBtnGeometry = new THREE.PlaneGeometry(2.8, 0.4)
  const navBtnMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
  })

  for (let i = 0; i < 3; i++) {
    const navBtn = new THREE.Mesh(navBtnGeometry, navBtnMaterial)
    navBtn.position.set(0, -i * 0.5 + 2.45, 0.01)
    navigation.add(navBtn)
  }

  /**
   * Cart
   */
  const cart = new THREE.Group()
  cart.position.set(0, -1.05, 0.01)
  navigation.add(cart)

  // Cart header
  const cartHeaderGeometry = new THREE.PlaneGeometry(1, 0.35)
  const cartHeaderMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
  })
  const cartHeader = new THREE.Mesh(cartHeaderGeometry, cartHeaderMaterial)
  cartHeader.position.set(-0.9, 1.825, 0.01)
  cart.add(cartHeader)

  // Cart item
  const cartItem = new THREE.Group()
  cartItem.position.set(0, 0.525, 0.01)
  cart.add(cartItem)

  const cartItemMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    opacity: 0,
    transparent: true,
  })

  const cartItemImg = new THREE.Mesh(
    new THREE.PlaneGeometry(1.25, 1.25),
    cartItemMaterial,
  )
  cartItemImg.position.set(-0.675, 0, 0.01)
  cartItem.add(cartItemImg)

  const cartItemTitle = new THREE.Mesh(
    new THREE.PlaneGeometry(1.25, 0.25),
    cartItemMaterial,
  )
  cartItemTitle.position.set(0.675, 0.5, 0.01)
  cartItem.add(cartItemTitle)

  const cartItemPrice = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 0.3),
    cartItemMaterial,
  )
  cartItemPrice.position.set(0.3, 0.125, 0.01)
  cartItem.add(cartItemPrice)

  const cartItemQty = new THREE.Mesh(
    new THREE.PlaneGeometry(0.4, 0.4),
    cartItemMaterial,
  )
  cartItemQty.position.set(0.675, -0.425, 0.02)
  cartItem.add(cartItemQty)

  const cartItemBtnGeometry = new THREE.PlaneGeometry(1.25, 0.4)
  const cartItemBtnMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
    opacity: 0,
    transparent: true,
  })
  const cartItemBtn = new THREE.Mesh(cartItemBtnGeometry, cartItemBtnMaterial)
  cartItemBtn.position.set(0.675, -0.425, 0.01)
  cartItem.add(cartItemBtn)

  // Cart background
  const cartBgGeometry = new THREE.PlaneGeometry(2.8, 3)
  const cartBgMaterial = new THREE.MeshBasicMaterial({ color: screenColor })
  const cartBg = new THREE.Mesh(cartBgGeometry, cartBgMaterial)
  cart.add(cartBg)

  // Cart buttons
  const cartBtnGeometry = new THREE.PlaneGeometry(1.35, 0.4)

  const cartBtn1Material = new THREE.MeshBasicMaterial({
    color: actionColor,
  })
  const cartBtn1 = new THREE.Mesh(cartBtnGeometry, cartBtn1Material)
  cartBtn1.position.set(-0.725, -1.8, 0.01)

  const cartBtn2Material = new THREE.MeshBasicMaterial({
    color: actionColor,
  })
  const cartBtn2 = new THREE.Mesh(cartBtnGeometry, cartBtn2Material)
  cartBtn2.position.set(0.725, -1.8, 0.01)

  cart.add(cartBtn1, cartBtn2)

  /**
   * Background
   */
  const navigationBgGeometry = new THREE.PlaneGeometry(3, 6.5)
  const navigationBgMaterial = new THREE.MeshBasicMaterial({
    color: modalColor,
  })
  const navigationBg = new THREE.Mesh(
    navigationBgGeometry,
    navigationBgMaterial,
  )
  navigation.add(navigationBg)

  return {
    navigation,
    navHeaderMaterial,
    navBtnMaterial,
    cartHeaderMaterial,
    cartItem,
    cartItemMaterial,
    cartItemBtnMaterial,
    cartBgMaterial,
    cartBtn1,
    cartBtn1Material,
    cartBtn2Material,
    navigationBgMaterial,
  }
}
