import { Category, Type } from "types/WebData"

export const options = [
    { label: "Action", value: Category.ACTION },
    { label: "Adventure", value: Category.ADVENTURE },
    { label: "Advertising", value: Category.ADVERTISING },
    { label: "Animation", value: Category.ANIMATION },
    { label: "Anime", value: Category.ANIME },
    { label: "Art", value: Category.ART },
    { label: "Art and Entertainment", value: Category.ARTS_AND_ENTERTAINMENT },
    { label: "Autos and Vehicles", value: Category.AUTOS_AND_VEHICLES },
    { label: "Banking", value: Category.BANKING },
    { label: "Bars", value: Category.BARS },
    { label: "Beauty", value: Category.BEAUTY },
    { label: "Beauty and Fitness", value: Category.BEAUTY_AND_FITNESS },
    { label: "Betting", value: Category.BETTING },
    { label: "Blockchain", value: Category.BLOCKCHAIN },
    { label: "Betting", value: Category.BETTING },
    { label: "Blockchain", value: Category.BLOCKCHAIN },
    { label: "Blogging", value: Category.BLOGGING },
    { label: "Books", value: Category.BOOKS },
    { label: "Books and Literature", value: Category.BOOKS_AND_LITERATURE },
    { label: "Business", value: Category.BUSINESS },
    { label: "Business and Finance", value: Category.BUSINESS_AND_FINANCE },
    { label: "Careers and Employment", value: Category.CAREERS_AND_EMPLOYMENT },
    { label: "Charity", value: Category.CHARITY },
    { label: "Children", value: Category.CHILDREN },
    { label: "Cloud Computing", value: Category.CLOUD_COMPUTING },
    { label: "Cloud Storage", value: Category.CLOUD_STORAGE },
    { label: "Collectibles", value: Category.COLLECTIBLES },
    { label: "Comedy", value: Category.COMEDY },
    { label: "Community", value: Category.COMMUNITY },
    { label: "Computers and Electronics", value: Category.COMPUTERS_AND_ELECTRONICS },
    { label: "Credit", value: Category.CREDIT },
    { label: "Culture", value: Category.CULTURE },
    { label: "Customer Service", value: Category.CUSTOMER_SERVICE },
    { label: "Dating", value: Category.DATING },
    { label: "Design", value: Category.DESIGN },
    { label: "Digital Art", value: Category.DIGITAL_ART },
    { label: "Digital Streaming", value: Category.DIGITAL_STREAMING },
    { label: "DIY", value: Category.DIY },
    { label: "Drama", value: Category.DRAMA },
    { label: "Ecommerce", value: Category.ECOMMERCE },
    { label: "Education", value: Category.EDUCATION },
    { label: "Electronics", value: Category.ELECTRONICS },
    { label: "Email", value: Category.EMAIL },
    { label: "Entertainment", value: Category.ENTERTAINMENT },
    { label: "Environment", value: Category.ENVIRONMENT },
    { label: "Event", value: Category.EVENT },
    { label: "Family and Parenting", value: Category.FAMILY_AND_PARENTING },
    { label: "Fashion", value: Category.FASHION },
    { label: "Finance", value: Category.FINANCE },
    { label: "Fitness", value: Category.FITNESS },
    { label: "Food", value: Category.FOOD },
    { label: "Food and Drink", value: Category.FOOD_AND_DRINK },
    { label: "Gaming", value: Category.GAMING },
    { label: "Gardening", value: Category.GARDENING },
    { label: "Government", value: Category.GOVERNMENT },
    { label: "Health", value: Category.HEALTH },
    { label: "Health and Wellness", value: Category.HEALTH_AND_WELLNESS },
    { label: "Hobbies and Leisure", value: Category.HOBBIES_AND_LEISURE },
    { label: "Hospitality", value: Category.HOSPITALITY },
    { label: "History", value: Category.HISTORY },
    { label: "Home", value: Category.HOME },
    { label: "Home and Garden", value: Category.HOME_AND_GARDEN },
    { label: "Humor", value: Category.HUMOR },
    { label: "Internet and Telecom", value: Category.INTERNET_AND_TELECOM },
    { label: "Investment", value: Category.INVESTMENT },
    { label: "Journalism", value: Category.JOURNALISM },
    { label: "Law and Government", value: Category.LAW_AND_GOVERNMENT },
    { label: "Lifestyle", value: Category.LIFESTYLE },
    { label: "Literature", value: Category.LITERATURE },
    { label: "Live Streaming", value: Category.LIVE_STREAMING },
    { label: "Local Search", value: Category.LOCAL_SEARCH },
    { label: "Maps", value: Category.MAPS },
    { label: "Marketing", value: Category.MARKETING },
    { label: "Media", value: Category.MEDIA },
    { label: "Medical", value: Category.MEDICAL },
    { label: "Music", value: Category.MUSIC },
    { label: "Nature", value: Category.NATURE },
    { label: "News", value: Category.NEWS },
    { label: "Non-Profit", value: Category.NON_PROFIT },
    { label: "Nutrition", value: Category.NUTRITION },
    { label: "Online Communities", value: Category.ONLINE_COMMUNITIES },
    { label: "Online Marketplace", value: Category.ONLINE_MARKETPLACE },
    { label: "Open Source", value: Category.OPEN_SOURCE },
    { label: "Parenting", value: Category.PARENTING },
    { label: "Personal Development", value: Category.PERSONAL_DEVELOPMENT },
    { label: "People and Society", value: Category.PEOPLE_AND_SOCIETY },
    { label: "Pets", value: Category.PETS },
    { label: "Pets and Animals", value: Category.PETS_AND_ANIMALS },
    { label: "Philosophy", value: Category.PHILOSOPHY },
    { label: "Photography", value: Category.PHOTOGRAPHY },
    { label: "Politics", value: Category.POLITICS },
    { label: "Programming", value: Category.PROGRAMMING },
    { label: "Project Management", value: Category.PROJECT_MANAGEMENT },
    { label: "Psychology", value: Category.PSYCHOLOGY },
    { label: "Real Estate", value: Category.REAL_ESTATE },
    { label: "Recruitment", value: Category.RECRUITMENT },
    { label: "Reference", value: Category.REFERENCE },
    { label: "Religion", value: Category.RELIGION },
    { label: "Research", value: Category.RESEARCH },
    { label: "Restaurants", value: Category.RESTAURANTS },
    { label: "Science", value: Category.SCIENCE },
    { label: "Search Engines", value: Category.SEARCH_ENGINES },
    { label: "Self Help", value: Category.SELF_HELP },
    { label: "Shopping", value: Category.SHOPPING },
    { label: "Social Media", value: Category.SOCIAL_MEDIA },
    { label: "Software", value: Category.SOFTWARE },
    { label: "Sports", value: Category.SPORTS },
    { label: "Technology", value: Category.TECHNOLOGY },
    { label: "Television", value: Category.TELEVISION },
    { label: "Theater", value: Category.THEATER },
    { label: "Travel", value: Category.TRAVEL },
    { label: "Tourism", value: Category.TOURISM },
    { label: "Uncategorized", value: Category.UNCATEGORIZED },
    { label: "Video", value: Category.VIDEO },
    { label: "Video Production", value: Category.VIDEO_PRODUCTION },
    { label: "Video Sharing", value: Category.VIDEO_SHARING },
    { label: "Virtual Reality", value: Category.VIRTUAL_REALITY },
    { label: "Vlogs", value: Category.VLOGS },
    { label: "Weather", value: Category.WEATHER },
    { label: "Web Design", value: Category.WEB_DESIGN },
    { label: "Web Development", value: Category.WEB_DEVELOPMENT },
    { label: "Web Hosting", value: Category.WEB_HOSTING },
    { label: "Weddings", value: Category.WEDDINGS },
    { label: "Wellness", value: Category.WELLNESS },
    { label: "Writing", value: Category.WRITING }
];