---
inject: true
append: true
to: src/index.ts
skip_if: export { default as <%= name %> } from "./icons/material/<%= name %>";
---
export { default as <%= name %> } from "./icons/material/<%= name %>";