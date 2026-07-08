import React, { useState } from "react";
import { Phone, MessageCircle, Menu as MenuIcon, X, MapPin } from "lucide-react";

const MENU = [
  { name: "Empadinha de Frango", note: "Bandeja com 10 empadinhas", price: "R$ 17,00", tone: "green", image: "/empada-frango.png" },
  { name: "Empadinha de Frango com Azeitona", note: "Bandeja com 10 empadinhas", price: "R$ 20,00", tone: "green", image: "/frango-azeitona.jpg" },
  { name: "Empadinha de Frango com Catupiry", note: "Bandeja com 10 empadinhas", price: "R$ 20,00", tone: "green", image: "/frango-catupiry.jpg" },
  { name: "Empadinha de Frango com Cheddar", note: "Bandeja com 10 empadinhas", price: "R$ 20,00", tone: "green", image: "/frango-cheddar.webp" },
  { name: "Empadinha de Frango com Palmito", note: "Bandeja com 10 empadinhas", price: "R$ 20,00", tone: "green", image: "/frrango-palmito.webp" },
  { name: "Empadinha de Alho-Poró", note: "Bandeja com 10 empadinhas", price: "R$ 17,00", tone: "green", image: "/alho-poro-bacon.jpg" },
  { name: "Empadinha de Alho-Poró com Bacon", note: "Bandeja com 10 empadinhas", price: "R$ 20,00", tone: "green", image: "/alho-poro-bacon-2.jpg" },
  { name: "Empadinha de Milho com Bacon", note: "Bandeja com 10 empadinhas", price: "R$ 20,00", tone: "green", image: "/milho-bacon.jpg" },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "menu", label: "Menu" },
  { id: "encomendas", label: "Encomendas" },
  { id: "contatos", label: "Contatos" },
];

const WHATSAPP_NUMBER = "5531994857933";
const PHONE_DISPLAY = "(31) 99485-7933";

