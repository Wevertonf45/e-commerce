import { images } from "@/data/ImagesData"
import Section from "../ui/section/Section"
import Image from "next/image"
import './Section2.css';

function Section2() {
    return (
        <Section id="section2">
            <div className="images-container">
                {images.map((item, index) => (
                    <div className="image-wrapper" key={index}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                        />
                        <span className="overlay-text">Ver coleção</span>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Section2
