'use client'

import { useLoginUserStore } from "@/store/useLoginUserStore";
import { PrivateLayoutProps } from "@/types/private-layout-props";
import Link from "next/link";
import styles from './private-layout.module.sass';

export const PrivateLayout = (props: PrivateLayoutProps) => {
    const { loginUser } = useLoginUserStore();

    return (
        <>
            <header className={styles.privateHeader}>
                Menu
            </header>
            <section className={styles.privateSection}>
                <aside className={styles.privateAside}>
                    {loginUser?.menuItems.map(iterable => (
                        <Link href={'/'+iterable.redirectTo} key={iterable.name}>
                            <span className={styles.privateMenuItem} title={iterable.description}>{iterable.name}</span>
                        </Link>
                    ))}
                </aside>
                <main className={styles.privateMain}>
                    {props.children}
                </main>
            </section>
        </>
    )
}