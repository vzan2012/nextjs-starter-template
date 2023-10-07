import styles from "./styles.module.css";

export default function AboutLayout({ children }) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
