import './App.css'

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
  { name: 'DJI Phone Holder', qty: 1, icon: '🤳' },
  { name: '$25 Gift Card', qty: 5, icon: '💳' },
]

function PrizeCard({ icon, name, variant }) {
  return (
    <div className={`prize-card ${variant}`}>
      <div className="prize-icon" aria-hidden="true">{icon}</div>
      <div className="prize-body">
        <div className="prize-name">{name}</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="kiosk">
      <header className="brand">
        <img src="/logo.png" alt="Micro Ingredients" className="brand-logo" />
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

      <footer className="qr-wrap">
        <div className="qr-card">
          <div className="qr-label">
            <span className="qr-kicker">Step 1</span>
            <span className="qr-title">Enter the Giveaway</span>
          </div>
          <img src="/QRLark.png" alt="Scan to enter giveaway" className="qr-img" />
          <div className="qr-caption">Scan to submit your entry</div>
        </div>

        <div className="qr-card qr-card--accent">
          <div className="qr-label">
            <span className="qr-kicker">Step 2</span>
            <span className="qr-title">Join our Discord</span>
          </div>
          <img src="/QRDiscord.jpg" alt="Scan to join Discord" className="qr-img" />
          <div className="qr-caption">Scan to join the community</div>
        </div>
      </footer>
    </div>
  )
}
