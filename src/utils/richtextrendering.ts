import { RichTextSchema } from "@storyblok/js";
import cloneDeep from "clone-deep";

const mySchema: typeof RichTextSchema = cloneDeep(RichTextSchema);

mySchema.nodes.heading = (node) => {
  let attrs = node.attrs;

  switch (attrs.level) {
    case 1:
      attrs.class = "font-primary text-2xl md:text-4xl";
      break;
    case 2:
      attrs.class = "font-primary text-xl md:text-3xl";
      break;
    case 3:
      attrs.class = "font-primary text-lg md:text-2xl";
      break;
    case 4:
      attrs.class = "font-primary text-base md:text-lg";
      break;
    case 5:
      attrs.class = "font-primary text-base md:text-lg";
      break;
    case 6:
      attrs.class = "font-primary text-base md:text-lg";
      break;
    default:
      attrs.class = "font-primary text-base md:text-lg";
      break;
  }

  return {
    tag: [
      {
        tag: `h${node.attrs.level}`,
        attrs,
      },
    ],
  };
};

mySchema.nodes.ordered_list = () => {
  return {
    tag: [
      {
        tag: "ol",
        attrs: {
          class: "flex flex-col mt-4 text-base text-black gap-y-4 list-decimal",
          role: "list",
        },
      },
    ],
  };
};

mySchema.nodes.list_item = (node) => {
  let attrs = {
    class: "text-xl gap-2 xl:text-2xl",
  };

  if (
    node.content &&
    node.content.length === 1 &&
    node.content[0].type === "paragraph"
  ) {
    node.content = node.content[0].content;
  }

  return {
    tag: [
      {
        tag: "li",
        attrs,
      },
    ],
  };
};

export { mySchema };
