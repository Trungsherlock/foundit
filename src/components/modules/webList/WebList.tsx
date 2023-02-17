import React, {FC} from "react";
import cn from "classnames";
import styles from "./WebList.module.sass";

const data = [
    {
        image: "/images/mock-logo/fb.png",
        url: "facebook.com",
    },
    {
        image: "/images/mock-logo/insta.png",
        url: "instagram.com",
    },
    {
        image: "/images/mock-logo/netflix.webp",
        url: "netflix.com",
    },
    {
        image: "/images/mock-logo/linkedin.png",
        url: "linkedin.com",
    },
    {
        image: "/images/mock-logo/github.jpg",
        url: "github.com",
    },
    {
        image: "/images/mock-logo/UMass.png",
        url: "umass.com",
    },
    {
        image: "/images/mock-logo/fb.png",
        url: "facebookkkkkkkkk.com",
    },
    {
        image: "/images/mock-logo/insta.png",
        url: "instagrammm.com",
    },
    {
        image: "/images/mock-logo/netflix.webp",
        url: "netflixxx.com",
    },
    {
        image: "/images/mock-logo/linkedin.png",
        url: "linkedin.com",
    },
    {
        image: "/images/mock-logo/UMass.png",
        url: "umass.com",
    },
    {
        image: "/images/mock-logo/fb.png",
        url: "facebook.com",
    },
    {
        image: "/images/mock-logo/insta.png",
        url: "instagram.com",
    },
    {
        image: "/images/mock-logo/linkedin.png",
        url: "linkedinnnnn.com",
    },
    {
        image: "/images/mock-logo/github.jpg",
        url: "github.com",
    },
    {
        image: "/images/mock-logo/UMass.png",
        url: "umass.com",
    },
    {
        image: "/images/mock-logo/insta.png",
        url: "instagram.com",
    },
    {
        image: "/images/mock-logo/netflix.webp",
        url: "netflix.com",
    },
    {
        image: "/images/mock-logo/linkedin.png",
        url: "linkedin.com",
    },
    {
        image: "/images/mock-logo/github.jpg",
        url: "github.com",
    },
    {
        image: "/images/mock-logo/UMass.png",
        url: "umass.com",
    },
    {
        image: "/images/mock-logo/linkedin.png",
        url: "linkedinnnnnnnn.com",
    },
    {
        image: "/images/mock-logo/UMass.png",
        url: "umasssssssssss.com",
    },
];

const WebList: FC = () => {

    return (
        <div className={styles.chain}>
            {data.map((d) => (
            <div className={styles.head}>
                <div className={styles.avatar}>
                    <img src={d.image} alt="Logo" />
                </div>
                <div>
                    <div className={styles.username}>
                        {d.url}
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default WebList;