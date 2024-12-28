import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
    href: "#",
  },
  {
    name: "Account",
    icon: UserCircleIcon,
    href: "#",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        placeholder=""
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar placeholder=""
      onPointerEnterCapture={() => { }}
      onPointerLeaveCapture={() => { }} shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }} color="blue-gray" className="text-lg font-bold">
          Harsh Kumar
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }} variant="text">Sign In</Button>
        </div>
        <IconButton placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }} variant="text">Sign In</Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
