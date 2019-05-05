export const PROPERTIES = [
  {
    name: "--*",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p id="firstParagraph">This paragraph should have a blue background and yellow text.</p>\n<p id="secondParagraph">This paragraph should have a yellow background and blue text.</p>\n<div id="container">\n  <p id="thirdParagraph">This paragraph should have a green background and yellow text.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
    definition:
      "Property names that are prefixed with --, like --example-name, represent custom properties that contain a value that can be used in other declarations using the var() function.",
    "css-property-name": "Custom properties (--*): CSS variables",
    syntax: `--somekeyword: left;\n--somecolor: #0000ff;\n--somecomplexvalue: 3px 6px rgb(20, 32, 54);`,
    "web-scraper-order": "1557089499-3293",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::after (:after)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="boring-text">Here is some plain old boring text.</p>\n<p>Here is some normal text that is neither boring nor exciting.</p>\n<p class="exciting-text">Contributing to MDN is easy and fun.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::after",
    definition:
      "In CSS, ::after creates a pseudo-element that is the last child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.",
    "css-property-name": "::after (:after)",
    syntax: "/* Add an arrow after links */\na::after {\n  content: ",
    "web-scraper-order": "1557090686-3852",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::backdrop",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
    definition:
      "The ::backdrop CSS pseudo-element is a box the size of the viewport which is rendered immediately beneath any element being presented in full-screen mode. This includes both elements which have been placed in full-screen mode using the Fullscreen API and <dialog> elements.",
    "css-property-name": "::backdrop",
    syntax:
      "/* Backdrop is only displayed when dialog is opened with dialog.showModal() */\ndialog::backdrop {\n  background: rgba(255,0,0,.25);\n}",
    "web-scraper-order": "1557090644-3833",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::before (:before)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<span class="ribbon">Notice where the orange box is.</span>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::before",
    definition:
      "In CSS, ::before creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.",
    "css-property-name": "CSS ::before (:before) pseudo-element",
    syntax: "/* Add a heart before links */\na::before {\n  content: ",
    "web-scraper-order": "1557090617-3820",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::cue",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::cue",
    definition: "",
    "css-property-name": "::cue",
    syntax: "::cue {\n  color: yellow;\n  font-weight: bold;\n}",
    "web-scraper-order": "1557090386-3710",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::first-letter (:first-letter)",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n  dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>\n<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>\n<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut\n  aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit\n  esse molestie consequat.</p>\n<p>-The beginning of a special punctuation mark.</p>\n<p>_The beginning of a special punctuation mark.</p>\n<p>\"The beginning of a special punctuation mark.</p>\n<p>'The beginning of a special punctuation mark.</p>\n<p>*The beginning of a special punctuation mark.</p>\n<p>#The beginning of a special punctuation mark.</p>\n<p>「特殊的汉字标点符号开头。</p>\n<p>《特殊的汉字标点符号开头。</p>\n<p>“特殊的汉字标点符号开头。</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter",
    definition:
      "The ::first-letter CSS pseudo-element applies styles to the first letter of the first line of a block-level element, but only when not preceded by other content (such as images or inline tables).",
    "css-property-name": "::first-letter (:first-letter)",
    syntax:
      "/* Selects the first letter of a <p> */\np::first-letter {\n  font-size: 130%;\n}",
    "web-scraper-order": "1557090316-3677",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::first-line (:first-line)",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Styles will only be applied to the first line of this paragraph.\nAfter that, all text will be styled like normal. See what I mean?</p>\n\n<span>The first line of this text will not receive special styling\nbecause it is not a block-level element.</span>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line",
    definition:
      "The ::first-line CSS pseudo-element applies styles to the first line of a block-level element. Note that the length of the first line depends on many factors, including the width of the element, the width of the document, and the font size of the text.",
    "css-property-name": "::first-line (:first-line)",
    syntax:
      "/* Selects the first line of a <p> */\np::first-line {\n  color: red;\n}",
    "web-scraper-order": "1557090314-3676",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::placeholder",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder",
    definition:
      "The ::placeholder CSS pseudo-element represents the placeholder text in an <input> or <textarea> element.",
    "css-property-name":
      "CSS ::placeholder — Selector to match an edit box's placeholder text",
    syntax: "::placeholder {\n  color: blue;\n  font-size: 1.5em;\n}",
    "web-scraper-order": "1557089861-3464",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::selection",
    "css-property-example-css": null,
    "css-property-example-html":
      "This text has special styles when you highlight it.\n<p>Also try selecting text in this paragraph.</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::selection",
    definition:
      "The ::selection CSS pseudo-element applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text).",
    "css-property-name": "::selection",
    syntax: "::selection {\n  background-color: cyan;\n}",
    "web-scraper-order": "1557089708-3390",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "::slotted",
    "css-property-example-css": null,
    "css-property-example-html":
      '<template id="person-template">\n  <div>\n    <h2>Personal ID Card</h2>\n    <slot name="person-name">NAME MISSING</slot>\n    <ul>\n      <li><slot name="person-age">AGE MISSING</slot></li>\n      <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>\n    </ul>\n  </div>\n</template>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted",
    definition:
      "The ::slotted() CSS pseudo-element represents any element that has been placed into a slot inside an HTML template (see Using templates and slots for more information).",
    "css-property-name": "::slotted()",
    syntax:
      "/* Selects any element placed inside a slot */\n::slotted(*) {\n  font-weight: bold;\n}\n\n/* Selects any <span> placed inside a slot */\n::slotted(span) {\n  font-weight: bold;\n}",
    "web-scraper-order": "1557089687-3381",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":active",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>This paragraph contains a link:\n  <a href="#">This link will turn red while you click on it.</a>\n  The paragraph will get a gray background while you click on it or the link.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:active",
    definition:
      'The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user. When using a mouse, "activation" typically starts when the user presses down the primary mouse button.',
    "css-property-name": ":active",
    syntax:
      "/* Selects any <a> that is being activated */\na:active {\n  color: red;\n}",
    "web-scraper-order": "1557090690-3854",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":checked",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <input type="radio" name="my-input" id="yes">\n  <label for="yes">Yes</label>\n\n  <input type="radio" name="my-input" id="no">\n  <label for="no">No</label>\n</div>\n\n<div>\n  <input type="checkbox" name="my-checkbox" id="opt-in">\n  <label for="opt-in">Check me!</label>\n</div>\n\n<select name="my-select" id="fruit">\n  <option value="opt1">Apples</option>\n  <option value="opt2">Grapes</option>\n  <option value="opt3">Pears</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:checked",
    definition:
      'The :checked CSS pseudo-class selector represents any radio (<input type="radio">), checkbox (<input type="checkbox">), or option (<option> in a <select>) element that is checked or toggled to an on state.',
    "css-property-name": ":checked",
    syntax:
      "/* Matches any checked/selected radio, checkbox, or option */\n:checked {\n  margin-left: 25px;\n  border: 1px solid blue;\n}",
    "web-scraper-order": "1557090449-3739",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":default",
    "css-property-example-css": null,
    "css-property-example-html":
      '<fieldset>\n  <legend>Favorite season</legend>\n\n  <input type="radio" name="season" id="spring">\n  <label for="spring">Spring</label>\n\n  <input type="radio" name="season" id="summer" checked>\n  <label for="summer">Summer</label>\n\n  <input type="radio" name="season" id="fall">\n  <label for="fall">Fall</label>\n\n  <input type="radio" name="season" id="winter">\n  <label for="winter">Winter</label>\n</fieldset>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:default",
    definition:
      "The :default CSS pseudo-class selects form elements that are the default in a group of related elements.",
    "css-property-name": ":default",
    syntax:
      "input:default {\n  box-shadow: 0 0 2px 1px coral;\n}\n\ninput:default + label {\n  color: coral;\n}",
    "web-scraper-order": "1557090378-3707",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":dir",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:dir",
    definition:
      "The :dir() CSS pseudo-class matches elements based on the directionality of the text contained in them.",
    "css-property-name": ":dir()",
    syntax:
      "/* Selects any element with right-to-left text */\n:dir(rtl) {\n  background-color: red;\n}",
    "web-scraper-order": "1557090372-3704",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":disabled",
    "css-property-example-css": null,
    "css-property-example-html":
      '<form action="#">\n  <fieldset id="shipping">\n    <legend>Shipping address</legend>\n    <input type="text" placeholder="Name">\n    <input type="text" placeholder="Address">\n    <input type="text" placeholder="Zip Code">\n  </fieldset>\n  <br>\n  <fieldset id="billing">\n    <legend>Billing address</legend>\n    <label for="billing-checkbox">Same as shipping address:</label>\n    <input type="checkbox" id="billing-checkbox" checked>\n    <br>\n    <input type="text" placeholder="Name" disabled>\n    <input type="text" placeholder="Address" disabled>\n    <input type="text" placeholder="Zip Code" disabled>\n  </fieldset>\n</form>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled",
    definition:
      "The :disabled CSS pseudo-class represents any disabled element. An element is disabled if it can't be activated (selected, clicked on, typed into, etc.) or accept focus. The element also has an enabled state, in which it can be activated or accept focus.",
    "css-property-name": ":disabled",
    syntax:
      "/* Selects any disabled <input> */\ninput:disabled {\n  background: #ccc;\n}",
    "web-scraper-order": "1557090368-3702",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":empty",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="box"><!-- I will be lime. --></div>\n<div class="box">I will be pink.</div>\n<div class="box">\n    <!-- I will be pink in older browsers because of the whitespace around this comment. -->\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:empty",
    definition:
      "The :empty CSS pseudo-class represents any element that has no children. Children can be either element nodes or text (including whitespace). Comments, processing instructions, and CSS content do not affect whether an element is considered empty.",
    "css-property-name": ":empty",
    syntax:
      "/* Selects any <div> that contains no content */\ndiv:empty {\n  background: lime;\n}",
    "web-scraper-order": "1557090337-3687",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":enabled",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled",
    definition:
      "The :enabled CSS pseudo-class represents any enabled element. An element is enabled if it can be activated (selected, clicked on, typed into, etc.) or accept focus. The element also has a disabled state, in which it can't be activated or accept focus.",
    "css-property-name": ":enabled",
    syntax:
      "/* Selects any enabled <input> */\ninput:enabled {\n  color: blue;\n}",
    "web-scraper-order": "1557090332-3685",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":first",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>First Page.</p>\n<p>Second Page.</p>\n<button>Print!</button>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:first",
    definition:
      "The :first CSS pseudo-class, used with the  @page at-rule, represents the first page of a printed document.",
    "css-property-name": ":first",
    syntax:
      "/* Selects the first page when printing */\n@page :first {\n  margin-left: 50%;\n  margin-top: 50%;\n}",
    "web-scraper-order": "1557090320-3679",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":first-child",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  <p>This text is selected!</p>\n  <p>This text isn't selected.</p>\n</div>\n\n<div>\n  <h2>This text isn't selected: it's not a `p`.</h2>\n  <p>This text isn't selected.</p>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child",
    definition:
      "The :first-child CSS pseudo-class represents the first element among a group of sibling elements.",
    "css-property-name": ":first-child",
    syntax:
      "/* Selects any <p> that is the first element\n   among its siblings */\np:first-child {\n  color: lime;\n}",
    "web-scraper-order": "1557090318-3678",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":first-of-type",
    "css-property-example-css": null,
    "css-property-example-html":
      "<h2>Heading</h2>\n<p>Paragraph 1</p>\n<p>Paragraph 2</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type",
    definition:
      "The :first-of-type CSS pseudo-class represents the first element of its type among a group of sibling elements.",
    "css-property-name": ":first-of-type",
    syntax:
      "/* Selects any <p> that is the first element\n   of its type among its siblings */\np:first-of-type {\n  color: red;\n}",
    "web-scraper-order": "1557090312-3675",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":focus",
    "css-property-example-css": null,
    "css-property-example-html":
      '<input class="red-input" value="I\'ll be red when focused."><br>\n<input class="blue-input" value="I\'ll be blue when focused.">',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus",
    definition:
      'The :focus CSS pseudo-class represents an element (such as a form input) that has received focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard\'s "tab" key.',
    "css-property-name": ":focus",
    syntax:
      "/* Selects any <input> when focused */\ninput:focus {\n  color: red;\n}",
    "web-scraper-order": "1557090289-3664",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":fullscreen",
    "css-property-example-css": null,
    "css-property-example-html":
      '<h1>MDN Web Docs Demo: :fullscreen pseudo-class</h1>\n\n<p>This demo uses the <code>:fullscreen</code> pseudo-class to automatically\n  change the style of a button used to toggle full-screen mode on and off,\n  entirely using CSS.</p>\n\n<button id="fs-toggle">Toggle Fullscreen</button>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen",
    definition:
      "The :fullscreen CSS pseudo-class matches every element which is currently in full-screen mode. If multiple elements have been put into full-screen mode, this selects them all.",
    "css-property-name": ":fullscreen",
    syntax: "#fs-toggle:not(:fullscreen) {\n  background-color: #afa;\n}",
    "web-scraper-order": "1557090221-3635",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":hover",
    "css-property-example-css": null,
    "css-property-example-html": '<a href="#">Try hovering over this link.</a>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
    definition:
      "The :hover CSS pseudo-class matches when the user interacts with an element with a pointing device, but does not necessarily activate it. It is generally triggered when the user hovers over an element with the cursor (mouse pointer).",
    "css-property-name": ":hover",
    syntax:
      '/* Selects any <a> element when "hovered" */\na:hover {\n  color: orange;\n}',
    "web-scraper-order": "1557090169-3611",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":in-range",
    "css-property-example-css": null,
    "css-property-example-html":
      '<form action="" id="form1">\n  <ul>Values between 1 and 10 are valid.\n    <li>\n      <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">\n      <label for="value1">Your value is </label>\n    </li>\n  </ul>\n</form>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range",
    definition:
      "The :in-range CSS pseudo-class represents an <input> element whose current value is within the range limits specified by the min and max attributes.",
    "css-property-name": ":in-range",
    syntax:
      "/* Selects any <input>, but only when it has a range\n   specified, and its value is inside that range */\ninput:in-range {\n  background-color: rgba(0, 255, 0, 0.25);\n}",
    "web-scraper-order": "1557090142-3599",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":indeterminate",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <input type="checkbox" id="checkbox">\n  <label for="checkbox">This label starts out lime.</label>\n</div>\n<div>\n  <input type="radio" id="radio">\n  <label for="radio">This label starts out lime.</label>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate",
    definition:
      "The :indeterminate CSS pseudo-class represents any form element whose state is indeterminate.",
    "css-property-name": ":indeterminate",
    syntax:
      "/* Selects any <input> whose state is indeterminate */\ninput:indeterminate {\n  background: lime;\n}",
    "web-scraper-order": "1557090140-3598",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":invalid",
    "css-property-example-css": null,
    "css-property-example-html":
      '<form>\n  <label for="url_input">Enter a URL:</label>\n  <input type="url" id="url_input" />\n  <br />\n  <br />\n  <label for="email_input">Enter an email address:</label>\n  <input type="email" id="email_input" required/>\n</form>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid",
    definition:
      "The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate.",
    "css-property-name": ":invalid",
    syntax:
      "/* Selects any invalid <input> */\ninput:invalid {\n  background-color: pink;\n}",
    "web-scraper-order": "1557090113-3585",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":lang",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div lang="en"><q>This English quote has a <q>nested</q> quote inside.</q></div>\n<div lang="fr"><q>This French quote has a <q>nested</q> quote inside.</q></div>\n<div lang="de"><q>This German quote has a <q>nested</q> quote inside.</q></div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:lang",
    definition:
      "The :lang() CSS pseudo-class matches elements based on the language they are determined to be in.",
    "css-property-name": ":lang()",
    syntax:
      "/* Selects any <p> in English (en) */\np:lang(en) {\n  quotes: '\\201C' '\\201D' '\\2018' '\\2019';\n}",
    "web-scraper-order": "1557090096-3577",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":last-child",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  <p>This text isn't selected.</p>\n  <p>This text is selected!</p>\n</div>\n\n<div>\n  <p>This text isn't selected.</p>\n  <h2>This text isn't selected: it's not a `p`.</h2>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child",
    definition:
      "The :last-child CSS pseudo-class represents the last element among a group of sibling elements.",
    "css-property-name": ":last-child",
    syntax:
      "/* Selects any <p> that is the last element\n   among its siblings */\np:last-child {\n  color: lime;\n}",
    "web-scraper-order": "1557090094-3576",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":last-of-type",
    "css-property-example-css": null,
    "css-property-example-html":
      "<h2>Heading</h2>\n<p>Paragraph 1</p>\n<p>Paragraph 2</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type",
    definition:
      "The :last-of-type CSS pseudo-class represents the last element of its type among a group of sibling elements.",
    "css-property-name": ":last-of-type",
    syntax:
      "/* Selects any <p> that is the last element\n   of its type among its siblings */\np:last-of-type {\n  color: lime;\n}",
    "web-scraper-order": "1557090092-3575",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":left",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:left",
    definition:
      "The :left CSS pseudo-class, used with the @page at-rule, represents all left-hand pages of a printed document.",
    "css-property-name": ":left",
    syntax:
      "/* Selects any left-hand pages when printing */\n@page :left {\n  margin: 2in 3in;\n}",
    "web-scraper-order": "1557090088-3574",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":link",
    "css-property-example-css": null,
    "css-property-example-html":
      '<a href="#ordinary-target">This is an ordinary link.</a><br>\n<a href="">You\'ve already visited this link.</a><br>\n<a>Placeholder link (won\'t get styled)</a>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:link",
    definition:
      "The :link CSS pseudo-class represents an element that has not yet been visited. It matches every unvisited <a>, <area>, or <link> element that has an href attribute.",
    "css-property-name": ":link",
    syntax:
      "/* Selects any <a> that has not been visited yet */\na:link {\n  color: red;\n}",
    "web-scraper-order": "1557090072-3566",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":not",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>I am a paragraph.</p>\n<p class="fancy">I am so very fancy!</p>\n<div>I am NOT a paragraph.</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:not",
    definition:
      "The :not() CSS pseudo-class represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the negation pseudo-class.",
    "css-property-name": ":not()",
    syntax:
      "/* Selects any element that is NOT a paragraph */\n:not(p) {\n  color: blue;\n}",
    "web-scraper-order": "1557089968-3516",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":nth-child",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child",
    definition:
      "The :nth-child() CSS pseudo-class matches elements based on their position in a group of siblings.",
    "css-property-name": ":nth-child()",
    syntax:
      "/* Selects every fourth element\n   among any group of siblings */\n:nth-child(4n) {\n  color: lime;\n}",
    "web-scraper-order": "1557089966-3515",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":nth-last-child",
    "css-property-example-css": null,
    "css-property-example-html":
      "<table>\n  <tbody>\n    <tr>\n      <td>First line</td>\n    </tr>\n    <tr>\n      <td>Second line</td>\n    </tr>\n    <tr>\n      <td>Third line</td>\n    </tr>\n    <tr>\n      <td>Fourth line</td>\n    </tr>\n    <tr>\n      <td>Fifth line</td>\n    </tr>\n  </tbody>\n</table>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child",
    definition:
      "The :nth-last-child() CSS pseudo-class matches elements based on their position among a group of siblings, counting from the end.",
    "css-property-name": ":nth-last-child()",
    syntax:
      "/* Selects every fourth element\n   among any group of siblings,\n   counting backwards from the last one */\n:nth-last-child(4n) {\n  color: lime;\n}",
    "web-scraper-order": "1557089964-3514",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":nth-last-of-type",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  <span>This is a span.</span>\n  <span>This is another span.</span>\n  <em>This is emphasized.</em>\n  <span>Wow, this span gets limed!!!</span>\n  <strike>This is struck through.</strike>\n  <span>Here is one last span.</span>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type",
    definition:
      "The :nth-last-of-type() CSS pseudo-class matches elements of a given type, based on their position among a group of siblings, counting from the end.",
    "css-property-name": ":nth-last-of-type()",
    syntax:
      "/* Selects every fourth <p> element\n   among any group of siblings,\n   counting backwards from the last one */\np:nth-last-of-type(4n) {\n  color: lime;\n}",
    "web-scraper-order": "1557089962-3513",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":nth-of-type",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  <div>This element isn't counted.</div>\n  <p>1st paragraph.</p>\n  <p>2nd paragraph.</p>\n  <div>This element isn't counted.</div>\n  <p>3rd paragraph.</p>\n  <p>4th paragraph.</p>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type",
    definition:
      "The :nth-of-type() CSS pseudo-class matches elements of a given type, based on their position among a group of siblings.",
    "css-property-name": ":nth-of-type()",
    syntax:
      "/* Selects every fourth <p> element\n   among any group of siblings */\np:nth-of-type(4n) {\n  color: lime;\n}",
    "web-scraper-order": "1557089960-3512",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":only-child",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  <div>I am an only child.</div>\n</div>\n\n<div>\n  <div>I am the 1st sibling.</div>\n  <div>I am the 2nd sibling.</div>\n  <div>I am the 3rd sibling, <div>but this is an only child.</div></div>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child",
    definition:
      "The :only-child CSS pseudo-class represents an element without any siblings. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.",
    "css-property-name": ":only-child",
    syntax:
      "/* Selects each <p>, but only if it is the */\n/* only child of its parent */\np:only-child {\n  background-color: lime;\n}",
    "web-scraper-order": "1557089952-3508",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":only-of-type",
    "css-property-example-css": null,
    "css-property-example-html":
      "<main>\n  <div>I am `div` #1.</div>\n  <p>I am the only `p` among my siblings.</p>\n  <div>I am `div` #2.</div>\n  <div>I am `div` #3.\n    <i>I am the only `i` child.</i>\n    <em>I am `em` #1.</em>\n    <em>I am `em` #2.</em>\n  </div>\n</main>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type",
    definition:
      "The :only-of-type CSS pseudo-class represents an element that has no siblings of the same type.",
    "css-property-name": ":only-of-type",
    syntax:
      "/* Selects each <p>, but only if it is the */\n/* only <p> element inside its parent */\np:only-of-type {\n  background-color: lime;\n}",
    "web-scraper-order": "1557089950-3507",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":optional",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:optional",
    definition:
      "The :optional CSS pseudo-class represents any <input>, <select>, or <textarea> element that does not have the required attribute set on it.",
    "css-property-name": ":optional",
    syntax:
      "/* Selects any optional <input> */\ninput:optional {\n  border: 1px dashed black;\n}",
    "web-scraper-order": "1557089943-3504",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":out-of-range",
    "css-property-example-css": null,
    "css-property-example-html":
      '<form action="" id="form1">\n  <ul>Values between 1 and 10 are valid.\n    <li>\n      <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">\n      <label for="value1">Your value is </label>\n    </li>\n  </ul>\n</form>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range",
    definition:
      "The :out-of-range CSS pseudo-class represents an <input> element whose current value is outside the range limits specified by the min and max attributes.",
    "css-property-name": ":out-of-range",
    syntax:
      "/* Selects any <input>, but only when it has a range\n   specified, and its value is outside that range */\ninput:out-of-range {\n  background-color: rgba(255, 0, 0, 0.25);\n}",
    "web-scraper-order": "1557089931-3498",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":read-only",
    "css-property-example-css": null,
    "css-property-example-html":
      '<input type="text" value="Type whatever you want here.">\n<input type="text" value="This is a read-only field." readonly>\n<p>This is a normal paragraph.</p>\n<p contenteditable="true">You can edit this paragraph!</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only",
    definition:
      "The :read-only CSS pseudo-class represents an element (such as input or textarea) that is not editable by the user.",
    "css-property-name": ":read-only",
    syntax:
      "/* Selects any <input> element that is read-only */\n/* Supported in Firefox with a prefix */\ninput:-moz-read-only {\n  background-color: #ccc;\n}\n\n/* Supported in Blink/WebKit/Edge without a prefix */\ninput:read-only {\n  background-color: #ccc;\n}",
    "web-scraper-order": "1557089832-3450",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":read-write",
    "css-property-example-css": null,
    "css-property-example-html":
      '<input type="text" value="Type whatever you want here.">\n<input type="text" value="This is a read-only field." readonly>\n<p>This is a normal paragraph.</p>\n<p contenteditable="true">You can edit this paragraph!</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write",
    definition:
      "The :read-write CSS pseudo-class represents an element (such as input or textarea) that is editable by the user.",
    "css-property-name": ":read-write",
    syntax:
      "/* Selects any <input> element that is editable */\n/* Supported in Firefox with a prefix */\ninput:-moz-read-write {\n  background-color: #bbf;\n}\n\n/* Supported in Blink/WebKit/Edge without a prefix */\ninput:read-write {\n  background-color: #bbf;\n}",
    "web-scraper-order": "1557089830-3449",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":required",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:required",
    definition:
      "The :required CSS pseudo-class represents any <input>, <select>, or <textarea> element that has the required attribute set on it.",
    "css-property-name": ":required",
    syntax:
      "/* Selects any required <input> */\ninput:required {\n  border: 1px dashed red;\n}",
    "web-scraper-order": "1557089817-3443",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":right",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:right",
    definition:
      "The :right CSS pseudo-class, used with the @page at-rule, represents all right-hand pages of a printed document.",
    "css-property-name": ":right",
    syntax:
      "/* Selects any right-hand pages when printing */\n@page :right {\n  margin: 2in 3in;\n}",
    "web-scraper-order": "1557089805-3437",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":root",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:root",
    definition:
      "The :root CSS  pseudo-class matches the root element of a tree representing the document. In HTML, :root represents the <html> element and is identical to the selector html, except that its specificity is higher.",
    "css-property-name": ":root",
    syntax:
      "/* Selects the root element of the document:\n   <html> in the case of HTML */\n:root {\n  background: yellow;\n}",
    "web-scraper-order": "1557089801-3435",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":scope",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p id="para">\n  This is a paragraph. It is not an interesting paragraph. Sorry about that.\n</p>\n<p id="output"></p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:scope",
    definition:
      "The :scope CSS pseudo-class represents elements that are a reference point for selectors to match against.",
    "css-property-name": ":scope",
    syntax:
      "/* Selects a scoped element */\n:scope {\n  background-color: lime;\n}",
    "web-scraper-order": "1557089768-3419",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":target",
    "css-property-example-css": null,
    "css-property-example-html": '<section id="section2">Example</section>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:target",
    definition:
      "The :target CSS pseudo-class represents a unique element (the target element) with an id matching the URL's fragment.",
    "css-property-name": ":target",
    syntax:
      "/* Selects an element with an ID matching the current URL's fragment */\n:target {\n  border: 2px solid black;\n}",
    "web-scraper-order": "1557089650-3363",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":valid",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid",
    definition:
      "The :valid CSS pseudo-class represents any <input> or other <form> element whose contents validate successfully. This allows to easily make valid fields adopt an appearance that helps the user confirm that their data is formatted properly.",
    "css-property-name": ":valid",
    syntax:
      "/* Selects any valid <input> */\ninput:valid {\n  background-color: powderblue;\n}",
    "web-scraper-order": "1557089545-3315",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: ":visited",
    "css-property-example-css": null,
    "css-property-example-html":
      '<a href="#test-visited-link">Have you visited this link yet?</a><br>\n<a href="">You\'ve already visited this link.</a>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:visited",
    definition:
      "The :visited CSS pseudo-class represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.",
    "css-property-name": ":visited",
    syntax:
      "/* Selects any <a> that has been visited */\na:visited {\n  color: green;\n}",
    "web-scraper-order": "1557089532-3309",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<angle-percentage>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle-percentage",
    definition:
      "The <angle-percentage> CSS data type represents a value that can be either a <angle> or a <percentage>.",
    "css-property-name": "<angle-percentage>",
    syntax: null,
    "web-scraper-order": "1557090671-3846",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<angle>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    "css-property-name": "<angle>",
    syntax: null,
    "web-scraper-order": "1557090673-3847",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<basic-shape>",
    "css-property-example-css": null,
    "css-property-example-html": "<div></div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    "css-property-name": "<basic-shape>",
    syntax:
      "div {\n  width: 300px;\n  height: 300px;\n  background: repeating-linear-gradient(red, orange 50px);\n  clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  animation: 4s poly infinite alternate ease-in-out;\n  margin: 10px auto;\n}\n\n@keyframes poly {\n  from {\n    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  }\n\n  to {\n    clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);\n  }\n}",
    "web-scraper-order": "1557090619-3821",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<blend-mode>",
    "css-property-example-css": null,
    "css-property-example-html": '<div id="div"></div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode",
    definition:
      "The <blend-mode> CSS data type describes how colors should appear when elements overlap. It is used in the background-blend-mode and mix-blend-mode properties.",
    "css-property-name": "<blend-mode>",
    syntax:
      "#div {\n  width: 300px;\n  height: 300px;\n  background: url('https://mdn.mozillademos.org/files/8543/br.png'),\n              url('https://mdn.mozillademos.org/files/8545/tr.png');\n  background-blend-mode: normal;\n}",
    "web-scraper-order": "1557090615-3819",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<color>",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div style="color:blue; border: 1px dashed currentColor;">\n  The color of this text is blue.\n  <div style="background:currentColor; height:9px;"></div>\n  This block is surrounded by a blue border.\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    "css-property-name": "<color>",
    syntax: null,
    "web-scraper-order": "1557090435-3732",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<counter>",
    "css-property-example-css": null,
    "css-property-example-html":
      "<h3>Introduction</h3>\n<h3>Body</h3>\n<h3>Conclusion</h3>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/counter",
    definition:
      "CSS counters let you adjust the appearance of content based on its location in a document. For example, you can use counters to automatically number the headings in a webpage. Counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules to track how many times they're used.",
    "css-property-name": "Using CSS counters",
    syntax:
      "body {\n  counter-reset: section;                     /* Set a counter named 'section', and its initial value is 0. */\n}\n\nh3::before {\n  counter-increment: section;                 /* Increment the value of section counter by 1 */\n  content: counter(section);                  /* Display the value of section counter */\n}",
    "web-scraper-order": "1557090402-3716",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<custom-ident>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident",
    definition:
      "The <custom-ident> CSS data type denotes an arbitrary user-defined string used as an identifier. It is case-sensitive, and certain values are forbidden in various contexts to prevent ambiguity.",
    "css-property-name": "<custom-ident>",
    syntax: null,
    "web-scraper-order": "1557090380-3708",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<dimension>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/dimension",
    definition:
      "The <dimension> CSS data type represents a <number> with a unit attached to it, for example 10px.",
    "css-property-name": "<dimension>",
    syntax: null,
    "web-scraper-order": "1557090374-3705",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<display-box>",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Visible text</p>\n<p class="secret">Invisible text</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display-box",
    definition:
      "These keywords define whether an element generates display boxes at all.",
    "css-property-name": "<display-box>",
    syntax: "p.secret {\n  display: none;\n}",
    "web-scraper-order": "1557090363-3700",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<display-inside>",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="box">\n  <div class="float">I am a floated box!</div>\n  <p>I am content inside the container.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display-inside",
    definition:
      "These keywords specify the element’s inner display type, which defines the type of formatting context that lays out its contents (assuming it is a non-replaced element). These keywords are used as values of the display property, and can be used for legacy purposes as a single keyword, or as defined in the Level 3 specification alongside a value from the <display-outside> keywords.",
    "css-property-name": "<display-inside>",
    syntax:
      ".box {\n    background-color: rgb(224, 206, 247);\n    border: 5px solid rebeccapurple;\n    display: flow-root;\n}\n\n.float {\n    float: left;\n    width: 200px;\n    height: 150px;\n    background-color: white;\n    border:1px solid black;\n    padding: 10px;\n}",
    "web-scraper-order": "1557090361-3699",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<display-internal>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display-internal",
    definition:
      'Some layout models such as table and ruby have a complex internal structure, with several different roles that their children and descendants can fill. This page defines those "internal" display values, which only have meaning within that particular layout mode.',
    "css-property-name": "<display-internal>",
    syntax: null,
    "web-scraper-order": "1557090359-3698",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<display-legacy>",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="container">\n  <div>Flex Item</div> \n  <div>Flex Item</div>    \n</div> \n\nNot a flex item',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display-legacy",
    definition:
      "CSS 2 used a single-keyword syntax for the display property, requiring separate keywords for block-level and inline-level variants of the same layout mode. This page details those values.",
    "css-property-name": "<display-legacy>",
    syntax: ".container {\n  display: inline-flex;\n}",
    "web-scraper-order": "1557090357-3697",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<display-listitem>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display-listitem",
    definition:
      "The list-item keyword causes the element to generate a ::marker pseudo-element with the content specified by its list-style properties (for example a bullet point) together with a principal box of the specified type for its own contents.",
    "css-property-name": "<display-listitem>",
    syntax:
      ".fake-list {\n  display: list-item;\n  list-style-position: inside;\n}",
    "web-scraper-order": "1557090355-3696",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<display-outside>",
    "css-property-example-css": null,
    "css-property-example-html": "<span>span 1</span>\n<span>span 2</span>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display-outside",
    definition:
      "The <display-outside> keywords specify the element’s outer display type, which is essentially its role in flow layout. These keywords are used as values of the display property, and can be used for legacy purposes as a single keyword, or as defined in the Level 3 specification alongside a value from the <display-inside> keywords.",
    "css-property-name": "<display-outside>",
    syntax:
      "span {\n    display: block;\n    border: 1px solid rebeccapurple;\n}",
    "web-scraper-order": "1557090353-3695",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<filter-function>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function",
    definition:
      "The <filter-function> CSS data type represents a graphical effect that can change the appearance of an input image. It is used in the filter and backdrop-filter properties.",
    "css-property-name": "<filter-function>",
    syntax: null,
    "web-scraper-order": "1557090322-3680",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<flex>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value",
    definition:
      "The <flex> CSS data type denotes a flexible length within a grid container. It is used in grid-template-columns, grid-template-rows and other related properties.",
    "css-property-name": "<flex>",
    syntax:
      "1fr    /* Using an integer value */\n2.5fr  /* Using a float value */",
    "web-scraper-order": "1557090308-3673",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<frequency-percentage>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/frequency-percentage",
    definition:
      "The <frequency-percentage> CSS data type represents a value that can be either a <frequency> or a <percentage>.",
    "css-property-name": "<frequency-percentage>",
    syntax: null,
    "web-scraper-order": "1557090223-3636",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<frequency>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/frequency",
    definition:
      "The <frequency> CSS data type represents a frequency dimension, such as the pitch of a speaking voice. It is not currently used in any CSS properties.",
    "css-property-name": "<frequency>",
    syntax: null,
    "web-scraper-order": "1557090225-3637",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<gradient>",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="linear-gradient">Linear gradient</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient",
    definition:
      "The <gradient> CSS data type is a special type of <image> that consists of a progressive transition between two or more colors.",
    "css-property-name": "<gradient>",
    syntax: "div {\n  width: 240px;\n  height: 80px;\n}",
    "web-scraper-order": "1557090214-3632",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<image>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image",
    definition:
      "The <image> CSS data type represents a two-dimensional image. There are two kinds of images: plain images, referenced with a <url>, and dynamically-generated images, generated with <gradient> or element(). Additional CSS image functions include image(), image-set(), and cross-fade(). Images can be used with numerous CSS properties, such as background-image, border-image, content, cursor, and list-style-image.",
    "css-property-name": "<image>",
    syntax:
      "url(test.jpg)               /* A <url>, as long as test.jpg is an actual image */\nlinear-gradient(blue, red)  /* A <gradient> */\nelement(#realid)            /* A part of the webpage, referenced with the element() function,\n                               if \"realid\" is an existing ID on the page */ \nimage(ltr 'arrow.png#xywh=0,0,16,16', red) \n                            /* A section 16x16 section of <url>, starting from the top, left of the original\n                               image as long as arrow.png is a supported image, otherwise a solid \n                               red swatch. If language is rtl, the image will be horizontally flipped. */ \ncross-fade(20% url(twenty.png), url(eighty.png)) \n                            /* cross faded images, with twenty being 20% opaque \n                               and eighty being 80% opaque. */ \nimage-set('test.jpg' 1x, 'test-2x.jpg' 2x)  \n                            /* a selection of images with varying resolutions */",
    "web-scraper-order": "1557090156-3606",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<integer>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/integer",
    definition:
      "The <integer> CSS data type is a special type of <number> that represents a whole number, whether positive or negative. Integers can be used in numerous CSS properties, such as column-count, counter-increment, grid-column, grid-row, and z-index.",
    "css-property-name": "<integer>",
    syntax: null,
    "web-scraper-order": "1557090115-3586",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<length-percentage>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage",
    definition:
      "The <length-percentage> CSS data type represents a value thatcan be either a <length> or a <percentage>.",
    "css-property-name": "<length-percentage>",
    syntax: null,
    "web-scraper-order": "1557090082-3571",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<length>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557090084-3572",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<number>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/number",
    definition: "",
    "css-property-name": "<number>",
    syntax: null,
    "web-scraper-order": "1557089958-3511",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<percentage>",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div style="background-color:blue;">\n  <div style="width:50%; margin-left:20%; background-color:lime;">\n    Width: 50%, Left margin: 20%\n  </div>\n  <div style="width:30%; margin-left:60%; background-color:pink;">\n    Width: 30%, Left margin: 60%\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/percentage",
    definition:
      "The <percentage> CSS data type represents a percentage value. It is often used to define a size as relative to an element's parent object. Numerous properties can use percentages, such as width, height, margin, padding, and font-size.",
    "css-property-name": "<percentage>",
    syntax: null,
    "web-scraper-order": "1557089875-3471",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<position>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position_value",
    definition:
      "The <position> CSS data type denotes a two-dimensional coordinate used to set a location relative to an element box. It is used in the background-position property.",
    "css-property-name": "<position>",
    syntax: null,
    "web-scraper-order": "1557089855-3461",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<ratio>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/ratio",
    definition:
      "The <ratio> CSS data type, used for describing aspect ratios in media queries, denotes the proportion between two unitless values.",
    "css-property-name": "<ratio>",
    syntax: "@media screen and (min-aspect-ratio: 16/9) { ... }",
    "web-scraper-order": "1557089834-3451",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<resolution>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    "css-property-name": "<resolution>",
    syntax: "@media print and (min-resolution: 300dpi) { ... }",
    "web-scraper-order": "1557089813-3441",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<shape>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/shape",
    definition:
      "The <shape> CSS data type defines the specific form (shape) of a region. The region represents the part of an element to which the clip property applies.",
    "css-property-name": "<shape>",
    syntax: "img.clip04 {\n  clip: rect(10px, 20px, 20px, 10px);\n}",
    "web-scraper-order": "1557089702-3388",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<string>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/string",
    definition:
      "The <string> CSS data type represents a sequence of characters. Strings are used in numerous CSS properties, such as content, font-family, and quotes.",
    "css-property-name": "<string>",
    syntax: null,
    "web-scraper-order": "1557089679-3377",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<time-percentage>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/time-percentage",
    definition:
      "The <time-percentage> CSS data type represents a value that can be either a <time> or a <percentage>.",
    "css-property-name": "<time-percentage>",
    syntax: null,
    "web-scraper-order": "1557089601-3342",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<time>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/time",
    definition:
      "The <time> CSS data type represents a time value expressed in seconds or milliseconds. It is used in animation, transition, and related properties.",
    "css-property-name": "<time>",
    syntax: null,
    "web-scraper-order": "1557089603-3343",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<timing-function>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function",
    definition:
      "The <timing-function> CSS data type denotes a mathematical function that describes how fast one-dimensional values change during animations. This lets you vary the animation's speed over the course of its duration.",
    "css-property-name": "<timing-function>",
    syntax:
      "/* The canonical Bézier curve with four <number> in the [0,1] range. */\ncubic-bezier(0.1, 0.7, 1.0, 0.1)   \n\n/* Using <integer> is valid as any <integer> is also a <number>. */\ncubic-bezier(0, 0, 1, 1)           \n\n/* Negative values for ordinates are valid, leading to bouncing effects.*/\ncubic-bezier(0.1, -0.6, 0.2, 0)    \n\n/* Values > 1.0 for ordinates are also valid. */\ncubic-bezier(0, 1.1, 0.8, 4)",
    "web-scraper-order": "1557089599-3341",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<transform-function>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function",
    definition:
      "The <transform-function> CSS data type represents a transformation that affects an element's appearance. Transformation functions can rotate, resize, distort, or move an element in 2D or 3D space. It is used in the transform property.",
    "css-property-name": "<transform-function>",
    syntax: null,
    "web-scraper-order": "1557089588-3336",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "<url>",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/url",
    definition:
      "The <url> CSS data type denotes a pointer to a resource, such as an image or a font. URLs can be used in numerous CSS properties, such as background-image, cursor, and list-style.",
    "css-property-name": "<url>",
    syntax:
      '.topbanner {\n  background: url("topbanner.png") #00D no-repeat fixed;\n}',
    "web-scraper-order": "1557089551-3318",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@annotation",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values#@annotation",
    definition:
      "The @font-feature-values CSS at-rule lets you use a common name in the font-variant-alternates property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.",
    "css-property-name": "@font-feature-values",
    syntax:
      '/* At-rule for "nice-style" in Font One */\n@font-feature-values Font One {\n  @styleset {\n    nice-style: 12;\n  }\n}\n\n/* At-rule for "nice-style" in Font Two */\n@font-feature-values Font Two {\n  @styleset {\n    nice-style: 4;\n  }\n} \n\n…\n\n/* Apply the at-rules with a single declaration */\n.nice-look {\n  font-variant-alternates: styleset(nice-style);\n}',
    "web-scraper-order": "1557090651-3836",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@bottom-center",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@page#page-margin-box-type",
    definition:
      "The @page CSS at-rule is used to modify some CSS properties when printing a document. You can't change all CSS properties with @page. You can only change the margins, orphans, widows, and page breaks of the document. Attempts to change any other CSS properties will be ignored.",
    "css-property-name": "@page",
    syntax: "@page {\n  margin: 1cm;\n}\n\n@page :first {\n  margin: 2cm;\n}",
    "web-scraper-order": "1557090480-3754",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@character-variant",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values#@character-variant",
    definition:
      "The @font-feature-values CSS at-rule lets you use a common name in the font-variant-alternates property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.",
    "css-property-name": "@font-feature-values",
    syntax:
      '/* At-rule for "nice-style" in Font One */\n@font-feature-values Font One {\n  @styleset {\n    nice-style: 12;\n  }\n}\n\n/* At-rule for "nice-style" in Font Two */\n@font-feature-values Font Two {\n  @styleset {\n    nice-style: 4;\n  }\n} \n\n…\n\n/* Apply the at-rules with a single declaration */\n.nice-look {\n  font-variant-alternates: styleset(nice-style);\n}',
    "web-scraper-order": "1557090456-3742",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@charset",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@charset",
    definition:
      "The @charset CSS at-rule specifies the character encoding used in the style sheet. It must be the first element in the style sheet and not be preceded by any character; as it is not a nested statement, it cannot be used inside conditional group at-rules. If several @charset at-rules are defined, only the first one is used, and it cannot be used inside a style attribute on an HTML element or inside the <style> element where the character set of the HTML page is relevant.",
    "css-property-name": "@charset",
    syntax: '@charset "utf-8";',
    "web-scraper-order": "1557090452-3740",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@counter-style",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style",
    definition:
      "The @counter-style CSS at-rule lets you define counter styles that are not part of the predefined set of styles. A @counter-style rule defines how to convert a counter value into a string representation.",
    "css-property-name": "@counter-style",
    syntax:
      '@counter-style thumbs {\n  system: cyclic;\n  symbols: "\\1F44D";\n  suffix: " ";\n}\n\nul {\n  list-style: thumbs;\n}',
    "web-scraper-order": "1557090394-3713",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@font-face",
    "css-property-example-css": null,
    "css-property-example-html":
      '<html>\n<head>\n  <title>Web Font Sample</title>\n  <style type="text/css" media="screen, print">\n    @font-face {\n      font-family: "Bitstream Vera Serif Bold";\n      src: url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf");\n    }\n    \n    body { font-family: "Bitstream Vera Serif Bold", serif }\n  </style>\n</head>\n<body>\n  This is Bitstream Vera Serif Bold.\n</body>\n</html>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face",
    definition:
      "The @font-face CSS at-rule specifies a custom font with which to display text; the font can be loaded from either a remote server or a locally-installed font on the user's own computer. If the local() function is provided, specifying a font name to look for on the user's computer, and the user agent finds a match, that local font is used. Otherwise, the font resource specified using the url() function is downloaded and used.",
    "css-property-name": "@font-face",
    syntax:
      '@font-face {\n  font-family: "Open Sans";\n  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),\n       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");\n}',
    "web-scraper-order": "1557090285-3662",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@font-feature-values",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values",
    definition:
      "The @font-feature-values CSS at-rule lets you use a common name in the font-variant-alternates property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.",
    "css-property-name": "@font-feature-values",
    syntax:
      '/* At-rule for "nice-style" in Font One */\n@font-feature-values Font One {\n  @styleset {\n    nice-style: 12;\n  }\n}\n\n/* At-rule for "nice-style" in Font Two */\n@font-feature-values Font Two {\n  @styleset {\n    nice-style: 4;\n  }\n} \n\n…\n\n/* Apply the at-rules with a single declaration */\n.nice-look {\n  font-variant-alternates: styleset(nice-style);\n}',
    "web-scraper-order": "1557090274-3658",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@import",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@import",
    definition:
      "The @import CSS at-rule is used to import style rules from other style sheets. These rules must precede all other types of rules, except @charset rules; as it is not a nested statement, @import cannot be used inside conditional group at-rules.",
    "css-property-name": "@import",
    syntax:
      '@import url("fineprint.css") print;\n@import url("bluish.css") speech;\n@import \'custom.css\';\n@import url("chrome://communicator/skin/");\n@import "common.css" screen;\n@import url(\'landscape.css\') screen and (orientation:landscape);',
    "web-scraper-order": "1557090146-3601",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@keyframes",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
    definition:
      "The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This gives more control over the intermediate steps of the animation sequence than transitions.",
    "css-property-name": "@keyframes",
    syntax:
      "@keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}",
    "web-scraper-order": "1557090098-3578",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@media",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media",
    definition:
      "The @media CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries.",
    "css-property-name": "@media",
    syntax:
      "/* At the top level of your code */\n@media screen and (min-width: 900px) {\n  article {\n    padding: 1rem 3rem;\n  }\n}\n\n/* Nested within another conditional at-rule */\n@supports (display: flex) {\n  @media screen and (min-width: 900px) {\n    article {\n      display: flex;\n    }\n  }\n}",
    "web-scraper-order": "1557089999-3531",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@namespace",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace",
    definition:
      "@namespace is an at-rule that defines XML namespaces to be used in a CSS style sheet. The defined namespaces can be used to restrict the universal, type, and attribute selectors to only select elements within that namespace. The @namespace rule is generally only useful when dealing with documents containing multiple namespaces—such as HTML5 with inline SVG or MathML, or XML that mixes multiple vocabularies.",
    "css-property-name": "@namespace",
    syntax:
      "@namespace url(http://www.w3.org/1999/xhtml);\n@namespace svg url(http://www.w3.org/2000/svg);\n\n/* This matches all XHTML <a> elements, as XHTML is the default unprefixed namespace */\na {}\n\n/* This matches all SVG <a> elements */\nsvg|a {}\n\n/* This matches both XHTML and SVG <a> elements */\n*|a {}",
    "web-scraper-order": "1557089972-3518",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@ornaments",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values#@ornaments",
    definition:
      "The @font-feature-values CSS at-rule lets you use a common name in the font-variant-alternates property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.",
    "css-property-name": "@font-feature-values",
    syntax:
      '/* At-rule for "nice-style" in Font One */\n@font-feature-values Font One {\n  @styleset {\n    nice-style: 12;\n  }\n}\n\n/* At-rule for "nice-style" in Font Two */\n@font-feature-values Font Two {\n  @styleset {\n    nice-style: 4;\n  }\n} \n\n…\n\n/* Apply the at-rules with a single declaration */\n.nice-look {\n  font-variant-alternates: styleset(nice-style);\n}',
    "web-scraper-order": "1557089937-3501",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@page",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@page",
    definition:
      "The @page CSS at-rule is used to modify some CSS properties when printing a document. You can't change all CSS properties with @page. You can only change the margins, orphans, widows, and page breaks of the document. Attempts to change any other CSS properties will be ignored.",
    "css-property-name": "@page",
    syntax: "@page {\n  margin: 1cm;\n}\n\n@page :first {\n  margin: 2cm;\n}",
    "web-scraper-order": "1557089885-3476",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@styleset",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values#@styleset",
    definition:
      "The @font-feature-values CSS at-rule lets you use a common name in the font-variant-alternates property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.",
    "css-property-name": "@font-feature-values",
    syntax:
      '/* At-rule for "nice-style" in Font One */\n@font-feature-values Font One {\n  @styleset {\n    nice-style: 12;\n  }\n}\n\n/* At-rule for "nice-style" in Font Two */\n@font-feature-values Font Two {\n  @styleset {\n    nice-style: 4;\n  }\n} \n\n…\n\n/* Apply the at-rules with a single declaration */\n.nice-look {\n  font-variant-alternates: styleset(nice-style);\n}',
    "web-scraper-order": "1557089677-3376",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@stylistic",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values#@stylistic",
    definition:
      "The @font-feature-values CSS at-rule lets you use a common name in the font-variant-alternates property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.",
    "css-property-name": "@font-feature-values",
    syntax:
      '/* At-rule for "nice-style" in Font One */\n@font-feature-values Font One {\n  @styleset {\n    nice-style: 12;\n  }\n}\n\n/* At-rule for "nice-style" in Font Two */\n@font-feature-values Font Two {\n  @styleset {\n    nice-style: 4;\n  }\n} \n\n…\n\n/* Apply the at-rules with a single declaration */\n.nice-look {\n  font-variant-alternates: styleset(nice-style);\n}',
    "web-scraper-order": "1557089673-3374",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@supports",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports",
    definition:
      "The @supports CSS at-rule lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule.",
    "css-property-name": "@supports",
    syntax: "@supports (display: grid) {\n  div {\n    display: grid;\n  }\n}",
    "web-scraper-order": "1557089667-3371",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@swash",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-feature-values#@swash",
    definition:
      "The @font-feature-values CSS at-rule lets you use a common name in the font-variant-alternates property for features activated differently in OpenType. This can help simplify your CSS when using multiple fonts.",
    "css-property-name": "@font-feature-values",
    syntax:
      '/* At-rule for "nice-style" in Font One */\n@font-feature-values Font One {\n  @styleset {\n    nice-style: 12;\n  }\n}\n\n/* At-rule for "nice-style" in Font Two */\n@font-feature-values Font Two {\n  @styleset {\n    nice-style: 4;\n  }\n} \n\n…\n\n/* Apply the at-rules with a single declaration */\n.nice-look {\n  font-variant-alternates: styleset(nice-style);\n}',
    "web-scraper-order": "1557089665-3370",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "@viewport",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport",
    definition:
      'The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It\'s primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).',
    "css-property-name": "@viewport",
    syntax: "@viewport {\n  width: device-width;\n}",
    "web-scraper-order": "1557089536-3311",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "Hz",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/frequency#Hz",
    definition:
      "The <frequency> CSS data type represents a frequency dimension, such as the pitch of a speaking voice. It is not currently used in any CSS properties.",
    "css-property-name": "<frequency>",
    syntax: null,
    "web-scraper-order": "1557090179-3615",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "Q",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#Q",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089844-3456",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "additive-symbols (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="list">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/additive-symbols",
    definition:
      "The additive-symbols descriptor lets you specify symbols when the value of a counter system descriptor is additive. The additive-symbols descriptor defines additive tuples, each of which is a pair containing a symbol and a non-negative integer weight. The additive system is used to construct sign-value numbering systems such as Roman numerals.",
    "css-property-name": "additive-symbols",
    syntax:
      'additive-symbols: 3 "0";\nadditive-symbols: 3 "0", 2 "\\2E\\20";\nadditive-symbols: 3 "0", 2 url(symbol.png);',
    "web-scraper-order": "1557090688-3853",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "align-content",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container" class="flex">\n  <div id="item1">1</div>\n  <div id="item2">2</div>\n  <div id="item3">3</div>\n  <div id="item4">4</div>\n  <div id="item5">5</div>\n  <div id="item6">6</div>\n</div>\n\n<div class="row">\n  <label for="display">display: </label>\n  <select id="display">\n    <option value="flex">flex</option>\n    <option value="grid">grid</option>\n  </select>\n</div>\n\n<div class="row">\n  <label for="values">align-content: </label>\n  <select id="values">\n    <option value="normal">normal</option>\n    <option value="stretch">stretch</option>\n    <option value="flex-start">flex-start</option>\n    <option value="flex-end">flex-end</option>\n    <option value="center" selected>center</option>\n    <option value="space-between">space-between</option>\n    <option value="space-around">space-around</option>\n    <option value="space-evenly">space-evenly</option>\n\n    <option value="start">start</option>\n    <option value="end">end</option>\n    <option value="left">left</option>\n    <option value="right">right</option>\n\n    <option value="baseline">baseline</option>\n    <option value="first baseline">first baseline</option>\n    <option value="last baseline">last baseline</option>\n\n    <option value="safe center">safe center</option>\n    <option value="unsafe center">unsafe center</option>\n    <option value="safe right">safe right</option>\n    <option value="unsafe right">unsafe right</option>\n    <option value="safe end">safe end</option>\n    <option value="unsafe end">unsafe end</option>\n    <option value="safe flex-end">safe flex-end</option>\n    <option value="unsafe flex-end">unsafe flex-end</option>\n  </select>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
    definition:
      "The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
    "css-property-name": "align-content",
    syntax:
      "#container {\n  height:200px;\n  width: 240px;\n  align-content: center; /* Can be changed in the live sample */\n  background-color: #8c8c8c;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 50px);\n}\n\ndiv > div {\n  box-sizing: border-box;\n  border: 2px solid #8c8c8c;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#item1 {\n  background-color: #8cffa0;\n  min-height: 30px;\n}\n\n#item2 {\n  background-color: #a0c8ff;\n  min-height: 50px;\n}\n\n#item3 {\n  background-color: #ffa08c;\n  min-height: 40px;\n}\n\n#item4 {\n  background-color: #ffff8c;\n  min-height: 60px;\n}\n\n#item5 {\n  background-color: #ff8cff;\n  min-height: 70px;\n}\n\n#item6 {\n  background-color: #8cffff;\n  min-height: 50px;\n  font-size: 30px;\n}\n\nselect {\n  font-size: 16px;\n}\n\n.row {\n  margin-top: 10px;\n}",
    "web-scraper-order": "1557090684-3851",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "align-items",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container" class="flex">\n  <div id="item1">1</div>\n  <div id="item2">2</div>\n  <div id="item3">3</div>\n  <div id="item4">4</div>\n  <div id="item5">5</div>\n  <div id="item6">6</div>\n</div>\n\n<div class="row">\n  <label for="display">display: </label>\n  <select id="display">\n    <option value="flex">flex</option>\n    <option value="grid">grid</option>\n  </select>\n</div>\n\n<div class="row">\n  <label for="values">align-items: </label>\n  <select id="values">\n    <option value="normal">normal</option>\n    <option value="flex-start">flex-start</option>\n    <option value="flex-end">flex-end</option>\n    <option value="center" selected>center</option>\n    <option value="baseline">baseline</option>\n    <option value="stretch">stretch</option>\n\n    <option value="start">start</option>\n    <option value="end">end</option>\n    <option value="self-start">self-start</option>\n    <option value="self-end">self-end</option>\n    <option value="left">left</option>\n    <option value="right">right</option>\n\n    <option value="first baseline">first baseline</option>\n    <option value="last baseline">last baseline</option>\n\n    <option value="safe center">safe center</option>\n    <option value="unsafe center">unsafe center</option>\n    <option value="safe right">safe right</option>\n    <option value="unsafe right">unsafe right</option>\n    <option value="safe end">safe end</option>\n    <option value="unsafe end">unsafe end</option>\n    <option value="safe self-end">safe self-end</option>\n    <option value="unsafe self-end">unsafe self-end</option>\n    <option value="safe flex-end">safe flex-end</option>\n    <option value="unsafe flex-end">unsafe flex-end</option>\n  </select>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
    definition:
      "The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.",
    "css-property-name": "align-items",
    syntax:
      "#container {\n  height:200px;\n  width: 240px;\n  align-items: center; /* Can be changed in the live sample */\n  background-color: #8c8c8c;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 50px);\n}\n\ndiv > div {\n  box-sizing: border-box;\n  border: 2px solid #8c8c8c;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#item1 {\n  background-color: #8cffa0;\n  min-height: 30px;\n}\n\n#item2 {\n  background-color: #a0c8ff;\n  min-height: 50px;\n}\n\n#item3 {\n  background-color: #ffa08c;\n  min-height: 40px;\n}\n\n#item4 {\n  background-color: #ffff8c;\n  min-height: 60px;\n}\n\n#item5 {\n  background-color: #ff8cff;\n  min-height: 70px;\n}\n\n#item6 {\n  background-color: #8cffff;\n  min-height: 50px;\n  font-size: 30px;\n}\n\nselect {\n  font-size: 16px;\n}\n\n.row {\n  margin-top: 10px;\n}",
    "web-scraper-order": "1557090682-3850",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "align-self",
    "css-property-example-css": null,
    "css-property-example-html":
      "<section>\n  <div>Item #1</div>\n  <div>Item #2</div>\n  <div>Item #3</div>\n</section>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-self",
    definition:
      "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.",
    "css-property-name": "align-self",
    syntax:
      "/* Keyword values */ \nalign-self: auto; \nalign-self: normal; \n\n/* Positional alignment */ \n/* align-self does not take left and right values */\nalign-self: center; /* Put the item around the center */ \nalign-self: start; /* Put the item at the start */ \nalign-self: end; /* Put the item at the end */ \nalign-self: self-start; /* Align the item flush at the start */ \nalign-self: self-end; /* Align the item flush at the end */ \nalign-self: flex-start; /* Put the flex item at the start */ \nalign-self: flex-end; /* Put the flex item at the end */ \n\n/* Baseline alignment */ \nalign-self: baseline; \nalign-self: first baseline; \nalign-self: last baseline; \nalign-self: stretch; /* Stretch 'auto'-sized items to fit the container */ \n\n/* Overflow alignment */ \nalign-self: safe center; \nalign-self: unsafe center; \n\n/* Global values */ \nalign-self: inherit; \nalign-self: initial; \nalign-self: unset;",
    "web-scraper-order": "1557090680-3849",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "all",
    "css-property-example-css": null,
    "css-property-example-html":
      '<blockquote id="quote">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n</blockquote>\nPhasellus eget velit sagittis.',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/all",
    definition:
      "The all shorthand CSS property resets all of an element's properties (except unicode-bidi and direction). It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.",
    "css-property-name": "all",
    syntax:
      "body {\n  font-size: small;\n  background-color: #F0F0F0;\n  color: blue;\n}\n\nblockquote {\n  background-color: skyblue;\n  color: red;\n}",
    "web-scraper-order": "1557090677-3848",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="grid">\n  <div class="col">\n    <div class="note">\n      Given the following animation:\n      <pre>@keyframes slidein {\n  from { transform: scaleX(0); }\n  to   { transform: scaleX(1); }\n}</pre>\n    </div>\n    <div class="row">\n      <div class="cell">\n        <button class="play" title="PLAY"></button>\n      </div>\n      <div class="cell flx">\n        <div class="overlay">animation: 3s ease-in 1s 2 reverse both paused slidein;</div>\n        <div class="animation a1"></div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="cell">\n        <button class="pause" title="PAUSE"></button>\n      </div>\n      <div class="cell flx">\n        <div class="overlay">animation: 3s linear 1s slidein;</div>\n        <div class="animation a2"></div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="cell">\n        <button class="pause" title="PAUSE"></button>\n      </div>\n      <div class="cell flx">\n        <div class="overlay">animation: 3s slidein;</div>\n        <div class="animation a3"></div>\n      </div>\n    </div>\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation",
    definition:
      "The animation shorthand CSS property applies an animation between styles. It is a shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.",
    "css-property-name": "animation",
    syntax:
      "html,body {\n  height: 100%;\n  box-sizing: border-box;\n}\n\npre { margin-bottom: 0; }\nsvg { width: 1.5em; height: 1.5em; }\n\nbutton {\n  width: 27px;\n  height: 27px;\n  background-size: 16px;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\nbutton.play {\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#play');\n}\n\nbutton.pause {\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#pause');\n}\n\nbutton.restart {\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#restart');\n}\n\n.grid {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background: #EEE;\n  font: 1em monospace;\n}\n\n.row {\n  display: flex;\n  flex: 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.col {\n  display: flex;\n  flex: 1 auto;\n  flex-direction: column;\n}\n\n.cell {\n  box-sizing: border-box;\n  margin: .5em;\n  padding: 0;\n  background-color: #FFF;\n  overflow: hidden;\n  text-align: left;\n}\n\n.flx {\n  flex: 1 0;\n}\n\n.note {\n  background: #fff3d4;\n  padding: 1em;\n  margin: .5em;\n  font: .8em sans-serif;\n  text-align: left;\n  flex: none;\n}\n\n.overlay { padding: .5em; }\n\n@keyframes slidein {\n  from { transform: scaleX(0); }\n  to { transform: scaleX(1); }\n}\n\n.a1 { animation: 3s ease-in 1s 2 reverse both paused slidein; }\n.a2 { animation: 3s linear 1s slidein; }\n.a3 { animation: 3s slidein; }\n\n.animation {\n  background: #3F87A6;\n  width: 100%;\n  height: calc(100% - 1.5em);\n  transform-origin: left center;\n}",
    "web-scraper-order": "1557090669-3845",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-delay",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay",
    definition:
      "The animation-delay CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.",
    "css-property-name": "animation-delay",
    syntax: null,
    "web-scraper-order": "1557090667-3844",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-direction",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction",
    definition:
      "The animation-direction CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.",
    "css-property-name": "animation-direction",
    syntax:
      "/* Single animation */\nanimation-direction: normal;\nanimation-direction: reverse;\nanimation-direction: alternate;\nanimation-direction: alternate-reverse;\n\n/* Multiple animations */\nanimation-direction: normal, reverse;\nanimation-direction: alternate, reverse, normal;\n\n/* Global values */\nanimation-direction: inherit;\nanimation-direction: initial;\nanimation-direction: unset;",
    "web-scraper-order": "1557090665-3843",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-duration",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration",
    definition:
      "The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.",
    "css-property-name": "animation-duration",
    syntax: null,
    "web-scraper-order": "1557090663-3842",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-fill-mode",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Move your mouse over the gray box!</p>\n<div class="demo">\n <div class="growsandstays">This grows and stays big.</div>\n  <div class="grows">This just grows.</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode",
    definition:
      "The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution.",
    "css-property-name": "animation-fill-mode",
    syntax:
      "/* Single animation */\nanimation-fill-mode: none;\nanimation-fill-mode: forwards;\nanimation-fill-mode: backwards;\nanimation-fill-mode: both;\n\n/* Multiple animations */\nanimation-fill-mode: none, backwards;\nanimation-fill-mode: both, forwards, none;",
    "web-scraper-order": "1557090661-3841",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-iteration-count",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count",
    definition:
      "The animation-iteration-count CSS property sets the number of times an animation cycle should be played before stopping.",
    "css-property-name": "animation-iteration-count",
    syntax: null,
    "web-scraper-order": "1557090659-3840",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-name",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name",
    definition:
      "The animation-name CSS property sets one or more animations to apply to an element. Each name is an @keyframes at-rule that sets the property values for the animation sequence.",
    "css-property-name": "animation-name",
    syntax: null,
    "web-scraper-order": "1557090657-3839",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-play-state",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state",
    definition:
      "The animation-play-state CSS property sets whether an animation is running or paused.",
    "css-property-name": "animation-play-state",
    syntax: null,
    "web-scraper-order": "1557090655-3838",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "animation-timing-function",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function",
    definition:
      "The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.",
    "css-property-name": "animation-timing-function",
    syntax:
      "/* Keyword values */\nanimation-timing-function: ease;\nanimation-timing-function: ease-in;\nanimation-timing-function: ease-out;\nanimation-timing-function: ease-in-out;\nanimation-timing-function: linear;\nanimation-timing-function: step-start;\nanimation-timing-function: step-end;\n\n/* Function values */\nanimation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);\nanimation-timing-function: steps(4, end);\n\n/* Steps Function keywords */ \nanimation-timing-function: steps(4, jump-start);\nanimation-timing-function: steps(10, jump-end);\nanimation-timing-function: steps(20, jump-none);\nanimation-timing-function: steps(5, jump-both);\nanimation-timing-function: steps(6, start);\nanimation-timing-function: steps(8, end);\n\n/* Multiple animations */\nanimation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);\n\n/* Global values */\nanimation-timing-function: inherit;\nanimation-timing-function: initial;\nanimation-timing-function: unset;",
    "web-scraper-order": "1557090653-3837",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "annotation()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Firefox rocks!</p>\n<p class="variant">Firefox rocks!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#annotation()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    "css-property-name": "font-variant-alternates",
    syntax:
      '@font-feature-values "Leitura Display Swashes" {\n    @swash { fancy: 1 }\n}\n\np {\n  font-size: 1.5rem;\n}\n\n.variant {\n  font-family: Leitura Display Swashes;\n  font-variant-alternates: swash(fancy);\n}',
    "web-scraper-order": "1557090649-3835",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "attr()",
    "css-property-example-css": null,
    "css-property-example-html": '<p data-foo="hello">world</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/attr",
    definition:
      "The attr() CSS function is used to retrieve the value of an attribute of the selected element and use it in the stylesheet. It can also be used on pseudo-elements, in which case the value of the attribute on the pseudo-element's originating element is returned.",
    "css-property-name": "attr()",
    syntax:
      '/* Simple usage */\nattr(data-count);\nattr(title);\n\n/* With type */\nattr(src url);\nattr(data-count number);\nattr(data-width px);\n\n/* With fallback */\nattr(data-count number, 0);\nattr(src url, "");\nattr(data-width px, inherit);\nattr(data-something, "default");',
    "web-scraper-order": "1557090646-3834",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "backface-visibility",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tr>\n    <th><code>backface-visibility: visible;</code></th>\n    <th><code>backface-visibility: hidden;</code></th>\n  </tr>\n  <tr>\n    <td>\n      <div class="container">\n        <div class="cube showbf">\n          <div class="face front">1</div>\n          <div class="face back">2</div>\n          <div class="face right">3</div>\n          <div class="face left">4</div>\n          <div class="face top">5</div>\n          <div class="face bottom">6</div>\n        </div>\n      </div>\n      <p>\n        Since all faces are partially transparent,\n        the back faces (2, 4, 5) are visible\n        through the front faces (1, 3, 6).\n      </p>\n    </td>\n    <td>\n      <div class="container">\n        <div class="cube hidebf">\n          <div class="face front">1</div>\n          <div class="face back">2</div>\n          <div class="face right">3</div>\n          <div class="face left">4</div>\n          <div class="face top">5</div>\n          <div class="face bottom">6</div>\n        </div>\n      </div>\n      <p>\n        The three back faces (2, 4, 5) are\n        hidden.\n      </p>\n    </td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility",
    definition:
      "The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.",
    "css-property-name": "backface-visibility",
    syntax:
      '/* Classes that will show or hide the\n   three back faces of the "cube" */\n.showbf div {\n  backface-visibility: visible;\n}\n\n.hidebf div {\n  backface-visibility: hidden;\n}\n\n/* Define the container div, the cube div, and a generic face */\n.container {\n  width: 150px;\n  height: 150px;\n  margin: 75px 0 0 75px;\n  border: none;\n}\n\n.cube {\n  width: 100%;\n  height: 100%;\n  perspective: 550px;\n  perspective-origin: 150% 150%;\n  transform-style: preserve-3d;\n}\n\n.face {\n  display: block;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  border: none;\n  line-height: 100px;\n  font-family: sans-serif;\n  font-size: 60px;\n  color: white;\n  text-align: center;\n}\n\n/* Define each face based on direction */\n.front {\n  background: rgba(0, 0, 0, 0.3);\n  transform: translateZ(50px);\n}\n\n.back {\n  background: rgba(0, 255, 0, 1);\n  color: black;\n  transform: rotateY(180deg) translateZ(50px);\n}\n\n.right {\n  background: rgba(196, 0, 0, 0.7);\n  transform: rotateY(90deg) translateZ(50px);\n}\n\n.left {\n  background: rgba(0, 0, 196, 0.7);\n  transform: rotateY(-90deg) translateZ(50px);\n}\n\n.top {\n  background: rgba(196, 196, 0, 0.7);\n  transform: rotateX(90deg) translateZ(50px);\n}\n\n.bottom {\n  background: rgba(196, 0, 196, 0.7);\n  transform: rotateX(-90deg) translateZ(50px);\n}\n\n/* Make the table a little nicer */\nth, p, td {\n  background-color: #EEEEEE;\n  margin: 0px;\n  padding: 6px;\n  font-family: sans-serif;\n  text-align: left;\n}',
    "web-scraper-order": "1557090642-3832",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background",
    "css-property-example-css":
      '.warning { \n  background: pink; \n}\n\n.topbanner { \n  background: url("https://mdn.mozillademos.org/files/11983/starsolid.gif") #99f repeat-y fixed; \n}',
    "css-property-example-html":
      '<p class="topbanner">\n  Starry sky<br/>\n  Twinkle twinkle<br/>\n  Starry sky\n</p>\n<p class="warning">Here is a paragraph<p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background",
    definition:
      "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.",
    "css-property-name": "background",
    syntax:
      '/* Using a <background-color> */\nbackground: green;\n\n/* Using a <bg-image> and <repeat-style> */\nbackground: url("test.jpg") repeat-y;\n\n/* Using a <box> and <background-color> */\nbackground: border-box red;\n\n/* A single image, centered and scaled */\nbackground: no-repeat center/80% url("../img/image.png");',
    "web-scraper-order": "1557090640-3831",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-attachment",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>\n  There were doors all round the hall, but they were all locked; and when\n  Alice had been all the way down one side and up the other, trying every\n  door, she walked sadly down the middle, wondering how she was ever to\n  get out again.\n</p>",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment",
    definition:
      "The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.",
    "css-property-name": "background-attachment",
    syntax:
      "/* Keyword values */\nbackground-attachment: scroll;\nbackground-attachment: fixed;\nbackground-attachment: local;\n\n/* Global values */\nbackground-attachment: inherit;\nbackground-attachment: initial;\nbackground-attachment: unset;",
    "web-scraper-order": "1557090638-3830",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-blend-mode",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="div"></div>\n<select id="select">\n    <option>normal</option>\n    <option>multiply</option>\n    <option selected>screen</option>\n    <option>overlay</option>\n    <option>darken</option>\n    <option>lighten</option>\n    <option>color-dodge</option>\n    <option>color-burn</option>\n    <option>hard-light</option>\n    <option>soft-light</option>\n    <option>difference</option>\n    <option>exclusion</option>\n    <option>hue</option>\n    <option>saturation</option>\n    <option>color</option>\n    <option>luminosity</option>\n</select>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode",
    definition:
      "The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color.",
    "css-property-name": "background-blend-mode",
    syntax:
      "#div {\n    width: 300px;\n    height: 300px;\n    background: url('https://mdn.mozillademos.org/files/8543/br.png'),url('https://mdn.mozillademos.org/files/8545/tr.png');\n    background-blend-mode: screen;\n}",
    "web-scraper-order": "1557090636-3829",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-clip",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="border-box">The background extends behind the border.</p>\n<p class="padding-box">The background extends to the inside edge of the border.</p>\n<p class="content-box">The background extends only to the edge of the content box.</p>\n<p class="text">The background is clipped to the foreground text.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip",
    definition:
      "The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box.",
    "css-property-name": "background-clip",
    syntax:
      "p {\n  border: .8em darkviolet;\n  border-style: dotted double;\n  margin: 1em 0;\n  padding: 1.4em;\n  background: linear-gradient(60deg, red, yellow, red, yellow, red);\n  font: 900 1.2em sans-serif;\n  text-decoration: underline;\n}\n\n.border-box { background-clip: border-box; }\n.padding-box { background-clip: padding-box; }\n.content-box { background-clip: content-box; }\n\n.text {\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: rgba(0,0,0,.2);\n}",
    "web-scraper-order": "1557090634-3828",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="exampleone">\n  Lorem ipsum dolor sit amet, consectetuer\n</div>\n\n<div class="exampletwo">\n  Lorem ipsum dolor sit amet, consectetuer\n</div>\n\n<div class="examplethree">\n  Lorem ipsum dolor sit amet, consectetuer\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color",
    definition:
      "The background-color CSS property sets the background color of an element.",
    "css-property-name": "background-color",
    syntax:
      "/* Keyword values */\nbackground-color: red;\nbackground-color: indigo;\n\n/* Hexadecimal value */\nbackground-color: #bbff00;    /* Fully opaque */\nbackground-color: #bf0;       /* Fully opaque shorthand */\nbackground-color: #11ffee00;  /* Fully transparent */\nbackground-color: #1fe0;      /* Fully transparent shorthand  */\nbackground-color: #11ffeeff;  /* Fully opaque */\nbackground-color: #1fef;      /* Fully opaque shorthand  */\n\n/* RGB value */\nbackground-color: rgb(255, 255, 128);        /* Fully opaque */\nbackground-color: rgba(117, 190, 218, 0.5);  /* 50% transparent */\n\n/* HSL value */\nbackground-color: hsl(50, 33%, 25%);         /* Fully opaque */\nbackground-color: hsla(50, 33%, 25%, 0.75);  /* 75% transparent */\n\n/* Special keyword values */\nbackground-color: currentcolor;\nbackground-color: transparent;\n\n/* Global values */\nbackground-color: inherit;\nbackground-color: initial;\nbackground-color: unset;",
    "web-scraper-order": "1557090632-3827",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-image",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="catsandstars">\n    This paragraph is full of cats<br />and stars.\n  </p>\n  <p>This paragraph is not.</p>\n  <p class="catsandstars">\n    Here are more cats for you.<br />Look at them!\n  </p>\n  <p>And no more.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-image",
    definition:
      "The background-image CSS property sets one or more background images on an element.",
    "css-property-name": "CSS background-image property",
    syntax:
      "background-image:\n  linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),\n  url('https://mdn.mozillademos.org/files/7693/catfront.png');",
    "web-scraper-order": "1557090630-3826",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-origin",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin",
    definition:
      "The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.",
    "css-property-name": "background-origin",
    syntax:
      "/* Keyword values */\nbackground-origin: border-box;\nbackground-origin: padding-box;\nbackground-origin: content-box;\n\n/* Global values */\nbackground-origin: inherit;\nbackground-origin: initial;\nbackground-origin: unset;",
    "web-scraper-order": "1557090628-3825",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-position",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="exampleone">Example One</div>\n<div class="exampletwo">Example Two</div>\n<div class="examplethree">Example Three</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-position",
    definition:
      "The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.",
    "css-property-name": "background-position",
    syntax:
      "/* Keyword values */\nbackground-position: top;\nbackground-position: bottom;\nbackground-position: left;\nbackground-position: right;\nbackground-position: center;\n\n/* <percentage> values */\nbackground-position: 25% 75%;\n\n/* <length> values */\nbackground-position: 0 0;\nbackground-position: 1cm 2cm;\nbackground-position: 10ch 8em;\n\n/* Multiple images */\nbackground-position: 0 0, center;\n\n/* Edge offsets values */\nbackground-position: bottom 10px right 20px;\nbackground-position: right 3em bottom 10px;\nbackground-position: bottom 10px right;\nbackground-position: top right 10px;\n\n/* Global values */\nbackground-position: inherit;\nbackground-position: initial;\nbackground-position: unset;",
    "web-scraper-order": "1557090626-3824",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-repeat",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ol>\n  <li>no-repeat\n    <div class="one"></div>\n  </li>\n  <li>repeat\n    <div class="two"></div>\n  </li>\n  <li>repeat-x\n    <div class="three"></div>\n  </li>\n  <li>repeat-y\n    <div class="four"></div>\n  </li>\n  <li>space\n    <div class="five"></div>\n  </li>\n  <li>round\n    <div class="six"></div>\n  </li>\n  <li>repeat-x, repeat-y (multiple images)\n    <div class="seven"></div>\n  </li>\n</ol>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat",
    definition:
      "The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.",
    "css-property-name": "background-repeat",
    syntax:
      "/* Keyword values */\nbackground-repeat: repeat-x;\nbackground-repeat: repeat-y;\nbackground-repeat: repeat;\nbackground-repeat: space;\nbackground-repeat: round;\nbackground-repeat: no-repeat;\n\n/* Two-value syntax: horizontal | vertical */\nbackground-repeat: repeat space;\nbackground-repeat: repeat repeat;\nbackground-repeat: round space;\nbackground-repeat: no-repeat round;\n\n/* Global values */\nbackground-repeat: inherit;\nbackground-repeat: initial;\nbackground-repeat: unset;",
    "web-scraper-order": "1557090624-3823",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "background-size",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-size",
    definition:
      "The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.",
    "css-property-name": "background-size",
    syntax:
      "/* Keyword values */\nbackground-size: cover;\nbackground-size: contain;\n\n/* One-value syntax */\n/* the width of the image (height becomes 'auto') */\nbackground-size: 50%;\nbackground-size: 3.2em;\nbackground-size: 12px;\nbackground-size: auto;\n\n/* Two-value syntax */\n/* first value: width of the image, second value: height */\nbackground-size: 50% auto;\nbackground-size: 3em 25%;\nbackground-size: auto 6px;\nbackground-size: auto auto;\n\n/* Multiple backgrounds */\nbackground-size: auto, auto; /* Not to be confused with `auto auto` */\nbackground-size: 50%, 25%, 25%;\nbackground-size: 6px, auto, contain;\n\n/* Global values */\nbackground-size: inherit;\nbackground-size: initial;\nbackground-size: unset;",
    "web-scraper-order": "1557090622-3822",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "block-size",
    "css-property-example-css": null,
    "css-property-example-html": '<p class="exampleText">Example text</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/block-size",
    definition:
      "The block-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode.",
    "css-property-name": "block-size",
    syntax:
      ".exampleText {\n  writing-mode: vertical-rl;\n  background-color: yellow;\n  block-size: 200px;\n}",
    "web-scraper-order": "1557090613-3818",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "blur()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur",
    definition:
      "The blur() CSS function applies a Gaussian blur to the input image. Its result is a <filter-function>.",
    "css-property-name": "blur()",
    syntax:
      "blur(0)        /* No effect */\nblur(8px)      /* Blur with 8px radius */\nblur(1.17rem)  /* Blur with 1.17rem radius */",
    "web-scraper-order": "1557090611-3817",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>I have a border, an outline, AND a box shadow! Amazing, isn't it?</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border",
    definition:
      "The border shorthand CSS property sets an element's border. It sets the values of border-width, border-style, and border-color.",
    "css-property-name": "border",
    syntax:
      "/* style */\nborder: solid;\n\n/* width | style */\nborder: 2px dotted;\n\n/* style | color */\nborder: outset #f33;\n\n/* width | style | color */\nborder: medium dashed green;\n\n/* Global values */\nborder: inherit;\nborder: initial;\nborder: unset;",
    "web-scraper-order": "1557090609-3816",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block",
    definition: "",
    "css-property-name": "border-block",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  border-block: 5px dashed blue;\n}",
    "web-scraper-order": "1557090607-3815",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-color",
    definition:
      "The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-color",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 10px solid blue;\n  border-block-color: red;\n}",
    "web-scraper-order": "1557090605-3814",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end",
    definition: "",
    "css-property-name": "border-block-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  border-block-end: 5px dashed blue;\n}",
    "web-scraper-order": "1557090603-3813",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-end-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color",
    definition:
      "The border-block-end-color CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-end-color",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 10px solid blue;\n  border-block-end-color: red;\n}",
    "web-scraper-order": "1557090601-3812",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-end-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style",
    definition:
      "The border-block-end-style CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-end-style",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 5px solid blue;\n  border-block-end-style: dashed;\n}",
    "web-scraper-order": "1557090599-3811",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-end-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width",
    definition:
      "The border-block-end-width CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-end-width",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 1px solid blue;\n  border-block-end-width: 5px;\n}",
    "web-scraper-order": "1557090597-3810",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start",
    definition: "",
    "css-property-name": "border-block-start",
    syntax: null,
    "web-scraper-order": "1557090595-3809",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-start-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color",
    definition:
      "The border-block-start-color CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-start-color",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 10px solid blue;\n  border-block-start-color: red;\n}",
    "web-scraper-order": "1557090592-3808",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-start-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style",
    definition:
      "The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-start-style",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 5px solid blue;\n  border-block-start-style: dashed;\n}",
    "web-scraper-order": "1557090590-3807",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-start-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width",
    definition:
      "The border-block-start-width CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-start-width",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 1px solid blue;\n  border-block-start-width: 5px;\n}",
    "web-scraper-order": "1557090588-3806",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-style",
    definition:
      "The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-style",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 5px solid blue;\n  border-block-style: dashed;\n}",
    "web-scraper-order": "1557090586-3805",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-block-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-width",
    definition:
      "The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-block-width",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 1px solid blue;\n  border-block-width: 5px;\n}",
    "web-scraper-order": "1557090584-3804",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-bottom",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  This box has a border on the bottom side.\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom",
    definition:
      "The border-bottom shorthand CSS property sets an element's bottom border. It sets the values of border-bottom-width, border-bottom-style and border-bottom-color.",
    "css-property-name": "border-bottom",
    syntax: "border-bottom-style: dotted;\nborder-bottom: thick green;",
    "web-scraper-order": "1557090582-3803",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-bottom-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="mybox">\n  <p>This is a box with a border around it.\n     Note which side of the box is\n     <span class="redtext">red</span>.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color",
    definition:
      "The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.",
    "css-property-name": "border-bottom-color",
    syntax:
      "/* <color> values */\nborder-bottom-color: red;\nborder-bottom-color: #ffbb00;\nborder-bottom-color: rgb(255, 0, 0);\nborder-bottom-color: hsla(100%, 50%, 25%, 0.75);\nborder-bottom-color: currentColor;\nborder-bottom-color: transparent;\n\n/* Global values */\nborder-bottom-color: inherit;\nborder-bottom-color: initial;\nborder-bottom-color: unset;",
    "web-scraper-order": "1557090580-3802",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-bottom-left-radius",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius",
    definition:
      "The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.",
    "css-property-name": "border-bottom-left-radius",
    syntax: "div {\n  border-bottom-left-radius: 40px 40px;\n}",
    "web-scraper-order": "1557090578-3801",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-bottom-right-radius",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius",
    definition:
      "The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.",
    "css-property-name": "border-bottom-right-radius",
    syntax: "div {\n  border-bottom-right-radius: 40px 40px;\n}",
    "web-scraper-order": "1557090576-3800",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-bottom-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tr>\n    <td class="b1">none</td>\n    <td class="b2">hidden</td>\n    <td class="b3">dotted</td>\n    <td class="b4">dashed</td>\n  </tr>\n  <tr>\n    <td class="b5">solid</td>\n    <td class="b6">double</td>\n    <td class="b7">groove</td>\n    <td class="b8">ridge</td>\n  </tr>\n  <tr>\n    <td class="b9">inset</td>\n    <td class="b10">outset</td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style",
    definition:
      "The border-bottom-style CSS property sets the line style of an element's bottom border.",
    "css-property-name": "border-bottom-style",
    syntax:
      "/* Define look of the table */\ntable {\n  border-width: 3px;\n  background-color: #52E385;\n}\ntr, td {\n  padding: 3px;\n}\n\n/* border-bottom-style example classes */\n.b1 {border-bottom-style: none;}\n.b2 {border-bottom-style: hidden;}\n.b3 {border-bottom-style: dotted;}\n.b4 {border-bottom-style: dashed;}\n.b5 {border-bottom-style: solid;}\n.b6 {border-bottom-style: double;}\n.b7 {border-bottom-style: groove;}\n.b8 {border-bottom-style: ridge;}\n.b9 {border-bottom-style: inset;}\n.b10 {border-bottom-style: outset;}",
    "web-scraper-order": "1557090574-3799",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-bottom-width",
    "css-property-example-css": null,
    "css-property-example-html": "<div>Element 1</div>\n<div>Element 2</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width",
    definition:
      "The border-bottom-width CSS property sets the width of the bottom border of an element.",
    "css-property-name": "border-bottom-width",
    syntax:
      "div { \n  border: 1px solid red;\n  margin: 1em 0;\n}\n\ndiv:nth-child(1) {\n  border-bottom-width: thick;\n}\ndiv:nth-child(2) {\n  border-bottom-width: 2em;\n}",
    "web-scraper-order": "1557090572-3798",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-collapse",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table class="separate">\n  <caption><code>border-collapse: separate</code></caption>\n  <tbody>\n    <tr><th>Browser</th> <th>Layout Engine</th></tr>\n    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>\n    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>\n    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>\n    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>\n    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>\n  </tbody>\n</table>\n<table class="collapse">\n  <caption><code>border-collapse: collapse</code></caption>\n  <tbody>\n    <tr><th>Browser</th> <th>Layout Engine</th></tr>\n    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>\n    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>\n    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>\n    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>\n    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>\n  </tbody>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse",
    definition:
      "The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.",
    "css-property-name": "border-collapse",
    syntax:
      "/* Keyword values */\nborder-collapse: collapse;\nborder-collapse: separate;\n\n/* Global values */\nborder-collapse: inherit;\nborder-collapse: initial;\nborder-collapse: unset;",
    "web-scraper-order": "1557090570-3797",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="justone">\n  <p><code>border-color: red;</code> is equivalent to</p>\n  <ul><li><code>border-top-color: red;</code></li>\n    <li><code>border-right-color: red;</code></li>\n    <li><code>border-bottom-color: red;</code></li>\n    <li><code>border-left-color: red;</code></li>\n  </ul>\n</div>\n<div id="horzvert">\n  <p><code>border-color: gold red;</code> is equivalent to</p>\n  <ul><li><code>border-top-color: gold;</code></li>\n    <li><code>border-right-color: red;</code></li>\n    <li><code>border-bottom-color: gold;</code></li>\n    <li><code>border-left-color: red;</code></li>\n  </ul>\n</div>\n<div id="topvertbott">\n  <p><code>border-color: red cyan gold;</code> is equivalent to</p>\n  <ul><li><code>border-top-color: red;</code></li>\n    <li><code>border-right-color: cyan;</code></li>\n    <li><code>border-bottom-color: gold;</code></li>\n    <li><code>border-left-color: cyan;</code></li>\n  </ul>\n</div>\n<div id="trbl">\n  <p><code>border-color: red cyan black gold;</code> is equivalent to</p>\n  <ul><li><code>border-top-color: red;</code></li>\n    <li><code>border-right-color: cyan;</code></li>\n    <li><code>border-bottom-color: black;</code></li>\n    <li><code>border-left-color: gold;</code></li>\n  </ul>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-color",
    definition:
      "The border-color shorthand CSS property sets the color of an element's border.",
    "css-property-name": "border-color",
    syntax:
      "#justone {\n  border-color: red;\n}\n\n#horzvert {\n  border-color: gold red;\n}\n\n#topvertbott {\n  border-color: red cyan gold;\n}\n\n#trbl {\n  border-color: red cyan black gold;\n}\n\n/* Set width and style for all divs */\ndiv {\n  border: solid 0.3em;\n  width: auto;\n  margin: 0.5em;\n  padding: 0.5em;\n}\n\nul {\n  margin: 0;\n  list-style: none;\n}",
    "web-scraper-order": "1557090568-3796",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-end-end-radius",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius",
    definition: "",
    "css-property-name": "border-end-end-radius",
    syntax:
      "div {\n  background-color: rebeccapurple;\n  width: 120px;\n  height: 120px;\n  border-end-end-radius: 10px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  padding: 10px;\n  background-color: #fff;\n  border-end-end-radius: 10px;\n}",
    "web-scraper-order": "1557090566-3795",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-end-start-radius",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius",
    definition: "",
    "css-property-name": "border-end-start-radius",
    syntax:
      "div {\n  background-color: rebeccapurple;\n  width: 120px;\n  height: 120px;\n  border-end-start-radius: 10px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  padding: 10px;\n  background-color: #fff;\n  border-end-start-radius: 10px;\n}",
    "web-scraper-order": "1557090563-3794",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-image",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="bitmap">This element is surrounded by a bitmap-based border image!</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image",
    definition:
      "The border-image CSS property draws an image in place of an element's border-style.",
    "css-property-name": "border-image",
    syntax:
      '/* source | slice */\nborder-image: linear-gradient(red, blue) 27;\n\n/* source | slice | repeat */\nborder-image: url("/images/border.png") 27 space;\n\n/* source | slice | width */\nborder-image: linear-gradient(red, blue) 27 / 35px;\n\n/* source | slice | width | outset | repeat */\nborder-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;',
    "web-scraper-order": "1557090561-3793",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-image-outset",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="outset">This element has an outset border image!</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset",
    definition:
      "The border-image-outset CSS property sets the distance by which an element's border image is set out from its border box.",
    "css-property-name": "border-image-outset",
    syntax:
      "#outset {\n  width: 10rem;\n  background: #cef;\n  border: 1.4rem solid;\n  border-image: radial-gradient(#ff2, #55f) 40;\n  border-image-outset: 1.5;  /* 1.5 × 1.4rem = 2.1rem */\n  margin: 2.1rem;\n}",
    "web-scraper-order": "1557090559-3792",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-image-repeat",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="bordered">You can try out various border repetition rules on me!</div>\n\n<select id="repetition">\n  <option value="stretch">stretch</option>\n  <option value="repeat">repeat</option>\n  <option value="round">round</option>\n  <option value="space">space</option>\n  <option value="stretch repeat">stretch repeat</option>\n  <option value="space round">space round</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat",
    definition:
      "The border-image-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.",
    "css-property-name": "border-image-repeat",
    syntax:
      '#bordered {\n  width: 12rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border: 40px solid;\n  border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 27;\n  border-image-repeat: stretch;  /* Can be changed in the live sample */\n}',
    "web-scraper-order": "1557090557-3791",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-image-slice",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice",
    definition:
      "The border-image-slice CSS property divides the image specified by border-image-source into regions. These regions form the components of an element's border image.",
    "css-property-name": "border-image-slice",
    syntax: null,
    "web-scraper-order": "1557090555-3790",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-image-source",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source",
    definition:
      "The border-image-source CSS property sets the source image used to create an element's border image.",
    "css-property-name": "border-image-source",
    syntax: null,
    "web-scraper-order": "1557090553-3789",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-image-width",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n   eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,\n   no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width",
    definition:
      "The border-image-width CSS property sets the width of an element's border image.",
    "css-property-name": "border-image-width",
    syntax:
      'p {\n  border: 20px solid;\n  border-image: url("https://mdn.mozillademos.org/files/10470/border.png") 30 round;\n  border-image-width: 16px;\n  padding: 40px;\n}',
    "web-scraper-order": "1557090551-3788",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline",
    definition: "",
    "css-property-name": "border-inline",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  border-inline: 5px dashed blue;\n}",
    "web-scraper-order": "1557090549-3787",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-color",
    definition:
      "The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-color",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 10px solid blue;\n  border-inline-color: red;\n}",
    "web-scraper-order": "1557090547-3786",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end",
    definition: "",
    "css-property-name": "border-inline-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  border-inline-end: 5px dashed blue;\n}",
    "web-scraper-order": "1557090545-3785",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-end-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color",
    definition:
      "The border-inline-end-color CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-end-color",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 10px solid blue;\n  border-inline-end-color: red;\n}",
    "web-scraper-order": "1557090543-3784",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-end-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style",
    definition:
      "The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-end-style",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 5px solid blue;\n  border-inline-end-style: dashed;\n}",
    "web-scraper-order": "1557090541-3783",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-end-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width",
    definition:
      "The border-inline-end-width CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-end-width",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 1px solid blue;\n  border-inline-end-width: 5px;\n}",
    "web-scraper-order": "1557090539-3782",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start",
    definition: "",
    "css-property-name": "border-inline-start",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  border-inline-start: 5px dashed blue;\n}",
    "web-scraper-order": "1557090536-3781",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-start-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color",
    definition:
      "The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-start-color",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 10px solid blue;\n  border-inline-start-color: red;\n}",
    "web-scraper-order": "1557090534-3780",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-start-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style",
    definition:
      "The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-start-style",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 5px solid blue;\n  border-inline-start-style: dashed;\n}",
    "web-scraper-order": "1557090532-3779",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-start-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width",
    definition:
      "The border-inline-start-width CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-start-width",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 1px solid blue;\n  border-inline-start-width: 5px;\n}",
    "web-scraper-order": "1557090530-3778",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-style",
    definition:
      "The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-style",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 5px solid blue;\n  border-inline-style: dashed;\n}",
    "web-scraper-order": "1557090528-3777",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-inline-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-width",
    definition:
      "The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "border-inline-width",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  border: 1px solid blue;\n  border-inline-width: 5px 10px;\n}",
    "web-scraper-order": "1557090526-3776",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-left",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  This box has a border on the left side.\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left",
    definition:
      "The border-left shorthand CSS property set an element's left border.",
    "css-property-name": "border-left",
    syntax: "border-left-style: dotted;\nborder-left: thick green;",
    "web-scraper-order": "1557090524-3775",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-left-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="mybox">\n  <p>This is a box with a border around it.\n     Note which side of the box is\n     <span class="redtext">red</span>.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color",
    definition:
      "The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.",
    "css-property-name": "border-left-color",
    syntax:
      "/* <color> values */\nborder-left-color: red;\nborder-left-color: #ffbb00;\nborder-left-color: rgb(255, 0, 0);\nborder-left-color: hsla(100%, 50%, 25%, 0.75);\nborder-left-color: currentColor;\nborder-left-color: transparent;\n\n/* Global values */\nborder-left-color: inherit;\nborder-left-color: initial;\nborder-left-color: unset;",
    "web-scraper-order": "1557090522-3774",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-left-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tr>\n    <td class="b1">none</td>\n    <td class="b2">hidden</td>\n    <td class="b3">dotted</td>\n    <td class="b4">dashed</td>\n  </tr>\n  <tr>\n    <td class="b5">solid</td>\n    <td class="b6">double</td>\n    <td class="b7">groove</td>\n    <td class="b8">ridge</td>\n  </tr>\n  <tr>\n    <td class="b9">inset</td>\n    <td class="b10">outset</td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style",
    definition:
      "The border-left-style CSS property sets the line style of an element's left border.",
    "css-property-name": "border-left-style",
    syntax:
      "/* Define look of the table */\ntable {\n  border-width: 2px;\n  background-color: #52E385;\n}\ntr, td {\n  padding: 3px;\n}\n\n/* border-left-style example classes */\n.b1 {border-left-style: none;}\n.b2 {border-left-style: hidden;}\n.b3 {border-left-style: dotted;}\n.b4 {border-left-style: dashed;}\n.b5 {border-left-style: solid;}\n.b6 {border-left-style: double;}\n.b7 {border-left-style: groove;}\n.b8 {border-left-style: ridge;}\n.b9 {border-left-style: inset;}\n.b10 {border-left-style: outset;}",
    "web-scraper-order": "1557090520-3773",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-left-width",
    "css-property-example-css": null,
    "css-property-example-html": "<div>Element 1</div>\n<div>Element 2</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width",
    definition:
      "The border-left-width CSS property sets the width of the left border of an element.",
    "css-property-name": "border-left-width",
    syntax:
      "div { \n  border: 1px solid red;\n  margin: 1em 0;\n}\n\ndiv:nth-child(1) {\n  border-left-width: thick;\n}\ndiv:nth-child(2) {\n  border-left-width: 2em;\n}",
    "web-scraper-order": "1557090518-3772",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-radius",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius",
    definition:
      "The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.",
    "css-property-name": "border-radius",
    syntax:
      "/* The syntax of the first radius allows one to four values */\n/* Radius is set for all 4 sides */\nborder-radius: 10px;\n\n/* top-left-and-bottom-right | top-right-and-bottom-left */\nborder-radius: 10px 5%;\n\n/* top-left | top-right-and-bottom-left | bottom-right */\nborder-radius: 2px 4px 2px;\n\n/* top-left | top-right | bottom-right | bottom-left */\nborder-radius: 1px 0 3px 4px;\n\n/* The syntax of the second radius allows one to four values */\n/* (first radius values) / radius */\nborder-radius: 10px 5% / 20px;\n\n/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */\nborder-radius: 10px 5% / 20px 30px;\n\n/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */\nborder-radius: 10px 5px 2em / 20px 25px 30%;\n\n/* (first radius values) / top-left | top-right | bottom-right | bottom-left */\nborder-radius: 10px 5% / 20px 25em 30px 35em;\n\n/* Global values */\nborder-radius: inherit;\nborder-radius: initial;\nborder-radius: unset;",
    "web-scraper-order": "1557090516-3771",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-right",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  This box has a border on the right side.\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right",
    definition:
      "The border-right shorthand CSS property sets an element's right border. It sets the values of border-right-width, border-right-style and border-right-color.",
    "css-property-name": "border-right",
    syntax: "border-right-style: dotted;\nborder-right: thick green;",
    "web-scraper-order": "1557090514-3770",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-right-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="mybox">\n  <p>This is a box with a border around it.\n     Note which side of the box is\n     <span class="redtext">red</span>.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color",
    definition:
      "The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.",
    "css-property-name": "border-right-color",
    syntax:
      "/* <color> values */\nborder-right-color: red;\nborder-right-color: #ffbb00;\nborder-right-color: rgb(255, 0, 0);\nborder-right-color: hsla(100%, 50%, 25%, 0.75);\nborder-right-color: currentColor;\nborder-right-color: transparent;\n\n/* Global values */\nborder-right-color: inherit;\nborder-right-color: initial;\nborder-right-color: unset;",
    "web-scraper-order": "1557090512-3769",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-right-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tr>\n    <td class="b1">none</td>\n    <td class="b2">hidden</td>\n    <td class="b3">dotted</td>\n    <td class="b4">dashed</td>\n  </tr>\n  <tr>\n    <td class="b5">solid</td>\n    <td class="b6">double</td>\n    <td class="b7">groove</td>\n    <td class="b8">ridge</td>\n  </tr>\n  <tr>\n    <td class="b9">inset</td>\n    <td class="b10">outset</td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style",
    definition:
      "The border-right-style CSS property sets the line style of an element's right border.",
    "css-property-name": "border-right-style",
    syntax:
      "/* Define look of the table */\ntable {\n  border-width: 2px;\n  background-color: #52E385;\n}\ntr, td {\n  padding: 3px;\n}\n\n/* border-right-style example classes */\n.b1 {border-right-style: none;}\n.b2 {border-right-style: hidden;}\n.b3 {border-right-style: dotted;}\n.b4 {border-right-style: dashed;}\n.b5 {border-right-style: solid;}\n.b6 {border-right-style: double;}\n.b7 {border-right-style: groove;}\n.b8 {border-right-style: ridge;}\n.b9 {border-right-style: inset;}\n.b10 {border-right-style: outset;}",
    "web-scraper-order": "1557090510-3768",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-right-width",
    "css-property-example-css": null,
    "css-property-example-html": "<div>Element 1</div>\n<div>Element 2</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width",
    definition:
      "The border-right-width CSS property sets the width of the right border of an element.",
    "css-property-name": "border-right-width",
    syntax:
      "div { \n  border: 1px solid red;\n  margin: 1em 0;\n}\n\ndiv:nth-child(1) {\n  border-right-width: thick;\n}\ndiv:nth-child(2) {\n  border-right-width: 2em;\n}",
    "web-scraper-order": "1557090507-3767",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-spacing",
    "css-property-example-css": null,
    "css-property-example-html":
      "<table>\n  <tr>\n    <td>1</td><td>2</td><td>3</td>\n  </tr>\n  <tr>\n    <td>4</td><td>5</td><td>6</td>\n  </tr>\n  <tr>\n    <td>7</td><td>8</td><td>9</td>\n  </tr>\n</table>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing",
    definition:
      "The border-spacing CSS property sets the distance between the borders of adjacent <table> cells. This property applies only when border-collapse is separate.",
    "css-property-name": "border-spacing",
    syntax:
      "/* <length> */\nborder-spacing: 2px;\n\n/* horizontal <length> | vertical <length> */\nborder-spacing: 1cm 2em;\n\n/* Global values */\nborder-spacing: inherit;\nborder-spacing: initial;\nborder-spacing: unset;",
    "web-scraper-order": "1557090505-3766",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-start-end-radius",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius",
    definition: "",
    "css-property-name": "border-start-end-radius",
    syntax:
      "div {\n  background-color: rebeccapurple;\n  width: 120px;\n  height: 120px;\n  border-start-end-radius: 10px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  padding: 10px;\n  background-color: #fff;\n  border-start-end-radius: 10px;\n}",
    "web-scraper-order": "1557090503-3765",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-start-start-radius",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius",
    definition: "",
    "css-property-name": "border-start-start-radius",
    syntax:
      "div {\n  background-color: rebeccapurple;\n  width: 120px;\n  height: 120px;\n  border-start-start-radius: 10px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  padding: 10px;\n  background-color: #fff;\n  border-start-start-radius: 10px;\n}",
    "web-scraper-order": "1557090501-3764",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tr>\n    <td class="b1">none</td>\n    <td class="b2">hidden</td>\n    <td class="b3">dotted</td>\n    <td class="b4">dashed</td>\n  </tr>\n  <tr>\n    <td class="b5">solid</td>\n    <td class="b6">double</td>\n    <td class="b7">groove</td>\n    <td class="b8">ridge</td>\n  </tr>\n  <tr>\n    <td class="b9">inset</td>\n    <td class="b10">outset</td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-style",
    definition:
      "The border-style shorthand CSS property sets the line style for all four sides of an element's border.",
    "css-property-name": "border-style",
    syntax:
      "/* Keyword values */\nborder-style: none;\nborder-style: hidden;\nborder-style: dotted;\nborder-style: dashed;\nborder-style: solid;\nborder-style: double;\nborder-style: groove;\nborder-style: ridge;\nborder-style: inset;\nborder-style: outset;\n\n/* vertical | horizontal */\nborder-style: dotted solid;\n\n/* top | horizontal | bottom */\nborder-style: hidden double dashed;\n\n/* top | right | bottom | left */\nborder-style: none solid dotted dashed; \n\n/* Global values */\nborder-style: inherit;\nborder-style: initial;\nborder-style: unset;",
    "web-scraper-order": "1557090499-3763",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-top",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  This box has a border on the top side.\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top",
    definition:
      "The border-top shorthand CSS property set an element's top border. It sets the values of border-top-width, border-top-style and border-top-color.",
    "css-property-name": "border-top",
    syntax: "border-top-style: dotted;\nborder-top: thick green;",
    "web-scraper-order": "1557090497-3762",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-top-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="mybox">\n  <p>This is a box with a border around it.\n     Note which side of the box is\n     <span class="redtext">red</span>.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color",
    definition:
      "The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.",
    "css-property-name": "border-top-color",
    syntax:
      "/* <color> values */\nborder-top-color: red;\nborder-top-color: #ffbb00;\nborder-top-color: rgb(255, 0, 0);\nborder-top-color: hsla(100%, 50%, 25%, 0.75);\nborder-top-color: currentColor;\nborder-top-color: transparent;\n\n/* Global values */\nborder-top-color: inherit;\nborder-top-color: initial;\nborder-top-color: unset;",
    "web-scraper-order": "1557090495-3761",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-top-left-radius",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius",
    definition:
      "The border-top-left-radius CSS property rounds the top-left corner of an element.",
    "css-property-name": "border-top-left-radius",
    syntax: "div {\n  border-top-left-radius: 40%;\n}",
    "web-scraper-order": "1557090493-3760",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-top-right-radius",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius",
    definition:
      "The border-top-right-radius CSS property rounds the top-right corner of an element.",
    "css-property-name": "border-top-right-radius",
    syntax: "div {\n  border-top-right-radius: 40px 40px;\n}",
    "web-scraper-order": "1557090491-3759",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-top-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tr>\n    <td class="b1">none</td>\n    <td class="b2">hidden</td>\n    <td class="b3">dotted</td>\n    <td class="b4">dashed</td>\n  </tr>\n  <tr>\n    <td class="b5">solid</td>\n    <td class="b6">double</td>\n    <td class="b7">groove</td>\n    <td class="b8">ridge</td>\n  </tr>\n  <tr>\n    <td class="b9">inset</td>\n    <td class="b10">outset</td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style",
    definition:
      "The border-top-style CSS property sets the line style of an element's top border.",
    "css-property-name": "border-top-style",
    syntax:
      "/* Define look of the table */\ntable {\n  border-width: 2px;\n  background-color: #52E385;\n}\ntr, td {\n  padding: 3px;\n}\n\n/* border-top-style example classes */\n.b1 {border-top-style: none;}\n.b2 {border-top-style: hidden;}\n.b3 {border-top-style: dotted;}\n.b4 {border-top-style: dashed;}\n.b5 {border-top-style: solid;}\n.b6 {border-top-style: double;}\n.b7 {border-top-style: groove;}\n.b8 {border-top-style: ridge;}\n.b9 {border-top-style: inset;}\n.b10 {border-top-style: outset;}",
    "web-scraper-order": "1557090489-3758",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-top-width",
    "css-property-example-css": null,
    "css-property-example-html": "<div>Element 1</div>\n<div>Element 2</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width",
    definition:
      "The border-top-width CSS property sets the width of the top border of an element.",
    "css-property-name": "border-top-width",
    syntax:
      "div { \n  border: 1px solid red;\n  margin: 1em 0;\n}\n\ndiv:nth-child(1) {\n  border-top-width: thick;\n}\ndiv:nth-child(2) {\n  border-top-width: 2em;\n}",
    "web-scraper-order": "1557090487-3757",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "border-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p id="sval">\n    one value: 6px wide border on all 4 sides</p>\n<p id="bival">\n    two different values: 2px wide top and bottom border, 10px wide right and left border</p>\n<p id="treval">\n    three different values: 0.3em top, 9px bottom, and zero width right and left</p>\n<p id="fourval">\n    four different values: "thin" top, "medium" right, "thick" bottom, and 1em left</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-width",
    definition:
      "The border-width shorthand CSS property sets the width of an element's border.",
    "css-property-name": "border-width",
    syntax:
      "/* Keyword values */\nborder-width: thin;\nborder-width: medium;\nborder-width: thick;\n\n/* <length> values */\nborder-width: 4px;\nborder-width: 1.2rem;\n\n/* vertical | horizontal */\nborder-width: 2px 1.5em;\n\n/* top | horizontal | bottom */\nborder-width: 1px 2em 1.5cm;\n\n/* top | right | bottom | left */\nborder-width: 1px 2em 0 4rem;\n\n/* Global keywords */\nborder-width: inherit;\nborder-width: initial;\nborder-width: unset;",
    "web-scraper-order": "1557090485-3756",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "bottom",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>This<br>is<br>some<br>tall,<br>tall,<br>tall,<br>tall,<br>tall<br>content.</p>\n<div class="fixed"><p>Fixed</p></div>\n<div class="absolute"><p>Absolute</p></div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/bottom",
    definition:
      "The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.",
    "css-property-name": "bottom",
    syntax:
      "p {\n  font-size: 30px;\n  line-height: 2em;\n}\n\ndiv {\n  width: 48%;\n  text-align: center;\n  background: rgba(55,55,55,.2);\n  border: 1px solid blue;\n}\n\n.absolute {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.fixed {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}",
    "web-scraper-order": "1557090483-3755",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "box-decoration-break",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break",
    definition:
      "The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.",
    "css-property-name": "box-decoration-break",
    syntax: null,
    "web-scraper-order": "1557090478-3753",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "box-shadow",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",
    definition:
      "The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.",
    "css-property-name": "box-shadow",
    syntax:
      "/* offset-x | offset-y | color */\nbox-shadow: 60px -16px teal;\n\n/* offset-x | offset-y | blur-radius | color */\nbox-shadow: 10px 5px 5px black;\n\n/* offset-x | offset-y | blur-radius | spread-radius | color */\nbox-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n\n/* inset | offset-x | offset-y | color */\nbox-shadow: inset 5em 1em gold;\n\n/* Any number of shadows, separated by commas */\nbox-shadow: 3px 3px red, -1em 0 0.4em olive;\n\n/* Global keywords */\nbox-shadow: inherit;\nbox-shadow: initial;\nbox-shadow: unset;",
    "web-scraper-order": "1557090476-3752",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "box-sizing",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="content-box">Content box</div>\n<br>\n<div class="border-box">Border box</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
    definition:
      "The box-sizing CSS property sets how the total width and height of an element is calculated.",
    "css-property-name":
      "CSS box-sizing — Control how width and height are applied",
    syntax:
      "div {\n  width: 160px;\n  height: 80px;\n  padding: 20px;\n  border: 8px solid red;\n  background: yellow;\n}\n\n.content-box { \n  box-sizing: content-box; \n  /* Total width: 160px + (2 * 20px) + (2 * 8px) = 216px\n     Total height: 80px + (2 * 20px) + (2 * 8px) = 136px\n     Content box width: 160px\n     Content box height: 80px */\n}\n\n.border-box { \n  box-sizing: border-box;\n  /* Total width: 160px\n     Total height: 80px\n     Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px\n     Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */\n}",
    "web-scraper-order": "1557090474-3751",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "break-after",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",
    definition:
      "The break-after CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.",
    "css-property-name": "break-after",
    syntax: null,
    "web-scraper-order": "1557090472-3750",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "break-before",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/break-before",
    definition:
      "The break-before CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.",
    "css-property-name": "break-before",
    syntax: null,
    "web-scraper-order": "1557090470-3749",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "break-inside",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
    definition:
      "The break-inside CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.",
    "css-property-name": "break-inside",
    syntax: null,
    "web-scraper-order": "1557090468-3748",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "brightness()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness",
    definition:
      "The brightness() CSS function applies a linear multiplier to the input image, making it appear brighter or darker. Its result is a <filter-function>.",
    "css-property-name": "brightness()",
    syntax:
      "brightness(0%)   /* Completely black */\nbrightness(0.4)  /* 40% brightness */\nbrightness(1)    /* No effect */\nbrightness(200%) /* Double brightness */",
    "web-scraper-order": "1557090466-3747",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "calc()",
    "css-property-example-css": null,
    "css-property-example-html": '<div class="banner">This is a banner!</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/calc",
    definition:
      "The calc() CSS function lets you perform calculations when specifying CSS property values. It can be used anywhere a <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> is allowed.",
    "css-property-name": "calc()",
    syntax: "/* property: calc(expression) */\nwidth: calc(100% - 80px);",
    "web-scraper-order": "1557090464-3746",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "caption-side",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table class="top">\n  <caption>Caption ABOVE the table</caption>\n  <tr>\n    <td>Some data</td>\n    <td>Some more data</td>\n  </tr>\n</table>\n\n<br>\n\n<table class="bottom">\n  <caption>Caption BELOW the table</caption>\n  <tr>\n    <td>Some data</td>\n    <td>Some more data</td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side",
    definition:
      "The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.",
    "css-property-name": "caption-side",
    syntax:
      ".top caption {\n  caption-side: top;\n}\n\n.bottom caption {\n  caption-side: bottom;\n}\n\ntable {\n  border: 1px solid red;\n}\n\ntd {\n  border: 1px solid blue;\n}",
    "web-scraper-order": "1557090462-3745",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "caret-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<input value="This field uses a default caret." size="64"/>\n<input class="custom" value="I have a custom caret color!" size="64"/>\n<p contenteditable class="custom">This paragraph can be\n   edited, and its caret has a custom color as well!</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color",
    definition:
      "The caret-color CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as <input> or those with the contenteditable attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.",
    "css-property-name": "caret-color",
    syntax:
      "/* Keyword values */\ncaret-color: auto;\ncaret-color: transparent;\ncaret-color: currentColor;\n\n/* <color> values */\ncaret-color: red;\ncaret-color: #5729e9;\ncaret-color: rgb(0, 200, 0);\ncaret-color: hsla(228, 4%, 24%, 0.8);",
    "web-scraper-order": "1557090460-3744",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "ch",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557090458-3743",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "character-variant()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Firefox rocks!</p>\n<p class="variant">Firefox rocks!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#character-variant()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    "css-property-name": "font-variant-alternates",
    syntax:
      '@font-feature-values "Leitura Display Swashes" {\n    @swash { fancy: 1 }\n}\n\np {\n  font-size: 1.5rem;\n}\n\n.variant {\n  font-family: Leitura Display Swashes;\n  font-variant-alternates: swash(fancy);\n}',
    "web-scraper-order": "1557090454-3741",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "circle()",
    "css-property-example-css": null,
    "css-property-example-html": "<div></div>",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#circle()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    "css-property-name": "<basic-shape>",
    syntax:
      "div {\n  width: 300px;\n  height: 300px;\n  background: repeating-linear-gradient(red, orange 50px);\n  clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  animation: 4s poly infinite alternate ease-in-out;\n  margin: 10px auto;\n}\n\n@keyframes poly {\n  from {\n    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  }\n\n  to {\n    clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);\n  }\n}",
    "web-scraper-order": "1557090447-3738",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "clamp()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp",
    definition: "",
    "css-property-name": "clamp()",
    syntax:
      "/* property: clamp(expression{3}) */\nwidth: clamp(10px, 4em, 80px);",
    "web-scraper-order": "1557090445-3737",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "clear",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="wrapper">\n  <p class="black">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet diam. Duis mattis varius dui. Suspendisse eget dolor.</p>\n  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>\n  <p class="left">This paragraph clears left.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clear",
    definition:
      "The clear CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The clear property applies to floating and non-floating elements.",
    "css-property-name": "clear",
    syntax:
      '#container::after { \n  content: "";\n  display: block; \n  clear: both;\n}',
    "web-scraper-order": "1557090443-3736",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "clip",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clip",
    definition:
      "The clip CSS property defines what portion of an element is visible. The clip property applies only to absolutely positioned elements, that is elements with position:absolute or position:fixed.",
    "css-property-name": "clip",
    syntax: null,
    "web-scraper-order": "1557090441-3735",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "clip-path",
    "css-property-example-css": null,
    "css-property-example-html":
      '<svg class="defs">\n  <defs>\n    <clipPath id="myPath" clipPathUnits="objectBoundingBox">\n      <path d="M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z" />\n    </clipPath>\n  </defs>\n</svg>\n\n<div class="grid">\n  <div class="col">\n    <div class="note">clip-path: none</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="none">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="none">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: url(#myPath)<br><br>\n      Assuming the following clipPath definition:\n      <pre>\n&lt;svg&gt;\n  &lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&gt;\n    &lt;path d="M0.5,1\n      C 0.5,1,0,0.7,0,0.3\n      A 0.25,0.25,1,1,1,0.5,0.3\n      A 0.25,0.25,1,1,1,1,0.3\n      C 1,0.7,0.5,1,0.5,1 Z" /&gt;\n  &lt;/clipPath&gt;\n&lt;/svg&gt;</pre>\n    </div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="svg">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="svg">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: path(\'M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z\')\n    </div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="svg2">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="svg2">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class="note">clip-path: circle(25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape1">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape1">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape2">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape2">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: fill-box circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape3">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape3">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: stroke-box circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape4">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape4">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: view-box circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape5">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape5">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: margin-box circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape6">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape6">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: border-box circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape7">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape7">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: padding-box circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape8">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape8">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">clip-path: content-box circle(25% at 25% 25%)</div>\n    <div class="row">\n      <div class="cell"> <span>HTML</span>\n        <div class="container">\n          <p class="shape9">\n            I LOVE<br><em>clipping</em>\n          </p>\n        </div>\n      </div>\n      <div class="cell"> <span>SVG</span>\n        <div class="container viewbox">\n          <svg viewBox="0 0 192 192">\n            <g class="shape9">\n              <rect x="24" y="24" width="144" height="144" />\n              <text x="96" y="91">I LOVE</text>\n              <text x="96" y="109" class="em">clipping</text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path",
    definition:
      "The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.",
    "css-property-name": "clip-path",
    syntax:
      "html,body {\n  height: 100%;\n  box-sizing: border-box;\n  background: #EEE;\n}\n\n.grid {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  font: 1em monospace;\n}\n\n.row {\n  display: flex;\n  flex: 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.col {\n  flex: 1 auto;\n}\n\n.cell {\n  margin: .5em;\n  padding: .5em;\n  background-color: #FFF;\n  overflow: hidden;\n  text-align: center;\n  flex: 1;\n}\n\n.note {\n  background: #fff3d4;\n  padding: 1em;\n  margin: .5em .5em 0;\n  font: .8em sans-serif;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.note + .row .cell {\n  margin-top: 0;\n}\n\n.container {\n  display: inline-block;\n  border: 1px dotted grey;\n  position:relative;\n}\n\n.container:before {\n  content: 'margin';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  font: italic .6em sans-serif;\n}\n\n.viewbox {\n  box-shadow: 1rem 1rem 0 #EFEFEF inset, -1rem -1rem 0 #EFEFEF inset;\n}\n\n.container.viewbox:after {\n  content: 'viewbox';\n  position: absolute;\n  left: 1.1rem;\n  top: 1.1rem;\n  font: italic .6em sans-serif;\n}\n\n.cell span {\n  display: block;\n  margin-bottom: .5em;\n}\n\np {\n  font-family: sans-serif;\n  background: #000;\n  color: pink;\n  margin: 2em;\n  padding: 3em 1em;\n  border: 1em solid pink;\n  width: 6em;\n}\n\n.none { clip-path: none; }\n.svg  { clip-path: url(#myPath); }\n.svg2 { clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z');}\n.shape1 { clip-path: circle(25%); }\n.shape2 { clip-path: circle(25% at 25% 25%); }\n.shape3 { clip-path: fill-box    circle(25% at 25% 25%); }\n.shape4 { clip-path: stroke-box  circle(25% at 25% 25%); }\n.shape5 { clip-path: view-box    circle(25% at 25% 25%); }\n.shape6 { clip-path: margin-box  circle(25% at 25% 25%); }\n.shape7 { clip-path: border-box  circle(25% at 25% 25%); }\n.shape8 { clip-path: padding-box circle(25% at 25% 25%); }\n.shape9 { clip-path: content-box circle(25% at 25% 25%); }\n\n.defs {\n  width: 0;\n  height: 0;\n  margin: 0;\n}\n\npre { margin-bottom: 0; }\n\nsvg {\n  margin: 1em;\n  font-family: sans-serif;\n  width: 192px;\n  height: 192px;\n}\n\nsvg rect {\n  stroke: pink;\n  stroke-width: 16px;\n}\n\nsvg text {\n  fill: pink;\n  text-anchor: middle;\n}\n\nsvg text.em {\n  font-style: italic;\n}",
    "web-scraper-order": "1557090439-3734",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "cm",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#cm",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557090437-3733",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "color",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
    definition:
      "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.",
    "css-property-name": "color",
    syntax:
      "/* Keyword values */\ncolor: currentcolor;\n\n/* <named-color> values */\ncolor: red;\ncolor: orange;\ncolor: tan;\ncolor: rebeccapurple;\n\n/* <hex-color> values */\ncolor: #090;\ncolor: #009900;\ncolor: #090a;\ncolor: #009900aa;\n\n/* <rgb()> values */\ncolor: rgb(34, 12, 64, 0.6);\ncolor: rgba(34, 12, 64, 0.6);\ncolor: rgb(34 12 64 / 0.6);\ncolor: rgba(34 12 64 / 0.3);\ncolor: rgb(34.0 12 64 / 60%);\ncolor: rgba(34.6 12 64 / 30%);\n\n/* <hsl()> values */\ncolor: hsl(30, 100%, 50%, 0.6);\ncolor: hsla(30, 100%, 50%, 0.6);\ncolor: hsl(30 100% 50% / 0.6);\ncolor: hsla(30 100% 50% / 0.6);\ncolor: hsl(30.0 100% 50% / 60%);\ncolor: hsla(30.2 100% 50% / 60%);\n\n/* Global values */\ncolor: inherit;\ncolor: initial;\ncolor: unset;",
    "web-scraper-order": "1557090433-3731",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "color-adjust",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="my-box">\n  <p>Need more contrast!</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color-adjust",
    definition:
      "The color-adjust CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.",
    "css-property-name": "color-adjust",
    syntax:
      '.my-box {\n  background-color: black;\n  background-image: linear-gradient(rgba(0, 0, 180, 0.5), rgba(70, 140, 220, 0.5));\n  color: #900;\n  width: 15rem;\n  height: 6rem;\n  text-align: center;\n  font: 24px "Helvetica", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color-adjust: exact;\n}',
    "web-scraper-order": "1557090431-3730",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-count",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="content-box">\n  This is a bunch of text split into three columns\n  using the CSS `column-count` property. The text\n  is equally distributed over the columns.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-count",
    definition:
      "The column-count CSS property breaks an element's content into the specified number of columns.",
    "css-property-name": "column-count",
    syntax: ".content-box {\n  column-count: 3;\n}",
    "web-scraper-order": "1557090429-3729",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-fill",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="content-box">\n  This is a bunch of text split into multiple\n  columns. The CSS `column-fill` property is\n  used to spread the contents evenly across\n  all the columns.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill",
    definition:
      "The column-fill CSS property controls how an element's contents are balanced when broken into columns.",
    "css-property-name": "column-fill",
    syntax:
      "/* Keyword values */\ncolumn-fill: auto;\ncolumn-fill: balance;\ncolumn-fill: balance-all;\n\n/* Global values */\ncolumn-fill: inherit;\ncolumn-fill: initial;\ncolumn-fill: unset;",
    "web-scraper-order": "1557090427-3728",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-gap",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="flexbox">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap",
    definition: "",
    "css-property-name": "column-gap (grid-column-gap)",
    syntax:
      "#flexbox {\n  display: flex;\n  height: 100px;\n  column-gap: 20px;\n}\n\n#flexbox > div {\n  border: 1px solid green;\n  background-color: lime;\n  flex: auto;\n}",
    "web-scraper-order": "1557090425-3727",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-rule",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="content-box">\n  This is a bunch of text split into three columns.\n  Take note of how the `column-rule` property is used\n  to adjust the style, width, and color of the rule\n  that appears between the columns.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule",
    definition:
      "The column-rule CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.",
    "css-property-name": "column-rule",
    syntax:
      '/* Same as "medium dotted currentColor" */\np.foo { column-rule: dotted; }\n\n/* Same as "medium solid blue" */\np.bar { column-rule: solid blue; }\n\n/* Same as "8px solid currentColor" */\np.baz { column-rule: solid 8px; }\n\np.abc { column-rule: thick inset blue; }',
    "web-scraper-order": "1557090422-3726",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-rule-color",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>This is a bunch of text split into three columns.\n   The `column-rule-color` property is used to change\n   the color of the line that is drawn between columns.\n   Don't you think that's wonderful?</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color",
    definition:
      "The column-rule-color CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.",
    "css-property-name": "column-rule-color",
    syntax: null,
    "web-scraper-order": "1557090420-3725",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-rule-style",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>This is a bunch of text split into three columns.\n   The `column-rule-style` property is used to change\n   the style of the line that is drawn between columns.\n   Don't you think that's wonderful?</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style",
    definition:
      "The column-rule-style CSS property sets the style of the line drawn between columns in a multi-column layout.",
    "css-property-name": "column-rule-style",
    syntax: "p {\n  column-count: 3;\n  column-rule-style: dashed;\n}",
    "web-scraper-order": "1557090418-3724",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-rule-width",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>This is a bunch of text split into three columns.\n   The `column-rule-width` property is used to change\n   the width of the line that is drawn between columns.\n   Don't you think that's wonderful?</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width",
    definition:
      "The column-rule-width CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.",
    "css-property-name": "column-rule-width",
    syntax: null,
    "web-scraper-order": "1557090416-3723",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-span",
    "css-property-example-css": null,
    "css-property-example-html":
      "<article>\n  <h2>My Very Special Columns</h2>\n  <p>This is a bunch of text split into three columns\n     using the CSS `columns` property. The text\n     is equally distributed over the columns.</p>\n</article>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-span",
    definition:
      "The column-span CSS property makes it possible for an element to span across all columns when its value is set to all.",
    "css-property-name": "column-span",
    syntax: null,
    "web-scraper-order": "1557090414-3722",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "column-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="content-box">\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-width",
    definition:
      "The column-width CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the column-width value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.",
    "css-property-name": "column-width",
    syntax: ".content-box {\n  column-width: 100px;\n}",
    "web-scraper-order": "1557090412-3721",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "columns",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="content-box">\n  This is a bunch of text split into three columns\n  using the CSS `columns` property. The text\n  is equally distributed over the columns.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/columns",
    definition:
      "The columns CSS property sets the column width and column count of an element.",
    "css-property-name": "columns",
    syntax: ".content-box {\n  columns: 3 auto;\n}",
    "web-scraper-order": "1557090410-3720",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "conic-gradient()",
    "css-property-example-css": null,
    "css-property-example-html": "<div></div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient",
    definition:
      "The conic-gradient() CSS function creates an image consisting of a gradient with color transitions rotated around a center point (rather than radiating from the center). Example conic gradients include pie charts and color wheels. The result of the conic-gradient() function is an object of the <gradient> data type, which is a special kind of <image>.",
    "css-property-name": "conic-gradient()",
    syntax:
      "conic-gradient(red, orange, yellow, green, blue);\nconic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);",
    "web-scraper-order": "1557090408-3719",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "content",
    "css-property-example-css": null,
    "css-property-example-html":
      '<h1>5</h1>\n<p>According to Sir Tim Berners-Lee,\n  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">I was\n    lucky enough to invent the Web at the time when the Internet\n    already existed - and had for a decade and a half.</q>\n  We must understand that there is nothing fundamentally wrong\n  with building on the contributions of others.\n</p>\n\n<h1>6</h1>\n<p>According to the Mozilla Manifesto,\n  <q cite="http://www.mozilla.org/en-US/about/manifesto/">Individuals\n    must have the ability to shape the Internet and\n    their own experiences on the Internet.</q>\n  Therefore, we can infer that contributing to the open web\n  can protect our own individual experiences on it.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/content",
    definition:
      "The content CSS property replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements.",
    "css-property-name": "content",
    syntax:
      'q {\n  color: blue;\n}\n\nq::before {\n  content: open-quote;\n}\n\nq::after {\n  content: close-quote;\n}\n\nh1::before  {\n  content: "Chapter ";  /* The trailing space creates separation\n                           between the added content and the\n                           rest of the content */\n}',
    "web-scraper-order": "1557090406-3718",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "contrast()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast",
    definition:
      "The contrast() CSS function adjusts the contrast of the input image. Its result is a <filter-function>.",
    "css-property-name": "contrast()",
    syntax:
      "contrast(0)     /* Completely gray */\ncontrast(65%)   /* 65% contrast */\ncontrast(1)     /* No effect */\ncontrast(200%)  /* Double contrast */",
    "web-scraper-order": "1557090404-3717",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "counter-increment",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment",
    definition:
      "The counter-increment CSS property increases or decreases the value of a CSS counter by a given value.",
    "css-property-name": "counter-increment",
    syntax:
      "h1 {\n  counter-increment: chapter section 2 page;\n  /* Increases the value of the chapter and page counters by 1,\n     and the section counter by 2 */\n}",
    "web-scraper-order": "1557090398-3715",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "counter-reset",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset",
    definition:
      "The counter-reset CSS property resets a CSS counter to a given value.",
    "css-property-name": "counter-reset",
    syntax: null,
    "web-scraper-order": "1557090396-3714",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "cross-fade()",
    "css-property-example-css": null,
    "css-property-example-html": '<div id="div"></div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/cross-fade",
    definition:
      "The CSS cross-fade() function can be used to blend two or more images at a defined transparency. It can be used for many simple image manipulations, such as tinting an image with a solid color or highlighting a particular area of the page by combining an image with a radial gradient.",
    "css-property-name": "cross-fade()",
    syntax:
      "cross-fade( url(white.png) 0%, url(black.png) 100%); /* fully black */\ncross-fade( url(white.png) 25%, url(black.png) 75%); /* 25% white, 75% black */\ncross-fade( url(white.png) 50%, url(black.png) 50%); /* 50% white, 50% black */\ncross-fade( url(white.png) 75%, url(black.png) 25%); /* 75% white, 25% black */\ncross-fade( url(white.png) 100%, url(black.png) 0%); /* fully white */\ncross-fade( url(green.png) 75%, url(red.png) 75%); /* both green and red at 75% */",
    "web-scraper-order": "1557090390-3712",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "cubic-bezier()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#cubic-bezier()",
    definition:
      "The <timing-function> CSS data type denotes a mathematical function that describes how fast one-dimensional values change during animations. This lets you vary the animation's speed over the course of its duration.",
    "css-property-name": "<timing-function>",
    syntax:
      "/* The canonical Bézier curve with four <number> in the [0,1] range. */\ncubic-bezier(0.1, 0.7, 1.0, 0.1)   \n\n/* Using <integer> is valid as any <integer> is also a <number>. */\ncubic-bezier(0, 0, 1, 1)           \n\n/* Negative values for ordinates are valid, leading to bouncing effects.*/\ncubic-bezier(0.1, -0.6, 0.2, 0)    \n\n/* Values > 1.0 for ordinates are also valid. */\ncubic-bezier(0, 1.1, 0.8, 4)",
    "web-scraper-order": "1557090388-3711",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "cursor",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",
    definition:
      "The cursor CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.",
    "css-property-name": "CSS cursor property",
    syntax:
      "/* Keyword value */\ncursor: pointer;\ncursor: auto;\n\n/* URL, with a keyword fallback */\ncursor: url(hand.cur), pointer;\n\n/* URL and coordinates, with a keyword fallback */\ncursor: url(cursor1.png) 4 12, auto;\ncursor: url(cursor2.png) 2 2, pointer;\n\n/* Global values */\ncursor: inherit;\ncursor: initial;\ncursor: unset;",
    "web-scraper-order": "1557090384-3709",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "deg",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#deg",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    "css-property-name": "<angle>",
    syntax: null,
    "web-scraper-order": "1557090376-3706",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "direction",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/direction",
    definition:
      "The direction CSS property sets the direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Hebrew or Arabic), and ltr for those written from left to right (like English and most other languages).",
    "css-property-name": "direction",
    syntax: "blockquote {\n  direction: rtl;\n}",
    "web-scraper-order": "1557090370-3703",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "display",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
    definition:
      "The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as grid or flex.",
    "css-property-name": "display",
    syntax: ".container {\n  display: inline flex;\n}",
    "web-scraper-order": "1557090365-3701",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "dpcm",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#dpcm",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    "css-property-name": "<resolution>",
    syntax: "@media print and (min-resolution: 300dpi) { ... }",
    "web-scraper-order": "1557090351-3694",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "dpi",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#dpi",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    "css-property-name": "<resolution>",
    syntax: "@media print and (min-resolution: 300dpi) { ... }",
    "web-scraper-order": "1557090349-3693",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "dppx",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#dppx",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    "css-property-name": "<resolution>",
    syntax: "@media print and (min-resolution: 300dpi) { ... }",
    "web-scraper-order": "1557090347-3692",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "drop-shadow()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow",
    definition:
      "The drop-shadow() CSS function applies a drop shadow effect to the input image. Its result is a <filter-function>.",
    "css-property-name": "drop-shadow()",
    syntax:
      "/* Black shadow with 10px blur */\ndrop-shadow(16px 16px 10px black)\n\n/* Reddish shadow with 1rem blur and .3rem spread */\n/* WARNING: not generally supported by browsers */\ndrop-shadow(.5rem .5rem 1rem .3rem #e23)",
    "web-scraper-order": "1557090345-3691",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "element()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">\n  <p>This box uses the element with the #myBackground1 ID as its background!</p>\n</div>\n\n<div style="overflow:hidden; height:0;">\n  <div id="myBackground1" style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">\n  <p style="transform-origin:0 0; transform: rotate(45deg); color:white;">This text is part of the background. Cool, huh?</p>\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/element",
    definition:
      "The element() CSS function defines an <image> value generated from an arbitrary HTML element. This image is live, meaning that if the HTML element is changed, the CSS properties using the resulting value are automatically updated.",
    "css-property-name": "element()",
    syntax: null,
    "web-scraper-order": "1557090343-3690",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "ellipse()",
    "css-property-example-css": null,
    "css-property-example-html": "<div></div>",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#ellipse()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    "css-property-name": "<basic-shape>",
    syntax:
      "div {\n  width: 300px;\n  height: 300px;\n  background: repeating-linear-gradient(red, orange 50px);\n  clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  animation: 4s poly infinite alternate ease-in-out;\n  margin: 10px auto;\n}\n\n@keyframes poly {\n  from {\n    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  }\n\n  to {\n    clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);\n  }\n}",
    "web-scraper-order": "1557090341-3689",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "em",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#em",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557090339-3688",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "empty-cells",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table class="table_1">\n  <tr>\n    <td>Moe</td>\n    <td>Larry</td>\n  </tr>\n  <tr>\n    <td>Curly</td>\n    <td></td>\n  </tr>\n</table>\n<br>\n<table class="table_2">\n  <tr>\n    <td>Moe</td>\n    <td>Larry</td>\n  </tr>\n  <tr>\n    <td>Curly</td>\n    <td></td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells",
    definition:
      "The empty-cells CSS property sets whether borders and backgrounds appear around <table> cells that have no visible content.",
    "css-property-name": "empty-cells",
    syntax:
      ".table_1 {\n  empty-cells: show;\n}\n\n.table_2 {\n  empty-cells: hide;\n}\n\ntd,\nth {\n  border: 1px solid gray;\n  padding: 0.5rem;\n}",
    "web-scraper-order": "1557090334-3686",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "env()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/env",
    definition: null,
    "css-property-name": "env()",
    syntax: null,
    "web-scraper-order": "1557090330-3684",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "ex",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#ex",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557090328-3683",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "fallback (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="list">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/fallback",
    definition:
      "The fallback descriptor can be used to specify a counter style to fall back to if the current counter style cannot create a marker representation for a particular counter value. If the specified fallback style is also unable to construct a representation, then its fallback style will be used. If a valid fallback style is not specified, it defaults to decimal.",
    "css-property-name": "fallback",
    syntax:
      "/* Keyword values */\nfallback: lower-alpha;\nfallback: custom-gangnam-style;",
    "web-scraper-order": "1557090326-3682",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "filter",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table class="standard-table">\n  <thead>\n    <tr>\n      <th style="text-align: left;" scope="col">Original image</th>\n      <th style="text-align: left;" scope="col">Live example</th>\n      <th style="text-align: left;" scope="col">SVG Equivalent</th>\n      <th style="text-align: left;" scope="col">Static example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><img alt="Test_Form.jpg" id="img1" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>\n      <td><img alt="Test_Form.jpg" id="img2" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>\n      <td>\n        <div class="svg-container">\n          <svg id="img3" overflow="visible" viewbox="0 0 212 161" color-interpolation-filters="sRGB">\n            <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">\n              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5"/>\n            </filter>\n            <image xlink:href="/files/3710/Test_Form_2.jpeg" filter="url(#svgBlur)" width="212px" height="161px"/>\n          </svg>\n        </div>\n      </td>\n      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3711/Test_Form_2_s.jpg" style="width: 100%;" /></td>\n    </tr>\n  </tbody>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
    definition:
      "The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.",
    "css-property-name": "filter",
    syntax:
      ".mydiv {\n  filter: grayscale(50%);\n}\n\n/* Gray all images by 50% and blur by 10px */\nimg {\n  filter: grayscale(0.5) blur(10px);\n}",
    "web-scraper-order": "1557090324-3681",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "fit-content()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container">\n  <div>Item as wide as the content.</div>\n  <div>\n    Item with more text in it. Because the contents of it are\n    wider than the maximum width, it is clamped at 300 pixels.\n  </div>\n  <div>Flexible item</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content",
    definition:
      "The fit-content() CSS function clamps a given size to an available size according to the formula min(maximum size, max(minimum size, argument)).",
    "css-property-name": "fit-content()",
    syntax:
      "/* <length> values */\nfit-content(200px)\nfit-content(5cm)\nfit-content(30vw)\nfit-content(100ch)\n\n/* <percentage> value */\nfit-content(40%)",
    "web-scraper-order": "1557090310-3674",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "flex",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="flex-container">\n  <div class="item auto">auto</div>\n  <div class="item auto">auto</div>\n  <div class="item auto">auto</div>\n</div>\n\n<div class="flex-container">\n  <div class="item auto">auto</div>\n  <div class="item initial">initial</div>\n  <div class="item initial">initial</div>\n</div>\n\n<div class="flex-container">\n  <div class="item auto">auto</div>\n  <div class="item auto">auto</div>\n  <div class="item none">none</div>\n</div>\n\n<div class="flex-container">\n  <div class="item initial">initial</div>\n  <div class="item none">none</div>\n  <div class="item none">none</div>\n</div>\n\n<div class="flex-container">\n  <div class="item four">4</div>\n  <div class="item two">2</div>\n  <div class="item one">1</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
    definition:
      "The flex CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.",
    "css-property-name": "CSS flex property",
    syntax:
      "* {\n  box-sizing: border-box;\n}\n\n.flex-container {\n  background-color: #F4F7F8;\n  resize: horizontal;\n  overflow: hidden;\n  display: flex;\n  margin: 1em;\n}\n\n.item {\n  margin: 1em;\n  padding: 0.5em;\n  width: 110px;\n  min-width: 0;\n  background-color: #1B5385;\n  color: white;\n  font-family: monospace;\n  font-size: 13px;\n}\n\n.initial {\n  flex: initial;\n}\n\n.auto {\n  flex: auto;\n}\n\n.none {\n  flex: none;\n}\n\n.four {\n  flex: 4;\n}\n\n.two {\n  flex: 2;\n}\n\n.one {\n  flex: 1;\n}",
    "web-scraper-order": "1557090305-3672",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "flex-basis",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="container">\n  <li class="flex flex1">1: flex-basis test</li>\n  <li class="flex flex2">2: flex-basis test</li>\n  <li class="flex flex3">3: flex-basis test</li>\n  <li class="flex flex4">4: flex-basis test</li>\n  <li class="flex flex5">5: flex-basis test</li>\n</ul>\n\n<ul class="container">\n  <li class="flex flex6">6: flex-basis test</li>\n</ul>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis",
    definition:
      "The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.",
    "css-property-name": "flex-basis",
    syntax:
      ".container {\n  font-family: arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex {\n  background: #6AB6D8;\n  padding: 10px;\n  margin-bottom: 50px;\n  border: 3px solid #2E86BB;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  position: relative;\n}\n\n.flex:after {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 100%;\n  margin-top: 10px;\n  width: 100%;\n  color: #333;\n  font-size: 18px;\n}\n\n.flex1 {\n  flex-basis: auto;\n}\n\n.flex1:after {\n  content: 'auto';\n}\n\n.flex2 {\n  flex-basis: max-content;\n}\n\n.flex2:after {\n  content: 'max-content';\n}\n\n.flex3 {\n  flex-basis: min-content;\n}\n\n.flex3:after {\n  content: 'min-content';\n}\n\n.flex4 {\n  flex-basis: fit-content;\n}\n\n.flex4:after {\n  content: 'fit-content';\n}\n\n.flex5 {\n   flex-basis: content;\n}\n\n.flex5:after {\n  content: 'content';\n}\n\n.flex6 {\n  flex-basis: fill;\n}\n\n.flex6:after {\n  content: 'fill';\n}",
    "web-scraper-order": "1557090303-3671",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "flex-direction",
    "css-property-example-css": null,
    "css-property-example-html":
      '<h4>This is a Column-Reverse</h4>\n<div id="content">\n  <div class="box" style="background-color:red;">A</div>\n  <div class="box" style="background-color:lightblue;">B</div>\n  <div class="box" style="background-color:yellow;">C</div>\n</div>\n<h4>This is a Row-Reverse</h4>\n<div id="content1">\n  <div class="box1" style="background-color:red;">A</div>\n  <div class="box1" style="background-color:lightblue;">B</div>\n  <div class="box1" style="background-color:yellow;">C</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction",
    definition:
      "The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).",
    "css-property-name": "flex-direction",
    syntax:
      "#content {\n  width: 200px;\n  height: 200px;\n  border: 1px solid #c3c3c3;\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.box {\n  width: 50px;\n  height: 50px;\n}\n\n#content1 {\n  width: 200px;\n  height: 200px;\n  border: 1px solid #c3c3c3;\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.box1 {\n  width: 50px;\n  height: 50px;\n}",
    "web-scraper-order": "1557090301-3670",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "flex-flow",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow",
    definition:
      "The flex-flow CSS property is a shorthand property for flex-direction and flex-wrap properties.",
    "css-property-name": "flex-flow",
    syntax: null,
    "web-scraper-order": "1557090299-3669",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "flex-grow",
    "css-property-example-css": null,
    "css-property-example-html":
      '<h4>This is a Flex-Grow</h4>\n<h5>A,B,C and F are flex-grow:1 . D and E are flex-grow:2 .</h5>\n<div id="content">\n  <div class="box" style="background-color:red;">A</div>\n  <div class="box" style="background-color:lightblue;">B</div>\n  <div class="box" style="background-color:yellow;">C</div>\n  <div class="box1" style="background-color:brown;">D</div>\n  <div class="box1" style="background-color:lightgreen;">E</div>\n  <div class="box" style="background-color:brown;">F</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow",
    definition:
      "The flex-grow CSS property sets how much of the remaining space in the flex container should be assigned to that item (the flex grow factor). The remaining space is the size of the flex container minus the size of all flex items together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.",
    "css-property-name": "flex-grow",
    syntax:
      "#content {\n  display: flex;\n\n  justify-content: space-around;\n  flex-flow: row wrap;\n  align-items: stretch;\n}\n\n.box {\n  flex-grow: 1;\n  border: 3px solid rgba(0,0,0,.2);\n}\n\n.box1 {\n  flex-grow: 2;\n  border: 3px solid rgba(0,0,0,.2);\n}",
    "web-scraper-order": "1557090297-3668",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "flex-shrink",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>The width of content is 500px; the flex-basis of the flex items is 120px.</p>\n<p>A, B, C have flex-shrink:1 set. D and E have flex-shrink:2 set</p>\n<p>The width of D and E is less than the others.</p>\n<div id="content">\n  <div class="box" style="background-color:red;">A</div>\n  <div class="box" style="background-color:lightblue;">B</div>\n  <div class="box" style="background-color:yellow;">C</div>\n  <div class="box1" style="background-color:brown;">D</div>\n  <div class="box1" style="background-color:lightgreen;">E</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink",
    definition:
      "The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.",
    "css-property-name": "flex-shrink",
    syntax:
      "#content {\n  display: flex;\n  width: 500px;\n}\n\n#content div {\n  flex-basis: 120px;\n  border: 3px solid rgba(0,0,0,.2);\n}\n\n.box {\n  flex-shrink: 1;\n}\n\n.box1 {\n  flex-shrink: 2;\n}",
    "web-scraper-order": "1557090295-3667",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "flex-wrap",
    "css-property-example-css": null,
    "css-property-example-html":
      '<h4>This is an example for flex-wrap:wrap </h4>\n<div class="content">\n  <div class="red">1</div>\n  <div class="green">2</div>\n  <div class="blue">3</div>\n</div>\n<h4>This is an example for flex-wrap:nowrap </h4>\n<div class="content1">\n  <div class="red">1</div>\n  <div class="green">2</div>\n  <div class="blue">3</div>\n</div>\n<h4>This is an example for flex-wrap:wrap-reverse </h4>\n<div class="content2">\n  <div class="red">1</div>\n  <div class="green">2</div>\n  <div class="blue">3</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
    definition:
      "The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.",
    "css-property-name": "flex-wrap",
    syntax:
      "/* Common Styles */\n.content,\n.content1,\n.content2 {\n    color: #fff;\n    font: 100 24px/100px sans-serif;\n    height: 150px;\n    text-align: center;\n}\n\n.content div,\n.content1 div,\n.content2 div {\n    height: 50%;\n    width: 300px;\n}\n.red {\n    background: orangered;\n}\n.green {\n    background: yellowgreen;\n}\n.blue {\n    background: steelblue;\n}\n\n/* Flexbox Styles */\n.content {\n    display: flex;\n    flex-wrap: wrap;\n}\n.content1 {\n    display: flex;\n    flex-wrap: nowrap;\n}\n.content2 {\n    display: flex;\n    flex-wrap: wrap-reverse;\n}",
    "web-scraper-order": "1557090293-3666",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "float",
    "css-property-example-css": null,
    "css-property-example-html":
      '<section>\n  <div class="left">1</div>\n  <div class="left">2</div>\n  <div class="right">3</div>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n     Morbi tristique sapien ac erat tincidunt, sit amet dignissim\n     lectus vulputate. Donec id iaculis velit. Aliquam vel\n     malesuada erat. Praesent non magna ac massa aliquet tincidunt\n     vel in massa. Phasellus feugiat est vel leo finibus congue.</p>\n</section>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/float",
    definition:
      "The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).",
    "css-property-name": "float",
    syntax:
      "section {\n  border: 1px solid blue;\n}\n\ndiv {\n  margin: 5px;\n  width: 50px;\n  height: 50px;\n}\n\n.left {\n  float: left;\n  background: pink;\n}\n\n.right {\n  float: right;\n  background: cyan;\n}",
    "web-scraper-order": "1557090291-3665",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>\n    Change the radio buttons below to see the generated shorthand and it\'s effect.\n</p>\n<form action="createShortHand()">\n    <div class="cf">\n        <div class="setPropCont">\n            font-style<br/>\n            <input type="radio" id="font-style-none" name="font_style" checked="" value="" onchange="setCss()"> <label for="font-style-none">none</label><br/>\n            <input type="radio" id="font-style-normal" name="font_style" value="normal" onchange="setCss()"> <label for="font-style-normal">normal</label><br/>\n            <input type="radio" id="font-style-italic" name="font_style" value="italic" onchange="setCss()"> <label for="font-style-italic">italic</label><br/>\n            <input type="radio" id="font-style-oblique" name="font_style" value="oblique" onchange="setCss()"> <label for="font-style-oblique">oblique</label>\n        </div>\n        \n        <div class="setPropCont">\n            font-variant<br>\n            <input type="radio" id="font-variant-none" name="font_variant" checked="" value=" " onchange="setCss()"> <label for="font-variant-none">none</label><br/>\n            <input type="radio" id="font-variant-normal" name="font_variant" value="normal" onchange="setCss()"> <label for="font-variant-normal">normal</label><br/>\n            <input type="radio" id="font-variant-small-caps" name="font_variant" value="small-caps" onchange="setCss()"> <label for="font-variant-small-caps">small-caps</label>\n        </div>\n        \n        <div class="setPropCont">\n            font-weight<br/>\n            <input type="radio" id="font-weight-none" name="font_weight" value="" onchange="setCss()"> <label for="font-weight-none">none</label><br/>\n            <input type="radio" id="font-weight-normal" checked="" name="font_weight" value="400" onchange="setCss()"> <label for="font-weight-normal">normal</label><br/>\n            <input type="radio" id="font-weight-bold" name="font_weight" value="700" onchange="setCss()"> <label for="font-weight-bold">bold</label>\n        </div>\n        \n        <div class="setPropCont">\n            font-size<br/>\n            <input type="radio" id="font-size-12px" name="font_size" value="12px" onchange="setCss()"> <label for="font-size-12px">12px</label><br/>\n            <input type="radio" id="font-size-16px" name="font_size" value="16px" checked="" onchange="setCss()"> <label for="font-size-16px">16px</label><br/>\n            <input type="radio" id="font-size-24px" name="font_size" value="24px" onchange="setCss()"> <label for="font-size-24px">24px</label>\n        </div>\n        \n        <div class="setPropCont">\n            line-height<br/>\n            <input type="radio" id="line-height-none" name="line_height" checked="" value="" onchange="setCss()"> <label for="line-height-none">none</label><br/>\n            <input type="radio" id="line-height-1.2" name="line_height" value="/1.2" onchange="setCss()"> <label for="line-height-1.2">1.2</label><br/>\n            <input type="radio" id="line-height-3" name="line_height" value="/3" onchange="setCss()"> <label for="line-height-3">3</label>\n        </div><br/>\n\n        <div class="setPropCont fontfamily">\n            font-family<br/>\n            <input type="radio" id="font-family-courier" name="font_family" checked="" value="courier" onchange="setCss(5,\'courier\')"> <label for="font-family-courier">courier</label><br/>            <input type="radio" id="font-family-serif" name="font_family" value="serif" onchange="setCss()"> <label for="font-family-serif">serif</label><br />\n            <input type="radio" id="font-family-sans-serif" name="font_family" value="sans-serif" onchange="setCss()"> <label for="font-family-sans-serif">sans-serif</label><br />            <input type="radio" id="font-family-arial" name="font_family" value="arial" onchange="setCss()"> <label for="font-family-arial">Arial</label><br />\n            <input type="radio" id="font-family-monospace" name="font_family" value="monospace" onchange="setCss()"> <label for="font-family-monospace">monospace</label><br />            <input type="radio" id="font-family-cursive" name="font_family" value="cursive" onchange="setCss()"> <label for="font-family-cursive">cursive</label><br />\n            <input type="radio" id="font-family-fantasy" name="font_family" value="fantasy" onchange="setCss()"> <label for="font-family-fantasy">fantasy</label><br />            <input type="radio" id="font-family-system-ui" name="font_family" value="system-ui" onchange="setCss()"> <label for="font-family-system-ui">system-ui</label><br />\n        </div>\n    </div>\n\n    <div class="cf propInputs">\n        <div class="propInputCont tar">\n            font :\n        </div>\n        <div class="propInputCont">\n            <input type="text" class="curCss" id="input_font_style"><br/>\n            font-style <br/>\n            optional\n        \n        </div>\n        <div class="propInputCont">\n            <input type="text" class="curCss" id="input_font_variant"> <br/>\n            font-variant <br/>\n            optional\n        </div>\n        <div class="propInputCont">\n            <input type="text" class="curCss" id="input_font_weight"> <br/>\n            font-weight <br/>\n            optional\n        </div>\n        <div class="propInputCont">\n            <input type="text" class="curCss mandatory" id="input_font_size"> <br/>\n            font-size <br/>\n            mandatory\n        </div>\n        <div class="propInputCont">\n            <input type="text" class="curCss" id="input_line_height"> <br/>\n            line-height <br/>\n            optional\n        </div>\n        <div class="propInputCont">\n            <input type="text" class="curCss mandatory" id="input_font_family"> <br/>\n            font-family <br/>\n            mandatory\n        </div>\n    </div>\n</form>\n\n<div class="fontShortHand">\n    This is some sample text.\n</div>\n<br/><br/><br/><br/><br/><br/>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font",
    definition:
      "The font CSS property is a shorthand for font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family. Alternatively, it sets an element's font to a system font.",
    "css-property-name": "font",
    syntax:
      "/* Set the font size to 12px and the line height to 14px.\n   Set the font family to sans-serif */\np { font: 12px/14px sans-serif }\n\n/* Set the font size to 80% of the parent element\n   or default value (if no parent element present).\n   Set the font family to sans-serif */\np { font: 80% sans-serif }\n\n/* Set the font weight to bold,\n   the font-style to italic,\n   the font size to large,\n   and the font family to serif. */\np { font: bold italic large serif }\n\n/* Use the same font as the status bar of the window */\np { font: status-bar }",
    "web-scraper-order": "1557090287-3663",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-family (@font-face)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family",
    definition:
      "The font-family CSS descriptor allows authors to specify the font family for the font specified in an @font-face rule.",
    "css-property-name": "font-family",
    syntax:
      "/* <string> values */\nfont-family: \"font family\";\nfont-family: 'another font family';\n\n/* <custom-ident> value */\nfont-family: examplefont;",
    "web-scraper-order": "1557090281-3660",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-family",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family",
    definition:
      "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.",
    "css-property-name": "font-family",
    syntax:
      '/* A font family name and a generic family name */\nfont-family: Gill Sans Extrabold, sans-serif;\nfont-family: "Goudy Bookletter 1911", sans-serif;\n\n/* A generic family name only */\nfont-family: serif;\nfont-family: sans-serif;\nfont-family: monospace;\nfont-family: cursive;\nfont-family: fantasy;\nfont-family: system-ui;\nfont-family: emoji;\nfont-family: math;\nfont-family: fangsong;\n\n/* Global values */\nfont-family: inherit;\nfont-family: initial;\nfont-family: unset;',
    "web-scraper-order": "1557090283-3661",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-feature-settings",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings",
    definition:
      "The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.",
    "css-property-name": "font-feature-settings",
    syntax: null,
    "web-scraper-order": "1557090279-3659",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-kerning",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="kern"></div>\n<div id="nokern"></div>\n<textarea id="input">AV T. ij</textarea>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning",
    definition:
      "The font-kerning CSS property sets the use of the kerning information stored in a font.",
    "css-property-name": "font-kerning",
    syntax:
      "div {\n  font-size: 2rem;\n  font-family: serif;\n}\n\n#nokern {\n  font-kerning: none;\n}\n\n#kern {\n  font-kerning: normal;\n}",
    "web-scraper-order": "1557090272-3657",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-language-override",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="para1">Default language setting.</p>\n<p class="para2">This is a string with the <code>font-language-override</code> set to Danish.</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-language-override",
    definition:
      "The font-language-override CSS property controls the use of language-specific glyphs in a typeface.",
    "css-property-name": "font-language-override",
    syntax:
      'p.para1 {\n  font-language-override: normal;\n}\n\np.para2 {\n  font-language-override: "DAN";\n}',
    "web-scraper-order": "1557090270-3656",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-optical-sizing",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="optical-sizing">This paragraph is optically sized.\n This is the default across browsers.</p>\n\n<p class="no-optical-sizing">This paragraph is not optically sized.\n You should see a difference in supporting browsers.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing",
    definition:
      "The font-optical-sizing CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.",
    "css-property-name": "font-optical-sizing",
    syntax:
      "@font-face {\n    src: url('AmstelvarAlpha-VF.ttf');\n    font-family:'Amstelvar';\n    font-style: normal;\n}\n\np {\n  font-size: 36px;\n  font-family: Amstelvar;\n}\n\n.no-optical-sizing {\n  font-optical-sizing: none;\n}",
    "web-scraper-order": "1557090268-3655",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-size",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n<span>Outer <span>inner</span> outer</span>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size",
    definition:
      "The font-size CSS property sets the size of the font. This property is also used to compute the size of em, ex, and other relative <length> units.",
    "css-property-name": "font-size",
    syntax:
      "html { \n  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */ \n} \nspan { \n  font-size: 1.6em; \n}",
    "web-scraper-order": "1557090266-3654",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-size-adjust",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="times">This text uses the Times font (10px), which is hard to read in small sizes.</p>\n<p class="verdana">This text uses the Verdana font (10px), which has relatively large lowercase letters.</p>\n<p class="adjtimes">This is the 10px Times, but now adjusted to the same aspect ratio as the Verdana.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust",
    definition:
      "The font-size-adjust CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.",
    "css-property-name": "font-size-adjust",
    syntax: "font-size: 14px;  \nfont-size-adjust: 0.5;",
    "web-scraper-order": "1557090264-3653",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-stretch",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="container">\n    <p class="condensed">an elephantine lizard</p>\n    <p class="normal">an elephantine lizard</p>\n    <p class="expanded">an elephantine lizard</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch",
    definition: "",
    "css-property-name": "font-stretch",
    syntax:
      "/*\nThis example uses the League Mono Variable font, developed by\nTyler Finck (https://www.tylerfinck.com/) and used here under\nthe terms of the SIL Open Font License, Version 1.1:\nhttp://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web\n*/\n\n@font-face {\n  src: url('https://mdn.mozillademos.org/files/16014/LeagueMonoVariable.ttf');\n  font-family:'LeagueMonoVariable';\n  font-style: normal;\n  font-stretch: 1% 500%; /* Required by Chrome */\n}\n\n.container {\n  border: 10px solid #f5f9fa;\n  padding: 0 1rem;\n  font: 1.5rem 'LeagueMonoVariable', sans-serif;\n}\n\n.condensed {\n  font-stretch: 50%;\n}\n\n.normal {\n  font-stretch: 100%;\n}\n\n.expanded {\n  font-stretch: 200%;\n}",
    "web-scraper-order": "1557090262-3652",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-style (@font-face)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-style",
    definition:
      "The font-style CSS descriptor allows authors to specify font styles for the fonts specified in the @font-face rule.",
    "css-property-name": "font-style",
    syntax:
      "font-style: normal;\nfont-style: italic;\nfont-style: oblique;\nfont-style: oblique 30deg;\nfont-style: oblique 30deg 50deg;",
    "web-scraper-order": "1557090256-3650",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<header>\n    <input type="range" id="slant" name="slant" min="-90" max="90" />\n    <label for="slant">Slant</label>\n</header>\n<div class="container">\n    <p class="sample">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-style",
    definition:
      "The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.",
    "css-property-name": "font-style",
    syntax:
      "/*\nAmstelvarAlpha-VF is created by David Berlow (https://github.com/TypeNetwork/Amstelvar)\nand is used here under the terms of its license:\nhttps://github.com/TypeNetwork/Amstelvar/blob/master/OFL.txt\n*/\n\n@font-face {\n  src: url('https://mdn.mozillademos.org/files/16044/AmstelvarAlpha-VF.ttf');\n  font-family:'AmstelvarAlpha';\n  font-style: normal;\n}\n\nlabel {\n  font: 1rem monospace;\n}\n\n.container {\n  max-height: 150px;\n  overflow: scroll;\n}\n\n.sample {\n  font: 2rem 'AmstelvarAlpha', sans-serif;\n}",
    "web-scraper-order": "1557090258-3651",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-synthesis",
    "css-property-example-css": null,
    "css-property-example-html":
      '<em class="syn">Synthesize me! 站直。</em>\n<br/>\n<em class="no-syn">Don\'t synthesize me! 站直。</em>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis",
    definition:
      "The font-synthesis CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.",
    "css-property-name": "font-synthesis",
    syntax:
      "em {\n  font-weight: bold;\n}\n.syn {\n  font-synthesis: style weight;\n}\n.no-syn {\n  font-synthesis: none;\n}",
    "web-scraper-order": "1557090254-3649",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variant",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="normal">Firefox rocks!</p>\n<p class="small">Firefox rocks!</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",
    definition:
      "The font-variant CSS property is a shorthand for the longhand properties font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, and font-variant-east-asian. You can also set the CSS Level 2 (Revision 1) values of font-variant, (that is, normal or small-caps), by using the font shorthand.",
    "css-property-name": "font-variant",
    syntax:
      "p.normal {\n  font-variant: normal;\n}\np.small {\n  font-variant: small-caps;\n}",
    "web-scraper-order": "1557090252-3648",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variant-alternates",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Firefox rocks!</p>\n<p class="variant">Firefox rocks!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    "css-property-name": "font-variant-alternates",
    syntax:
      '@font-feature-values "Leitura Display Swashes" {\n    @swash { fancy: 1 }\n}\n\np {\n  font-size: 1.5rem;\n}\n\n.variant {\n  font-family: Leitura Display Swashes;\n  font-variant-alternates: swash(fancy);\n}',
    "web-scraper-order": "1557090247-3647",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variant-caps",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="small-caps">Firefox rocks, small caps!</p>\n<p class="normal">Firefox rocks, normal caps!</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps",
    definition:
      "The font-variant-caps CSS property controls the use of alternate glyphs for capital letters.",
    "css-property-name": "font-variant-caps",
    syntax: null,
    "web-scraper-order": "1557090245-3646",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variant-east-asian",
    "css-property-example-css": null,
    "css-property-example-html": '<p class="normal">!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian",
    definition:
      "The font-variant-east-asian CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.",
    "css-property-name": "font-variant-east-asian",
    syntax: null,
    "web-scraper-order": "1557090243-3645",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variant-ligatures",
    "css-property-example-css": null,
    "css-property-example-html":
      '<link href="//fonts.googleapis.com/css?family=Lora" rel="stylesheet">\n<p class="normal">\n  normal<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="none">\n  none<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="common-ligatures">\n  common-ligatures<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="no-common-ligatures">\n  no-common-ligatures<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="discretionary-ligatures">\n  discretionary-ligatures<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="no-discretionary-ligatures">\n  no-discretionary-ligatures<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="historical-ligatures">\n  historical-ligatures<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="no-historical-ligatures">\n  no-historical-ligatures<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="contextual">\n  contextual<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="no-contextual">\n  no-contextual<br>\n  if fi ff tf ft jf fj\n</p>\n<p class="contextual">\n  contextual<br>\n  if fi ff tf ft jf fj\n</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures",
    definition:
      "The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.",
    "css-property-name": "font-variant-ligatures",
    syntax: null,
    "web-scraper-order": "1557090241-3644",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variant-numeric",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="ordinal">1st, 2nd, 3rd, 4th, 5th</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric",
    definition:
      "The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.",
    "css-property-name": "font-variant-numeric",
    syntax:
      '/*\nThis example uses the Source Sans Pro OpenType font, developed by Adobe\nand used here under the terms of the SIL Open Font License, Version 1.1:\nhttp://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web\n*/\n\n@font-face {\n  font-family: "Source Sans Pro";\n  font-style: normal;\n  font-weight: 400;\n  src: url("https://mdn.mozillademos.org/files/15757/SourceSansPro-Regular.otf") format("opentype");\n}\n\n.ordinal {\n  font-variant-numeric: ordinal;\n  font-family: "Source Sans Pro";\n}',
    "web-scraper-order": "1557090239-3643",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variant-position",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-position",
    definition:
      "The font-variant-position CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.",
    "css-property-name": "font-variant-position",
    syntax: null,
    "web-scraper-order": "1557090237-3642",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-variation-settings (@font-face)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variation-settings",
    definition:
      "The font-variation-settings CSS descriptor allows authors to specify low-level OpenType or TrueType font variations in the @font-face rule.",
    "css-property-name": "font-variation-settings",
    syntax:
      '/* Use the default settings */\nfont-variation-settings: normal;\n\n/* Set values for OpenType axis names */\nfont-variation-settings: "xhgt" 0.7;',
    "web-scraper-order": "1557090235-3641",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "font-weight",
    "css-property-example-css": null,
    "css-property-example-html":
      '<header>\n    <input type="range" id="weight" name="weight" min="1" max="1000" />\n    <label for="weight">Weight</label>\n</header>\n<div class="container">\n    <p class="sample">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight",
    definition:
      "The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.",
    "css-property-name": "font-weight",
    syntax:
      "/*\nMutator Sans is created by LettError (https://github.com/LettError/mutatorSans)\nand is used here under the terms of its license:\nhttps://github.com/LettError/mutatorSans/blob/master/LICENSE\n*/\n\n@font-face {\n  src: url('https://mdn.mozillademos.org/files/16011/MutatorSans.ttf');\n  font-family:'MutatorSans';\n  font-style: normal;\n}\n\nlabel {\n  font: 1rem monospace;\n  white-space: nowrap;\n}\n\n.container {\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.sample {\n  text-transform: uppercase;\n  font: 1.5rem 'MutatorSans', sans-serif;\n}",
    "web-scraper-order": "1557090233-3640",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "format()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#format()",
    definition:
      "The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.",
    "css-property-name": "src",
    syntax:
      '/* <url> values */\nsrc: url(https://somewebsite.com/path/to/font.woff); /* Absolute URL */\nsrc: url(path/to/font.woff);                         /* Relative URL */\nsrc: url(path/to/font.woff) format("woff");          /* Explicit format */\nsrc: url(\'path/to/font.woff\');                       /* Quoted URL */\nsrc: url(path/to/svgfont.svg#example);               /* Fragment identifying font */\n\n/* <font-face-name> values */\nsrc: local(font);      /* Unquoted name */\nsrc: local(some font); /* Name containing space */\nsrc: local("font");    /* Quoted name */\n\n/* Multiple items */\nsrc: local(font), url(path/to/font.svg) format("svg"),\n     url(path/to/font.woff) format("woff"),\n     url(path/to/font.otf) format("opentype");',
    "web-scraper-order": "1557090229-3639",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "fr",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value#fr",
    definition:
      "The <flex> CSS data type denotes a flexible length within a grid container. It is used in grid-template-columns, grid-template-rows and other related properties.",
    "css-property-name": "<flex>",
    syntax:
      "1fr    /* Using an integer value */\n2.5fr  /* Using a float value */",
    "web-scraper-order": "1557090227-3638",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "gap",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
    definition: "",
    "css-property-name": "gap (grid-gap)",
    syntax:
      "/* One <length> value */\ngap: 20px;\ngap: 1em;\ngap: 3vmin;\ngap: 0.5cm;\n\n/* One <percentage> value */\ngap: 16%;\ngap: 100%;\n\n/* Two <length> values */\ngap: 20px 10px;\ngap: 1em 0.5em;\ngap: 3vmin 2vmax;\ngap: 0.5cm 2mm;\n\n/* One or two <percentage> values */\ngap: 16% 100%;\ngap: 21px 82%;\n\n/* calc() values */\ngap: calc(10% + 20px);\ngap: calc(20px + 10%) calc(10% - 5px);\n\n/* Global values */\ngap: inherit;\ngap: initial;\ngap: unset;",
    "web-scraper-order": "1557090219-3634",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grad",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#grad",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    "css-property-name": "<angle>",
    syntax: null,
    "web-scraper-order": "1557090216-3633",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grayscale()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale",
    definition:
      "The grayscale() CSS function converts the input image to grayscale. Its result is a <filter-function>.",
    "css-property-name": "grayscale()",
    syntax:
      "grayscale(0)     /* No effect */\ngrayscale(.7)    /* 70% grayscale */\ngrayscale(100%)  /* Completely grayscale */",
    "web-scraper-order": "1557090212-3631",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid",
    definition:
      "The grid CSS property is a shorthand property that sets all of the explicit grid properties (grid-template-rows, grid-template-columns, and grid-template-areas), and all the implicit grid properties (grid-auto-rows, grid-auto-columns, and grid-auto-flow), in a single declaration.",
    "css-property-name": "grid",
    syntax:
      '/* <\'grid-template\'> values */\ngrid: none;\ngrid: "a" 100px "b" 1fr;\ngrid: [linename1] "a" 100px [linename2];\ngrid: "a" 200px "b" min-content;\ngrid: "a" minmax(100px, max-content) "b" 20%;\ngrid: 100px / 200px;\ngrid: minmax(400px, min-content) / repeat(auto-fill, 50px);\n\n/* <\'grid-template-rows\'> /\n   [ auto-flow && dense? ] <\'grid-auto-columns\'>? values */\ngrid: 200px / auto-flow;\ngrid: 30% / auto-flow dense;\ngrid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;\ngrid: [line1] minmax(20em, max-content) / auto-flow dense 40%;\n\n/* [ auto-flow && dense? ] <\'grid-auto-rows\'>? /\n   <\'grid-template-columns\'> values */\ngrid: auto-flow / 200px;\ngrid: auto-flow dense / 30%;\ngrid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);\ngrid: auto-flow dense 40% / [line1] minmax(20em, max-content);\n\n/* Global values */\ngrid: inherit;\ngrid: initial;\ngrid: unset;',
    "web-scraper-order": "1557090210-3630",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-area",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="item1"></div>\n  <div id="item2"></div>\n  <div id="item3"></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area",
    definition:
      "The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end, specifying a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.",
    "css-property-name": "grid-area",
    syntax:
      "/* Keyword values */\ngrid-area: auto;\ngrid-area: auto / auto;\ngrid-area: auto / auto / auto;\ngrid-area: auto / auto / auto / auto;\n\n/* <custom-ident> values */\ngrid-area: some-grid-area;\ngrid-area: some-grid-area / another-grid-area;\n\n/* <integer> && <custom-ident>? values */\ngrid-area:  4 some-grid-area;\ngrid-area:  4 some-grid-area / 2 another-grid-area;\n\n/* span && [ <integer> || <custom-ident> ] values */\ngrid-area: span 3;\ngrid-area: span 3 / span some-grid-area;\ngrid-area: 2 span / another-grid-area span;\n\n/* Global values */\ngrid-area: inherit;\ngrid-area: initial;\ngrid-area: unset;",
    "web-scraper-order": "1557090208-3629",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-auto-columns",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="item1"></div>\n  <div id="item2"></div>\n  <div id="item3"></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns",
    definition:
      "The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.",
    "css-property-name": "grid-auto-columns",
    syntax:
      "/* Keyword values */\ngrid-auto-columns: min-content;\ngrid-auto-columns: max-content;\ngrid-auto-columns: auto;\n\n/* <length> values */\ngrid-auto-columns: 100px;\ngrid-auto-columns: 20cm;\ngrid-auto-columns: 50vmax;\n\n/* <percentage> values */\ngrid-auto-columns: 10%;\ngrid-auto-columns: 33.3%;\n\n/* <flex> values */\ngrid-auto-columns: 0.5fr;\ngrid-auto-columns: 3fr;\n\n/* minmax() values */\ngrid-auto-columns: minmax(100px, auto);\ngrid-auto-columns: minmax(max-content, 2fr);\ngrid-auto-columns: minmax(20%, 80vmax);\n\n/* fit-content() values */\ngrid-auto-columns: fit-content(400px);\ngrid-auto-columns: fit-content(5cm);\ngrid-auto-columns: fit-content(20%);\n\n/* multiple track-size values */\ngrid-auto-columns: min-content max-content auto;\ngrid-auto-columns: 100px 150px 390px;\ngrid-auto-columns: 10% 33.3%;\ngrid-auto-columns: 0.5fr 3fr 1fr;\ngrid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);\ngrid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);\n\n/* Global values */\ngrid-auto-columns: inherit;\ngrid-auto-columns: initial;\ngrid-auto-columns: unset;",
    "web-scraper-order": "1557090206-3628",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-auto-flow",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="item1"></div>\n  <div id="item2"></div>\n  <div id="item3"></div>\n  <div id="item4"></div>\n  <div id="item5"></div>\n</div>\n<select id="direction" onchange="changeGridAutoFlow()">\n  <option value="column">column</option>\n  <option value="row">row</option>\n</select>\n<input id="dense" type="checkbox" onchange="changeGridAutoFlow()">\n<label for="dense">dense</label>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow",
    definition:
      "The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
    "css-property-name": "grid-auto-flow",
    syntax:
      "/* Keyword values */\ngrid-auto-flow: row;\ngrid-auto-flow: column;\ngrid-auto-flow: dense;\ngrid-auto-flow: row dense;\ngrid-auto-flow: column dense;\n\n/* Global values */\ngrid-auto-flow: inherit;\ngrid-auto-flow: initial;\ngrid-auto-flow: unset;",
    "web-scraper-order": "1557090204-3627",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-auto-rows",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="item1"></div>\n  <div id="item2"></div>\n  <div id="item3"></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows",
    definition:
      "The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.",
    "css-property-name": "grid-auto-rows",
    syntax:
      "/* Keyword values */\ngrid-auto-rows: min-content;\ngrid-auto-rows: max-content;\ngrid-auto-rows: auto;\n\n/* <length> values */\ngrid-auto-rows: 100px;\ngrid-auto-rows: 20cm;\ngrid-auto-rows: 50vmax;\n\n/* <percentage> values */\ngrid-auto-rows: 10%;\ngrid-auto-rows: 33.3%;\n\n/* <flex> values */\ngrid-auto-rows: 0.5fr;\ngrid-auto-rows: 3fr;\n\n/* minmax() values */\ngrid-auto-rows: minmax(100px, auto);\ngrid-auto-rows: minmax(max-content, 2fr);\ngrid-auto-rows: minmax(20%, 80vmax);\n\n/* multiple track-size values */\ngrid-auto-rows: min-content max-content auto;\ngrid-auto-rows: 100px 150px 390px;\ngrid-auto-rows: 10% 33.3%;\ngrid-auto-rows: 0.5fr 3fr 1fr;\ngrid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);\ngrid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);\n\n/* Global values */\ngrid-auto-rows: inherit;\ngrid-auto-rows: initial;\ngrid-auto-rows: unset;",
    "web-scraper-order": "1557090202-3626",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-column",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="item1"></div>\n  <div id="item2"></div>\n  <div id="item3"></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column",
    definition:
      "The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
    "css-property-name": "grid-column",
    syntax:
      "#grid {\n  display: grid;\n  height: 100px;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: 100px;\n}\n\n#item1 {\n  background-color: lime;\n}\n\n#item2 {\n  background-color: yellow;\n  grid-column: 2 / 4;\n}\n\n#item3 {\n  background-color: blue;\n  grid-column: span 2 / 7;\n}",
    "web-scraper-order": "1557090200-3625",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-column-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="wrapper">\n  <div class="box1">One</div>\n  <div class="box2">Two</div>\n  <div class="box3">Three</div>\n  <div class="box4">Four</div>\n  <div class="box5">Five</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end",
    definition:
      "The grid-column-end CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.",
    "css-property-name": "grid-column-end",
    syntax:
      "/* Keyword value */\ngrid-column-end: auto;\n\n/* <custom-ident> values */\ngrid-column-end: somegridarea;\n\n/* <integer> + <custom-ident> values */\ngrid-column-end: 2;\ngrid-column-end: somegridarea 4;\n\n/* span + <integer> + <custom-ident> values */\ngrid-column-end: span 3;\ngrid-column-end: span somegridarea;\ngrid-column-end: 5 somegridarea span;\n\n/* Global values */\ngrid-column-end: inherit;\ngrid-column-end: initial;\ngrid-column-end: unset;",
    "web-scraper-order": "1557090198-3624",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-column-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="wrapper">\n  <div class="box1">One</div>\n  <div class="box2">Two</div>\n  <div class="box3">Three</div>\n  <div class="box4">Four</div>\n  <div class="box5">Five</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start",
    definition:
      "The grid-column-start CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.",
    "css-property-name": "grid-column-start",
    syntax:
      ".wrapper { \n  display: grid; \n  grid-template-columns: repeat(3, 1fr); \n  grid-auto-rows: 100px; \n} \n\n.box1 { \n  grid-column-start: 1; \n  grid-column-end: 4; \n  grid-row-start: 1; \n  grid-row-end: 3; \n}\n\n.box2 { \n  grid-column-start: 1; \n  grid-row-start: 3; \n  grid-row-end: 5; \n}",
    "web-scraper-order": "1557090196-3623",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-row",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="item1"></div>\n  <div id="item2"></div>\n  <div id="item3"></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row",
    definition:
      "The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
    "css-property-name": "grid-row",
    syntax:
      "/* Keyword values */\ngrid-row: auto;\ngrid-row: auto / auto;\n\n/* <custom-ident> values */\ngrid-row: somegridarea;\ngrid-row: somegridarea / someothergridarea;\n\n/* <integer> + <custom-ident> values */\ngrid-row: somegridarea 4;\ngrid-row: 4 somegridarea / 6;\n\n/* span + <integer> + <custom-ident> values */\ngrid-row: span 3;\ngrid-row: span somegridarea;\ngrid-row: 5 somegridarea span;\ngrid-row: span 3 / 6;\ngrid-row: span somegridarea / span someothergridarea;\ngrid-row: 5 somegridarea span / 2 span;\n\n/* Global values */\ngrid-row: inherit;\ngrid-row: initial;\ngrid-row: unset;",
    "web-scraper-order": "1557090194-3622",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-row-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="wrapper">\n  <div class="box1">One</div>\n  <div class="box2">Two</div>\n  <div class="box3">Three</div>\n  <div class="box4">Four</div>\n  <div class="box5">Five</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end",
    definition:
      "The grid-row-end CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.",
    "css-property-name": "grid-row-end",
    syntax:
      "/* Keyword value */\ngrid-row-end: auto;\n\n/* <custom-ident> values */\ngrid-row-end: somegridarea;\n\n/* <integer> + <custom-ident> values */\ngrid-row-end: 2;\ngrid-row-end: somegridarea 4;\n\n/* span + <integer> + <custom-ident> values */\ngrid-row-end: span 3;\ngrid-row-end: span somegridarea;\ngrid-row-end: 5 somegridarea span;\n\n/* Global values */\ngrid-row-end: inherit;\ngrid-row-end: initial;\ngrid-row-end: unset;",
    "web-scraper-order": "1557090192-3621",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-row-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="wrapper">\n  <div class="box1">One</div>\n  <div class="box2">Two</div>\n  <div class="box3">Three</div>\n  <div class="box4">Four</div>\n  <div class="box5">Five</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start",
    definition:
      "The grid-row-start CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.",
    "css-property-name": "grid-row-start",
    syntax:
      "/* Keyword value */\ngrid-row-start: auto;\n\n/* <custom-ident> values */\ngrid-row-start: somegridarea;\n\n/* <integer> + <custom-ident> values */\ngrid-row-start: 2;\ngrid-row-start: somegridarea 4;\n\n/* span + <integer> + <custom-ident> values */\ngrid-row-start: span 3;\ngrid-row-start: span somegridarea;\ngrid-row-start: 5 somegridarea span;\n\n/* Global values */\ngrid-row-start: inherit;\ngrid-row-start: initial;\ngrid-row-start: unset;",
    "web-scraper-order": "1557090189-3620",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-template",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template",
    definition:
      "The grid-template CSS property is a shorthand property for defining grid columns, rows, and areas.",
    "css-property-name": "grid-template",
    syntax:
      '/* Keyword value */\ngrid-template: none;\n\n/* grid-template-rows / grid-template-columns values */\ngrid-template: 100px 1fr / 50px 1fr;\ngrid-template: auto 1fr / auto 1fr auto;\ngrid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;\ngrid-template: fit-content(100px) / fit-content(40%);\n\n/* grid-template-areas grid-template-rows / grid-template-column values */\ngrid-template: "a a a"\n               "b b b";\ngrid-template: "a a a" 20%\n               "b b b" auto;\ngrid-template: [header-top] "a a a"     [header-bottom]\n                 [main-top] "b b b" 1fr [main-bottom]\n                            / auto 1fr auto;\n\n/* Global values */\ngrid-template: inherit;\ngrid-template: initial;\ngrid-template: unset;',
    "web-scraper-order": "1557090187-3619",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-template-areas",
    "css-property-example-css": null,
    "css-property-example-html":
      '<section id="page">\n  <header>Header</header>\n  <nav>Navigation</nav>\n  <main>Main area</main>\n  <footer>Footer</footer>\n</section>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas",
    definition:
      "The grid-template-areas CSS property specifies named grid areas.",
    "css-property-name": "grid-template-areas",
    syntax:
      '/* Keyword value */\ngrid-template-areas: none;\n\n/* <string> values */\ngrid-template-areas: "a b";\ngrid-template-areas: "a b b"\n                     "a c d";\n\n/* Global values */\ngrid-template-areas: inherit;\ngrid-template-areas: initial;\ngrid-template-areas: unset;',
    "web-scraper-order": "1557090185-3618",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-template-columns",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="areaA">A</div>\n  <div id="areaB">B</div>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
    definition:
      "The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.",
    "css-property-name": "grid-template-columns",
    syntax:
      "/* Keyword value */\ngrid-template-columns: none;\n\n/* <track-list> values */\ngrid-template-columns: 100px 1fr;\ngrid-template-columns: [linename] 100px;\ngrid-template-columns: [linename1] 100px [linename2 linename3];\ngrid-template-columns: minmax(100px, 1fr);\ngrid-template-columns: fit-content(40%);\ngrid-template-columns: repeat(3, 200px);\n\n/* <auto-track-list> values */\ngrid-template-columns: 200px repeat(auto-fill, 100px) 300px;\ngrid-template-columns: minmax(100px, max-content)\n                       repeat(auto-fill, 200px) 20%;\ngrid-template-columns: [linename1] 100px [linename2]\n                       repeat(auto-fit, [linename3 linename4] 300px)\n                       100px;\ngrid-template-columns: [linename1 linename2] 100px\n                       repeat(auto-fit, [linename1] 300px) [linename3];\n\n/* Global values */\ngrid-template-columns: inherit;\ngrid-template-columns: initial;\ngrid-template-columns: unset;",
    "web-scraper-order": "1557090183-3617",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "grid-template-rows",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="grid">\n  <div id="areaA">A</div>\n  <div id="areaB">B</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
    definition:
      "The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.",
    "css-property-name":
      "CSS grid-template-rows — Define grid row names and sizing",
    syntax:
      "/* Keyword value */\ngrid-template-rows: none;\n\n/* <track-list> values */\ngrid-template-rows: 100px 1fr;\ngrid-template-rows: [linename] 100px;\ngrid-template-rows: [linename1] 100px [linename2 linename3];\ngrid-template-rows: minmax(100px, 1fr);\ngrid-template-rows: fit-content(40%);\ngrid-template-rows: repeat(3, 200px);\n\n/* <auto-track-list> values */\ngrid-template-rows: 200px repeat(auto-fill, 100px) 300px;\ngrid-template-rows: minmax(100px, max-content)\n                       repeat(auto-fill, 200px) 20%;\ngrid-template-rows: [linename1] 100px [linename2]\n                       repeat(auto-fit, [linename3 linename4] 300px)\n                       100px;\ngrid-template-rows: [linename1 linename2] 100px\n                       repeat(auto-fit, [linename1] 300px) [linename3];\n\n/* Global values */\ngrid-template-rows: inherit;\ngrid-template-rows: initial;\ngrid-template-rows: unset;",
    "web-scraper-order": "1557090181-3616",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "hanging-punctuation",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim nunc mauris, et sollicitudin est scelerisque sed. Praesent laoreet tortor massa, sit amet vulputate nulla pharetra ut.”</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation",
    definition:
      "The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.",
    "css-property-name": "hanging-punctuation",
    syntax: "p {\n  hanging-punctuation: first last;\n  margin: .5rem;\n}",
    "web-scraper-order": "1557090177-3614",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "height (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/height",
    definition:
      "The height CSS descriptor is a shorthand descriptor for setting both min-height and max-height of the viewport. by providing one viewport length value will set both, the minimum height and the maximum height, to the value provided.",
    "css-property-name": "height",
    syntax:
      "/* One value */\nheight: auto;\nheight: 320px;\nheight: 15em;\n\n/* Two values */\nheight: 320px 200px;",
    "web-scraper-order": "1557090173-3612",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "height",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="taller">I\'m 50 pixels tall.</div>\n<div id="shorter">I\'m 25 pixels tall.</div>\n<div id="parent">\n  <div id="child">\n    I\'m half the height of my parent.\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/height",
    definition:
      "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.",
    "css-property-name": "height",
    syntax:
      "div {\n  width: 250px;\n  margin-bottom: 5px;\n  border: 2px solid blue;\n}\n\n#taller {\n  height: 50px;\n}\n\n#shorter {\n  height: 25px;\n}\n\n#parent {\n  height: 100px;\n}\n\n#child {\n  height: 50%;\n  width: 75%;\n}",
    "web-scraper-order": "1557090175-3613",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "hsl()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div style="color:blue; border: 1px dashed currentColor;">\n  The color of this text is blue.\n  <div style="background:currentColor; height:9px;"></div>\n  This block is surrounded by a blue border.\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    "css-property-name": "<color>",
    syntax: null,
    "web-scraper-order": "1557090167-3610",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "hsla()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div style="color:blue; border: 1px dashed currentColor;">\n  The color of this text is blue.\n  <div style="background:currentColor; height:9px;"></div>\n  This block is surrounded by a blue border.\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsla()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    "css-property-name": "<color>",
    syntax: null,
    "web-scraper-order": "1557090165-3609",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "hue-rotate()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate",
    definition:
      "The hue-rotate() CSS function rotates the hue of an element and its contents. Its result is a <filter-function>.",
    "css-property-name": "hue-rotate()",
    syntax:
      "hue-rotate(-90deg)  /* Same as 270deg rotation */\nhue-rotate(0deg)    /* No effect */\nhue-rotate(90deg)   /* 90deg rotation */\nhue-rotate(.5turn)  /* 180deg rotation */\nhue-rotate(405deg)  /* Same as 45deg rotation */",
    "web-scraper-order": "1557090163-3608",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "hyphens",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul>\n  <li><code>none</code>: no hyphen; overflow if needed\n    <p lang="en" class="none">An extreme&shy;ly long English word</p>\n  </li>  \n  <li><code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)\n    <p lang="en" class="manual">An extreme&shy;ly long English word</p>\n  </li>\n  <li><code>auto</code>: hyphen where the algorithm is deciding (if needed)\n    <p lang="en" class="auto">An extreme&shy;ly long English word</p>\n  </li>\n</ul>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens",
    definition:
      "The hyphens CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.",
    "css-property-name": "hyphens",
    syntax:
      "p { \n  width: 55px;\n  border: 1px solid black;\n }\np.none {\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\np.manual {\n  -webkit-hyphens: manual;\n  -ms-hyphens: manual;\n  hyphens: manual;\n}\np.auto {\n  -webkit-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}",
    "web-scraper-order": "1557090161-3607",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "image()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/image#The_image()_functional_notation",
    definition:
      "The <image> CSS data type represents a two-dimensional image. There are two kinds of images: plain images, referenced with a <url>, and dynamically-generated images, generated with <gradient> or element(). Additional CSS image functions include image(), image-set(), and cross-fade(). Images can be used with numerous CSS properties, such as background-image, border-image, content, cursor, and list-style-image.",
    "css-property-name": "<image>",
    syntax:
      "url(test.jpg)               /* A <url>, as long as test.jpg is an actual image */\nlinear-gradient(blue, red)  /* A <gradient> */\nelement(#realid)            /* A part of the webpage, referenced with the element() function,\n                               if \"realid\" is an existing ID on the page */ \nimage(ltr 'arrow.png#xywh=0,0,16,16', red) \n                            /* A section 16x16 section of <url>, starting from the top, left of the original\n                               image as long as arrow.png is a supported image, otherwise a solid \n                               red swatch. If language is rtl, the image will be horizontally flipped. */ \ncross-fade(20% url(twenty.png), url(eighty.png)) \n                            /* cross faded images, with twenty being 20% opaque \n                               and eighty being 80% opaque. */ \nimage-set('test.jpg' 1x, 'test-2x.jpg' 2x)  \n                            /* a selection of images with varying resolutions */",
    "web-scraper-order": "1557090154-3605",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "image-orientation",
    "css-property-example-css": null,
    "css-property-example-html":
      '<img id="image" src="https://mdn.mozillademos.org/files/12668/MDN.svg"\n    alt="Orientation taken from the image">\n<select id="imageOrientation">\n  <option value="from-image">from-image</option>\n  <option value="none">none</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation",
    definition:
      "The image-orientation CSS property specifies a layout-independent correction to the orientation of an image. It should not be used for any other orientation adjustments; instead, the transform property should be used with the rotate <transform-function>.",
    "css-property-name": "image-orientation",
    syntax:
      "#image {\n  image-orientation: from-image; /* Can be changed in the live sample */\n}",
    "web-scraper-order": "1557090152-3604",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "image-rendering",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <img class="auto" alt="auto" src="https://mdn.mozillademos.org/files/2765/blumen.jpg" />\n  <img class="pixelated" alt="pixelated" src="https://mdn.mozillademos.org/files/2765/blumen.jpg" />\n  <img class="crisp-edges" alt="crisp-edges" src="https://mdn.mozillademos.org/files/2765/blumen.jpg" />\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering",
    definition:
      "The image-rendering CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.",
    "css-property-name": "image-rendering",
    syntax:
      "/* Keyword values */\nimage-rendering: auto;\nimage-rendering: crisp-edges;\nimage-rendering: pixelated;\n\n/* Global values */\nimage-rendering: inherit;\nimage-rendering: initial;\nimage-rendering: unset;",
    "web-scraper-order": "1557090150-3603",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "image-set()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image-set",
    definition:
      "The image-set() CSS function notation is a method of letting the browser pick the most appropriate CSS image from a given set, primarily for high pixel density screens.",
    "css-property-name": "image-set()",
    syntax:
      'background-image: image-set( "cat.png" 1x,\n                             "cat-2x.png" 2x,\n                             "cat-print.png" 600dpi);',
    "web-scraper-order": "1557090148-3602",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "in",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#in",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557090144-3600",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inherit",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inherit",
    definition:
      "The inherit CSS keyword causes the element for which it is specified to take the computed value of the property from its parent element. It can be applied to any CSS property, including the CSS shorthand all.",
    "css-property-name": "inherit",
    syntax:
      "/* Make second-level headers green */\nh2 { color: green; }\n\n/* ...but leave those in the sidebar alone so they use their parent's color */\n#sidebar h2 { color: inherit; }",
    "web-scraper-order": "1557090138-3597",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "initial",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>\n  <span>This text is red.</span>\n  <em>This text is in the initial color (typically black).</em>\n  <span>This is red again.</span>\n</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/initial",
    definition:
      "The initial CSS keyword applies the initial (or default) value of a property to an element. The initial value should not be confused with the value specified by the browser's style sheet. It can be applied to any CSS property. This includes the CSS shorthand all, with which initial can be used to restore all CSS properties to their initial state.",
    "css-property-name": "initial",
    syntax: "p {\n  color: red;\n}\n\nem {\n  color: initial;\n}",
    "web-scraper-order": "1557090136-3596",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inline-size",
    "css-property-example-css": null,
    "css-property-example-html": '<p class="exampleText">Example text</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size",
    definition:
      "The inline-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode.",
    "css-property-name": "inline-size",
    syntax:
      ".exampleText {\n  writing-mode: vertical-rl;\n  background-color: yellow;\n  inline-size: 110px;\n}",
    "web-scraper-order": "1557090134-3595",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset",
    definition:
      "The inset CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "inset",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  position: relative;\n  inset: 20px 50px 30px 10px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090132-3594",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset()",
    "css-property-example-css": null,
    "css-property-example-html": "<div></div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#inset()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    "css-property-name": "<basic-shape>",
    syntax:
      "div {\n  width: 300px;\n  height: 300px;\n  background: repeating-linear-gradient(red, orange 50px);\n  clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  animation: 4s poly infinite alternate ease-in-out;\n  margin: 10px auto;\n}\n\n@keyframes poly {\n  from {\n    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  }\n\n  to {\n    clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);\n  }\n}",
    "web-scraper-order": "1557090130-3593",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset-block",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block",
    definition:
      "The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "inset-block",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  position: relative;\n  inset-block: 20px 50px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090127-3592",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset-block-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end",
    definition:
      "The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "inset-block-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  position: relative;\n  inset-block-end: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090125-3591",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset-block-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start",
    definition:
      "The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "inset-block-start",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  position: relative;\n  inset-block-start: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090123-3590",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset-inline",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline",
    definition:
      "The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "inset-inline",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  position: relative;\n  inset-inline: 20px 50px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090121-3589",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset-inline-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end",
    definition:
      "The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "inset-inline-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  position: relative;\n  inset-inline-end: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090119-3588",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "inset-inline-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start",
    definition:
      "The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "inset-inline-start",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  position: relative;\n  inset-inline-start: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090117-3587",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "invert()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert",
    definition:
      "The invert() CSS function inverts the color samples in the input image. Its result is a <filter-function>.",
    "css-property-name": "invert()",
    syntax:
      "invert(0)     /* No effect */\ninvert(.6)    /* 60% inversion */\ninvert(100%)  /* Completely inverted */",
    "web-scraper-order": "1557090111-3584",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "isolation",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="b" class="a">\n  <div id="d">\n    <div class="a c">auto</div>\n  </div>\n  <div id="e">\n    <div class="a c">isolate</div>\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation",
    definition:
      "The isolation CSS property determines whether an element must create a new stacking context.",
    "css-property-name": "isolation",
    syntax:
      ".a {\n  background-color: rgb(0,255,0);\n}\n#b {\n  width: 200px;\n  height: 210px;\n}\n.c {\n  width: 100px;\n  height: 100px;\n  border: 1px solid black;\n  padding: 2px;\n  mix-blend-mode: difference;\n}\n#d {\n  isolation: auto;\n}\n#e {\n  isolation: isolate;\n}",
    "web-scraper-order": "1557090109-3583",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "justify-content",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n<select id="justifyContent">\n  <option value="start">start</option>\n  <option value="end">end</option>\n  <option value="flex-start">flex-start</option>\n  <option value="flex-end">flex-end</option>\n  <option value="center">center</option>\n  <option value="left">left</option>\n  <option value="right">right</option>\n  <option value="baseline">baseline</option>\n  <option value="first baseline">first baseline</option>\n  <option value="last baseline">last baseline</option>\n  <option value="space-between" selected>space-between</option>\n  <option value="space-around">space-around</option>\n  <option value="space-evenly">space-evenly</option>\n  <option value="stretch">stretch</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
    definition:
      "The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.",
    "css-property-name":
      "CSS justify-content — Control spacing of grid and flex items",
    syntax:
      "#container {\n  display: flex;\n  justify-content: space-between; /* Can be changed in the live sample */\n}\n\n#container > div {\n  width: 100px;\n  height: 100px;\n  background: linear-gradient(-45deg, #788cff, #b4c8ff);\n}",
    "web-scraper-order": "1557090107-3582",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "justify-items",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items",
    definition:
      "The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.",
    "css-property-name": "justify-items",
    syntax: null,
    "web-scraper-order": "1557090105-3581",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "justify-self",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self",
    definition:
      "The CSS justify-self property set the way a box is justified inside its alignment container along the appropriate axis.",
    "css-property-name": "justify-self",
    syntax: null,
    "web-scraper-order": "1557090103-3580",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "kHz",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/frequency#kHz",
    definition:
      "The <frequency> CSS data type represents a frequency dimension, such as the pitch of a speaking voice. It is not currently used in any CSS properties.",
    "css-property-name": "<frequency>",
    syntax: null,
    "web-scraper-order": "1557090101-3579",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "left",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="wrap">\n  <div id="example_1">\n    <pre>\n      position: absolute;\n      left: 20px;\n      top: 20px;\n    </pre>\n    <p>The only containing element for this div is the main window, so it positions itself in relation to it.</p>\n  </div>\n\n  <div id="example_2">\n    <pre>\n      position: relative;\n      top: 0;\n      right: 0;\n    </pre>\n    <p>Relative position in relation to its siblings.</p>\n  </div>\n\n  <div id="example_3">\n    <pre>\n      float: right;\n      position: relative;\n      top: 20px;\n      left: 20px;\n    </pre>\n    <p>Relative to its sibling div above, but removed from flow of content.</p>\n\n    <div id="example_4">\n      <pre>\n        position: absolute;\n        bottom: 10px;\n        right: 20px;\n      </pre>\n      <p>Absolute position inside of a parent with relative position</p>\n    </div>\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/left",
    definition:
      "The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.",
    "css-property-name": "left",
    syntax:
      "#wrap {\n  width: 700px;\n  margin: 0 auto;\n  background: #5C5C5C;\n}\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  white-space: pre-line;\n  word-wrap: break-word;\n}\n\n#example_1 {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  background-color: #D8F5FF;\n}\n\n#example_2 {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  top: 0;\n  right: 0;\n  background-color: #C1FFDB;\n\n}\n#example_3 {\n  width: 600px;\n  height: 400px;\n  position: relative;\n  top: 20px;\n  left: 20px;\n  background-color: #FFD7C2;\n}\n\n#example_4 {\n  width:200px;\n  height:200px;\n  position:absolute;\n  bottom:10px;\n  right:20px;\n  background-color:#FFC7E4;\n}",
    "web-scraper-order": "1557090086-3573",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "letter-spacing",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="normal">letter spacing</p>\n<p class="em-wide">letter spacing</p>\n<p class="em-wider">letter spacing</p>\n<p class="em-tight">letter spacing</p>\n<p class="px-wide">letter spacing</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing",
    definition:
      "The letter-spacing CSS property sets the spacing behavior between text characters.",
    "css-property-name": "letter-spacing",
    syntax:
      ".normal   { letter-spacing: normal; }\n.em-wide  { letter-spacing: 0.4em; }\n.em-wider { letter-spacing: 1em; }\n.em-tight { letter-spacing: -0.05em; }\n.px-wide  { letter-spacing: 6px; }",
    "web-scraper-order": "1557090080-3570",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "line-break",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/line-break",
    definition:
      "The line-break CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.",
    "css-property-name": "line-break",
    syntax: null,
    "web-scraper-order": "1557090078-3569",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "line-height",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="box green">\n <h1>Avoid unexpected results by using unitless line-height.</h1>\n  length and percentage line-heights have poor inheritance behavior ...\n</div>\n\n<div class="box red">\n <h1>Avoid unexpected results by using unitless line-height.</h1>\n  length and percentage line-heights have poor inheritance behavior ...\n</div>\n\n<!-- The first <h1> line-height is calculated from its own font-size   (30px × 1.1) = 33px  --> \n<!-- The second <h1> line-height results from the red div\'s font-size  (15px × 1.1) = 16.5px,  probably not what you want -->',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
    definition:
      "The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.",
    "css-property-name": "CSS line-height property",
    syntax:
      '/* All rules below have the same resultant line height */\n\ndiv { line-height: 1.2;   font-size: 10pt; }   /* number/unitless */ \ndiv { line-height: 1.2em; font-size: 10pt; }   /* length */ \ndiv { line-height: 120%;  font-size: 10pt; }   /* percentage */\ndiv { font: 10pt/1.2  Georgia,"Bitstream Charter",serif; } /* font shorthand */',
    "web-scraper-order": "1557090076-3568",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "linear-gradient()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient",
    definition:
      "The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the <gradient> data type, which is a special kind of <image>.",
    "css-property-name":
      "CSS linear-gradient() — Create linear fades across multiple colors",
    syntax:
      "linear-gradient(red, orange, yellow, green, blue); \nlinear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);",
    "web-scraper-order": "1557090074-3567",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "list-style",
    "css-property-example-css": null,
    "css-property-example-html":
      'List 1\n<ul class="one">\n  <li>List Item1</li>\n  <li>List Item2</li>\n  <li>List Item3</li>\n</ul>\nList 2\n<ul class="two">\n  <li>List Item A</li>\n  <li>List Item B</li>\n  <li>List Item C</li>\n</ul>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style",
    definition:
      "The list-style CSS property is a shorthand to set list style properties list-style-type, list-style-image, and list-style-position.",
    "css-property-name": "list-style",
    syntax:
      ".one {\n  list-style: circle;\n}\n\n.two {\n  list-style: square inside;\n}",
    "web-scraper-order": "1557090070-3565",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "list-style-image",
    "css-property-example-css": null,
    "css-property-example-html":
      "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image",
    definition:
      "The list-style-image CSS property sets an image to be used as the list item marker.",
    "css-property-name": "list-style-image",
    syntax:
      'ul {\n  list-style-image: url("https://mdn.mozillademos.org/files/11981/starsolid.gif");\n}',
    "web-scraper-order": "1557090068-3564",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "list-style-position",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="inside">List 1\n  <li>List Item 1-1</li>\n  <li>List Item 1-2</li>\n  <li>List Item 1-3</li>\n  <li>List Item 1-4</li>\n</ul>\n<ul class="outside">List 2\n  <li>List Item 2-1</li>\n  <li>List Item 2-2</li>\n  <li>List Item 2-3</li>\n  <li>List Item 2-4</li>\n</ul>\n<ul class="inside-img">List 3\n  <li>List Item 3-1</li>\n  <li>List Item 3-2</li>\n  <li>List Item 3-3</li>\n  <li>List Item 3-4</li>\n</ul>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position",
    definition:
      "The list-style-position CSS property sets the position of the ::marker relative to a list item.",
    "css-property-name": "list-style-position",
    syntax: null,
    "web-scraper-order": "1557090065-3563",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "list-style-type",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ol class="normal">List 1\n  <li>Hello</li>\n  <li>World</li>\n  <li>What\'s up?</li>\n</ol>\n\n<ol class="shortcut">List 2\n  <li>Looks</li>\n  <li>Like</li>\n  <li>The</li>\n  <li>Same</li>\n</ol>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type",
    definition:
      "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.",
    "css-property-name": "list-style-type",
    syntax:
      'ol.normal {\n  list-style-type: upper-alpha;\n}\n\n/* or use the shortcut "list-style": */\nol.shortcut {\n  list-style: upper-alpha;\n}',
    "web-scraper-order": "1557090063-3562",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "local()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#local()",
    definition:
      "The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.",
    "css-property-name": "src",
    syntax:
      '/* <url> values */\nsrc: url(https://somewebsite.com/path/to/font.woff); /* Absolute URL */\nsrc: url(path/to/font.woff);                         /* Relative URL */\nsrc: url(path/to/font.woff) format("woff");          /* Explicit format */\nsrc: url(\'path/to/font.woff\');                       /* Quoted URL */\nsrc: url(path/to/svgfont.svg#example);               /* Fragment identifying font */\n\n/* <font-face-name> values */\nsrc: local(font);      /* Unquoted name */\nsrc: local(some font); /* Name containing space */\nsrc: local("font");    /* Quoted name */\n\n/* Multiple items */\nsrc: local(font), url(path/to/font.svg) format("svg"),\n     url(path/to/font.woff) format("woff"),\n     url(path/to/font.otf) format("opentype");',
    "web-scraper-order": "1557090061-3561",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="center">This element is centered.</div>\n\n<div class="outside">This element is positioned outside of its container.</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
    definition:
      "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.",
    "css-property-name": "margin",
    syntax:
      ".center {\n  margin: auto;\n  background: lime;\n  width: 66%;\n}\n\n.outside {\n  margin: 3rem 0 0 -3rem;\n  background: cyan;\n  width: 66%;\n}",
    "web-scraper-order": "1557090059-3560",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-block",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block",
    definition: "",
    "css-property-name": "margin-block",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  margin-block: 20px 40px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090057-3559",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-block-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end",
    definition: "",
    "css-property-name": "margin-block-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  margin-block-end: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090055-3558",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-block-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start",
    definition: "",
    "css-property-name": "margin-block-start",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  margin-block-start: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090053-3557",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-bottom",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="container">\n<div class="box0">Box 0</div>\n<div class="box1">Box 1</div>\n<div class="box2">Box one\'s negative margin pulls me up</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom",
    definition:
      "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    "css-property-name": "margin-bottom",
    syntax:
      ".box0 {\n    margin-bottom:1em;\n    height:3em;\n}\n.box1 {\n    margin-bottom:-1.5em;\n    height:4em;\n}\n.box2 {\n    border:1px dashed black;\n    border-width:1px 0;\n    margin-bottom:2em;\n}",
    "web-scraper-order": "1557090051-3556",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-inline",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline",
    definition: "",
    "css-property-name": "margin-inline",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  margin-inline: 20px 40px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090049-3555",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-inline-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end",
    definition: "",
    "css-property-name": "margin-inline-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  margin-inline-end: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090047-3554",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-inline-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start",
    definition: "",
    "css-property-name": "margin-inline-start",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  margin-inline-start: 20px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557090045-3553",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-left",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left",
    definition:
      "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    "css-property-name": "margin-left",
    syntax:
      ".content { margin-left: 5%; }\n.sidebox { margin-left: 10px; }\n.logo    { margin-left: -5px; }",
    "web-scraper-order": "1557090043-3552",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-right",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right",
    definition:
      "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    "css-property-name": "margin-right",
    syntax:
      ".content { margin-right: 5%; }\n.sidebox { margin-right: 10px; }\n.logo    { margin-right: -5px; }",
    "web-scraper-order": "1557090041-3551",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "margin-top",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top",
    definition:
      "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    "css-property-name": "margin-top",
    syntax: null,
    "web-scraper-order": "1557090038-3550",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask",
    definition:
      "The mask CSS property hides an element (partially or fully) by masking or clipping the image at specific points.",
    "css-property-name": "mask",
    syntax:
      ".target {\n  mask: url(#c1) luminance;\n}\n\n.anothertarget {\n  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;\n}",
    "web-scraper-order": "1557090036-3549",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-clip",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="masked">\n</div>\n<select id="clipBox">\n  <option value="content-box">content-box</option>\n  <option value="padding-box">padding-box</option>\n  <option value="border-box" selected>border-box</option>\n  <option value="margin-box">margin-box</option>\n  <option value="fill-box">fill-box</option>\n  <option value="stroke-box">stroke-box</option>\n  <option value="view-box">view-box</option>\n  <option value="no-clip">no-clip</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip",
    definition:
      "The mask-clip CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.",
    "css-property-name": "mask-clip",
    syntax:
      "#masked {\n  width: 100px;\n  height: 100px;\n  background-color: #8cffa0;\n  margin: 20px;\n  border: 20px solid #8ca0ff;\n  padding: 20px;\n  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);\n  mask-size: 100% 100%;\n  mask-clip: border-box; /* Can be changed in the live sample */\n}",
    "web-scraper-order": "1557090034-3548",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-composite",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="masked">\n</div>\n<select id="compositeMode">\n  <option value="add">add</option>\n  <option value="subtract">subtract</option>\n  <option value="intersect">intersect</option>\n  <option value="exclude">exclude</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite",
    definition:
      "The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.",
    "css-property-name": "mask-composite",
    syntax:
      "#masked {\n  width: 100px;\n  height: 100px;\n  background-color: #8cffa0;\n  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg),\n              url(https://mdn.mozillademos.org/files/12676/star.svg);\n  mask-size: 100% 100%;\n  mask-composite: add; /* Can be changed in the live sample */\n}",
    "web-scraper-order": "1557090032-3547",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-image",
    "css-property-example-css": null,
    "css-property-example-html": '<div id="masked"></div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image",
    definition:
      "The mask-image CSS property sets the image that is used as mask layer for an element.",
    "css-property-name": "mask-image",
    syntax:
      "#masked {\n  width: 100px;\n  height: 100px;\n  background-color: #8cffa0;\n  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);\n  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);\n}",
    "web-scraper-order": "1557090030-3546",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-mode",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="masked">\n</div>\n<select id="maskMode">\n  <option value="alpha">alpha</option>\n  <option value="luminance">luminance</option>\n  <option value="match-source">match-source</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode",
    definition:
      "The mask-mode CSS property sets whether the mask reference defined by mask-image is treated as a luminance or alpha mask.",
    "css-property-name": "mask-mode",
    syntax:
      "#masked {\n  width: 227px;\n  height: 200px;\n  background: blue linear-gradient(red, blue);\n  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);\n  mask-mode: alpha; /* Can be changed in the live sample */\n}",
    "web-scraper-order": "1557090028-3545",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-origin",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="masked">\n</div>\n<select id="origin">\n  <option value="content-box">content-box</option>\n  <option value="padding-box">padding-box</option>\n  <option value="border-box" selected>border-box</option>\n  <option value="margin-box">margin-box</option>\n  <option value="fill-box">fill-box</option>\n  <option value="stroke-box">stroke-box</option>\n  <option value="view-box">view-box</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin",
    definition: "The mask-origin CSS property sets the origin of a mask.",
    "css-property-name": "mask-origin",
    syntax:
      "#masked {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n  border: 10px solid blue;\n  background-color: #8cffa0;\n  padding: 10px;\n  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);\n  mask-origin: border-box; /* Can be changed in the live sample */\n}",
    "web-scraper-order": "1557090026-3544",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-position",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="wrapper">\n  <div id="masked">\n  </div>\n</div>\n<select id="maskPosition">\n  <option value="top">top</option>\n  <option value="center">center</option>\n  <option value="bottom">bottom</option>\n  <option value="top right" selected>top right</option>\n  <option value="center center">center center</option>\n  <option value="bottom left">bottom left</option>\n  <option value="10px 20px">10px 20px</option>\n  <option value="60% 20%">60% 20%</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position",
    definition:
      "The mask-position CSS property sets the initial position, relative to the mask position layer set by mask-origin, for each defined mask image.",
    "css-property-name": "mask-position",
    syntax:
      "#wrapper {\n  border: 1px solid black;\n  width: 250px;\n  height: 250px;\n}\n\n#masked {\n  width: 250px;\n  height: 250px;\n  background: blue linear-gradient(red, blue);\n  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);\n  mask-repeat: no-repeat;\n  mask-position: top right; /* Can be changed in the live sample */\n  margin-bottom: 10px;\n}",
    "web-scraper-order": "1557090024-3543",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-repeat",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="masked">\n</div>\n<select id="repetition">\n  <option value="repeat-x">repeat-x</option>\n  <option value="repeat-y">repeat-y</option>\n  <option value="repeat" selected>repeat</option>\n  <option value="space">space</option>\n  <option value="round">round</option>\n  <option value="no-repeat">no-repeat</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat",
    definition:
      "The mask-repeat CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.",
    "css-property-name": "mask-repeat",
    syntax:
      "/* One-value syntax */\nmask-repeat: repeat-x;\nmask-repeat: repeat-y;\nmask-repeat: repeat;\nmask-repeat: space;\nmask-repeat: round;\nmask-repeat: no-repeat;\n\n/* Two-value syntax: horizontal | vertical */\nmask-repeat: repeat space;\nmask-repeat: repeat repeat;\nmask-repeat: round space;\nmask-repeat: no-repeat round;\n\n/* Multiple values */\nmask-repeat: space round, no-repeat;\nmask-repeat: round repeat, space, repeat-x;\n\n/* Global values */\nmask-repeat: inherit;\nmask-repeat: initial;\nmask-repeat: unset;",
    "web-scraper-order": "1557090022-3542",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-size",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="masked">\n</div>\n<select id="maskSize">\n  <option value="auto">auto</option>\n  <option value="40% 80%">40% 80%</option>\n  <option value="50%" selected>50%</option>\n  <option value="200px 100px">200px 100px</option>\n  <option value="cover">cover</option>\n  <option value="contain">contain</option>\n</select>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size",
    definition:
      "The mask-size CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.",
    "css-property-name": "mask-size",
    syntax:
      "/* Keywords syntax */\nmask-size: cover;\nmask-size: contain;\n\n/* One-value syntax */\n/* the width of the image (height set to 'auto') */\nmask-size: 50%;\nmask-size: 3em;\nmask-size: 12px;\nmask-size: auto;\n\n/* Two-value syntax */\n/* first value: width of the image, second value: height */\nmask-size: 50% auto;\nmask-size: 3em 25%;\nmask-size: auto 6px;\nmask-size: auto auto;\n\n/* Multiple values */\n/* Do not confuse this with mask-size: auto auto */\nmask-size: auto, auto;\nmask-size: 50%, 25%, 25%;\nmask-size: 6px, auto, contain;\n\n/* Global values */\nmask-size: inherit;\nmask-size: initial;\nmask-size: unset;",
    "web-scraper-order": "1557090020-3541",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mask-type",
    "css-property-example-css": null,
    "css-property-example-html":
      '<rect x="10" y="10" width="80" height="80"\n    fill="red" fill-opacity="0.7" />',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type",
    definition:
      "The mask-type CSS property sets whether an SVG <mask> element is used as a luminance or an alpha mask. It applies to the <mask> element itself.",
    "css-property-name": "mask-type",
    syntax:
      ".redsquare {\n  height: 100px;\n  width: 100px;\n  background-color: rgb(128, 128, 128);\n  border: solid 1px black;\n}",
    "web-scraper-order": "1557090018-3540",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "matrix()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="changed">Changed</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix",
    definition:
      "The matrix() CSS function defines a homogeneous 2D transformation matrix. Its result is a <transform-function> data type.",
    "css-property-name": "matrix()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.changed {\n  transform: matrix(1, 2, -1, 1, 80, 80);\n  background-color: pink;\n}",
    "web-scraper-order": "1557090016-3539",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "matrix3d()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="foo">\nLorem ipsum dolor sit amet, consectetur adipisicing elit.\nQuos quaerat sit soluta, quisquam exercitationem delectus qui unde in facere\nnecessitatibus aut quia porro dolorem nesciunt enim, at consequuntur aliquam esse?\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d",
    definition:
      "The matrix3d() CSS function defines a 3D transformation as a 4x4 homogeneous matrix. Its result is a <transform-function> data type.",
    "css-property-name": "matrix3d()",
    syntax:
      "html {\n  width: 100%;\n}\nbody {\n  height: 100vh;\n  /* Centering content */\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-content: center;\n  \n}\n.foo {\n  width: 50%;\n  padding: 1em;\n  color: white;\n  background: #ff8c66;\n  border: 2px dashed black;\n  text-align: center;\n  font-family: system-ui, sans-serif;\n  font-size: 14px;\n   /* Setting up animation for better demonstration */\n  animation: MotionScale 2s alternate linear infinite;\n}\n\n@keyframes MotionScale {\n  from {\n    /*\n      Identity matrix is used as basis here.\n      The matrix below describes the\n      following transformations:\n        Translates every X point by -50px\n        Translates every Y point by -100px\n        Translates every Z point by 0\n        Scales down by 10%\n    */\n    transform: matrix3d(\n      1,0,0,0,\n      0,1,0,0,\n      0,0,1,0,\n      -50,-100,0,1.1\n    );\n    \n  }\n  50% {\n    transform: matrix3d(\n      1,0,0,0,\n      0,1,0,0,\n      0,0,1,0,\n      0,0,0,0.9\n    );\n  }\n  to {\n     transform: matrix3d(\n      1,0,0,0,\n      0,1,0,0,\n      0,0,1,0,\n      50,100,0,1.1\n    )\n  }\n}",
    "web-scraper-order": "1557090014-3538",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "max()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/max",
    definition: "",
    "css-property-name": "max()",
    syntax: ".logo {\n  width: max(50vw, 300px);\n}",
    "web-scraper-order": "1557090012-3537",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "max-height (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/max-height",
    definition:
      "The max-height CSS descriptor specifies the maximum height of the viewport of a document defined via the @viewport at-rule.",
    "css-property-name": "max-height",
    syntax:
      "/* Keyword value */\nmax-height: auto;\n\n/* <length> values */\nmax-height: 400px;\nmax-height: 50em;\nmax-height: 20cm;\n\n/* <percentage> value */\nmax-height: 75%;",
    "web-scraper-order": "1557090007-3535",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "max-height",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/max-height",
    definition:
      "The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.",
    "css-property-name": "max-height",
    syntax: "table { max-height: 75%; }\n\nform { max-height: none; }",
    "web-scraper-order": "1557090009-3536",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "max-width (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/max-width",
    definition:
      "The max-width CSS descriptor specifies the maximum width of the viewport of a document defined via the @viewport at-rule.",
    "css-property-name": "max-width",
    syntax:
      "/* Keyword value */\nmax-width: auto;\n\n/* <length> values */\nmax-width: 600px;\nmax-width: 80em;\nmax-width: 15cm;\n\n/* <percentage> value */\nmax-width: 75%;",
    "web-scraper-order": "1557090003-3533",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "max-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="parent">\n  <div id="child">\n    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/max-width",
    definition:
      "The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.",
    "css-property-name": "max-width",
    syntax:
      "#parent {\n  background: lightblue;\n  width: 300px;\n}\n\n#child {\n  background: gold;\n  width: 100%;\n  max-width: 150px;\n}",
    "web-scraper-order": "1557090005-3534",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "max-zoom (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/max-zoom",
    definition:
      "The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.",
    "css-property-name": "max-zoom",
    syntax: null,
    "web-scraper-order": "1557090001-3532",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<form>\n  <label>Type something:</label>\n  <input type="text">\n</form>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min",
    definition: "",
    "css-property-name": "min()",
    syntax:
      "/* property: min(expression [, expression]) */\nwidth: min(10vw, 4em, 80px);",
    "web-scraper-order": "1557089997-3530",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min-block-size",
    "css-property-example-css": null,
    "css-property-example-html": '<p class="exampleText">Example text</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size",
    definition:
      "The min-block-size CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.",
    "css-property-name": "min-block-size",
    syntax:
      ".exampleText {\n  writing-mode: vertical-rl;\n  background-color: yellow;\n  min-block-size: 200px;\n}",
    "web-scraper-order": "1557089995-3529",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min-height (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/min-height",
    definition:
      "The min-height CSS descriptor specifies the minimum height of the viewport of a document defined via the @viewport at-rule.",
    "css-property-name": "min-height",
    syntax:
      "/* Keyword value */\nmin-height: auto;\n\n/* <length> values */\nmin-height: 120px;\nmin-height: 20em;\nmin-height: 10cm;\n\n/* <percentage> value */\nmin-height: 25%;",
    "web-scraper-order": "1557089991-3527",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min-height",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
    definition:
      "The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.",
    "css-property-name": "min-height",
    syntax: "table { min-height: 75%; }\n\nform { min-height: 0; }",
    "web-scraper-order": "1557089993-3528",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min-inline-size",
    "css-property-example-css": null,
    "css-property-example-html": '<p class="exampleText">Example text</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size",
    definition:
      "The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.",
    "css-property-name": "min-inline-size",
    syntax:
      ".exampleText {\n  writing-mode: vertical-rl;\n  background-color: yellow;\n  block-size: 5%;\n  min-inline-size: 200px;\n}",
    "web-scraper-order": "1557089989-3526",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min-width (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/min-width",
    definition:
      "The min-width CSS descriptor specifies the minimum width of the viewport of a document defined via @viewport.",
    "css-property-name": "min-width",
    syntax:
      "/* Keyword value */\nmin-width: auto;\n\n/* <length> values */\nmin-width: 320px;\nmin-width: 40em;\nmin-width: 5cm;\n\n/* <percentage> value */\nmin-width: 25%;",
    "web-scraper-order": "1557089985-3524",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min-width",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
    definition:
      "The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.",
    "css-property-name": "min-width",
    syntax: null,
    "web-scraper-order": "1557089987-3525",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "min-zoom (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/min-zoom",
    definition:
      "The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.",
    "css-property-name": "min-zoom",
    syntax: null,
    "web-scraper-order": "1557089983-3523",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "minmax()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container">\n  <div>\n    Item as wide as the content, but at most 300 pixels.\n  </div>\n  <div>\n    Item with flexible width but a minimum of 200 pixels.\n  </div>\n  <div>\n    Inflexible item of 150 pixels width.\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/minmax",
    definition:
      "The minmax() CSS function defines a size range greater than or equal to min and less than or equal to max. It is used with CSS Grids.",
    "css-property-name": "minmax()",
    syntax:
      "/* <inflexible-breadth>, <track-breadth> values */\nminmax(200px, 1fr)\nminmax(400px, 50%)\nminmax(30%, 300px)\nminmax(100px, max-content)\nminmax(min-content, 400px)\nminmax(max-content, auto)\nminmax(auto, 300px)\nminmax(min-content, auto)\n\n/* <fixed-breadth>, <track-breadth> values */\nminmax(200px, 1fr)\nminmax(30%, 300px)\nminmax(400px, 50%)\nminmax(50%, min-content)\nminmax(300px, max-content)\nminmax(200px, auto)\n\n/* <inflexible-breadth>, <fixed-breadth> values */\nminmax(400px, 50%)\nminmax(30%, 300px)\nminmax(min-content, 200px)\nminmax(max-content, 200px)\nminmax(auto, 300px)",
    "web-scraper-order": "1557089981-3522",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mix-blend-mode",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="grid">\n  <div class="col">\n    <div class="note">Blending in isolation (no blending with the background)</div>\n    <div class="row isolate">\n      <div class="cell"> normal\n        <div class="container normal">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <defs>\n                <linearGradient id="red">\n                  <stop offset="0"    stop-color="hsl(0,100%,50%)" />\n                  <stop offset="100%" stop-color="hsl(0,0%,100%)" />\n                </linearGradient>\n                <linearGradient id="green">\n                  <stop offset="0"    stop-color="hsl(120,100%,50%)" />\n                  <stop offset="100%" stop-color="hsl(120,0%,100%)" />\n                </linearGradient>\n                <linearGradient id="blue">\n                  <stop offset="0"    stop-color="hsl(240,100%,50%)" />\n                  <stop offset="100%" stop-color="hsl(240,0%,100%)" />\n                </linearGradient>\n              </defs>\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> multiply\n        <div class="container multiply">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> darken\n        <div class="container darken">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> screen\n        <div class="container screen">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> lighten\n        <div class="container lighten">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> overlay\n        <div class="container overlay">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> color-dodge\n        <div class="container color-dodge">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> color-burn\n        <div class="container color-burn">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> hard-light\n        <div class="container hard-light">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> soft-light\n        <div class="container soft-light">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> difference\n        <div class="container difference">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> exclusion\n        <div class="container exclusion">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> hue\n        <div class="container hue">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> saturation\n        <div class="container saturation">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> color\n        <div class="container color">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> luminosity\n        <div class="container luminosity">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="note">Blending globally (blend with the background)</div>\n    <div class="row">\n      <div class="cell"> normal\n        <div class="container normal">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> multiply\n        <div class="container multiply">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> darken\n        <div class="container darken">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> screen\n        <div class="container screen">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> lighten\n        <div class="container lighten">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> overlay\n        <div class="container overlay">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> color-dodge\n        <div class="container color-dodge">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> color-burn\n        <div class="container color-burn">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> hard-light\n        <div class="container hard-light">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> soft-light\n        <div class="container soft-light">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> difference\n        <div class="container difference">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> exclusion\n        <div class="container exclusion">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> hue\n        <div class="container hue">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> saturation\n        <div class="container saturation">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> color\n        <div class="container color">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n      <div class="cell"> luminosity\n        <div class="container luminosity">\n          <div class="group">\n            <div class="item firefox"></div>\n            <svg viewBox="0 0 150 150">\n              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>\n              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode",
    definition:
      "The mix-blend-mode CSS property sets how an element's content should blend with the content of the element's parent and the element's background.",
    "css-property-name": "mix-blend-mode",
    syntax:
      "html,body {\n  height: 100%;\n  box-sizing: border-box;\n  background: #EEE;\n}\n\n.grid {\n  width: 100%;\n  display: flex;\n  font: 1em monospace;\n}\n\n.row {\n  display: flex;\n  flex: 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: auto;\n}\n\n.col {\n  display: flex;\n  flex: 1 auto;\n  flex-direction: column;\n  height: auto;\n}\n\n.cell {\n  margin: .5em;\n  padding: .5em;\n  background-color: #FFF;\n  overflow: hidden;\n  text-align: center;\n}\n\n.note {\n  background: #fff3d4;\n  padding: 1em;\n  margin: .5em .5em 0;\n  font: .8em sans-serif;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.note + .row .cell {\n  margin-top: 0;\n}\n\n.container {\n  position: relative;\n  background: linear-gradient(to right, #000 0%, transparent 50%, #FFF 100%),\n              linear-gradient(to bottom, #FF0 0%, #F0F 50%, #0FF 100%);\n  width: 150px;\n  height: 150px;\n  margin: 0 auto;\n}\n\n.R {\n  transform-origin: center;\n  transform: rotate(-30deg);\n  fill: url(#red);\n}\n\n.G {\n  transform-origin: center;\n  transform: rotate(90deg);\n  fill: url(#green);\n}\n\n.B {\n  transform-origin: center;\n  transform: rotate(210deg);\n  fill: url(#blue);\n}\n\n.isolate .group { isolation: isolate; }\n\n.normal .item      { mix-blend-mode: normal; }\n.multiply .item    { mix-blend-mode: multiply; }\n.screen .item      { mix-blend-mode: screen; }\n.overlay .item     { mix-blend-mode: overlay; }\n.darken .item      { mix-blend-mode: darken; }\n.lighten .item     { mix-blend-mode: lighten; }\n.color-dodge .item { mix-blend-mode: color-dodge; }\n.color-burn .item  { mix-blend-mode: color-burn; }\n.hard-light .item  { mix-blend-mode: hard-light; }\n.soft-light .item  { mix-blend-mode: soft-light; }\n.difference .item  { mix-blend-mode: difference; }\n.exclusion .item   { mix-blend-mode: exclusion; }\n.hue .item         { mix-blend-mode: hue; }\n.saturation .item  { mix-blend-mode: saturation; }\n.color .item       { mix-blend-mode: color; }\n.luminosity .item  { mix-blend-mode: luminosity; }",
    "web-scraper-order": "1557089978-3521",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "mm",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#mm",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089976-3520",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "ms",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/time#ms",
    definition:
      "The <time> CSS data type represents a time value expressed in seconds or milliseconds. It is used in animation, transition, and related properties.",
    "css-property-name": "<time>",
    syntax: null,
    "web-scraper-order": "1557089974-3519",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "negative (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="list" start="-3">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/negative",
    definition:
      "When defining custom counter styles, the negative descriptor lets you alter the representations of negative counter values, by providing a way to specify symbols to be appended or prepended to the counter representation when the value is negative.",
    "css-property-name": "negative",
    syntax:
      "/* <symbol> values */\nnegative: \"-\";       /* Prepends '-' if value is negative */\nnegative: \"(\" \")\";   /* Surrounds value by '(' and ')' if it is negative */",
    "web-scraper-order": "1557089970-3517",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "object-fit",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <h2>object-fit: fill</h2>\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="fill"/>\n\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="fill narrow"/>\n\n  <h2>object-fit: contain</h2>\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="contain"/>\n\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="contain narrow"/>\n\n  <h2>object-fit: cover</h2>\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="cover"/>\n\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="cover narrow"/>\n\n  <h2>object-fit: none</h2>\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="none"/>\n\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="none narrow"/>\n\n  <h2>object-fit: scale-down</h2>\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="scale-down"/>\n\n  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="scale-down narrow"/>\n\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
    definition:
      "The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.",
    "css-property-name": "object-fit",
    syntax:
      "h2 {\n  font-family: Courier New, monospace;\n  font-size: 1em;\n  margin: 1em 0 0.3em;\n}\n\ndiv {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  height: 940px;\n}\n\nimg {\n  width: 150px;\n  height: 100px;\n  border: 1px solid #000;\n}\n\n.narrow {\n  width: 100px;\n  height: 150px;\n  margin-top: 10px;\n}\n\n.fill {\n  object-fit: fill;\n}\n\n.contain {\n  object-fit: contain;\n}\n\n.cover {\n  object-fit: cover;\n}\n\n.none {\n  object-fit: none;\n}\n\n.scale-down {\n  object-fit: scale-down;\n}",
    "web-scraper-order": "1557089956-3510",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "object-position",
    "css-property-example-css": null,
    "css-property-example-html":
      '<img id="object-position-1" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/>\n<img id="object-position-2" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",
    definition:
      "The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.",
    "css-property-name": "object-position",
    syntax:
      "img {\n  width: 300px;\n  height: 250px;\n  border: 1px solid black;\n  background-color: silver;\n  margin-right: 1em;\n  object-fit: none;\n}\n\n#object-position-1 {\n  object-position: 10px;\n}\n\n#object-position-2 {\n  object-position: 100% 10%;\n}",
    "web-scraper-order": "1557089954-3509",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "opacity",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="light">You can barely see this.</div>\n<div class="medium">This is easier to see.</div>\n<div class="heavy">This is very easy to see.</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
    definition:
      "The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.",
    "css-property-name": "opacity",
    syntax:
      "div { background-color: yellow; }\n.light {\n  opacity: 0.2; /* Barely see the text over the background */\n}\n.medium {\n  opacity: 0.5; /* See the text more clearly over the background */\n}\n.heavy {\n  opacity: 0.9; /* See the text very clearly over the background */\n}",
    "web-scraper-order": "1557089947-3506",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "opacity()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity",
    definition:
      "The opacity() CSS function applies transparency to the samples in the input image. Its result is a <filter-function>.",
    "css-property-name": "opacity()",
    syntax:
      "opacity(0%)   /* Completely transparent */\nopacity(50%)  /* 50% transparent */\nopacity(1)    /* No effect */",
    "web-scraper-order": "1557089945-3505",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "order",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/order",
    definition:
      "The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.",
    "css-property-name": "order",
    syntax: null,
    "web-scraper-order": "1557089941-3503",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "orientation (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/orientation",
    definition:
      "The orientation CSS descriptor controls the orientation of a document defined by @viewport.",
    "css-property-name": "orientation",
    syntax: null,
    "web-scraper-order": "1557089939-3502",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "ornaments()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Firefox rocks!</p>\n<p class="variant">Firefox rocks!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#ornaments()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    "css-property-name": "font-variant-alternates",
    syntax:
      '@font-feature-values "Leitura Display Swashes" {\n    @swash { fancy: 1 }\n}\n\np {\n  font-size: 1.5rem;\n}\n\n.variant {\n  font-family: Leitura Display Swashes;\n  font-variant-alternates: swash(fancy);\n}',
    "web-scraper-order": "1557089935-3500",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "orphans",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  <p>This is the first paragraph containing some text.</p>\n  <p>This is the second paragraph containing some more text than the first one. It is used to demonstrate how widows work.</p>\n  <p>This is the third paragraph. It has a little bit more text than the first one.</p>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/orphans",
    definition:
      "The orphans CSS property sets the minimum number of lines in a block container that must be shown at the bottom of a page, region, or column.",
    "css-property-name": "orphans",
    syntax:
      "div {\n  background-color: #8cffa0;\n  height: 150px;\n  columns: 3;\n  orphans: 3;\n}\n\np {\n  background-color: #8ca0ff;\n}\n\np:first-child {\n  margin-top: 0;\n}",
    "web-scraper-order": "1557089933-3499",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "outline",
    "css-property-example-css": null,
    "css-property-example-html":
      '<a href="#">This link has a special focus style.</a>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline",
    definition:
      "The outline CSS property is a shorthand to set various outline properties in a single declaration: outline-style, outline-width, and outline-color.",
    "css-property-name": "outline",
    syntax:
      "/* style */\noutline: solid;\n\n/* color | style */\noutline: #f66 dashed;\n\n/* style | width */\noutline: inset thick;\n\n/* color | style | width */\noutline: green solid 3px;\n\n/* Global values */\noutline: inherit;\noutline: initial;\noutline: unset;",
    "web-scraper-order": "1557089929-3497",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "outline-color",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color",
    definition:
      "The outline-color CSS property sets the color of an element's outline.",
    "css-property-name": "outline-color",
    syntax:
      "p {\n  outline: 2px solid;      /* Set the outline width and style */\n  outline-color: #0000FF;  /* Make the outline blue */\n  margin: 5px;\n}",
    "web-scraper-order": "1557089927-3496",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "outline-offset",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Gallia est omnis divisa in partes tres.</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset",
    definition:
      "The outline-offset CSS property sets the amount of space between an outline and the edge or border of an element.",
    "css-property-name": "outline-offset",
    syntax:
      "p {\n  outline: 1px dashed red;\n  outline-offset: 10px;\n  background: yellow;\n  border: 1px solid blue;\n  margin: 15px;\n}",
    "web-scraper-order": "1557089925-3495",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "outline-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="auto">Outline Demo</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style",
    definition:
      "The outline-style CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the border.",
    "css-property-name": "outline-style",
    syntax:
      '.auto {\n  outline-style: auto; /* same result as "outline: auto" */\n}\n\n/* To make the Demo clearer */ \n* { outline-width: 10px; padding: 15px; }',
    "web-scraper-order": "1557089923-3494",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "outline-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<span id="thin">thin</span>\n<span id="medium">medium</span>\n<span id="thick">thick</span>\n<span id="twopixels">2px</span>\n<span id="oneex">1ex</span>\n<span id="em">1.2em</span>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width",
    definition:
      "The outline-width CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the border.",
    "css-property-name": "outline-width",
    syntax:
      "span {\n  outline-style: solid;\n  display: inline-block;\n  margin: 20px;\n}\n\n#thin {\n  outline-width: thin;\n}\n\n#medium {\n  outline-width: medium;\n}\n\n#thick {\n  outline-width: thick;\n}\n\n#twopixels {\n  outline-width: 2px;\n}\n\n#oneex {\n  outline-width: 1ex;\n}\n\n#em {\n  outline-width: 1.2em;\n}",
    "web-scraper-order": "1557089921-3493",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "overflow",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
    definition:
      "The overflow shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for overflow-x and overflow-y.",
    "css-property-name": "overflow",
    syntax:
      "p {\n  width: 12em;\n  height: 6em;\n  border: dotted;\n  overflow: visible; /* content is not clipped */ \n}",
    "web-scraper-order": "1557089919-3492",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "overflow-wrap",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>They say the fishing is excellent at\n  Lake <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>normal</code>)</p>\n<p>They say the fishing is excellent at \n  Lake <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, \n  though I\'ve never been there myself. (<code>overflow-wrap: anywhere</code>)</p>\n<p>They say the fishing is excellent at\n  Lake <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>overflow-wrap: break-word</code>)</p>\n<p>They say the fishing is excellent at\n  Lake <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>word-break</code>)</p> \n<p>They say the fishing is excellent at \n  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em> \n  though I\'ve never been there myself. (<code>hyphens</code>, without <code>lang</code> attribute)</p>\n<p lang="en">They say the fishing is excellent at\n  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>hyphens</code>, English rules)</p>\n<p class="hyphens" lang="de">They say the fishing is excellent at\n  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>hyphens</code>, German rules)</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap",
    definition:
      "The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.",
    "css-property-name":
      "CSS overflow-wrap — Control wrapping of text overflow or wrapping",
    syntax:
      "p {\n   width: 13em;\n   margin: 2px;\n   background: gold;\n}\n\n.ow-anywhere { \n   overflow-wrap: anywhere; \n}\n\n.ow-break-word {\n   overflow-wrap: break-word;\n}\n\n.word-break {\n   word-break: break-all;\n}\n\n.hyphens {\n   hyphens: auto;\n}",
    "web-scraper-order": "1557089916-3491",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "overflow-x",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul>\n  <li><code>overflow-x:hidden</code> — hides the text outside the box\n    <div id="div1">\n      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ\n    </div>\n  </li>\n\n  <li><code>overflow-x:scroll</code> — always adds a scrollbar\n    <div id="div2">\n      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ\n    </div>\n  </li>\n\n  <li><code>overflow-x:visible</code> — displays the text outside the box if needed\n    <div id="div3">\n      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ\n    </div>\n  </li>\n\n  <li><code>overflow-x:auto</code> — on most browsers, equivalent to <code>scroll</code>\n    <div id="div4">\n      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ\n    </div>\n  </li>\n</ul>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x",
    definition:
      "The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.",
    "css-property-name": "overflow-x",
    syntax:
      "#div1, #div2, #div3, #div4 {\n  border: 1px solid black;\n  width:  250px;\n  margin-bottom: 12px;\n}\n\n#div1 { overflow-x: hidden;}\n#div2 { overflow-x: scroll;}\n#div3 { overflow-x: visible;}\n#div4 { overflow-x: auto;}",
    "web-scraper-order": "1557089914-3490",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "overflow-y",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul>\n  <li><code>overflow-y:hidden</code> — hides the text outside the box\n  <div id="div1">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    </div>\n  </li>\n\n  <li><code>overflow-y:scroll</code> — always adds a scrollbar\n  <div id="div2">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    </div>\n  </li>\n\n  <li><code>overflow-y:visible</code> — displays the text outside the box if needed\n  <div id="div3">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    </div>\n  </li>\n\n  <li><code>overflow-y:auto</code> — on most browser, equivalent to <code>scroll</code>\n  <div id="div4">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    </div>\n  </li>\n</ul>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y",
    definition:
      "The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.",
    "css-property-name": "overflow-y",
    syntax:
      "#div1,\n#div2,\n#div3,\n#div4 {\n  border: 1px solid black;\n  width:  250px;\n  height: 100px;\n}\n\n#div1 { overflow-y: hidden; margin-bottom: 12px;}\n#div2 { overflow-y: scroll; margin-bottom: 12px;}\n#div3 { overflow-y: visible; margin-bottom: 120px;}\n#div4 { overflow-y: auto; margin-bottom: 120px;}",
    "web-scraper-order": "1557089912-3489",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "pad (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="list">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n</ul>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/pad",
    definition:
      "The pad descriptor can be used with custom counter style definitions when you need the marker representations to have a minimum length. If a marker representation is smaller than the specified pad length, then the marker will be padded with the specified pad symbol. Marker representations longer than the pad length are constructed as normal. Pad descriptor takes the minimum marker length as an integer and a symbol to be used for padding as the second parameter. A common usage of the pad descriptor is when you need your list to start numbering from 01 and go through 02, 03 and so on, instead of just 1, 2, 3...",
    "css-property-name": "pad",
    syntax: 'pad: 3 "0";',
    "web-scraper-order": "1557089910-3488",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding",
    "css-property-example-css": null,
    "css-property-example-html":
      "<h4>This element has moderate padding.</h4>\n<h3>The padding is huge in this element!</h3>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding",
    definition:
      "The padding CSS property sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.",
    "css-property-name": "padding",
    syntax:
      "h4 {\n  background-color: lime;\n  padding: 20px 50px;\n}\n\nh3 {\n  background-color: cyan;\n  padding: 110px 50px 50px 110px;\n}",
    "web-scraper-order": "1557089908-3487",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-block",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block",
    definition: "",
    "css-property-name": "padding-block",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  padding-block: 20px 40px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557089906-3486",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-block-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end",
    definition:
      "The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "padding-block-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  padding-block-end: 20px;\n  background-color: #C8C800;\n}",
    "web-scraper-order": "1557089904-3485",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-block-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start",
    definition: "",
    "css-property-name": "padding-block-start",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  padding-block-start: 20px;\n  background-color: #C8C800;\n}",
    "web-scraper-order": "1557089902-3484",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-bottom",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom",
    definition:
      "The padding-bottom CSS property sets the height of the padding area on the bottom of an element.",
    "css-property-name": "padding-bottom",
    syntax:
      ".content { padding-bottom: 5%; }\n.sidebox { padding-bottom: 10px; }",
    "web-scraper-order": "1557089900-3483",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-inline",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline",
    definition: "",
    "css-property-name": "padding-inline",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-rl;\n  padding-inline: 20px 40px;\n  background-color: #c8c800;\n}",
    "web-scraper-order": "1557089898-3482",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-inline-end",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end",
    definition:
      "The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "padding-inline-end",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  padding-inline-end: 20px;\n  background-color: #C8C800;\n}",
    "web-scraper-order": "1557089896-3481",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-inline-start",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="exampleText">Example text</p>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start",
    definition:
      "The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
    "css-property-name": "padding-inline-start",
    syntax:
      "div {\n  background-color: yellow;\n  width: 120px;\n  height: 120px;\n}\n\n.exampleText {\n  writing-mode: vertical-lr;\n  padding-inline-start: 20px;\n  background-color: #C8C800;\n}",
    "web-scraper-order": "1557089894-3480",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-left",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left",
    definition:
      "The padding-left CSS property sets the width of the padding area on the top of an element.",
    "css-property-name": "padding-left",
    syntax: ".content { padding-left: 5%; }\n.sidebox { padding-left: 10px; }",
    "web-scraper-order": "1557089892-3479",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-right",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right",
    definition:
      "The padding-right CSS property sets the width of the padding area on the right of an element.",
    "css-property-name": "padding-right",
    syntax:
      ".content { padding-right: 5%; }\n.sidebox { padding-right: 10px; }",
    "web-scraper-order": "1557089890-3478",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "padding-top",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top",
    definition:
      "The padding-top CSS property sets the height of the padding area on the top of an element.",
    "css-property-name": "padding-top",
    syntax: ".content { padding-top: 5%; }\n.sidebox { padding-top: 10px; }",
    "web-scraper-order": "1557089888-3477",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "page-break-after",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after",
    definition:
      "The page-break-after CSS property adjusts page breaks after the current element.",
    "css-property-name": "page-break-after",
    syntax:
      "/* move to a new page after footnotes */\ndiv.footnotes { \n  page-break-after: always; \n}",
    "web-scraper-order": "1557089883-3475",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "page-break-before",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before",
    definition:
      "The page-break-before CSS property adjusts page breaks before the current element.",
    "css-property-name": "page-break-before",
    syntax:
      "/* avoid page break before the div */\ndiv.note { \n    page-break-before: avoid;\n}",
    "web-scraper-order": "1557089881-3474",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "page-break-inside",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="page">\n  <p>This is the first paragraph.</p>\n  <section class="list">\n    <span>A list</span>\n    <ol>\n      <li>one</li>\n<!--       <li>two</li> -->\n    </ol>\n  </section>\n  <ul>\n    <li>one</li>\n<!--     <li>two</li> -->\n  </ul>\n  <p>This is the second paragraph.</p>\n  <p>This is the third paragraph, it contains more text.</p>\n  <p>This is the fourth paragraph. It has a little bit more text than the third one.</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside",
    definition:
      "The page-break-inside CSS property adjusts page breaks inside the current element.",
    "css-property-name": "page-break-inside",
    syntax:
      ".page {\n  background-color: #8cffa0;\n  height: 90px;\n  width: 200px;\n  columns: 1;\n  column-width: 100px;\n}\n\n.list, ol, ul, p {\n  break-inside: avoid;\n}\n\np {\n  background-color: #8ca0ff;\n}\n\nol, ul, .list {\n  margin: 0.5em 0;\n  display: block;\n  background-color: orange;\n}\n\np:first-child {\n  margin-top: 0;\n}",
    "web-scraper-order": "1557089879-3473",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "pc",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#pc",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089877-3472",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "perspective",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tbody>\n    <tr>\n      <th><code>perspective: 250px;</code>\n      </th>\n      <th><code>perspective: 350px;</code>\n      </th>\n    </tr>\n    <tr>\n      <td>\n        <div class="container">\n          <div class="cube pers250">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube pers350">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <th><code>perspective: 500px;</code>\n      </th>\n      <th><code>perspective: 650px;</code>\n      </th>\n    </tr>\n    <tr>\n      <td>\n        <div class="container">\n          <div class="cube pers500">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube pers650">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective",
    definition:
      "The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.",
    "css-property-name": "perspective",
    syntax:
      "/* Keyword value */\nperspective: none;\n\n/* <length> values */\nperspective: 20px;  \nperspective: 3.5em;\n\n/* Global values */\nperspective: inherit;\nperspective: initial;\nperspective: unset;",
    "web-scraper-order": "1557089873-3470",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "perspective()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Without perspective:</p>\n<div class="no-perspective-box">\n  <div class="face front">A</div>\n  <div class="face top">B</div>\n  <div class="face left">C</div>\n</div>\n\n<p>With perspective (7.5cm):</p>\n<div class="perspective-box">\n  <div class="face front">A</div>\n  <div class="face top">B</div>\n  <div class="face left">C</div>\n</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective",
    definition:
      "The perspective() CSS function defines a transformation that sets the distance between the user and the z=0 plane. Its result is a <transform-function> data type.",
    "css-property-name": "perspective()",
    syntax:
      ".face {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  font-size: 100px;\n  text-align: center;\n}\n\n.no-perspective-box {\n  width: 100px;\n  height: 100px;\n  transform-style: preserve-3d;\n  transform: rotateX(-15deg) rotateY(15deg);\n  margin-left: 100px;\n}\n\n.perspective-box {\n  width: 100px;\n  height: 100px;\n  transform-style: preserve-3d;\n  transform: perspective(7.5cm) rotateX(-15deg) rotateY(15deg);\n  margin-left: 100px;\n}\n\n.top {\n  background-color: skyblue;\n  transform: rotateX(90deg) translate3d(0, 0, 50px);\n}\n\n.left {\n  background-color: pink;\n  transform: rotateY(-90deg) translate3d(0, 0, 50px);\n}\n\n.front {\n  background-color: limegreen;\n  transform: translate3d(0, 0, 50px);\n}",
    "web-scraper-order": "1557089871-3469",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "perspective-origin",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tbody>\n    <tr>\n      <th>\n        <code>perspective-origin: top left;</code>\n      </th>\n      <th>\n        <code>perspective-origin: top;</code>\n      </th>\n      <th>\n        <code>perspective-origin: top right;</code>\n      </th>\n    </tr>\n    <tr>\n      <td>\n        <div class="container">\n          <div class="cube potl">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube potm">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube potr">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <th>\n        <code>perspective-origin: left;</code>\n      </th>\n      <th>\n        <code>perspective-origin: 50% 50%;</code>\n      </th>\n      <th>\n        <code>perspective-origin: right;</code>\n      </th>\n    </tr>\n    <tr>\n      <td>\n        <div class="container">\n          <div class="cube poml">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube pomm">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube pomr">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <th>\n        <code>perspective-origin: bottom left;</code>\n      </th>\n      <th>\n        <code>perspective-origin: bottom;</code>\n      </th>\n      <th>\n        <code>perspective-origin: bottom right;</code>\n      </th>\n    </tr>\n    <tr>\n      <td>\n        <div class="container">\n          <div class="cube pobl">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube pobm">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n      <td>\n        <div class="container">\n          <div class="cube pobr">\n            <div class="face front">1</div>\n            <div class="face back">2</div>\n            <div class="face right">3</div>\n            <div class="face left">4</div>\n            <div class="face top">5</div>\n            <div class="face bottom">6</div>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin",
    definition:
      "The perspective-origin CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.",
    "css-property-name": "perspective-origin",
    syntax:
      "/* Shorthand classes for perspective-origin values */\n.potl {\n  perspective-origin: top left;\n  -webkit-perspective-origin: top left;\n}\n\n.potm {\n  perspective-origin: top;\n  -webkit-perspective-origin: top;\n}\n\n.potr {\n  perspective-origin: top right;\n  -webkit-perspective-origin: top right;\n}\n\n.poml {\n  perspective-origin: left;\n  -webkit-perspective-origin: left;\n}\n\n.pomm {\n  perspective-origin: 50% 50%;\n  -webkit-perspective-origin: 50% 50%;\n}\n\n.pomr {\n  perspective-origin: right;\n  -webkit-perspective-origin: right;\n}\n\n.pobl {\n  perspective-origin: bottom left;\n  -webkit-perspective-origin: bottom left;\n}\n\n.pobm {\n  perspective-origin: bottom;\n  -webkit-perspective-origin: bottom;\n}\n\n.pobr {\n  perspective-origin: bottom right;\n  -webkit-perspective-origin: bottom right;\n}\n\n/* Define the container div, the cube div, and a generic face */\n.container {\n  width: 100px;\n  height: 100px;\n  margin: 24px;\n  border: none;\n}\n\n.cube {\n  width: 100%;\n  height: 100%;\n  backface-visibility: visible;\n  perspective: 300px;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: visible;\n  -webkit-perspective: 300px;\n  -webkit-transform-style: preserve-3d;\n}\n\n.face {\n  display: block;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  border: none;\n  line-height: 100px;\n  font-family: sans-serif;\n  font-size: 60px;\n  color: white;\n  text-align: center;\n}\n\n/* Define each face based on direction */\n.front {\n  background: rgba(0, 0, 0, 0.3);\n  transform: translateZ(50px);\n  -webkit-transform: translateZ(50px);\n}\n\n.back {\n  background: rgba(0, 255, 0, 1);\n  color: black;\n  transform: rotateY(180deg) translateZ(50px);\n  -webkit-transform: rotateY(180deg) translateZ(50px);\n}\n\n.right {\n  background: rgba(196, 0, 0, 0.7);\n  transform: rotateY(90deg) translateZ(50px);\n  -webkit-transform: rotateY(90deg) translateZ(50px);\n}\n\n.left {\n  background: rgba(0, 0, 196, 0.7);\n  transform: rotateY(-90deg) translateZ(50px);\n  -webkit-transform: rotateY(-90deg) translateZ(50px);\n}\n\n.top {\n  background: rgba(196, 196, 0, 0.7);\n  transform: rotateX(90deg) translateZ(50px);\n  -webkit-transform: rotateX(90deg) translateZ(50px)\n}\n\n.bottom {\n  background: rgba(196, 0, 196, 0.7);\n  transform: rotateX(-90deg) translateZ(50px);\n  -webkit-transform: rotateX(-90deg) translateZ(50px);\n}\n\n/* Make the table a little nicer */\nth, p, td {\n  background-color: #EEEEEE;\n  padding: 10px;\n  font-family: sans-serif;\n  text-align: left;\n}",
    "web-scraper-order": "1557089869-3468",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "place-content",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container">\n  <div class="small">Lorem</div>\n  <div class="small">Lorem<br/>ipsum</div>\n  <div class="large">Lorem</div>\n  <div class="large">Lorem<br/>impsum</div>\n  <div class="large"></div>\n  <div class="large"></div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-content",
    definition:
      "The place-content CSS property is a shorthand for align-content and justify-content. It can be used in any layout method which utilizes both of these alignment values.",
    "css-property-name": "place-content",
    syntax:
      "#container {\n  display: flex;\n  height:240px;\n  width: 240px;\n  flex-wrap: wrap;\n  background-color: #8c8c8c;\n  writing-mode: horizontal-tb; /* Can be changed in the live sample */\n  direction: ltr; /* Can be changed in the live sample */\n  place-content: flex-end center; /* Can be changed in the live sample */\n}\n\ndiv > div {\n  border: 2px solid #8c8c8c;\n  width: 50px;\n  background-color: #a0c8ff;\n}\n\n.small {\n  font-size: 12px;\n  height: 40px;\n}\n\n.large {\n  font-size: 14px;\n  height: 50px;\n}",
    "web-scraper-order": "1557089867-3467",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "place-items",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container" class="flex">\n  <div id="item1">1</div>\n  <div id="item2">2</div>\n  <div id="item3">3</div>\n  <div id="item4">4</div>\n  <div id="item5">5</div>\n  <div id="item6">6</div>\n</div>\n\n<div class="row">\n  <label for="display">display: </label>\n  <select id="display">\n    <option value="flex">flex</option>\n    <option value="grid">grid</option>\n  </select>\n</div>\n\n<div class="row">\n  <label for="values">place-items: </label>\n  <select id="values">\n    <option value="start">start</option>\n    <option value="center">center</option>\n    <option value="end">end</option>\n    <option value="left">left</option>\n    <option value="right">right</option>\n    <option value="auto center">auto center</option>\n    <option value="normal start">normal start</option>\n    <option value="center normal">center normal</option>\n    <option value="start auto">start auto</option>\n    <option value="end normal">end normal</option>\n    <option value="self-start auto">self-start auto</option>\n    <option value="self-end normal">self-end normal</option>\n    <option value="flex-start auto">flex-start auto</option>\n    <option value="flex-end normal">flex-end normal</option>\n    <option value="left auto">left auto</option>\n    <option value="right normal">right normal</option>\n    <option value="baseline normal">baseline normal</option>\n    <option value="first baseline auto">first baseline auto</option>\n    <option value="last baseline normal">last baseline normal</option>\n    <option value="stretch auto">stretch auto</option>\n  </select>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-items",
    definition:
      "The CSS place-items shorthand property sets the align-items and justify-items properties, respectively. If the second value is not set, the first value is also used for it.",
    "css-property-name": "place-items",
    syntax:
      "#container {\n  height:200px;\n  width: 240px;\n  place-items: center; /* You can change this value by selecting another option in the list */\n  background-color: #8c8c8c;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 50px);\n}",
    "web-scraper-order": "1557089865-3466",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "place-self",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-self",
    definition:
      "The place-self CSS property is a shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.",
    "css-property-name": "place-self",
    syntax:
      "/* Keyword values */\nplace-self: auto center;\nplace-self: normal start;\n\n/* Positional alignment */\nplace-self: center normal;\nplace-self: start auto;\nplace-self: end normal;\nplace-self: self-start auto;\nplace-self: self-end normal;\nplace-self: flex-start auto;\nplace-self: flex-end normal;\nplace-self: left auto;\nplace-self: right normal;\n\n/* Baseline alignment */\nplace-self: baseline normal;\nplace-self: first baseline auto;\nplace-self: last baseline normal;\nplace-self: stretch auto;\n\n/* Global values */\nplace-self: inherit;\nplace-self: initial;\nplace-self: unset;",
    "web-scraper-order": "1557089863-3465",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "pointer-events",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
    definition:
      "The  pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.",
    "css-property-name": "pointer-events",
    syntax:
      "/* Keyword values */\npointer-events: auto;\npointer-events: none;\npointer-events: visiblePainted; /* SVG only */\npointer-events: visibleFill;    /* SVG only */\npointer-events: visibleStroke;  /* SVG only */\npointer-events: visible;        /* SVG only */\npointer-events: painted;        /* SVG only */\npointer-events: fill;           /* SVG only */\npointer-events: stroke;         /* SVG only */\npointer-events: all;            /* SVG only */\n\n/* Global values */\npointer-events: inherit;\npointer-events: initial;\npointer-events: unset;",
    "web-scraper-order": "1557089859-3463",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "polygon()",
    "css-property-example-css": null,
    "css-property-example-html": "<div></div>",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#polygon()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    "css-property-name": "<basic-shape>",
    syntax:
      "div {\n  width: 300px;\n  height: 300px;\n  background: repeating-linear-gradient(red, orange 50px);\n  clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  animation: 4s poly infinite alternate ease-in-out;\n  margin: 10px auto;\n}\n\n@keyframes poly {\n  from {\n    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);\n  }\n\n  to {\n    clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);\n  }\n}",
    "web-scraper-order": "1557089857-3462",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "position",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="box" id="one">One</div>\n<div class="box" id="two">Two</div>\n<div class="box" id="three">Three</div>\n<div class="box" id="four">Four</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
    definition:
      "The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.",
    "css-property-name": "CSS position property",
    syntax:
      ".box {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background: red;\n  color: white;\n}\n\n#two {\n  position: relative;\n  top: 20px;\n  left: 20px;\n  background: blue;\n}",
    "web-scraper-order": "1557089852-3460",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "prefix (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="index">\n  <li>The Boy Who Lived</li>\n  <li>The Vanishing Glass</li>\n  <li>The Letters from No One</li>\n  <li>The Keeper of the Keys</li>\n  <li>Diagon Alley</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/prefix",
    definition:
      'The prefix descriptor of the @counter-style rule specifies content that will be prepended to the marker representation. If not specified, the default value will be "" (an empty string).',
    "css-property-name": "prefix",
    syntax:
      '/* <symbol> values */\nprefix: "»";\nprefix: "Page ";\nprefix: url(bullet.png);',
    "web-scraper-order": "1557089850-3459",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "pt",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#pt",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089848-3458",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "px",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#px",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089846-3457",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "quotes",
    "css-property-example-css": null,
    "css-property-example-html":
      "<q>To be or not to be. That's the question!</q>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/quotes",
    definition: "The quotes CSS property sets how quotation marks appear.",
    "css-property-name": "quotes",
    syntax:
      "q {\n  quotes: '\"' '\"' \"'\" \"'\";\n}\nq::before {\n  content: open-quote;\n}\nq:after {\n  content: close-quote;\n}",
    "web-scraper-order": "1557089842-3455",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rad",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#rad",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    "css-property-name": "<angle>",
    syntax: null,
    "web-scraper-order": "1557089840-3454",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "radial-gradient()",
    "css-property-example-css": null,
    "css-property-example-html": '<div class="radial-gradient"></div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient",
    definition:
      "The radial-gradient() CSS function creates an image consisting of a progressive transition between two or more colors that radiate from an origin. Its shape may be a circle or an ellipse. The function's result is an object of the <gradient> data type, which is a special kind of <image>.",
    "css-property-name": "radial-gradient()",
    syntax:
      "/* A gradient at the center of its container,\n   starting red, changing to blue, and finishing green */\nradial-gradient(circle at center, red 0, blue, green 100%)",
    "web-scraper-order": "1557089838-3453",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "range (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="list">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n  <li>Six</li>\n  <li>Seven</li>\n  <li>Eight</li>\n  <li>Nine</li>\n  <li>Ten</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/range",
    definition:
      "When defining custom counter styles, the range descriptor lets the author specify a range of counter values over which the style is applied. If a counter value is outside the specified range, then the fallback style will be used to construct the representation of that marker. Value of the range descriptor can be either auto or a comma separated list of lower and upper bounds specified as integers.",
    "css-property-name": "range",
    syntax:
      '@counter-style range-multi-example {\n  system: cyclic;\n  symbols: "\\25A0" "\\25A1";\n  range: 2 4, 7 9;\n}\n\n.list {\n  list-style: range-multi-example;    \n}',
    "web-scraper-order": "1557089836-3452",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rect()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/shape#rect()",
    definition:
      "The <shape> CSS data type defines the specific form (shape) of a region. The region represents the part of an element to which the clip property applies.",
    "css-property-name": "<shape>",
    syntax: "img.clip04 {\n  clip: rect(10px, 20px, 20px, 10px);\n}",
    "web-scraper-order": "1557089828-3448",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rem",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089826-3447",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "repeat()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="container">\n  <div>\n    This item is 50 pixels wide.\n  </div>\n  <div>\n    Item with flexible width.\n  </div>\n  <div>\n    This item is 50 pixels wide.\n  </div>\n  <div>\n    Item with flexible width.\n  </div>\n  <div>\n    Inflexible item of 100 pixels width.\n  </div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/repeat",
    definition:
      "The repeat() CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.",
    "css-property-name": "repeat()",
    syntax:
      "/* <track-repeat> values */\nrepeat(4, 1fr)\nrepeat(4, [col-start] 250px [col-end])\nrepeat(4, [col-start] 60% [col-end])\nrepeat(4, [col-start] 1fr [col-end])\nrepeat(4, [col-start] min-content [col-end])\nrepeat(4, [col-start] max-content [col-end])\nrepeat(4, [col-start] auto [col-end])\nrepeat(4, [col-start] minmax(100px, 1fr) [col-end])\nrepeat(4, [col-start] fit-content(200px) [col-end])\nrepeat(4, 10px [col-start] 30% [col-middle] auto [col-end])\nrepeat(4, [col-start] min-content [col-middle] max-content [col-end])\n\n/* <auto-repeat> values */\nrepeat(auto-fill, 250px)\nrepeat(auto-fit, 250px)\nrepeat(auto-fill, [col-start] 250px [col-end])\nrepeat(auto-fit, [col-start] 250px [col-end])\nrepeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])\nrepeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])\n\n/* <fixed-repeat> values */\nrepeat(4, 250px)\nrepeat(4, [col-start] 250px [col-end])\nrepeat(4, [col-start] 60% [col-end])\nrepeat(4, [col-start] minmax(100px, 1fr) [col-end])\nrepeat(4, [col-start] fit-content(200px) [col-end])\nrepeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])",
    "web-scraper-order": "1557089824-3446",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "repeating-linear-gradient()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient",
    definition:
      "The repeating-linear-gradient() CSS function creates an image consisting of repeating linear gradients. It is similar to linear-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container. The function's result is an object of the <gradient> data type, which is a special kind of <image>.",
    "css-property-name": "repeating-linear-gradient()",
    syntax:
      "/* A repeating gradient tilted 45 degrees,\n   starting blue and finishing red, repeating 3 times */\nrepeating-linear-gradient(45deg, blue, red 33.3%);\n\n/* A repeating gradient going from the bottom right to the top left,\n   starting blue and finishing red, repeating every 20px */\nrepeating-linear-gradient(to left top, blue, red 20px);\n\n/* A gradient going from the bottom to top,\n   starting blue, turning green after 40%,\n   and finishing red. This gradient doesn't repeat because\n   the last color stop defaults to 100% */\nrepeating-linear-gradient(0deg, blue, green 40%, red);\n\n/* A gradient repeating five times, going from the left to right, \n   starting red, turning green, and back to red */ \nrepeating-linear-gradient(to right, red 0%, green 10%, red 20%);",
    "web-scraper-order": "1557089821-3445",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "repeating-radial-gradient()",
    "css-property-example-css": null,
    "css-property-example-html": '<div class="radial-gradient"></div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-radial-gradient",
    definition:
      "The repeating-radial-gradient() CSS function creates an image consisting of repeating gradients that radiate from an origin. It is similar to radial-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container, similar to repeating-linear-gradient() . The function's result is an object of the <gradient> data type, which is a special kind of <image>.",
    "css-property-name": "repeating-radial-gradient()",
    syntax:
      "/* A gradient at the center of its container,\n   starting red, changing to blue, and finishing green, \n   with the colors repeating every 30px */\nrepeating-radial-gradient(circle at center, red 0, blue, green 30px);  \n\n/* An elliptical gradient near the top left of its container, \n   starting red, changing to green and back again,\n   repeating five times between the center and the bottom right corner, \n   and only once between the center and the top left corner */\nrepeating-radial-gradient(farthest-corner at 20% 20%, red 0, green, red 20%);",
    "web-scraper-order": "1557089819-3444",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "resize",
    "css-property-example-css": null,
    "css-property-example-html": "<textarea>Type some text here.</textarea>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resize",
    definition:
      "The resize CSS property sets whether an element is resizable, and if so, in which directions.",
    "css-property-name": "resize",
    syntax:
      "/* Keyword values */\nresize: none;\nresize: both;\nresize: horizontal;\nresize: vertical;\nresize: block;\nresize: inline;\n\n/* Global values */\nresize: inherit;\nresize: initial;\nresize: unset;",
    "web-scraper-order": "1557089815-3442",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "revert",
    "css-property-example-css": null,
    "css-property-example-html":
      '<section>\n  <p>This is a section!</p>\n\n  <aside class="widget">\n    <p>This is a little widget.</p>\n  </aside>\n</section>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/revert",
    definition:
      "The revert CSS keyword rolls back the cascade so that a property takes on the value it would have had if there were no styles in the current style origin (author, user, or user-agent). Thus, it resets the property to the default value established by the user-agent stylesheet (or by user styles, if any exist). It can be applied to any CSS property, including the CSS shorthand all.",
    "css-property-name": "revert",
    syntax:
      "section {\n  color: blue;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.widget {\n  all: revert;\n}",
    "web-scraper-order": "1557089811-3440",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rgb()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div style="color:blue; border: 1px dashed currentColor;">\n  The color of this text is blue.\n  <div style="background:currentColor; height:9px;"></div>\n  This block is surrounded by a blue border.\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    "css-property-name": "<color>",
    syntax: null,
    "web-scraper-order": "1557089809-3439",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rgba()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div style="color:blue; border: 1px dashed currentColor;">\n  The color of this text is blue.\n  <div style="background:currentColor; height:9px;"></div>\n  This block is surrounded by a blue border.\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgba()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    "css-property-name": "<color>",
    syntax: null,
    "web-scraper-order": "1557089807-3438",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "right",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="example_3">Example 3</div>\n<div id="example_4">Example 4</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/right",
    definition:
      "The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.",
    "css-property-name": "right",
    syntax:
      "#example_3 {\n  width: 100px;\n  height: 100px;\n  background-color: #FFC7E4;\n  position: relative;\n  top: 20px;\n  left: 20px;\n}\n\n#example_4 {\n  width: 100px;\n  height: 100px;\n  background-color: #FFD7C2;\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n}",
    "web-scraper-order": "1557089803-3436",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rotate",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="rotate">Rotation</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/rotate",
    definition:
      "The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform property.",
    "css-property-name": "rotate",
    syntax:
      "/* Keyword values */\nrotate: none;\n\n/* Angle value */\nrotate: 90deg;\nrotate: 0.25turn;\nrotate: 1.57rad;\n\n/* x, y, or z axis name plus angle */\nrotate: x 90deg;\nrotate: y 0.25turn;\nrotate: z 1.57rad;\n\n/* Vector plus angle value */\nrotate: 1 1 1 90deg;",
    "web-scraper-order": "1557089799-3434",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rotate()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="rotated">Rotated</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate",
    definition:
      "The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. Its result is a <transform-function> data type.",
    "css-property-name":
      "CSS rotate() — Transform function to adjust rotation of an element",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.rotated {\n  transform: rotate(45deg); /* Equal to rotateZ(45deg) */\n  background-color: pink;\n}",
    "web-scraper-order": "1557089797-3433",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rotate3d()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="rotated">Rotated</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d",
    definition:
      "The rotate3d() CSS function defines a transformation that rotates an element around a fixed axis in 3D space, without deforming it. Its result is a <transform-function> data type.",
    "css-property-name": "rotate3d()",
    syntax:
      "body {\n  perspective: 800px;\n}\n\ndiv {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.rotated {\n  transform: rotate3d(0, 1, 0, 60deg);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089795-3432",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rotateX()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="rotated">Rotated</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX",
    definition:
      "The rotateX() CSS function defines a transformation that rotates an element around the abscissa (horizontal axis) without deforming it. Its result is a <transform-function> data type.",
    "css-property-name": "rotateX()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.rotated {\n  transform: rotateX(45deg);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089793-3431",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rotateY()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="rotated">Rotated</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY",
    definition:
      "The rotateY() CSS function defines a transformation that rotates an element around the ordinate (vertical axis) without deforming it. Its result is a <transform-function> data type.",
    "css-property-name": "rotateY()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.rotated {\n  transform: rotateY(60deg);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089791-3430",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "rotateZ()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="rotated">Rotated</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ",
    definition:
      "The rotateZ() CSS function defines a transformation that rotates an element around the z-axis without deforming it. Its result is a <transform-function> data type.",
    "css-property-name": "rotateZ()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.rotated {\n  transform: rotateZ(45deg);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089788-3429",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "row-gap",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap",
    definition:
      "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.",
    "css-property-name": "row-gap (grid-row-gap)",
    syntax:
      "/* <length> values */\nrow-gap: 20px;\nrow-gap: 1em;\nrow-gap: 3vmin;\nrow-gap: 0.5cm;\n\n/* <percentage> value */\nrow-gap: 10%;\n\n/* Global values */\nrow-gap: inherit;\nrow-gap: initial;\nrow-gap: unset;",
    "web-scraper-order": "1557089786-3428",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "s",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/time#s",
    definition:
      "The <time> CSS data type represents a time value expressed in seconds or milliseconds. It is used in animation, transition, and related properties.",
    "css-property-name": "<time>",
    syntax: null,
    "web-scraper-order": "1557089784-3427",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "saturate()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate",
    definition:
      "The saturate() CSS function super-saturates or desaturates the input image. Its result is a <filter-function>.",
    "css-property-name": "saturate()",
    syntax:
      "saturate(0)     /* Completely unsaturated */\nsaturate(.4)    /* 40% unsaturated */\nsaturate(100%)  /* No effect */\nsaturate(200%)  /* Double saturation */",
    "web-scraper-order": "1557089782-3426",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scale",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="scale">Scaling</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scale",
    definition:
      "The scale CSS property allows you to specify scale transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
    "css-property-name": "scale",
    syntax:
      "/* Keyword values */\nscale: none;\n\n/* Single values */\n/* values of more than 1 make the element grow */\nscale: 2;\n/* values of less than 1 make the element shrink */\nscale: 0.5;\n\n/* Two values */\nscale: 2 0.5;\n\n/* Three values */\nscale: 2 0.5 2;",
    "web-scraper-order": "1557089780-3425",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scale()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="scaled">Scaled</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale",
    definition:
      "The scale() CSS function defines a transformation that resizes an element on the 2D plane. Because the amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at different scales. Its result is a <transform-function> data type.",
    "css-property-name": "CSS scale() transform function",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.scaled {\n  transform: scale(0.7); /* Equal to scaleX(0.7) scaleY(0.7) */\n  background-color: pink;\n}",
    "web-scraper-order": "1557089778-3424",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scale3d()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="scaled">Scaled</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d",
    definition:
      "The scale3d() CSS function defines a transformation that resizes an element in 3D space. Because the amount of scaling is defined by a vector, it can resize different dimensions at different scales. Its result is a <transform-function> data type.",
    "css-property-name": "scale3d()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.scaled {\n  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089776-3423",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scaleX()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="scaled">Scaled</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleX",
    definition:
      "The scaleX() CSS function defines a transformation that resizes an element along the x-axis (horizontally). Its result is a <transform-function> data type.",
    "css-property-name": "scaleX()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.scaled {\n  transform: scaleX(0.6);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089774-3422",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scaleY()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="scaled">Scaled</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleY",
    definition:
      "The scaleY() CSS function defines a transformation that resizes an element along the y-axis (vertically). Its result is a <transform-function> data type.",
    "css-property-name": "scaleY()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.scaled {\n  transform: scaleY(0.6);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089772-3421",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scaleZ()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="perspective">Translated</div>\n<div class="scaled-translated">Scaled</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleZ",
    definition:
      "The scaleZ() CSS function defines a transformation that resizes an element along the z-axis. Its result is a <transform-function> data type.",
    "css-property-name": "scaleZ()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.perspective {\n  /* Includes a perspective to create a 3D space */\n  transform: perspective(400px) translateZ(-100px);\n  background-color: limegreen;\n}\n\n.scaled-translated {\n  /* Includes a perspective to create a 3D space */\n  transform: perspective(400px) scaleZ(2) translateZ(-100px);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089770-3420",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-behavior",
    "css-property-example-css": null,
    "css-property-example-html":
      '<nav>\n  <a href="#page-1">1</a>\n  <a href="#page-2">2</a>\n  <a href="#page-3">3</a>\n</nav>\n<scroll-container>\n  <scroll-page id="page-1">1</scroll-page>\n  <scroll-page id="page-2">2</scroll-page>\n  <scroll-page id="page-3">3</scroll-page>\n</scroll-container>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior",
    definition:
      "The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.",
    "css-property-name": "scroll-behavior",
    syntax:
      "a {\n  display: inline-block;\n  width: 50px;\n  text-decoration: none;\n}\nnav, scroll-container {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n}\nnav {\n  width: 339px;\n  padding: 5px;\n  border: 1px solid black;\n}\nscroll-container {\n  display: block;\n  width: 350px;\n  height: 200px;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n}\nscroll-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  font-size: 5em;\n}",
    "web-scraper-order": "1557089766-3418",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin",
    definition:
      "The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands.",
    "css-property-name": "scroll-margin",
    syntax:
      "/* <length> values */\nscroll-margin: 10px;\nscroll-margin: 1em .5em 1em 1em;\n\n/* Global values */\nscroll-margin: inherit;\nscroll-margin: initial;\nscroll-margin: unset;",
    "web-scraper-order": "1557089764-3417",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-block",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block",
    definition:
      "The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension.",
    "css-property-name": "scroll-margin-block",
    syntax:
      "/* <length> values */\nscroll-margin-block: 10px;\nscroll-margin-block: 1em .5em ;\n\n/* Global values */\nscroll-margin-block: inherit;\nscroll-margin-block: initial;\nscroll-margin-block: unset;",
    "web-scraper-order": "1557089762-3416",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-block-end",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-end",
    definition:
      "The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-block-end",
    syntax:
      "/* <length> values */\nscroll-margin-block-end: 10px;\nscroll-margin-block-end: 1em;\n\n/* Global values */\nscroll-margin-block-end: inherit;\nscroll-margin-block-end: initial;\nscroll-margin-block-end: unset;",
    "web-scraper-order": "1557089760-3415",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-block-start",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-start",
    definition:
      "The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-block-start",
    syntax:
      "/* <length> values */\nscroll-margin-block-start: 10px;\nscroll-margin-block-start: 1em;\n\n/* Global values */\nscroll-margin-block-start: inherit;\nscroll-margin-block-start: initial;\nscroll-margin-block-start: unset;",
    "web-scraper-order": "1557089757-3414",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-bottom",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom",
    definition:
      "The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-bottom",
    syntax:
      "/* <length> values */\nscroll-margin-bottom: 10px;\nscroll-margin-bottom: 1em;\n\n/* Global values */\nscroll-margin-bottom: inherit;\nscroll-margin-bottom: initial;\nscroll-margin-bottom: unset;",
    "web-scraper-order": "1557089755-3413",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-inline",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline",
    definition:
      "The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension.",
    "css-property-name": "scroll-margin-inline",
    syntax:
      "/* <length> values */\nscroll-margin-inline: 10px;\nscroll-margin-inline: 1em .5em ;\n\n/* Global values */\nscroll-margin-inline: inherit;\nscroll-margin-inline: initial;\nscroll-margin-inline: unset;",
    "web-scraper-order": "1557089753-3412",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-inline-end",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end",
    definition:
      "The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-inline-end",
    syntax:
      "/* <length> values */\nscroll-margin-inline-end: 10px;\nscroll-margin-inline-end: 1em;\n\n/* Global values */\nscroll-margin-inline-end: inherit;\nscroll-margin-inline-end: initial;\nscroll-margin-inline-end: unset;",
    "web-scraper-order": "1557089751-3411",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-inline-start",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start",
    definition:
      "The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-inline-start",
    syntax:
      "/* <length> values */\nscroll-margin-inline-start: 10px;\nscroll-margin-inline-start: 1em;\n\n/* Global values */\nscroll-margin-inline-start: inherit;\nscroll-margin-inline-start: initial;\nscroll-margin-inline-start: unset;",
    "web-scraper-order": "1557089749-3410",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-left",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left",
    definition:
      "The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-left",
    syntax:
      "/* <length> values */\nscroll-margin-left: 10px;\nscroll-margin-left: 1em;\n\n/* Global values */\nscroll-margin-left: inherit;\nscroll-margin-left: initial;\nscroll-margin-left: unset;",
    "web-scraper-order": "1557089747-3409",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-right",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right",
    definition:
      "The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-right",
    syntax:
      "/* <length> values */\nscroll-margin-right: 10px;\nscroll-margin-right: 1em;\n\n/* Global values */\nscroll-margin-right: inherit;\nscroll-margin-right: initial;\nscroll-margin-right: unset;",
    "web-scraper-order": "1557089745-3408",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-margin-top",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top",
    definition:
      "The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    "css-property-name": "scroll-margin-top",
    syntax:
      "/* <length> values */\nscroll-margin-top: 10px;\nscroll-margin-top: 1em;\n\n/* Global values */\nscroll-margin-top: inherit;\nscroll-margin-top: initial;\nscroll-margin-top: unset;",
    "web-scraper-order": "1557089743-3407",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding",
    definition:
      "The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands.\n\n \n\n The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding",
    syntax:
      "/* Keyword values */\nscroll-padding: auto;\n\n/* <length> values */\nscroll-padding: 10px;\nscroll-padding: 1em .5em 1em 1em;\nscroll-padding: 10%;\n\n/* Global values */\nscroll-padding: inherit;\nscroll-padding: initial;\nscroll-padding: unset;",
    "web-scraper-order": "1557089741-3406",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-block",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block",
    definition:
      "The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension.",
    "css-property-name": "scroll-padding-block",
    syntax:
      "/* Keyword values */\nscroll-padding-block: auto;\n\n/* <length> values */\nscroll-padding-block: 10px;\nscroll-padding-block: 1em .5em;\nscroll-padding-block: 10%;\n\n/* Global values */\nscroll-padding-block: inherit;\nscroll-padding-block: initial;\nscroll-padding-block: unset;",
    "web-scraper-order": "1557089739-3405",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-block-end",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-end",
    definition:
      "The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-block-end",
    syntax:
      "/* Keyword values */\nscroll-padding-block-end: auto;\n\n/* <length> values */\nscroll-padding-block-end: 10px;\nscroll-padding-block-end: 1em;\nscroll-padding-block-end: 10%;\n\n/* Global values */\nscroll-padding-block-end: inherit;\nscroll-padding-block-end: initial;\nscroll-padding-block-endd: unset;",
    "web-scraper-order": "1557089737-3404",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-block-start",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-start",
    definition:
      "The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-block-start",
    syntax:
      "/* Keyword values */\nscroll-padding-block-start: auto;\n\n/* <length> values */\nscroll-padding-block-start: 10px;\nscroll-padding-block-start: 1em;\nscroll-padding-block-start: 10%;\n\n/* Global values */\nscroll-padding-block-start: inherit;\nscroll-padding-block-start: initial;\nscroll-padding-block-start: unset;",
    "web-scraper-order": "1557089735-3403",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-bottom",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom",
    definition:
      "The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-bottom",
    syntax:
      "/* Keyword values */\nscroll-padding-bottom: auto;\n\n/* <length> values */\nscroll-padding-bottom: 10px;\nscroll-padding-bottom: 1em;\nscroll-padding-bottom: 10%;\n\n/* Global values */\nscroll-padding-bottom: inherit;\nscroll-padding-bottom: initial;\nscroll-padding-bottom: unset;",
    "web-scraper-order": "1557089733-3402",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-inline",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline",
    definition:
      "The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension.\n\n \n\n The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-inline",
    syntax:
      "/* Keyword values */\nscroll-padding-inline: auto;\n\n/* <length> values */\nscroll-padding-inline: 10px;\nscroll-padding-inline: 1em .5em;\nscroll-padding-inline: 10%;\n\n/* Global values */\nscroll-padding-inline: inherit;\nscroll-padding-inline: initial;\nscroll-padding-inline: unset;",
    "web-scraper-order": "1557089731-3401",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-inline-end",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end",
    definition:
      "The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-inline-end",
    syntax:
      "/* Keyword values */\nscroll-padding-inline-end: auto;\n\n/* <length> values */\nscroll-padding-inline-end: 10px;\nscroll-padding-inline-end: 1em;\nscroll-padding-inline-end: 10%;\n\n/* Global values */\nscroll-padding-inline-end: inherit;\nscroll-padding-inline-end: initial;\nscroll-padding-inline-end: unset;",
    "web-scraper-order": "1557089729-3400",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-inline-start",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start",
    definition:
      "The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-inline-start",
    syntax:
      "/* Keyword values */\nscroll-padding-inline-start: auto;\n\n/* <length> values */\nscroll-padding-inline-start: 10px;\nscroll-padding-inline-start: 1em;\nscroll-padding-inline-start: 10%;\n\n/* Global values */\nscroll-padding-inline-start: inherit;\nscroll-padding-inline-start: initial;\nscroll-padding-inline-start: unset;",
    "web-scraper-order": "1557089727-3399",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-left",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left",
    definition:
      "The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-left",
    syntax:
      "/* Keyword values */\nscroll-padding-left: auto;\n\n/* <length> values */\nscroll-padding-left: 10px;\nscroll-padding-left: 1em;\nscroll-padding-left: 10%;\n\n/* Global values */\nscroll-padding-left: inherit;\nscroll-padding-left: initial;\nscroll-padding-left: unset;",
    "web-scraper-order": "1557089724-3398",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-right",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right",
    definition:
      "The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-right",
    syntax:
      "/* Keyword values */\nscroll-padding-right: auto;\n\n/* <length> values */\nscroll-padding-right: 10px;\nscroll-padding-right: 1em;\nscroll-padding-right: 10%;\n\n/* Global values */\nscroll-padding-right: inherit;\nscroll-padding-right: initial;\nscroll-padding-right: unset;",
    "web-scraper-order": "1557089722-3397",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-padding-top",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top",
    definition:
      "The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    "css-property-name": "scroll-padding-top",
    syntax:
      "/* Keyword values */\nscroll-padding-top: auto;\n\n/* <length> values */\nscroll-padding-top: 10px;\nscroll-padding-top: 1em;\nscroll-padding-top: 10%;\n\n/* Global values */\nscroll-padding-top: inherit;\nscroll-padding-top: initial;\nscroll-padding-top: unset;",
    "web-scraper-order": "1557089720-3396",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-snap-align",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align",
    definition:
      "The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.",
    "css-property-name": "scroll-snap-align",
    syntax:
      "/* Keyword values */\nscroll-snap-align: none;\nscroll-snap-align: start end; /* when two values set first is block, second inline */\nscroll-snap-align: center;\n\n/* Global values */\nscroll-snap-align: inherit;\nscroll-snap-align: initial;\nscroll-snap-align: unset;",
    "web-scraper-order": "1557089718-3395",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-snap-stop",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="container x mandatory-scroll-snapping" dir="ltr">\n  <div>X Mand. LTR </div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container x proximity-scroll-snapping" dir="ltr">\n  <div>X Proximity LTR</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y mandatory-scroll-snapping" dir="ltr">\n  <div>Y Mand. LTR</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y proximity-scroll-snapping" dir="ltr">\n  <div>Y Prox. LTR</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container x mandatory-scroll-snapping" dir="rtl">\n  <div>X Mandatory RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container x proximity-scroll-snapping" dir="rtl">\n  <div>X Proximity RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y mandatory-scroll-snapping" dir="rtl">\n  <div>Y Mand. RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y proximity-scroll-snapping" dir="rtl">\n  <div>Y Prox. RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop",
    definition:
      'The scroll-snap-stop CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.',
    "css-property-name": "scroll-snap-stop",
    syntax:
      "/* setup */\n:root, body {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column nowrap;\n  font-family: monospace;\n}\n.container {\n  display: flex;\n  overflow: auto;\n  outline: 1px dashed lightgray;\n  flex: none;\n}\n\n.container.x {\n  width: 100%;\n  height: 128px;\n  flex-flow: row nowrap;\n}\n\n.container.y {\n  width: 256px;\n  height: 256px;\n  flex-flow: column nowrap;\n}\n/* definite scroll snap */\n.mandatory-scroll-snapping {\n  scroll-snap-stop: always;\n}\n.proximity-scroll-snapping {\n  scroll-snap-stop: normal;\n}\n/* scroll-snap */\n.x.mandatory-scroll-snapping {\n  scroll-snap-type: x mandatory;\n}\n\n.y.mandatory-scroll-snapping {\n  scroll-snap-type: y mandatory;\n}\n\n.x.proximity-scroll-snapping {\n  scroll-snap-type: x proximity;\n}\n\n.y.proximity-scroll-snapping {\n  scroll-snap-type: y proximity;\n}\n\n.container > div {\n  text-align: center;\n  scroll-snap-align: center;\n  flex: none;\n}\n\n.x.container > div {\n  line-height: 128px;\n  font-size: 64px;\n  width: 100%;\n  height: 128px;\n}\n\n.y.container > div {\n  line-height: 256px;\n  font-size: 128px;\n  width: 256px;\n  height: 256px;\n}\n/* appearance fixes */\n.y.container > div:first-child {\n  line-height: 1.3;\n  font-size: 64px;\n}\n/* coloration */\n.container > div:nth-child(even) {\n  background-color: #87EA87;\n}\n\n.container > div:nth-child(odd) {\n  background-color: #87CCEA;\n}",
    "web-scraper-order": "1557089716-3394",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scroll-snap-type",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="holster">\n<div class="container x mandatory-scroll-snapping" dir="ltr">\n  <div>X Mand. LTR</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container x proximity-scroll-snapping" dir="ltr">\n  <div>X Prox. LTR</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y mandatory-scroll-snapping" dir="ltr">\n  <div>Y Mand. LTR</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y proximity-scroll-snapping" dir="ltr">\n  <div>Y Prox. LTR</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container x mandatory-scroll-snapping" dir="rtl">\n  <div>X Mand. RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container x proximity-scroll-snapping" dir="rtl">\n  <div>X Prox. RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y mandatory-scroll-snapping" dir="rtl">\n  <div>Y Mand. RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n\n<div class="container y proximity-scroll-snapping" dir="rtl">\n  <div>Y Prox. RTL</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n</div>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type",
    definition:
      "The scroll-snap-type CSS property sets how strictly snap points are enforced on the scroll container in case there is one.",
    "css-property-name": "scroll-snap-type",
    syntax:
      "/* setup */\nhtml, body, .holster {\n  height: 100%;\n}\n.holster {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column nowrap;\n  font-family: monospace;\n}\n\n.container {\n  display: flex;\n  overflow: auto;\n  outline: 1px dashed lightgray;\n  flex: none;\n}\n\n.container.x {\n  width: 100%;\n  height: 128px;\n  flex-flow: row nowrap;\n}\n\n.container.y {\n  width: 256px;\n  height: 256px;\n  flex-flow: column nowrap;\n}\n/* scroll-snap */\n.x.mandatory-scroll-snapping {\n  scroll-snap-type: x mandatory;\n}\n\n.y.mandatory-scroll-snapping {\n  scroll-snap-type: y mandatory;\n}\n\n.x.proximity-scroll-snapping {\n  scroll-snap-type: x proximity;\n}\n\n.y.proximity-scroll-snapping {\n  scroll-snap-type: y proximity;\n}\n\n.container > div {\n  text-align: center;\n  scroll-snap-align: center;\n  flex: none;\n}\n\n.x.container > div {\n  line-height: 128px;\n  font-size: 64px;\n  width: 100%;\n  height: 128px;\n}\n\n.y.container > div {\n  line-height: 256px;\n  font-size: 128px;\n  width: 256px;\n  height: 100%;\n}\n/* appearance fixes */\n.y.container > div:first-child {\n  line-height: 1.3;\n  font-size: 64px;\n}\n/* coloration */\n.container > div:nth-child(even) {\n  background-color: #87EA87;\n}\n\n.container > div:nth-child(odd) {\n  background-color: #87CCEA;\n}",
    "web-scraper-order": "1557089714-3393",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scrollbar-color",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="scroller">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
    definition:
      "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
    "css-property-name": "scrollbar-color",
    syntax:
      "/* Keyword values */\nscrollbar-color: auto;\nscrollbar-color: dark;\nscrollbar-color: light;\n\n/* <color> values */\nscrollbar-color: rebeccapurple green;   /* Two valid colors. \nThe first applies to the thumb of the scrollbar, the second to the track. */\n\n/* Global values */\nscrollbar-color: inherit;\nscrollbar-color: initial;\nscrollbar-color: unset;",
    "web-scraper-order": "1557089712-3392",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "scrollbar-width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="scroller">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
    definition:
      "The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.",
    "css-property-name": "scrollbar-width",
    syntax:
      "/* Keyword values */\nscrollbar-width: auto;\nscrollbar-width: thin;\nscrollbar-width: none;\n\n/* Global values */\nscrollbar-width: inherit;\nscrollbar-width: initial;\nscrollbar-width: unset;",
    "web-scraper-order": "1557089710-3391",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "sepia()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia",
    definition:
      "The sepia() CSS function converts the input image to sepia, giving it a warmer, more yellow/brown appearance. Its result is a <filter-function>.",
    "css-property-name": "sepia()",
    syntax:
      "sepia(0)     /* No effect */\nsepia(.65)   /* 65% sepia */\nsepia(100%)  /* Completely sepia */",
    "web-scraper-order": "1557089704-3389",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "shape-image-threshold",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="gradient-shape"></div>\n\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi \n  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint \n  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat \n  adipisci, libero quae nihil porro debitis laboriosam inventore animi \n  impedit nostrum nesciunt quisquam expedita! Dolores consectetur iure atque \n  a mollitia dicta repudiandae illum exercitationem aliquam repellendus \n  ipsum porro modi, id nemo eligendi, architecto ratione quibusdam iusto \n  nisi soluta? Totam inventore ea eum sed velit et eligendi suscipit \n  accusamus iusto dolore, at provident eius alias maxime pariatur non \n  deleniti ipsum sequi rem eveniet laboriosam magni expedita?\n</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold",
    definition:
      "The shape-image-threshold CSS property sets the alpha channel threshold used to extract the shape using an image as the value for shape-outside.",
    "css-property-name": "shape-image-threshold",
    syntax:
      "#gradient-shape {\n  width: 150px;\n  height: 150px;\n  float: left;\n  background-image: linear-gradient(30deg, black, transparent 80%,\n      transparent);\n  shape-outside: linear-gradient(30deg, black, transparent 80%,\n      transparent);\n  shape-image-threshold: 0.2;\n}",
    "web-scraper-order": "1557089700-3387",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "shape-margin",
    "css-property-example-css": null,
    "css-property-example-html":
      '<section>\n<div class="shape"></div>\nWe are not quite sure of any one thing in biology; our knowledge of geology\nis relatively very slight, and the economic laws of society are\nuncertain to every one except some individual who attempts to set them\nforth; but before the world was fashioned the square on the hypotenuse\nwas equal to the sum of the squares on the other two sides of a right\ntriangle, and it will be so after this world is dead; and the inhabitant\nof Mars, if he exists, probably knows its truth as we know it.</section>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin",
    definition:
      "The shape-margin CSS property sets a margin for a CSS shape created using shape-outside.",
    "css-property-name": "shape-margin",
    syntax:
      "section {\n  max-width: 400px;\n}\n\n.shape {\n  float: left;\n  width: 150px;\n  height: 150px;\n  background-color: maroon;\n  clip-path: polygon(0 0, 150px 150px, 0 150px);\n  shape-outside: polygon(0 0, 150px 150px, 0 150px);\n  shape-margin: 20px;\n}",
    "web-scraper-order": "1557089698-3386",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "shape-outside",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="main">\n  <div class="left"></div>\n  <div class="right"></div>\n  <p>\n    Sometimes a web page\'s text content appears to be\n    funneling your attention towards a spot on the page\n    to drive you to follow a particular link. Sometimes\n    you don\'t notice.\n  </p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside",
    definition:
      "The shape-outside CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; shape-outside provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.",
    "css-property-name": "shape-outside",
    syntax:
      ".main {\n  width: 530px;\n}\n\n.left,\n.right {\n  width: 40%;\n  height: 12ex;\n  background-color: lightgray;\n}\n\n.left {\n  -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);\n  shape-outside: polygon(0 0, 100% 100%, 0 100%);\n  float: left;\n  -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);\n  clip-path: polygon(0 0, 100% 100%, 0 100%);\n}\n\n.right {\n  -webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);\n  shape-outside: polygon(100% 0, 100% 100%, 0 100%);\n  float: right;\n  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);\n  clip-path: polygon(100% 0, 100% 100%, 0 100%);\n}\n\np {\n  text-align: center;\n}",
    "web-scraper-order": "1557089696-3385",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "skew()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="skewed">Skewed</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew",
    definition:
      "The skew() CSS function defines a transformation that skews an element on the 2D plane. Its result is a <transform-function> data type.",
    "css-property-name": "skew()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.skewed {\n  transform: skew(10deg); /* Equal to skewX(10deg) */\n  background-color: pink;\n}",
    "web-scraper-order": "1557089694-3384",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "skewX()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="skewed">Skewed</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX",
    definition:
      "The skewX() CSS function defines a transformation that skews an element in the horizontal direction on the 2D plane. Its result is a <transform-function> data type.",
    "css-property-name": "skewX()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.skewed {\n  transform: skewX(10deg); /* Equal to skew(10deg) */\n  background-color: pink;\n}",
    "web-scraper-order": "1557089691-3383",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "skewY()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Normal</div>\n<div class="skewed">Skewed</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY",
    definition:
      "The skewY() CSS function defines a transformation that skews an element in the vertical direction on the 2D plane. Its result is a <transform-function> data type.",
    "css-property-name": "skewY()",
    syntax:
      "div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.skewed {\n  transform: skewY(40deg);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089689-3382",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "speak-as (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="list">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/speak-as",
    definition:
      "The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue.",
    "css-property-name": "speak-as",
    syntax:
      "/* Keyword values */\nspeak-as: auto;\nspeak-as: bullets;\nspeak-as: numbers;\nspeak-as: words;\nspeak-as: spell-out;\n\n/* @counter-style name value */\nspeak-as: <counter-style-name>;",
    "web-scraper-order": "1557089685-3380",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "src (@font-face)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src",
    definition:
      "The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.",
    "css-property-name": "src",
    syntax:
      '/* <url> values */\nsrc: url(https://somewebsite.com/path/to/font.woff); /* Absolute URL */\nsrc: url(path/to/font.woff);                         /* Relative URL */\nsrc: url(path/to/font.woff) format("woff");          /* Explicit format */\nsrc: url(\'path/to/font.woff\');                       /* Quoted URL */\nsrc: url(path/to/svgfont.svg#example);               /* Fragment identifying font */\n\n/* <font-face-name> values */\nsrc: local(font);      /* Unquoted name */\nsrc: local(some font); /* Name containing space */\nsrc: local("font");    /* Quoted name */\n\n/* Multiple items */\nsrc: local(font), url(path/to/font.svg) format("svg"),\n     url(path/to/font.woff) format("woff"),\n     url(path/to/font.otf) format("opentype");',
    "web-scraper-order": "1557089683-3379",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "steps()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#steps()",
    definition:
      "The <timing-function> CSS data type denotes a mathematical function that describes how fast one-dimensional values change during animations. This lets you vary the animation's speed over the course of its duration.",
    "css-property-name": "<timing-function>",
    syntax:
      "/* The canonical Bézier curve with four <number> in the [0,1] range. */\ncubic-bezier(0.1, 0.7, 1.0, 0.1)   \n\n/* Using <integer> is valid as any <integer> is also a <number>. */\ncubic-bezier(0, 0, 1, 1)           \n\n/* Negative values for ordinates are valid, leading to bouncing effects.*/\ncubic-bezier(0.1, -0.6, 0.2, 0)    \n\n/* Values > 1.0 for ordinates are also valid. */\ncubic-bezier(0, 1.1, 0.8, 4)",
    "web-scraper-order": "1557089681-3378",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "styleset()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Firefox rocks!</p>\n<p class="variant">Firefox rocks!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#styleset()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    "css-property-name": "font-variant-alternates",
    syntax:
      '@font-feature-values "Leitura Display Swashes" {\n    @swash { fancy: 1 }\n}\n\np {\n  font-size: 1.5rem;\n}\n\n.variant {\n  font-family: Leitura Display Swashes;\n  font-variant-alternates: swash(fancy);\n}',
    "web-scraper-order": "1557089675-3375",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "stylistic()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Firefox rocks!</p>\n<p class="variant">Firefox rocks!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#stylistic()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    "css-property-name": "font-variant-alternates",
    syntax:
      '@font-feature-values "Leitura Display Swashes" {\n    @swash { fancy: 1 }\n}\n\np {\n  font-size: 1.5rem;\n}\n\n.variant {\n  font-family: Leitura Display Swashes;\n  font-variant-alternates: swash(fancy);\n}',
    "web-scraper-order": "1557089671-3373",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "suffix (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="choices">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>None of the above</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/suffix",
    definition:
      'The suffix descriptor of the@counter-style rule specifies content that will be appended to the marker representation. If not specified, the default value will be "\\2E\\20" (". ", a full stop followed by a space).',
    "css-property-name": "suffix",
    syntax:
      '/* <symbol> values */\nsuffix: "";\nsuffix: ") ";\nsuffix: url(bullet.png);',
    "web-scraper-order": "1557089669-3372",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "swash()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>Firefox rocks!</p>\n<p class="variant">Firefox rocks!</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#swash()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    "css-property-name": "font-variant-alternates",
    syntax:
      '@font-feature-values "Leitura Display Swashes" {\n    @swash { fancy: 1 }\n}\n\np {\n  font-size: 1.5rem;\n}\n\n.variant {\n  font-family: Leitura Display Swashes;\n  font-variant-alternates: swash(fancy);\n}',
    "web-scraper-order": "1557089663-3369",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "symbols (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      '<ul class="list">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n</ul>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/symbols",
    definition:
      "The symbols CSS descriptor is used to specify the symbols that the specified counter system will use to construct counter representations. A symbol can be a string, image, or identifier. It is used within the @counter-style at-rule.",
    "css-property-name": "symbols",
    syntax:
      'symbols: A B C D E;\nsymbols: "\\24B6" "\\24B7" "\\24B8" D E;\nsymbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";\nsymbols: url(\'first.svg\') url(\'second.svg\') url(\'third.svg\');\nsymbols: indic-numbers;',
    "web-scraper-order": "1557089660-3368",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "symbols()",
    "css-property-example-css": null,
    "css-property-example-html":
      "<ol>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n  <li>Five</li>\n</ol>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/symbols",
    definition:
      "The symbols() CSS function lets you define counter styles inline, directly as the value of a property such as list-style. Unlike @counter-style, symbols() is anonymous (i.e., it can only be used once). Although less powerful, it is shorter and easier to write than @counter-style.",
    "css-property-name": "symbols()",
    syntax: 'ol {\n  list-style: symbols(cyclic "*" "†" "‡");\n}',
    "web-scraper-order": "1557089658-3367",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "system (@counter-style)",
    "css-property-example-css": null,
    "css-property-example-html":
      "<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/system",
    definition:
      "The system descriptor specifies the algorithm to be used for converting the integer value of a counter to a string representation. It is used in a @counter-style to define the behavior of the defined style.",
    "css-property-name": "system",
    syntax:
      "/* Keyword values */\nsystem: cyclic;\nsystem: numeric;\nsystem: alphabetic;\nsystem: symbolic;\nsystem: additive;\nsystem: fixed;\n\n/* Combined values */\nsystem: fixed 3;\nsystem: extends decimal;",
    "web-scraper-order": "1557089656-3366",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "tab-size",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size",
    definition:
      "The tab-size CSS property is used to customize the width of a tab (U+0009) character.",
    "css-property-name": "tab-size",
    syntax: "pre {\n  tab-size: 4; /* Set tab size to 4 spaces */\n}",
    "web-scraper-order": "1557089654-3365",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "table-layout",
    "css-property-example-css": null,
    "css-property-example-html":
      "<table>\n  <tr><td>Ed</td><td>Wood</td></tr>\n  <tr><td>Albert</td><td>Schweitzer</td></tr>\n  <tr><td>Jane</td><td>Fonda</td></tr>\n  <tr><td>William</td><td>Shakespeare</td></tr>\n</table>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout",
    definition:
      "The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.",
    "css-property-name": "table-layout",
    syntax:
      "table {\n  table-layout: fixed;\n  width: 120px;\n  border: 1px solid red;\n}\n\ntd {\n  border: 1px solid blue;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}",
    "web-scraper-order": "1557089652-3364",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-align",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="example">\n  Integer elementum massa at nulla placerat varius.\n  Suspendisse in libero risus, in interdum massa.\n  Vestibulum ac leo vitae metus faucibus gravida ac in neque.\n  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align",
    definition:
      "The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.",
    "css-property-name": "text-align",
    syntax:
      '/* Keyword values */\ntext-align: left;\ntext-align: right;\ntext-align: center;\ntext-align: justify;\ntext-align: justify-all;\ntext-align: start;\ntext-align: end;\ntext-align: match-parent;\n\n/* Character-based alignment in a table column */\ntext-align: ".";\ntext-align: "." center;\n\n/* Block alignment values (Non-standard syntax) */\ntext-align: -moz-center;\ntext-align: -webkit-center;\n\n/* Global values */\ntext-align: inherit;\ntext-align: initial;\ntext-align: unset;',
    "web-scraper-order": "1557089642-3362",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-align-last",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Integer elementum massa at nulla placerat varius. Suspendisse in libero risus, in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque. Nullam est eros, suscipit sed dictum quis, accumsan a ligula.</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last",
    definition:
      "The text-align-last CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.",
    "css-property-name": "text-align-last",
    syntax:
      "p {\n  font-size: 1.4em;\n  text-align: justify;\n  text-align-last: center;\n}",
    "web-scraper-order": "1557089640-3361",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-combine-upright",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p lang="ja" class="exampleText">平成20年4月16日に</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright",
    definition:
      "The text-combine-upright CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.",
    "css-property-name": "text-combine-upright",
    syntax:
      ".exampleText {\n  writing-mode: vertical-lr;\n  text-combine-upright: digits 2;\n  font: 36px serif;\n}",
    "web-scraper-order": "1557089638-3360",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-decoration",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="under">This text has a line underneath it.</p>\n<p class="over">This text has a line over it.</p>\n<p class="line">This text has a line going through it.</p>\n<p>This <a class="plain" href="#">link will not be underlined</a>,\n    as links generally are by default. Be careful when removing\n    the text decoration on anchors since users often depend on\n    the underline to denote hyperlinks.</p>\n<p class="underover">This text has lines above <em>and</em> below it.</p>\n<p class="blink">This text might blink for you,\n    depending on the browser you use.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration",
    definition:
      "The text-decoration shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, and text-decoration-style.",
    "css-property-name": "text-decoration",
    syntax:
      ".under {\n  text-decoration: underline red;\n}\n\n.over {\n  text-decoration: wavy overline lime;\n}\n\n.line {\n  text-decoration: line-through;\n}\n\n.plain {\n  text-decoration: none;\n}\n\n.underover {\n  text-decoration: dashed underline overline;\n}\n\n.blink {\n  text-decoration: blink;\n}",
    "web-scraper-order": "1557089636-3359",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-decoration-color",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>This paragraph has <s>some erroneous text</s>\n    inside it that I want to call attention to.</p>",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color",
    definition:
      "The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.",
    "css-property-name": "text-decoration-color",
    syntax: null,
    "web-scraper-order": "1557089634-3358",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-decoration-line",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="wavy">Here\'s some text with wavy red underline!</p>\n<p class="both">This text has lines both above and below it.</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line",
    definition:
      "The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.",
    "css-property-name": "text-decoration-line",
    syntax:
      ".wavy { \n  text-decoration-line: underline;\n  text-decoration-style: wavy;\n  text-decoration-color: red;\n}\n\n.both {\n  text-decoration-line: underline overline;\n}",
    "web-scraper-order": "1557089632-3357",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-decoration-style",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="wavy">This text has a wavy red line beneath it.</p>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style",
    definition:
      "The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.",
    "css-property-name": "text-decoration-style",
    syntax:
      "/* Keyword values */\ntext-decoration-style: solid;\ntext-decoration-style: double;\ntext-decoration-style: dotted;\ntext-decoration-style: dashed;\ntext-decoration-style: wavy;\n\n/* Global values */\ntext-decoration-style: inherit;\ntext-decoration-style: initial;\ntext-decoration-style: unset;",
    "web-scraper-order": "1557089630-3356",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-emphasis",
    "css-property-example-css": null,
    "css-property-example-html": "<h2>This is important!</h2>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis",
    definition:
      "The text-emphasis CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for text-emphasis-style and text-emphasis-color.",
    "css-property-name": "text-emphasis",
    syntax: "h2 {\n  text-emphasis: triangle #D55;\n}",
    "web-scraper-order": "1557089628-3355",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-emphasis-color",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Here's an example:</p>\n\n<em>This has emphasis marks!</em>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color",
    definition:
      "The text-emphasis-color CSS property sets the color of emphasis marks. This value can also be set using the text-emphasis shorthand.",
    "css-property-name": "text-emphasis-color",
    syntax:
      'em {\n  text-emphasis-color: green;\n  text-emphasis-style: "*";\n}',
    "web-scraper-order": "1557089626-3354",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-emphasis-position",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position",
    definition:
      "The text-emphasis-position CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.",
    "css-property-name": "text-emphasis-position",
    syntax: "ruby {\n  text-emphasis: none;\n}",
    "web-scraper-order": "1557089623-3353",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-emphasis-style",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-style",
    definition:
      "The text-emphasis-style CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the text-emphasis shorthand.",
    "css-property-name": "text-emphasis-style",
    syntax: null,
    "web-scraper-order": "1557089621-3352",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-indent",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy \n    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy \n    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent",
    definition:
      "The text-indent CSS property sets the length of empty space (indentation) that is put before lines of text in a block.",
    "css-property-name": "text-indent",
    syntax:
      "/* <length> values */\ntext-indent: 3mm;\ntext-indent: 40px;\n\n/* <percentage> value\n   relative to the containing block width */\ntext-indent: 15%;\n\n/* Keyword values */\ntext-indent: 5em each-line;\ntext-indent: 5em hanging;\ntext-indent: 5em hanging each-line;\n\n/* Global values */\ntext-indent: inherit;\ntext-indent: initial;\ntext-indent: unset;",
    "web-scraper-order": "1557089619-3351",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-justify",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="none"><code>text-justify: none</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>\n<p class="auto"><code>text-justify: auto</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>\n<p class="dist"><code>text-justify: distribute</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>\n<p class="word"><code>text-justify: inter-word</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>\n<p class="char"><code>text-justify: inter-character</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-justify",
    definition:
      "The text-justify CSS property sets what type of justification should be applied to text when text-align: justify; is set on an element.",
    "css-property-name": "text-justify",
    syntax:
      "text-justify: none;\ntext-justify: auto;\ntext-justify: inter-word;\ntext-justify: inter-character;\ntext-justify: distribute; /* Deprecated value */",
    "web-scraper-order": "1557089617-3350",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-orientation",
    "css-property-example-css": null,
    "css-property-example-html": "<p>Lorem ipsum dolet semper quisquam.</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation",
    definition:
      "The text-orientation CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when writing-mode is not horizontal-tb). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.",
    "css-property-name": "text-orientation",
    syntax:
      "p {\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n}",
    "web-scraper-order": "1557089615-3349",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-overflow",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="overflow-visible">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n<p class="overflow-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n<p class="overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n<p class="overflow-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow",
    definition:
      "The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.",
    "css-property-name": "CSS text-overflow property",
    syntax: "overflow: hidden;\nwhite-space: nowrap;",
    "web-scraper-order": "1557089613-3348",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-rendering",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="small">LYoWAT - ff fi fl ffl</p>\n<p class="big">LYoWAT - ff fi fl ffl</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering",
    definition:
      "The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text.",
    "css-property-name": "text-rendering",
    syntax:
      '.small { font: 19.9px "Times New Roman", "Georgia", "Palatino", serif; }\n.big   { font: 20px "Times New Roman", "Georgia", "Palatino", serif; }',
    "web-scraper-order": "1557089611-3347",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-shadow",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="red-text-shadow">Sed ut perspiciatis unde omnis iste\n    natus error sit voluptatem accusantium doloremque laudantium,\n    totam rem aperiam, eaque ipsa quae ab illo inventore.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow",
    definition:
      "The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.",
    "css-property-name": "text-shadow",
    syntax: ".red-text-shadow {\n  text-shadow: red 0 -2px;\n}",
    "web-scraper-order": "1557089609-3346",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-transform",
    "css-property-example-css": null,
    "css-property-example-html":
      "<p>Initial String\n  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>\n</p>\n<p>text-transform: none\n  <strong><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span></strong>\n</p>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform",
    definition:
      "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.",
    "css-property-name": "text-transform",
    syntax: "span {\n  text-transform: none;\n}\nstrong { float: right; }",
    "web-scraper-order": "1557089607-3345",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "text-underline-position",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position",
    definition:
      "The text-underline-position CSS property specifies the position of the underline which is set using the text-decoration property's underline value.",
    "css-property-name": "text-underline-position",
    syntax: ":root {\n  text-underline-position: under;\n}",
    "web-scraper-order": "1557089605-3344",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "top",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>The size of this content is determined by the position of its edges.</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/top",
    definition:
      "The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.",
    "css-property-name": "top",
    syntax:
      "body {\n  background: beige;\n}\n\ndiv {\n  position: absolute;\n  top: 10%;\n  right: 40%;\n  bottom: 20%;\n  left: 15%;\n  background: gold;\n  border: 1px solid blue;\n}",
    "web-scraper-order": "1557089596-3340",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "touch-action",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
    definition:
      "The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).",
    "css-property-name": "touch-action",
    syntax: "#map {\n  touch-action: none;\n}",
    "web-scraper-order": "1557089594-3339",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transform",
    "css-property-example-css": null,
    "css-property-example-html": "<div>Transformed element</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
    definition:
      "The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.",
    "css-property-name": "transform",
    syntax:
      "/* Keyword values */\ntransform: none;\n\n/* Function values */\ntransform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);\ntransform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\ntransform: translate(12px, 50%);\ntransform: translate3d(12px, 50%, 3em);\ntransform: translateX(2em);\ntransform: translateY(3in);\ntransform: translateZ(2px);\ntransform: scale(2, 0.5);\ntransform: scale3d(2.5, 1.2, 0.3);\ntransform: scaleX(2);\ntransform: scaleY(0.5);\ntransform: scaleZ(0.3);\ntransform: rotate(0.5turn);\ntransform: rotate3d(1, 2.0, 3.0, 10deg);\ntransform: rotateX(10deg);\ntransform: rotateY(10deg);\ntransform: rotateZ(10deg);\ntransform: skew(30deg, 20deg);\ntransform: skewX(30deg);\ntransform: skewY(1.07rad);\ntransform: perspective(17px);\n\n/* Multiple function values */\ntransform: translateX(10px) rotate(10deg) translateY(5px);\n\n/* Global values */\ntransform: inherit;\ntransform: initial;\ntransform: unset;",
    "web-scraper-order": "1557089592-3338",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transform-box",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box",
    definition:
      "The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.",
    "css-property-name": "transform-box",
    syntax: null,
    "web-scraper-order": "1557089590-3337",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transform-origin",
    "css-property-example-css": null,
    "css-property-example-html": '<div class="box1">&nbsp;</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",
    definition:
      "The transform-origin CSS property sets the origin for an element's transformations.",
    "css-property-name": "transform-origin",
    syntax:
      "/* One-value syntax */\ntransform-origin: 2px;\ntransform-origin: bottom;\n\n/* x-offset | y-offset */\ntransform-origin: 3cm 2px;\n\n/* x-offset-keyword | y-offset */\ntransform-origin: left 2px;\n\n/* x-offset-keyword | y-offset-keyword */\ntransform-origin: right top;\n\n/* y-offset-keyword | x-offset-keyword */\ntransform-origin: top right;\n\n/* x-offset | y-offset | z-offset */\ntransform-origin: 2px 30% 10px;\n\n/* x-offset-keyword | y-offset | z-offset */\ntransform-origin: left 5px -3px;\n\n/* x-offset-keyword | y-offset-keyword | z-offset */\ntransform-origin: right bottom 2cm;\n\n/* y-offset-keyword | x-offset-keyword | z-offset */\ntransform-origin: bottom right 2cm;\n\n/* Global values */\ntransform-origin: inherit;\ntransform-origin: initial;\ntransform-origin: unset;",
    "web-scraper-order": "1557089586-3335",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transform-style",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style",
    definition:
      "The transform-style CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.",
    "css-property-name": "transform-style",
    syntax: null,
    "web-scraper-order": "1557089584-3334",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transition",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
    definition:
      "The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.",
    "css-property-name": "transition",
    syntax: null,
    "web-scraper-order": "1557089582-3333",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transition-delay",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",
    definition:
      "The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.",
    "css-property-name": "transition-delay",
    syntax:
      "/* <time> values */\ntransition-delay: 3s;\ntransition-delay: 2s, 4ms;\n\n/* Global values */\ntransition-delay: inherit;\ntransition-delay: initial;\ntransition-delay: unset;",
    "web-scraper-order": "1557089580-3332",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transition-duration",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration",
    definition:
      "The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.",
    "css-property-name": "transition-duration",
    syntax: null,
    "web-scraper-order": "1557089578-3331",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transition-property",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property",
    definition:
      "The transition-property CSS property sets the CSS properties to which a transition effect should be applied.",
    "css-property-name": "transition-property",
    syntax:
      "/* Keyword values */\ntransition-property: none;\ntransition-property: all;\n\n/* <custom-ident> values */\ntransition-property: test_05;\ntransition-property: -specific;\ntransition-property: sliding-vertically;\n\n/* Multiple values */\ntransition-property: test1, animation4;\ntransition-property: all, height, all;\ntransition-property: all, -moz-specific, sliding;\n\n/* Global values */\ntransition-property: inherit;\ntransition-property: initial;\ntransition-property: unset;",
    "web-scraper-order": "1557089576-3330",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "transition-timing-function",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
    definition:
      "The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.",
    "css-property-name": "transition-timing-function",
    syntax:
      ".ease {\n   transition-timing-function: ease;\n}\n.easein {\n   transition-timing-function: ease-in;\n}\n.easeout {\n   transition-timing-function: ease-out;\n}\n.easeinout {\n   transition-timing-function: ease-in-out;\n}\n.linear {\n   transition-timing-function: linear;\n}\n.cb {\n   transition-timing-function: cubic-bezier(0.2,-2,0.8,2);\n}",
    "web-scraper-order": "1557089574-3329",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "translate",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>\n  <p class="translate">Translation</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/translate",
    definition:
      "The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
    "css-property-name": "translate",
    syntax:
      "/* Keyword values */\ntranslate: none;\n\n/* Single values */\ntranslate: 100px;\ntranslate: 50%;\n\n/* Two values */\ntranslate: 100px 200px;\ntranslate: 50% 105px;\n\n/* Three values */\ntranslate: 50% 105px 5rem;",
    "web-scraper-order": "1557089571-3328",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "translate()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Static</div>\n<div class="moved">Moved</div>\n<div>Static</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate",
    definition:
      "The translate() CSS function repositions an element in the horizontal and/or vertical directions. Its result is a <transform-function> data type.",
    "css-property-name": "CSS translate() transform function",
    syntax:
      "div {\n  width: 60px;\n  height: 60px;\n  background-color: skyblue;\n}\n\n.moved {\n  transform: translate(10px); /* Equal to translateX(10px) */\n  background-color: pink;\n}",
    "web-scraper-order": "1557089569-3327",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "translate3d()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Static</div>\n<div class="moved">Moved</div>\n<div>Static</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d",
    definition:
      "The translate3d() CSS function repositions an element in 3D space. Its result is a <transform-function> data type.",
    "css-property-name":
      "CSS translate3d() — Transform function to move the element in 3D",
    syntax:
      "div {\n  width: 60px;\n  height: 60px;\n  background-color: skyblue;\n}\n\n.moved {\n  /* Equivalent to perspective(500px) translateX(10px) */\n  transform: perspective(500px) translate3d(10px, 0, 0px);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089567-3326",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "translateX()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Static</div>\n<div class="moved">Moved</div>\n<div>Static</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX",
    definition:
      "The translateX() CSS function repositions an element horizontally on the 2D plane. Its result is a <transform-function> data type.",
    "css-property-name": "translateX()",
    syntax:
      "div { \n  width: 60px;\n  height: 60px;\n  background-color: skyblue;\n}\n\n.moved {\n  transform: translateX(10px); /* Equal to translate(10px) */\n  background-color: pink;\n}",
    "web-scraper-order": "1557089565-3325",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "translateY()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Static</div>\n<div class="moved">Moved</div>\n<div>Static</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY",
    definition:
      "The translateY() CSS function repositions an element vertically on the 2D plane. Its result is a <transform-function> data type.",
    "css-property-name": "translateY()",
    syntax:
      "div {\n  width: 60px;\n  height: 60px;\n  background-color: skyblue;\n}\n\n.moved {\n  transform: translateY(10px);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089563-3324",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "translateZ()",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div>Static</div>\n<div class="moved">Moved</div>',
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ",
    definition:
      "The translateZ() CSS function repositions an element along the z-axis in 3D space, i.e., closer to or farther away from the viewer. Its result is a <transform-function> data type.",
    "css-property-name": "translateZ()",
    syntax:
      "div {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  left: 100px;\n  background-color: skyblue;\n}\n\n.moved {\n  transform: perspective(500px) translateZ(200px);\n  background-color: pink;\n}",
    "web-scraper-order": "1557089561-3323",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "turn",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#turn",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    "css-property-name": "<angle>",
    syntax: null,
    "web-scraper-order": "1557089559-3322",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "unicode-bidi",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="bible-quote">\n  A line of text\n</div>\n<div>\n  Another line of text\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi",
    definition:
      "The unicode-bidi CSS property, together with the direction property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The unicode-bidi property overrides this algorithm and allows the developer to control the text embedding.",
    "css-property-name": "unicode-bidi",
    syntax:
      "/* Keyword values */\nunicode-bidi: normal;\nunicode-bidi: embed;\nunicode-bidi: isolate;\nunicode-bidi: bidi-override;\nunicode-bidi: isolate-override;\nunicode-bidi: plaintext;\n/* Global values */\nunicode-bidi: inherit;\nunicode-bidi: initial;\nunicode-bidi: unset;",
    "web-scraper-order": "1557089557-3321",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "unicode-range (@font-face)",
    "css-property-example-css": null,
    "css-property-example-html": "<div>Me & You = Us</div>",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range",
    definition:
      "The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.",
    "css-property-name": "unicode-range",
    syntax:
      "@font-face {\n  font-family: 'Ampersand';\n  src: local('Times New Roman');\n  unicode-range: U+26;\n}\n\ndiv {\n  font-size: 4em;\n  font-family: Ampersand, Helvetica, sans-serif;\t\n}",
    "web-scraper-order": "1557089555-3320",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "unset",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>This text is red.</p>\n<div class="foo">\n  <p>This text is also red.</p>\n</div>\n<div class="bar">\n  <p>This text is green (default inherited value).</p>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/unset",
    definition:
      "The unset CSS keyword resets a property to its inherited value if it inherits from its parent, and to its initial value if not. In other words, it behaves like the inherit keyword in the first case, and like the initial keyword in the second case. It can be applied to any CSS property, including the CSS shorthand all.",
    "css-property-name": "unset",
    syntax:
      ".foo {\n  color: blue;\n}\n.bar {\n  color: green;\n}\n\np {\n  color: red;\n}\n.bar p {\n  color: unset;\n}",
    "web-scraper-order": "1557089553-3319",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "url()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/url#The_url()_functional_notation",
    definition:
      "The <url> CSS data type denotes a pointer to a resource, such as an image or a font. URLs can be used in numerous CSS properties, such as background-image, cursor, and list-style.",
    "css-property-name": "<url>",
    syntax:
      '.topbanner {\n  background: url("topbanner.png") #00D no-repeat fixed;\n}',
    "web-scraper-order": "1557089549-3317",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "user-zoom (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/user-zoom",
    definition:
      "The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport.",
    "css-property-name": "user-zoom",
    syntax: null,
    "web-scraper-order": "1557089547-3316",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "var()",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
    definition:
      'The var() CSS function can be used to insert the value of a custom property (sometimes called a "CSS variable") instead of any part of a value of another property.',
    "css-property-name": "var()",
    syntax: "var(--header-color, blue);",
    "web-scraper-order": "1557089542-3314",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "vertical-align",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>\ntop:<img style="vertical-align:top" src="https://mdn.mozillademos.org/files/15189/star.png"/> \nmiddle:<img style="vertical-align:middle" src="https://mdn.mozillademos.org/files/15189/star.png"/> \nbottom:<img style="vertical-align:bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/> \nsuper:<img style="vertical-align:super" src="https://mdn.mozillademos.org/files/15189/star.png"/> \nsub:<img style="vertical-align:sub" src="https://mdn.mozillademos.org/files/15189/star.png"/> \n</p>\n<p>\ntext-top:<img style="vertical-align:text-top" src="https://mdn.mozillademos.org/files/15189/star.png"/> \ntext-bottom:<img  style="vertical-align:text-bottom" src="https://mdn.mozillademos.org/files/15189/star.png"/>\n0.2em:<img style="vertical-align:0.2em" src="https://mdn.mozillademos.org/files/15189/star.png"/> \n-1em:<img  style="vertical-align:-1em" src="https://mdn.mozillademos.org/files/15189/star.png"/>\n20%:<img style="vertical-align:20%" src="https://mdn.mozillademos.org/files/15189/star.png"/> \n-100%:<img  style="vertical-align:-100%" src="https://mdn.mozillademos.org/files/15189/star.png"/>\n</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
    definition:
      "The vertical-align CSS property sets vertical alignment of an inline or table-cell box.",
    "css-property-name": "CSS vertical-align property",
    syntax:
      "#* {\n  box-sizing: border-box;\n}\n\nimg {\n  margin-right: 0.5em;\n}\n\np {\n  height: 3em;\n  padding: 0 .5em;\n  font-family: monospace;\n  text-decoration: underline overline;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n}",
    "web-scraper-order": "1557089540-3313",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "vh",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vh",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089538-3312",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "visibility",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p class="visible">The first paragraph is visible.</p>\n<p class="not-visible">The second paragraph is NOT visible.</p>\n<p class="visible">The third paragraph is visible. Notice the second paragraph is still occupying space.</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",
    definition:
      "The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.",
    "css-property-name": "visibility",
    syntax:
      "/* Keyword values */\nvisibility: visible;\nvisibility: hidden;\nvisibility: collapse;\n\n/* Global values */\nvisibility: inherit;\nvisibility: initial;\nvisibility: unset;",
    "web-scraper-order": "1557089534-3310",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "vmax",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vmax",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089530-3308",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "vmin",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vmin",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089528-3307",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "vw",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vw",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    "css-property-name": "<length>",
    syntax: null,
    "web-scraper-order": "1557089526-3306",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "white-space",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="css-code" class="box">\n      p { white-space: <select>\n        <option>normal</option>\n        <option>nowrap</option>\n        <option>pre</option>\n        <option>pre-wrap</option>\n        <option>pre-line</option>\n        <option>break-spaces</option>\n      </select> }\n    </div>\n    <div id="results" class="box">\n    <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space",
    definition:
      "The white-space CSS property sets how white space inside an element is handled.",
    "css-property-name": "white-space",
    syntax:
      "/* Keyword values */\nwhite-space: normal;\nwhite-space: nowrap;\nwhite-space: pre;\nwhite-space: pre-wrap;\nwhite-space: pre-line;\n\n/* https://github.com/w3c/csswg-drafts/pull/2841 */\nwhite-space: break-spaces;\n\n/* Global values */\nwhite-space: inherit;\nwhite-space: initial;\nwhite-space: unset;",
    "web-scraper-order": "1557089524-3305",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "widows",
    "css-property-example-css": null,
    "css-property-example-html":
      "<div>\n  <p>This is the first paragraph containing some text.</p>\n  <p>This is the second paragraph containing some more text than the first one. It is used to demonstrate how widows work.</p>\n  <p>This is the third paragraph. It has a little bit more text than the first one.</p>\n</div>",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/widows",
    definition:
      "The widows CSS property sets the minimum number of lines in a block container that must be shown at the top of a page, region, or column.",
    "css-property-name": "widows",
    syntax:
      "div {\n  background-color: #8cffa0;\n  columns: 3;\n  widows: 2;\n}\n\np {\n  background-color: #8ca0ff;\n}\n\np:first-child {\n  margin-top: 0;\n}",
    "web-scraper-order": "1557089522-3304",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "width (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/width",
    definition:
      "The width CSS descriptor is shorthand for setting both the min-width and the max-width of the viewport. By providing one viewport length value, that value will determine both the min-width and the max-width to the value provided.",
    "css-property-name": "width",
    syntax:
      "/* An example with one viewport value: */\n@viewport {\n    width: 320px;\n}\n\n/* An example with two viewport values: */\n@viewport {\n    width: 320px, 120px;\n}",
    "web-scraper-order": "1557089518-3302",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "width",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="px_length">Width measured in px</div>\n<div class="em_length">Width measured in em</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/width",
    definition:
      "The width CSS property sets an element's width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.",
    "css-property-name": "width",
    syntax:
      ".px_length {\n  width: 200px;\n  background-color: red;\n  color: white;\n  border: 1px solid black;\n}\n\n.em_length {\n  width: 20em;\n  background-color: white;\n  color: red;\n  border: 1px solid black;\n}",
    "web-scraper-order": "1557089520-3303",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "will-change",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
    definition:
      "The will-change CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.",
    "css-property-name": "will-change",
    syntax: ".sidebar {\n  will-change: transform;\n}",
    "web-scraper-order": "1557089516-3301",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "word-break",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>1. <code>word-break: normal</code></p>\n<p class="normal narrow">This is a long and\n Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu\n グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>\n\n<p>2. <code>word-break: break-all</code></p>\n<p class="breakAll narrow">This is a long and\n Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu\n グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>\n\n<p>3. <code>word-break: keep-all</code></p>\n<p class="keepAll narrow">This is a long and\n Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu\n グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>\n\n<p>4. <code>word-break: break-word</code></p> \n<p class="breakWord narrow">This is a long and \n  Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu\n グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/word-break",
    definition:
      "The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.",
    "css-property-name": "word-break",
    syntax:
      ".narrow {\n  padding: 10px;\n  border: 1px solid;\n  width: 500px;\n  margin: 0 auto;\n  font-size: 20px;\n  line-height: 1.5;\n  letter-spacing: 1px;\n}\n\n.normal {\n  word-break: normal;\n}\n\n.breakAll {\n  word-break: break-all;\n}\n\n.keepAll {\n  word-break: keep-all;\n}\n\n.breakWord { \n  word-break: break-word; \n}",
    "web-scraper-order": "1557089514-3300",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "word-spacing",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div id="mozdiv1">Here are many words...</div>\n<div id="mozdiv2">...and many more!</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing",
    definition:
      "The word-spacing CSS property sets the length of space between words and between tags.",
    "css-property-name": "word-spacing",
    syntax:
      "#mozdiv1 {\n  word-spacing: 15px;\n}\n\n#mozdiv2 {\n  word-spacing: 5em;\n}",
    "web-scraper-order": "1557089511-3299",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "word-wrap",
    "css-property-example-css": null,
    "css-property-example-html":
      '<p>They say the fishing is excellent at\n  Lake <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>normal</code>)</p>\n<p>They say the fishing is excellent at \n  Lake <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, \n  though I\'ve never been there myself. (<code>overflow-wrap: anywhere</code>)</p>\n<p>They say the fishing is excellent at\n  Lake <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>overflow-wrap: break-word</code>)</p>\n<p>They say the fishing is excellent at\n  Lake <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>word-break</code>)</p> \n<p>They say the fishing is excellent at \n  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em> \n  though I\'ve never been there myself. (<code>hyphens</code>, without <code>lang</code> attribute)</p>\n<p lang="en">They say the fishing is excellent at\n  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>hyphens</code>, English rules)</p>\n<p class="hyphens" lang="de">They say the fishing is excellent at\n  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,\n  though I\'ve never been there myself. (<code>hyphens</code>, German rules)</p>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap",
    definition:
      "The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.",
    "css-property-name":
      "CSS overflow-wrap — Control wrapping of text overflow or wrapping",
    syntax:
      "p {\n   width: 13em;\n   margin: 2px;\n   background: gold;\n}\n\n.ow-anywhere { \n   overflow-wrap: anywhere; \n}\n\n.ow-break-word {\n   overflow-wrap: break-word;\n}\n\n.word-break {\n   word-break: break-all;\n}\n\n.hyphens {\n   hyphens: auto;\n}",
    "web-scraper-order": "1557089509-3298",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "writing-mode",
    "css-property-example-css": null,
    "css-property-example-html":
      '<table>\n  <tr>\n    <th>Value</th>\n    <th>Vertical script</th>\n    <th>Horizontal script</th>\n    <th>Mixed script</th>\n  </tr>\n  <tr>\n    <td>horizontal-tb</td>\n    <td class="example Text1"><span>我家没有电脑。</span></td>\n    <td class="example Text1"><span>Example text</span></td>\n    <td class="example Text1"><span>1994年に至っては</span></td>\n  </tr>\n  <tr>\n    <td>vertical-lr</td>\n    <td class="example Text2"><span>我家没有电脑。</span></td>\n    <td class="example Text2"><span>Example text</span></td>\n    <td class="example Text2"><span>1994年に至っては</span></td>\n  </tr>\n  <tr>\n    <td>vertical-rl</td>\n    <td class="example Text3"><span>我家没有电脑。</span></td>\n    <td class="example Text3"><span>Example text</span></td>\n    <td class="example Text3"><span>1994年に至っては</span></td>\n  </tr>\n  <tr>\n    <td>sideways-lr</td>\n    <td class="example Text4"><span>我家没有电脑。</span></td>\n    <td class="example Text4"><span>Example text</span></td>\n    <td class="example Text4"><span>1994年に至っては</span></td>\n  </tr>\n  <tr>\n    <td>sideways-rl</td>\n    <td class="example Text5"><span>我家没有电脑。</span></td>\n    <td class="example Text5"><span>Example text</span></td>\n    <td class="example Text5"><span>1994年に至っては</span></td>\n  </tr>\n</table>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode",
    definition:
      "The writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.",
    "css-property-name": "writing-mode",
    syntax:
      "table {\n  border-collapse:collapse;\n}\ntd, th {\n  border: 1px black solid; padding: 3px;\n}\nth {\n  background-color: lightgray;\n}\n.example {\n  height:75px;\n  width:75px;\n}",
    "web-scraper-order": "1557089507-3297",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "x",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#x",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    "css-property-name": "<resolution>",
    syntax: "@media print and (min-resolution: 300dpi) { ... }",
    "web-scraper-order": "1557089505-3296",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "z-index",
    "css-property-example-css": null,
    "css-property-example-html":
      '<div class="dashed-box">Dashed box\n  <span class="gold-box">Gold box</span>\n  <span class="green-box">Green box</span>\n</div>',
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
    definition:
      "The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.",
    "css-property-name": "z-index",
    syntax:
      ".dashed-box { \n  position: relative;\n  z-index: 1;\n  border: dashed;\n  height: 8em;\n  margin-bottom: 1em;\n  margin-top: 2em;\n}\n.gold-box { \n  position: absolute;\n  z-index: 3; /* put .gold-box above .green-box and .dashed-box */\n  background: gold;\n  width: 80%;\n  left: 60px;\n  top: 3em;\n}\n.green-box { \n  position: absolute;\n  z-index: 2; /* put .green-box above .dashed-box */\n  background: lightgreen;\n  width: 20%;\n  left: 65%;\n  top: -25px;\n  height: 7em;\n  opacity: 0.9;\n}",
    "web-scraper-order": "1557089503-3295",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    name: "zoom (@viewport)",
    "css-property-example-css": null,
    "css-property-example-html": null,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/zoom",
    definition:
      "The zoom CSS descriptor sets the initial zoom factor of a document defined by the @viewport at-rule.",
    "css-property-name": "zoom",
    syntax: null,
    "web-scraper-order": "1557089501-3294",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  }
];
