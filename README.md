# coming-soon

You are in charge of creating a preview site for an upcoming movie/game/line of products...your choice! Explore how you can create various front-end effects using CSS and JS.

![Parallax Example](https://github.com/junior-devleague/coming-soon/blob/master/example.png)

## Objective

Use **HTML Elements**, **CSS Styles**, and **JS Functions** to create various effects for a captivating preview landing page.

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures and attributes.
* Intermediate understanding of CSS Stylings (margin, padding, background-image, etc.).
* Basic understanding of Flexbox.
* Intermediate understanding of JS and DOM.

## Concepts

Terms | Description
------|-------------
Landing Page | Standalone web page usually created for the purposes of marketing or advertising. It's where a visitor will "land" when clicking on an ad.
Parallax Scrolling | Web site trend where the background content (image/media) is moved at a different speed than the foreground content while scrolling. Ex. https://www.w3schools.com/howto/tryhow_css_parallax_demo.htm
Snackbar | Usually a single line of text related to the operation performed. They may contain text but no icons. Snackbars animate from the bottom edge of the screen. Ex. https://www.w3schools.com/howto/howto_js_snackbar.asp
Toasts | Similar to snackbar except they are primarily used for system messaging and may not be swiped off screen.

## Your Challenge

### Part I  

To complte Part I, fulfill the following requirements:

1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* assets folder (from this folder)
3. Link all of your files correctly.

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Follow the instructions to create a general template, then customize towards the end.
  * Create a ```div``` with ```class``` of "parallax".
  * Create a ```div``` with ```class``` of "section", and text of "Section 1".
  * Create a ```div``` with ```class``` of "parallax".
  * Create a ```div``` with ```class``` of "section", and text of "Section 2".
  * Create a ```div``` with ```class``` of "parallax".
  * Create a ```div``` with ```class``` of "section" and text of "Section 3".
  * Create a ```div``` with ```class``` of "parallax".

### Part III CSS

To complete Part III, fulfill the following requirements:

1. Target the ```body``` element.
  * Set its margin to 0px.
2. Target the ```class``` of "parallax".
  * Set the background-image to an image of your choice.
  * Set the height to 500px.
  * Set the background-attachment to fixed.
  * Set the background-position to center.
  * Set the background-size to cover.
3. Target the ```class``` of "section".
  * Set the width to 100%.
  * Set the height to 400px.
  * Set the background-color to white.
  * Activate flexbox.
  * Center the items horizontally using flexbox.
  * Center the items vertically usign flexbox.

### Part IV Customize!

To complete Part IV, fulfill the following requirements:

1. Brainstorm what you would like to make a coming soon page for (upcoming movie, game...etc.). Sketch out any ideas. If you are out of ideas, ask the instructor! They will assume the role of a "client" and will ask you to build a preview website for them. 
2. Incorporate the following in your preview site:
* Navigation bar with links to the different sections on that same page. See HTML Link Bookmarking: https://www.w3schools.com/html/html_links.asp
* Sticky social bar - Ex. https://www.w3schools.com/howto/howto_css_sticky_social_bar.asp
* Timeout popup (after 10 seconds) that displays a modal box asking for a user to input their email if they are interested in getting updates. Once the user has submitted their email, a **Snackbar** should appear on the bottom saying "Thank you, your email [user's email] has been successfully added to our mailing list. "
