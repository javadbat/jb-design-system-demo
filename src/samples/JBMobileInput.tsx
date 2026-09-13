import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { JBMobileInput } from "jb-mobile-input/react";
export function JBMobileInputSamples() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SampleHeader title="JB Mobile Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBMobileInput
            label="mobile:"
            message="enter some invalid value and see the result"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
