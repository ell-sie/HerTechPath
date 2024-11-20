export type CustomQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
}
