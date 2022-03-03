import axios from "axios"

export function BasicAuthInterceptor() {

  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
    const username = "InezMallandain";
    const password = "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";

        request.headers.common.Authorization = `Basic` + btoa(`${username}:${password}`);

    return request;
  });
}