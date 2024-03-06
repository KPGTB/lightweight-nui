# Lightweight NUI

Lightweight FiveM NUI template with AlpineJS, Tailwind and reusable components

## Before usage

- Learn [AlpineJS](https://alpinejs.dev/)
- Learn [TailwindCSS](https://tailwindcss.com/) (optional)

## Installation

Create new github repo using this template or clone this repo

```
git clone https://github.com/KPGTB/lightweight-nui.git
```

## Usage

### LUA

To send NUI messages use

```lua
  SendNUIMessage({
    action = 'ACTION_NAME',
    data = DATA_OBJ
  })
```

### NUI

Main file - `nui/index.html`

#### Functions to interact with lua

- Receiving messages from lua

```js
useNui("ACTION_NAME", (data) => {
    // ... (data == DATA_OBJ)
})
```

- Sending callbacks to lua

```js
callNui("CALLBACK_NAME", REQ_DATA, (res) => {
    // ... (res == data from lua's response)
})
```

#### Reusable Components

To create reusable components, create new html file in `nui/components` folder. Name of that file will be a name of custom component. In that file you can write HTML and CSS code. **You can't use `<script>` tag**

After creating component, you need to register it in `index.html` using `registerComponent(COMPONENT_NAME)`.

**Don't put `.html` into COMPONENT_NAME**

After that you can use you component in html with `fivem-` prefix.

```html
<fivem-COMPONENT_NAME />
```

You can also define simple props for component and use it using `{{PROP_NAME}}`

```html
<fivem-COMPONENT_NAME example="World"/>
```

Component:

```html
<p>Hello {{example}}!</p>
```

Output: `Hello World!`
