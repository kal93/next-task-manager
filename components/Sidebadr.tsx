import Card from "./Card";
// import Image from "next/image";
// import logo from "@/assets/images/logo.png";
import SidebarLink from "./SidebarLink";

const links = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="h-full p-5">
    <Card className="h-full w-32 flex items-center justify-between flex-wrap">
      {/* <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div> */}
      {links.map((link) => (
        <SidebarLink key={link.label} link={link} />
      ))}
    </Card>
    </div>
  );
};

export default Sidebar;