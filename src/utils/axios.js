// // 封装axios
// impor axios from 'axios';
// // 创建axios实例
// const server = axios.create({
//     baseURL: process.env.BASE_API,
//     timeout: 20000,
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     }
// });
// // 添加request拦截器
// server.interceptors.request.use(config => {
//     return config;
// }, error => {
//     // 请求错误处理
//     console.log('发生错误了')
// });
// // 添加response拦截器
// server.interceptors.response.use(response => {

// }, error => {
//     console.log('发生错误了')
// })
// const post = (url, data, timeout) => {
//     const consfig = {
//         timeout,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     return server.post(url, data, config)
// };
// const get = (url, data, timeout) => {
//     let params;
//     if (data) {
//         params = {
//             params: data
//         }
//     }
//     if (timeout) {
//         params.timeout = timeout;
//     }
//     return server.get(url, params)
// };
// const getApi = (url, data, timeout) => {
//     return get(url, data, timeout);
// }
// const postApi = (url, data, timeout) => {
//     return post(url, data, timeout)
// }
// export default {
//     get,
//     post,
//     getApi,
//     postApi
// }