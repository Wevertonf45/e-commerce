import Section from "../ui/section/Section";
import "./HeroSection.css";

function HeroSection() {
    return (
        <Section id="hero-section">
            <div className="hero-text-container">
                <p>NOVA COLEÇÃO 2026</p>
                <h1>Elegância Atemporal</h1>
                <h2 className="hero-description">Descubra peças únicas que definem seu estilo. Moda contemporânea com qualidade premium.</h2>
            </div>

            <div className="hero-button-container">
                <button>EXPLORAR COLEÇÃO</button>
            </div>
        </Section>
    );
}

export default HeroSection;
