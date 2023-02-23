import React, {FC} from "react";
import cn from "classnames";
import styles from "./TextInput.module.sass";
import {TText} from "./types";

const TextInput:FC<TText> = ({ className, value, label, ...props }) => {
  return (
    <div className={cn(styles.field, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.wrap}>
        <input className={styles.input} value={value} {...props} />
      </div>
    </div>
  );
};

export default TextInput;
