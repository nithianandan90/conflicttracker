/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { LatestNews } from "../models";
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
export declare type LatestNewsUpdateFormInputValues = {
    Headline?: string;
    Content?: string;
    Images?: string[];
};
export declare type LatestNewsUpdateFormValidationValues = {
    Headline?: ValidationFunction<string>;
    Content?: ValidationFunction<string>;
    Images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LatestNewsUpdateFormOverridesProps = {
    LatestNewsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Headline?: PrimitiveOverrideProps<TextFieldProps>;
    Content?: PrimitiveOverrideProps<TextFieldProps>;
    Images?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LatestNewsUpdateFormProps = React.PropsWithChildren<{
    overrides?: LatestNewsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    latestNews?: LatestNews;
    onSubmit?: (fields: LatestNewsUpdateFormInputValues) => LatestNewsUpdateFormInputValues;
    onSuccess?: (fields: LatestNewsUpdateFormInputValues) => void;
    onError?: (fields: LatestNewsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LatestNewsUpdateFormInputValues) => LatestNewsUpdateFormInputValues;
    onValidate?: LatestNewsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LatestNewsUpdateForm(props: LatestNewsUpdateFormProps): React.ReactElement;
