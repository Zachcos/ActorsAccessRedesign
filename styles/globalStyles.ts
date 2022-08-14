import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/*** Reset***/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  overflow-x: hidden;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/*** End Reset ***/

/*** Font declaration ***/
@font-face {
  font-family: 'Circular Std';
  font-weight: 400;
  src: url('/fonts/CircularStd-Book.otf') format('opentype');
}
@font-face {
  font-family: 'Circular Std';
  font-weight: 400;
  font-style: italic;
  src: url('/fonts/CircularStd-BookItalic.otf') format('opentype');
}
@font-face {
  font-family: 'Circular Std';
  font-weight: 500;
  src: url('/fonts/CircularStd-Medium.otf') format('opentype');
}

@font-face {
  font-family: 'Circular Std';
  font-weight: 500;
  font-style: italic;
  src: url('/fonts/CircularStd-MediumItalic.otf') format('opentype');
}
@font-face {
  font-family: 'Circular Std';
  font-weight: 800;
  src: url('/fonts/CircularStd-Bold.otf') format('opentype');
}

@font-face {
  font-family: 'Circular Std';
  font-weight: 800;
  font-style: italic;
  src: url('/fonts/CircularStd-BoldItalic.otf') format('opentype');
}
@font-face {
  font-family: 'Circular Std';
  font-weight: 900;
  src: url('/fonts/CircularStd-Black.otf') format('opentype');
}

@font-face {
  font-family: 'Circular Std';
  font-weight: 900;
  font-style: italic;
  src: url('/fonts/CircularStd-BlackItalic.otf') format('opentype');
}
/*** End font declaration ***/

html {
  font-family: 'Circular Std', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
}
`;

export default GlobalStyle;
