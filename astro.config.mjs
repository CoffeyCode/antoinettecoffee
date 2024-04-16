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
      accessToken: env.STORYBLOK,
      components: {
        block_container: "storyblok/BLOCK_CONTAINER",
        call_to_action: "storyblok/CALL_TO_ACTION",
        questions_and_answers: "storyblok/QUESTIONS_AND_ANSWERS",
        heading_block: "storyblok/HEADER_BLOCK",
        intro_to_me: "storyblok/INTRO_TO_ME",
        reward_link: "storyblok/REWARD_LINK",
        sign_up_form: "storyblok/SIGN_UP_FORM",
        message_board: "storyblok/MY_JOURNEY",
        thank_you_block: "storyblok/THANK_YOU_BLOCK",
        your_in_message: "storyblok/YOUR_IN_MESSAGE",
        pricing_pricing: "storyblok/SERVICE_PRICING",
        media_block: "storyblok/MEDIA_BLOCK",
        link_block: "storyblok/LINK_BLOCK",
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: "eu", // optional,  or 'eu' (default)
      },
    }),
  ],
});
