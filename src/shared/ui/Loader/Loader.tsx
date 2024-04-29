import styles from '@/shared/ui/Loader/Loader.module.scss';

export function Loader() {
  return (
    <div className={styles.loaderContainer} data-testid="app-loader">
      <div className={styles.loaderItems}>
        <div className={styles.loaderItem1} />
        <div className={styles.loaderItem2} />
        <div className={styles.loaderItem3} />
      </div>
    </div>
  );
}
