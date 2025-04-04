---
to: src/icons/material/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { forwardRef } from "react";
import type { ComponentProps } from "react";
import { DEFAULT_SIZE, DEFAULT_FILL } from "../../constants";
import type { IconProps, TIconWeight } from "../../types/IconProps";
// import icons from https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Sharp<% variant.forEach(function(v) { %>
// <%= h.changeCase.pascal(v) %> <% weight.forEach(function(w) { %>
import <%= h.changeCase.pascal(name) %><%= h.changeCase.pascal(v) %><%= h.changeCase.pascal(w) %>Fill from "@material-symbols/svg-<%= w %>/<%= v %>/<%= h.changeCase.snake(name) %>-fill.svg";
import <%= h.changeCase.pascal(name) %><%= h.changeCase.pascal(v) %><%= h.changeCase.pascal(w) %> from "@material-symbols/svg-<%= w %>/<%= v %>/<%= h.changeCase.snake(name) %>.svg";<% }); %> 
<% }); %> 
type TVariant = <%- variantUnion %>;
type TWeight = Extract<TIconWeight, <%- weightUnion %>>;
type <%= h.changeCase.pascal(name) %>Props = IconProps<TVariant, TWeight> &
  Omit<ComponentProps<"svg">, "width" | "height" | "fill">;
type SVGComponent = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
>;

const <%= h.changeCase.pascal(name) %> = forwardRef<SVGSVGElement, <%= h.changeCase.pascal(name) %>Props>(
  ({
    variant = "<%= variant[0] %>",
    size = DEFAULT_SIZE,
    weight = <%= weight[0] %>,
    fill = DEFAULT_FILL,
    ...props
  }, ref) => {
    const variantMapper: Record<
      TVariant,
      Record<
      "true" | "false",
      Record<TWeight, SVGComponent>
    >
  > = {<% variant.forEach(function(v) { %>
    <%= v %>: {
      true: {<% weight.forEach(function(w) { %>
        <%= w %>: <%= h.changeCase.pascal(name) %><%= h.changeCase.pascal(v) %><%= w %>Fill,<% }); %>
      },
      false: {<% weight.forEach(function(w) { %>
        <%= w %>: <%= h.changeCase.pascal(name) %><%= h.changeCase.pascal(v) %><%= w %>,<% }); %>
      },
    },<% }); %> 
  };

  const SVG = variantMapper[variant][`${fill}`][weight];
  return <SVG width={size} height={size} {...props} />;
});

export default <%= h.changeCase.pascal(name) %>;