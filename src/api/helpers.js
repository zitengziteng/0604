import axios   from 'axios'

const ERR_OK = 0
// 简单axios 封装
// 导出get方法， 传递一个URL，然后返回一个新的函数，再去调用，返回一个地址参数传递；  
// export function get(url){
//     return function (params){
//         return axios.get(url,{
//             params
//         }).then((res)=>{
//             const {errno,data} = res.data
//             if(errno =0){
//                 return data
//             }
//         }).catch(()=>{

//         })
//     }
// }

export function get(url) {
    return function(params = {}) {
      return axios.get(url, {
        params
      }).then((res) => {
        const {errno, data} = res.data
        if (errno === ERR_OK) {
          return data
        }
      }).catch((e) => {
      })
    }
  }

  