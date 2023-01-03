import * as THREE from 'three'

type GetNestedPage = {
  scene: THREE.Scene
  screenColor: number
  baseColor: number
  actionColor: number
}

export const getNestedPage = ({
  scene,
  screenColor,
  baseColor,
  actionColor,
}: GetNestedPage) => {
  const nestedPage = new THREE.Group()
  scene.add(nestedPage)

  /**
   * Image
   */
  const nestedPageImgGeometry = new THREE.PlaneGeometry(1.35, 1.35)
  const nestedPageImgMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    opacity: 0,
    transparent: true,
  })
  const nestedPageImg = new THREE.Mesh(
    nestedPageImgGeometry,
    nestedPageImgMaterial,
  )
  nestedPageImg.position.set(0.725, 0.025, -0.5)
  nestedPage.add(nestedPageImg)

  /**
   * Body
   */
  const nestedPageBody = new THREE.Group()
  nestedPageBody.position.set(0, -6.5, -0.3)
  nestedPage.add(nestedPageBody)

  // Close button
  const nestedPageCloseBtnGeometry = new THREE.PlaneGeometry(0.4, 0.4)
  const nestedPageCloseBtnMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
    opacity: 0,
    transparent: true,
  })
  const nestedPageCloseBtn = new THREE.Mesh(
    nestedPageCloseBtnGeometry,
    nestedPageCloseBtnMaterial,
  )
  nestedPageCloseBtn.position.set(-1.2, 2.45, -0.01)
  nestedPage.add(nestedPageCloseBtn)

  // Header
  const nestedPageHeaderGeometry = new THREE.PlaneGeometry(1.75, 0.25)
  const nestedPageHeaderMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    opacity: 0,
    transparent: true,
  })
  const nestedPageHeader = new THREE.Mesh(
    nestedPageHeaderGeometry,
    nestedPageHeaderMaterial,
  )
  nestedPageHeader.position.set(-0.525, 2.675, 0.01)
  nestedPageBody.add(nestedPageHeader)

  // Price
  const nestedPagePriceGeometry = new THREE.PlaneGeometry(0.5, 0.3)
  const nestedPagePriceMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    opacity: 0,
    transparent: true,
  })
  const nestedPagePrice = new THREE.Mesh(
    nestedPagePriceGeometry,
    nestedPagePriceMaterial,
  )
  nestedPagePrice.position.set(1.145, 2.675, 0.01)
  nestedPageBody.add(nestedPagePrice)

  // Button
  const nestedPageBtnGeometry = new THREE.PlaneGeometry(1.35, 0.4)
  const nestedPageBtnMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
    opacity: 0,
    transparent: true,
  })
  const nestedPageBtn = new THREE.Mesh(
    nestedPageBtnGeometry,
    nestedPageBtnMaterial,
  )
  nestedPageBtn.position.set(0.725, 2.125, 0.01)
  nestedPageBody.add(nestedPageBtn)

  // Paragraph
  const nestedPagePara = new THREE.Group()
  nestedPagePara.position.set(0, 1.675, 0.01)
  nestedPageBody.add(nestedPagePara)

  const nestedPageParaItemGeometry = new THREE.PlaneGeometry(2.8, 0.1)
  const nestedPageParaItemMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    opacity: 0,
    transparent: true,
  })

  for (let i = 0; i < 15; i++) {
    if (i % 5 === 4) continue

    const nestedPageParaItem = new THREE.Mesh(
      nestedPageParaItemGeometry,
      nestedPageParaItemMaterial,
    )

    nestedPageParaItem.position.y = i * (-0.1 - 0.1)

    if (i % 5 === 0) {
      nestedPageParaItem.scale.x = 0.85
      nestedPageParaItem.position.x = 0.207
    } else if (i % 5 === 3) {
      nestedPageParaItem.scale.x = 0.64
      nestedPageParaItem.position.x = -0.5
    }

    nestedPagePara.add(nestedPageParaItem)
  }

  // Related
  const nestedPageRelated = new THREE.Group()
  nestedPageRelated.position.set(0, -2.05, 0.01)
  nestedPageBody.add(nestedPageRelated)

  const nestedPageRelatedItemGeometry = new THREE.PlaneGeometry(1.5, 1.5)
  const nestedPageRelatedItemMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
    opacity: 0,
    transparent: true,
  })

  for (let i = 0; i < 4; i++) {
    const nestedPageRelatedItem = new THREE.Mesh(
      nestedPageRelatedItemGeometry,
      nestedPageRelatedItemMaterial,
    )

    nestedPageRelatedItem.position.set(-0.65 + i * (1.5 + 0.1), 0, 0.02)

    nestedPageRelated.add(nestedPageRelatedItem)
  }

  // Background
  const nestedPageBgGeometry = new THREE.PlaneGeometry(3, 6)
  const nestedPageBgMaterial = new THREE.MeshBasicMaterial({
    color: screenColor,
    opacity: 0,
    transparent: true,
  })
  const nestedPageBg = new THREE.Mesh(
    nestedPageBgGeometry,
    nestedPageBgMaterial,
  )
  nestedPageBody.add(nestedPageBg)

  return {
    nestedPageImg,
    nestedPageImgMaterial,
    nestedPageCloseBtn,
    nestedPageCloseBtnMaterial,
    nestedPageBody,
    nestedPageHeaderMaterial,
    nestedPagePriceMaterial,
    nestedPageBtn,
    nestedPageBtnMaterial,
    nestedPageParaItemMaterial,
    nestedPageRelated,
    nestedPageRelatedItemMaterial,
    nestedPageBgMaterial,
  }
}
