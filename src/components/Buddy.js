import React from "react";
import Color from "color";

export default function Buddy({ primaryColor, secondaryColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="134"
      height="152"
      viewBox="0 0 17 28"
      fill="none"
      style={{ alignSelf: 'center' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0H5V1H3V0ZM2 2V1H3V2H2ZM2 4H1V2H2V4ZM2 6V4H3V6H2ZM1 8V6H2V8H1ZM1 14H0V8H1V14ZM2 16H1V14H2V16ZM2 18V16H3V18H2ZM1 20V18H2V20H1ZM1 23H0V20H1V23ZM2 24H1V23H2V24ZM2 24H3V28H2V24ZM6 2H5V1H6V2ZM7 3H6V2H7V3ZM9 2V4H8H7V3H8V2H9ZM10 1V2H9V1H10ZM12 1H10V0H12V1ZM13 3H12V1H13V3ZM14 5H13V3H14V5ZM15 7H14V5H15V7ZM16 9V7H15V9H13V10H12V13H13V14H15V16H14V17H13V18H14V20H15V23H14H13V26H12V28H13V26H14V24H15V23H16V20H15V18H14V17H15V16H16V14H17V9H16ZM15 10H16V9H15V10ZM14 10V12H15V10H14ZM16 14H15V13H16V14ZM7 27H6V28H7V27ZM7 27V25H9V27V28H8V27H7ZM6 10H7V9H10V10H8V12H10V10H11V13H10V14H8H7V13H6V10Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1V2H6V3H7V4H6V5H9V6H10V7H7V8H6V9H5V13H6V15H7V16H8V17H9V18H8V20H7V18H6V20H5V22H4V23H1V22V20H2V18H3V15H2V13H1V9H2V7H3V6H4V5H3V4H2V2H3V1H5ZM7 25V27H6V28H3V25H5V24H6V22H7V23H8V25H7Z"
        fill={primaryColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4H10V5H12V6H13V7H10V6H9V5H6V4ZM3 5H4V6H3V5ZM3 6V7H2V6H3ZM1 8H2V9H1V8ZM2 13H1V14H2V13ZM2 15H3V16H2V15ZM8 15H7V16H8V17H11V16H8V15ZM11 24H8V25H11V24ZM5 24V25H3V24H4V23H5V22H6V23V24H5ZM6 22V20H7V22H6Z"
        fill={Color(primaryColor).darken(0.2)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1H10V2H9V4H10V5H12V6H13V8H14V9H15V10H16V9H15V7H14V5H13V3H12V1ZM16 13H15V14H16V13ZM14 15H15V16H14V15ZM13 23V19H12V17H11V16H14V17H13V18H14V20H15V23H14H13ZM13 23V26H12V28H11H9V25H11V24H12V23H13ZM2 23H4V24H2V23ZM5 22H4V23H5V22ZM6 20V22H5V20H6ZM6 20V18H7V20H6Z"
        fill={secondaryColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7H10H11H12H13V8H14V9H13V10H12V13H13V14H14H15V15H14V16H13H12H11H8V15H6V14V13H7V14H8H10V13H11V10H10V9H7V10H6V13H5V9H6V8H7V7ZM10 10H8V12H10V10ZM12 19V18V17H9V18H8V20H7V23H8V24H12V23H13V19H12ZM15 10H14V12H15V10Z"
        fill="white"
      />
    </svg>
  );
}