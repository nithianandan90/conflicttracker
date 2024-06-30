/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { People } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PeopleUpdateFormInputValues = {
    Name?: string;
    Description?: string;
    Role?: string;
};
export declare type PeopleUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PeopleUpdateFormOverridesProps = {
    PeopleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Role?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PeopleUpdateFormProps = React.PropsWithChildren<{
    overrides?: PeopleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    people?: People;
    onSubmit?: (fields: PeopleUpdateFormInputValues) => PeopleUpdateFormInputValues;
    onSuccess?: (fields: PeopleUpdateFormInputValues) => void;
    onError?: (fields: PeopleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PeopleUpdateFormInputValues) => PeopleUpdateFormInputValues;
    onValidate?: PeopleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PeopleUpdateForm(props: PeopleUpdateFormProps): React.ReactElement;
