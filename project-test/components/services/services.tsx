import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Services() {
  return (
    <div className="px-5 md:px-10 pt-20 pb-30 bg-[#FBFBFB]">
      <div className="max-w-285 mx-auto">
        <button className="flex items-center gap-2 mb-15 cursor-pointer">
          <MdKeyboardArrowLeft  size={20} color="#4B2615"/>
          <span className="text-[#4B2615] opacity-70 font-bold text-[16px] leading-7 ">
            Back
          </span>
        </button>
        <h1 className="text-[#4B2615] font-medium text-[42px] leading-8 mb-20">
          Legal Consultation Services
        </h1>
        <p className="text-[#1E1E1E] font-normal text-[16px] leading-7 mb-8">
          Law Firm is one of the leading legal offices that offer exceptional
          advisory services for both individuals and companies. Our mission is
          to provide comprehensive and specialized legal support to meet our
          clients' needs and offer the best legal solutions in various cases and
          legal fields, we provide our legal consultations services as a follow:
        </p>
        <h4 className="text-[#4B2615] text-[16px] font-bold leading-7 mb-5">
          General Legal Consultations
        </h4>
        <div className="flex items-start gap-9 mb-11">
          <div className="w-0.75 bg-[#D9D9D99C] self-stretch shrink-0"></div>
          <div className="flex items-start gap-2.5">
            <div className="bg-[#4B2615] rounded-xs shrink-0 w-2.5 h-2.5 mt-2"></div>
            <h4 className="text-[16px] leading-7 font-bold text-[#1E1E1E]">At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.</h4>
          </div>
        </div>
        <h4 className="text-[#4B2615] text-[16px] font-bold leading-7 mb-5">
          Corporate Legal Consultations
        </h4>
        <div className="flex items-start gap-9 mb-11">
          <div className="w-0.75 bg-[#D9D9D99C] self-stretch shrink-0"></div>
          <div className="flex items-start gap-2.5">
            <div className="bg-[#4B2615] rounded-xs shrink-0 w-2.5 h-2.5 mt-2"></div>
            <div>
              <h4 className="text-[16px] leading-7 font-bold text-[#1E1E1E]">We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses. </h4>
              <h4 className="text-[16px] leading-7 font-bold text-[#1E1E1E] mb-4">Our advisory services about:</h4>
              <ul>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - Establishing and registering companies.</li>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - All kinds of contracts and agreements.</li>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - Commercial disputes.</li>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - Compliance with local and international laws and regulations.</li>
              </ul>
            </div>
          </div>
        </div>
        <h4 className="text-[#4B2615] text-[16px] font-bold leading-7 mb-5">
          Individual Legal Consultations
        </h4>
        <div className="flex items-start gap-9 mb-17">
          <div className="self-stretch shrink-0 w-0.75 bg-[#D9D9D99C] "></div>
          <div className="flex items-start gap-2.5">
            <div className="bg-[#4B2615] rounded-xs shrink-0 w-2.5 h-2.5 mt-2"></div>
            <div>
              <h4 className="text-[16px] leading-7 font-bold text-[#1E1E1E] mb-4">Law Firm offers customized advisory services for individuals, including:</h4>
              <ul>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - Family issues such as divorce, alimony, and custody.</li>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - Real estate matters like buying, selling, and renting properties.</li>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - Employment issues such as hiring and wrongful termination.</li>
                  <li className="text-[#1E1E1E] font-normal text-[16px] leading-7 opacity-70 "> - Criminal cases and defending personal rights.</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-[#1E1E1E] opacity-70 font-normal text-[16px] leading-7">At  Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us today to receive professional and comprehensive legal consultation.</p>
      </div>
    </div>
  );
}

export default Services;

// Key Highlights:
// Use Next.js, Tailwind CSS, Redux Toolkit, and Formik for the front-end implementation.
// Set up Strapi to manage content (e.g., Services, Team, Blog, Subscribers) and handle API requests.
// Implement multilingual support for Arabic (AR) and English (EN) with RTL styling for Arabic.
// Ensure proper error handling for API requests and form submissions (e.g., prevent duplicate email subscriptions).
// Follow the Figma design for styling, ensuring responsiveness and performance optimization.
// Please review the instructions carefully and set up the necessary CMS collections and API endpoints. If you need additional assets (e.g., images, videos) or encounter any issues with the Figma file, feel free to reach out. Let’s aim to complete this task by [insert deadline, if applicable], ensuring a seamless and user-friendly experience.
// // 1. HeaderNavigation
// Responsive Navbar: Includes a logo, links, and dropdown for "Services" (redirects to specific service pages). dropdown can be a simple dropdown with brown background
// Search: Icon to open search input; query redirects to the search page with results categorized by Team and Services.
// Multilingual Support: Toggle for AR/EN language with RTL for Arabic.
// 2. HeroSection
// Background: Use images/videos fetched from the CMS.
// Slider: Auto-play for videos, smooth transitions for images.
// Multilingual Support: Text in AR/EN with RTL for Arabic.
// 3. Our Team
// Team Members: Display members with images, names, and roles.
// 4. Clients
// Client Showcase: Display logos, testimonials, or case studies.
// Multilingual Support: Text in AR/EN, RTL for Arabic.
// 5. Footer
// Links & Subscription: Includes multiple links and a subscription form (email validation using Formik).
// Email Validation: Prevent duplicate submissions and show appropriate success/error messages.
// Multilingual Support: Labels and links in AR/EN, RTL support for Arabic.
// 6. Technical Requirements
// Frontend:
// Next.js for routing and pages (e.g., /services/[service-id]).
// Tailwind CSS for styling, adhering to the dark theme (brown, white, black).
// Redux Toolkit for state management (search query, language selection, form states).
// Backend:
// Strapi CMS to manage content like Pages, Services, Team Members, Blog, Clients, and Subscribers.
// API for data fetching and form submissions.
// Form Handling:
// Formik for the subscription form with validation and error handling.
// Multilingual Support: Use a library like next-intl or i18next for translations and RTL support for Arabic.
// Performance: Optimize images, use SSG or SSR, and show loading states for API requests.
// 7. Design Guidelines
// Follow the Figma design for layout, colors (dark brown, white, black), and typography.
// Replace placeholder images with actual CMS content, maintaining the grayscale/dark filter style.