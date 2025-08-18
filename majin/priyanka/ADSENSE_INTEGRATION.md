# Google AdSense Integration Guide

## ✅ **Completed Steps:**

1. **Added AdSense Script to HTML Head** - The Google AdSense script has been added to `/index.html`
2. **Created AdSense Component** - A reusable `AdSense.jsx` component has been created
3. **Added Ads to Home Page** - Banner and sidebar ads have been integrated

## 📝 **AdSense Script Added:**
```html
<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7617803924499446"
     crossorigin="anonymous"></script>
```

## 🔧 **AdSense Component Created:**
Location: `/src/components/AdSense.jsx`

This component handles:
- Auto-responsive ads
- Different ad formats (banner, vertical, square)
- Error handling
- Mobile/desktop responsive ads

## 🎯 **Ad Placements Added:**

### Home Page (`/src/pages/Home.tsx`):
1. **Banner Ad** - After hero section, before stats
2. **Sidebar Ad** - Fixed position on desktop (hidden on mobile)

## 📍 **Recommended Ad Placements for Other Pages:**

### Resources Page:
Add these imports and components to `/src/pages/Resources.jsx`:

```jsx
import AdSense from '../components/AdSense';

// Add banner ad at top of content:
<div className="mb-8 flex justify-center">
  <AdSense 
    adSlot="1234567893"
    adFormat="banner"
    style={{ width: '728px', height: '90px' }}
    className="hidden md:block"
  />
  <AdSense 
    adSlot="1234567894"
    adFormat="banner"
    style={{ width: '320px', height: '100px' }}
    className="block md:hidden"
  />
</div>

// Add square ad between resource cards:
<div className="my-8 flex justify-center">
  <AdSense 
    adSlot="1234567895"
    adFormat="rectangle"
    style={{ width: '300px', height: '250px' }}
  />
</div>
```

### Other Pages (About, Contact, Coding, etc.):
```jsx
import AdSense from '../components/AdSense';

// Banner ad at top of page content:
<AdSense 
  adSlot="YOUR_AD_SLOT_ID"
  adFormat="banner"
  style={{ width: '728px', height: '90px' }}
  className="hidden md:block mb-8"
/>
```

## 🔑 **Important Notes:**

1. **Ad Slot IDs**: Replace placeholder slot IDs (1234567890, etc.) with your actual AdSense ad unit slot IDs
2. **Ad Approval**: Ads will only show after Google AdSense approves your site
3. **Ad Limits**: Don't place too many ads - Google recommends quality over quantity
4. **Mobile Optimization**: Different ad sizes for mobile vs desktop are already configured

## 📱 **Ad Sizes Used:**
- **Desktop Banner**: 728x90px
- **Mobile Banner**: 320x50px or 320x100px
- **Sidebar**: 160x600px (desktop only)
- **Rectangle**: 300x250px
- **Auto-responsive**: Automatically adjusts to content

## 🚀 **Next Steps:**
1. Create ad units in your Google AdSense dashboard
2. Replace placeholder slot IDs with real ones
3. Add the import and ad components to your other pages
4. Test ads in production environment
5. Monitor ad performance and optimize placement

## 💡 **Best Practices:**
- Place ads where they don't interrupt user experience
- Use native ad styles that match your site design
- Monitor Core Web Vitals to ensure ads don't slow down your site
- Follow Google AdSense policies for content and placement