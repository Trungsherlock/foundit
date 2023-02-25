import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./Product.module.sass";
import { Card } from "../../../modules/profile_card";
import Loader from "../../../modules/loader/Loader";
import {TCard} from "./types";
import { bids } from "../../../mock/bids";

const Product:FC<TCard> = ({ className, item }) => {
  return (
    <div className={cn(styles.items, className)}>
      <div className={styles.list}>
        {bids.map((x, index) => (
          <Card className={styles.card} item={x} key={index} />
        ))}
      </div>
      <Loader className={styles.loader} />
    </div>
  );
};

export default Product;
