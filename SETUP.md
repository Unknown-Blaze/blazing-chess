# 🚀 Blazing Chess Academy - Setup Guide

## Quick Start

Follow these steps to get your chess academy website up and running:

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Shadcn/UI dependencies

### Step 2: Install Shadcn/UI Components

Run these commands to install the required UI components:

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add card
npx shadcn-ui@latest add textarea
```

**Note:** When prompted during `init`, accept the default settings as they're already configured in `components.json`.

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Verify Everything Works

You should see:
- ✅ Landing page with hero section
- ✅ About section with founder info
- ✅ Three offering cards (School CCA, Private Mentorship, Online Blitz)
- ✅ "Join the Academy" button opens registration modal
- ✅ Form validation works (try submitting invalid data)
- ✅ Dark theme with amber/orange accents

## 🎨 Customization Guide

### Updating Brand Information

Edit `src/lib/constants.ts`:
```typescript
export const BRAND = {
  name: 'Blazing Chess Academy',
  tagline: 'Ignite your potential',
  founder: 'Your Name',  // Update this
  founderTitle: 'Your Title',  // Update this
}
```

### Changing Contact Information

In `src/lib/constants.ts`:
```typescript
export const CONTACT = {
  email: 'your-email@example.com',
  phone: '+65 1234 5678',
  address: 'Your Address',
}
```

### Modifying Course Offerings

Edit the `OFFERINGS` array in `src/lib/constants.ts` to add, remove, or modify courses.

### Customizing Colors

The color scheme is defined in:
1. `src/app/globals.css` (CSS variables)
2. `tailwind.config.ts` (Tailwind theme)

Current scheme:
- Primary: Amber-500 (#F59E0B)
- Accent: Orange-600 (#EA580C)
- Background: Black
- Cards: Gray-900/950

## 🔌 Database Integration (Supabase)

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key

### 2. Set Up Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### 4. Create Database Tables

Run this SQL in your Supabase SQL Editor:

```sql
-- Students table
CREATE TABLE students (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  current_elo INTEGER,
  school TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Registrations table
CREATE TABLE registrations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  student_name TEXT NOT NULL,
  current_elo INTEGER,
  school TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  course_id TEXT,
  message TEXT,
  preferred_schedule TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust as needed)
CREATE POLICY "Allow anonymous inserts" ON registrations
  FOR INSERT TO anon
  WITH CHECK (true);
```

### 5. Create Supabase Client

Create `src/lib/supabase/client.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 6. Update Registration Modal

In `src/components/registration-modal.tsx`, replace the mock API call:

```typescript
// Replace this mock code:
await new Promise((resolve) => setTimeout(resolve, 1500));

// With actual Supabase call:
import { supabase } from '@/lib/supabase/client';

const { data, error } = await supabase
  .from('registrations')
  .insert([data])
  .select();

if (error) throw error;
```

## 📧 Email Notifications (Optional)

### Using Resend

1. Install Resend:
```bash
npm install resend
```

2. Add to `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
```

3. Create API route `src/app/api/registration/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'noreply@blazingchess.academy',
    to: 'hello@blazingchess.academy',
    subject: 'New Registration',
    html: `<p>New registration from ${data.parentName}</p>`
  });
  
  return Response.json({ success: true });
}
```

## 🎯 Adding More Pages

### Creating a New Page

1. Create file: `src/app/about/page.tsx`
```typescript
export default function AboutPage() {
  return <div>About Page</div>;
}
```

2. Access at: `/about`

### Adding Navigation

Create `src/components/layout/header.tsx`:
```typescript
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
      </nav>
    </header>
  );
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

The app works on any platform supporting Next.js 14:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🐛 Troubleshooting

### Issue: Shadcn components not found

**Solution:** Run the shadcn-ui init and add commands again.

### Issue: Tailwind styles not applying

**Solution:** 
1. Check `tailwind.config.ts` paths
2. Ensure `globals.css` is imported in `layout.tsx`
3. Restart dev server

### Issue: Form validation not working

**Solution:** Ensure Zod and React Hook Form are installed:
```bash
npm install react-hook-form zod @hookform/resolvers
```

### Issue: TypeScript errors

**Solution:** Check that `@/*` path alias is configured in `tsconfig.json`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)
- [Supabase Documentation](https://supabase.com/docs)

## 💡 Next Steps

1. ✅ Install dependencies
2. ✅ Install Shadcn components
3. ✅ Run dev server and verify
4. 🔲 Customize brand information
5. 🔲 Set up Supabase database
6. 🔲 Configure email notifications
7. 🔲 Add more pages (courses, tournaments, contact)
8. 🔲 Implement authentication
9. 🔲 Build admin dashboard
10. 🔲 Deploy to production

---

**Need Help?** Check the README.md or create an issue in the project repository.

Happy coding! 🔥♟️
