import React, {FC, useEffect, useState} from "react";
import styles from "./WebList.module.sass";
import {data} from "../../mock/data";
import { getRandomData } from "utils/getRandomData";
import { TWebData } from "types/WebData";
import { CustomLink } from "../customLink";

const WebList: FC = () => {

    const [randomData, setRandomData] = useState<TWebData[]>();

    useEffect(() => {
        setRandomData(getRandomData(data));
    }, []);

    return (
        <div className={styles.chain}>
            {randomData ? randomData.map((d, index) => (
            <CustomLink className={styles.head} href={d.url} key={index}>
                <div className={styles.avatar}>
                    <img src={d.image}/>
                </div>
                <div>
                    <div className={styles.username}>
                        {d.name}
                    </div>
                </div>
            </CustomLink>
            ))
                : <span>Loading...</span>
        }
        </div>
    )
}

export default WebList;