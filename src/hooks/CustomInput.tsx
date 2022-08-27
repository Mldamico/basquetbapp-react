import { FieldHookConfig, useField } from "formik";

interface ICustomInput {
  label: string
  name: string
  type?: string
  placeholder: string

}

export const CustomInput = ({ label, name, placeholder, type }: ICustomInput) => {
  const [field, meta] = useField(name);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        placeholder={placeholder} type={type} name={name}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="text-black">{meta.error}</div>}
    </>
  );
};
