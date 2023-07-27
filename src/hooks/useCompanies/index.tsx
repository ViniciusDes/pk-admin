import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { CompanyData, PostCompanyData } from '@/services/companies/types';
import { FormManagerInterface, SetStateInterface } from '@/interfaces/global';
import CompaniesService from '@/services/companies';
import {
  cepMask,
  cnpjMask,
  errorAlertMessage,
  getToastOptions,
  maskCpfCnpj,
} from '@/services/global';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

interface CompaniesContextInterface {
  listOfCompanies: CompanyData[];
  setListOfCompanies: SetStateInterface<CompanyData[]>;
  getCompanies: (filter?: string) => Promise<void>;
  saveCompany: (data: PostCompanyData) => Promise<void>;
  setDataForm: (data: CompanyData) => void;
  handleNewCompany: () => void;
  tabActive: number;
  setTabActive: SetStateInterface<number>;
  formInfo: FormManagerInterface;
}

const CompaniesContext = createContext<CompaniesContextInterface>({} as CompaniesContextInterface);

export function CompaniesProvider({ children }: { children: ReactNode }) {
  const companiesService = new CompaniesService();
  const [listOfCompanies, setListOfCompanies] = useState<CompanyData[]>([]);
  const [tabActive, setTabActive] = useState(0);
  const [companySelected, setCompanySelected] = useState<CompanyData | null>(null);

  const schema = Yup.object({
    cod_company: Yup.string().required('Campo obrigatório').max(4, 'Máximo 4 caracteres'),
    cpf_cpnj: Yup.string()
      .required('Campo obrigatório')
      .max(18, 'Máximo 14 números')
      .min(13, 'Mínimo 11 números'),
    corporate_name: Yup.string().required('Campo obrigatório').max(150, 'Máximo 150 caracteres'),
    fantasy_name: Yup.string().required('Campo obrigatório').max(150, 'Máximo 150 caracteres'),
    address_zip_code: Yup.string().required('Campo obrigatório').max(9, 'Máximo 9 caracteres'),
    address_state: Yup.string().max(50, 'Máximo 50 caracteres'),
    address_city: Yup.string().max(70, 'Máximo 70 caracteres'),
    address_street: Yup.string().max(50, 'Máximo 50 caracteres'),
    address_district: Yup.string().max(50, 'Máximo 50 caracteres'),
    situation: Yup.string().max(70, 'Máximo 70 caracteres'),
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

  const handleNewCompany = () => {
    formInfo.reset();
    setTabActive(1);
  };

  const getCompanies = async (filter?: string) => {
    try {
      const res = await companiesService.getAll(filter);

      setListOfCompanies(res);
    } catch (error) {
      errorAlertMessage(error);
    }
  };

  const saveCompany = async (data: PostCompanyData) => {
    try {
      if (companySelected) {
        data.id = companySelected.id;
      }
      const res = await companiesService.postCompany(data);

      if (res.success) {
        toast.success('Empresa salva com sucesso', getToastOptions());
      }
    } catch (error) {
      console.log(error);
      errorAlertMessage(error);
    }
  };

  const setDataForm = (data: CompanyData) => {
    setCompanySelected(data);
    formInfo.setValue('cod_company', data.cod_company);
    formInfo.setValue('cpf_cpnj', maskCpfCnpj(data.cpf_cpnj));
    formInfo.setValue('corporate_name', data.corporate_name);
    formInfo.setValue('fantasy_name', data.fantasy_name);
    formInfo.setValue('address_zip_code', cepMask(data.address_zip_code));
    formInfo.setValue('address_state', data.cod_company);
    formInfo.setValue('address_city', data.address_city);
    formInfo.setValue('address_street', data.address_street);
    formInfo.setValue('address_district', data.address_street);
    formInfo.setValue('address_complement', data.address_street);
    formInfo.setValue('situation', data.situation);

    setTabActive(1);
  };

  const value = useMemo(
    () => ({
      formInfo,
      listOfCompanies: listOfCompanies,
      setListOfCompanies: setListOfCompanies,
      getCompanies: getCompanies,
      saveCompany: saveCompany,
      setDataForm: setDataForm,
      tabActive: tabActive,
      setTabActive: setTabActive,
      handleNewCompany: handleNewCompany,
    }),
    [listOfCompanies, formInfo.formState],
  );

  return <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>;
}

export function useCompanies() {
  const context = useContext(CompaniesContext);

  return context;
}
