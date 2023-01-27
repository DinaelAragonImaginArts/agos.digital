import styles from './css/spiner.module.css';

const Spiner = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.bounce1}></div>
            <div className={styles.bounce2}></div>
            <div className={styles.bounce3}></div>
        </div>
    )
}

export default Spiner
