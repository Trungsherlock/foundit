import React, { FC } from "react";
import { SearchBar } from "@/components/modules/searchBar";
import cn from "classnames";
import styles from "./Home.module.sass";
import { WebList } from "@/components/modules/webList";
import { CustomLink } from "@/components/modules/customLink";

const Home: FC = () => {

    return (
        <>
            <div className={cn("section1", styles.section1)}>
                <div className={cn("container1", styles.container1)}>
                    <div className={cn("head1", styles.head)}>
                        <div className={cn("webList", styles.webList)}>
                            <WebList />
                        </div>
                        <h1 className={cn("h3", styles.title)}>
                            NEED ANY WEBSITE?
                        </h1>
                        <div className={styles.buttonset}>
                        <CustomLink
                            className={cn("button-small", styles.button)}
                            // href="/search-results#gsc.tab=0">
                            href="/chatgpt">
                            Search by AI
                        </CustomLink>
                        <CustomLink
                            className={cn("button-small", styles.button)}
                            href="/search-results#gsc.tab=0">
                            Search by Google
                        </CustomLink>
                        </div>
                        {/* <SearchBar /> */}
                        <p className={styles.ppp}>
                            This section helps you rediscover forgotten websites. Use our search tool and tips to find what you're looking for. Don't let forgetting a site hold you back - let us help you rediscover it today.
                        </p>
                    </div>
                </div>
            </div>
            <CustomLink className={styles.cl} href='/discover'>
            <div className={cn("section2", styles.section2)}>
                <div className={cn("container2", styles.container2)}>
                    <div className={cn("head2", styles.head)}>
                        <h2 className={cn("h2-1", styles.title, styles.discover)}>
                            DISCOVER
                        </h2>
                        <h1 className={cn("h3-1", styles.subtitle1)}>
                            Explore our collection of websites and ideas handpicked just for you.
                        </h1>
                        <p className={styles.pp}>
                            Welcome to our "Discover" section, where you can find handpicked websites and ideas. We curate a collection of the best content out there, whether you're looking for inspiration, entertainment, education, or just something new to explore.
                        </p>
                    </div>
                </div>
            </div>
            </CustomLink>
            <CustomLink className={styles.cl} href='/ideas'>
            <div className={cn("section3", styles.section3)}>
                <div className={cn("container3", styles.container3)}>
                    <div className={cn("head3", styles.head)}>
                        <h2 className={cn("h2-2", styles.title, styles.ideas)}>
                            IDEAS
                        </h2>
                        <h1 className={cn("h3-2", styles.subtitle2)}>
                            Browse our inspiration gallery to spark your creativity and get started on your next project.
                        </h1>
                        <p className={styles.p}>
                            Step into our "Ideas" section and ignite your imagination. Our gallery of creative concepts is designed to spark your creativity and get you started on your next project. From DIY projects to innovative business ideas, we've got it all. Browse our inspiration gallery now and start creating something unique.
                        </p>
                    </div>
                </div>
            </div>
            </CustomLink>
        </>
    );
    
};

export default Home;
