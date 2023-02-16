/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export default {
  version: 1,
  themeName: 'brand-dark',
  theme: {
    seriesCnt: 3,
    backgroundColor: 'transparent',
    titleColor: '#ffffff',
    subtitleColor: '#ffffff',
    textColorShow: false,
    textColor: '#ffffff',
    markTextColor: '#000000',
    color: [
      '#00ffb9',
      '#41b7e6',
      '#cd31e7',
      '#b3b3be',
      '#0087be',
      '#86a0f6',
      '#baba9d',
      '#009e78',
      '#ffb180',
      '#b5bd00',
    ],
    borderColor: 'rgba(255,255,255,0.45)',
    borderWidth: 0,
    visualMapColor: ['#ff2640', '#ff9000', '#ffd732'],
    legendTextColor: '#ffffff',
    legend: {
      textStyle: {
        color: '#ffffff',
      },
    },
    kColor: '#fe0137',
    kColor0: '#40c200',
    kBorderColor: '#fe0137',
    kBorderColor0: '#40c200',
    kBorderWidth: 1,
    lineWidth: 2,
    symbolSize: 4,
    symbol: 'circle',
    symbolBorderWidth: 1,
    lineSmooth: false,
    graphLineWidth: 1,
    graphLineColor: 'rgba(255,255,255,0.6)',
    mapLabelColor: '#000',
    mapLabelColorE: 'rgb(100,0,0)',
    mapBorderColor: '#444',
    mapBorderColorE: '#444',
    mapBorderWidth: 0.5,
    mapBorderWidthE: 1,
    mapAreaColor: '#eee',
    mapAreaColorE: 'rgba(255,215,0,0.8)',
    axes: [
      {
        type: 'all',
        name: '通用坐标轴',
        axisLineShow: true,
        axisLineColor: 'rgba(255,255,255,0.35)',
        axisTickShow: true,
        axisTickColor: 'rgba(255,255,255,0.35)',
        axisLabelShow: true,
        axisLabelColor: '#ffffff',
        splitLineShow: true,
        splitLineColor: ['rgba(255,255,255,0.1)'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(0,0,0,0)', 'rgba(255,255,255,0.1)'],
      },
      {
        type: 'category',
        name: '类目坐标轴',
        axisLineShow: true,
        axisLineColor: '#6E7079',
        axisTickShow: true,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: false,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
      {
        type: 'value',
        name: '数值坐标轴',
        axisLineShow: true,
        axisLineColor: '#6E7079',
        axisTickShow: false,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: true,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
      {
        type: 'log',
        name: '对数坐标轴',
        axisLineShow: false,
        axisLineColor: '#6E7079',
        axisTickShow: false,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: false,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: true,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
      {
        type: 'time',
        name: '时间坐标轴',
        axisLineShow: true,
        axisLineColor: '#6E7079',
        axisTickShow: true,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#6E7079',
        splitLineShow: false,
        splitLineColor: ['#E0E6F1'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    ],
    axisSeperateSetting: false,
    toolboxColor: 'rgba(255,255,255,0.6)',
    toolboxEmphasisColor: '#00ffb9',
    tooltipAxisColor: 'rgba(255,255,255,0.35)',
    tooltipAxisWidth: '1',
    timelineLineColor: 'rgba(0,0,0,0)',
    timelineLineWidth: '1',
    timelineItemColor: 'rgba(255,255,255,0.35)',
    timelineItemColorE: 'rgba(255,255,255,0.6)',
    timelineCheckColor: '#00ffb9',
    timelineCheckBorderColor: '#000028',
    timelineItemBorderWidth: '1',
    timelineControlColor: '#00cccc',
    timelineControlBorderColor: '#00cccc',
    timelineControlBorderWidth: '1',
    timelineLabelColor: 'rgba(255,255,255,0.35)',
  },
};