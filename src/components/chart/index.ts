/*
 * @Description:
 * @Author: ldx
 * @Date: 2024-01-19 15:04:07
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-27 09:22:20
 */
import * as echarts from "echarts"

export function createRadarOption(option = {}) {
  return echarts.util.merge(option, {
    xAxis: { show: false },
    yAxis: { show: false },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '电力负荷', max: 6500 },
        { name: '交流器', max: 16000 },
        { name: '光伏发电站', max: 30000 },
        { name: '风力', max: 38000 },
        { name: '电池', max: 52000 },
      ],
      axisName: {
        color: '#fff',
        fontSize: 8,
      },
      nameGap: 5
    },
    series: [
      {
        name: '类型分布',
        type: 'radar',
        areaStyle: {
          color: '#209980'
        },
        symbol: 'none',
        data: [
          {
            value: [5000, 14000, 28000, 26000, 42000,],
          }
        ]
      }
    ]
  })
}


/** 图 */
export function createOption(option = {}) {
  return echarts.util.merge(option, {
    tooltip: {
      trigger: "axis",
      show: false,
      valueFormatter: (value: string) => Number(value).toFixed(2) + "MW"
    },
    xAxis: {
      type: "category",
      data: [],
      axisLabel: {
        interval: 0,
        color: "#909399",
        fontSize: 8
      },
    },
    legend: {
      left: "right",
      backgroundColor: "transparent",
      textStyle: {
        color: '#fff',
        fontSize: 8
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
        lineStyle: {
          type: "dashed",
          dashOffset: 2
        }
      },
      axisLabel: {
        // interval: 0,
        color: "#909399",
        fontSize: 10
      },
      // scale: true //自适应
    },
    grid: {
      top: 28,
      left: 34,
      right: 10,
      bottom: 24
    },
    series: []
  })
}
/** 塔状图 */
export function createPictorialBarOption(option = {}) {
  return echarts.util.merge(option, {
    grid: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 20,
      containLabel: true
    },
    xAxis: {
      data: ['嘉定区', '寨南区', '保定区', '浦东新区', '长宁区', '保定区', '浦东新区', '长宁区'],
      splitLine: {
        show: false
      },
      axisLabel: {
        margin: -4,
        textStyle: {
          padding: [14, 0, 0, 0],
          fontSize: 10,
          color: "rgba(255,255,255,1)"
        }
      }
    },
    yAxis: {
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "rgb(148,159,167)",
          fontSize: 10
        }
      }
    },
    // color: ["#e54035"],
    series: [{
      barMinHeight: 10,
      type: "pictorialBar",
      barCategoryGap: "60%",
      symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      // symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
      itemStyle: {
        normal: {
          //barBorderRadius: 5,
          //渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "#01EAED"
          },
          {
            offset: 0.5,
            color: "#02C4DD"
          },
          {
            offset: 1,
            color: "#029ED9"
          }
          ])
        }
      },

      data: [100, 200, 240, 300, 360, 370, 390, 410],
      z: 10
    },
    {
      name: "hill",
      type: "bar",
      barWidth: '20%',
      symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
      itemStyle: {
        normal: {
          color: "rgba(11,47,68,0)"
        }
      },
      data: [450, 450, 450, 450, 450, 450, 450, 450],
      z: 9
    }
    ]
  })
}
/** 横向柱状图 */
export function createHBarOption(option = {}) {
  return echarts.util.merge(option, {
    grid: {
      left: '2%',
      right: '2%',
      bottom: '-20',
      top: '2%',
      containLabel: true
    },

    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: ['三洋有限公司', '桥南有限公司', '盐都有限公司', '福日有限公司', '信安有限公司']
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '12'
        },
      },
      data: [239, 181, 154, 144, 135]
    }],
    series: [{
      name: '值',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 30,
          color: (params: any) => {
            return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: params.dataIndex < 2 ? '#A67939' : '#22689D'
            }, {
              offset: 1,
              color: params.dataIndex < 2 ? '#9F5670' : '#1596A7'
            }])
          },
        },
      },
      barWidth: 10,
      data: [239, 181, 154, 144, 135]
    },
    {
      name: '背景',
      type: 'bar',
      barWidth: 10,
      barGap: '-100%',
      data: [300, 300, 300, 300, 300],
      itemStyle: {
        normal: {
          color: 'rgba(24,31,68,1)',
          barBorderRadius: 30,
        }
      },
    },
    ]
  })
}



