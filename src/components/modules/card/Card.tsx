/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import {TCard} from './types';
import styles from "./Card.module.sass";
import { Icon } from "../icon";
import { CustomLink } from "../customLink"
import Interpunct from "react-interpunct";

const Card: FC<TCard> = ({ className, item }) => {
  const href: string = "/";

  return (
    <div className={cn(styles.card, className)}>
      <CustomLink className={styles.cover} href="/discover-detail">
      
      <div className={styles.box}>
        <div className={styles.preview}>
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.date}>Feb, 25 2023</div>
            </div>
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
          <div className={styles.tittle}>Product Name</div>
          <div className={styles.textFrame}>
            <div className={styles.text}>
            Googles mission is to organize
            the worlds information and
            make it universally accessible
            and useful. As a first step to
            fulfilling this mission, Googles
            founders Larry Page and
            Sergey Brin developed a new
            approach to online search that
            took root in a Stanford
            University dorm room and quickly spread to 
            information seekers around the globe. </div>
          </div>
          
          <div className={styles.foot}> 
            <div className={styles.code}>
              <button className={styles.copy}>
                <Icon name="heart" size="32" />
              </button>
              <div className={styles.number}>100</div>
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