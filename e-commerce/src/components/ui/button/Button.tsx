import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";


function Button() {
  return (
    <button className={styles.button}>
      EXPLORAR COLEÇÃO <span><ArrowRight size={16} /></span>
    </button>
  )
}

export default Button
