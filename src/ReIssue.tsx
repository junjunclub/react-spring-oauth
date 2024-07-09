import React, { useState } from 'react';
import axios from 'axios';
import { withCookies, ReactCookieProps } from 'react-cookie';

const ReIssue: React.FC<ReactCookieProps> = ({ cookies }) => {
  const onFinish = (event: React.FormEvent) => {
    event.preventDefault();

    // 쿠키에서 값 가져오기
    const refreshToken = cookies?.get('refresh');

    axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      url: 'http://localhost:8080/api/user/reissue',
      data: {
        refreshToken: refreshToken,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={onFinish}>ReIssue</button>
    </div>
  );
};

export default withCookies(ReIssue);
