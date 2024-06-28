import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { Input } from "./styled";

const InputField = forwardRef(
  (
    {
      type = "text",
      onBlur = () => {},
      initialValue = "",
      updateValue = () => {},
      required,
      autoFocus = false,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const handleKeyDown = useCallback(
      (event) => {
        if (event.key === "Enter") {
          if (value !== initialValue) {
            updateValue(value);
          } else {
            onBlur();
          }
          setValue("");
        } else if (event.key === "Escape") {
          setValue(initialValue);
          onBlur();
        }
      },
      [initialValue, updateValue, value, onBlur]
    );

    const handleBlur = useCallback(() => {
      if (value !== initialValue) {
        updateValue(value);
      } else {
        onBlur();
      }
      setValue("");
    }, [initialValue, updateValue, value, onBlur]);

    return (
      <Input
        type={type}
        ref={ref}
        required={required}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        autoFocus={autoFocus}
        onFocus={({ target }) => {
          target.select();
        }}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        {...props}
      />
    );
  }
);

export default InputField;
