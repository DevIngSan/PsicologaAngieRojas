import { site } from '../../data/site'

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      title="Contáctame por WhatsApp"
    >
      <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
    </a>
  )
}
