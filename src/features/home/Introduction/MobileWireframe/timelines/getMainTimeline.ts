import * as THREE from 'three'
import gsap from 'gsap'
import {
  shortDuration,
  mdDuration,
  longDuration,
  xlDuration,
} from './constants'

type GetMainTimeline = {
  header: THREE.Group
  menuBtn: THREE.Mesh
  menuBtnMaterial: THREE.MeshBasicMaterial
  main: THREE.Group
  grid: THREE.Group
  gridItemNestedPageMaterial: THREE.MeshBasicMaterial
  nestedPageImg: THREE.Mesh
  nestedPageImgMaterial: THREE.MeshBasicMaterial
  nestedPageCloseBtn: THREE.Mesh
  nestedPageCloseBtnMaterial: THREE.MeshBasicMaterial
  nestedPageBody: THREE.Group
  nestedPageHeaderMaterial: THREE.MeshBasicMaterial
  nestedPagePriceMaterial: THREE.MeshBasicMaterial
  nestedPageBtn: THREE.Mesh
  nestedPageBtnMaterial: THREE.MeshBasicMaterial
  nestedPageParaItemMaterial: THREE.MeshBasicMaterial
  nestedPageRelated: THREE.Group
  nestedPageRelatedItemMaterial: THREE.MeshBasicMaterial
  nestedPageBgMaterial: THREE.MeshBasicMaterial
  navigation: THREE.Group
  cartBtn1: THREE.Mesh
  cartBtn1Material: THREE.MeshBasicMaterial
  cartItem: THREE.Group
  cartItemMaterial: THREE.MeshBasicMaterial
  cartItemBtnMaterial: THREE.MeshBasicMaterial
  modal: THREE.Group
  modalBody: THREE.Group
  modalBaseMaterial: THREE.MeshBasicMaterial
  modalBtn1Material: THREE.MeshBasicMaterial
  modalBtn2: THREE.Mesh
  modalBtn2Material: THREE.MeshBasicMaterial
  modalBgMaterial: THREE.MeshBasicMaterial
  modalOverlayMaterial: THREE.MeshBasicMaterial
  baseColor: number
  actionColor: number
  activeColor: number
}

