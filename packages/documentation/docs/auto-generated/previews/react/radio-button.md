<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/radio-button.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import React from 'react';

export const RadioButton: React.FC = () => {
  return (
    <>
      <input defaultChecked id="checkbox_1_1" name="group_1" type="radio" />
      <label htmlFor="checkbox_1_1"> Checked </label>

      <input id="checkbox_1_2" name="group_1" type="radio" />
      <label htmlFor="checkbox_1_2"> Normal </label>

      <input disabled id="checkbox_1_3" name="group_1" type="radio" />
      <label htmlFor="checkbox_1_3"> Disabled </label>
    </>
  );
};
```