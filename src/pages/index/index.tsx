import { MenuItem } from "../../components/menu-item/MenuItem";
import "./index.css";
import { useEffect } from "react";
import { SocialLinks } from "../../components/social-links/SocialLinks";
export function IndexPage() {
  return (
    <div className="page-wrapper">
      <h1>JB Design System</h1>
      <SocialLinks github="https://github.com/javadbat/design-system" />
      <h2>component list:</h2>
      <h3>Form Elements:</h3>
      <div className="component-list">
        <MenuItem link="/samples/jb-input" ComponentName="Input" />
        <MenuItem link="/samples/jb-button" ComponentName="Button" />
        <MenuItem link="/samples/jb-select" ComponentName="Select" />
        <MenuItem link="/samples/jb-switch" ComponentName="Switch" />
        <MenuItem link="/samples/jb-checkbox" ComponentName="Checkbox" />
        <MenuItem
          link="/samples/jb-payment-input"
          ComponentName="Payment Input"
        />
        <MenuItem link="/samples/jb-time-input" ComponentName="Time Input" />
        <MenuItem link="/samples/jb-pin-input" ComponentName="Pin Input" />
        <MenuItem link="/samples/jb-date-input" ComponentName="Date Input" />
        <MenuItem
          link="/samples/jb-password-input"
          ComponentName="Password Input"
        />
        <MenuItem
          link="/samples/jb-number-input"
          ComponentName="Number Input"
        />
        <MenuItem
          link="/samples/jb-national-input"
          ComponentName="National Input"
        />
        <MenuItem
          link="/samples/jb-mobile-input"
          ComponentName="Mobile Input"
        />
        <MenuItem link="/samples/jb-textarea" ComponentName="Textarea" />
        <MenuItem link="/samples/jb-image-input" ComponentName="Image Input" />
        <MenuItem link="/samples/jb-file-input" ComponentName="File Input" />
        <MenuItem link="/samples/jb-form" ComponentName="Form" />
      </div>

      <h3>UI Elements:</h3>
      <div className="component-list">
        <MenuItem link="/samples/jb-loading" ComponentName="Loading" />
        <MenuItem link="/samples/jb-calendar" ComponentName="Calendar" />
        <MenuItem
          link="/samples/jb-notification"
          ComponentName="Notification"
        />
        <MenuItem link="/samples/jb-modal" ComponentName="Modal" />
        <MenuItem
          link="/samples/jb-infinite-scroll"
          ComponentName="Infinite Scroll"
        />
      </div>
    </div>
  );
}
