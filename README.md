# Healthcare Dashboard

A pixel-perfect, responsive React implementation of a healthcare dashboard user interface.

![Healthcare Dashboard Preview](https://i.ibb.co/B2DdGkgF/Screenshot-2025-05-23-at-3-31-31-PM.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Implementation Details](#implementation-details)
- [Responsive Design](#responsive-design)
- [Future Enhancements](#future-enhancements)

## Overview

This project is a static React implementation of a healthcare dashboard UI designed to display patient health data, appointments, and activity metrics. The dashboard features an anatomical body visualization with health indicators, a calendar view with appointment scheduling, and activity tracking.

## Features

- Clean, modern UI with consistent styling
- Interactive sidebar navigation (visual only)
- Anatomical body illustration with health status indicators
- Calendar view with appointment times
- Appointment cards showing doctor information and appointment times
- Upcoming schedule section organized by day
- Activity chart showing weekly appointment frequency
- Fully responsive design for all screen sizes

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/healthcare-dashboard.git
cd healthcare-dashboard



2. Install dependencies:
    npm install



3. Start the development server:
    npm start



4. Open your browser and navigate to:
    http://localhost:3000



## Project Structure
    ```
        healthcare-dashboard/
        ├── public/                # Public assets and HTML template
        ├── src/                   # Source code
        │   ├── assets/            # Static assets like images
        │   ├── components/        # React components
        │   │   ├── ActivityFeed/        # Activity chart component
        │   │   ├── AnatomySection/      # Human body illustration component
        │   │   ├── AppointmentCard/     # Individual appointment card component
        │   │   ├── CalendarView/        # Calendar and schedule view component
        │   │   ├── DashboardMainContent/ # Main dashboard layout component
        │   │   ├── HealthStatusCards/   # Health status indicators component
        │   │   ├── Sidebar/             # Navigation sidebar component
        │   │   └── SimpleAppointmentCard/ # Appointment card for schedule
        │   ├── App.js            # Root application component
        │   ├── App.css           # Global styles
        │   ├── index.js          # Application entry point
        │   └── index.css         # Global CSS reset
        ├── .gitignore            # Git ignore file
        ├── package.json          # Project dependencies and scripts
        └── README.md             # Project documentation
    ```

## Component Breakdown

### App.js
The root component that orchestrates the overall layout of the application, including the sidebar and main content area.

### Sidebar
Implements the navigation sidebar with "General" and "Tools" sections, featuring icon-based navigation links.

### DashboardMainContent
The main container for dashboard content, organizing the various dashboard elements and handling the two-column layout.

### AnatomySection
Displays the anatomical human body illustration with health indicators for different body parts.

### HealthStatusCards
Shows health status for different body systems (Lungs, Teeth, Bone) with status indicators and dates.

### CalendarView
Implements the calendar grid showing appointment times, alongside detailed appointment cards and the upcoming schedule section.

### ActivityFeed
Displays the activity chart showing weekly appointment frequency with colorful bar indicators.

### AppointmentCard / SimpleAppointmentCard
Reusable components for displaying appointment details in different contexts throughout the dashboard.

## Technologies Used

- React (Create React App)
- CSS3 (with Flexbox and Grid for layout)
- React Icons for UI iconography
- Media queries for responsive design

## Implementation Details

This implementation focuses on visual fidelity to the provided design, with careful attention to:

- Color matching and consistent use of the color palette
- Typography sizing and spacing
- Component layout and alignment
- Proper use of shadows, borders, and rounded corners
- Accurate recreation of UI elements like status bars and indicators

The dashboard is a static implementation with no backend connectivity. All data is hardcoded within the component structure to demonstrate the UI capabilities.

## Responsive Design

The dashboard is fully responsive with specific adaptations for:

- Large desktop screens (1200px+)
- Standard desktop screens (992px - 1199px)
- Tablet screens (768px - 991px)
- Mobile screens (below 768px)

Key responsive features include:
- Collapsible sidebar for mobile view
- Flexible grid layouts that adapt to screen size
- Reordering of content for smaller screens
- Adjusted spacing and font sizes for readability

## Future Enhancements

Potential future improvements could include:
- Adding interactive functionality to the dashboard elements
- Implementing state management for user interactions
- Adding dark mode support
- Creating additional dashboard views and screens
- Connecting to a backend API for real data

