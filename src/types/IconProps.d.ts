type IconVariant = "outlined" | "rounded" | "sharp";
type IconFill = boolean;
type IconSize = 12 | 18 | 24 | 32 | 40;
type TIconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700;

export interface IconProps<T extends IconVariant, W extends IconWeight> {
  variant?: T;
  fill?: IconFill;
  size?: IconSize;
  weight?: W extends IconWeight ? W : never;
}
