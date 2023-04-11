import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

interface BannerProps {
  onClose: () => void;
}

export default function Banner({ onClose }: BannerProps) {
  return (
    <div className="top-0 relative w-screen bg-gray-900">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="hidden md:inline">
              Surviving the Energy Crisis
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link href="/aboutus" legacyBehavior>
                <a className="text-white font-bold underline">
                  {" "}
                  Learn more<span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={onClose}
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
