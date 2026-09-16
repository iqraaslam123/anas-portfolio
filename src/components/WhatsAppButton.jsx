import { whatsappUrl } from '../data/portfolioData'
import { WhatsappIcon } from './Icons'

export default function WhatsAppButton() {
  return (
    <a
      className="float-btn wa-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Muhammad Anas on WhatsApp"
    >
      <WhatsappIcon size={26} />
    </a>
  )
}