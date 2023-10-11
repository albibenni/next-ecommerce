import { BenniLogo } from "./logo";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href=""></a>

          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="flex items-center justify-evenly order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
              <BenniLogo className="pr-2" width="40" height="40" />
              <span>Website</span>
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
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
