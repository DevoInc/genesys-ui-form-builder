# Genesys UI Form Builder

> **Warning**
> This is an `alpha` version and it is not yet production ready.

A form builder based on a descriptive field model for Genesys UI ecosystem.

## Installation

```sh
npm i -S @devoinc/genesys-ui-form-builder
```

## Usage

```js
import { FormBuilder } from '@devoinc/genesys-ui-form-builder';

export const Test = (
  <FormBuilder
    model={
      children: [
        {
          key: 'key',
          type: 'text',
          value: 'This is a test'
        }
      ]
    }
    onChange={(model) => {
      // Do your magic with the changed model
    }
  />
);
```
