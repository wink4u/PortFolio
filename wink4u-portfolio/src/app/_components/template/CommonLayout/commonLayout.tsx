import { ReactNode } from "react";
import LOGO from '@/img/Logo.png'
import Image from "next/image";
import styles from './commonLayout.module.scss';
import SnsLogoList from "../../molecules/snsLogoList/snsLogoList";
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
              <li className={styles.navitem}><Link href="/">Info</Link></li>
              <li className={styles.navitem}><Link href="/skill">Skill</Link></li>
              <li className={styles.navitem}><Link href="/projects">Projects</Link></li>
            </ul>
            <div className={styles.sns}>
              <SnsLogoList />
            </div>
          </nav>
          <main className={styles.content}>
            { children }
          </main>
        </div>
    )
}