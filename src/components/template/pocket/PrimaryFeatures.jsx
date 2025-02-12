'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
// import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion';

import { useDebouncedCallback } from 'use-debounce'

// import { AppScreen } from '@/components/AppScreen'
// import { CircleBackground } from '@/components/CircleBackground'
// import { Container } from '@/components/Container'
// import { PhoneFrame } from '@/components/PhoneFrame'
import { AppScreen } from './AppScreen'
import { CircleBackground } from './CircleBackground'
import { Container } from './Container'
// import { PhoneFrame } from './PhoneFrame'
// import {
//   DiageoLogo,
//   LaravelLogo,
//   MirageLogo,
//   ReversableLogo,
//   StatamicLogo,
//   StaticKitLogo,
//   TransistorLogo,
//   TupleLogo,
// } from '@/components/StockLogos'

// import testImg1 from './images/logos/forbes.svg'
// import testImg2 from './images/logos/cbs.svg'
// import testImg3 from './images/logos/cnn.svg'
import DashboardGif from '../../../assets/gif/dashboard-showcase.gif'
import AlertsGif from '../../../assets/gif/alerts-showcase.gif'
import TreeGif from '../../../assets/gif/tree-showcase.gif'
import { BackgroundIllustration } from './Hero'

// const MotionAppScreenHeader = motion(AppScreen.Header)
// const MotionAppScreenBody = motion(AppScreen.Body)


const features = [
  {
    name: 'Dashboard and metrics monitoring',
    description:
      'Our intuitive dashboards offer a comprehensive view of your cluster metrics, providing real-time insights and detailed analytics to help optimize performance and decision-making.',
    icon: DeviceUserIcon,
    image: DashboardGif,
  },
  {
    name: 'Real-time alerts',
    description:
      'We provide real-time alerts based on key cluster metrics, ensuring you stay informed about performance, resource usage, and potential issues in your infrastructure.',
    icon: DeviceNotificationIcon,
    image: AlertsGif,
  },
  {
    name: 'Visualize your cluster architecture',
    description:
      'Our Kubernetes cluster visualization feature offers a clear, interactive view of your infrastructure, making it easy to track relationships between nodes, pods, and services in real-time.',
    icon: DeviceTouchIcon,
    image: TreeGif,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6" {...props}>
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" 
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6" {...props}>
      <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" 
        fill="#A3A3A3"
      />  
    </svg>
  )
}

function DeviceTouchIcon(props) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6" {...props}>
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" 
        fill="#A3A3A3"
      />
    </svg>

  )
}

// const headerAnimation: Variants = {
//   initial: { opacity: 0, transition: { duration: 0.3 } },
//   animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
//   exit: { opacity: 0, transition: { duration: 0.3 } },
// }

// const maxZIndex = 2147483647

// const bodyVariantBackwards: Variant = {
//   opacity: 0.4,
//   scale: 0.8,
//   zIndex: 0,
//   filter: 'blur(4px)',
//   transition: { duration: 0.4 },
// }

// const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
//   y: '100%',
//   zIndex: maxZIndex - custom.changeCount,
//   transition: { duration: 0.4 },
// })

// const bodyAnimation: MotionProps = {
//   initial: 'initial',
//   animate: 'animate',
//   exit: 'exit',
//   variants: {
//     initial: (custom: CustomAnimationProps, ...props) =>
//       custom.isForwards
//         ? bodyVariantForwards(custom, ...props)
//         : bodyVariantBackwards,
//     animate: (custom: CustomAnimationProps) => ({
//       y: '0%',
//       opacity: 1,
//       scale: 1,
//       zIndex: maxZIndex / 2 - custom.changeCount,
//       filter: 'blur(0px)',
//       transition: { duration: 0.4 },
//     }),
//     exit: (custom: CustomAnimationProps, ...props) =>
//       custom.isForwards
//         ? bodyVariantBackwards
//         : bodyVariantForwards(custom, ...props),
//   },
// }

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left ui-not-focus-visible:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        {/* Render the image of the selected feature */}
        <div className="z-10 mx-auto w-full max-w-[620px]">
          <img
            src={features[selectedIndex].image} // Use image field here
            alt={features[selectedIndex].name}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef(null)
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <img 
                src={feature.image}
                alt={feature.name}
                style={{
                  width: "600px",
                  height: "auto"
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-purple-900 py-32 relative flex flex-col items-center"
    >
 
      <BackgroundIllustration 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 h-[1200px] w-[1200px] z-0 opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]" 
      />


      <Container>
        <div className="relative z-10 mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to monitor your Kubernetes cluster
          </h2>
          <p className="mt-2 text-lg text-gray-400">
          From real-time alerts and performance metrics to detailed visualizations and intuitive dashboards, everything is designed to keep your Kubernetes cluster running smoothly.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
