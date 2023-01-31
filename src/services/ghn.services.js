import axios from 'axios';

export const giaoHangNhanhServices = {
    register: (params) => {
        return axios.post(`${process.env.REACT_APP_BASE_URL}/informationUser`, { params }) // đã cấu hình base url rồi nên không cần viết nưa
    },
    getdataCourse : () => {
       return axios(`${process.env.REACT_APP_BASE_URL}/course`)
    },
    getdataLogo : () => {
       return axios(`${process.env.REACT_APP_BASE_URL}/logo`)
    }
}
