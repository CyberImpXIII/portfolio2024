import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <nav className="text-3xl font-bold underline">
      <div className='name'>Jacob Nelsen-Epstein</div>
      <div className='about'>About</div>
      <div className='resume'>Resume</div>
      <div className='works'>Works</div>
      <div className='music'>music</div>
    </nav>
  );
}
