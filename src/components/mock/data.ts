import { TWebData, Category } from "types/WebData"
  
export const data: TWebData[] = [    
    {
        name: "Googlee",
        url: "https://www.google.com/",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        category: [
          Category.SEARCH_ENGINES,
          Category.SOCIAL_MEDIA,
          Category.MAPS,
          Category.ADVERTISING,
          Category.CLOUD_COMPUTING,
          Category.VIDEO_SHARING,
          Category.EMAIL,
          Category.CLOUD_STORAGE
        ]
    },
    {
        name: "Amazon",
        url: "https://www.amazon.com",
        image: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/amazon_app_logo_us_4x._V516764851_.png",
        category: [
            Category.ECOMMERCE,
            Category.CLOUD_COMPUTING,
            Category.DIGITAL_STREAMING,
            Category.ONLINE_MARKETPLACE,
            Category.BOOKS,
            Category.ELECTRONICS,
            Category.MUSIC,
            Category.FASHION,
        ]
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com",
        image: "https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg",
        category: [
            Category.VIDEO,
            Category.SOCIAL_MEDIA,
            Category.ENTERTAINMENT,
            Category.MUSIC,
            Category.VLOGS,
            Category.NEWS,
            Category.LIVE_STREAMING,
            Category.GAMING,
        ]
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com",
        image: "https://www.facebook.com/images/fb_icon_325x325.png",
        category: [
            Category.SOCIAL_MEDIA,
            Category.ONLINE_MARKETPLACE,
            Category.ADVERTISING,
            Category.NEWS,
            Category.DATING,
        ]
    },
    {
        name: "Twitter",
        url: "https://twitter.com",
        image: "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7275.png",
        category: [
            Category.SOCIAL_MEDIA,
            Category.BLOGGING,
            Category.NEWS,
            Category.ENTERTAINMENT,
            Category.SPORTS,
            Category.POLITICS,
            Category.BUSINESS,
            Category.MARKETING,
            Category.CUSTOMER_SERVICE,
        ]
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        image: "",
        category: [
            Category.SOCIAL_MEDIA,
            Category.PHOTOGRAPHY,
            Category.ART,
            Category.VIDEO,
            Category.SHOPPING,
            Category.ADVERTISING,
            Category.MARKETING
        ]
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        image: "",
        category: [
          Category.BUSINESS,
          Category.CAREERS_AND_EMPLOYMENT,
          Category.EDUCATION,
          Category.TECHNOLOGY,
          Category.MARKETING,
          Category.SELF_HELP,
          Category.NEWS,
          Category.RECRUITMENT,
        ]
    },
    {
        name: "Wikipedia",
        url: "https://www.wikipedia.org/",
        image: "",
        category: [
          Category.REFERENCE,
          Category.EDUCATION,
          Category.RESEARCH,
          Category.LITERATURE,
          Category.NEWS,
          Category.LAW_AND_GOVERNMENT,
        ]
    },
    {
        name: "Reddit",
        url: "https://www.reddit.com/",
        image: "",
        category: [
          Category.NEWS,
          Category.COMEDY,
          Category.POLITICS,
          Category.SCIENCE,
          Category.GAMING,
          Category.ARTS_AND_ENTERTAINMENT,
          Category.CULTURE,
        ]
    },
    {
        name: "Netflix",
        url: "https://www.netflix.com/",
        image: "",
        category: [
          Category.TELEVISION
        ]
    },
    {
        name: "eBay",
        url: "https://www.ebay.com/",
        image: "https://www.ebayinc.com/wp-content/uploads/2019/11/EBAY-Logo.png",
        category: [
            Category.AUTOS_AND_VEHICLES,
            Category.BUSINESS,
            Category.COLLECTIBLES,
            Category.COMPUTERS_AND_ELECTRONICS,
            Category.FASHION,
            Category.HOME_AND_GARDEN,
            Category.ONLINE_MARKETPLACE,
            Category.SHOPPING
        ]
    },
    {
        name: "Pinterest",
        url: "https://www.pinterest.com/",
        image: "",
        category: [
          Category.ART,
          Category.BEAUTY_AND_FITNESS,
          Category.DIY,
          Category.FOOD_AND_DRINK,
          Category.HOME_AND_GARDEN,
          Category.TRAVEL,
          Category.WEDDINGS,
        ],
      },
      {
        name: "Apple",
        url: "https://www.apple.com/",
        image: "",
        category: [
          Category.COMPUTERS_AND_ELECTRONICS,
          Category.EDUCATION,
          Category.ENTERTAINMENT,
          Category.MUSIC,
          Category.PROGRAMMING,
          Category.SOFTWARE,
        ],
      },
      {
        name: "Microsoft",
        url: "https://www.microsoft.com/",
        image: "",
        category: [
          Category.BUSINESS_AND_FINANCE,
          Category.COMPUTERS_AND_ELECTRONICS,
          Category.EDUCATION,
          Category.GAMING,
          Category.TECHNOLOGY,
        ],
      },
      {
        name: "IMDb",
        url: "https://www.imdb.com/",
        image: "",
        category: [
          Category.ARTS_AND_ENTERTAINMENT,
          Category.BUSINESS_AND_FINANCE,
          Category.ENTERTAINMENT,
          Category.MEDIA,
        ],
      },
      {
        name: "Etsy",
        url: "https://www.etsy.com/",
        image: "",
        category: [
          Category.ART,
          Category.BUSINESS,
          Category.HOME_AND_GARDEN,
          Category.SHOPPING,
        ],
      },
      {
        name: "CNN",
        url: "https://www.cnn.com/",
        image: "",
        category: [
          Category.BUSINESS_AND_FINANCE,
          Category.NEWS,
          Category.POLITICS,
          Category.TECHNOLOGY,
        ],
      },
      {
        name: "BBC",
        url: "https://www.bbc.com/",
        image: "",
        category: [
          Category.BUSINESS_AND_FINANCE,
          Category.NEWS,
          Category.SCIENCE,
          Category.SPORTS,
        ],
      },
      {
        name: "Forbes",
        url: "https://www.forbes.com/",
        image: "",
        category: [
          Category.BUSINESS,
          Category.FINANCE,
          Category.MARKETING,
          Category.TECHNOLOGY,
          Category.LIFESTYLE,
          Category.REAL_ESTATE,
          Category.EDUCATION,
        ],
      },
      {
        name: "Quora",
        url: "https://www.quora.com/",
        image: "",
        category: [
          Category.EDUCATION,
          Category.CAREERS_AND_EMPLOYMENT,
          Category.COMMUNITY,
          Category.PEOPLE_AND_SOCIETY,
          Category.PERSONAL_DEVELOPMENT,
          Category.CULTURE,
        ],
      },
      {
        name: "Medium",
        url: "https://medium.com/",
        image: "",
        category: [
          Category.BLOGGING,
          Category.WRITING,
          Category.SELF_HELP,
          Category.JOURNALISM,
          Category.NEWS,
          Category.PERSONAL_DEVELOPMENT,
          Category.SOCIAL_MEDIA,
          Category.CULTURE,
        ],
      },
      {
        name: "The New York Times",
        url: "https://www.nytimes.com/",
        image: "nyt_image_url",
        category: [
          Category.NEWS,
          Category.BUSINESS,
          Category.TECHNOLOGY,
          Category.ARTS_AND_ENTERTAINMENT,
          Category.SCIENCE,
          Category.TRAVEL,
          Category.SPORTS,
          Category.FASHION,
        ],
      },
      {
        name: "GitHub",
        url: "https://github.com/",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        category: [
          Category.OPEN_SOURCE,
          Category.PROJECT_MANAGEMENT,
          Category.PROGRAMMING,
          Category.COMMUNITY,
          Category.EDUCATION,
        ],
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        image:
          "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        category: [
          Category.PROGRAMMING,
          Category.COMMUNITY,
          Category.EDUCATION,
        ],
      },
      {
        name: "Dropbox",
        url: "https://www.dropbox.com/",
        image:
          "https://cfl.dropboxstatic.com/static/images/icons/icon_sparkle_256-vflSx24RL.png",
        category: [
          Category.CLOUD_STORAGE,
          Category.PROJECT_MANAGEMENT,
          Category.CLOUD_STORAGE
        ],
      },
      {
        name: "Canva",
        url: "https://www.canva.com/",
        image: "",
        category: [
          Category.ART,
          Category.ADVERTISING,
          Category.MARKETING,
          Category.SOCIAL_MEDIA,
          Category.EDUCATION
        ]
    },
    {
        name: "Coursera",
        url: "https://www.coursera.org/",
        image: "",
        category: [
          Category.ONLINE_COMMUNITIES,
          Category.EDUCATION,
          Category.BUSINESS_AND_FINANCE,
          Category.TECHNOLOGY
        ]
    },
    {
        name: "Duolingo",
        url: "https://www.duolingo.com/",
        image: "",
        category: [
          Category.EDUCATION,
          Category.EDUCATION,
          Category.SELF_HELP
        ]
    },
    {
        name: "Airbnb",
        url: "https://www.airbnb.com/",
        image: "https://www.airbnb.com/favicon.ico",
        category: [
            Category.TRAVEL,
            Category.HOSPITALITY,
            Category.ONLINE_MARKETPLACE,
            Category.COMMUNITY,
        ]
    },
    {
        name: "Zillow",
        url: "https://www.zillow.com/",
        image: "https://www.zillow.com/favicon.ico",
        category: [
            Category.REAL_ESTATE,
            Category.HOME,
            Category.BUSINESS_AND_FINANCE,
        ]
    },
    {
        name: "WebMD",
        url: "https://www.webmd.com/",
        image: "https://www.webmd.com/favicon.ico",
        category: [
            Category.HEALTH,
            Category.MEDICAL,
            Category.FITNESS,
            Category.NUTRITION,
            Category.WELLNESS,
        ]
    },
    {
        name: "Yelp",
        url: "https://www.yelp.com/",
        image: "",
        category: [
            Category.BUSINESS,
            Category.SHOPPING,
            Category.ENTERTAINMENT,
            Category.TRAVEL,
            Category.TOURISM,
            Category.RESTAURANTS,
            Category.BARS,
            Category.LOCAL_SEARCH
        ]
    },
    {
        name: "Zillow",
        url: "https://www.zillow.com/",
        image: "https://www.zillowstatic.com/static/logos/logo-65x14.png",
        category: [
            Category.REAL_ESTATE,
            Category.FINANCE
        ]
    },
    {
        name: "WebMD",
        url: "https://www.webmd.com/",
        image: "",
        category: [
            Category.HEALTH,
            Category.MEDICAL,
            Category.WELLNESS,
            Category.FITNESS,
            Category.NUTRITION,
            Category.LIFESTYLE
        ]
    },
    {
        name: "National Geographic",
        url: "https://www.nationalgeographic.com/",
        image: "",
        category: [
            Category.SCIENCE,
            Category.NATURE,
            Category.ENVIRONMENT,
            Category.PHOTOGRAPHY,
            Category.TRAVEL,
            Category.HISTORY,
            Category.CULTURE,
            Category.ADVENTURE
        ]
    },
    {
        name: "Shopify",
        url: "https://www.shopify.com",
        image: "",
        category: [
          Category.ECOMMERCE,
          Category.BUSINESS,
          Category.TECHNOLOGY,
        ],
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com",
        image: "",
        category: [
          Category.CAREERS_AND_EMPLOYMENT,
          Category.BUSINESS_AND_FINANCE,
        ],
      },
      {
        name: "Investopedia",
        url: "https://www.investopedia.com",
        image: "",
        category: [
          Category.FINANCE,
          Category.BUSINESS,
          Category.TECHNOLOGY,
        ],
      },
      {
        name: "ESPN",
        url: "https://www.espn.com/",
        image: "",
        category: [
          Category.SPORTS,
        ]
      },
      {
        name: "Chess.com",
        url: "https://www.chess.com/",
        image: "",
        category: [
          Category.GAMING,
          Category.HOBBIES_AND_LEISURE,
          Category.SOCIAL_MEDIA,
          Category.SPORTS
        ]
    },
    {
        name: "Sketchfab",
        url: "https://sketchfab.com/",
        image: "https://static.sketchfab.com/img/press/logos/sketchfab-logo-black.png",
        category: [
          Category.ART,
          Category.VIRTUAL_REALITY,
          Category.ANIMATION,
          Category.EDUCATION,
          Category.GAMING
        ]
    },
    {
        name: "Pitchfork",
        url: "https://pitchfork.com/",
        image: "",
        category: [
          Category.MUSIC,
          Category.ARTS_AND_ENTERTAINMENT,
          Category.MEDIA
        ]
    },
    {
        name: "Mint",
        url: "https://www.mint.com/",
        image: "",
        category: [
          Category.BUSINESS_AND_FINANCE,
          Category.FINANCE,
          Category.INVESTMENT,
          Category.BANKING,
          Category.CREDIT,
        ]
      },
    ]