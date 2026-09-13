import { JBLoading } from "jb-loading/react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import "./jb-loading.css";
export function JBLoadingSamples() {
  return (
    <div>
      <SampleHeader title="JB Loading"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBLoading className="small-24" />
        </SampleWrapper>
        <SampleWrapper>
          <JBLoading className="small-64" />
        </SampleWrapper>
        <SampleWrapper>
          <JBLoading className="mid-128-red" />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
