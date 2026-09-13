import { JBCheckbox } from "jb-checkbox/react";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import "./jb-checkbox.css";
export function JBCheckboxSamples() {
  const [value, setValue] = useState(false);
  return (
    <div>
      <SampleHeader title="JB Checkbox"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBCheckbox label="enable" />
        </SampleWrapper>
        <SampleWrapper>
          <JBCheckbox>
            <a
              slot="label"
              href="https://github.com/javadbat/jb-checkbox"
              target="_blank"
            >
              link as a label
            </a>
          </JBCheckbox>
        </SampleWrapper>
        <SampleWrapper
          style={
            {
              "--jb-checkbox-check-bg-color-checked": "blue",
            } as React.CSSProperties
          }
        >
          <JBCheckbox label="with blue fill when checked" />
        </SampleWrapper>
        <SampleWrapper>
          <JBCheckbox className="smaller-size" label="smaller size" />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
