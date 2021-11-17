import axios from "axios";


const axiosInst = axios.create({
    baseURL: 'http://localhost:3010/'
});

export const contactAPI = {
    sendMessage: (messageData) => {
        return axiosInst
            .post('sendMessage', messageData);
    },
}
