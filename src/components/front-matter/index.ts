import Root, { type Props as RootProps } from "./root.astro";
import Item, { type Props as ItemProps } from "./item.astro";
import Title, { type Props as TitleProps } from "./title.astro";
import Content, { type Props as ContentProps } from "./content.astro";

const FrontMatter = { Root, Item, Title, Content };

export {
  type RootProps,
  type ItemProps,
  type TitleProps,
  type ContentProps,
  Root,
  Item,
  Title,
  Content,
  FrontMatter,
};
