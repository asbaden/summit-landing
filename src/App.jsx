import './App.css'

const LARK_FORM_URL = 'https://hc6xtchryq8.sg.larksuite.com/wiki/PzH6wIxtRiizNDkCbeklpQMMgjg?table=tblcei1XNPdnuRH9&view=vewvZKZA2o'

const spinPrizes = [
  { name: 'Free Sample', qty: 4, icon: '🎁' },
  { name: 'VIP Creator Access', qty: 2, icon: '⭐' },
  { name: 'Ads Boost for 5 Videos', qty: 4, icon: '🚀' },
  { name: '$5 Cash', qty: 2, icon: '💵' },
  { name: 'Commission Boost (5%)', qty: 2, icon: '📈' },
]

const rafflePrizes = [
  { name: 'Apple Watch', qty: 2, icon: '⌚' },
  { name: 'iPad', qty: 1, icon: '📱' },
  { name: 'AirPods', qty: 1, icon: '🎧' },
  { name: '$25 Gift Card', qty: 5, icon: '🎟️' },
]

function PrizeCard({ icon, name, qty, variant }) {
  return (
    <div className={`prize-card ${variant}`}>
      <div className="prize-icon" aria-hidden="true">{icon}</div>
      <div className="prize-body">
        <div className="prize-name">{name}</div>
        <div className="prize-qty">{qty} {qty === 1 ? 'winner' : 'winners'}</div>
      </div>
    </div>
  )
}

export default function App() {
  const openForm = () => {
    window.open(LARK_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="kiosk">
      <header className="brand">
        <div className="brand-mark" aria-hidden="true">
          <span className="brand-leaf">🌿</span>
        </div>
        <div className="brand-text">
          <div className="brand-name">MICRO INGREDIENTS</div>
        </div>
      </header>

      <section className="hero">
        <h1 className="headline">Spin &amp; Win</h1>
        <p className="sub">Every entry spins the wheel <span className="amp">&</span> earns a grand raffle ticket</p>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="dot" />
          <h2>Spin Wheel Prizes</h2>
        </div>
        <div className="grid grid-spin">
          {spinPrizes.map((p) => (
            <PrizeCard key={p.name} {...p} variant="spin" />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="dot gold" />
          <h2>Grand Raffle Prizes</h2>
          <span className="chip">Every entry = 1 ticket</span>
        </div>
        <div className="grid grid-raffle">
          {rafflePrizes.map((p) => (
            <PrizeCard key={p.name} {...p} variant="raffle" />
          ))}
        </div>
      </section>

      <footer className="cta-wrap">
        <button className="cta" onClick={openForm}>
          Join the Giveaway
          <span className="cta-arrow" aria-hidden="true">→</span>
        </button>
      </footer>
    </div>
  )
}
