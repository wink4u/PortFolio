import { ReactNode } from "react";
import LOGO from '@/img/Logo.png'
import Image from "next/image";
import styles from './commonLayout.module.scss';
import Link from "next/link";

interface CommonLayoutProps {
    children: ReactNode;
}

export default function CommonLayout({ children } : CommonLayoutProps) {
    return(
        <div className={styles.container}>
          <nav className={styles.sidebar}>
            <div className={styles.logo}>
              <Image src={LOGO} alt='logo' />
            </div>
            <ul className={styles.navlist}>
              <li><Link href="/">Info</Link></li>
              <li><Link href="/skill">Skill</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <main className={styles.content}>
            { children }
          </main>
        </div>
    )
}