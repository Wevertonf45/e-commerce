import Section from "../ui/section/Section";
import "./Section2.css";

function Section2() {
    return (
        <Section id="section2">
            <div className="image-card image1">
                <p>Casacos</p>
                <span>Ver coleção →</span>
            </div>

            <div className="image-card image2">
                <p>Vestidos</p>
                <span>Ver coleção →</span>
            </div>

            <div className="image-card image3">
                <p>Blazers</p>
                <span>Ver coleção →</span>
            </div>
        </Section>
    );
}

export default Section2;
