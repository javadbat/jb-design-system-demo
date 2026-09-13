import React from "react";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleList } from "../components/SampleList";
import { SampleWrapper } from "../components/SampleWrapper";
import { JBPaymentInput } from "jb-payment-input/react";
import { BankIndicator } from "jb-payment-input/bank-indicator/react";

export function JBPaymentInputSamples() {
  return (
    <div>
      <SampleHeader title="JB Payment Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBPaymentInput label="card:" inputType="CARD" />
        </SampleWrapper>
        <SampleWrapper>
          <JBPaymentInput label="card with bank logo:" inputType="CARD">
            <BankIndicator slot="end-section" />
          </JBPaymentInput>
        </SampleWrapper>
        <SampleWrapper>
          <JBPaymentInput
            label="with dash separator:"
            inputType="CARD"
            separator=" - "
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBPaymentInput label="shaba:" inputType="SHABA" />
        </SampleWrapper>
        <SampleWrapper>
          <JBPaymentInput
            label="shaba with dash separator:"
            inputType="SHABA"
            separator=" - "
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBPaymentInput
            label="required:"
            inputType="CARD"
            message="dont leave it empty"
            required
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBPaymentInput
            label="with error"
            inputType="CARD"
            error="your custom error message"
          />
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
