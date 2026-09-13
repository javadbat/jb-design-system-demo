import { JBSwitch } from "jb-switch/react";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
export function JBSwitchSamples() {
  const [value, setValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setValue((val) => !val);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div>
      <SampleHeader title="JB Switch"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBSwitch />
        </SampleWrapper>
        <SampleWrapper>
          <JBSwitch trueTitle="enable" falseTitle="disable" />
        </SampleWrapper>
        <SampleWrapper>
          <JBSwitch
            value={value}
            isLoading={isLoading}
            onChange={toggle}
            trueTitle="with loading"
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
