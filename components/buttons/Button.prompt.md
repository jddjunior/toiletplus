Pill button for any call-to-action; `accent` (red) is reserved for emergency / call-now urgency, everything else uses `primary`.

```jsx
<Button>Book a plumber</Button>
<Button variant="accent" iconLeft={<PhoneIcon/>}>Call 24/7</Button>
<Button variant="outline" size="lg">See all services</Button>
<Button variant="on-dark">Get a quote</Button>   // on navy
```

Variants: primary · accent · navy · outline · ghost · on-dark. Sizes sm·md·lg. Props: `block`, `iconLeft`, `iconRight`, `href` (renders an `<a>`). Pill radius and tinted lift shadow are built in.
