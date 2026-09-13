import { JBFileInput } from "jb-file-input/react";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
export function JBFileInputSamples() {
  return (
    <div>
      <SampleHeader title="JB File Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBFileInput />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
