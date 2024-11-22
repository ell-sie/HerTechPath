/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserPathCreateFormInputValues = {
    progress?: string;
};
export declare type UserPathCreateFormValidationValues = {
    progress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPathCreateFormOverridesProps = {
    UserPathCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    progress?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UserPathCreateFormProps = React.PropsWithChildren<{
    overrides?: UserPathCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserPathCreateFormInputValues) => UserPathCreateFormInputValues;
    onSuccess?: (fields: UserPathCreateFormInputValues) => void;
    onError?: (fields: UserPathCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPathCreateFormInputValues) => UserPathCreateFormInputValues;
    onValidate?: UserPathCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserPathCreateForm(props: UserPathCreateFormProps): React.ReactElement;
