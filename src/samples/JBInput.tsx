import { JBInput } from "jb-input/react";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
export function JBInputSamples() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SampleHeader title="JB Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBInput
            label="label:"
            message="message under input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBInput
            label="with error:"
            message="message under input"
            error="error message"
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
