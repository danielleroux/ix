/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDateInput, IxIcon, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxDateInput value="1970/01/01">
      <IxIcon name="bulb" slot="start" size="16"></IxIcon>
      <IxTypography slot="end">Slot</IxTypography>
    </IxDateInput>
  );
};