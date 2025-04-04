declare module "*.svg" {
  import React from "react";
  const content: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >;
  export default content;
}
