import './Section.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

function Section(props: SectionProps) {
    return (
        <section className={props.className} id={props.id}>
            {props.children}
        </section>
    )
}

export default Section
