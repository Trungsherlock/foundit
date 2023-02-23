import React, { FC } from 'react';
import { TButton } from './types';
import cn from "classnames";
import styles from "./Button.module.sass";
import { Loader } from "../loader";

const Button: FC<TButton> = ({ loading, success, disabled, name, onClick }) => {
    if (loading && !success) {
        return (
          <button className={cn("button loading", styles.button)}>
            <Loader className={styles.loader} color="white" />
          </button>
        )
      } else if (!loading && success) {
        return (
          <button className={cn("button done", styles.button)}>Done</button>
        )
      } else if (disabled) {
        return (
          <button className={cn("button disabled", styles.button)}>{name}</button>
        )
      } 
      else {
        return (
          <button onClick={onClick} className={cn("button", styles.button)}>{name}</button>
        )
      } 
}

export default Button;

