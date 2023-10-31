// types
type Icon = {
  size?: number
  classProps?: string
}

export function GitHub({ size }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"
      />
    </svg>
  )
}

export function Linkedin({ size }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"
      />
    </svg>
  )
}

export function Twitter({ size = 32 }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
      />
    </svg>
  )
}

export function ArrowIcon({ size = 24, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={classProps}
    >
      <path
        fill="currentColor"
        d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"
      />
    </svg>
  )
}

export function OpenOutline({ size }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288L440 72"
      />
    </svg>
  )
}

export function Moon({ size = 16, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={classProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      ></path>
    </svg>
  )
}

export function Sun({ size = 16, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={classProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      ></path>
    </svg>
  )
}

export function Download({ size = 32, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={classProps}
    >
      <g fill="currentColor">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
      </g>
    </svg>
  )
}

export function PDF({ size = 32, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={classProps}
    >
      <path
        d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69c0 0-3.5 1.82-2.67 3.18c.67 1.08 2.32-.04 3.74-2.68c0 0 1.82-.64 4.24-.82c0 0 3.86 1.73 4.39-.11c.52-1.86-3.06-1.44-3.7-1.25c0 0-2-1.35-2.5-3.21c0 0 1.14-3.95-.61-3.9c-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46c0 0-2.33.46-3.39.9c0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48c-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2c-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15c.54.08 0 2.08 0 2.15z"
        fill="currentColor"
      />
    </svg>
  )
}

export function NEXTJS({ size = 124, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="32"
      viewBox="0 0 512 104"
    >
      <path d="M429.543.043v16.46h-35.377V103.1h-17.69V16.504h-36.114V.043h89.181Zm3.977 93.24c1.246 0 2.336.448 3.259 1.346c.936.897 1.402 1.972 1.415 3.224a4.476 4.476 0 0 1-.66 2.327a4.776 4.776 0 0 1-1.714 1.665a4.422 4.422 0 0 1-2.3.626c-1.296 0-2.398-.449-3.32-1.346c-.923-.898-1.38-1.985-1.368-3.272c-.011-1.252.445-2.327 1.368-3.224c.922-.898 2.024-1.346 3.32-1.346ZM82.916 103.1L17.69 22.028v81.03H0V0h22.111l82.406 102.329l.001-85.825l-.007-16.461h89.18v16.46h-71.484v26.48h57.488v16.461h-57.488V86.64h71.485v16.46H82.916Zm167.469-43.813L261.978 73.7l-23.755 29.522h-23.215l35.377-43.935ZM238.223.086l29.93 37.17L297.989.2l23.15-.035l-41.396 51.485l41.463 51.493h-23.217L215.074.086h23.149Zm225.488 58.97h7.838v30.2c-.011 2.775-.612 5.148-1.785 7.145c-1.187 1.995-2.83 3.519-4.938 4.594c-2.098 1.062-4.555 1.606-7.348 1.606c-2.553 0-4.841-.46-6.879-1.358c-2.038-.898-3.655-2.244-4.842-4.016c-1.2-1.771-1.787-3.98-1.787-6.625h7.852c.012 1.157.275 2.16.778 3a5.01 5.01 0 0 0 2.086 1.924c.898.45 1.93.674 3.091.674c1.26 0 2.338-.26 3.213-.792c.874-.52 1.546-1.299 2.014-2.338c.455-1.028.695-2.303.707-3.815v-30.2Zm40.09 11.81c-.19-1.83-1.03-3.26-2.492-4.275c-1.475-1.028-3.38-1.535-5.718-1.535c-1.64 0-3.055.248-4.23.732c-1.174.496-2.085 1.157-2.709 1.996c-.622.838-.934 1.795-.959 2.87c0 .897.216 1.677.635 2.326a5.22 5.22 0 0 0 1.714 1.666a11.5 11.5 0 0 0 2.398 1.145c.886.307 1.774.567 2.66.78l4.087 1.004c1.643.378 3.237.885 4.759 1.535c1.521.638 2.9 1.453 4.11 2.433c1.211.98 2.17 2.161 2.877 3.543c.707 1.382 1.067 3 1.067 4.866c0 2.515-.647 4.724-1.954 6.637c-1.306 1.902-3.188 3.39-5.657 4.465c-2.457 1.063-5.43 1.606-8.929 1.606c-3.38 0-6.328-.52-8.81-1.559c-2.492-1.027-4.434-2.54-5.837-4.524c-1.402-1.984-2.157-4.405-2.265-7.251h7.768c.107 1.488.587 2.728 1.402 3.732c.826.992 1.905 1.724 3.224 2.22c1.33.485 2.816.733 4.458.733c1.714 0 3.224-.26 4.53-.768c1.295-.508 2.313-1.216 3.045-2.138c.743-.91 1.115-1.984 1.127-3.212c-.012-1.122-.349-2.055-.996-2.788c-.659-.732-1.57-1.346-2.733-1.842c-1.173-.496-2.54-.945-4.098-1.334l-4.962-1.252c-3.584-.91-6.424-2.291-8.498-4.146c-2.085-1.854-3.116-4.31-3.116-7.393c0-2.527.695-4.748 2.098-6.65c1.39-1.9 3.296-3.377 5.705-4.428c2.42-1.063 5.154-1.583 8.197-1.583c3.093 0 5.801.52 8.139 1.583c2.336 1.051 4.171 2.515 5.5 4.381c1.331 1.867 2.027 4.004 2.063 6.425h-7.6Z" />
    </svg>
  )
}

export function TS({ size = 32, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
    >
      <path
        fill="#3178C6"
        d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      />
      <path
        fill="#FFF"
        d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179c6.133 1.151 12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899c5.96-1.266 11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394c2.62-4.689 3.93-10.486 3.93-17.391c0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898c-3.945-2.33-8.394-4.531-13.347-6.602c-3.628-1.497-6.881-2.949-9.761-4.359c-2.879-1.41-5.327-2.848-7.342-4.316c-2.016-1.467-3.571-3.021-4.665-4.661c-1.094-1.64-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547c2.591-.604 5.471-.906 8.638-.906c2.304 0 4.737.173 7.299.518c2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582c-4.981-.777-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115c-5.874 1.409-11.043 3.61-15.506 6.602c-4.463 2.993-7.99 6.805-10.582 11.437c-2.591 4.632-3.887 10.17-3.887 16.615c0 8.228 2.375 15.248 7.127 21.06c4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66c2.39 1.611 4.276 3.366 5.658 5.265c1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97c-1.756 1.122-3.945 1.999-6.565 2.632c-2.62.633-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151c-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
      />
    </svg>
  )
}

export function MDB({ size = 121.37, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="32"
      viewBox="0 0 512 135"
    >
      <path
        fill="#01EC64"
        d="M39.689 13.81C34.489 7.64 30.01 1.374 29.096.072a.233.233 0 0 0-.337 0c-.915 1.302-5.393 7.568-10.593 13.738c-44.635 56.926 7.03 95.342 7.03 95.342l.433.29c.385 5.928 1.348 14.46 1.348 14.46h3.852s.963-8.484 1.348-14.46l.434-.338c.048.048 51.712-38.368 7.078-95.294Zm-10.786 94.475s-2.311-1.977-2.937-2.988v-.097l2.793-61.987c0-.193.289-.193.289 0L31.84 105.2v.097c-.626 1.011-2.937 2.988-2.937 2.988Z"
      />
      <path
        fill="#001E2B"
        d="m125.59 95.636l-21.53-52.583l-.047-.145h-16.75v3.534h2.702c.821 0 1.593.34 2.173.92c.579.581.869 1.356.869 2.18l-.483 52.92c0 1.647-1.351 3.002-2.993 3.051l-2.751.048v3.486h16.316v-3.486l-1.69-.048c-1.641-.049-2.993-1.404-2.993-3.05V52.59l23.46 56.456c.338.823 1.11 1.356 1.98 1.356c.868 0 1.64-.533 1.978-1.356l22.93-55.197l.338 48.613c0 1.694-1.352 3.05-3.042 3.098h-1.738v3.486h19.116v-3.486h-2.607c-1.64 0-2.993-1.404-3.04-3.05l-.146-52.922a3.097 3.097 0 0 1 2.993-3.098l2.8-.049v-3.534h-16.316l-21.53 52.728Zm150.113 9.004c-.532-.533-.823-1.26-.823-2.134V76.51c0-4.947-1.451-8.828-4.355-11.592c-2.856-2.765-6.824-4.171-11.76-4.171c-6.922 0-12.39 2.813-16.214 8.342c-.048.097-.193.146-.338.146c-.146 0-.242-.098-.242-.243l-1.791-6.936h-3.001l-7.695 4.414v2.425h1.984c.92 0 1.694.242 2.227.728c.532.485.822 1.212.822 2.23v30.605c0 .873-.29 1.601-.822 2.135c-.533.533-1.259.824-2.13.824h-1.936v3.54h17.713v-3.54h-1.935c-.872 0-1.598-.291-2.13-.824c-.532-.534-.823-1.262-.823-2.135V82.184c0-2.57.581-5.141 1.646-7.664c1.113-2.473 2.758-4.559 4.936-6.16c2.178-1.6 4.792-2.376 7.792-2.376c3.388 0 5.953 1.067 7.55 3.201c1.597 2.134 2.42 4.899 2.42 8.197v25.027c0 .873-.29 1.6-.823 2.134c-.532.534-1.258.824-2.13.824h-1.935v3.541h17.713v-3.54h-1.935c-.726.097-1.404-.194-1.985-.728Zm161.833-57.773c-4.896-2.607-10.368-3.96-16.273-3.96h-23.04v3.525h2.255c.864 0 1.632.338 2.4 1.11c.72.725 1.104 1.546 1.104 2.415v51.95c0 .87-.383 1.69-1.104 2.415c-.72.724-1.536 1.11-2.4 1.11h-2.256v3.525h23.041c5.905 0 11.377-1.352 16.273-3.96c4.896-2.607 8.88-6.47 11.76-11.394c2.881-4.924 4.369-10.863 4.369-17.623c0-6.759-1.488-12.65-4.368-17.622c-2.928-5.021-6.865-8.836-11.76-11.491Zm6.865 29.017c0 6.18-1.104 11.394-3.265 15.595c-2.16 4.2-5.04 7.338-8.592 9.367c-3.552 2.027-7.489 3.041-11.713 3.041h-4.656c-.864 0-1.632-.338-2.4-1.11c-.72-.725-1.104-1.545-1.104-2.414V51.357c0-.87.336-1.641 1.104-2.414c.72-.724 1.536-1.11 2.4-1.11h4.656c4.224 0 8.16 1.013 11.713 3.041c3.552 2.028 6.432 5.166 8.592 9.367c2.16 4.248 3.265 9.511 3.265 15.643Zm63.728 3.525c-2.131-2.463-6.244-4.539-11.08-5.65c6.678-3.331 10.11-8.014 10.11-14.05c0-3.282-.867-6.228-2.612-8.738c-1.74-2.51-4.21-4.539-7.353-5.939c-3.148-1.4-6.826-2.124-10.987-2.124h-26.081v3.524h2.08c.871 0 1.646.338 2.42 1.11c.726.725 1.113 1.546 1.113 2.415v51.95c0 .87-.387 1.69-1.113 2.415c-.726.724-1.549 1.11-2.42 1.11h-2.274v3.525h28.31c4.305 0 8.32-.724 11.951-2.173c3.63-1.448 6.533-3.573 8.615-6.373c2.127-2.8 3.192-6.229 3.192-10.188c-.048-4.248-1.307-7.87-3.871-10.814Zm-32.47 23.416c-.726-.724-1.113-1.545-1.113-2.414V77.09H488c4.739 0 8.369 1.207 10.886 3.62c2.516 2.415 3.775 5.553 3.775 9.416c0 2.317-.584 4.587-1.644 6.663c-1.114 2.124-2.763 3.814-4.985 5.118c-2.18 1.303-4.889 1.98-8.032 1.98h-9.923c-.87 0-1.645-.339-2.419-1.063Zm-1.064-30.707V51.405c0-.869.338-1.641 1.112-2.414c.726-.724 1.549-1.11 2.42-1.11h6.388c4.594 0 7.984 1.159 10.115 3.38c2.126 2.269 3.191 5.166 3.191 8.738c0 3.67-1.017 6.615-2.999 8.836c-1.986 2.172-4.985 3.283-8.952 3.283h-11.275ZM208.27 63.825c-3.698-2.02-7.828-3.08-12.294-3.08c-4.348 0-8.423.959-12.004 2.92l-.289.16c-3.698 2.021-6.627 4.956-8.788 8.661c-2.16 3.705-3.265 8.036-3.265 12.847c0 4.812 1.104 9.143 3.265 12.848s5.09 6.64 8.788 8.66c3.698 2.021 7.828 3.08 12.293 3.08c4.349 0 8.424-.958 12.004-2.918l.29-.161c3.697-2.021 6.627-4.956 8.788-8.661c2.16-3.705 3.265-8.036 3.265-12.848c0-4.811-1.105-9.142-3.265-12.847c-2.161-3.705-5.09-6.64-8.788-8.66Zm3.553 21.508c0 5.919-1.44 10.73-4.322 14.195c-2.833 3.464-6.722 5.244-11.525 5.244c-4.716 0-8.552-1.717-11.372-5.06l-.152-.184c-2.882-3.465-4.323-8.276-4.323-14.195c0-5.81 1.39-10.554 4.167-14.004l.156-.19c2.832-3.464 6.723-5.245 11.524-5.245c4.803 0 8.692 1.78 11.525 5.245c2.882 3.465 4.322 8.276 4.322 14.194Zm166.631-21.508c-3.698-2.02-7.827-3.08-12.293-3.08c-4.348 0-8.424.959-12.004 2.92l-.29.16c-3.697 2.021-6.626 4.956-8.787 8.661c-2.161 3.705-3.266 8.036-3.266 12.847c0 4.812 1.105 9.143 3.266 12.848c2.16 3.705 5.09 6.64 8.788 8.66c3.697 2.021 7.827 3.08 12.293 3.08c4.348 0 8.424-.958 12.004-2.918l.29-.161c3.697-2.021 6.626-4.956 8.787-8.661c2.161-3.705 3.265-8.036 3.265-12.848c0-4.811-1.104-9.142-3.265-12.847c-2.16-3.705-5.138-6.64-8.788-8.66Zm3.554 21.508c0 5.919-1.441 10.73-4.322 14.195c-2.834 3.464-6.723 5.244-11.525 5.244c-4.717 0-8.553-1.717-11.372-5.06l-.153-.184c-2.881-3.465-4.322-8.276-4.322-14.195c0-5.858 1.389-10.556 4.166-14.004l.156-.19c2.833-3.464 6.723-5.245 11.525-5.245c4.802 0 8.691 1.78 11.525 5.245c2.833 3.465 4.322 8.276 4.322 14.194Zm-72.186-24.587c-3.87 0-7.4.821-10.592 2.465c-3.192 1.643-5.707 3.867-7.496 6.719a17.043 17.043 0 0 0-2.708 9.281c0 2.997.677 5.752 2.08 8.218c1.353 2.368 3.191 4.35 5.513 5.993l-6.916 9.378c-.87 1.16-.967 2.707-.339 3.964c.677 1.305 1.935 2.078 3.386 2.078h1.983c-1.854 1.251-3.353 2.724-4.411 4.46l-.136.229c-1.257 2.078-1.886 4.254-1.886 6.477c0 4.083 1.773 7.467 5.272 10.013l.193.138c3.58 2.562 8.609 3.867 14.944 3.867c4.401 0 8.609-.725 12.43-2.127c3.758-1.361 6.831-3.362 9.132-5.956l.2-.23c2.37-2.708 3.58-5.995 3.58-9.765c0-3.964-1.451-6.768-4.836-9.474c-2.902-2.272-7.448-3.48-13.107-3.48h-19.344a.139.139 0 0 1-.077-.032l-.02-.017l-.009-.02c-.01-.031-.026-.09.009-.125l5.03-6.767a17.789 17.789 0 0 0 3.724 1.256c1.16.242 2.466.339 3.917.339c4.062 0 7.738-.822 10.93-2.465c3.192-1.644 5.755-3.867 7.593-6.72c1.837-2.803 2.756-5.945 2.756-9.28c0-3.577-1.74-10.103-6.48-13.438c0-.03.017-.041.031-.046l.017-.003l10.398 1.16v-4.785h-16.637c-2.611-.822-5.32-1.305-8.124-1.305Zm5.803 30.26c-1.838.966-3.82 1.498-5.803 1.498c-3.24 0-6.094-1.16-8.512-3.432c-2.418-2.272-3.627-5.607-3.627-9.861c0-4.254 1.209-7.59 3.627-9.861c2.418-2.272 5.271-3.432 8.512-3.432c1.946 0 3.804.444 5.573 1.374l.23.124c1.838.967 3.337 2.466 4.546 4.448c1.16 1.982 1.79 4.447 1.79 7.347c0 2.949-.581 5.414-1.79 7.347c-1.16 1.982-2.708 3.48-4.546 4.447Zm-13.106 17.788h13.106c3.627 0 5.949.725 7.496 2.272c1.548 1.547 2.321 3.625 2.321 6.042c0 3.529-1.402 6.43-4.207 8.604c-2.805 2.176-6.577 3.287-11.22 3.287c-4.063 0-7.448-.918-9.915-2.658c-2.466-1.74-3.723-4.4-3.723-7.783c0-2.127.58-4.109 1.741-5.849c1.16-1.74 2.563-2.997 4.4-3.915Z"
      />
    </svg>
  )
}

export function MYSQL({ size = 46.95, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 349"
    >
      <path
        fill="#00758F"
        d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026c8.51-22.792 14.456-47.63 17.839-74.513h18.71c-8.045 43.766-18.656 75.57-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525c5.711 0 10.314-1.583 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505h19.406ZM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34c-.695-33.433-2.62-64.871-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176c-2.218 28.282-3.614 59.72-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346h24.485Z"
      />
      <path
        fill="#F29111"
        d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485c-4.683 1.387-9.836 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909Zm-93.88.172c10.957 0 20.92 2.932 29.894 8.775l-4.558 10.157c-7.679-3.264-15.25-4.903-22.716-4.903c-6.058 0-10.726 1.458-13.98 4.392c-3.272 2.908-5.296 6.65-5.296 11.212c0 7.01 4.994 13.089 14.215 18.225a816.32 816.32 0 0 1 9.031 5.011l.688.387l.345.194l.689.387l.344.194l.688.388c6.98 3.935 13.548 7.691 13.548 7.691c9.22 6.545 13.816 13.523 13.816 25.016c0 10.037-3.678 18.276-11.01 24.723c-7.337 6.418-17.194 9.636-29.538 9.636c-11.545 0-22.734-3.704-33.572-11.05l5.07-10.166c9.327 4.675 17.767 7.01 25.346 7.01c7.108 0 12.672-1.587 16.697-4.721c4.017-3.157 6.424-7.56 6.424-13.143c0-7.027-4.888-13.034-13.855-18.073a897.982 897.982 0 0 1-8.395-4.697l-.687-.389c-1.262-.713-2.533-1.435-3.778-2.142l-.675-.384c-6.055-3.444-11.29-6.453-11.29-6.453c-8.964-6.557-13.459-13.592-13.459-25.184c0-9.587 3.352-17.336 10.046-23.231c6.71-5.908 15.367-8.862 25.968-8.862Zm175.895 1.584v103.788h37.238v14.558h-56.124V199.266h18.886Zm57.93 103.833v2.46h-4.094v12.04h-3.13v-12.04h-4.253v-2.46h11.478Zm7.56 0l3.931 9.884l3.611-9.884h4.437v14.5h-2.95v-11.035l-4.11 11.035h-2.127l-4.117-11.035h-.158v11.035h-2.791v-14.5h4.275ZM350.57 212.064c-18.066 0-27.104 14.91-27.104 44.71c0 17.07 2.395 29.448 7.176 37.163c4.428 7.14 11.363 10.703 20.806 10.703c18.066 0 27.103-15.026 27.103-45.064c0-16.831-2.395-29.103-7.17-36.822c-4.433-7.124-11.365-10.69-20.81-10.69Z"
      />
      <path
        fill="#00758F"
        d="M303.218 7.333c5.993-14.726 26.948-3.574 35.08 1.57c1.993 1.287 4.279 4.006 6.564 5.011c3.565.14 7.127.419 10.698.568c6.698 1.574 12.972 2.86 18.25 5.866c24.528 14.445 40.495 29.165 55.19 53.479c3.14 5.15 4.709 10.723 7.274 16.296c3.56 8.307 7.56 17.027 11.692 24.882c1.85 3.724 3.281 7.865 5.85 11.01c1.003 1.438 3.852 1.862 5.555 2.721c4.708 2.437 10.412 4.287 14.84 7.147c8.269 5.156 16.264 11.3 23.532 17.59c2.709 2.428 4.555 5.865 7.136 8.433v1.296c-2.291.703-4.574 1.423-6.859 2c-4.991 1.282-9.412.992-14.254 2.275c-2.992.868-6.707 2.013-9.845 2.304l.29.292c1.846 5.275 11.834 9.565 16.402 12.72c5.548 4.004 10.689 8.86 14.827 14.437c1.429 1.423 2.858 2.718 4.28 4.137c.994 1.438 1.274 3.298 2.28 4.58v.434c-1.114-.393-1.915-1.143-2.674-1.927l-.453-.473c-.453-.47-.91-.932-1.431-1.313c-3.148-2.15-6.274-4.722-9.422-6.721c-5.412-3.434-11.689-5.427-17.246-8.874c-3.142-2.001-6.137-4.28-9.132-6.57c-2.715-2.007-5.705-5.861-7.411-8.721c-1.005-1.58-1.143-3.437-2.291-4.58c.205-1.909 1.954-2.476 3.719-2.942l.406-.107c.609-.158 1.205-.316 1.725-.525c7.414-3.148 16.253-4.29 27.667-4.004c-.43-2.866-7.562-6.437-9.839-8.153c-4.57-3.294-9.409-6.731-14.257-9.729c-2.569-1.57-6.996-2.716-9.842-3.999c-3.851-1.574-12.41-3.147-14.544-6.145c-3.625-4.726-6.229-10.363-8.757-16.057l-.688-1.554a803.85 803.85 0 0 0-.69-1.553c-2.988-6.857-6.7-14.006-9.695-21.027c-1.566-3.425-2.285-6.431-4-9.716c-10.407-20.158-25.81-37.035-44.485-48.904c-6.137-3.862-12.98-7.436-20.534-9.865c-4.281-1.293-9.419-.578-13.98-1.57h-3.002c-2.562-.722-4.701-3.438-6.7-4.87c-4.415-2.998-8.837-5.011-14.117-7.15c-1.85-.858-7.133-2.856-8.977-1.283c-1.142.287-1.721.718-2.002 1.864c-1.136 1.71-.137 4.286.57 5.863c2.142 4.57 5.134 7.286 7.85 11.148c2.416 3.425 5.417 7.287 7.13 11.011c3.696 8.005 5.417 16.874 8.842 24.878c1.27 3.01 3.279 6.435 5.128 9.15c1.567 2.155 4.416 3.713 5.278 6.441c1.718 2.86-2.572 12.297-3.565 15.294c-3.715 11.727-2.995 28.028 1.283 38.193l.228.536l.228.543c1.562 3.723 3.234 7.732 7.387 8.773c.286-.284 0-.135.567-.284c1.005-7.868 1.288-15.445 4-21.601c1.567-3.849 4.696-6.57 6.841-9.712c1.43.856 1.43 3.437 2.282 5.145c1.856 4.43 3.849 9.287 6.137 13.73c4.696 9.15 9.98 18.021 15.967 26.025c2.005 2.859 4.85 6.006 7.416 8.581c1.143.997 2.423 1.573 3.282 2.856h.28v.432c-4.278-1.577-6.99-6.003-10.402-8.587c-6.424-4.857-14.117-12.151-18.545-19.15c-1.852-4.018-3.854-7.869-5.85-11.867v-.289c-.853 1.142-.567 2.276-.994 4.004c-1.852 7.145-.426 15.296-6.843 17.866c-7.274 3.01-12.7-4.857-14.977-8.432c-7.276-11.866-9.269-31.884-4.138-48.043c1.14-3.577 1.295-7.867 3.285-10.723c-.43-2.582-2.42-3.288-3.571-4.87c-1.996-2.704-3.705-5.854-5.268-8.857c-3.002-5.866-5.138-12.875-7.417-19.166c-1.002-2.569-1.289-5.148-2.288-7.58c-1.704-3.712-4.845-7.436-7.268-10.72c-3.281-4.72-12.837-13.868-8.985-23.168Zm46.772 28.015c.381.382.841.716 1.317 1.045l.574.394c.765.53 1.506 1.088 1.96 1.848c.72 1.006.854 1.999 1.716 3.007c0 3.437-.996 5.722-3.007 7.146c0 0-.137.15-.278.29c-1.14-2.291-2.139-4.57-3.287-6.859c-1.414-1.998-3.413-3.583-4.565-5.866h-.277v-.287c1.721-.425 3.428-.718 5.847-.718Z"
      />
    </svg>
  )
}

export function TAILWIND({ size = 46.95, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 154"
    >
      <defs>
        <linearGradient
          id="logosTailwindcssIcon0"
          x1="-2.778%"
          x2="100%"
          y1="32%"
          y2="67.556%"
        >
          <stop offset="0%" stopColor="#2298BD" />
          <stop offset="100%" stopColor="#0ED7B5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logosTailwindcssIcon0)"
        d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
      />
    </svg>
  )
}

export function SANITY({ size = 46.95, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="32"
      viewBox="0 0 512 104"
    >
      <path fill="#F37368" d="M381.462 36.986v64.834h-20.886V26.833z" />
      <path
        fill="#F7A199"
        d="m85.865 89.781l15.665 13.634l65.994-34.375l-6.817-16.39l-74.842 37.131Zm274.71-41.772l53.086-27.558l-8.992-15.52l-44.093 21.902v21.176Z"
      />
      <path
        fill="#F37368"
        d="M211.182 31.91v69.91h-20.016V2.176l20.016 29.733ZM85.865 89.78l15.665 13.634l30.169-75.422l-9.718-25.817L85.865 89.78Z"
      />
      <path
        fill="#F04939"
        d="M121.98 2.176h20.597l38.146 99.644h-21.176L121.98 2.176Zm92.248 0L258.176 70.2v31.619l-67.01-99.644h23.062Zm81.659 0h20.74v99.644h-20.74V2.176Zm64.689 18.275h-31.91V2.176h74.407l10.588 18.275h-53.085Z"
      />
      <path fill="#F7A199" d="M475.014 63.964v37.856h-20.596V63.964" />
      <path
        fill="#F04939"
        d="m489.228 2.176l-34.81 61.788h20.596L511.13 2.176z"
      />
      <path
        fill="#F37368"
        d="m454.418 63.964l-35.97-61.788h22.626l24.222 42.352z"
      />
      <path
        fill="#F04939"
        d="M8.558 13.779c0 13.78 8.557 22.046 25.672 26.398l18.13 4.206c16.245 3.771 26.108 13.054 26.108 28.138c.145 6.527-2.03 12.909-5.947 18.13c0-15.084-7.832-23.206-26.543-28.138l-17.84-4.06C13.78 55.26 2.756 47.572 2.756 31.183c0-6.237 2.03-12.474 5.802-17.405"
      />
      <path
        fill="#F37368"
        d="M258.176 65.124V2.176h20.016v99.644h-20.016zM61.353 68.75c7.687 4.932 11.168 11.894 11.168 21.902c-6.527 8.267-17.695 12.763-30.894 12.763c-22.191 0-38-11.023-41.337-30.023h21.321c2.756 8.702 10.008 12.763 19.871 12.763c11.749.145 19.726-6.237 19.871-17.405M8.558 13.634C14.794 5.512 25.528.58 38.58.58c22.772 0 35.826 12.039 39.162 28.864H57.147c-2.32-6.672-7.978-11.894-18.276-11.894c-11.168.145-18.71 6.527-19.145 16.68c-7.474-4.122-11.459-12.184-11.168-20.596Z"
      />
    </svg>
  )
}

export function CHEVRON_LEFT({ size = 32, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={classProps}
    >
      <path
        fill="currentColor"
        d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"
      />
    </svg>
  )
}

export function CHEVRON_RIGHT({ size = 32, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={classProps}
    >
      <path
        fill="currentColor"
        d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
      />
    </svg>
  )
}

export function DEVTO({ size = 32, classProps }: Icon) {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={size}
      height={size}
      className={classProps}
    >
      <path
        fill="currentColor"
        d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
      ></path>
    </svg>
  )
}

export function VERCEL() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36.91"
      height="32"
      viewBox="0 0 256 222"
    >
      <path d="m128 0l128 221.705H0z" />
    </svg>
  )
}

