import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, selectIsAuth } from '../../Redux/Slices/GeneralSlice';

const Login = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const onSumbit = async (values) => {
    const data = await dispatch(fetchUserData(values));

    console.log(data);

    if (!data.payload) {
      return alert('Не удалось авторизоваться!');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } else {
      alert('Не удалось авторизоваться');
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Login">
      <div className="LoginForm">
        <div className="LoginFormTitle">
          <h3>Войти в систему</h3>
        </div>
        <form onSubmit={handleSubmit(onSumbit)}>
          <div className="LoginFormInputs">
            <TextField
              className="email"
              label="E-Mail"
              type="email"
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register('email', { required: 'Укажите почту' })}
            />
            <TextField
              className="password"
              label="Пароль"
              type="password"
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register('password', { required: 'Укажите пароль' })}
            />
            <div className="LoginFormInputsButton">
              <Button type="submit" size="large" variant="contained" fullWidth>
                Войти
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
