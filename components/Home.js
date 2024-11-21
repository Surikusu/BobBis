import styles from "../styles/Home.module.css";
import { useState } from "react";
import ImageCarousel from "./Carousel";

function Home() {
  const [buttonPressed, setPressed] = useState(false);
  const [tentative, setTentative] = useState("");

  return !buttonPressed ? (
    <div>
      
      <main className={styles.main}>
        <input
          className={styles.input}
          placeholder="Ecrire un prénom"
          onChangeCapture={(e) => setTentative(e.target.value)}
        />
        <button
          className={tentative ? styles.buttonVisible : styles.button}
          onClick={() => setPressed(true)}
        >
          {" "}
          {tentative ? "Valider" : ""}
        </button>
      </main>
    </div>
  ) : (
    <div>
      
      <div className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue à Bob Bis (et non pas {tentative})!
        </h1>
        <h2 className={styles.title2}>
          {" "}
          Inès et Robinson vous annoncent l'arrivée de leur 2ème enfant !
        </h2>
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Home;
