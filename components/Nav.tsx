"use client";
import useActiveSection from "@/hooks/useActiveSection";
import Link from "next/link";
import GitHubIcon from "@/public/icons/GitHub.svg";
import EmailIcon from "@/public/icons/Email.svg";
import LinkedinIcon from "@/public/icons/LinkedIn.svg";
import PhoneIcon from "@/public/icons/Phone.svg";
import Resume from "@/public/icons/Resume.svg";

const sections = ["about", "experience", "contact"];

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
];

type ContactItem = {
  icon: JSX.Element;
  href: string;
  label: string;
};

const contactItems: ContactItem[] = [
  {
    icon: <GitHubIcon />,
    href: "https://github.com/Ochanissi/",
    label: "GitHub (opens in a new tab)",
  },
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/mirelbitoi/",
    label: "Linkedin (opens in a new tab)",
  },
  {
    icon: <EmailIcon />,
    href: "mailto:mirelbitoi@ochanissi.com",
    label: "Email address (opens the email prompt)",
  },
  {
    icon: <PhoneIcon />,
    href: "tel:+40729223562",
    label: "Phone number (opens the phone prompt)",
  },
  {
    icon: <Resume />,
    href: "Mirel_Bitoi_Resume.pdf",
    label: "Resume (opens in a new tab)",
  },
];

const getNavItemClasses = (activeSection: string, href: string) => {
  const isActive = activeSection === href.substring(1);
  return {
    linkClass: isActive ? "active" : "",
    indicatorClass: `nav-indicator mr-4 h-px w-8 bg-neutral-600 transition-all ${
      isActive
        ? "active w-16 bg-foreground h-2"
        : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
    }`,
    textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
      isActive
        ? "text-foreground"
        : "text-neutral-500 group-hover:text-foreground"
    }`,
  };
};

export default function Nav() {
  const activeSection = useActiveSection(sections, 100);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold sm:text-5xl text-white">
          <Link href="/">Mirel Bițoi</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium sm:text-xl">
          Full-Stack Developer
        </h2>
        <p className="mt-4 text-foreground/80 max-w-[360px]">
          Full-Stack Developer with 4+ years of hands-on experience creating
          end-to-end web applications that deliver seamless user experiences.
        </p>
        <nav
          className="nav hidden lg:block"
          aria-label="In-app navigation links"
        >
          <ul className="flex flex-col w-max gap-6 uppercase text-xs font-medium mt-16">
            {navItems.map((item) => {
              const { linkClass, indicatorClass, textClass } =
                getNavItemClasses(activeSection, item.href);
              return (
                <li key={item.name} className="group">
                  <a href={item.href} className={`py-3 ${linkClass}`}>
                    <span className={indicatorClass}></span>
                    <span className={textClass}>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="flex items-center gap-5 mt-8" aria-label="Contact links">
        {contactItems.map((item, index) => (
          <li key={`nav-contact-${index}`}>
            <a
              className="flex text-foreground w-[28px] h-[28px] hover:text-neutral-500 transition-colors duration-150 ease-in"
              href={item.href}
              {...(item.href.startsWith("https://") ||
              item.href.endsWith(".pdf")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
