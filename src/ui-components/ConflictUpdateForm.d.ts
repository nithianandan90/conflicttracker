/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Conflict } from "../models";
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
export declare type ConflictUpdateFormInputValues = {
    Name?: string;
    Description?: string;
    Travel?: string;
    Images?: string[];
    Status?: string;
    Nature?: string;
};
export declare type ConflictUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Travel?: ValidationFunction<string>;
    Images?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
    Nature?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConflictUpdateFormOverridesProps = {
    ConflictUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Travel?: PrimitiveOverrideProps<TextFieldProps>;
    Images?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
    Nature?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ConflictUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConflictUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conflict?: Conflict;
    onSubmit?: (fields: ConflictUpdateFormInputValues) => ConflictUpdateFormInputValues;
    onSuccess?: (fields: ConflictUpdateFormInputValues) => void;
    onError?: (fields: ConflictUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConflictUpdateFormInputValues) => ConflictUpdateFormInputValues;
    onValidate?: ConflictUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConflictUpdateForm(props: ConflictUpdateFormProps): React.ReactElement;
