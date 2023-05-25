import * as consts from './constants';

const fetchConfig = {
  // api: 'http://localhost:3000',
  api: 'https://api.riyarm.nomoredomains.monster',
};

const getResponseData = (res, about) => {
  return res.ok ? res.json() : Promise.reject(`${about}: ${res.status}`);
};

/* const getToken = () => {
  return localStorage.getItem('token');
}; */

export const getUserInfo = () => {
  // const token = getToken();

  return fetch(`${fetchConfig.api}/users/me`, {
    credentials: "include",
    headers: {
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) =>
    getResponseData(res, 'Данные о пользователе не загрузились')
  );
};

export const setUserInfo = (data) => {
  // const token = getToken();

  return fetch(`${fetchConfig.api}/users/me`, {
    method: 'PATCH',
    credentials: "include",

    headers: {
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then((res) =>
    getResponseData(res, 'Данные о пользователе не отправились!')
  );
};

export const setNewAvatar = (data) => {
  // const token = getToken();

  return fetch(`${fetchConfig.api}/users/me/avatar`, {
    method: 'PATCH',
    credentials: "include",
    headers: {
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar: data.avatar,
    }),
  }).then((res) => getResponseData(res, 'Новый аватар не сохранён!'));
};

export const getDefaultCard = () => {
  // const token = getToken();

  return fetch(`${fetchConfig.api}/cards`, {
    credentials: "include",
    headers: {
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => getResponseData(res, 'Не удалось обновить ленту!'));
};

export const postNewPhoto = (data) => {
  // const token = getToken();

  return fetch(`${fetchConfig.api}/cards`, {
    method: 'POST',
    credentials: "include",
    headers: {
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    }),
  }).then((res) => getResponseData(res, 'Новый пост не загрузился!'));
};

export const deleteCard = (card) => {
  // const token = getToken();

  return fetch(`${fetchConfig.api}/cards/${card}`, {
    method: 'DELETE',
    credentials: "include",
    headers: {
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => getResponseData(res, 'Не удалось удалить карту!'));
};

export const changeLikeCardStatus = (cardId, isLiked) => {
  // const token = getToken();

  return fetch(`${fetchConfig.api}/cards/${cardId}/likes`, {
    method: `${isLiked ? 'PUT' : 'DELETE'}`,
    credentials: "include",
    headers: {
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => getResponseData(res, 'Не удалось удалить лайк!'));
};
