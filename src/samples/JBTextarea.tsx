import "./jb-textarea.css";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { JBTextarea } from "jb-textarea/react";
export function JBTextareaSamples() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SampleHeader title="JB Textarea"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBTextarea
            label="description:"
            message="enter some text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBTextarea
            label="auto height"
            message="enter some long text and see textarea height expand accordingly"
            autoHeight
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBTextarea
            label="auto height with max limit"
            message="enter some long text and see textarea height expand accordingly"
            className={"max-height"}
            autoHeight
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBTextarea
            label="with validation:"
            message="type something without jb-validation and click outside then focus again and type jb-validation"
            validationList={[
              {
                validator: /.*jb-validation.*/g,
                message: "you must enter jb-validation name in the box",
              },
            ]}
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
