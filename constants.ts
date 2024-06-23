import { SidebarLink } from "@/types";

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Exercise Library",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/workout",
    label: "Workout",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
];

export const HomePageFilters = [
  { name: "All", value: "all" },
  { name: "Back", value: "back" },
  { name: "Chest", value: "chest" },
  { name: "Lower Legs", value: "lower legs" },
  { name: "Shoulders", value: "shoulders" },
  { name: "Upper Legs", value: "upper legs" },
  { name: "Cardio", value: "cardio" },
  { name: "Lower Arms", value: "lower arms" },
  { name: "Neck", value: "neck" },
  { name: "Upper Arms", value: "upper arms" },
  { name: "Waist", value: "waist" },
];
