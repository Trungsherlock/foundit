import React, { FC } from "react";
import { SearchBar } from "@/components/modules/searchBar";
import cn from "classnames";
import styles from "./Home.module.sass";
import { WebList } from "@/components/modules/webList";

const Home: FC = () => {

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className = {styles.head}>
                    <div className={styles.webList}>
                        <WebList/>
                    </div>
                    <h2 className={cn("h3", styles.title)}>
                        Need any websites?
                    </h2>
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
};

export default Home;