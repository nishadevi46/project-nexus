export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:'loading...',
      message:'ur data is being loaded Please wait'
    },
    success:{
        title:'Success',
        message:'data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'any error occured while fetching response from server. plz try later'
    },
    requestFailure:{
        title:'Error',
        message:'an error occured while parsing request data'
    },
    networkError:{
        title:'Error',
        message:'unable to connect with the server Plz check internet connectivity'
    }
    }
    export const SERVICE_URL={
        userSignup: { url: '/signup', method: 'POST' },
        userLogin: { url: '/login', method: 'POST' },   
    }