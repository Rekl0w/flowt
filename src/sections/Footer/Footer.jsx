export default function Footer() {
  return (
    <div className="bg-[#0F172A] flex flex-col pt-20 pb-5">
      <div className="flex text-white w-full justify-around">
        <div>
          <h5 className="text-xl font-bold mb-8">Categories</h5>
          <ul className="space-y-3 text-[#E2E8F0] flex-col flex gap-3">
            <li>
              <button>User Interface</button>
            </li>
            <li>
              <button>User Experience</button>
            </li>
            <li>
              <button>Digital Media</button>
            </li>
            <li>
              <button>Lifestyle</button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-8">Product</h5>
          <ul className="space-y-3 text-[#E2E8F0] flex-col flex gap-3">
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Overview</button>
            </li>
            <li>
              <button className="flex gap-3 justify-center items-center text-center">
                Browse <img src="/beta.svg" alt="beta" />
              </button>
            </li>
            <li>
              <button>Accessibility</button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-8">Solutions</h5>
          <ul className="space-y-3 text-[#E2E8F0] flex-col flex gap-3">
            <li>
              <button>Brainstorming</button>
            </li>
            <li>
              <button>Ideation</button>
            </li>
            <li>
              <button>Wireframing</button>
            </li>
            <li>
              <button>Research</button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-8">Resources</h5>
          <ul className="space-y-3 text-[#E2E8F0] flex-col flex gap-3">
            <li>
              <button>Help Center</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Tutorials</button>
            </li>
            <li>
              <button>FAQs</button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-8">Support</h5>
          <ul className="space-y-3 text-[#E2E8F0] flex-col flex gap-3">
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button>Developers</button>
            </li>
            <li>
              <button>Documentation</button>
            </li>
            <li>
              <button>Integrations</button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-8">Company</h5>
          <ul className="space-y-3 text-[#E2E8F0] flex-col flex gap-3">
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Press</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button className="flex gap-3 justify-center items-center text-center">
                Request Demo{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between px-20 items-center w-full text-[#E2E8F0] pt-20">
        <div>
          <ul className="flex gap-10">
            <li>
              <p>Flowt @ 2024</p>
            </li>
            <li>
              <button>Terms of Service</button>
            </li>
            <li>
              <button>Privacy Policy</button>
            </li>
            <li>
              <button>Manage Cookies</button>
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <img src="/socials.svg" alt="socials" />
          <img src="/apps.svg" alt="apps" />
        </div>
      </div>
    </div>
  );
}
