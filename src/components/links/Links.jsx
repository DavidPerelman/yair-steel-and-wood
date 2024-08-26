import Link from "next/link";

const Links = () => {
  const links = [
    { title: "ראשי", path: "/" },
    { title: "אודות", path: "/about" },
    { title: "צור קשר", path: "/contact" },
    { title: "פרויקטים", path: "/projects" },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
