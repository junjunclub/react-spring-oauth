import React, { useState } from 'react';
import axios from 'axios';
import { withCookies, ReactCookieProps } from 'react-cookie';

const ReIssue: React.FC<ReactCookieProps> = () => {
  const onFinish = (event: React.FormEvent) => {
    event.preventDefault();

    axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      url: 'http://localhost:8080/api/user/reissue',
      data: {
        
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
