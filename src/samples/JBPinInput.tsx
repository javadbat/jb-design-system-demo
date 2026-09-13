import { JBPinInput } from "jb-pin-input/react";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
export function JBPinInputSamples() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SampleHeader title="JB Pin Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBPinInput
            message={"value: " + value}
            value={value}
            onInput={(e) => setValue(e.target.value)}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBPinInput message="required" required />
        </SampleWrapper>
        <SampleWrapper>
          <JBPinInput
            message="on complete event"
            required
            onComplete={() => {
              alert("complete");
            }}
          />
        </SampleWrapper>
        <SampleWrapper
          style={
            {
              "--jb-pin-input-wrapper-border-width": "4px",
              "--jb-pin-input-bottom-line-display": "none",
            } as React.CSSProperties
          }
        >
          <JBPinInput message="different style" />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
