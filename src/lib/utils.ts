import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BookIcon, DashboardIcon, FileCopyIcon, QuizIcon } from "./icon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigationArray = [
  {
    link: "/",
    icon: DashboardIcon,
    title: "Dashboard",
    key: 1,
  },
  {
    link: "/book",
    icon: BookIcon,
    title: "Book",
    key: 2,
  },
  {
    link: "/file",
    icon: FileCopyIcon,
    title: "File",
    key: 3,
  },
  {
    link: "/quiz",
    icon: QuizIcon,
    title: "Quiz",
    key: 4,
  },
];