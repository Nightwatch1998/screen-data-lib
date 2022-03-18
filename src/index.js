import Test from './components/Test/index'
import Test2 from './components/Test2/index'
import Test3 from './components/Test3/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import ImoocLoading from './components/ImoocLoading/index'
import ImoocFlyBox from './components/ImoocFlyBox/index'
import Container from './components/Container/index'
import ImoocLogo from './components/Imooclogo/index'
import VueCountTo from './components/VueCountTo/index'
import VueEcharts from './components/VueEcharts/index'
import BaseScrollList from './components/BaseScrollList/index'


export default function(Vue){
    Vue.use(Test)
    Vue.use(Test2)
    Vue.use(Test3)
    Vue.use(Icon)
    Vue.use(SvgAnimation)
    Vue.use(ImoocLoading)
    Vue.use(ImoocFlyBox)
    Vue.use(Container)
    Vue.use(ImoocLogo)
    Vue.use(VueCountTo)
    Vue.use(VueEcharts)
    Vue.use(BaseScrollList)
}