import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { UserData, PostUserData } from '@/services/users/types';
import { FormManagerInterface, SetStateInterface } from '@/interfaces/global';
import UsersService from '@/services/users';
import { errorAlertMessage, getToastOptions } from '@/services/global';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

interface UsersContextInterface {
  listOfUsers: UserData[];
  setListOfUsers: SetStateInterface<UserData[]>;
  getUsers: (filter?: string) => Promise<void>;
  saveUser: (data: PostUserData) => Promise<void>;
  setDataForm: (data: UserData) => void;
  handleNewUser: () => void;
  tabActive: number;
  setTabActive: SetStateInterface<number>;
  formInfo: FormManagerInterface;
}

const UsersContext = createContext<UsersContextInterface>({} as UsersContextInterface);

export function UsersProvider({ children }: { children: ReactNode }) {
  const usersService = new UsersService();
  const [listOfUsers, setListOfUsers] = useState<UserData[]>([]);
  const [tabActive, setTabActive] = useState(0);
  const [userSelected, setUserSelected] = useState<UserData | null>(null);

  const schema = Yup.object({
    name: Yup.string().required('Campo obrigatório').max(100, 'Máximo 100 caracteres'),
    cpf: Yup.string().max(11, 'Máximo 11 caracteres'),
    email: Yup.string().required('Campo obrigatório').max(100, 'Máximo 100 caracteres'),
  }).required();
  const formInfo = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (tabActive === 0) {
      formInfo.reset();
    }
  }, [tabActive]);

  const handleNewUser = () => {
    formInfo.reset();
    setTabActive(1);
  };

  const getUsers = async (filter?: string) => {
    try {
      const res = await usersService.getAll(filter);

      setListOfUsers(res);
    } catch (error) {
      errorAlertMessage(error);
    }
  };

  const saveUser = async (data: PostUserData) => {
    try {
      if (userSelected) {
        data.id = userSelected.id;
      }
      const res = await usersService.postUser(data);

      if (res.success) {
        toast.success('Usuário salvo com sucesso', getToastOptions());
      }
    } catch (error) {
      errorAlertMessage(error);
    }
  };

  const setDataForm = (data: UserData) => {
    setUserSelected(data);
    formInfo.setValue('name', data.name);
    formInfo.setValue('situation', data.situation);
    formInfo.setValue('cpf', data.cpf);
    formInfo.setValue('email', data.email);

    setTabActive(1);
  };

  const value = useMemo(
    () => ({
      formInfo,
      listOfUsers: listOfUsers,
      setListOfUsers: setListOfUsers,
      getUsers: getUsers,
      saveUser: saveUser,
      setDataForm: setDataForm,
      tabActive: tabActive,
      setTabActive: setTabActive,
      handleNewUser: handleNewUser,
    }),
    [listOfUsers, formInfo.formState],
  );

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
