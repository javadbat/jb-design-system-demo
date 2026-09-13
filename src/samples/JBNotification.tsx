import { JBButton } from "jb-button/react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { NotificationManager } from "jb-notification/manager";
import { SocialLinks } from "../components/social-links/SocialLinks";
const manager = new NotificationManager();
export function JBNotificationSamples() {
  return (
    <div>
      <SampleHeader title="JB Notification">
        <SocialLinks github="https://github.com/javadbat/jb-notification" />
      </SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBButton onClick={() => manager.new({ title: "sample message" })}>
            show notification
          </JBButton>
        </SampleWrapper>
        <SampleWrapper>
          <JBButton
            onClick={() =>
              manager.new({
                title: "sample message",
                desc: "sample description",
              })
            }
          >
            with description
          </JBButton>
        </SampleWrapper>
        <SampleWrapper>
          <JBButton
            color="danger"
            onClick={() =>
              manager.new({
                title: "error message",
                type: "ERROR",
              })
            }
          >
            show error message
          </JBButton>
        </SampleWrapper>
        <SampleWrapper>
          <JBButton
            color="positive"
            onClick={() =>
              manager.new({
                title: "success message",
                type: "SUCCESS",
              })
            }
          >
            show success message
          </JBButton>
        </SampleWrapper>
        <SampleWrapper>
          <JBButton
            color="warning"
            onClick={() =>
              manager.new({
                title: "warning message",
                type: "WARNING",
              })
            }
          >
            show warning message
          </JBButton>
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
