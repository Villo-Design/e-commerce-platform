## Quick start

1. Install the shopify CLI by following these instructions https://shopify.dev/themes/tools/cli/getting-started
2. Install these vscode extensions (if you are using vscode) https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid and this https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets to aide with development
3. Run `shopify theme pull` to pull the latest theme from shopify
4. Run `shopify theme serve` to run the dev server

## The src code

This project is built using shopify and therefore uses shopify's own `.liquid` template language which is built on top of HTML, documentation of which can be found here https://shopify.github.io/liquid/.

This project also uses CSS and JavaScript to drive the styling and functionality of the website.

To insert CSS files into a template type the following `{{ 'your-styles.css' | asset_url | stylesheet_tag }}`
To insert JS files into a template type the following `{{ 'your-styles.js' | asset_url | script_tag }}`
To insert Image files into a template type the following `<img src="{{ 'your-asset-name.png' | asset_img_url }}" />`

### Structure of the code

This section will briefly describe what is in each folder (assets, config, layout etc.), and generally how the project is setup.

#### Layout

There is only one file in this folder called `theme.liquid`, this file is the wrapper for each page and included in it are the header, footer and content of the page. The header is included with the code `{% include 'header' %}`, the footer as `{% include 'footer' %}` and the content of the page as `{{ content_for_layout }}`

#### Templates

This folder includes files which represent the content of each page on the website.

**404.liquid** - This is the 404 page which will be shown whenever a user navigates to a page which does not exist on the website
**cart.liquid** - This is the checkout page and lives on the url `/cart`
**collection.liquid** - This is the shop page and lives on the url `/collections/all`
**gift_card.liquid** - This page is not needed but cannot be deleted for some reason
**index.liquid** - This is the home page and lives on the url `/`
**page.about-us.liquid** - This is the about us page and lives on the url `/pages/about-us`
**page.contact.liquid** - This is the about us page and lives on the url `/pages/contact`
**page.faq.liquid** - This is the about us page and lives on the url `/pages/faq`
**page.liquid** - This is a fallback page for any other pages that are created (no work needs to be done here)
**product.liquid** - This is the page for a single product and lives on the url `/products/${product_id}`

#### Snippets

This folder includes re-usable `.liquid` files which are used across many pages. To include a snippet in a template, type the following `{% include 'header' %}` (You can include parameters as well see here https://www.shopify.co.uk/partners/blog/88186566-tips-for-using-snippets-in-your-shopify-theme)

The snippets in this folder at the moment are the header, footer and the main menu (which lives in the header)

#### Locales

This includes translation data in the form of `.json` files. To see an example of translation data being used, look at the file `./templates/404.liquid`.

#### Assets

This folder will host all of your css, js and image files which can be referenced in your liquid files

### How to add features/code

1. Firstly make sure you have the shopify CLI installed and git setup on your machine
2. Then pull the latest copy of the project using `git pull`
3. Then run `shopify theme serve` to create a local development server of the project
4. Make code changes, as you make changes your webpage should automatically update.
5. Once you have finished your changes, add your files to git `git add .`, commit them `git commit -m "Commit message"` and then push the changes to GitHub `git push`.
