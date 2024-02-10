const socialIcons = [
  { name: "facebook", href: "https://www.facebook.com/your-page" },
  { name: "twitter", href: "https://www.twitter.com/your-username" },
  // Add more icons as needed
];

function Footer() {
  const pages = [
    {
      title: "Profile",
      href: "/profile",
      description: "View and update your personal information and settings.",
    },
    {
      title: "Login",
      href: "/login",
      description:
        "Sign in to your account to access exclusive features and content.",
    },
    {
      title: "Signup",
      href: "/signup",
      description:
        "Create a new account to start enjoying all the benefits of our platform.",
    },
  ];
  return (
    <footer className="bg-gray-800 text-white py-4 flex justify-center items-center">
      <div className="mr-4">
        Copyright © {new Date().getFullYear()} BloodFinder
      </div>
      <ul className="flex space-x-4">
        {socialIcons.map((icon) => (
          <li key={icon.name}>
            <a href={icon.href} className="hover:text-green-500">
              <i className={`fab fa-${icon.name}`}></i>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap justify-center mt-4 space-x-4">
        {pages.map((page) => (
          <li key={page.title}>
            <a href={page.href} className="text-gray-300 hover:text-white">
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
