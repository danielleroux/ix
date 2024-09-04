/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TargetFramework } from '../PlaygroundV2/framework-types';
import { getBranchPath } from '../PlaygroundV2/utils';
import { docusaurusFetch } from './fetching';

async function fetchFile(
  snippets: Record<string, string>,
  url: string,
  fileName: string
) {
  try {
    const file = await docusaurusFetch(url);

    if (file) {
      snippets[fileName] = file;
    }

    return file;
  } catch (e) {
    return '';
  }
}

export async function fetchSourceForAngular(baseUrl: string, name: string) {
  const snippets: Record<string, string> = {};

  await fetchFile(snippets, `${baseUrl}/${name}.html`, `${name}.html`);

  const tsFile = await fetchFile(
    snippets,
    `${baseUrl}/${name}.ts`,
    `${name}.ts`
  );

  const regex = /styleUrls:\s*\[\s*['"]([^'"]+)['"]\s*\]/;
  const match = tsFile.match(regex);
  if (match) {
    await fetchFile(snippets, `${baseUrl}/${match[1]}`, `${match[1]}`);
  }

  return snippets;
}

export function getAngularTestAppGithubPath(name: string) {
  const base = getBranchPath(TargetFramework.ANGULAR);

  return `${base}/src/preview-examples/${name}.ts`;
}