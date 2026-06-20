Homepage marketing blocks: `ServiceCard`, `ReviewCard`, `GuaranteeCard`.

```jsx
<ServiceCard icon={<Droplets/>} title="Drain Cleaning" href="/drains">
  Slow sink or backed-up shower? We snake, jet, and camera the line so it
  actually stays clear.
</ServiceCard>

<ReviewCard rating={5} quote="Showed up in an hour and fixed the leak fast."
  author="Marcus T." location="Northgate" source="Google" />

<GuaranteeCard icon={<BadgeCheck/>} title="Upfront pricing">
  You approve the price before we lift a wrench. No surprises on the invoice.
</GuaranteeCard>
```

ServiceCard & GuaranteeCard take an `icon` node (Lucide). GuaranteeCard `tone="navy"` for dark bands.
