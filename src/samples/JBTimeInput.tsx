import React from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { JBTimeInput } from "jb-time-input/react";
import { ValidationValue } from "jb-time-input";
import { ValidationItem } from "jb-validation";

export function JBTimeInputSamples() {
  const validationList: ValidationItem<ValidationValue>[] = [
    //regex validator
    {
      validator: /^[1][1234].*$/g,
      message: "hour  must be between 11 and 14",
    },
    //callback function validator
    {
      validator: ({ displayValue, value, valueObject }) => {
        //display value is the value user see
        //value is the value developer get by dom.value
        //valueObject is the {hour:number,minute:number,second:number} object contain inputted value in number
        console.log(displayValue);
        console.log(value);
        if (valueObject.minute !== null && valueObject.minute < 30) {
          return false;
        }
        return true;
      },
      message: "minute must be 30 to 60",
    },
  ];
  return (
    <div>
      <SampleHeader title="JBTimeInput"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBTimeInput
            label="time:"
            message="dont forget to use arrow keys to change time with keyboard"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBTimeInput
            label="time:"
            message="dont forget to use arrow keys to change time with keyboard"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBTimeInput label="with value" value="14:34:13" />
        </SampleWrapper>
        <SampleWrapper>
          <JBTimeInput
            validationList={validationList}
            label="with validation"
            message="type something between before 11 and before 30min"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBTimeInput label="without second" secondEnabled={false} />
        </SampleWrapper>
        <SampleWrapper>
          <JBTimeInput
            label="with frontal zero"
            frontalZero={true}
            message="picker show 00 or 08 instead of 0 , 8"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBTimeInput optionalUnits={["second"]}></JBTimeInput>
        </SampleWrapper>
        <SampleWrapper>
          <JBTimeInput
            label="persian number char"
            showPersianNumber={true}
          ></JBTimeInput>
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
