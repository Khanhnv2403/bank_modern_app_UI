import styles from "./styles";

import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Clients,
  Footer,
  Stats,
  Testimonials,
  Navbar,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>
    </div>
  </div>
);

export default App;
