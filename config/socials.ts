import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@daffakbar13",
    icon: Icons.gitHub,
    link: "https://github.com/daffakbar13",
  },
  {
    name: "LinkedIn",
    username: "M. Daffa Raihan Akbar",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/daffa-raihan-akbar",
  },
  // {
  //   name: "Twitter",
  //   username: "@daffakbar13",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/daffakbar13",
  // },
  {
    name: "Gmail",
    username: "daffaraihan03",
    icon: Icons.gmail,
    link: "mailto:daffaraihan03@gmail.com",
  },
];
