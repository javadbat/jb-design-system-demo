import { JBCalendar } from "jb-calendar/react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
export function JBCalendarSamples() {
  return (
    <div>
      <SampleHeader title="JB Calendar"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBCalendar />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
