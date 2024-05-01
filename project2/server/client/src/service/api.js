import axios from 'axios'
import { API_NOTIFICATION_MESSAGES, SERVICE_URL } from '../components/constant/config'
const API_URL = 'http://localhost:8000'

const axiosinstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json"
    }
  })
  axiosinstance.interceptors.request.use(
    function(config) {
      return config;
  },
  function(error) {
      return Promise.reject(error);
  }
  )

  axiosinstance.interceptors.response.use(
    function (response) {
      return processResponse(response)
    },
    function (error) {
      return Promise.reject(processError(error))
    }
  )

  const processResponse = (response) => {
    if (response?.status === 200) {
      return { isSuccess: true, data: response.data }
    }
    else {
      return {
        isFailure: true,
        status: response?.status,
        msg: response?.msg,
        code: response?.code
      }
    }
  }

  const processError = (error) => {
    if (error.response) {
      console.log("ERROR IN RESPONSE: ", error.toJSON());
      return {
        isError: true,
        message: API_NOTIFICATION_MESSAGES.responseFailure,
        code: error.response.status
      }
    } else if (error.request) {
      console.log("ERROR IN RESPONSE: ", error.toJSON());
      return {
        isError: true,
        message: API_NOTIFICATION_MESSAGES.requestFailure,
        code: ""
      }
    }
    else {
      console.log("ERROR IN RESPONSE: ", error.toJSON());
      return {
        isError: true,
        message: API_NOTIFICATION_MESSAGES.networkError,
        code: ""
      }
    }
  }
  const API = {};

  for (const [key, value] of Object.entries(SERVICE_URL)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
      axiosinstance({
        method: value.method,
        url: value.url,
        data: value.method === 'DELETE' ? null : body,
        responseType: value.responseType,
        headers: {
        
        },
        onUploadProgress: function (progressEvent) {
          if (showUploadProgress) {
            let percentagecompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            showUploadProgress(percentagecompleted)
          }
        },
        onDownloadProgress: function (progressEvent) {
          if (showDownloadProgress) {
            let percentagecompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            showDownloadProgress(percentagecompleted)
          }
        }
      })
  }
  export { API };