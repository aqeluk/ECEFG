import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BriefcaseIcon,
  ChartBarIcon,
  CursorClickIcon,
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";

const links = [
  {
    name: "Home",
    description: "Home Page",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Our Operations",
    description: "Get a better understanding of our collborative work",
    href: "/engagement/ourwork",
    icon: ChartBarIcon,
  },
  {
    name: "Project Funding",
    description: "Speak volumes through contracts with ECEFG",
    href: "/engagement/funding",
    icon: CursorClickIcon,
  },
  {
    name: "Waste Management",
    href: "/technologies/wastemgt",
    icon: InformationCircleIcon,
  },
  { name: "Biofuel", href: "/technologies/biofuel", icon: OfficeBuildingIcon },
  {
    name: "Heat & Power",
    href: "/technologies/heat&power",
    icon: NewspaperIcon,
  },
  {
    name: "Battery Energy Storage",
    href: "/technologies/battery",
    icon: BriefcaseIcon,
  },
]

const solutions = [
  {
    name: "Our Operations",
    description: "Get a better understanding of our collborative work",
    href: "/engagement/ourwork",
    icon: ChartBarIcon,
  },
  {
    name: "Project Funding",
    description: "Speak volumes through contracts with ECEFG",
    href: "/engagement/funding",
    icon: CursorClickIcon,
  },
];
const company = [
  {
    name: "Waste Management",
    href: "/technologies/wastemgt",
    icon: InformationCircleIcon,
  },
  { name: "Biofuel", href: "/technologies/biofuel", icon: OfficeBuildingIcon },
  {
    name: "Heat & Power",
    href: "/technologies/heat&power",
    icon: NewspaperIcon,
  },
  {
    name: "Battery Energy Storage",
    href: "/technologies/battery",
    icon: BriefcaseIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    name: "Solar PV",
    href: "/technologies/solar",
    preview:
      "",
    imageUrl:
      "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: 2,
    name: "Wind",
    href: "/technologies/wind",
    preview:
      "",
    imageUrl:
      "https://images.unsplash.com/photo-1565085360602-de694f1d7650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isBannerOnTop, setIsBannerOnTop] = useState(true);

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isOnTop = scrollTop <= 12; // Adjust this value as needed

    setScrolled(scrollTop > 10);
    setIsBannerOnTop(isOnTop);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Clean up the listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isBannerVisible && <Banner onClose={handleBannerClose} />}
      <Popover
        className={`fixed ${
          isBannerVisible && isBannerOnTop ? "top-12" : "top-0"
        } w-screen ${
          scrolled ? "bg-blue-100" : "bg-transparent"
        } transition-all duration-300 z-50`}
      >
        <div
          className="absolute inset-0 shadow z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8">
            <div className="hidden md:flex space-x-10">
              {/* Home */}
              <Link href="/" legacyBehavior>
                <a className="text-base font-medium text-gray-700 hover:text-gray-900 bg-blue-100 px-3 py-1.5 rounded-md hover:bg-blue-200">
                  Home
                </a>
              </Link>
              {/* Solutions */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-700" : "text-gray-800",
                        "group bg-blue-100 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                      )}
                    >
                      <span className="mx-4">Solutions</span>
                      <span className="ml-3 my-2">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-700" : "text-gray-800",
                            "h-5 w-5 group-hover:text-gray-900"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-blue-100">
                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 my-1 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-300 text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base font-medium text-gray-800">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-800">
                                      {item.description}
                                    </p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                                    Learn more{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="blue-100 rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="flex items-center">
              <Link href="/" className="flex">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-full w-screen"
                  src="/banner-bg.png"
                  alt=""
                  width={150}
                  height={100}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  quality={80}
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-10">
              {/* About Us */}
              <Link href="/aboutus" legacyBehavior>
                <a className="text-base font-medium text-gray-700 hover:text-gray-900 bg-blue-100 px-3 py-1.5 rounded-md hover:bg-blue-200">
                  About Us
                </a>
              </Link>
              {/* Technologies */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-700" : "text-gray-800",
                        "group bg-blue-100 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                      )}
                    >
                      <span className="text-base font-medium text-gray-700 hover:text-gray-900 bg-blue-100 px-3 py-1.5 rounded-md hover:bg-blue-200">
                        Technologies
                      </span>
                      <span className="bg-blue-100 px-1 py-1.5 rounded-md hover:bg-blue-200">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-700" : "text-gray-800",
                            "ml-2 h-5 w-5 group-hover:text-gray-900"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-blue-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 xl:py-16">
                        <div className="absolute inset-0 flex">
                          <div className="bg-blue-100 w-1/2" />
                          <div className="bg-gray-50 w-1/2" />
                        </div>

                        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                          <nav className="grid gap-y-10 px-4 py-8 blue-100 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div>
                              <span className="text-base font-medium text-gray-700 hover:text-gray-900 bg-blue-100 px-3 py-1 rounded-md hover:bg-blue-200">
                                Solutions
                              </span>
                              <ul role="list" className="mt-5 space-y-6">
                                {company.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-4">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                Coming Soon
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <a
                                      href={post.href}
                                      className="-m-3 p-3 flex rounded-lg hover:bg-gray-100"
                                    >
                                      <div className="hidden sm:block flex-shrink-0">
                                        <Image
                                          className="w-32 h-20 object-cover rounded-md"
                                          src={post.imageUrl}
                                          alt=""
                                          width={150}
                                          height={100}
                                          style={{
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "cover",
                                          }}
                                          quality={80}
                                        />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="text-base font-medium text-gray-900 truncate">
                                          {post.name}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {post.preview}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>

        <Transition
       
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition duration-100 ease-in"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-blue-100 divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 sm:pb-8">
                
                  <div className="-mr-2">
                  <Popover.Button className="bg-blue-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
          <span className="sr-only">Toggle menu</span>
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
                  </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <a className="text-3xl">Solutions</a>
                    <div className="grid gap-7 py-4 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {links.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-300 text-white sm:h-12 sm:w-12">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
