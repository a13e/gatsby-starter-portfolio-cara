const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Kohei Abe', // Navigation and Site Title
  siteTitleAlt: 'Kohei Abe', // Alternative Site title for SEO
  siteTitleShort: 'Kohei Abe', // short_name for manifest
  siteUrl: 'http://koheia.be', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Kohei Abe portfolio',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@a13e_', // Twitter Username
  ogSiteName: 'Kohei Abe', // Facebook Site Name
  ogLanguage: 'ja', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
