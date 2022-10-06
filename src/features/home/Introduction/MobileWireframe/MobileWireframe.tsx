import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { BiPlay } from 'react-icons/bi'
import { Button } from '@/components'
import { usePrefersReducedMotion, usePrevious } from '@/hooks'
import {
  getHeader,
  getMain,
  getModal,
  getNavigation,
  getNestedPage,
  getOverlay,
  getScreen,
} from './objects'
import { getCarouselTimeline, getMainTimeline } from './timelines'

interface MobileWireframeProps {
  theme: 'light' | 'dark'
}

const MobileWireframe: FC<MobileWireframeProps> = ({ theme }) => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  const prevTheme = usePrevious(theme)

  const prefersReducedMotion = usePrefersReducedMotion()
  const prevPrefersReducedMotion = usePrevious(prefersReducedMotion)

  const [isPlaying, setPlaying] = useState(!prefersReducedMotion)
  const isPlayingRef = useRef(isPlaying)

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  useEffect(() => {
    if (prefersReducedMotion !== prevPrefersReducedMotion) {
      setPlaying(!prefersReducedMotion)
    }
  }, [prefersReducedMotion, prevPrefersReducedMotion])

  const controls = useRef<{
    play: () => void
    pause: () => void
  }>()

  useEffect(() => {
    const mount = mountRef.current

    controls.current = { play, pause }

    // Scroll position
    let scrollYProgress = getScrollPosition()

    // Mouse position
    let mouseX = theme === prevTheme ? 0 : 1

    let camera: THREE.OrthographicCamera
    let scene: THREE.Scene
    let overlayScene: THREE.Scene
    let renderer: THREE.WebGLRenderer
    let masterTl: gsap.core.Timeline
    let overlayMaterial: THREE.MeshBasicMaterial

    const width = mount?.clientWidth || window.innerWidth
    const height = mount?.clientHeight || window.innerHeight
    const aspectRatio = width / height
    const camFactor =
      window.innerWidth >= 1280 ? 6 : window.innerWidth >= 768 ? 7.5 : 9
    const camPosMaxX = -10
    const camPosMaxY = -5

    init()
    updateCamera(width, height)
    animate()

    function init() {
      /**
       * Theme & colors
       */
      const whiteColor = 0xf5f9f9
      const blackColor = 0x121d33
      const screenColor = theme === 'light' ? blackColor : whiteColor
      const overlayColor = theme === 'light' ? whiteColor : blackColor
      const baseColor = theme === 'light' ? 0x8cc1de : 0x346090
      const actionColor = 0xf97316
      const activeColor = theme === 'light' ? 0xfdba74 : 0xc2410c
      const modalColor = theme === 'light' ? 0x1e304e : 0xe1f1f9
      const headerColor = theme === 'light' ? 0xbee0f2 : 0x2a4870
      const logoColor = theme === 'light' ? 0xe1f1f9 : 0x1e304e

      /**
       * Renderer
       */
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.autoClear = false
      renderer.setSize(width, height)
      mount?.appendChild(renderer.domElement)

      /**
       * Camera
       */
      camera = new THREE.OrthographicCamera(
        -camFactor * aspectRatio,
        camFactor * aspectRatio,
        camFactor,
        -camFactor,
        0.01,
        40,
      )
      camera.position.z = 20

      /**
       * Scenes
       */
      scene = new THREE.Scene()
      overlayScene = new THREE.Scene()

      /**
       * Objects
       */
      // Screen
      const { screenShape } = getScreen({ scene, screenColor })

      // Header
      const headerObjects = getHeader({
        scene,
        actionColor,
        headerColor,
        logoColor,
      })

      // Main
      const mainObjects = getMain({
        scene,
        baseColor,
        actionColor,
      })
      const { carousel } = mainObjects

      // Nested page
      const nestedPageObjects = getNestedPage({
        scene,
        screenColor,
        baseColor,
        actionColor,
      })

      // Navigation
      const navigationObjects = getNavigation({
        scene,
        screenColor,
        baseColor,
        actionColor,
        modalColor,
      })

      // Modal
      const modalObjects = getModal({
        scene,
        overlayColor,
        baseColor,
        actionColor,
        modalColor,
      })

      // Overlay
      const overlayObjects = getOverlay({
        overlayScene,
        screenShape,
        overlayColor,
      })
      overlayMaterial = overlayObjects.overlayMaterial

      /**
       * Timelines
       */
      // Master
      masterTl =
        prefersReducedMotion && !isPlayingRef.current
          ? gsap.timeline({ repeat: -1 }).pause()
          : gsap.timeline({ repeat: -1 })

      // Carousel
      const { carouselTl } = getCarouselTimeline({
        carousel,
      })

      // Main
      const { mainTl } = getMainTimeline({
        ...headerObjects,
        ...mainObjects,
        ...nestedPageObjects,
        ...navigationObjects,
        ...modalObjects,
        baseColor,
        actionColor,
        activeColor,
      })

      masterTl.add(carouselTl)
      masterTl.add(mainTl, 3)
    }

    function play() {
      masterTl.play()
    }

    function pause() {
      masterTl.pause()
    }

    function updateCamera(width: number, height: number) {
      const is2xlScreen = window.innerWidth >= 1664 // 1536 + 128
      const isXlScreen = window.innerWidth >= 1408 // Halfway between 1536 and 1280
      const isLgScreen = window.innerWidth >= 1152 // Halfway between 1280 and 1024
      const isMdScreen = window.innerWidth >= 768

      const aspectRatio = width / height

      const camFactor = isLgScreen ? 6 : isMdScreen ? 7.5 : 9

      camera.left =
        -(is2xlScreen
          ? camFactor + camFactor / 3
          : isXlScreen
          ? camFactor + camFactor / 2.5
          : isMdScreen
          ? camFactor + camFactor / 2
          : camFactor) * aspectRatio
      camera.right =
        (is2xlScreen
          ? camFactor - camFactor / 3
          : isXlScreen
          ? camFactor - camFactor / 2.5
          : isMdScreen
          ? camFactor - camFactor / 2
          : camFactor) * aspectRatio
      camera.top = camFactor
      camera.bottom = -camFactor
      camera.updateProjectionMatrix()
    }

    function animate() {
      // Update camera position + overlay opacity
      let trigger = mouseX
      let min = 0.25
      let max = 0.75

      if (masterTl.isActive()) {
        if (window.innerWidth < 768) {
          trigger = scrollYProgress
          min = 0.03
          max = 0.06
        }

        if (trigger > max) {
          camera.position.x = camPosMaxX
          camera.position.y = camPosMaxY
          overlayMaterial.opacity = 0.1
        } else if (trigger < min) {
          camera.position.x = 0
          camera.position.y = 0
          overlayMaterial.opacity = 1
        } else {
          camera.position.x = ((trigger - min) / (max - min)) * camPosMaxX
          camera.position.y = ((trigger - min) / (max - min)) * camPosMaxY
          overlayMaterial.opacity = 1 - ((trigger - min) / (max - min)) * 0.9
        }
      } else {
        camera.position.x = camPosMaxX
        camera.position.y = camPosMaxY
        overlayMaterial.opacity = 0.1
      }

      camera.lookAt(scene.position)

      requestAnimationFrame(animate)

      render()
    }

    function render() {
      renderer.clear()
      renderer.render(scene, camera)
      renderer.clearDepth()
      renderer.render(overlayScene, camera)
    }

    function getScrollPosition() {
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight ||
        0

      const docHeight = Math.max(
        document.body.scrollHeight || 0,
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0,
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0,
        document.documentElement.clientHeight || 0,
      )

      const yOffset =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop

      return yOffset / (docHeight - windowHeight)
    }

    function onScroll() {
      scrollYProgress = getScrollPosition()
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX / window.innerWidth
    }

    function onResize() {
      const width = mount?.clientWidth || window.innerWidth
      const height = mount?.clientHeight || window.innerHeight

      renderer.setSize(width, height)

      updateCamera(width, height)
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize, false)

    return () => {
      mount?.removeChild(renderer.domElement)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [mountRef, isPlayingRef, prefersReducedMotion, theme, prevTheme])

  useEffect(() => {
    if (isPlaying) {
      controls.current?.play()
    } else {
      controls.current?.pause()
    }
  }, [isPlaying])

  return (
    <>
      {prefersReducedMotion && (
        <div className="relative">
          <div
            className={`
              absolute top-0 left-0 md:left-1/2
              ${
                isPlaying ? `hidden invisible` : `flex visible`
              } justify-center items-center
              h-full min-h-screen w-full md:w-1/2 max-w-7xl
              bg-(navy-50 dark:navy-900)
            `}
          >
            <Button
              className="inline-block h-48 w-48"
              variant="solid"
              onClick={() => setPlaying(true)}
            >
              <BiPlay className="h-12 w-12" />
            </Button>
          </div>
        </div>
      )}

      <div ref={mountRef} data-theme={theme} />
    </>
  )
}

export default MobileWireframe
