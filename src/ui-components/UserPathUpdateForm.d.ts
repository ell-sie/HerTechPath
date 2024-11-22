/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { UserPath } from "../API.ts";
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
export declare type UserPathUpdateFormInputValues = {
    progress?: string;
};
export declare type UserPathUpdateFormValidationValues = {
    progress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPathUpdateFormOverridesProps = {
    UserPathUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    progress?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UserPathUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserPathUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userPath?: UserPath;
    onSubmit?: (fields: UserPathUpdateFormInputValues) => UserPathUpdateFormInputValues;
    onSuccess?: (fields: UserPathUpdateFormInputValues) => void;
    onError?: (fields: UserPathUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPathUpdateFormInputValues) => UserPathUpdateFormInputValues;
    onValidate?: UserPathUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserPathUpdateForm(props: UserPathUpdateFormProps): React.ReactElement;
