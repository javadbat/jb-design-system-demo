import { JBPasswordInput } from "jb-password-input/react";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
export function JBPasswordInputSamples() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SampleHeader title="JB Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBPasswordInput
            label="password:"
            message="message under input"
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBPasswordInput
            label="with basic validation level:"
            message="type 1234 then click outside of input"
            level="BASIC"
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
