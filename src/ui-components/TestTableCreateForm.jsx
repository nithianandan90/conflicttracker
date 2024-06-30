/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { TestTable } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function TestTableCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Flag: "",
    Name: "",
    Code: "",
    Population: "",
    conflictID: "",
  };
  const [Flag, setFlag] = React.useState(initialValues.Flag);
  const [Name, setName] = React.useState(initialValues.Name);
  const [Code, setCode] = React.useState(initialValues.Code);
  const [Population, setPopulation] = React.useState(initialValues.Population);
  const [conflictID, setConflictID] = React.useState(initialValues.conflictID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFlag(initialValues.Flag);
    setName(initialValues.Name);
    setCode(initialValues.Code);
    setPopulation(initialValues.Population);
    setConflictID(initialValues.conflictID);
    setErrors({});
  };
  const validations = {
    Flag: [],
    Name: [],
    Code: [],
    Population: [],
    conflictID: [],
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
          Flag,
          Name,
          Code,
          Population,
          conflictID,
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
          await DataStore.save(new TestTable(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TestTableCreateForm")}
      {...rest}
    >
      <TextField
        label="Flag"
        isRequired={false}
        isReadOnly={false}
        value={Flag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Flag: value,
              Name,
              Code,
              Population,
              conflictID,
            };
            const result = onChange(modelFields);
            value = result?.Flag ?? value;
          }
          if (errors.Flag?.hasError) {
            runValidationTasks("Flag", value);
          }
          setFlag(value);
        }}
        onBlur={() => runValidationTasks("Flag", Flag)}
        errorMessage={errors.Flag?.errorMessage}
        hasError={errors.Flag?.hasError}
        {...getOverrideProps(overrides, "Flag")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Flag,
              Name: value,
              Code,
              Population,
              conflictID,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        value={Code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Flag,
              Name,
              Code: value,
              Population,
              conflictID,
            };
            const result = onChange(modelFields);
            value = result?.Code ?? value;
          }
          if (errors.Code?.hasError) {
            runValidationTasks("Code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("Code", Code)}
        errorMessage={errors.Code?.errorMessage}
        hasError={errors.Code?.hasError}
        {...getOverrideProps(overrides, "Code")}
      ></TextField>
      <TextField
        label="Population"
        isRequired={false}
        isReadOnly={false}
        value={Population}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Flag,
              Name,
              Code,
              Population: value,
              conflictID,
            };
            const result = onChange(modelFields);
            value = result?.Population ?? value;
          }
          if (errors.Population?.hasError) {
            runValidationTasks("Population", value);
          }
          setPopulation(value);
        }}
        onBlur={() => runValidationTasks("Population", Population)}
        errorMessage={errors.Population?.errorMessage}
        hasError={errors.Population?.hasError}
        {...getOverrideProps(overrides, "Population")}
      ></TextField>
      <TextField
        label="Conflict id"
        isRequired={false}
        isReadOnly={false}
        value={conflictID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Flag,
              Name,
              Code,
              Population,
              conflictID: value,
            };
            const result = onChange(modelFields);
            value = result?.conflictID ?? value;
          }
          if (errors.conflictID?.hasError) {
            runValidationTasks("conflictID", value);
          }
          setConflictID(value);
        }}
        onBlur={() => runValidationTasks("conflictID", conflictID)}
        errorMessage={errors.conflictID?.errorMessage}
        hasError={errors.conflictID?.hasError}
        {...getOverrideProps(overrides, "conflictID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
