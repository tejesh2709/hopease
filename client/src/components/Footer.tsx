import React from "react";
import { motion } from "framer-motion";

interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
}

const Footer: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverVariants = {
    hover: {
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Organized footer links by section
  const exploreLinks: FooterLink[] = [
    { title: "Discover Hobbies", href: "/discover" },
    { title: "Learning Paths", href: "/paths" },
    { title: "Community Groups", href: "/community" },
    { title: "Challenges", href: "/challenges" },
  ];

  const resourceLinks: FooterLink[] = [
    {
      title: "Add a Resource",
      href: "https://forms.gle/aoovJD42E3KNEj1s7",
      external: true,
    },
    {
      title: "Contribute on Github",
      href: "https://github.com/Sujith-Srikar/unseen_mini_project",
      external: true,
    },
    { title: "Submit Feedback", href: "/feedback" },
    { title: "Suggest a Hobby", href: "/suggest" },
  ];

  const aboutLinks: FooterLink[] = [
    { title: "Our Mission", href: "/about" },
    { title: "Support This Project", href: "/support" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Use", href: "/terms" },
  ];

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Sujith-Srikar/unseen_mini_project",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "#",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
    },
  ];

  // Component to render a list of links
  const LinkSection: React.FC<{ title: string; links: FooterLink[] }> = ({
    title,
    links,
  }) => (
    <motion.div variants={itemVariants} className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.title}>
            <motion.a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-gray-300 hover:text-indigo-400 text-sm flex items-center gap-1.5 group"
              whileHover="hover"
              variants={hoverVariants}
            >
              <span>{link.title}</span>
              <motion.span
                variants={{
                  hover: { x: 2, opacity: 1, transition: { duration: 0.2 } },
                }}
                initial={{ opacity: 0 }}
                className="transform transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="text-indigo-400"
                >
                  <path
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                    fill="currentColor"
                  />
                </svg>
              </motion.span>
              {link.external && (
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <footer className="w-full bg-gradient-to-b from-[#0d0d0d] to-[#121212] pt-12 pb-8 border-t border-[#2a2a2a] max-md:mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand/Logo Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <div>
              <motion.h2
                className="text-3xl font-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                  Hobby
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
                  Horizon
                </span>
              </motion.h2>
              <p className="text-gray-400 text-sm mb-6">
                Discover your passion, master new skills, and connect with
                like-minded enthusiasts.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore Section */}
          <LinkSection title="Explore" links={exploreLinks} />

          {/* Resources Section */}
          <LinkSection title="Resources" links={resourceLinks} />

          {/* About Section */}
          <LinkSection title="About" links={aboutLinks} />
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-12 py-6 border-t border-[#2a2a2a] flex flex-col md:flex-row gap-6 justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-md">
            <h3 className="text-white font-medium mb-1">Join our newsletter</h3>
            <p className="text-gray-400 text-sm">
              Get weekly updates on new hobbies and exclusive learning resources
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white w-full md:w-auto"
            />
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-r-md"
              whileHover={{
                scale: 1.02,
                backgroundImage: "linear-gradient(to right, #9333ea, #6366f1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>© {new Date().getFullYear()} HobbyHorizon. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for hobby enthusiasts everywhere.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;