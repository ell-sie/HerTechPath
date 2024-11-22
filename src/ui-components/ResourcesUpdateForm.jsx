/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getResources } from "../graphql/queries";
import { updateResources } from "../graphql/mutations";
const client = generateClient();
export default function ResourcesUpdateForm(props) {
  const {
    id: idProp,
    resources: resourcesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    link: "",
    level: "",
    pathID: "",
    Path: "",
    logo: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [link, setLink] = React.useState(initialValues.link);
  const [level, setLevel] = React.useState(initialValues.level);
  const [pathID, setPathID] = React.useState(initialValues.pathID);
  const [Path, setPath] = React.useState(initialValues.Path);
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = resourcesRecord
      ? { ...initialValues, ...resourcesRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setLink(cleanValues.link);
    setLevel(cleanValues.level);
    setPathID(cleanValues.pathID);
    setPath(cleanValues.Path);
    setLogo(cleanValues.logo);
    setErrors({});
  };
  const [resourcesRecord, setResourcesRecord] =
    React.useState(resourcesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getResources.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getResources
        : resourcesModelProp;
      setResourcesRecord(record);
    };
    queryData();
  }, [idProp, resourcesModelProp]);
  React.useEffect(resetStateValues, [resourcesRecord]);
  const validations = {
    title: [],
    description: [],
    link: [],
    level: [],
    pathID: [{ type: "Required" }],
    Path: [{ type: "Required" }],
    logo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title: title ?? null,
          description: description ?? null,
          link: link ?? null,
          level: level ?? null,
          pathID,
          Path,
          logo: logo ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateResources.replaceAll("__typename", ""),
            variables: {
              input: {
                id: resourcesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ResourcesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              link,
              level,
              pathID,
              Path,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              link,
              level,
              pathID,
              Path,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Link"
        isRequired={false}
        isReadOnly={false}
        value={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              link: value,
              level,
              pathID,
              Path,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
      ></TextField>
      <TextField
        label="Level"
        isRequired={false}
        isReadOnly={false}
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              link,
              level: value,
              pathID,
              Path,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      ></TextField>
      <TextField
        label="Path id"
        isRequired={true}
        isReadOnly={false}
        value={pathID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              link,
              level,
              pathID: value,
              Path,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.pathID ?? value;
          }
          if (errors.pathID?.hasError) {
            runValidationTasks("pathID", value);
          }
          setPathID(value);
        }}
        onBlur={() => runValidationTasks("pathID", pathID)}
        errorMessage={errors.pathID?.errorMessage}
        hasError={errors.pathID?.hasError}
        {...getOverrideProps(overrides, "pathID")}
      ></TextField>
      <TextField
        label="Path"
        isRequired={true}
        isReadOnly={false}
        value={Path}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              link,
              level,
              pathID,
              Path: value,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.Path ?? value;
          }
          if (errors.Path?.hasError) {
            runValidationTasks("Path", value);
          }
          setPath(value);
        }}
        onBlur={() => runValidationTasks("Path", Path)}
        errorMessage={errors.Path?.errorMessage}
        hasError={errors.Path?.hasError}
        {...getOverrideProps(overrides, "Path")}
      ></TextField>
      <TextField
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              link,
              level,
              pathID,
              Path,
              logo: value,
            };
            const result = onChange(modelFields);
            value = result?.logo ?? value;
          }
          if (errors.logo?.hasError) {
            runValidationTasks("logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("logo", logo)}
        errorMessage={errors.logo?.errorMessage}
        hasError={errors.logo?.hasError}
        {...getOverrideProps(overrides, "logo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || resourcesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || resourcesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
