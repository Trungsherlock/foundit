import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./Add.module.sass";
import {Icon} from "../../icon";
import { TAdd } from "./types";

const Add: FC<TAdd> = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <button
      className={cn(className, styles.add, {
        [styles.active]: visible,
      })}
      onClick={() => setVisible(!visible)}
    >
      <Icon name="add-square" size="24" />
      <Icon name="minus-square" size="24" />
    </button>
  );
};

export default Add;
