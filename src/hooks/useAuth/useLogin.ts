/* eslint-disable function-paren-newline */
import { useMutation } from '@tanstack/react-query';
import { LoginRequestParams } from '../../services/auth/types';
import AuthService from '../../services/auth';

export function useLogin() {
  const authService = new AuthService();

  const createUserMutation = useMutation((user: LoginRequestParams) =>
    authService.signIn(user).then((res) => res),
  );
  return createUserMutation;
}
