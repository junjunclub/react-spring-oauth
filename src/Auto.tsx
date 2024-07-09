import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withCookies, ReactCookieProps } from 'react-cookie';

const TokenRefresher: React.FC<ReactCookieProps> = ({ cookies }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키가 제대로 설정되어 있는지 확인
    if (!cookies) {
      console.error("Cookies are not provided");
      return;
    }

    // const authorizationCookie = cookies.get('Authorization');
    const refreshCookie = cookies.get('refresh');

    // console.log('Authorization Cookie:', authorizationCookie);
    console.log('Refresh Cookie:', refreshCookie);

    // if (!authorizationCookie || !refreshCookie) {
    //   console.error("Authorization or Refresh token is not available in cookies");
    //   return;
    // }

    const refreshAPI = axios.create({
      baseURL: import.meta.env.VITE_APP_GENERATED_SERVER_URL as string,
      headers: { "Content-Type": "application/json" }
    });

    const interceptor = axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: any) => {
        const originalConfig = error.config as AxiosRequestConfig;
        const msg = error.response?.data?.msg;
        const status = error.response?.status;

        if (status === 401) {
          if (msg === "Expired Access Token. 토큰이 만료되었습니다") {
            try {
              const res = await axios.post(
                `${import.meta.env.VITE_APP_GENERATED_SERVER_URL}/api/token/reissue`,
                {},
                {
                  headers: {
                    // Authorization: authorizationCookie,
                    Refresh: refreshCookie,
                  },
                }
              );

              localStorage.setItem("Authorization", res.headers.authorization);
              localStorage.setItem("Refresh", res.headers.refresh);

              if (originalConfig.headers) {
                originalConfig.headers["authorization"] = "Bearer " + res.headers.authorization;
                originalConfig.headers["refresh"] = res.headers.refresh;
              }

              return refreshAPI(originalConfig);
            } catch (err) {
              console.error('An error occurred while refreshing the token:', err);
              localStorage.clear();
              navigate("/");
            }
          } else {
            localStorage.clear();
            navigate("/");
          }
        } else if (status === 400 || status === 404 || status === 409) {
          // window.alert(msg); 
          // console.log(msg)
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [cookies, navigate]);

  return null; // 이 컴포넌트는 렌더링할 UI가 없으므로 null을 반환합니다.
};

export default withCookies(TokenRefresher);
