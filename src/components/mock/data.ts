import { TWebData } from "types/WebData"
import { Category} from "@prisma/client"

let u = "images/mock-logo/";
  
export const data: TWebData[] = [    
    {
        name: "Google",
        url: "https://www.google.com/",
        image: u + `1.webp`,
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
        image: u +`2.jpeg`,
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
        image: u +`3.webp`,
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
        image: u +`4.png`,
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
        image: u +`5.jpeg`,
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
        image: u +`6.webp`,
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
        image: u +`7.png`,
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
        image: u +`8.jpeg`,
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
        image: u +`9.jpeg`,
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
        image: u +`10.jpeg`,
        category: [
          Category.TELEVISION
        ]
    },
    {
        name: "eBay",
        url: "https://www.ebay.com/",
        image: u +`11.jpeg`,
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
        image: u +`12.png`,
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
        image: u +`13.jpeg`,
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
        image: u +`14.jpeg`,
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
        image: u +`15.jpeg`,
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
        image: u +`16.jpeg`,
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
        image: u +`17.jpeg`,
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
        image: u +`18.jpeg`,
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
        image: u +`19.jpeg`,
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
        image: u +`20.png`,
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
        image: u +`21.jpeg`,
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
        image: u +`22.jpeg`,
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
        image:u +`23.png`,
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
        image: u +`24.jpeg`,
        category: [
          Category.PROGRAMMING,
          Category.COMMUNITY,
          Category.EDUCATION,
        ],
      },
      {
        name: "Dropbox",
        url: "https://www.dropbox.com/",
        image: u +`25.jpeg`,
        category: [
          Category.CLOUD_STORAGE,
          Category.PROJECT_MANAGEMENT,
          Category.CLOUD_STORAGE
        ],
      },
      {
        name: "Canva",
        url: "https://www.canva.com/",
        image: u +`26.jpeg`,
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
        image: u +`27.png`,
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
        image: u +`28.png`,
        category: [
          Category.EDUCATION,
          Category.EDUCATION,
          Category.SELF_HELP
        ]
    },
    {
        name: "Airbnb",
        url: "https://www.airbnb.com/",
        image: u +`29.jpeg`,
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
        image: u +`30.png`,
        category: [
            Category.REAL_ESTATE,
            Category.HOME,
            Category.BUSINESS_AND_FINANCE,
        ]
    },
    {
        name: "WebMD",
        url: "https://www.webmd.com/",
        image: u +`31.png`,
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
        image: u +`41.jpeg`,
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
        name: "National Geographic",
        url: "https://www.nationalgeographic.com/",
        image: u +`32.jpeg`,
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
        image: u +`33.webp`,
        category: [
          Category.ECOMMERCE,
          Category.BUSINESS,
          Category.TECHNOLOGY,
        ],
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com",
        image: u +`34.jpeg`,
        category: [
          Category.CAREERS_AND_EMPLOYMENT,
          Category.BUSINESS_AND_FINANCE,
        ],
      },
      {
        name: "Investopedia",
        url: "https://www.investopedia.com",
        image: u +`35.png`,
        category: [
          Category.FINANCE,
          Category.BUSINESS,
          Category.TECHNOLOGY,
        ],
      },
      {
        name: "ESPN",
        url: "https://www.espn.com/",
        image: u +`36.png`,
        category: [
          Category.SPORTS,
        ]
      },
      {
        name: "Chess.com",
        url: "https://www.chess.com/",
        image: u +`37.png`,
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
        image: u +`38.png`,
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
        image: u +`39.webp`,
        category: [
          Category.MUSIC,
          Category.ARTS_AND_ENTERTAINMENT,
          Category.MEDIA
        ]
    },
    {
        name: "Mint",
        url: "https://www.mint.com/",
        image: u +`40.jpeg`,
        category: [
          Category.BUSINESS_AND_FINANCE,
          Category.FINANCE,
          Category.INVESTMENT,
          Category.BANKING,
          Category.CREDIT,
        ]
      },
      {
        name: "Udacity",
        url: "https://www.udacity.com/",
        image: u + `42.jpeg`,
        category: [
          Category.ONLINE_COMMUNITIES,
          Category.EDUCATION,
          Category.CAREERS_AND_EMPLOYMENT,
          Category.TECHNOLOGY,
          Category.COMPUTERS_AND_ELECTRONICS,
          Category.PROGRAMMING,
        ],
      },
      {
        name: "Fiverr",
        url: "https://www.fiverr.com/",
        image: u + `43.jpeg` ,
        category: [
          Category.BUSINESS,
          Category.ONLINE_MARKETPLACE,
          Category.WEB_DESIGN,
          Category.WEB_DEVELOPMENT,
          Category.WRITING,
          Category.MARKETING,
          Category.VIDEO_PRODUCTION,
        ],
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/",
        image: u + `44.png`,
        category: [
          Category.MUSIC,
        ],
      },
      {
        name: "Goodreads",
        url: "https://www.goodreads.com/",
        image: u + `45.png`,
        category: [
          Category.BOOKS,
          Category.BOOKS_AND_LITERATURE,
          Category.LITERATURE,
        ],
      },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org",
          image: u + `46.png`,
          category: [
            Category.EDUCATION,
            Category.SCIENCE,
            Category.TECHNOLOGY,
          ],
        },
        {
          name: "Wattpad",
          url: "https://www.wattpad.com",
          image: u + `47.png`,
          category: [
            Category.WRITING,
            Category.BOOKS_AND_LITERATURE,
            Category.ARTS_AND_ENTERTAINMENT,
          ],
        },
        {
          name: "MyFitnessPal",
          url: "https://www.myfitnesspal.com/",
          image: u + `48.png`,
          category: [
            Category.HEALTH_AND_WELLNESS,
            Category.FITNESS,
            Category.NUTRITION,
            Category.FOOD_AND_DRINK,
          ]
        },
        {
          name: "Wayfair",
          url: "https://www.wayfair.com/",
          image: u + `49.png`,
          category: [
            Category.HOME,
            Category.HOME_AND_GARDEN,
            Category.SHOPPING,
          ]
        },
        {
          name: "Allrecipes",
          url: "https://www.allrecipes.com/",
          image: u + `50.jpeg`,
          category: [
            Category.FOOD_AND_DRINK,
          ]
        },
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/",
          image: u + `51.jpeg`,
          category: [
            Category.EDUCATION,
            Category.PROGRAMMING,
            Category.WEB_DEVELOPMENT,
           Category.CAREERS_AND_EMPLOYMENT,
          ],
        },
        {
          name: "Healthline",
          url: "https://www.healthline.com/",
          image: u + `52.png`,
          category: [
            Category.HEALTH,
            Category.HEALTH_AND_WELLNESS,
            Category.MEDICAL,
            Category.NUTRITION,
            Category.RESEARCH,
          ],
        },
        {
          name: "TripAdvisor",
          url: "https://www.tripadvisor.com",
          image: u + `53.jpeg`,
          category: [
              Category.TRAVEL,
              Category.RESTAURANTS,
          ],
        },
        {
          name: "Politico",
          url: "https://www.politico.com/",
          image: u + `54.png`,
          category: [
              Category.NEWS,
              Category.POLITICS,
          ]
      },
      {
        name: "Houzz",
        url: "https://www.houzz.com/",
        image: u + `55.png`,
        category: [
          Category.HOME_AND_GARDEN,
          Category.DESIGN,
          Category.DIY,
        ],
      },
      {
        name: "AllTrails",
        url: "https://www.alltrails.com/",
        image: u + `56.jpeg`,
        category: [
            Category.ADVENTURE,
            Category.PETS_AND_ANIMALS,
            Category.SPORTS,
            Category.TRAVEL,
        ],
    },
    {
      name: "Pocket",
      url: "https://getpocket.com/",
      image: u + `57.png`,
      category: [
        Category.NEWS,
      ]
    },
    {
      name: "Flipboard",
      url: "https://flipboard.com/",
      image: u + `58.jpeg`,
      category: [
        Category.NEWS,
      ]
    },
    {
      name: "Spotify",
      url: "https://www.spotify.com/",
      image: u + `59.jpeg`,
      category: [
        Category.MUSIC,
      ]
    },
    {
      name: "Skillshare",
      url: "https://www.skillshare.com",
      image: u + `60.png`,
      category: [
        Category.ONLINE_COMMUNITIES,
        Category.BUSINESS,
        Category.EDUCATION,
        Category.DESIGN,
        Category.PHOTOGRAPHY,
        Category.WRITING,
      ],
    },
    {
      name: "Trello",
      url: "https://trello.com/",
      image: u + `61.jpeg`,
      category: [
        Category.PROJECT_MANAGEMENT,
      ],
    },
    {
      name: "NBA.com",
      url: "https://www.nba.com/",
      image: u + `62.jpeg`,
      category: [
          Category.SPORTS,
          Category.NEWS,
          Category.VIDEO_SHARING
      ]
    },
    {
      name: "Buzzfeed",
      url: "https://www.buzzfeed.com/",
      image: u + `63.jpeg`,
      category: [
        Category.ENTERTAINMENT,
        Category.LIFESTYLE,
        Category.SOCIAL_MEDIA,
        Category.NEWS,
      ]
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/",
      image: u + `65.png`,
      category: [
        Category.GAMING,
        Category.LIVE_STREAMING,
        Category.VIDEO,
        Category.SOCIAL_MEDIA,
        Category.COMMUNITY,
      ]
    },
    {
        name: "DeviantArt",
        url: "https://www.deviantart.com/",
        image: u + `66.png`,
        category: [
          Category.ART,
          Category.DIGITAL_ART,
          Category.PHOTOGRAPHY,
          Category.LITERATURE,
          Category.COMMUNITY,
        ]
    },
    {
        name: "OpenTable",
        url: "https://www.opentable.com/",
        image: u + `67.jpeg`,
        category: [
          Category.FOOD_AND_DRINK,
        ]
    },
    {
      name: "Business Insider",
      url: "https://www.businessinsider.com/",
      image: u + `68.png`,
      category: [
        Category.BUSINESS,
        Category.TECHNOLOGY,
        Category.POLITICS,
        Category.LIFESTYLE,
        Category.ADVERTISING,
        Category.MARKETING,
        Category.CAREERS_AND_EMPLOYMENT,
      ]
    },
    {
      name: "DeviantArt",
      url: "https://www.deviantart.com/",
      image: u + `69.png`,
      category: [
        Category.ART,
        Category.PHOTOGRAPHY,
        Category.LITERATURE,
        Category.COMMUNITY,
        Category.DIGITAL_ART,
      ]
    },
    {
      name: "Groupon",
      url: "https://www.groupon.com/",
      image: u + `70.png`,
      category: [
        Category.TRAVEL,
        Category.BEAUTY_AND_FITNESS,
        Category.HEALTH,
        Category.ONLINE_MARKETPLACE,
        Category.ONLINE_COMMUNITIES,
        Category.CAREERS_AND_EMPLOYMENT,
        Category.EDUCATION,
      ]
  },
  {
      name: "Rotten Tomatoes",
      url: "https://www.rottentomatoes.com/",
      image: u + `71.jpeg`,
      category: [
        Category.ARTS_AND_ENTERTAINMENT,
        Category.TELEVISION,
        Category.NEWS,
      ]
  },
  {
      name: "The Guardian",
      url: "https://www.theguardian.com/",
      image: u + `72.png`,
      category: [
        Category.NEWS,
        Category.ARTS_AND_ENTERTAINMENT,
        Category.POLITICS,
        Category.SCIENCE,
      ]
  },
    {
      name: "LendingTree",
      url: "https://www.lendingtree.com/",
      image: u + `73.jpeg`,
      category: [
        Category.BUSINESS_AND_FINANCE,
        Category.FINANCE,
        Category.BANKING,
      ]
    },
    {
      name: "CodePen",
      url: "https://codepen.io/",
      image: u + `74.jpeg`,
      category: [
        Category.COMMUNITY,
        Category.WEB_DESIGN,
        Category.WEB_DEVELOPMENT,
      ],
    },
    {
      name: "Cookpad",
      url: "https://cookpad.com/",
      image: u + `75.png`,
      category: [
        Category.FOOD_AND_DRINK,
      ],
    },
  ];
  