export default function EmpadinhasTiaNininha() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="etn-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,600&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .etn-root {
          --crust: #E7A94C;
          --crust-deep: #C67B2C;
          --kraft: #7A4E2E;
          --parchment: #FBF1DF;
          --parchment-2: #F3E2C4;
          --ink: #2C1B10;
          --green: #6B8E4E;
          --coral: #D96B4F;
          --whatsapp: #2DAE60;
          font-family: 'Manrope', sans-serif;
          color: var(--ink);
          background: var(--parchment);
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        .etn-root h1, .etn-root h2, .etn-root h3, .etn-root .disp {
          font-family: 'Fraunces', serif;
        }
        .etn-mono { font-family: 'Space Mono', monospace; }

        /* NAV */
        .etn-nav {
          position: sticky; top: 0; z-index: 40;
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 20px;
          background: linear-gradient(180deg, var(--crust), var(--crust-deep));
          box-shadow: 0 2px 12px rgba(44,27,16,0.15);
        }
        .etn-logo { display:flex; align-items:center; }
        .etn-logo-img {
          height: 48px; width: auto;
          filter: drop-shadow(0 2px 4px rgba(44,27,16,0.2));
        }
        .etn-navlinks { display:flex; gap:4px; }
        .etn-navlinks button {
          background:none; border:none; cursor:pointer;
          font-family:'Manrope',sans-serif; font-weight:700; font-size:14px;
          color: var(--ink); padding: 8px 12px; border-radius: 999px;
          transition: background 0.2s ease;
        }
        .etn-navlinks button:hover { background: rgba(44,27,16,0.1); }
        .etn-burger { display:none; background:none; border:none; cursor:pointer; color:var(--ink); }
        .etn-mobile-menu {
          position:absolute; top:100%; left:0; right:0;
          background: var(--crust-deep); padding: 10px 16px 18px;
          display:flex; flex-direction:column; gap:4px;
          box-shadow: 0 6px 16px rgba(44,27,16,0.2);
        }
        .etn-mobile-menu button {
          background:none; border:none; text-align:left; color: var(--parchment);
          font-family:'Manrope',sans-serif; font-weight:700; font-size:16px; padding:12px 6px; cursor:pointer;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .etn-mobile-menu button:last-child { border-bottom: none; }

        @media (max-width: 760px) {
          .etn-navlinks { display:none; }
          .etn-burger { display:block; }
        }
        @media (max-width: 400px) {
          .etn-logo-img { height: 38px; }
          .etn-nav { padding: 8px 14px; }
        }

        /* HERO */
        .etn-hero {
          position: relative;
          padding: 72px 28px 100px;
          background:
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18), transparent 40%),
            linear-gradient(160deg, var(--crust) 0%, var(--crust-deep) 55%, var(--kraft) 130%);
          overflow: hidden;
        }
        .etn-hero-inner {
          max-width: 980px; margin: 0 auto; position: relative; z-index: 2;
          display: flex; align-items: center; gap: 48px;
        }
        .etn-hero-text { flex: 1; }
        .etn-hero-logo {
          flex-shrink: 0;
          width: 180px;
          filter: drop-shadow(0 8px 24px rgba(44,27,16,0.3));
        }
        .etn-eyebrow {
          font-family: 'Space Mono', monospace; text-transform: uppercase;
          letter-spacing: 0.14em; font-size: 12px; font-weight:700;
          color: var(--ink); background: rgba(251,241,223,0.55);
          display:inline-block; padding: 6px 12px; border-radius: 999px; margin-bottom: 20px;
        }
        .etn-hero h1 {
          font-size: clamp(1.7rem, 5vw, 3.6rem);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.01em;
          margin: 0 0 18px;
        }
        .etn-hero h1 em { font-style: italic; color: var(--kraft); }
        .etn-hero p {
          font-size: 16px; line-height: 1.6; margin: 0 0 28px; color: #3a271a;
        }
        .etn-cta {
          display:inline-flex; align-items:center; gap:10px;
          background: var(--ink); color: var(--parchment);
          font-weight: 700; font-size: 15px;
          padding: 14px 24px; border-radius: 10px; text-decoration:none;
          box-shadow: 0 8px 20px rgba(44,27,16,0.35);
          transition: transform 0.15s ease;
          border: none; cursor: pointer;
        }
        .etn-cta:hover { transform: translateY(-2px); }

        /* stamp signature */
        .etn-stamp {
          position: absolute; right: 4%; bottom: -34px; z-index: 3;
          width: 110px; height: 110px; border-radius: 50%;
          border: 3px dashed rgba(44,27,16,0.55);
          display:flex; align-items:center; justify-content:center; text-align:center;
          transform: rotate(-9deg);
          background: rgba(251,241,223,0.9);
          font-family:'Space Mono', monospace; font-weight:700; font-size:10px;
          letter-spacing:0.04em; color: var(--kraft); padding: 10px;
          line-height: 1.35;
          box-shadow: 0 6px 16px rgba(44,27,16,0.25);
        }

        @media (max-width: 720px) {
          .etn-hero { padding: 48px 20px 80px; }
          .etn-hero-inner { flex-direction: column-reverse; text-align: center; gap: 28px; }
          .etn-hero-logo { width: 120px; }
          .etn-hero p { font-size: 15px; }
          .etn-stamp { width: 90px; height: 90px; font-size: 9px; right: 3%; bottom: -28px; }
          .etn-cta { width: 100%; justify-content: center; }
        }
        @media (max-width: 400px) {
          .etn-hero { padding: 36px 16px 70px; }
          .etn-hero-logo { width: 100px; }
        }

        /* SECTION generic */
        .etn-section { padding: 60px 24px; }
        .etn-section-inner { max-width: 1040px; margin: 0 auto; }
        .etn-heading {
          font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; margin: 0 0 28px;
        }
        .etn-heading span { color: var(--crust-deep); }

        @media (max-width: 480px) {
          .etn-section { padding: 40px 16px; }
          .etn-heading { margin: 0 0 20px; }
        }

        /* SOBRE */
        .etn-sobre-card {
          display:flex; gap: 30px; align-items:center;
          background: linear-gradient(135deg, var(--crust-deep), #B5692A);
          color: var(--parchment); border-radius: 18px; padding: 32px;
          box-shadow: 0 14px 30px rgba(44,27,16,0.18);
        }
        .etn-sobre-card p { line-height:1.7; margin: 0 0 14px; font-size:15px; }
        .etn-sobre-visual {
          flex-shrink:0; width: 200px; height: 200px; border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(44,27,16,0.25);
        }
        .etn-sobre-visual img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        @media (max-width: 640px) {
          .etn-sobre-card { flex-direction: column; align-items: center; text-align: center; padding: 24px; gap: 20px; }
          .etn-sobre-visual { width: 100%; height: 200px; }
        }
        @media (max-width: 400px) {
          .etn-sobre-card { padding: 18px; border-radius: 14px; }
          .etn-sobre-visual { height: 160px; }
        }

        /* MENU */
        .etn-menu-bg { background: var(--parchment-2); }
        .etn-menu-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
        }
        @media (max-width: 900px) { .etn-menu-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 500px) { .etn-menu-grid { grid-template-columns: 1fr; gap: 14px; } }

        .etn-ticket {
          background: var(--parchment);
          border-radius: 14px;
          position: relative;
          box-shadow: 0 6px 18px rgba(44,27,16,0.08);
          border: 1px solid rgba(122,78,46,0.15);
          overflow: hidden;
        }
        .etn-ticket-img {
          width: 100%; height: 180px;
          object-fit: contain;
          background: #f7ede0;
          display: block;
          padding: 8px;
          box-sizing: border-box;
        }
        .etn-ticket-top { padding: 14px 16px 12px; }
        .etn-dot {
          width: 10px; height:10px; border-radius:50%; display:inline-block; margin-right:8px;
        }
        .etn-dot.gold { background: var(--crust-deep); }
        .etn-dot.green { background: var(--green); }
        .etn-dot.coral { background: var(--coral); }
        .etn-ticket-name { font-weight: 700; font-size: 15px; margin: 6px 0 4px; }
        .etn-ticket-note { font-size: 12px; opacity: 0.65; margin: 0; }
        .etn-perforation {
          border-top: 2px dashed rgba(122,78,46,0.35);
          position: relative;
        }
        .etn-perforation::before, .etn-perforation::after {
          content:""; position:absolute; top:-9px; width:18px; height:18px;
          background: var(--parchment-2); border-radius: 50%;
        }
        .etn-perforation::before { left:-9px; }
        .etn-perforation::after { right:-9px; }
        .etn-ticket-price {
          padding: 12px 16px 16px; font-family:'Space Mono', monospace;
          font-weight:700; font-size: 18px; color: var(--kraft);
        }

        /* ENCOMENDAS */
        .etn-order-card {
          display:flex; gap:30px; align-items:center;
          background: var(--ink); color: var(--parchment);
          border-radius: 18px; padding: 36px;
          box-shadow: 0 14px 30px rgba(44,27,16,0.2);
        }
        .etn-order-visual {
          flex-shrink:0; width: 200px; height: 200px; border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .etn-order-visual img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        .etn-order-card h3 { font-size: 19px; margin: 0 0 8px; }
        .etn-order-price { font-family:'Space Mono', monospace; font-size: clamp(18px, 4vw, 26px); font-weight:700; color: var(--crust); margin: 6px 0 22px; }
        .etn-cta-light { background: var(--parchment); color: var(--ink); }
        @media (max-width: 640px) {
          .etn-order-card { flex-direction: column; align-items: center; text-align:center; padding: 24px; gap: 20px; }
          .etn-order-visual { width: 100%; height: 200px; }
          .etn-cta-light { width: 100%; justify-content: center; }
        }
        @media (max-width: 400px) {
          .etn-order-card { padding: 18px; border-radius: 14px; }
          .etn-order-visual { height: 160px; }
        }

        /* CONTATOS */
        .etn-contact-card {
          background: linear-gradient(160deg, var(--crust-deep), var(--kraft));
          color: var(--parchment); border-radius: 18px; padding: 40px 24px;
          text-align: center;
        }
        .etn-contact-badge {
          width: 100px; height: auto; margin: 0 auto 16px;
          filter: drop-shadow(0 4px 10px rgba(44,27,16,0.25));
        }
        .etn-contact-title { font-size: 20px; font-weight: 800; margin: 0 0 4px; }
        .etn-contact-sub { opacity: 0.85; font-size: 14px; margin: 0 0 28px; }
        .etn-contact-buttons { display:flex; gap: 14px; justify-content:center; flex-wrap:wrap; }
        .etn-contact-btn {
          display:flex; flex-direction:column; align-items:center; gap:8px;
          background: rgba(251,241,223,0.14); border: 1px solid rgba(251,241,223,0.4);
          padding: 16px 24px; border-radius: 14px; text-decoration:none; color: var(--parchment);
          font-weight: 700; font-size: 14px; min-width: 130px;
          transition: background 0.2s ease;
        }
        .etn-contact-btn:hover { background: rgba(251,241,223,0.26); }
        .etn-contact-note { margin-top: 20px; font-size: 12px; opacity:0.7; display:flex; align-items:center; justify-content:center; gap:6px; flex-wrap: wrap; text-align: center; }
        @media (max-width: 480px) {
          .etn-contact-card { padding: 30px 16px; border-radius: 14px; }
          .etn-contact-buttons { flex-direction: column; align-items: stretch; }
          .etn-contact-btn { flex-direction: row; justify-content: center; min-width: unset; }
        }

        /* FOOTER */
        .etn-footer {
          text-align:center; padding: 22px 16px; font-size: 12px;
          color: rgba(44,27,16,0.55); background: var(--parchment-2);
        }
      `}</style>

      {/* NAV */}
      <nav className="etn-nav">
        <div className="etn-logo">
          <img
            src="/Logo-empadinhas-png.png"
            alt="Empadinhas Tia Nininha"
            className="etn-logo-img"
          />
        </div>
        <div className="etn-navlinks">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)}>{n.label}</button>
          ))}
        </div>
        <button className="etn-burger" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
        {open && (
          <div className="etn-mobile-menu">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}>{n.label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="etn-hero">
        <div className="etn-hero-inner">
          <div className="etn-hero-text">
            <span className="etn-eyebrow">Feitas à mão · desde 2023</span>
            <h1>
              Venha experimentar a <em>melhor</em> empadinha da região!
            </h1>
            <p>
              Empadinhas assadas de vários sabores. Congeladas ou assadas na hora.
              Feitas com muito amor para você! Aceitamos encomendas.
            </p>
            <button className="etn-cta" onClick={() => scrollTo("encomendas")}>
              Clique aqui para Encomendar!
            </button>
          </div>
          <img
            src="/Logo-empadinhas-png.png"
            alt="Empadinhas Tia Nininha"
            className="etn-hero-logo"
          />
        </div>
        <div className="etn-stamp">FEITO COM<br/>AMOR ♥<br/>DESDE 2023</div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="etn-section">
        <div className="etn-section-inner">
          <h2 className="etn-heading">Sobre <span>Nós</span></h2>
          <div className="etn-sobre-card">
            <div className="etn-sobre-visual">
              <img src="/mista.jpg" alt="Bandeja de empadinhas Tia Nininha" />
            </div>
            <div>
              <p>
                Depois de fazer sucesso entre familiares e amigos, decidimos expandir e começar
                a vender as empadinhas para todos experimentarem. Antes vendíamos apenas
                congeladas, mas com a satisfação dos clientes, começamos a aceitar encomendas
                para eventos com as empadas assadas na hora.
              </p>
              <p style={{ marginBottom: 0 }}>
                Desde 2023 fazendo a alegria dos clientes com as Empadinhas da Tia Nininha,
                colocando amor e carinho em cada empadinha feita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="etn-section etn-menu-bg">
        <div className="etn-section-inner">
          <h2 className="etn-heading">Nosso <span>Menu</span></h2>
          <div className="etn-menu-grid">
            {MENU.map((item) => (
              <div className="etn-ticket" key={item.name}>
                <img src={item.image} alt={item.name} className="etn-ticket-img" />
                <div className="etn-ticket-top">
                  <span className={`etn-dot ${item.tone}`} />
                  <span className="etn-mono" style={{ fontSize: 11, opacity: 0.55, letterSpacing: "0.05em" }}>
                    COMANDA
                  </span>
                  <p className="etn-ticket-name">{item.name}</p>
                  <p className="etn-ticket-note">{item.note}</p>
                </div>
                <div className="etn-perforation" />
                <div className="etn-ticket-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENCOMENDAS */}
      <section id="encomendas" className="etn-section">
        <div className="etn-section-inner">
          <h2 className="etn-heading">Enco<span>mendas</span></h2>
          <div className="etn-order-card">
            <div className="etn-order-visual">
              <img src="/empada7.png" alt="Caixa de empadinhas para encomenda" />
            </div>
            <div>
              <h3>Fazemos também empadinhas por encomenda!</h3>
              <div className="etn-order-price">1 cento por R$ 100,00</div>
              <a
                className="etn-cta etn-cta-light"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer uma encomenda de empadinhas 🥧")}`}
                target="_blank" rel="noreferrer"
              >
                Clique aqui para Encomendar!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATOS */}
      <section id="contatos" className="etn-section etn-menu-bg">
        <div className="etn-section-inner">
          <h2 className="etn-heading">Nossos <span>Contatos</span></h2>
          <div className="etn-contact-card">
            <img
              src="/Logo-empadinhas-png.png"
              alt=""
              className="etn-contact-badge"
              aria-hidden="true"
            />
            <p className="etn-contact-title">Empadinhas Tia Nininha</p>
            <p className="etn-contact-sub">Fale com a gente e faça já a sua encomenda</p>
            <div className="etn-contact-buttons">
              <a className="etn-contact-btn" href={`tel:+${WHATSAPP_NUMBER}`}>
                <Phone size={22} /> Me ligue
              </a>
              <a
                className="etn-contact-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noreferrer"
              >
                <MessageCircle size={22} /> WhatsApp
              </a>
            </div>
            <div className="etn-contact-note">
              <MapPin size={14} /> {PHONE_DISPLAY} · Belo Horizonte, MG
            </div>
          </div>
        </div>
      </section>

      <footer className="etn-footer">
        © {new Date().getFullYear()} Empadinhas Tia Nininha · Feito com amor 🥧
      </footer>
    </div>
  );
}
