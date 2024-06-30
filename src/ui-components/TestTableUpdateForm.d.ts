/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TestTable } from "../models";
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
export declare type TestTableUpdateFormInputValues = {
    Flag?: string;
    Name?: string;
    Code?: string;
    Population?: string;
    conflictID?: string;
};
export declare type TestTableUpdateFormValidationValues = {
    Flag?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Code?: ValidationFunction<string>;
    Population?: ValidationFunction<string>;
    conflictID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestTableUpdateFormOverridesProps = {
    TestTableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Flag?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Code?: PrimitiveOverrideProps<TextFieldProps>;
    Population?: PrimitiveOverrideProps<TextFieldProps>;
    conflictID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testTable?: TestTable;
    onSubmit?: (fields: TestTableUpdateFormInputValues) => TestTableUpdateFormInputValues;
    onSuccess?: (fields: TestTableUpdateFormInputValues) => void;
    onError?: (fields: TestTableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestTableUpdateFormInputValues) => TestTableUpdateFormInputValues;
    onValidate?: TestTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestTableUpdateForm(props: TestTableUpdateFormProps): React.ReactElement;
