/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import cn from "classnames";
import { CustomLink } from "../customLink/index";
//import {TCard} from './types';
import styles from "./IdeaCard.module.sass";
import { Icon } from "../icon";
import Interpunct from "react-interpunct";
import { TIdeaCard } from "./types";
import { updatedAt } from "../../../../utils/updatedAt";
import { issuePreviewShorterner } from "../../../../utils/issuePreviewShorterner";
import useUserByUid from "../../../hooks/useUserByUid"

const IdeaCard: FC<TIdeaCard> = ({ idea }) => {
  //const tags = idea.categories.map((category) => category.name);
  console.log(idea.categories);
  const author = useUserByUid(idea.authorId);

  return (
    <div>
      <CustomLink className={styles.preview} href={`/ideas-details`}>
        <div className={styles.body}>
          <div className={styles.line}>
          <div className={styles.title}>{idea.title}</div>
          <div className={styles.details}>
            
            {issuePreviewShorterner(idea.description, 250)}
          </div>
        
          <div className={styles.foot}>
            <div className = {styles.line2}>
              <div className={styles.author}> {author?.name}</div>
              <Interpunct/>
              <div className={styles.updatedAt}>{updatedAt(idea.updatedAt)}</div>
            </div>
              <div className={styles.avatar}>
                  <img 
                    src={author?.image}
                    alt="Avatar" />
              </div>
          </div>
          <div className={styles.tags}>
            {/* {tags.map((tag: string, index: number) => 
              <div key={index} className={cn("status-purple", styles.tag)}>
                #{tag}
              </div>
            )} */}
          </div>
          </div>
        </div>
      </CustomLink>
    </div>
  );
};

export default IdeaCard;
