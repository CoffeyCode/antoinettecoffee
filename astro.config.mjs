import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { loadEnv } from "vite";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://yoursite.com/",
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        content: "storyblok/Content",
        cta: "storyblok/Cta",
        faq: "storyblok/Faq",
        footer: "storyblok/Footer",
        how: "storyblok/How",
        intro: "storyblok/Intro",
        reward: "storyblok/Reward",
        signUpForm: "storyblok/SignUpForm",
        testimonials: "storyblok/Testimonials",
        thankYou: "storyblok/ThankYou",
        yourIn: "storyblok/YourIn",
        pricing: "storyblok/Pricing",
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: "eu", // optional,  or 'eu' (default)
      },
    }),
  ],
});
