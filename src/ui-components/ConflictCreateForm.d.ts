/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ConflictCreateFormInputValues = {
    Name?: string;
    Description?: string;
    Travel?: string;
    Images?: string[];
    Status?: string;
    Nature?: string;
};
export declare type ConflictCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Travel?: ValidationFunction<string>;
    Images?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
    Nature?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConflictCreateFormOverridesProps = {
    ConflictCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Travel?: PrimitiveOverrideProps<TextFieldProps>;
    Images?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
    Nature?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ConflictCreateFormProps = React.PropsWithChildren<{
    overrides?: ConflictCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConflictCreateFormInputValues) => ConflictCreateFormInputValues;
    onSuccess?: (fields: ConflictCreateFormInputValues) => void;
    onError?: (fields: ConflictCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConflictCreateFormInputValues) => ConflictCreateFormInputValues;
    onValidate?: ConflictCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConflictCreateForm(props: ConflictCreateFormProps): React.ReactElement;
