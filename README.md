# SimplifiedUI

`simplifiedUI` is a minimal React UI component library that includes customizable input components, designed for optimal designing in your application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Input Component](#input-component)
- [Customization](#customization)
- [Supported](#supported)
----
## Installation

Install `simplifiedUI` via npm:

```bash
npm i @roniwilliams12/simplified-ui-input 
```
---
## Usage


1. You have to install tailwindcss.
```bash
npm i tailwindcss -D postfix autoprefixer
npx tailwindcss init -p
```
2. Here is an example code of how to use the component from `SimplifiedUI`

````
import {Input} from '@roniwilliams12/simplified-ui-input

const App=()=>{
    return (
        <>
            <Input 
                type="text"
                placeholder="enter placeholder"
                change={your_function}
                label="your_label"
            >
        </>
    )
}

````
----
## Input Component

| Props   | Types   | Descriptions  |
|:------------|:------------|:------------|
|`type` |  `string`| The input type (e.g., text, email, password)|
|`label` |  `string`| Used to add the label|
|`placeholder` |  `string`| Used to add placeholder |
| `value` | `string` | Used to add value |
|`name`|`string`| Used to add name for input|
|`change`|`function`| This is the `onChange ` attribute return parametered with value in the input field|
|`readonly`|`boolean`| Defines whether the input can perform read or write|
|`required`|`boolean`| Defines whether the field is mandatory|
| `styles`| `object` | The object contains `container` `input ` `label` keys and values are `string`|
---
## Customization
- Using the styles attribute can override the styling to component.
- Use the tailwindcss classes for styling.
- The value to the attribute should be an object.
#### For example,
````
const inputStyle={
    container:" w-[500px] m-10 bg-slate-800",
    input:"text-white bg-slate-900",
    label:"text-lg font-bold"
}
```` 
---
## Supported
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

---
# THANK YOU FOR VISITING!!❤️