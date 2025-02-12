/*
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-09 10:02:04
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-25 15:07:53
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import MetaAnalysis from '@/views/resources/meta-analysis/index.vue'
import MetaOverview from '@/views/resources/meta-overview/index.vue'
import MetaEnroll from '@/views/resources/meta-enroll/index.vue'
import RealTimeMonitor from '@/views/real-time-monitor/index.vue'
import DataQuery from '@/views/forecast/data-query/index.vue'
import MultiDimension from '@/views/forecast/multi-dimension/index.vue'
import PriceSignal from '@/views/generation-task/price-signal/index.vue'
import ExcitationSignal from '@/views/generation-task/excitation-signal/index.vue'
import Motivational from '@/views/task-traceability/motivational-information/index.vue'
import DemandResponse from '@/views/task-traceability/demand-response-details/index.vue'
import OrderElectric from '@/views/task-traceability/order-electric-utilization/index.vue'
import Technical from '@/views/effect-decision/technical-examine/index.vue'
import Deviation from '@/views/effect-decision/deviation-examine/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/resources/metaAnalysis',
      name: 'metaAnalysis',
      component: MetaAnalysis,
    },
    {
      path: '/resources/metaOverview',
      name: 'metaOverview',
      component: MetaOverview,
    },
    {
      path: '/resources/metaEnroll',
      name: 'metaEnroll',
      component: MetaEnroll,
    },
    {
      path: '/realTimeMonitor',
      name: 'realTimeMonitor',
      component: RealTimeMonitor,
    },
    {
      path: '/forecast/DataQuery',
      name: 'dataQuery',
      component: DataQuery,
    },
    {
      path: '/forecast/multiDimension',
      name: 'multiDimension',
      component: MultiDimension,
    },
    {
      path: '/generationTask/priceSignal',
      name: 'priceSignal',
      component: PriceSignal,
    },
    {
      path: '/generationTask/excitationSignal',
      name: 'excitationSignal',
      component: ExcitationSignal,
    },
    {
      path: '/task/motivational',
      name: 'motivational',
      component: Motivational,
    },
    {
      path: '/task/demandResponse',
      name: 'demandResponse',
      component: DemandResponse,
    },
    {
      path: '/task/orderElectric',
      name: 'orderElectric',
      component: OrderElectric,
    },
    {
      path: '/effect/technical',
      name: 'technical',
      component: Technical,
    },
    {
      path: '/effect/deviation',
      name: 'deviation',
      component: Deviation,
    },
  ],
})

export default router
