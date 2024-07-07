# NexComponent UI Library

Welcome to **NexComponent**, a comprehensive and flexible UI library designed for modern React applications. NexComponent provides a suite of reusable and customizable components to streamline your development process and ensure a consistent design across your project.

## Key Features

* **Versatile Components:** NexComponent includes a variety of UI components such as cards, buttons, forms, and more, all designed to be easily integrated into your React applications.
* **Customizable:** All components are highly customizable, allowing you to adjust their appearance and behavior to fit your specific design requirements.
* **Responsive Design:** Our components are built to be responsive, ensuring they look great on all devices and screen sizes.
* **Accessibility:** We prioritize accessibility, ensuring that our components provide a seamless experience for all users, including those with disabilities.
* **Consistent Styling:** Maintain a consistent look and feel across your application with NexComponent's cohesive styling and theming capabilities.
* **Comprehensive Documentation:** Detailed documentation and examples are available to help you get started quickly and use our components effectively.

## Installation

To install NexComponent in your project, use npm or yarn:

```txt
npm install @nexcomponent/lib --save
```

or

```txt
yarn add @nexcomponent/lib
```

## Usage

Import and use the components in your React application:

```tsx
import React from 'react';
import { NexCard, NexHeroCard, NexButton } from '@nexcomponent/lib';

function App() {
  return (
    <div>
      <NexCard title="Example Card" content="This is a sample card." />
      <NexHeroCard title="Hero Title" subtitle="Hero Subtitle" />
      <NexButton text="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;
```

## Documentation

For detailed documentation on each component and its props, visit the [official documentation](https://main--6672d9cb533920c89e299205.chromatic.com).

## Styling

`@nexcomponent/lib` components come with minimal styling. You can customize the styles by either:

* Passing custom className or styles directly to the components.

## License

NexComponent is licensed under the MIT License. See the [LICENSE](#) file for more information.