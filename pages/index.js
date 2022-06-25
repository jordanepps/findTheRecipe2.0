import SearchBox from '../components/SearchBox';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="text-5xl">Find The Recipe</h1>
      <div className="py-20">
        <SearchBox />
      </div>
    </div>
  );
}
