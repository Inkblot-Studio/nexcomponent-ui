# Footer Translation Guide

The `NexFooter` component supports internationalization through a flexible translation system. This guide explains how to use and customize translations.

## Basic Usage

The footer component accepts an optional `translations` prop that allows you to override default English text:

```tsx
import { NexFooter } from '@nexcomponent/lib';

<NexFooter
  displayName="MyApp"
  translations={{
    allRightsReserved: 'Todos los derechos reservados.',
    getInTouch: 'Contáctanos',
    subscribe: 'Suscribirse'
  }}
  // ... other props
/>
```

## Available Translation Keys

### Footer Bottom
- `allRightsReserved` - Copyright text (default: "All rights reserved.")
- `followUsOn` - Social media aria-label prefix (default: "Follow us on")

### Contact Form
- `getInTouch` - Contact form title (default: "Get in Touch")
- `messageSentSuccessfully` - Success message (default: "Message sent successfully!")
- `yourEmailAddress` - Email input placeholder (default: "Your email address")
- `tellUsAboutProject` - Message textarea placeholder (default: "Tell us about your project or inquiry...")
- `sendMessage` - Submit button text (default: "Send Message")

### Newsletter
- `successfullySubscribed` - Newsletter success message (default: "Successfully subscribed!")
- `stayUpdated` - Newsletter input placeholder (default: "Stay updated")
- `subscribe` - Newsletter button text (default: "Subscribe")

### Agency Attribution
- `madeByInkblotStudio` - Agency attribution line (default: "Made with ❤️ by Inkblot Studio")

## Agency Attribution Configuration

The footer component supports configurable agency attribution with clickable links:

```tsx
<NexFooter
  displayName="MyApp"
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }}
  // ... other props
/>
```

### Agency Attribution Props

- `websiteUrl` (optional) - The URL to link to when the agency attribution is clicked
- `openInNewTab` (optional) - Whether to open the link in a new tab (default: false)

When `websiteUrl` is provided, the agency attribution line becomes clickable with hover effects. If no URL is provided, it displays as plain text.

## Complete Translation Example

```tsx
const spanishTranslations = {
  allRightsReserved: 'Todos los derechos reservados.',
  followUsOn: 'Síguenos en',
  getInTouch: 'Contáctanos',
  messageSentSuccessfully: '¡Mensaje enviado exitosamente!',
  yourEmailAddress: 'Tu dirección de correo electrónico',
  tellUsAboutProject: 'Cuéntanos sobre tu proyecto o consulta...',
  sendMessage: 'Enviar Mensaje',
  successfullySubscribed: '¡Suscrito exitosamente!',
  stayUpdated: 'Mantente actualizado',
  subscribe: 'Suscribirse',
  madeByInkblotStudio: 'Hecho con ❤️ por Inkblot Studio'
};

<NexFooter
  displayName="MiAplicación"
  tagline="Construyendo experiencias increíbles"
  translations={spanishTranslations}
  // ... other props
/>
```

## Integration with Translation Libraries

### With react-i18next

```tsx
import { useTranslation } from 'react-i18next';

const FooterWithI18n = () => {
  const { t } = useTranslation('footer');
  
  const translations = {
    allRightsReserved: t('allRightsReserved'),
    getInTouch: t('getInTouch'),
    subscribe: t('subscribe'),
    // ... other translations
  };
  
  return (
    <NexFooter
      displayName="MyApp"
      translations={translations}
      // ... other props
    />
  );
};
```

### With next-intl

```tsx
import { useTranslations } from 'next-intl';

const FooterWithNextIntl = () => {
  const t = useTranslations('footer');
  
  const translations = {
    allRightsReserved: t('allRightsReserved'),
    getInTouch: t('getInTouch'),
    subscribe: t('subscribe'),
    // ... other translations
  };
  
  return (
    <NexFooter
      displayName="MyApp"
      translations={translations}
      // ... other props
    />
  );
};
```

## TypeScript Support

The component includes full TypeScript support with the `FooterTranslations` interface:

```tsx
import type { FooterTranslations } from '@nexcomponent/lib';

const customTranslations: FooterTranslations = {
  allRightsReserved: 'Custom copyright text',
  // ... other translations
};
```

## Default Behavior

If no translations are provided, the component will use English defaults. You can override individual keys without providing all translations:

```tsx
<NexFooter
  displayName="MyApp"
  translations={{
    madeByInkblotStudio: 'Custom agency attribution'
  }}
  // All other text will use English defaults
/>
```

## Notes

- The agency attribution line is automatically added below the footer
- All translations are optional - the component will fall back to English defaults
- The translation system is designed to be lightweight and doesn't require external dependencies
- Custom contact form titles and newsletter placeholders can still be provided through their respective props and will take precedence over translations 