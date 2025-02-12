/*
 * @Description:
 * @Author: ldx
 * @Date: 2024-01-08 14:56:35
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-27 09:22:45
 */
export const baseOptions = {
  title: {
    text: "",
    textStyle: {
      color: "#333",
      fontSize: 12
    },
    top: 0
  },
  color: ["#209980", "#5DA5E5", "#5D75F7", "#85D1F2", "#85F287", "#7ECEFF", "#e86452", "#6dc8ec", "#38DEF7", "#cc1a03"],
  tooltip: {
    confine: true,
    backgroundColor: "#fff",
    borderColor: "#fff",
    extraCssText: "box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);font-size:12px",
    textStyle: {
      color: "#606266"
    },
    show: false,
  },
  grid: {
    left: 10,
    right: 10
  },
  yAxis: {
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        dashOffset: 2
      }
    },
    axisLabel: {
      interval: 0,
      color: "#909399",
      fontSize: 10
    }
  },
  xAxis: {
    axisTick: {
      show: false
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  }
}
