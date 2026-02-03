# Driver Card Details Component

A responsive React component built with Next.js 15.2.8 and Tailwind CSS v3 that displays driver license and card information in Arabic (RTL layout).

## Project Structure

```
driver-card-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page with DriverCardDetails
│   │   └── globals.css        # Global styles & Tailwind imports
│   └── components/
│       └── DriverCardDetails.tsx  # Main driver card component
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Features

- ✅ **Responsive Design** - Mobile, tablet, and desktop friendly
- ✅ **RTL Support** - Built for Arabic text with `dir="rtl"`
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v3** - Modern utility-first styling
- ✅ **Next.js 15.2.8** - Latest Next.js features

## Component Props

```typescript
interface DriverCardDetailsProps {
  data?: DriverData;
  onBack?: () => void;
}

interface DriverData {
  companyName: string;
  companyIdNumber: string;
  licenseNumber: string;
  licenseType: string;
  city: string;
  issueDate: string;
  expiryDate: string;
  cardNumber: string;
  driverIdNumber: string;
  firstName: string;
  lastName: string;
  cardIssueDate: string;
  cardExpiryDate: string;
  cardType: string;
}
```

## Usage

```tsx
import DriverCardDetails from "@/components/DriverCardDetails";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DriverCardDetails
        data={{
          companyName: "مؤسسة سائق كم للخدمات اللوجستية",
          companyIdNumber: "7034326483",
          // ... other fields
        }}
        onBack={() => console.log("Back clicked")}
      />
    </div>
  );
}
```

## Getting Started

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the component in action.

## Styling Highlights

The component replicates the original design:

- **Text Sizes**: Converted from Bootstrap (fs-12, fs-14, fs-18, fs-20) to Tailwind equivalents
- **Font Weights**: `font-bold` and `font-semibold` for hierarchy
- **Colors**:
  - Primary: `text-blue-600` for headings
  - Secondary: `text-gray-500` for labels
- **Layout**: Responsive grid with flex containers
- **Spacing**: Consistent padding and margins using Tailwind classes

## Sections

1. **Header** - Page title "تفاصيل بطاقة السائق" (Driver Card Details)
2. **Institution/Individual Data** - Company name and ID
3. **License Information** - License number, type, city, and dates
4. **Driver Card** - Complete driver information with 7 fields
5. **Back Button** - Navigation button with outline style

## Notes

- The component uses `'use client'` directive for client-side rendering
- Default data is provided so the component works without props
- All text is RTL-ready for Arabic and other right-to-left languages
- Fully responsive with Tailwind's responsive prefixes (sm:, lg:, etc.)
