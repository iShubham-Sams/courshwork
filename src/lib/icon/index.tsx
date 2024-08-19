import { FC } from "react";

type Icon = {
  size?: number;
  color?: string;
};
export const FireIcon: FC<Icon> = ({ size = 1 }) => {
  return (
    <svg width={14 * size} height={18 * size} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.77339 12.7745C7.68698 12.8318 7.58722 12.8657 7.48382 12.8729C7.38041 12.8802 7.27689 12.8605 7.18333 12.8159C7.05822 12.7423 6.95791 12.633 6.89521 12.5021C6.83251 12.3712 6.81029 12.2245 6.83137 12.0809C6.77776 11.3688 6.47545 10.6982 5.97733 10.1865C5.81335 10.91 5.52245 11.5987 5.11812 12.2207L4.63676 12.9557C4.17716 13.657 3.96075 14.4899 4.02082 15.3263C4.06622 15.8888 4.32123 16.4138 4.73535 16.7972C5.14946 17.1806 5.69247 17.3946 6.25683 17.3966H7.56118C8.20959 17.3966 8.83153 17.1394 9.29051 16.6814C9.7495 16.2234 10.008 15.602 10.0094 14.9536C10.0084 13.7121 9.57876 12.509 8.79306 11.5478C8.57157 12.0422 8.21893 12.4664 7.77339 12.7745Z"
        fill="url(#paint0_linear_1_5)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0609 3.42075L9.79171 3.18265C9.79171 3.18265 9.79171 3.28617 9.79171 3.45698C9.72821 4.11201 9.52142 4.74507 9.18599 5.31127C8.85056 5.87748 8.39471 6.36298 7.85072 6.73336C7.85072 6.73336 7.85072 6.55221 7.81449 6.26753C7.72422 5.13961 7.35417 4.05199 6.73781 3.10306C6.12146 2.15413 5.27826 1.37384 4.28448 0.832764C4.28448 0.832764 4.24825 1.428 4.20685 2.075C4.14576 3.10812 3.81566 4.10733 3.24929 4.97354L1.73273 7.27684C0.701075 8.8527 0.217208 10.7245 0.355927 12.6029C0.424955 13.521 0.737622 14.4041 1.26169 15.1611C1.78575 15.918 2.50224 16.5215 3.33728 16.9093C3.04637 16.458 2.8688 15.943 2.81969 15.4083C2.74341 14.3128 3.02693 13.2223 3.62714 12.3027L4.1085 11.5729C4.61005 10.8313 4.90811 9.97101 4.97289 9.07808C4.98037 8.97894 5.01214 8.88317 5.0654 8.79921C5.11866 8.71526 5.19177 8.64572 5.27827 8.59671C5.36531 8.54821 5.4633 8.52276 5.56295 8.52276C5.66259 8.52276 5.76058 8.54821 5.84763 8.59671C6.77001 9.09913 7.47147 9.92797 7.81449 10.9207C7.86797 10.7759 7.90107 10.6243 7.91284 10.4704C7.90437 10.3366 7.93702 10.2034 8.0064 10.0887C8.07579 9.97398 8.1786 9.88322 8.30103 9.82859C8.43413 9.78585 8.57717 9.78529 8.7106 9.82698C8.84402 9.86868 8.9613 9.95059 9.04637 10.0615C9.7242 10.6826 10.2646 11.4386 10.6327 12.281C11.0009 13.1234 11.1887 14.0335 11.184 14.9528C11.1847 15.5772 11.0223 16.1909 10.713 16.7333C11.633 16.2531 12.4042 15.5306 12.9434 14.6439C13.4825 13.7572 13.7691 12.74 13.772 11.7023C13.7703 10.1386 13.4389 8.59281 12.7994 7.16583C12.16 5.73885 11.2268 4.46273 10.0609 3.42075Z"
        fill={"#FF7A1A"}
      />
      <defs>
        <linearGradient id="paint0_linear_1_5" x1="7.0102" y1="10.1865" x2="7.0102" y2="17.3966" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFBD8D" />
          <stop offset="1" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const QuizIcon: FC<Icon> = ({ size = 1, color = "white" }) => {
  return (
    <svg width={20 * size} height={19 * size} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.75 12.7692C11.9948 12.7692 12.2086 12.6779 12.3913 12.4952C12.5739 12.3126 12.6652 12.0988 12.6652 11.8538C12.6652 11.6089 12.5739 11.3952 12.3913 11.2125C12.2086 11.0298 11.9948 10.9385 11.75 10.9385C11.5052 10.9385 11.2914 11.0298 11.1087 11.2125C10.9259 11.3952 10.8345 11.6089 10.8345 11.8538C10.8345 12.0988 10.9259 12.3126 11.1087 12.4952C11.2914 12.6779 11.5052 12.7692 11.75 12.7692ZM11.75 9.7615C11.9013 9.7615 12.0385 9.70767 12.1615 9.6C12.2845 9.49233 12.3595 9.35583 12.3865 9.1905C12.4198 8.95833 12.4938 8.75575 12.6085 8.58275C12.7233 8.40958 12.9384 8.17175 13.2538 7.86925C13.7153 7.42692 14.0293 7.05317 14.196 6.748C14.3627 6.443 14.446 6.08858 14.446 5.68475C14.446 4.97308 14.1947 4.38617 13.6923 3.924C13.1898 3.46183 12.5423 3.23075 11.75 3.23075C11.2385 3.23075 10.7706 3.34933 10.3463 3.5865C9.92175 3.82367 9.58258 4.16275 9.32875 4.60375C9.24808 4.73842 9.23975 4.87983 9.30375 5.028C9.36792 5.176 9.47758 5.28208 9.63275 5.34625C9.77758 5.41025 9.92308 5.41692 10.0693 5.36625C10.2154 5.31575 10.334 5.22317 10.425 5.0885C10.5878 4.84617 10.7788 4.66442 10.998 4.54325C11.2173 4.42208 11.468 4.3615 11.75 4.3615C12.1885 4.3615 12.5487 4.48842 12.8307 4.74225C13.1127 4.99608 13.2538 5.33075 13.2538 5.74625C13.2538 5.99875 13.1823 6.23558 13.0395 6.45675C12.8965 6.67792 12.6487 6.95 12.2962 7.273C11.8641 7.64483 11.5782 7.95125 11.4385 8.19225C11.2987 8.43325 11.2121 8.75767 11.1788 9.1655C11.1621 9.3205 11.2102 9.45858 11.323 9.57975C11.4358 9.70092 11.5782 9.7615 11.75 9.7615ZM6.05775 15.5C5.55258 15.5 5.125 15.325 4.775 14.975C4.425 14.625 4.25 14.1974 4.25 13.6923V2.30775C4.25 1.80258 4.425 1.375 4.775 1.025C5.125 0.675 5.55258 0.5 6.05775 0.5H17.4423C17.9474 0.5 18.375 0.675 18.725 1.025C19.075 1.375 19.25 1.80258 19.25 2.30775V13.6923C19.25 14.1974 19.075 14.625 18.725 14.975C18.375 15.325 17.9474 15.5 17.4423 15.5H6.05775ZM6.05775 14H17.4423C17.5193 14 17.5898 13.9679 17.6538 13.9038C17.7179 13.8398 17.75 13.7692 17.75 13.6923V2.30775C17.75 2.23075 17.7179 2.16025 17.6538 2.09625C17.5898 2.03208 17.5193 2 17.4423 2H6.05775C5.98075 2 5.91025 2.03208 5.84625 2.09625C5.78208 2.16025 5.75 2.23075 5.75 2.30775V13.6923C5.75 13.7692 5.78208 13.8398 5.84625 13.9038C5.91025 13.9679 5.98075 14 6.05775 14ZM2.55775 19C2.05258 19 1.625 18.825 1.275 18.475C0.925 18.125 0.75 17.6974 0.75 17.1923V5.05775C0.75 4.84492 0.821833 4.66667 0.9655 4.523C1.109 4.3795 1.28717 4.30775 1.5 4.30775C1.71283 4.30775 1.89108 4.3795 2.03475 4.523C2.17825 4.66667 2.25 4.84492 2.25 5.05775V17.1923C2.25 17.2693 2.28208 17.3398 2.34625 17.4038C2.41025 17.4679 2.48075 17.5 2.55775 17.5H14.6923C14.9051 17.5 15.0833 17.5718 15.227 17.7153C15.3705 17.8589 15.4423 18.0372 15.4423 18.25C15.4423 18.4628 15.3705 18.641 15.227 18.7845C15.0833 18.9282 14.9051 19 14.6923 19H2.55775Z"
        fill={color}
      />
    </svg>
  );
};

export const FileCopyIcon: FC<Icon> = ({ size = 1, color = "white" }) => {
  return (
    <svg width={19 * size} height={22 * size} viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6923 17.5H6.30775C5.80258 17.5 5.375 17.325 5.025 16.975C4.675 16.625 4.5 16.1974 4.5 15.6923V2.30775C4.5 1.80258 4.675 1.375 5.025 1.025C5.375 0.675 5.80258 0.5 6.30775 0.5H12.502C12.743 0.5 12.9748 0.546833 13.1973 0.6405C13.4196 0.734 13.6128 0.862834 13.777 1.027L17.973 5.223C18.1372 5.38717 18.266 5.58042 18.3595 5.80275C18.4532 6.02525 18.5 6.257 18.5 6.498V15.6923C18.5 16.1974 18.325 16.625 17.975 16.975C17.625 17.325 17.1974 17.5 16.6923 17.5ZM17 6.5H13.7115C13.3718 6.5 13.085 6.383 12.851 6.149C12.617 5.915 12.5 5.62817 12.5 5.2885V2H6.30775C6.23075 2 6.16025 2.03208 6.09625 2.09625C6.03208 2.16025 6 2.23075 6 2.30775V15.6923C6 15.7692 6.03208 15.8398 6.09625 15.9038C6.16025 15.9679 6.23075 16 6.30775 16H16.6923C16.7693 16 16.8398 15.9679 16.9038 15.9038C16.9679 15.8398 17 15.7692 17 15.6923V6.5ZM2.30775 21.5C1.80258 21.5 1.375 21.325 1.025 20.975C0.675 20.625 0.5 20.1974 0.5 19.6923V7.25C0.5 7.03717 0.571833 6.859 0.7155 6.7155C0.859 6.57183 1.03717 6.5 1.25 6.5C1.46283 6.5 1.641 6.57183 1.7845 6.7155C1.92817 6.859 2 7.03717 2 7.25V19.6923C2 19.7693 2.03208 19.8398 2.09625 19.9038C2.16025 19.9679 2.23075 20 2.30775 20H11.75C11.9628 20 12.141 20.0718 12.2845 20.2155C12.4282 20.359 12.5 20.5372 12.5 20.75C12.5 20.9628 12.4282 21.141 12.2845 21.2845C12.141 21.4282 11.9628 21.5 11.75 21.5H2.30775Z"
        fill={color}
      />
    </svg>
  );
};

export const BookIcon: FC<Icon> = ({ size = 1, color = "white" }) => {
  return (
    <svg width={18 * size} height={20 * size} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.1155 19.5C2.389 19.5 1.77142 19.2457 1.26275 18.7372C0.75425 18.2286 0.5 17.611 0.5 16.8845V3.1155C0.5 2.389 0.75425 1.77142 1.26275 1.26275C1.77142 0.75425 2.389 0.5 3.1155 0.5H12C12.4972 0.5 12.9228 0.677 13.2768 1.031C13.6308 1.385 13.8077 1.81058 13.8077 2.30775V14C13.8077 14.4972 13.6308 14.9228 13.2768 15.2768C12.9228 15.6308 12.4972 15.8077 12 15.8077H3.1155C2.8065 15.8077 2.54333 15.9126 2.326 16.1223C2.10867 16.3321 2 16.5921 2 16.9023C2 17.2122 2.10867 17.4727 2.326 17.6838C2.54333 17.8946 2.8065 18 3.1155 18H15.6923C15.7821 18 15.8558 17.9712 15.9135 17.9135C15.9712 17.8558 16 17.7821 16 17.6923V3.25C16 3.0375 16.0719 2.85942 16.2158 2.71575C16.3596 2.57192 16.5378 2.5 16.7502 2.5C16.9629 2.5 17.141 2.57192 17.2845 2.71575C17.4282 2.85942 17.5 3.0375 17.5 3.25V17.6923C17.5 18.1894 17.323 18.615 16.969 18.969C16.615 19.323 16.1894 19.5 15.6923 19.5H3.1155ZM5.69225 14.3077H12C12.0898 14.3077 12.1636 14.2789 12.2212 14.2212C12.2789 14.1636 12.3077 14.0898 12.3077 14V2.30775C12.3077 2.21792 12.2789 2.14417 12.2212 2.0865C12.1636 2.02883 12.0898 2 12 2H5.69225V14.3077ZM4.19225 14.3077V2H3.1155C2.79933 2 2.53442 2.10867 2.32075 2.326C2.10692 2.54333 2 2.8065 2 3.1155V14.598C2.173 14.516 2.34983 14.4471 2.5305 14.3913C2.71117 14.3356 2.90617 14.3077 3.1155 14.3077H4.19225Z"
        fill={color}
      />
    </svg>
  );
};

export const DashboardIcon: FC<Icon> = ({ size = 1, color = "white" }) => {
  return (
    <svg width={18 * size} height={18 * size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.25 5.0915V1.40875C10.25 1.14775 10.3369 0.931083 10.5107 0.758749C10.6846 0.586249 10.8999 0.5 11.1568 0.5H16.5972C16.8542 0.5 17.0689 0.586249 17.2413 0.758749C17.4138 0.931083 17.5 1.14775 17.5 1.40875V5.0915C17.5 5.35233 17.4131 5.56892 17.2393 5.74125C17.0654 5.91375 16.8501 6 16.5933 6H11.1528C10.8958 6 10.6811 5.91375 10.5087 5.74125C10.3363 5.56892 10.25 5.35233 10.25 5.0915ZM0.5 8.6V1.39975C0.5 1.14475 0.586916 0.931083 0.76075 0.758749C0.934583 0.586249 1.14992 0.5 1.40675 0.5H6.84725C7.10425 0.5 7.31892 0.586249 7.49125 0.758749C7.66375 0.931249 7.75 1.145 7.75 1.4V8.60025C7.75 8.85525 7.66308 9.06892 7.48925 9.24125C7.31542 9.41375 7.10008 9.5 6.84325 9.5H1.40275C1.14575 9.5 0.931084 9.41375 0.75875 9.24125C0.58625 9.06875 0.5 8.855 0.5 8.6ZM10.25 16.6V9.39975C10.25 9.14475 10.3369 8.93108 10.5107 8.75875C10.6846 8.58625 10.8999 8.5 11.1568 8.5H16.5972C16.8542 8.5 17.0689 8.58625 17.2413 8.75875C17.4138 8.93125 17.5 9.145 17.5 9.4V16.6003C17.5 16.8552 17.4131 17.0689 17.2393 17.2413C17.0654 17.4138 16.8501 17.5 16.5933 17.5H11.1528C10.8958 17.5 10.6811 17.4138 10.5087 17.2413C10.3363 17.0688 10.25 16.855 10.25 16.6ZM0.5 16.5913V12.9085C0.5 12.6477 0.586916 12.4311 0.76075 12.2587C0.934583 12.0863 1.14992 12 1.40675 12H6.84725C7.10425 12 7.31892 12.0863 7.49125 12.2587C7.66375 12.4311 7.75 12.6477 7.75 12.9085V16.5913C7.75 16.8523 7.66308 17.0689 7.48925 17.2413C7.31542 17.4138 7.10008 17.5 6.84325 17.5H1.40275C1.14575 17.5 0.931084 17.4138 0.75875 17.2413C0.58625 17.0689 0.5 16.8523 0.5 16.5913ZM2 8H6.25V2H2V8ZM11.75 16H16V10H11.75V16ZM11.75 4.5H16V2H11.75V4.5ZM2 16H6.25V13.5H2V16Z"
        fill={color}
      />
    </svg>
  );
};

export const EventIcon: FC<Icon> = ({ size = 1, color = "white" }) => {
  return (
    <svg width={18 * size} height={20 * size} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6923 16C11.0499 16 10.5048 15.776 10.0568 15.328C9.60875 14.8798 9.38475 14.3346 9.38475 13.6923C9.38475 13.0499 9.60875 12.5048 10.0568 12.0568C10.5048 11.6088 11.0499 11.3848 11.6923 11.3848C12.3346 11.3848 12.8798 11.6088 13.328 12.0568C13.776 12.5048 14 13.0499 14 13.6923C14 14.3346 13.776 14.8798 13.328 15.328C12.8798 15.776 12.3346 16 11.6923 16ZM2.30775 19.5C1.80258 19.5 1.375 19.325 1.025 18.975C0.675 18.625 0.5 18.1974 0.5 17.6923V4.30777C0.5 3.8026 0.675 3.37502 1.025 3.02502C1.375 2.67502 1.80258 2.50002 2.30775 2.50002H3.69225V1.15377C3.69225 0.934599 3.76567 0.751599 3.9125 0.604765C4.05933 0.458099 4.24233 0.384766 4.4615 0.384766C4.68083 0.384766 4.86383 0.458099 5.0105 0.604765C5.15733 0.751599 5.23075 0.934599 5.23075 1.15377V2.50002H12.8077V1.13477C12.8077 0.921932 12.8795 0.743682 13.023 0.600015C13.1667 0.456515 13.3449 0.384766 13.5577 0.384766C13.7706 0.384766 13.9487 0.456515 14.0922 0.600015C14.2359 0.743682 14.3077 0.921932 14.3077 1.13477V2.50002H15.6923C16.1974 2.50002 16.625 2.67502 16.975 3.02502C17.325 3.37502 17.5 3.8026 17.5 4.30777V17.6923C17.5 18.1974 17.325 18.625 16.975 18.975C16.625 19.325 16.1974 19.5 15.6923 19.5H2.30775ZM2.30775 18H15.6923C15.7692 18 15.8398 17.9679 15.9038 17.9038C15.9679 17.8398 16 17.7693 16 17.6923V8.30777H2V17.6923C2 17.7693 2.03208 17.8398 2.09625 17.9038C2.16025 17.9679 2.23075 18 2.30775 18ZM2 6.80777H16V4.30777C16 4.23077 15.9679 4.16026 15.9038 4.09626C15.8398 4.0321 15.7692 4.00002 15.6923 4.00002H2.30775C2.23075 4.00002 2.16025 4.0321 2.09625 4.09626C2.03208 4.16026 2 4.23077 2 4.30777V6.80777Z"
        fill={color}
      />
    </svg>
  );
};

export const NoteStackIcon: FC<Icon> = ({ size = 1, color = "white" }) => {
  return (
    <svg width={20 * size} height={20 * size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.99999 7.30766V17.6922C6.99999 17.782 7.02882 17.8557 7.08649 17.9134C7.14416 17.9711 7.21791 17.9999 7.30774 17.9999H14V14.9037C14 14.646 14.0862 14.431 14.2587 14.2587C14.4311 14.0862 14.6461 13.9999 14.9037 13.9999H18V7.30766C18 7.21783 17.9712 7.14408 17.9135 7.08641C17.8558 7.02874 17.7821 6.99991 17.6922 6.99991H7.30774C7.21791 6.99991 7.14416 7.02874 7.08649 7.08641C7.02882 7.14408 6.99999 7.21783 6.99999 7.30766ZM5.49999 17.6922V7.29216C5.49999 6.79349 5.67916 6.37016 6.03749 6.02216C6.39582 5.67399 6.82432 5.49991 7.32299 5.49991H17.6922C18.1909 5.49991 18.6169 5.67649 18.9702 6.02966C19.3234 6.38299 19.5 6.80899 19.5 7.30766V14.0402C19.5 14.2813 19.4532 14.5131 19.3595 14.7354C19.266 14.9579 19.1372 15.1512 18.973 15.3152L15.3152 18.9729C15.1512 19.1371 14.958 19.2659 14.7355 19.3594C14.5132 19.4531 14.2814 19.4999 14.0402 19.4999H7.30774C6.80907 19.4999 6.38307 19.3233 6.02974 18.9702C5.67657 18.6168 5.49999 18.1908 5.49999 17.6922ZM0.524989 4.42291C0.431489 3.92424 0.528656 3.47491 0.816489 3.07491C1.10416 2.67491 1.49741 2.42816 1.99624 2.33466L12.2307 0.52491C12.7192 0.43141 13.1609 0.531077 13.5557 0.82391C13.9506 1.11691 14.2051 1.50766 14.3192 1.99616L14.475 2.79991C14.5327 3.04991 14.4938 3.24924 14.3585 3.39791C14.2233 3.54674 14.0628 3.63458 13.877 3.66141C13.691 3.68841 13.5143 3.65541 13.347 3.56241C13.1798 3.46941 13.0642 3.29791 13 3.04791L12.825 2.21141C12.8122 2.14091 12.7737 2.08483 12.7095 2.04316C12.6455 2.00149 12.575 1.98708 12.498 1.99991L2.25974 3.81916C2.16991 3.83199 2.10257 3.87366 2.05774 3.94416C2.01291 4.01466 1.99682 4.09483 2.00949 4.18466L3.67299 13.6692C3.71016 13.8757 3.67299 14.0642 3.56149 14.2347C3.44999 14.4052 3.29107 14.5122 3.08474 14.5557C2.87191 14.5993 2.68116 14.5596 2.51249 14.4364C2.34399 14.3134 2.24116 14.1455 2.20399 13.9327L0.524989 4.42291Z"
        fill={color}
      />
    </svg>
  );
};

export const UploadFileIcon: FC<Icon> = ({ size = 1, color = "#98A1BB" }) => {
  return (
    <svg width={30 * size} height={38 * size} viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.946 31.6885H16.2155V21.5805L20.5655 25.95L22.1655 24.35L15 17.327L7.9155 24.4305L9.496 26.0115L13.946 21.5805V31.6885ZM2.8845 38C2.10017 38 1.42333 37.7153 0.854 37.146C0.284667 36.5767 0 35.8998 0 35.1155V2.8845C0 2.10017 0.284667 1.42333 0.854 0.854001C1.42333 0.284668 2.10017 0 2.8845 0H20.2615L30 9.7385V35.1155C30 35.8998 29.7153 36.5767 29.146 37.146C28.5767 37.7153 27.8998 38 27.1155 38H2.8845ZM19.127 10.7615V2.2695H2.8845C2.73083 2.2695 2.58983 2.3335 2.4615 2.4615C2.3335 2.58983 2.2695 2.73083 2.2695 2.8845V35.1155C2.2695 35.2692 2.3335 35.4102 2.4615 35.5385C2.58983 35.6665 2.73083 35.7305 2.8845 35.7305H27.1155C27.2692 35.7305 27.4102 35.6665 27.5385 35.5385C27.6665 35.4102 27.7305 35.2692 27.7305 35.1155V10.7615H19.127Z"
        fill={color}
      />
    </svg>
  );
};

export const StarIcon: FC<Icon> = ({ size = 1, color = "white" }) => {
  return (
    <svg className="size-6 rounded-xl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width={24 * size} height={24 * size} fill={color} fillOpacity="0.8"></rect>
      <g clipPath="url(#clip0_1_1311)">
        <path
          d="M10.9525 7.46965L10.8015 7.41047L10.6502 7.46896L9.44001 7.93686L9.91754 6.74249L9.97701 6.59375L9.92152 6.44348L9.51857 5.35217L10.5975 5.76042L10.7488 5.81769L10.8992 5.75778L12.0959 5.2809L11.6287 6.49349L11.5698 6.64631L11.6308 6.79834L12.0765 7.91014L10.9525 7.46965ZM17.9466 14.4676L17.7965 14.4116L17.6476 14.4705L16.4573 14.9411L16.9311 13.756L16.9926 13.6021L16.9316 13.448L16.4843 12.318L17.6022 12.7705L17.7573 12.8333L17.9127 12.7713L19.1002 12.2981L18.6302 13.4909L18.5709 13.6414L18.6287 13.7925L19.0438 14.8774L17.9466 14.4676ZM9.90976 16.6878L9.76487 16.6357L9.62093 16.6903L6.52116 17.8674L7.69824 14.7677L7.75274 14.6241L7.7011 14.4796L6.59487 11.3826L9.70181 12.4807L9.84524 12.5313L9.98759 12.4777L13.074 11.3146L11.9109 14.401L11.8571 14.5438L11.9082 14.6875L13.0164 17.8041L9.90976 16.6878Z"
          fill="#6947BF"
          stroke="#6947BF"
          strokeWidth="0.833333"></path>
      </g>
      <defs>
        <clipPath id="clip0_1_1311">
          <rect width="20" height="20" fill={color} transform="translate(2 2.00012)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};