export function REACT() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35.93"
      height="32"
      viewBox="0 0 256 228"
    >
      <path
        fill="#00D8FF"
        d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
      />
    </svg>
  )
}

export function Email({ size = 24, classProps }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={classProps}
    >
      <path
        fill="currentColor"
        d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6Zm-15.42 12L128 135.86L47.42 62ZM216 194H40a2 2 0 0 1-2-2V69.64l86 78.78a6 6 0 0 0 8.1 0L218 69.64V192a2 2 0 0 1-2 2Z"
      />
    </svg>
  )
}

export function PaperPlane({ size = 16, classProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={classProps}
    >
      <path
        fill="currentColor"
        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480v-83.6c0-4 1.5-7.8 4.2-10.7l167.6-182.9c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8l-88.3-44.2C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
      />
    </svg>
  )
}

export function DoubleDownIcon({ size = 98, classProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      className={classProps}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m.5 6.46l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14" />
        <path d="M.5 1.25L6.65 7.4a.5.5 0 0 0 .7 0l6.15-6.15" />
      </g>
    </svg>
  )
}

export function ArrowRightIcon({ size = 24, classProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={classProps}
    >
      <path
        fill="currentColor"
        d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"
      />
    </svg>
  )
}

export function TrendingUpArrowIcon({ size = 24, classProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={classProps}
    >
      <path
        fill="currentColor"
        d="M3.4 18L2 16.6l7.4-7.45l4 4L18.6 8H16V6h6v6h-2V9.4L13.4 16l-4-4l-6 6Z"
      />
    </svg>
  )
}
