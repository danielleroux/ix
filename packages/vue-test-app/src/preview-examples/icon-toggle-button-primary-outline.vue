<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="example-styles/dist/icon-toggle-button.css"></style>

<template>
  <IxToggleButton variant="primary" outline></IxToggleButton>
  <IxToggleButton variant="primary" outline pressed></IxToggleButton>
  <IxToggleButton variant="primary" outline disabled></IxToggleButton>
  <IxToggleButton variant="primary" outline disabled loading></IxToggleButton>
</template>
