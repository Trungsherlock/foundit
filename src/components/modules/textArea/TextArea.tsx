import React, {FC} from "react";
import cn from "classnames";
import styles from "./TextArea.module.sass";
import {TText} from "./types";

const TextArea:FC<TText> = ({ className, label, value, ...props }) => {
  return (
    <div className={cn(styles.field, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.wrap}>
        <textarea className={styles.textarea} value={value} {...props} />
      </div>
    </div>
  );
};

export default TextArea;
