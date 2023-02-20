enum Category {
    INTERNET_AND_TELECOM,
    SOCIAL_MEDIA,
    COMPUTERS_AND_ELECTRONICS,
    BUSINESS,
    MEDIA,
}
  
export const data = [
    {
        name: "Google",
        url: "https://www.google.com/",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        category: [
          Category.INTERNET_AND_TELECOM,
          Category.SOCIAL_MEDIA,
          Category.COMPUTERS_AND_ELECTRONICS,
          Category.BUSINESS,
          Category.MEDIA
        ]
    }
  ]