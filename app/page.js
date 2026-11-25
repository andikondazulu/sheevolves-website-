import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Placeholder from "../components/Placeholder";

const offers = [
  {
    title: "Career support",
    text: "We support young women in their careers, through life challenges and hard times.",
  },
  {
    title: "Themed get-togethers",
    text: "Four themed parties a year to celebrate womanhood and every small and big win.",
  },
  {
    title: "Weekly check-in",
    text: "A weekly check-in so every sister is doing fine.",
  },
  {
    title: "Weekly sports hour",
    text: "A random 1-hour session of yoga, pilates and other slow, low-intensity exercise.",
  },
];

const values = [
  { title: "Celebrate Every Win", text: "Small or big, every win is worth a party." },
  { title: "Support Through Hard Times", text: "We show up for each other in the downs as well as the ups." },
  { title: "Always Available", text: "We are always ready to support every woman." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <Placeholder label="Hero photo: add a photo of your community" className="arch" />
            <div className="hero-copy">
              <p className="tag">Lusaka, Zambia</p>
              <h1>Women celebrate women, through the ups and the downs.</h1>
              <p>
                SheEvolves Co. is a not-for-profit community of women. We are always
                ready and available to support every woman.
              </p>
              <Link href="/join" className="btn btn-light">Join the community</Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section container about-grid">
          <div>
            <p className="script">Who we are</p>
            <h2>A community built by women, for women</h2>
            <p>
              We are a circle of women who celebrate each other, through every
              season of life. Whatever you are going through, you have sisters
              beside you.
            </p>
            <a href="#what-we-do" className="btn btn-outline">See what we do</a>
          </div>
          <Placeholder label="Photo: women of SheEvolves Co." className="tall" />
        </section>

        <section className="quote">
          <p>
            Women celebrate women, <em>through the ups and the downs.</em>
          </p>
        </section>

        {/* VALUES */}
        <section className="band">
          <div className="container">
            <h2 className="center">What We Stand For</h2>
            <div className="cards-3">
              {values.map((v) => (
                <div key={v.title} className="mini-card">
                  <div className="icon" aria-hidden="true" />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="what-we-do" className="section container">
          <h2 className="center">What We Do</h2>
          <div className="cards-4">
            {offers.map((o) => (
              <article key={o.title} className="card">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CELEBRATIONS */}
        <section id="celebrations" className="panel">
          <div className="container split">
            <Placeholder label="Photo: a SheEvolves get-together" className="wide" />
            <div>
              <h2>Celebrations</h2>
              <p>
                We host 4 themed get-together parties a year to celebrate
                womanhood and your small and big wins.
              </p>
              <ul className="checks">
                <li>
                  <strong>Your birthday</strong>
                  <span>We will host it with and for you.</span>
                </li>
                <li>
                  <strong>Your wedding</strong>
                  <span>We will host it with and for you.</span>
                </li>
                <li>
                  <strong>Your graduation</strong>
                  <span>We will host it with and for you.</span>
                </li>
                <li>
                  <strong>Any win</strong>
                  <span>If it matters to you, we will celebrate it.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WELLNESS */}
        <section id="wellness" className="section container split reverse">
          <div>
            <h2>Check-ins &amp; Movement</h2>
            <ul className="checks">
              <li>
                <strong>Weekly check-in</strong>
                <span>Every sister is checked on, every week.</span>
              </li>
              <li>
                <strong>Random weekly sports hour</strong>
                <span>1 hour of yoga, pilates and other slow, low-intensity exercise.</span>
              </li>
            </ul>
          </div>
          <Placeholder label="Photo: yoga or pilates session" className="wide" />
        </section>

        {/* CTA */}
        <section className="container">
          <div className="cta">
            <h2>Ready To Join Us?</h2>
            <p>Come as you are. Your sisters are waiting.</p>
            <Link href="/join" className="btn btn-light">Join SheEvolves Co.</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}