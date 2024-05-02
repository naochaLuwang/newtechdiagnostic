"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    {
      id: "1",
      title: "Home",
      slug: "/",
      order: 0,

      isMulti: "NO",

      sublinks: [],
    },
    {
      id: "2",
      title: "About Us",
      slug: "/about",
      order: 1,

      isMulti: "NO",

      sublinks: [],
    },
    {
      id: "3",
      title: "Departments",
      slug: "/departments",
      order: 2,

      isMulti: "NO",

      sublinks: [
        {
          id: "1",

          title: "ULTRASOUND",
          subtitle: "Explore wide ranges of ultrasound",
          slug: "/ultrasound",
          order: 1,
        },
        {
          id: "2",

          title: "DIGITAL XRAY",
          subtitle: "Explore wide ranges of ultrasound",
          slug: "/x-ray",
          order: 2,
        },
        {
          id: "3",

          title: "CARDIOLOGY",
          subtitle: "Explore wide ranges of ultrasound",
          slug: "/cardiology",
          order: 3,
        },
      ],
    },
    {
      id: "4",
      title: "Contact Us",
      slug: "/contact",
      order: 3,

      isMulti: "NO",

      sublinks: [],
    },
  ];

  return (
    <div className={`z-50 w-full h-10  hidden lg:block `}>
      <div className="flex justify-end w-full ">
        <NavigationMenu>
          <NavigationMenuList>
            {data !== null &&
              data?.map((navlink: any) => (
                <div key={navlink.id}>
                  {navlink.sublinks.length > 0 ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className=" text-neutral-800">
                        {navlink.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul
                          className={`grid w-[350px] gap-3 p-2  ${
                            navlink.isMulti === "YES"
                              ? "w-[200px] md:grid-cols-2"
                              : "grid-cols-1 md:w-[400px]"
                          }   `}
                        >
                          {navlink.sublinks
                            .sort((a: any, b: any) => a.order - b.order)
                            .map((component: any) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={`${navlink.slug}/${component.slug}`}
                              >
                                {component.subtitle}
                              </ListItem>
                            ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <Link href={navlink.slug}>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isSticky ? "text-neutral-800 " : "text-neutral-800 "
                          }`}
                        >
                          {navlink.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )}
                </div>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 text-lg leading-none no-underline outline-none transition-colors hover:bg-blue-200 hover:bg-opacity-40  focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
