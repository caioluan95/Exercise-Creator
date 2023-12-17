import React from "react";
import { useController } from "react-hook-form";
import InputBase from "@/core/components/form/inputs/input-base";

const InputControlled = ({
  className,
  control,
  id,
  name,
  placeholder,
  type,
}) => {
  const { field, fieldState } = useController({ control, name });

  return (
    <div className="input-group has-validation">
      <div className="w-full border rounded-lg">
        <InputBase
          className={className}
          type={type}
          id={id}
          placeholder={placeholder}
          hasError={fieldState.invalid}
          {...field}
        />
      </div>
      <div className="invalid-feedback">
        <span className="text-red-600">{fieldState.error?.message}</span>
      </div>
    </div>
  );
};

export default InputControlled;
