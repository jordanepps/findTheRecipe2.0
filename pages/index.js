import Head from 'next/head';
import Image from 'next/image';
import DragDropFile from '../components/DragDropFile';
import PasteImageLink from '../components/PasteImageLink';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="text-5xl">Find The Recipe</h1>
      <div className="py-20">
        <DragDropFile />
        <PasteImageLink />
      </div>
    </div>
  );
}
