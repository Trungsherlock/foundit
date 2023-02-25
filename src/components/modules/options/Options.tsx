import React,{useState } from "react";
import {FC} from "react";
import cn from "classnames";
import styles from "./Options.module.sass";
import {Icon} from "../../modules/icon";
import Actions from "../../../modules/Actions";
import { TOptions } from './types';

const Options: FC<TOptions> = ({ className, items }) => {
  return (
    <div className={cn(styles.options, className)}>
      <button className={cn("button-circle-stroke", styles.button)}>
        <Icon name="share" size="24" />
      </button>
      <button
        className={cn("button-circle-stroke", styles.button, styles.favorite)}
      >
        <Icon name="heart-fill" size="24" />
      </button>
      {/* <Actions className={styles.actions} /> */}
    </div>
  );
};

export default Options;