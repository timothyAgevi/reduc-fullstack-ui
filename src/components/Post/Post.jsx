import styles from "./Post.module.css";

const Post = ({ name, date, id }) => {
  return (
    <div className={styles.post}>
      <h3>{name}</h3>
      <p>{date}</p>
      <p> Post number {id}</p>
    </div>
  );
};

export default Post;
