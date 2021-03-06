import Vue from 'vue'
import VueRouter from 'vue-router'

// 各个地图组件
/************************************************ 1.前端*********************************************/
/** vue案例  */
import ArchiveComponent from '@/components/Vue/ArchiveComponent/index.vue'//动态组件
import SlotIndex from '@/components/Vue/Slot/Index.vue'//插槽
import CustomComponentIndex from '@/components/Vue/CustomComponents/Index.vue'// vue自定义组件的使用
import AbsolutePanel from '@/components/Vue/CustomComponents/AbsolutePanel/index.vue'
import DialogPanel from '@/components/Vue/CustomComponents/DialogPanel/index.vue'
import CustomPluginsIndex from '@/components/Vue/Plugins/index.vue'//插件的使用
/** CSS、SASS */
import CssIndex from '@/components/Vue/CSS/Index.vue'//插件的使用
/** EChart */
import echartK from '@/components/EChart/chart_K/echart-k.vue'//插件的使用
import echartDoc from '@/components/EChart/Index.vue'


/************************************************ 2.后台*********************************************/
/** Node */
import NPM from '@/components/Backend/Node/NPM/index.vue' // npm文档
import JsonServer from '@/components/Backend/JsonServer/index.vue'

/************************************************ 3. GIS*********************************************/
/** openlayers */
import olMap from '@/components/Openlayers/Map.vue'
import ControlIndex from '@/components/Openlayers/Controls/ControlIndex.vue'
import MapLinkage from '@/components/Openlayers/Map/MapLinkage.vue'
import MapExchange from '@/components/Openlayers/Map/MapExchange.vue'
import ViewNavigation from '@/components/Openlayers/View/ViewNavigation.vue'
import ViewExtent from '@/components/Openlayers/View/ViewExtent.vue'
import ViewMinMaxZoom from '@/components/Openlayers/View/ViewMinMaxZoom.vue'
import ViewFitExtent from '@/components/Openlayers/View/ViewFitExtent.vue'
import TileSourceOnline from '@/components/Openlayers/Source_Layer/Source-Tile/TileSourceOnline.vue'
import TileSourceXYZ from '@/components/Openlayers/Source_Layer/Source-Tile/TileSourceXYZ.vue'
import TileSourceXYZ_Baidu2_Formal from '@/components/Openlayers/Source_Layer/Source-Tile/TileSourceXYZ_Baidu2_Formal.vue'
import TileSourceXYZ_Baidu1_Test from '@/components/Openlayers/Source_Layer/Source-Tile/TileSourceXYZ_Baidu1_Test.vue'
import TileSourceXYZ_Baidu3 from '@/components/Openlayers/Source_Layer/Source-Tile/TileSourceXYZ_Baidu3.vue'
import WMS from '@/components/Openlayers/Source_Layer/WMS-Source/WMS.vue'
import DiffusedCircle from '@/components/Openlayers/OverLay/DiffusedCircle.vue'
import WFS from '@/components/Openlayers/GeoserverResource/WFS.vue'


/************************************************ 4.测试*********************************************/
import Test from '@/components/ModuleTest/index.vue'//插件的使用

/************************************************ 5.其他*********************************************/
import DigitalCash from '@/components/Other/DigitalCash/Index.vue'//數字貨幣



Vue.use(VueRouter)

const routes = [
    /********openleyers路由*******/
    {
        path: '/',
        redirect: '/olMap'
    },
    {
      path: '/olMap',
      name: 'olMap',
      component: olMap
    },
    {
        path: '/ControlIndex',
        name: 'ControlIndex',
        component: ControlIndex
    },
    {
        path: '/MapLinkage',
        name: 'MapLinkage',
        component: MapLinkage
    },
    {
        path: '/MapExchange',
        name: 'MapExchange',
        component: MapExchange
    },
    {
        path: '/ViewNavigation',
        name: 'ViewNavigation',
        component: ViewNavigation
    },
    {
        path: '/ViewExtent',
        name: 'ViewExtent',
        component: ViewExtent
    },
    {
        path: '/ViewMinMaxZoom',
        name: 'ViewMinMaxZoom',
        component: ViewMinMaxZoom
    },
    {
        path: '/ViewFitExtent',
        name: 'ViewFitExtent',
        component: ViewFitExtent
    },
    {
        path: '/TileSourceOnline',
        name: 'TileSourceOnline',
        component: TileSourceOnline
    },
    {
        path: '/TileSourceXYZ',
        name: 'TileSourceXYZ',
        component: TileSourceXYZ
    },
    {
        path: '/TileSourceXYZ/Baidu/Test',
        name: 'TileSourceXYZ_Baidu_Test',
        component: TileSourceXYZ_Baidu1_Test
    },
    {
        path: '/TileSourceXYZ/Baidu/Formal',
        name: 'TileSourceXYZ_Baidu_Formal',
        component: TileSourceXYZ_Baidu2_Formal
    },
    {
        path: '/TileSourceXYZ_Baidu_1',
        name: 'TileSourceXYZ_Baidu_1',
        component: TileSourceXYZ_Baidu3
    },
    {
        path: '/WMS',
        name: 'WMS',
        component: WMS
    },
    {
        path: '/OverLay/DiffusedCircle',
        name: 'DiffusedCircle',
        component: DiffusedCircle
    },
    {
        path: '/Geoserver/WFS',
        name: 'WFS',
        component: WFS
    },
    /***********VUE相关路由*********/
    {
        path: '/vue/ArchiveComponent',
        name: 'ArchiveComponent',
        component: ArchiveComponent
    },
    {
        path: '/vue/SlotIndex',
        name: 'SlotIndex',
        component: SlotIndex
    },
    {
        path: '/vue/AbsolutePanel',
        name: 'AbsolutePanel',
        component: AbsolutePanel
    },
    {
        path: '/vue/DialogPanel',
        name: 'DialogPanel',
        component: DialogPanel
    },
    {
        path: '/vue/Components',
        name: 'CustomComponentIndex',
        component: CustomComponentIndex
    },
    {
        path: '/vue/Plugins',
        name: 'CustomPluginsIndex',
        component: CustomPluginsIndex
    },
    {
        path: '/ModuleTest/Test',
        name: 'Test',
        component: Test
    },
    /************CSS、SCASS相关路由************/
    {
        path: '/vue/CSS',
        name: 'CssIndex',
        component: CssIndex
    },
    /************echart相关路由************/
    {
        path: '/EChart/K',
        name: 'echartK',
        component: echartK
    },
    {
        path: '/EChart/Doc',
        name: 'Doc',
        component: echartDoc
    },
    //
    /***************NODE******************/
    {
        path: '/NPM',
        name: 'NPM',
        component: NPM
    },
    /***************JsonServer******************/
    {
        path: '/JsonServer',
        name: 'JsonServer',
        component: JsonServer
    },
    /*********************数字货币*********************/
    {
        path: '/Other/DigitalCash',
        name: 'DigitalCash',
        component: DigitalCash
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
