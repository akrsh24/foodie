import styles from "./CollectionCategory.module.css";

const CollectionsCategory = () => {
    let p = "Delhi"
    return (
        <article>
            <header>
                <h1 className={styles.title}>Collections</h1>
            </header>
            <article>
                <p >{`Explore curated lists of top restaurants, cafes, pubs, and bars in ${p}, based on trends`}</p>
                <div className={styles.collectionList}>
                </div>
            </article>
        </article>
    );
}

export default CollectionsCategory;