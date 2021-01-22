import type { ReactElement } from "react";
import styles from "./Greeting.module.css";

export function Greeting(): ReactElement {
  return <h1 className={styles.greeting}>Hello, World!</h1>;
}
