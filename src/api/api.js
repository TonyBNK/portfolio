import axios from "axios";


const axiosInst = axios.create({
    baseURL: 'https://portfolio-serv.herokuapp.com/'
});

export const contactAPI = {
    sendMessage: (messageData) => {
        return axiosInst
            .post('sendMessage', messageData);
    },
}
