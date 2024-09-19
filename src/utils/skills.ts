export type Technology =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Astro"
  | "Tailwind"
  | "PHP"
  | "WordPress"
  | "MySQL"
  | "Figma"
  | "Redux"
  | "Expo"
  | "Apple"
  | "Android"
  | "Vite";

interface Skill {
  component: any;
  name: Technology;
}

// ICONS SKILLS
import IconJavaScript from "@assets/icons/javascript.astro";
import IconTypeScript from "@assets/icons/typescript.astro";
import IconTailwind from "@assets/icons/tailwind.astro";
import IconAstro from "@assets/icons/astroIcon.astro";
import IconWordPress from "@assets/icons/wordpress.astro";
import IconPHP from "@assets/icons/php.astro";
import IconMysql from "@assets/icons/mysql.astro";
import IconReact from "@assets/icons/react.astro";
import IconFigma from "@assets/icons/figma.astro";
import IconVite from "@assets/icons/vite.astro";
import IconRedux from "@assets/icons/redux.astro";
import IconExpo from "@assets/icons/expo.astro";
import IconApple from "@assets/icons/apple.astro";
import IconAndroid from "@assets/icons/android.astro";

export const skills: Skill[] = [
  { component: IconJavaScript, name: "JavaScript" },
  { component: IconTypeScript, name: "TypeScript" },
  { component: IconReact, name: "React" },
  { component: IconExpo, name: "Expo" },
  { component: IconApple, name: "Apple" },
  { component: IconAndroid, name: "Android" },
  { component: IconRedux, name: "Redux" },
  { component: IconAstro, name: "Astro" },
  { component: IconTailwind, name: "Tailwind" },
  { component: IconPHP, name: "PHP" },
  { component: IconWordPress, name: "WordPress" },
  { component: IconMysql, name: "MySQL" },
  { component: IconFigma, name: "Figma" },
  { component: IconVite, name: "Vite" },
];
