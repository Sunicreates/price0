# Knowledge Base: Design Implementation for Screens 300-450px

This document summarizes the design implementation for screens with widths between 300-450px, based on a comprehensive review of all CSS files and component code in the project.

## Overview
Screens in the 300-450px range are treated as mobile devices, using a list-based layout instead of a table. The design focuses on compact, touch-friendly elements with minimal spacing and smaller fonts.

## Key Components and Styles

### 1. Mobile Product List Layout
- **Container**: `.mobile-product-list` - Transparent background, no border radius, no box shadow
- **Header**: `.list-header` - Flex layout with padding 12px 20px 8px 20px, no border bottom
- **Header Cells**: `.header-cell` - Flex: 1, font-size: 36px (large for mobile), color: #333, text-transform: capitalize
- **Product List**: `.product-list` - Padding: 4px 16px 16px 16px
- **Product Items**: `.product-item` - Margin-bottom: 12px
- **Product Info**: `.product-info` - Flex layout, gap: 8px, flex-wrap: wrap, no padding/border/background

### 2. Input Fields
- **Product Input**: `.product-input` - Width: 100%, border: 1px solid #0285f7, background: #f8f9fa, border-radius: 12px, font-size: 14px, padding: 6px 12px, color: #333
- **Price Input**: `.price-input` - Similar to product input but text-align: center, flex: 1
- **Focus State**: Border-color: #0285f7, background: #fff, box-shadow: 0 0 0 2px rgba(2, 133, 247, 0.1)
- **Placeholder**: Color: #6c757d, font-weight: 400

### 3. Action Buttons
- **Container**: `.action-btn-container` - Background: #fff, border-radius: 30px, padding: 0px 29px, box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1)
- **Hover State**: Transform: translateY(-2px), box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15)
- **Button**: `.action-btn` - Width/height: 40px, border-radius: 20px, transparent background

### 4. Search Section
- **Container**: `.mobile-search-section` - Margin: 20px 6px, margin-left/right: 6px
- **Inputs Container**: `.search-inputs` - Flex column, gap: 12px, margin-bottom: 16px
- **Input**: `.search-input` - Width: 100%, padding: 12px 16px 12px 16px, border: 1px solid #e1e5e9, border-radius: 20px, font-size: 14px
- **Focus State**: Border-color: #0285f7, box-shadow: 0 0 0 3px rgba(2, 133, 247, 0.1)

### 5. More Options Button
- **Button**: `.more-options` - Background: none, border: none, padding: 4px, margin-left: 8px, cursor: pointer, color: #0285f7
- **Icon**: SVG width/height: 16px
- **Hover**: Background: rgba(0, 230, 118, 0.1)

## Media Query Breakdown

### @media (max-width: 360px) - Small Mobile Screens
- **Product Info**: Flex row, gap: 4px, align-items: center
- **Product Name**: Flex: 1.5, min-width: 0
- **Product Price**: Flex: 1, min-width: 0
- **Inputs**: Font-size: 11px, padding: 5px 6px
- **List Header**: Padding: 8px 10px
- **Header Cell**: Font-size: 28px
- **Action Buttons**: Gap: 12px
- **Action Button Container**: Padding: 0px 20px
- **Product List**: Padding: 6px
- **Product Item**: Margin-bottom: 6px
- **More Options**: Padding: 1px, icon: 12px

### @media (min-width: 361px) - Above 360px
- **Action Button Container**: Padding: 0px 27px (decreased from 29px)

### @media (min-width: 381px) - Above 381px
- **Action Button Hover**: Border-color: transparent, box-shadow: 0 6px 20px rgba(2, 133, 247, 0.2)
- **Input Focus**: Box-shadow: 0 0 0 3px rgba(2, 133, 247, 0.15)

### @media (min-width: 391px) - Above 390px
- **Action Button Container**: Padding: 0px 32px (increased from 27px)

### @media (min-width: 426px) - Above 425px
- **Action Button Container**: Padding: 0px 36px (increased from 32px)

### @media (max-width: 480px) - Mobile Responsive
- **Product Info**: Flex row, gap: 6px, align-items: center
- **Product Name**: Flex: 1.5, min-width: 0
- **Product Price**: Flex: 1, min-width: 0
- **Inputs**: Font-size: 12px, padding: 6px 8px
- **List Header**: Padding: 10px 12px
- **Header Cell**: Font-size: 14px, font-weight: normal
- **Product List**: Padding: 8px
- **Product Item**: Margin-bottom: 8px
- **More Options**: Padding: 2px, icon: 14px

## Additional Mobile Styles
- **Page Title**: `.page-title.only-price-list` - Display: none (hidden on mobile)
- **Landscape Orientation**: Special adjustments for landscape mode with smaller fonts (11px) and adjusted button positions

## Component Logic (ProductTable.js)
- For screens < 768px: Uses mobile list layout
- Fields displayed: ['product_service', 'price'] for width < 520px
- Responsive field calculation based on width and orientation

## Color Scheme
- Primary Blue: #0285f7
- Background: #f8f9fa (inputs), #fff (buttons/containers)
- Text: #333 (dark), #6c757d (placeholder)
- Accent Green: #00E676 (add button)

## Typography
- Font Family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif
- Font Sizes: 11px-14px for inputs, 28px-36px for headers
- Font Weight: 400 (normal) for inputs, 600 for table headers

## Spacing and Layout
- Border Radius: 12px (inputs), 20px (search), 30px (buttons)
- Box Shadow: Subtle shadows for depth (0 4px 16px rgba(0, 0, 0, 0.1))
- Transitions: 0.2s ease for all interactive elements

## Tablet Considerations
- Tablets (768px-1024px) use mobile list layout with adjusted styling
- Table layout is hidden on tablets, mobile list is shown instead
- Compact typography and spacing applied to match mobile design

This knowledge base covers all design implementations for the 300-450px screen range, ensuring consistent and responsive mobile experience.
