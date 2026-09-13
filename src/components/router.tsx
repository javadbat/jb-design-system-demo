import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexPage } from "../pages/index";
import { JBButtonSamples } from "../samples/JBButton";
import { JBCalendarSamples } from "../samples/JBCalendar";
import { JBCheckboxSamples } from "../samples/JBCheckbox";
import { JBDateInputSamples } from "../samples/JBDateInput";
import { JBFileInputSamples } from "../samples/JBFileInput";
import { JBFormSamples } from "../samples/JBForm";
import { JBImageInputSamples } from "../samples/JBImageInput";
import { JBInfiniteScrollSamples } from "../samples/JBInfiniteScroll";
import { JBInputSamples } from "../samples/JBInput";
import { JBLoadingSamples } from "../samples/JBLoading";
import { JBMobileInputSamples } from "../samples/JBMobileInput";
import { JBModalSamples } from "../samples/JBModal";
import { JBNationalInputSamples } from "../samples/JBNationalInput";
import { JBNotificationSamples } from "../samples/JBNotification";
import { JBNumberInputSamples } from "../samples/JBNumberInput";
import { JBPasswordInputSamples } from "../samples/JBPasswordInput";
import { JBPaymentInputSamples } from "../samples/JBPaymentInput";
import { JBPinInputSamples } from "../samples/JBPinInput";
import { JBSelectSamples } from "../samples/JBSelect";
import { JBSwitchSamples } from "../samples/JBSwitch";
import { JBTextareaSamples } from "../samples/JBTextarea";
import { JBTimeInputSamples } from "../samples/JBTimeInput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/samples/jb-time-input",
    element: <JBTimeInputSamples />,
  },
  {
    path: "/samples/jb-date-input",
    element: <JBDateInputSamples />,
  },
  {
    path: "/samples/jb-payment-input",
    element: <JBPaymentInputSamples />,
  },
  {
    path: "/samples/jb-input",
    element: <JBInputSamples />,
  },
  {
    path: "/samples/jb-button",
    element: <JBButtonSamples />,
  },
  {
    path: "/samples/jb-select",
    element: <JBSelectSamples />,
  },
  {
    path: "/samples/jb-switch",
    element: <JBSwitchSamples />,
  },
  {
    path: "/samples/jb-checkbox",
    element: <JBCheckboxSamples />,
  },
  {
    path: "/samples/jb-file-input",
    element: <JBFileInputSamples />,
  },
  {
    path: "/samples/jb-password-input",
    element: <JBPasswordInputSamples />,
  },
  {
    path: "/samples/jb-number-input",
    element: <JBNumberInputSamples />,
  },
  {
    path: "/samples/jb-pin-input",
    element: <JBPinInputSamples />,
  },
  {
    path: "/samples/jb-calendar",
    element: <JBCalendarSamples />,
  },
  {
    path: "/samples/jb-national-input",
    element: <JBNationalInputSamples />,
  },
  {
    path: "/samples/jb-mobile-input",
    element: <JBMobileInputSamples />,
  },
  {
    path: "/samples/jb-textarea",
    element: <JBTextareaSamples />,
  },
  {
    path: "/samples/jb-image-input",
    element: <JBImageInputSamples />,
  },
  {
    path: "/samples/jb-form",
    element: <JBFormSamples />,
  },
  {
    path: "/samples/jb-loading",
    element: <JBLoadingSamples />,
  },
  {
    path: "/samples/jb-modal",
    element: <JBModalSamples />,
  },
  {
    path: "/samples/jb-infinite-scroll",
    element: <JBInfiniteScrollSamples />,
  },
  {
    path: "/samples/jb-notification",
    element: <JBNotificationSamples />,
  },
]);
export function AppRouter() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
