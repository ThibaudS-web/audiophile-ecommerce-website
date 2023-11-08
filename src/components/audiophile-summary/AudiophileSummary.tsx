import {
    AudiophileSummaryTextWrapper,
    Strong,
    Picture,
    BestGearImage,
    AudiophileSummaryWrapper
} from './audiophileSummaryStyle'
import BestGearDesktop from "/public/assets/shared/desktop/image-best-gear.jpg"
import BestGearTablet from "/public/assets/shared/tablet/image-best-gear.jpg"
import BestGearMobile from "/public/assets/shared/mobile/image-best-gear.jpg"
import { Device } from '@/breakpoints'

const AudiophileSummary = () => {
  return (
      <AudiophileSummaryWrapper>
          <AudiophileSummaryTextWrapper>
              <h2>Bringing you the <Strong>best</Strong> audio gear</h2>
              <p>
                  Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </p>
          </AudiophileSummaryTextWrapper>
          <Picture>
              <source srcSet={BestGearTablet.src} media={`(min-width: 501px) and (max-width: 1024px)`} />
              <source srcSet={BestGearMobile.src} media={`(${Device.mobileL})`} />
              <BestGearImage src={BestGearDesktop.src} alt="Best gear" />
          </Picture>
      </AudiophileSummaryWrapper>
  )
}

export default AudiophileSummary