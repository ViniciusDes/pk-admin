import { UseMutationResult } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface DefaultResponseApi<T> {
  success?: boolean;
  message?: string;
  error?: Object | string;
  data?: T | any;
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    links: [];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export type SetStateInterface<T> = Dispatch<SetStateAction<T>>;

export type FunctionMutationInterface<T> = UseMutationResult<unknown, T, unknown>;

export type FunctionMutationResult<T> = UseMutationResult<T>;

export interface OptionSelectInterface {
  label: string;
  value: string;
}

export type FormManagerInterface = UseFormReturn<FieldValues, any>;

export interface FunctionInterface<R, Args extends any[]> {
  (...args_: Args): R;
}

export interface ImageData {
  id: string;
  url: string;
}