export const getMainTimeline = ({
  header,
  menuBtn,
  menuBtnMaterial,
  main,
  grid,
  gridItemNestedPageMaterial,
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
  navigation,
  cartBtn1,
  cartBtn1Material,
  cartItem,
  cartItemMaterial,
  cartItemBtnMaterial,
  modal,
  modalBody,
  modalBaseMaterial,
  modalBtn1Material,
  modalBtn2,
  modalBtn2Material,
  modalBgMaterial,
  modalOverlayMaterial,
  baseColor,
  actionColor,
  activeColor,
}: GetMainTimeline) => {
  const mainTl = gsap.timeline()

  mainTl
    .to(main.position, {
      y: 3,
      duration: longDuration,
      delay: shortDuration,
      ease: 'power1.out',
    })
    .to(main.position, {
      y: 5,
      duration: mdDuration,
      delay: shortDuration,
      ease: 'power1.out',
    })
    .to(main.position, {
      y: 2,
      duration: longDuration,
      delay: shortDuration,
      ease: 'power1.out',
    })
    .set(nestedPageImg.position, {
      z: 0.11,
    })
    .to(nestedPageImg.position, {
      x: 0,
      y: 1.75,
      z: 0.5,
      duration: mdDuration,
      delay: shortDuration,
      ease: 'power1.inOut',
      onStart: function () {
        gridItemNestedPageMaterial.opacity = 0
        nestedPageImgMaterial.color = new THREE.Color(activeColor)
        nestedPageImgMaterial.opacity = 1
      },
      onComplete: function () {
        nestedPageImgMaterial.color = new THREE.Color(baseColor)
      },
    })
    .to(
      nestedPageImg.scale,
      {
        x: 3 / 1.35,
        y: 2 / 1.35,
        duration: mdDuration,
        delay: shortDuration,
        ease: 'power1.inOut',
      },
      '<',
    )
    .to(
      { y: nestedPageBody.position.y, opacity: 0 },
      {
        y: -2.25,
        opacity: 1,
        duration: mdDuration,
        ease: 'power1.inOut',
        onStart: function () {
          nestedPageBody.position.z = 0.3
        },
        onUpdate: function () {
          const y = gsap.getProperty(this.targets()[0], 'y') as number
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          nestedPageBody.position.y = y
          nestedPageHeaderMaterial.opacity = opacity
          nestedPagePriceMaterial.opacity = opacity
          nestedPageBtnMaterial.opacity = opacity
          nestedPageParaItemMaterial.opacity = opacity
          nestedPageRelatedItemMaterial.opacity = opacity
          nestedPageBgMaterial.opacity = opacity
        },
      },
      '<',
    )
    .set(nestedPageCloseBtn.position, { z: 0.51 })
    .to(
      { opacity: 0 },
      {
        opacity: 1,
        duration: shortDuration,
        ease: 'power1.out',
        onUpdate: function () {
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          nestedPageCloseBtnMaterial.opacity = opacity
        },
      },
    )
    .to(
      nestedPageBody.position,
      {
        y: -0.25,
        duration: xlDuration,
        delay: shortDuration,
        ease: 'power1.out',
      },
      '<',
    )
    .to(nestedPageRelated.position, {
      x: -1,
      duration: shortDuration,
      delay: shortDuration,
      ease: 'power1.out',
    })
    .to(nestedPageRelated.position, {
      x: -2,
      duration: mdDuration,
      delay: shortDuration,
      ease: 'power1.out',
    })
    .to(nestedPageBody.position, {
      y: -2.25,
      duration: longDuration,
      delay: shortDuration,
      ease: 'power1.out',
    })
    .to(nestedPageBtn.position, {
      z: '+0.2',
      duration: shortDuration,
      delay: shortDuration,
      repeat: 1,
      yoyo: true,
      ease: 'power1.out',
      onStart: function () {
        nestedPageBtnMaterial.color = new THREE.Color(activeColor)
      },
      onComplete: function () {
        nestedPageBtnMaterial.color = new THREE.Color(actionColor)
      },
    })
    .to(
      { y: cartItem.position.y, opacity: 0 },
      {
        y: 0.775,
        opacity: 1,
        duration: mdDuration,
        ease: 'power1.out',
        onUpdate: function () {
          const y = gsap.getProperty(this.targets()[0], 'y') as number
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          cartItem.position.y = y
          cartItemMaterial.opacity = opacity
          cartItemBtnMaterial.opacity = opacity
        },
      },
    )
    .to(
      nestedPageCloseBtn.position,
      {
        z: 0.7, // Must be absolute value, relative '+0.2' doesn't work
        duration: shortDuration,
        delay: shortDuration,
        repeat: 1,
        yoyo: true,
        ease: 'power1.out',
        onStart: function () {
          nestedPageCloseBtnMaterial.color = new THREE.Color(activeColor)
        },
        onComplete: function () {
          nestedPageCloseBtnMaterial.color = new THREE.Color(actionColor)
        },
      },
      '<',
    )
    .to(
      { opacity: 1 },
      {
        opacity: 0,
        duration: shortDuration,
        ease: 'power1.out',
        onUpdate: function () {
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          nestedPageCloseBtnMaterial.opacity = opacity
        },
        onComplete: function () {
          nestedPageCloseBtn.position.z = -0.01
        },
      },
    )
    .to(
      { y: -2.25, opacity: 1 },
      {
        y: -6.5,
        opacity: 0,
        duration: mdDuration,
        ease: 'power1.inOut',
        onUpdateParams: ['y', 'opacity'],
        onUpdate: function () {
          const y = gsap.getProperty(this.targets()[0], 'y') as number
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          nestedPageBody.position.y = y
          nestedPageHeaderMaterial.opacity = opacity
          nestedPagePriceMaterial.opacity = opacity
          nestedPageBtnMaterial.opacity = opacity
          nestedPageParaItemMaterial.opacity = opacity
          nestedPageRelatedItemMaterial.opacity = opacity
          nestedPageBgMaterial.opacity = opacity
        },
        onComplete: function () {
          nestedPageBody.position.z = -0.3
          nestedPageRelated.position.x = 0
        },
      },
      '<',
    )
    .to(
      nestedPageImg.scale,
      {
        x: 1,
        y: 1,
        duration: mdDuration,
        ease: 'power1.inOut',
      },
      '<',
    )
    .to(
      nestedPageImg.position,
      {
        x: 0.725,
        y: 2 + grid.position.y - 0.225,
        z: 0.11,
        duration: mdDuration,
        ease: 'power1.inOut',
        onComplete: function () {
          gridItemNestedPageMaterial.opacity = 1
          nestedPageImgMaterial.opacity = 0
        },
      },
      '<',
    )
    .set(nestedPageImg.position, { z: -0.5 })
    .to(main.position, {
      y: 0,
      duration: longDuration,
      delay: shortDuration,
      ease: 'power1.out',
    })
    .to(menuBtn.position, {
      z: navigation.position.z - header.position.z + 0.02,
      duration: shortDuration,
      ease: 'power1.inOut',
      onStart: function () {
        menuBtnMaterial.color = new THREE.Color(activeColor)
      },
    })
    .to(
      navigation.position,
      {
        x: 0,
        duration: mdDuration,
        delay: shortDuration,
        ease: 'power1.inOut',
        onComplete: function () {
          menuBtnMaterial.color = new THREE.Color(actionColor)
        },
      },
      '<',
    )
    .to(cartBtn1.position, {
      z: '+0.2',
      duration: shortDuration,
      delay: mdDuration,
      repeat: 1,
      yoyo: true,
      ease: 'power1.inOut',
      onStart: function () {
        cartBtn1Material.color = new THREE.Color(activeColor)
      },
      onComplete: function () {
        cartBtn1Material.color = new THREE.Color(actionColor)
      },
    })
    .to(navigation.position, {
      x: 3.25,
      duration: shortDuration,
      delay: shortDuration,
      ease: 'power1.inOut',
    })
    .to(menuBtn.position, {
      z: 0.01,
      duration: shortDuration,
      ease: 'power1.inOut',
    })
    .to(
      { y: modalBody.position.y, opacity: modalBgMaterial.opacity },
      {
        y: 0,
        opacity: 1,
        duration: mdDuration,
        ease: 'power1.inOut',
        onStart: function () {
          modal.position.z = 0.9
        },
        onUpdate: function () {
          const y = gsap.getProperty(this.targets()[0], 'y') as number
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          modalBody.position.y = y
          modalOverlayMaterial.opacity = opacity * 0.5
          modalBaseMaterial.opacity = opacity
          modalBtn1Material.opacity = opacity
          modalBtn2Material.opacity = opacity
          modalBgMaterial.opacity = opacity
        },
      },
      '<-=0.333',
    )
    .to(modalBtn2.position, {
      z: '+0.2',
      duration: shortDuration,
      delay: shortDuration,
      repeat: 1,
      yoyo: true,
      ease: 'power1.inOut',
      onStart: function () {
        modalBtn2Material.color = new THREE.Color(activeColor)
      },
      onComplete: function () {
        modalBtn2Material.color = new THREE.Color(actionColor)
      },
    })
    .to(
      { y: 0.775, opacity: 1 },
      {
        y: 0.525,
        opacity: 0,
        duration: shortDuration,
        ease: 'power1.inOut',
        onUpdate: function () {
          const y = gsap.getProperty(this.targets()[0], 'y') as number
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          cartItem.position.y = y
          cartItemMaterial.opacity = opacity
          cartItemBtnMaterial.opacity = opacity
        },
      },
    )
    .to(
      { y: 0, opacity: 1 },
      {
        y: -1,
        opacity: 0,
        duration: shortDuration,
        delay: shortDuration,
        ease: 'power1.inOut',
        onUpdate: function () {
          const y = gsap.getProperty(this.targets()[0], 'y') as number
          const opacity = gsap.getProperty(
            this.targets()[0],
            'opacity',
          ) as number

          modalBody.position.y = y
          modalOverlayMaterial.opacity = opacity * 0.5
          modalBaseMaterial.opacity = opacity
          modalBtn1Material.opacity = opacity
          modalBtn2Material.opacity = opacity
          modalBgMaterial.opacity = opacity
        },
        onComplete: function () {
          modal.position.z = -0.9
        },
      },
    )

  return { mainTl }
}
