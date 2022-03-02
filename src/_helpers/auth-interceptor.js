import axios from "axios"

export function BasicAuthInterceptor() {

  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
    const username = "codenameninja";
    const password = "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";

        request.headers.common.Authorization = `Basic` + btoa(`${username}:${password}`);

    return request;
  });
}