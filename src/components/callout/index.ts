import Root, { type Props as RootProps } from "./root.astro";
import IconSlot, { type Props as IconSlotProps } from "./icon-slot.astro";
import TitleSlot, { type Props as TitleSlotProps } from "./title-slot.astro";
import DefaultSlot from "./default-slot.astro";

const Callout = {
  Root,
  IconSlot,
  TitleSlot,
  DefaultSlot,
};

export {
  type RootProps,
  type IconSlotProps,
  type TitleSlotProps,
  Root,
  IconSlot,
  TitleSlot,
  DefaultSlot,
  Callout,
};
