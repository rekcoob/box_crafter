# CSS Naming Conventions Documentation

## Introduction

This document provides a detailed overview of the CSS naming conventions used in this project. Adhering to these conventions is crucial for maintaining the readability and scalability of our codebase.

## Naming Conventions

### Global CSS Styles

**Format:** Kebab-case (hyphens between words)

- **Usage:** Applied to styles that are common across multiple components or the entire application.
- **Examples:**
  - `.flex-col`: Applies a flex column layout.
  - `.center`: Centers content horizontally and vertically.

### Scoped CSS Styles

**Format:** Snake_case (underscores between words)

- **Usage:** Applied to styles that are specific to a single Vue component, ensuring styles do not bleed into other parts of the application unintentionally.
- **Examples:**
  - `.material_container`: Specific styles for the Material component.
  - `.user_profile`: Specific styles for the User Profile component.

## Rationale

The use of distinct naming conventions for global and scoped CSS helps in:

- **Quick Identification**: Developers can instantly recognize whether a class affects multiple components or is confined to a single component.
- **Ease of Maintenance**: Clear distinctions reduce the risk of styling conflicts and make it easier to manage CSS changes as the project evolves.

## Code Examples

```html
<!-- Example of Global CSS Usage -->
<div class="flex-col center border">
  <!-- Content that uses globally defined styles -->
</div>

<!-- Example of Scoped CSS Usage -->
<template>
  <div class="user_profile">
    <!-- User profile specific content -->
  </div>
</template>

<style scoped>
  .user_profile {
    padding: 20px;
  }
</style>
```
