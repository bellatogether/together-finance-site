# if the repo already exists locally
git clone https://github.com/bellatogether/together-finance-site.git
cd together-finance-site

# scaffold Next.js into THIS folder
npx create-next-app@latest . --ts --tailwind --eslint=false
npm i framer-motion lucide-react
"use client";
import LandingPage from "@/components/LandingPage";

export default function Page() {
  return <LandingPage />;
}
npm run dev   # check http://localhost:3000
git add -A && git commit -m "next + landing"
git push
