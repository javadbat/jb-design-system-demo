import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { JBNationalInput } from "jb-national-input/react";

export function JBNationalInputSamples() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SampleHeader title="JB National Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBNationalInput
            label="enter national code:"
            message="enter some invalid value and see the result"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
