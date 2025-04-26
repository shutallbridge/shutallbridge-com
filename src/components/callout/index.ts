import Root, { type Props as RootProps } from "./root.astro";
import Icon, { type Props as IconProps } from "./icon.astro";
import Title, { type Props as TitleProps } from "./title.astro";
import Default from "./default.astro";

const Callout = {
  Root,
  Icon,
  Title,
  Default,
};

export {
  type RootProps,
  type IconProps,
  type TitleProps,
  Root,
  Icon,
  Title,
  Default,
  Callout,
};
