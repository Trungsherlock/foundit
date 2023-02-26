import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./Ideas.module.sass";
import { Icon } from "../../modules/icon";
import { IdeaCard } from "../../modules/ideaCard";
import { TIdeas } from "./types";
import { CustomLink } from "../../modules/customLink"

const Idea: FC<TIdeas> = ({ ideas }) => {
  const [search, setSearch] = useState("");
  const href: string = "/";
  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.title}>Ideas</div>
          <form
            className={styles.search}
            action=""
            onSubmit={() => console.log('a')}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search ..."
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="16" />
            </button>
          </form>
        </div>
        <div className={styles.wrapper}> 
            <div className={styles.arow}>
                <div>
                  {ideas.map((idea, index) => <IdeaCard key={index} idea={idea} />)}
                </div>
            <div className={styles.btns}>
              <button className={cn("button-stroke", styles.button)}>
                <span>Load more</span>
              </button>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Idea;
