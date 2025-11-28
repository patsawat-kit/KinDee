# View Transitions API Implementation Guide

## Current Implementation: Framer Motion

We're currently using **Framer Motion** for page transitions, which provides:
- Smooth fade and slide animations
- Cross-browser compatibility
- Easy integration with React components

## Alternative: View Transitions API (Experimental)

The **View Transitions API** is a native browser feature that provides smoother transitions with less JavaScript overhead.

### How to Implement View Transitions API

1. **Enable in Next.js** (requires Next.js 14+):

```tsx
// app/layout.tsx
export const metadata = {
  other: {
    'view-transition': 'same-origin',
  },
};
```

2. **Add CSS for transitions**:

```css
/* app/globals.css */
@view-transition {
  navigation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.3s;
}
```

3. **Programmatic navigation** (for custom transitions):

```tsx
"use client";

import { useRouter } from "next/navigation";

export function useViewTransition() {
  const router = useRouter();

  const navigate = (url: string) => {
    if (!document.startViewTransition) {
      router.push(url);
      return;
    }

    document.startViewTransition(() => {
      router.push(url);
    });
  };

  return { navigate };
}
```

### Browser Support

- ✅ Chrome 111+
- ✅ Edge 111+
- ❌ Firefox (in development)
- ❌ Safari (not yet supported)

### Recommendation

- **Use Framer Motion** for production (current implementation)
- **Experiment with View Transitions API** for modern browsers with progressive enhancement
- Consider feature detection and fallback strategy

## Performance Comparison

| Feature | Framer Motion | View Transitions API |
|---------|---------------|---------------------|
| Browser Support | ✅ All | ⚠️ Limited |
| Performance | Good | Excellent |
| Customization | High | Medium |
| Bundle Size | ~50KB | 0KB (native) |
