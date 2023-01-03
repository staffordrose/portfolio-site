import * as THREE from 'three'

type GetMain = {
  scene: THREE.Scene
  baseColor: number
  actionColor: number
}

export const getMain = ({ scene, baseColor, actionColor }: GetMain) => {
  const main = new THREE.Group()
  main.position.z = 0.1
  scene.add(main)

  /**
   * Carousel
   */
  const carousel = new THREE.Group()
  carousel.position.y = 1.75
  main.add(carousel)

  const carouselItemGeometry = new THREE.PlaneGeometry(2.8, 1.8)
  const carouselItemMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    transparent: true,
  })

  for (let i = 0; i < 4; i++) {
    const carouselItem = new THREE.Mesh(
      carouselItemGeometry,
      carouselItemMaterial,
    )
    carouselItem.position.set(i * 3, 0, 0.01)
    carousel.add(carouselItem)
  }

  /**
   * Grid
   */
  const grid = new THREE.Group()
  grid.position.y = -1.75
  main.add(grid)

  // Heading
  const gridHeadingGeometry = new THREE.PlaneGeometry(1.25, 0.35)
  const gridHeadingMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    transparent: true,
  })
  const gridHeading = new THREE.Mesh(gridHeadingGeometry, gridHeadingMaterial)
  gridHeading.position.set(-0.775, 2.225, 0.01)
  grid.add(gridHeading)

  // Items
  const gridItemGeometry = new THREE.PlaneGeometry(1.35, 1.35)
  const gridItemMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
    transparent: true,
  })
  const gridItemNestedPageMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
    transparent: true,
  })

  for (let i = 0; i < 6; i++) {
    const row = Math.floor(i / 2)
    const col = i % 2

    if (i === 3) {
      const gridItemNestedPage = new THREE.Mesh(
        gridItemGeometry,
        gridItemNestedPageMaterial,
      )
      gridItemNestedPage.position.set(
        col === 0 ? -0.725 : 0.725,
        row * -1.45 + 1.225,
        0.01,
      )
      grid.add(gridItemNestedPage)
    } else {
      const gridItem = new THREE.Mesh(gridItemGeometry, gridItemMaterial)
      gridItem.position.set(
        col === 0 ? -0.725 : 0.725,
        row * -1.45 + 1.225,
        0.01,
      )
      grid.add(gridItem)
    }
  }

  /**
   * Call to action
   */
  const callToAction = new THREE.Group()
  callToAction.position.y = -4.75
  main.add(callToAction)

  // Heading
  const callToActionHeadingGeometry = new THREE.PlaneGeometry(1.25, 0.25)
  const callToActionHeadingMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
  })
  const callToActionHeading = new THREE.Mesh(
    callToActionHeadingGeometry,
    callToActionHeadingMaterial,
  )
  callToAction.add(callToActionHeading)

  // Subheading 1
  const callToActionSubGeometry = new THREE.PlaneGeometry(1.75, 0.15)
  const callToActionSubMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
  })

  const callToActionSub1 = new THREE.Mesh(
    callToActionSubGeometry,
    callToActionSubMaterial,
  )
  callToActionSub1.position.y = -0.3
  callToAction.add(callToActionSub1)

  // Subheading 2
  const callToActionSub2 = new THREE.Mesh(
    callToActionSubGeometry,
    callToActionSubMaterial,
  )
  callToActionSub2.position.y = -0.55
  callToActionSub2.scale.x = 0.5
  callToAction.add(callToActionSub2)

  // Button
  const callToActionBtnGeometry = new THREE.PlaneGeometry(1.25, 0.4)
  const callToActionBtnMaterial = new THREE.MeshBasicMaterial({
    color: actionColor,
    transparent: true,
  })
  const callToActionBtn = new THREE.Mesh(
    callToActionBtnGeometry,
    callToActionBtnMaterial,
  )
  callToActionBtn.position.y = -1.025
  callToAction.add(callToActionBtn)

  /**
   * Footer
   */
  const footer = new THREE.Group()
  footer.position.y = -7.375
  main.add(footer)

  const footerBgGeometry = new THREE.PlaneGeometry(3, 1.75)
  const footerBgMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
  })
  const footerBg = new THREE.Mesh(footerBgGeometry, footerBgMaterial)
  footer.add(footerBg)

  return {
    main,
    carousel,
    carouselItemMaterial,
    grid,
    gridHeadingMaterial,
    gridItemMaterial,
    gridItemNestedPageMaterial,
    callToActionHeadingMaterial,
    callToActionSubMaterial,
    callToActionBtnMaterial,
    footerBgMaterial,
  }
}
