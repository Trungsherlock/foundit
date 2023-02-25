/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import {TCard} from './types';
import styles from "./Card.module.sass";
import { Icon } from "../icon";
import { CustomLink } from "../customLink"
import { issuePreviewShorterner } from "../../../../utils/issuePreviewShorterner";
import Interpunct from "react-interpunct";
import { updatedAt } from "../../../../utils/updatedAt";
import { getRandomProductType } from "utils/getRandomProductType";
import { Type } from "@prisma/client";

const Card: FC<TCard> = ({ className, product }) => {
  const href: string = "/";
  const typeasd:Type = getRandomProductType(product);

  const [hydrated, setHydrated] = useState(false);
  React.useEffect(() => {
      setHydrated(true);
  },[])

  return (
    <div className={cn(styles.card, className)}>
      <CustomLink className={styles.cover} href="/prod-description">
      
      <div className={styles.box}>
        <div className={styles.preview}>
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.date}>{updatedAt(product.updatedAt)}</div>
            </div>
          </div>
       
          <div className={styles.types}>
              {hydrated && <div className={cn("status-black",styles.type) }> {typeasd} </div>}
          </div>

          <img 
            srcSet="/images/mock-logo/1.webp"
            src=""
            alt="Card" 
          />
          {/* <div className={styles.control}>
            <Link href={href}>
              <button 
                className={cn("button-small", styles.button)}
              >
                <span>{text}</span>
                <Icon name="scatter-up" size="16" />
              </button>
            </Link>
            
          </div> */}
        </div>
        <div className={styles.frame}>
          <div className={styles.avatar}>
            <img 
            src={"/images/content/avatar-user.jpg"} 
            alt="Avatar" />
          </div> 
          <div className={styles.tittle}>{product.title}</div>
          <div className={styles.textFrame}>
            <div className={styles.text}>
            {issuePreviewShorterner(product.description, 250)} </div>
          </div>
          
          <div className={styles.foot}> 
            <div className={styles.code}>
              <button className={styles.copy}>
                <Icon name="heart" size="32" />
              </button>
              <div className={styles.number}>{product.vote}</div>
            </div>
          <div>
            <div className={cn("status-purple", styles.tag)}>
              #category.name
            </div>
            <div className={cn("status-purple", styles.tag)}>
              #category.name
            </div>
            <div className={cn("status-purple", styles.tag)}>
              #category.name
            </div>
          </div>
        </div>
    </div>
    </div>
   </CustomLink>
  </div>
  );
};

export default Card;