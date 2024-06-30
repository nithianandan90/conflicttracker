/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LatestNewsCreateFormInputValues = {
    Headline?: string;
    Content?: string;
    Images?: string[];
};
export declare type LatestNewsCreateFormValidationValues = {
    Headline?: ValidationFunction<string>;
    Content?: ValidationFunction<string>;
    Images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LatestNewsCreateFormOverridesProps = {
    LatestNewsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Headline?: PrimitiveOverrideProps<TextFieldProps>;
    Content?: PrimitiveOverrideProps<TextFieldProps>;
    Images?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LatestNewsCreateFormProps = React.PropsWithChildren<{
    overrides?: LatestNewsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LatestNewsCreateFormInputValues) => LatestNewsCreateFormInputValues;
    onSuccess?: (fields: LatestNewsCreateFormInputValues) => void;
    onError?: (fields: LatestNewsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LatestNewsCreateFormInputValues) => LatestNewsCreateFormInputValues;
    onValidate?: LatestNewsCreateFormValidationValues;
} & React.CSSProperties>;
export default function LatestNewsCreateForm(props: LatestNewsCreateFormProps): React.ReactElement;
