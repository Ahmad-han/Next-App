import React from 'react';
import styles from "@/styles/content.module.scss"
import { Header } from '../Header';
import { Blogs } from '../Blogs/Blogs';




export const Content: React.FC = () => {

    return (
        <div className={styles.content_container}>
            <Header />
            <Blogs />
        </div>
    )
}