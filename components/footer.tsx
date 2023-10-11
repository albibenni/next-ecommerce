import { redirect } from "next/dist/server/api-utils";
import { BenniLogo } from "./logo";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-row items-center text-center justify-center">
          <BenniLogo className="pr-2" width="50" height="50" />
          <p className="max-w-md mx-auto text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="px-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </a>

            <a
              href="#"
              className="px-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </a>

            <a
              href="#"
              className="px-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Cookies{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
