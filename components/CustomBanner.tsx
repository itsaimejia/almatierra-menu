import React from 'react'
import styles from '../styles/CustomBanner.module.css'

export const CustomBanner = ({ children, ...others }: { children: any }) => {
    return (
        <div className={styles.banner}>
            {children}
        </div>
    )
}

