import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import Description from "@/components/Description/Description";
import PhotoGrid from "@/components/PhotoGrid/PhotoGrid";
import Counter from "@/components/Counter/Counter";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <Description />
      <PhotoGrid />
      <Counter />
    </div>
  );
}
