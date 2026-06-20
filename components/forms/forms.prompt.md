Form fields styled to the brand — `Input` and `Select` share one look (12px radius, blue focus ring).

```jsx
<Input label="Your name" placeholder="Jane from Maple St." required />
<Input label="ZIP code" icon={<MapPin/>} hint="We serve the metro + 30 mi." />
<Input label="Email" error="That doesn't look like an email." />
<Select label="What's going on?"><option>Clogged drain</option>…</Select>
```

Props: `label`, `required`, `icon` (Input), `hint`, `error` (red state replacing hint).
