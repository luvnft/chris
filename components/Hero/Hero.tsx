import SocialMetrics from '../SocialMetrics/SocialMetrics'
import Intro from './Intro'

export default async function Hero() {
  return (
    <div className="mt-12 flex flex-col items-center gap-y-32 md:mt-28">
      <Intro />
      <SocialMetrics className="mb-0 md:mb-16" />
    </div>
  )
}
