---
# UNIQUE PROJECT IDENTIFIER: 
# This ID links versions of the project in different languages.
# It MUST be THE SAME in the .md file for both languages.
# Use lowercase, numbers, and hyphens (-). Avoid spaces or special characters.
id: e-commerce-platform 

# ORDER:
# Determines the order in which projects appear on the main page (optional).
# Lower numbers come first.
order: 1

# TITLE (Language Specific):
# The title of the project in this language. Appears in the modal window and project card.
title: "E-Commerce Platform"

# SHORT DESCRIPTION (Language Specific):
# A short, one or two-sentence summary that will appear on the project card.
short_description: "A full-featured online shopping platform developed with modern React and Node.js technologies, offering a seamless user experience."

# TAGS (Can be Language Specific or common):
# Main technologies used or keywords for the project.
# Can be displayed on the project card and in the modal.
tags: ["React", "Node.js", "MongoDB", "TypeScript", "Express.js", "Stripe"]

# PROJECT CARD VISUAL SETTINGS (Used if no cover image):
image_gradient_from: "ctp-blue"   # Start color of the gradient (Tailwind color class)
image_gradient_to: "ctp-sapphire" # End color of the gradient

# PROJECT CARD ICON:
# Displayed if no cover image, or as a small icon убийствоthe cover image.
# Use a Font Awesome class.
icon_class: "fas fa-shopping-cart"

# COVER IMAGE (Optional):
# Main visual to be displayed on the project card. If this field exists, image_gradient_* fields are not used.
# The path should be relative to your project's root directory and start with /.
cover_image: "/assets/images/projects/ecommerce-cover.png" # 1920*960 pixel

# LINKS:
github_url: "https://github.com/SahinMuhammetAbdullah/portfolio-site" # GitHub repository of the project (if any)
live_url: "https://github.com/SahinMuhammetAbdullah/portfolio-site" # Live demo address of the project (if any) - Uncomment if you have one

layout: default
lang: en
---

## About The Project

This is where you provide a **detailed description** of your project in English. You can use standard Markdown formatting here.

Our e-commerce platform was designed to provide a seamless and modern online shopping experience. Key goals included a user-friendly interface, robust backend capabilities, and secure transaction processing. We focused on scalability to accommodate growing product catalogs and user bases.

![Main Page Screenshot]({{ '/assets/images/projects/ecommerce-cover.png' | relative_url }})
*<center><small>Fig. 1: The main landing page showcasing featured products.</small></center>*

The platform allows users to:
- Browse product categories and individual items.
- View detailed product information, including images, descriptions, and reviews.
- Add products to a shopping cart and manage cart contents.
- Proceed through a secure multi-step checkout process.
- Manage their user account, order history, and saved addresses.

### Features

*   **Responsive Design:** Fully accessible on desktops, tablets, and mobile devices.
*   **User Authentication:** Secure registration and login functionality.
*   **Product Management:** Admin interface for adding, editing, and removing products.
*   **Search & Filtering:** Advanced search capabilities with filters for price, category, etc.
*   **Shopping Cart & Checkout:** Intuitive cart management and integration with Stripe for payments.
*   **Order Management:** Users can view their order history; admins can manage orders.
*   **Wishlist Functionality:** Users can save products for later.

![Admin Dashboard Screenshot]({{ '/assets/images/projects/ecommerce-cover.png' | relative_url }})
*<center><small>Fig. 2: Admin dashboard for managing site statistics and orders.</small></center>*

### Technical Details

The project was built using the MERN stack with some variations:

*   **Frontend:** React.js with Vite, TypeScript, Tailwind CSS for styling, and Redux Toolkit for state management.
*   **Backend:** Node.js with Express.js framework, implementing a RESTful API.
*   **Database:** MongoDB Atlas (cloud-hosted) for product, user, and order data.
*   **Authentication:** JWT (JSON Web Tokens) for secure API access.
*   **Payment Integration:** Stripe API for processing credit card payments.
*   **Deployment:** Frontend Vercel, Backend Render (veya Heroku).

This project demonstrates proficiency in full-stack web development, API design, and e-commerce best practices.