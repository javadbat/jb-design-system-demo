import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { JBNumberInput } from "jb-number-input/react";
import { JBNumberInputEventType } from "jb-number-input";

export function JBNumberInputSamples() {
  const [value, setValue] = useState("");
  return (
    <div>
      <SampleHeader title="JB Number Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBNumberInput
            value={value}
            onInput={(e: JBNumberInputEventType<InputEvent>) =>
              setValue(e.target.value)
            }
            label="number:"
            message={"your value is: " + value}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBNumberInput
            label="with step:"
            step={100}
            showControlButton
            message="by arrow keys or +/- number increase or decrease by 100 unit"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBNumberInput
            label="with limited decimal point:"
            decimalPrecision={2}
            message="only 2 floating point allowed"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBNumberInput
            label="with thousand separator:"
            showThousandSeparator
            message="type number more than 1000"
          />
        </SampleWrapper>
        <SampleWrapper>
          {" "}
          <JBNumberInput
            label="with _ thousand separator:"
            showThousandSeparator
            thousandSeparator="_"
          />
        </SampleWrapper>
        <SampleWrapper>
          {" "}
          <JBNumberInput
            label="not accept negative number:"
            acceptNegative={false}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBNumberInput
            label="with min & max"
            maxValue={1000}
            minValue={100}
            message="number must be between 100 and 1000"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBNumberInput
            label="with persian number char"
            showPersianNumber
            value={value}
            onInput={(e: JBNumberInputEventType<InputEvent>) =>
              setValue(e.target.value)
            }
            message={"your value is: " + value}
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
