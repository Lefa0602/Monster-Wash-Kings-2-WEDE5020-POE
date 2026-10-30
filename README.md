# Monster Wash Kings


## WEDE5020 Web Development Introduction – POE

**Student:** Lethabo Molwantwa  
**Student Number:** ST10483962  
**Project:** Monster Wash Kings – Mobile Car Wash Website

## Live Website

[Visit Monster Wash Kings](https://lefa0602.github.io/Monster-Wash-Kings-2-WEDE5020-POE/)
---

## Project Overview

Monster Wash Kings is a mobile car wash business that provides convenient and affordable vehicle cleaning services. The business is aimed at customers who want their vehicles cleaned without having to wait in long queues or travel to a traditional car wash.

The website provides customers with information about the business, available services, pricing, contact information and an enquiry option.

Part 2 of the project focuses on improving the visual design of the website using CSS and making the website responsive across desktop, tablet and mobile screen sizes.

---

## Website Goals and Objectives

The main goal of the website is to provide customers with an easy and convenient way to learn about Monster Wash Kings and enquire about its car wash services.

### Objectives

- Provide clear information about Monster Wash Kings.
- Display the available car wash services and prices.
- Make it easy for customers to contact the business.
- Allow potential customers to submit service enquiries.
- Create a professional online presence for the business.
- Provide a simple and user-friendly website experience.

---

## Key Features and Functionality

The website includes the following pages:

- **Home** – Introduction to Monster Wash Kings and a call-to-action for customers.
- **About** – Information about the business, its mission, vision and values.
- **Services** – Available car wash services and pricing.
- **Enquiry** – Form for customers to submit service enquiries.
- **Contact** – Business contact information, service areas and a contact form.

The website uses HTML and CSS to create the structure, layout and visual presentation of the pages.

---

## Changelog

This section records the development changes and improvements made to the Monster Wash Kings website throughout the POE.

### Part 2 – Changes Based on Part 1 Feedback

- Reviewed the feedback received for Part 1 and identified areas requiring improvement.
- Improved the HTML structure by using clearer semantic sections and consistent classes across the website pages.
- Expanded and refined the website content on the Home, About, Services, Enquiry and Contact pages.
- Improved consistency across the navigation menus to make movement between pages easier.
- Organised the external CSS stylesheet into clearly labelled sections.
- Added comments to the CSS code to improve readability and maintainability.

### Part 2 – CSS Styling and Responsive Design

- Created an external stylesheet at `css/style.css`.
- Applied consistent typography, colours, spacing, borders, shadows and button styling across the website.
- Implemented responsive layouts using CSS media queries.
- Adjusted the layout, text and navigation for desktop, tablet and mobile screens.
- Tested the website at approximately 1440px (desktop), 768px (tablet) and 390px (mobile).
- Added screenshots to the `Screenshots` folder as evidence of responsive testing.

### Part 3 – JavaScript and Functionality

- Created an external JavaScript file at `js/script.js`.
- Implemented smooth scrolling for internal page links.
- Added booking date validation to prevent customers from selecting dates in the past.
- Added a console message to confirm that the JavaScript file loads successfully.
- Connected the Enquiry and Contact forms to FormSubmit.app using their HTML form action attributes.
- Tested both forms to confirm that customer submissions could be sent successfully.

### Part 3 – Deployment and Documentation

- Updated the README document with information about the JavaScript functionality and form implementation.
- Added the live website link to the README.
- Renamed the homepage from `Index.html` to `index.html` to meet GitHub Pages requirements.
- Configured GitHub Pages to publish the website from the root folder of the `main` branch.
- Successfully deployed the website using GitHub Pages.

# Part 1 Feedback and Changes

The Part 1 feedback was reviewed before continuing with the development of Part 2.

### Feedback That Achieved the Required Standard

The following sections received positive feedback and achieved the required standard:

- Goals and Objectives
- Current Analysis
- Proposed Website Features and Functionality
- Design Aesthetic
- Wireframes
- Technical Requirements
- Timeline
- Budget
- Content Research and Sourcing
- File and Folder Structure

The feedback confirmed that these sections had fully achieved the required standard. No major corrections were required for these areas.

### Areas Identified for Improvement

The Part 1 feedback identified the following areas for improvement:

- **Two Proposals** – Basic requirements were met, but more detail and accuracy could be added.
- **HTML Tags for Layout** – Good work, but minor improvements were required.
- **HTML Content Tags** – Good work, but minor improvements were required.
- **Sufficient Website Content** – Good work, but minor improvements were required.
# Responsive Testing

The website was tested using browser developer tools at desktop, tablet and mobile screen sizes.

The following screen sizes were tested:

- **Desktop:** 1440px wide
- **Tablet:** 768px wide
- **Mobile:** 390px wide

The website was checked to ensure that:

- Navigation remains usable.
- Content does not overflow the screen.
- The responsive image adjusts to the available screen width.
- Service cards adjust to different screen sizes.
- Buttons remain accessible.
- Forms remain usable.
- Text remains readable.
- Page sections adapt to smaller screens.

## Responsive Testing Evidence

### Desktop

The Home page was tested at approximately 1440px wide.

![Desktop Home Page](Screenshots/Desktop%20new.png)

### Tablet

The Home page was tested at approximately 768px wide.

![Tablet Home Page](Screenshots/Tablet%20new.png)

### Mobiles

The Home page was tested at approximately 390px wide.

![Mobile Home Page](Screenshots/Mobile%20new.png)

- **Website Navigation** – Good work, but minor improvements were required.
- **Code Comments** – Basic requirements were met, but more detail and accuracy were recommended.

### Action Taken in Part 2

The Part 1 feedback was considered during the development of Part 2.

The HTML structure was reviewed and improved by using clearer sections and shared classes across the website pages.

Website content was expanded and refined across the Home, About, Services, Enquiry and Contact pages.

The navigation was made consistent across all pages so that users can easily move between the different sections of the website.

The CSS stylesheet was organised into clearly labelled sections and comments were added to make the code easier to understand and maintain.

The sections that already achieved the required standard in Part 1 were retained while the areas identified for improvement were addressed during Part 2 development.

---

# Part 2 – CSS Styling and Responsive Design

## Part 2 Overview

Part 2 focuses on designing the visual appearance of the Monster Wash Kings website using CSS and implementing responsive design.

The website was updated to use an external CSS stylesheet shared across all HTML pages. The styling includes typography, colours, spacing, layout, borders, shadows, buttons and interactive states.

Responsive design was also implemented so that the website can adapt to desktop, tablet and mobile screen sizes.

---

## External CSS Stylesheet

A shared external stylesheet was created:

```text
css/style.css
# References

## References

## References

- [MDN Web Docs – CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs – CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries)
- [MDN Web Docs – Responsive Images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN Web Docs – CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [MDN Web Docs – CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [MDN Web Docs – JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [FormSubmit.app](https://formsubmit.app/)
## Part 3 – JavaScript Functionality

### Part 3 Overview

Part 3 focuses on implementing JavaScript functionality to improve the interactivity and usability of the Monster Wash Kings website.

An external JavaScript file was created and linked to the HTML pages.

### JavaScript File

The JavaScript file is located at:

`js/script.js`

### JavaScript Features

The following functionality was implemented:

- **Smooth Scrolling:** Internal page links smoothly scroll to their target sections.
- **Booking Date Validation:** The preferred booking date cannot be earlier than the current date.
- **Page Load Confirmation:** A console message confirms that the JavaScript file has loaded successfully.

### Form Functionality

The Enquiry and Contact forms were connected to FormSubmit.app using HTML form submission.

The forms allow customers to submit their information and send enquiries to the business.

Both forms were tested to confirm that submissions work successfully.

### Testing

JavaScript functionality was checked in the browser to confirm that the website continued to operate correctly after implementation.