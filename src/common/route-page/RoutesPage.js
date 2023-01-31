import RegistorwithAxios from '../../app/registor/RegistorwithAxios'
import { BlockOffiiceWork, CastGhn, Contact, Content, GhnEpress, GhnFullfilment, HcmWork, InformationGhn, Notification, Recruit, Technolgy, ViewDetail } from '../../component/index'
import Login from '../Login/Login'

const RoutesPage = [
    { path: '/pages/block/office', element: BlockOffiiceWork },
    { path: '/price/view-detail', element: ViewDetail },
    { path: '/pages/block/detail-hcm-ghn', element: HcmWork },
    { path: '/pages/ve-ghn', element: InformationGhn },
    { path: '/pages/work-ghn', element: Recruit },
    { path: '/pages/contact-ghn', element: Contact },
    { path: '/pages/xu-ghn', element: CastGhn },
    { path: '/pages/table-price', element: ViewDetail },
    { path: '/pages/technolgy-ghn', element: Technolgy },
    { path: '/pages/notification', element: Notification },
    { path: 'ghn-fullfilment', element: GhnFullfilment },
    { path: 'ghn-express', element: GhnEpress },
    { path: '/', element: Content },
    { path: '/registor', element: RegistorwithAxios, layout:null },
    { path: '/login', element: Login, layout:null }
]

export default RoutesPage
