import React, { useRef } from "react";
import "./jb-date-input.css";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { JBDateInput, ValidationValue } from "jb-date-input/react";
import { ValidationItem } from "jb-validation";
import { SocialLinks } from "../components/social-links/SocialLinks";

export function JBDateInputSamples() {
  const validationList: ValidationItem<ValidationValue>[] = [
    //regex validator
    {
      validator: /^[1][1234].*$/g,
      message: "hour  must be between 11 and 14",
    },
    //callback function validator
    {
      validator: ({ text, inputObject, valueObject, valueText }) => {
        //text is the value user see
        //valueText is the value developer get by dom.value
        //valueObject is the object contain inputted value in jalali & gregorian in number
        console.log("what user see:", text);
        console.log("what you get in value:", valueText);
        if (valueObject.jalali.day && valueObject.jalali.day < 15) {
          return false;
        }
        return true;
      },
      message: "day must be above 15",
    },
  ];
  const overflowWrapperRef = useRef<HTMLDivElement>(null);
  const minDate = new Date(Number(new Date()) - 3 * 24 * 60 * 60 * 1000);
  const maxDate = new Date(Number(new Date()) + 3 * 24 * 60 * 60 * 1000);
  return (
    <div>
      <SampleHeader title="JBDateInput">
        <SocialLinks github="https://github.com/javadbat/jb-date-input" />
      </SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBDateInput
            label="date:"
            message="dont forget to use arrow keys to change date with keyboard"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            label="gregorian date:"
            message="all feature alse available for a gregorian date"
            inputType="GREGORIAN"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput label="with persian number" showPersianNumber={true} />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            label="with placeholder:"
            placeholder="your placeholder"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput label="with value" value="2024-09-30T07:19:03.606Z" />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput label="with Error" error="your error message" />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            validationList={validationList}
            label="with validation"
            message="type day less than 15 to see error and see console for more detail"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            label="with default calendar date"
            message="open calendar it must be mordad 1360"
            calendarDefaultDateView={{ month: 5, year: 1360 }}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            label="with custom month names"
            message="open picker and click on month"
            jalaliMonthList={[
              "حَمَل",
              "ثَور",
              "جَوزا",
              "سَرَطان",
              "اَسَد",
              "سُنبُله",
              "میزان",
              "عَقرَب",
              "قَوس",
              "جَدْی",
              "دَلو",
              "حوت",
            ]}
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            label="required:"
            message="type in-complete date and it force you to complete it. it also raise error in check validity"
            required
          />
        </SampleWrapper>
        <SampleWrapper>
          <div
            ref={overflowWrapperRef}
            style={{
              height: "22rem",
              border: "solid 1px #666",
              overflow: "hidden",
            }}
          >
            <JBDateInput
              label="with overflow handler"
              message=" open calendar then put mouse over it(hover)"
              overflowHandler={"SLIDE"}
              overflowRef={overflowWrapperRef}
            />
          </div>
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            label="custom theme"
            className="darkmode-test-wrapper"
            message="example for a dark mode"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput
            label="with min,max"
            message="you cant enter date greater than max or less than min"
            min={minDate}
            max={maxDate}
          />
        </SampleWrapper>
        <SampleWrapper className="rtl">
          <JBDateInput
            label="از راست به چپ"
            message="با ست کردن direction در css"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBDateInput label="with custom icon">
            <div slot="calendar-trigger-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 610.398 610.398"
              >
                <g>
                  <g>
                    <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z" />
                    <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z" />
                    <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z" />
                    <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z" />
                    <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z" />
                    <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z" />
                    <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z" />
                    <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z" />
                    <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z" />
                    <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z" />
                    <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z" />
                  </g>
                </g>
              </svg>
            </div>
          </JBDateInput>
        </SampleWrapper>
        <SampleWrapper className="without-icon">
          <JBDateInput
            label="without calendar icon"
            message="by set css variable"
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
