import styles from '../styles/components/Profile.module.css';
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1317520093111267328/uxSwmZxo_400x400.jpg" alt="Hugo Sodré" />
            <div>
                <strong>Hugo Sodré</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                     Level 1</p>

            </div>
        </div>
    )
}