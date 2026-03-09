import Button from '@/components/ui/button/Button'
import styles from './HeroSection.module.css'
import { playFair } from '@/styles/fonts'

function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.textHeroContainer}>
                <p className={styles.primaryParagraph}>Nova Coleção 2026</p>
                <h2 className={`${styles.titleHero} ${playFair.className}`}>Elegância Atemporal</h2>
                <p className={styles.secondaryParagraph}>Descubra peças únicas que definem seu estilo. Moda contemporânea com qualidade premium.</p>
            </div>

            <div>
                <Button />
            </div>
        </section>
    )
}

export default HeroSection
