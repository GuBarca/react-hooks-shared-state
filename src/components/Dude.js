import React from "react";
import Color from "color";

export default function Dude({ primaryColor, secondaryColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="134"
      height="152"
      viewBox="0 0 17 26"
      fill="none"
      style={{ alignSelf: 'center' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0H11V1H6V0ZM4 2V1H6V2H4ZM3 3V2H4V3H3ZM2 4V3H3V4H2ZM1 6V4H2V6H1ZM1 11H0V6H1V11ZM2 13H1V11H2V13ZM3 16V13H2V16H1V18H0V21H1V22H2V26H3V22H2V21H1V18H2V16H3ZM4 17H3V16H4V17ZM6 18V17H4V18H6ZM7 19V18H6V19H7ZM9 20V19H7V20H9ZM11 21H9V20H11V21ZM12 21H11V22H12V21ZM13 21H12V20H13V21ZM15 21H13V22V24H12V26H13V24H14V22H15V21ZM15 18V21H16V18H15ZM14 18H15V13H16V11H17V6H16V5V4H15V3H14V2H13V1H11V2H13V3H14V4H15V5H14V6H13V9H14V10H16V11H15V13H14V18ZM14 18V19H13V18H14ZM16 8H15V6H16V8ZM8 23H9V26H8V25H7V23H8ZM7 25V26H6V25H7ZM8 6V5H5V6H4V9H5V10H8V9H9V6H8ZM8 6V8H6V6H8ZM10 13V12H12V13H10ZM12 3H10V5H12V3Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1H6V2H5H4V3H3V4H2V6H1V11H2V13H3H5H6V12H8V11H9V9H10V6V5V2H9V1ZM9 9H8V10H5V9H4V6H5V5H8V6H9V9Z"
        fill={Color(primaryColor).lightness(70)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2V1H9V2H10V3H11V2ZM12 5V6H13V9V11H12V12H10V13H12V14H11V15H5V14H3V13H6V12H8V11H9V9H10V6V5H12ZM2 17H3V18H4H5V20H4V21H1V18H2V17ZM4 21H5V20H6H7V21H8H9V22H8V23H7V25H6V26H3V22H4V21Z"
        fill={primaryColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2H13V3H14V4H15V5H14V6H12V5V4V3H11V2ZM13 9H14V10H16V11H15V13H14V14V15H13V16H8V15H11V14H12V13V11H13V10V9ZM4 17H3V16H2V17H3V18H4V17ZM5 18H6V19H7V20H6H5V18ZM4 21V20H5V21H4ZM4 21V22H2V21H4ZM9 21H7V20H9V21ZM13 21V22V23V24H12V26H9V23H8V22H9V21H11V22H12V21H13ZM13 21V19H14V18H15V19V21H13Z"
        fill={Color(primaryColor).darken(0.4)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14H3V15V16H4V17H6V18H7V19H9V20H11V21H12V20H13V19V18H14V17V16H13V17H8V16H5V15H4V14Z"
        fill={secondaryColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 14H4V15H5V16H8V17H13V16H14V15H13V16H8V15H5V14Z"
        fill={Color(secondaryColor).darken(0.2)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6H6V8H8V6ZM16 6H15V8H16V6Z"
        fill="white"
      />
    </svg>
  );
}