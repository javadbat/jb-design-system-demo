import { type JBFormWebComponent } from "jb-form";
import "./jb-form.css";
import { JBInput } from "jb-input/react";
import { JBButton } from "jb-button/react";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleList } from "../components/SampleList";
import { SampleWrapper } from "../components/SampleWrapper";
import { useRef, useState } from "react";
import { JBNumberInput } from "jb-number-input/react";
import { JsonView, collapseAllNested, darkStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { JBDateInput } from "jb-date-input/react";
import { JBOptionList, JBSelect } from "jb-select/react";
import { JBTextarea } from "jb-textarea/react";
import { ValidationValue } from "jb-input";
import { JBImageInput } from "jb-image-input/react";
import { JBForm } from "jb-form/react";
import { ValidationItem } from "jb-validation";

export function JBFormSamples() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>({ def: "" });
  const formRef = useRef<JBFormWebComponent>(null);
  const onSubmit = async () => {
    setIsLoading(true);
    if (formRef.current) {
      formRef.current.reportValidity();
      setData({
        formValue: formRef.current.getFormValues(),
        validationMessages: formRef.current.getValidationMessages(),
        validationResult: formRef.current.getValidationResult(),
        jbResult: await formRef.current.jbCheckValidity({ showError: true }),
      });
    }
    setTimeout(() => setIsLoading(false), 1000);
  };
  return (
    <div>
      <SampleHeader title="JB Form"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBForm ref={formRef} onSubmit={onSubmit}>
            <JBInput
              label="name"
              name="name"
              required
              validationList={nameValidation}
            />
            <JBNumberInput label="age" name="age" required />
            <JBDateInput name="applyDate" label={"apply date"} required />
            <JBSelect name="gender" label="gender" required>
              <JBOptionList optionList={["male", "female"]} />
            </JBSelect>
            <JBTextarea name="bio" label="bio" required />
            <JBImageInput
              required
              className="avatar"
              name="avatar"
              label="avatar"
            />
            <JBButton type="submit" isLoading={isLoading} onClick={onSubmit}>
              submit form
            </JBButton>
          </JBForm>
        </SampleWrapper>
        <span>result:</span>
        <JsonView
          data={data}
          shouldExpandNode={collapseAllNested}
          style={darkStyles}
        />
      </SampleList>
    </div>
  );
}

const nameValidation: ValidationItem<ValidationValue>[] = [
  {
    validator: /.{3}/g,
    message: "عنوان حداقل باید سه کارکتر طول داشته باشد",
  },
  //you can use function as a validator too
  {
    validator: ({ displayValue, value }) => {
      return value == "سلام";
    },
    message: "شما تنها میتوانید عبارت سلام را وارد کنید",
  },
  //you can also return string in validator if you want custom error message in some edge cases
  {
    validator: ({ displayValue, value }) => {
      if (value.includes("*")) {
        return "you cant write * in your text";
      }
      return true;
    },
    message: "default error when return false",
  },
];
