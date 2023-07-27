import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useLoading } from '../../hooks/useLoading';
import AppBar from '../../layout/AppBar';

import { Container, WrapperForm } from './styles';
import { useLogin } from '../../hooks/useAuth/useLogin';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const location: any = useLocation();
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || '/';
  const { mutateAsync } = useLogin();
  const { setAuthData, authData } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data, event) => {
    event?.preventDefault();
    setLoading(true);

    const mutateArgs = {
      email: data.userName,
      password: data.password,
      token_name: 'web',
    };
    try {
      const authData = await mutateAsync(mutateArgs);
      if (!authData.data?.token) return;

      setAuthData({
        isAuthenticated: true,
        token: authData.data?.token,
        user: authData.data.user,
      });
      setTimeout(() => {
        setLoading(false);
        navigate('/item');
      }, 300);
    } catch (error) {
      toast.error(`Erro ao fazer login ${error}`);
    } finally {
      setLoading(false);
    }
  });

  useLoading(loading);

  return authData.isAuthenticated ? (
    <Navigate to={from} state={{ from: location }} replace />
  ) : (
    <>
      <AppBar />
      <Container>
        <WrapperForm onSubmit={onSubmit}>
          <Input type="text" name="userName" label="Usuário" required register={register} />
          <Input type="password" name="password" label="Senha" required register={register} />
          <Button type="submit" height="2.5rem" size="SMALL">
            Entrar
          </Button>
        </WrapperForm>
      </Container>
    </>
  );
}
