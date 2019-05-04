// export const PROPERTIES = [
//   {
//     name: "align-content",
//     definition:
//       "Sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
//     tag: "flexbox",
//     url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
//     values: [
//       { name: "stretch", code: `<h1>test1</h1>` },
//       { name: "center", code: `<h1>test2</h1>` },
//       { name: "flex-start", code: `<h1>test3</h1>` },
//       { name: "flex-end", code: `<h1>test4</h1>` },
//       { name: "space-between", code: `<h1>test5</h1>` },
//       { name: "space-around", code: `<h1>test6</h1>` },
//       { name: "initial", code: `<h1>test7</h1>` },
//       { name: "inherit", code: `<h1>test8</h1>` }
//     ],
//     code: `
// const Wrapper = ({ children }) => (
//   <div
//     style={{
//       backgroundColor: "white",
//       border: "1px solid #c3c3c3",
//       height: "100%"
//     }}
//   >
//     {children}
//   </div>
// );

// const InnerContainer = () => (
//   <div
//     style={{
//       width: "140px",
//       height: "100%",
//       display: "flex",
//       // EDIT HERE ***************************
//       alignContent: "start",
//       // ***************************
//       border: "1px solid #000000",
//       flexWrap: "wrap"
//     }}
//   >
//     {" "}
//     <Box />
//     <Box />
//     <Box />
//     <Box />
//     <Box />
//     <Box />
//   </div>
// );

// const Box = () => (
//   <div
//     style={{
//       width: "30px",
//       height: "30px",
//       display: "block",
//       boxSizing: "border-box",
//       backgroundColor: "black",
//       border: "1px solid white"
//     }}
//   />
// );

// render(
//   <Wrapper>
//     <InnerContainer />
//   </Wrapper>
// );

//     `
//   }
// ];
export const PROPERTIES = [

  {
    "css-property": "additive-symbols (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/additive-symbols",
    definition:
      "The additive-symbols descriptor lets you specify symbols when the value of a counter system descriptor is additive. The additive-symbols descriptor defines additive tuples, each of which is a pair containing a symbol and a non-negative integer weight. The additive system is used to construct sign-value numbering systems such as Roman numerals.",
    name: "additive-symbols",
    "web-scraper-order": "1556986325-3238",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "align-content",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
    definition:
      "The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
    name: "align-content",
    "web-scraper-order": "1556986321-3236",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "align-items",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
    definition:
      "The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.",
    name: "align-items",
    "web-scraper-order": "1556986319-3235",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "align-self",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-self",
    definition:
      "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.",
    name: "align-self",
    "web-scraper-order": "1556986317-3234",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "all",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/all",
    definition:
      "The all shorthand CSS property resets all of an element's properties (except unicode-bidi and direction). It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.",
    name: "all",
    "web-scraper-order": "1556986315-3233",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation",
    definition:
      "The animation shorthand CSS property applies an animation between styles. It is a shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.",
    name: "animation",
    "web-scraper-order": "1556986307-3230",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-delay",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay",
    definition:
      "The animation-delay CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.",
    name: "animation-delay",
    "web-scraper-order": "1556986305-3229",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-direction",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction",
    definition:
      "The animation-direction CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.",
    name: "animation-direction",
    "web-scraper-order": "1556986302-3228",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-duration",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration",
    definition:
      "The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.",
    name: "animation-duration",
    "web-scraper-order": "1556986300-3227",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-fill-mode",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode",
    definition:
      "The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution.",
    name: "animation-fill-mode",
    "web-scraper-order": "1556986298-3226",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-iteration-count",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count",
    definition:
      "The animation-iteration-count CSS property sets the number of times an animation cycle should be played before stopping.",
    name: "animation-iteration-count",
    "web-scraper-order": "1556986296-3225",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-name",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name",
    definition:
      "The animation-name CSS property sets one or more animations to apply to an element. Each name is an @keyframes at-rule that sets the property values for the animation sequence.",
    name: "animation-name",
    "web-scraper-order": "1556986294-3224",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-play-state",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state",
    definition:
      "The animation-play-state CSS property sets whether an animation is running or paused.",
    name: "animation-play-state",
    "web-scraper-order": "1556986292-3223",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "animation-timing-function",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function",
    definition:
      "The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.",
    name: "animation-timing-function",
    "web-scraper-order": "1556986290-3222",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "annotation()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#annotation()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    name: "font-variant-alternates",
    "web-scraper-order": "1556986286-3220",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "attr()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/attr",
    definition:
      "The attr() CSS function is used to retrieve the value of an attribute of the selected element and use it in the stylesheet. It can also be used on pseudo-elements, in which case the value of the attribute on the pseudo-element's originating element is returned.",
    name: "attr()",
    "web-scraper-order": "1556986284-3219",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "backface-visibility",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility",
    definition:
      "The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.",
    name: "backface-visibility",
    "web-scraper-order": "1556986280-3217",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background",
    definition:
      "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.",
    name: "background",
    "web-scraper-order": "1556986278-3216",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-attachment",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment",
    definition:
      "The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.",
    name: "background-attachment",
    "web-scraper-order": "1556986276-3215",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-blend-mode",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode",
    definition:
      "The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color.",
    name: "background-blend-mode",
    "web-scraper-order": "1556986274-3214",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-clip",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip",
    definition:
      "The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box.",
    name: "background-clip",
    "web-scraper-order": "1556986271-3213",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color",
    definition:
      "The background-color CSS property sets the background color of an element.",
    name: "background-color",
    "web-scraper-order": "1556986269-3212",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-image",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-image",
    definition:
      "The background-image CSS property sets one or more background images on an element.",
    name: "CSS background-image property",
    "web-scraper-order": "1556986267-3211",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin",
    definition:
      "The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.",
    name: "background-origin",
    "web-scraper-order": "1556986265-3210",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-position",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-position",
    definition:
      "The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.",
    name: "background-position",
    "web-scraper-order": "1556986263-3209",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-repeat",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat",
    definition:
      "The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.",
    name: "background-repeat",
    "web-scraper-order": "1556986261-3208",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "background-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-size",
    definition:
      "The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.",
    name: "background-size",
    "web-scraper-order": "1556986259-3207",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "block-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/block-size",
    definition:
      "The block-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode.",
    name: "block-size",
    "web-scraper-order": "1556986251-3203",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "blur()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur",
    definition:
      "The blur() CSS function applies a Gaussian blur to the input image. Its result is a <filter-function>.",
    name: "blur()",
    "web-scraper-order": "1556986249-3202",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border",
    definition:
      "The border shorthand CSS property sets an element's border. It sets the values of border-width, border-style, and border-color.",
    name: "border",
    "web-scraper-order": "1556986247-3201",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block",
    definition: "",
    name: "border-block",
    "web-scraper-order": "1556986245-3200",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-color",
    definition:
      "The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-color",
    "web-scraper-order": "1556986243-3199",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end",
    definition: "",
    name: "border-block-end",
    "web-scraper-order": "1556986241-3198",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-end-color",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color",
    definition:
      "The border-block-end-color CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-end-color",
    "web-scraper-order": "1556986238-3197",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-end-style",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style",
    definition:
      "The border-block-end-style CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-end-style",
    "web-scraper-order": "1556986236-3196",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-end-width",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width",
    definition:
      "The border-block-end-width CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-end-width",
    "web-scraper-order": "1556986234-3195",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start",
    definition: "",
    name: "border-block-start",
    "web-scraper-order": "1556986232-3194",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-start-color",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color",
    definition:
      "The border-block-start-color CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-start-color",
    "web-scraper-order": "1556986230-3193",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-start-style",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style",
    definition:
      "The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-start-style",
    "web-scraper-order": "1556986228-3192",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-start-width",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width",
    definition:
      "The border-block-start-width CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-start-width",
    "web-scraper-order": "1556986226-3191",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-style",
    definition:
      "The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-style",
    "web-scraper-order": "1556986224-3190",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-block-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-width",
    definition:
      "The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-block-width",
    "web-scraper-order": "1556986222-3189",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-bottom",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom",
    definition:
      "The border-bottom shorthand CSS property sets an element's bottom border. It sets the values of border-bottom-width, border-bottom-style and border-bottom-color.",
    name: "border-bottom",
    "web-scraper-order": "1556986220-3188",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-bottom-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color",
    definition:
      "The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.",
    name: "border-bottom-color",
    "web-scraper-order": "1556986218-3187",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-bottom-left-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius",
    definition:
      "The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.",
    name: "border-bottom-left-radius",
    "web-scraper-order": "1556986216-3186",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-bottom-right-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius",
    definition:
      "The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.",
    name: "border-bottom-right-radius",
    "web-scraper-order": "1556986214-3185",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-bottom-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style",
    definition:
      "The border-bottom-style CSS property sets the line style of an element's bottom border.",
    name: "border-bottom-style",
    "web-scraper-order": "1556986212-3184",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-bottom-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width",
    definition:
      "The border-bottom-width CSS property sets the width of the bottom border of an element.",
    name: "border-bottom-width",
    "web-scraper-order": "1556986210-3183",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-collapse",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse",
    definition:
      "The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.",
    name: "border-collapse",
    "web-scraper-order": "1556986208-3182",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-color",
    definition:
      "The border-color shorthand CSS property sets the color of an element's border.",
    name: "border-color",
    "web-scraper-order": "1556986206-3181",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-end-end-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius",
    definition: "",
    name: "border-end-end-radius",
    "web-scraper-order": "1556986203-3180",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-end-start-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius",
    definition: "",
    name: "border-end-start-radius",
    "web-scraper-order": "1556986201-3179",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-image",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image",
    definition:
      "The border-image CSS property draws an image in place of an element's border-style.",
    name: "border-image",
    "web-scraper-order": "1556986199-3178",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-image-outset",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset",
    definition:
      "The border-image-outset CSS property sets the distance by which an element's border image is set out from its border box.",
    name: "border-image-outset",
    "web-scraper-order": "1556986197-3177",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-image-repeat",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat",
    definition:
      "The border-image-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.",
    name: "border-image-repeat",
    "web-scraper-order": "1556986195-3176",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-image-slice",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice",
    definition:
      "The border-image-slice CSS property divides the image specified by border-image-source into regions. These regions form the components of an element's border image.",
    name: "border-image-slice",
    "web-scraper-order": "1556986193-3175",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-image-source",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source",
    definition:
      "The border-image-source CSS property sets the source image used to create an element's border image.",
    name: "border-image-source",
    "web-scraper-order": "1556986191-3174",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-image-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width",
    definition:
      "The border-image-width CSS property sets the width of an element's border image.",
    name: "border-image-width",
    "web-scraper-order": "1556986189-3173",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline",
    definition: "",
    name: "border-inline",
    "web-scraper-order": "1556986187-3172",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-color",
    definition:
      "The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-color",
    "web-scraper-order": "1556986185-3171",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end",
    definition: "",
    name: "border-inline-end",
    "web-scraper-order": "1556986183-3170",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-end-color",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color",
    definition:
      "The border-inline-end-color CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-end-color",
    "web-scraper-order": "1556986181-3169",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-end-style",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style",
    definition:
      "The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-end-style",
    "web-scraper-order": "1556986179-3168",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-end-width",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width",
    definition:
      "The border-inline-end-width CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-end-width",
    "web-scraper-order": "1556986177-3167",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start",
    definition: "",
    name: "border-inline-start",
    "web-scraper-order": "1556986175-3166",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-start-color",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color",
    definition:
      "The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-start-color",
    "web-scraper-order": "1556986173-3165",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-start-style",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style",
    definition:
      "The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-start-style",
    "web-scraper-order": "1556986171-3164",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-start-width",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width",
    definition:
      "The border-inline-start-width CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-start-width",
    "web-scraper-order": "1556986168-3163",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-style",
    definition:
      "The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-style",
    "web-scraper-order": "1556986166-3162",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-inline-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-width",
    definition:
      "The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "border-inline-width",
    "web-scraper-order": "1556986164-3161",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-left",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left",
    definition:
      "The border-left shorthand CSS property set an element's left border.",
    name: "border-left",
    "web-scraper-order": "1556986162-3160",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-left-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color",
    definition:
      "The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.",
    name: "border-left-color",
    "web-scraper-order": "1556986160-3159",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-left-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style",
    definition:
      "The border-left-style CSS property sets the line style of an element's left border.",
    name: "border-left-style",
    "web-scraper-order": "1556986158-3158",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-left-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width",
    definition:
      "The border-left-width CSS property sets the width of the left border of an element.",
    name: "border-left-width",
    "web-scraper-order": "1556986156-3157",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-radius",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius",
    definition:
      "The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.",
    name: "border-radius",
    "web-scraper-order": "1556986154-3156",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-right",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right",
    definition:
      "The border-right shorthand CSS property sets an element's right border. It sets the values of border-right-width, border-right-style and border-right-color.",
    name: "border-right",
    "web-scraper-order": "1556986152-3155",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-right-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color",
    definition:
      "The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.",
    name: "border-right-color",
    "web-scraper-order": "1556986150-3154",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-right-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style",
    definition:
      "The border-right-style CSS property sets the line style of an element's right border.",
    name: "border-right-style",
    "web-scraper-order": "1556986148-3153",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-right-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width",
    definition:
      "The border-right-width CSS property sets the width of the right border of an element.",
    name: "border-right-width",
    "web-scraper-order": "1556986146-3152",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-spacing",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing",
    definition:
      "The border-spacing CSS property sets the distance between the borders of adjacent <table> cells. This property applies only when border-collapse is separate.",
    name: "border-spacing",
    "web-scraper-order": "1556986144-3151",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-start-end-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius",
    definition: "",
    name: "border-start-end-radius",
    "web-scraper-order": "1556986142-3150",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-start-start-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius",
    definition: "",
    name: "border-start-start-radius",
    "web-scraper-order": "1556986140-3149",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-style",
    definition:
      "The border-style shorthand CSS property sets the line style for all four sides of an element's border.",
    name: "border-style",
    "web-scraper-order": "1556986138-3148",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-top",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top",
    definition:
      "The border-top shorthand CSS property set an element's top border. It sets the values of border-top-width, border-top-style and border-top-color.",
    name: "border-top",
    "web-scraper-order": "1556986135-3147",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-top-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color",
    definition:
      "The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.",
    name: "border-top-color",
    "web-scraper-order": "1556986133-3146",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-top-left-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius",
    definition:
      "The border-top-left-radius CSS property rounds the top-left corner of an element.",
    name: "border-top-left-radius",
    "web-scraper-order": "1556986131-3145",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-top-right-radius",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius",
    definition:
      "The border-top-right-radius CSS property rounds the top-right corner of an element.",
    name: "border-top-right-radius",
    "web-scraper-order": "1556986129-3144",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-top-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style",
    definition:
      "The border-top-style CSS property sets the line style of an element's top border.",
    name: "border-top-style",
    "web-scraper-order": "1556986127-3143",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-top-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width",
    definition:
      "The border-top-width CSS property sets the width of the top border of an element.",
    name: "border-top-width",
    "web-scraper-order": "1556986125-3142",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "border-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-width",
    definition:
      "The border-width shorthand CSS property sets the width of an element's border.",
    name: "border-width",
    "web-scraper-order": "1556986123-3141",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "bottom",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/bottom",
    definition:
      "The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.",
    name: "bottom",
    "web-scraper-order": "1556986121-3140",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "box-decoration-break",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break",
    definition:
      "The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.",
    name: "box-decoration-break",
    "web-scraper-order": "1556986117-3138",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "box-shadow",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",
    definition:
      "The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.",
    name: "box-shadow",
    "web-scraper-order": "1556986115-3137",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "box-sizing",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
    definition:
      "The box-sizing CSS property sets how the total width and height of an element is calculated.",
    name: "CSS box-sizing — Control how width and height are applied",
    "web-scraper-order": "1556986113-3136",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "break-after",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",
    definition:
      "The break-after CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.",
    name: "break-after",
    "web-scraper-order": "1556986111-3135",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "break-before",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/break-before",
    definition:
      "The break-before CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.",
    name: "break-before",
    "web-scraper-order": "1556986109-3134",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "break-inside",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside",
    definition:
      "The break-inside CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.",
    name: "break-inside",
    "web-scraper-order": "1556986107-3133",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "brightness()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness",
    definition:
      "The brightness() CSS function applies a linear multiplier to the input image, making it appear brighter or darker. Its result is a <filter-function>.",
    name: "brightness()",
    "web-scraper-order": "1556986105-3132",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "calc()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/calc",
    definition:
      "The calc() CSS function lets you perform calculations when specifying CSS property values. It can be used anywhere a <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> is allowed.",
    name: "calc()",
    "web-scraper-order": "1556986103-3131",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "caption-side",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side",
    definition:
      "The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.",
    name: "caption-side",
    "web-scraper-order": "1556986100-3130",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "caret-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color",
    definition:
      "The caret-color CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as <input> or those with the contenteditable attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.",
    name: "caret-color",
    "web-scraper-order": "1556986098-3129",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "ch",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556986096-3128",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "character-variant()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#character-variant()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    name: "font-variant-alternates",
    "web-scraper-order": "1556986092-3126",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "circle()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#circle()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    name: "<basic-shape>",
    "web-scraper-order": "1556986086-3123",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "clamp()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp",
    definition: "",
    name: "clamp()",
    "web-scraper-order": "1556986084-3122",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "clear",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clear",
    definition:
      "The clear CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The clear property applies to floating and non-floating elements.",
    name: "clear",
    "web-scraper-order": "1556986082-3121",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "clip",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clip",
    definition:
      "The clip CSS property defines what portion of an element is visible. The clip property applies only to absolutely positioned elements, that is elements with position:absolute or position:fixed.",
    name: "clip",
    "web-scraper-order": "1556986080-3120",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "clip-path",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path",
    definition:
      "The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.",
    name: "clip-path",
    "web-scraper-order": "1556986078-3119",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "cm",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#cm",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556986076-3118",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
    definition:
      "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.",
    name: "color",
    "web-scraper-order": "1556986072-3116",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "color-adjust",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color-adjust",
    definition:
      "The color-adjust CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.",
    name: "color-adjust",
    "web-scraper-order": "1556986070-3115",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-count",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-count",
    definition:
      "The column-count CSS property breaks an element's content into the specified number of columns.",
    name: "column-count",
    "web-scraper-order": "1556986068-3114",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-fill",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill",
    definition:
      "The column-fill CSS property controls how an element's contents are balanced when broken into columns.",
    name: "column-fill",
    "web-scraper-order": "1556986065-3113",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-gap",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap",
    definition: "",
    name: "column-gap (grid-column-gap)",
    "web-scraper-order": "1556986063-3112",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-rule",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule",
    definition:
      "The column-rule CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.",
    name: "column-rule",
    "web-scraper-order": "1556986061-3111",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-rule-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color",
    definition:
      "The column-rule-color CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.",
    name: "column-rule-color",
    "web-scraper-order": "1556986059-3110",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-rule-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style",
    definition:
      "The column-rule-style CSS property sets the style of the line drawn between columns in a multi-column layout.",
    name: "column-rule-style",
    "web-scraper-order": "1556986057-3109",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-rule-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width",
    definition:
      "The column-rule-width CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.",
    name: "column-rule-width",
    "web-scraper-order": "1556986055-3108",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-span",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-span",
    definition:
      "The column-span CSS property makes it possible for an element to span across all columns when its value is set to all.",
    name: "column-span",
    "web-scraper-order": "1556986053-3107",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "column-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/column-width",
    definition:
      "The column-width CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the column-width value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.",
    name: "column-width",
    "web-scraper-order": "1556986051-3106",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "columns",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/columns",
    definition:
      "The columns CSS property sets the column width and column count of an element.",
    name: "columns",
    "web-scraper-order": "1556986049-3105",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "conic-gradient()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient",
    definition:
      "The conic-gradient() CSS function creates an image consisting of a gradient with color transitions rotated around a center point (rather than radiating from the center). Example conic gradients include pie charts and color wheels. The result of the conic-gradient() function is an object of the <gradient> data type, which is a special kind of <image>.",
    name: "conic-gradient()",
    "web-scraper-order": "1556986047-3104",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "content",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/content",
    definition:
      "The content CSS property replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements.",
    name: "content",
    "web-scraper-order": "1556986045-3103",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "contrast()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast",
    definition:
      "The contrast() CSS function adjusts the contrast of the input image. Its result is a <filter-function>.",
    name: "contrast()",
    "web-scraper-order": "1556986043-3102",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "counter-increment",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment",
    definition:
      "The counter-increment CSS property increases or decreases the value of a CSS counter by a given value.",
    name: "counter-increment",
    "web-scraper-order": "1556986038-3100",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "counter-reset",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset",
    definition:
      "The counter-reset CSS property resets a CSS counter to a given value.",
    name: "counter-reset",
    "web-scraper-order": "1556986036-3099",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "cross-fade()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/cross-fade",
    definition:
      "The CSS cross-fade() function can be used to blend two or more images at a defined transparency. It can be used for many simple image manipulations, such as tinting an image with a solid color or highlighting a particular area of the page by combining an image with a radial gradient.",
    name: "cross-fade()",
    "web-scraper-order": "1556986030-3097",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "cubic-bezier()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#cubic-bezier()",
    definition:
      "The <timing-function> CSS data type denotes a mathematical function that describes how fast one-dimensional values change during animations. This lets you vary the animation's speed over the course of its duration.",
    name: "<timing-function>",
    "web-scraper-order": "1556986028-3096",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "cursor",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",
    definition:
      "The cursor CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.",
    name: "CSS cursor property",
    "web-scraper-order": "1556986024-3094",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "deg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#deg",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    name: "<angle>",
    "web-scraper-order": "1556986018-3091",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "direction",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/direction",
    definition:
      "The direction CSS property sets the direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Hebrew or Arabic), and ltr for those written from left to right (like English and most other languages).",
    name: "direction",
    "web-scraper-order": "1556986012-3088",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "display",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
    definition:
      "The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as grid or flex.",
    name: "display",
    "web-scraper-order": "1556986008-3086",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "dpcm",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#dpcm",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    name: "<resolution>",
    "web-scraper-order": "1556985993-3079",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "dpi",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#dpi",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    name: "<resolution>",
    "web-scraper-order": "1556985991-3078",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "dppx",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#dppx",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    name: "<resolution>",
    "web-scraper-order": "1556985989-3077",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "drop-shadow()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow",
    definition:
      "The drop-shadow() CSS function applies a drop shadow effect to the input image. Its result is a <filter-function>.",
    name: "drop-shadow()",
    "web-scraper-order": "1556985987-3076",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "element()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/element",
    definition:
      "The element() CSS function defines an <image> value generated from an arbitrary HTML element. This image is live, meaning that if the HTML element is changed, the CSS properties using the resulting value are automatically updated.",
    name: "element()",
    "web-scraper-order": "1556985985-3075",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "ellipse()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#ellipse()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    name: "<basic-shape>",
    "web-scraper-order": "1556985983-3074",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "em",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#em",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985981-3073",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "empty-cells",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells",
    definition:
      "The empty-cells CSS property sets whether borders and backgrounds appear around <table> cells that have no visible content.",
    name: "empty-cells",
    "web-scraper-order": "1556985977-3071",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "env()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/env",
    definition: null,
    name: "env()",
    "web-scraper-order": "1556985973-3069",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "ex",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#ex",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985971-3068",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "fallback (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/fallback",
    definition:
      "The fallback descriptor can be used to specify a counter style to fall back to if the current counter style cannot create a marker representation for a particular counter value. If the specified fallback style is also unable to construct a representation, then its fallback style will be used. If a valid fallback style is not specified, it defaults to decimal.",
    name: "fallback",
    "web-scraper-order": "1556985969-3067",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "filter",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
    definition:
      "The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.",
    name: "filter",
    "web-scraper-order": "1556985967-3066",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "fit-content()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content",
    definition:
      "The fit-content() CSS function clamps a given size to an available size according to the formula min(maximum size, max(minimum size, argument)).",
    name: "fit-content()",
    "web-scraper-order": "1556985952-3059",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "flex",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
    definition:
      "The flex CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.",
    name: "CSS flex property",
    "web-scraper-order": "1556985948-3057",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "flex-basis",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis",
    definition:
      "The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.",
    name: "flex-basis",
    "web-scraper-order": "1556985946-3056",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "flex-direction",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction",
    definition:
      "The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).",
    name: "flex-direction",
    "web-scraper-order": "1556985944-3055",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "flex-flow",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow",
    definition:
      "The flex-flow CSS property is a shorthand property for flex-direction and flex-wrap properties.",
    name: "flex-flow",
    "web-scraper-order": "1556985942-3054",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "flex-grow",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow",
    definition:
      "The flex-grow CSS property sets how much of the remaining space in the flex container should be assigned to that item (the flex grow factor). The remaining space is the size of the flex container minus the size of all flex items together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.",
    name: "flex-grow",
    "web-scraper-order": "1556985940-3053",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "flex-shrink",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink",
    definition:
      "The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.",
    name: "flex-shrink",
    "web-scraper-order": "1556985938-3052",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "flex-wrap",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
    definition:
      "The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.",
    name: "flex-wrap",
    "web-scraper-order": "1556985936-3051",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "float",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/float",
    definition:
      "The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).",
    name: "float",
    "web-scraper-order": "1556985934-3050",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font",
    definition:
      "The font CSS property is a shorthand for font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family. Alternatively, it sets an element's font to a system font.",
    name: "font",
    "web-scraper-order": "1556985929-3048",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-family (@font-face)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family",
    definition:
      "The font-family CSS descriptor allows authors to specify the font family for the font specified in an @font-face rule.",
    name: "font-family",
    "web-scraper-order": "1556985923-3045",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-family",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family",
    definition:
      "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.",
    name: "font-family",
    "web-scraper-order": "1556985925-3046",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-feature-settings",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings",
    definition:
      "The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.",
    name: "font-feature-settings",
    "web-scraper-order": "1556985921-3044",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-kerning",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning",
    definition:
      "The font-kerning CSS property sets the use of the kerning information stored in a font.",
    name: "font-kerning",
    "web-scraper-order": "1556985915-3042",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-language-override",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-language-override",
    definition:
      "The font-language-override CSS property controls the use of language-specific glyphs in a typeface.",
    name: "font-language-override",
    "web-scraper-order": "1556985913-3041",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-optical-sizing",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing",
    definition:
      "The font-optical-sizing CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.",
    name: "font-optical-sizing",
    "web-scraper-order": "1556985911-3040",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size",
    definition:
      "The font-size CSS property sets the size of the font. This property is also used to compute the size of em, ex, and other relative <length> units.",
    name: "font-size",
    "web-scraper-order": "1556985909-3039",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-size-adjust",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust",
    definition:
      "The font-size-adjust CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.",
    name: "font-size-adjust",
    "web-scraper-order": "1556985907-3038",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-stretch",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch",
    definition: "",
    name: "font-stretch",
    "web-scraper-order": "1556985905-3037",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-style (@font-face)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-style",
    definition:
      "The font-style CSS descriptor allows authors to specify font styles for the fonts specified in the @font-face rule.",
    name: "font-style",
    "web-scraper-order": "1556985899-3035",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-style",
    definition:
      "The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.",
    name: "font-style",
    "web-scraper-order": "1556985901-3036",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-synthesis",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis",
    definition:
      "The font-synthesis CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.",
    name: "font-synthesis",
    "web-scraper-order": "1556985896-3034",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variant",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",
    definition:
      "The font-variant CSS property is a shorthand for the longhand properties font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, and font-variant-east-asian. You can also set the CSS Level 2 (Revision 1) values of font-variant, (that is, normal or small-caps), by using the font shorthand.",
    name: "font-variant",
    "web-scraper-order": "1556985894-3033",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variant-alternates",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    name: "font-variant-alternates",
    "web-scraper-order": "1556985890-3032",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variant-caps",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps",
    definition:
      "The font-variant-caps CSS property controls the use of alternate glyphs for capital letters.",
    name: "font-variant-caps",
    "web-scraper-order": "1556985888-3031",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variant-east-asian",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian",
    definition:
      "The font-variant-east-asian CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.",
    name: "font-variant-east-asian",
    "web-scraper-order": "1556985886-3030",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variant-ligatures",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures",
    definition:
      "The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.",
    name: "font-variant-ligatures",
    "web-scraper-order": "1556985884-3029",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variant-numeric",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric",
    definition:
      "The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.",
    name: "font-variant-numeric",
    "web-scraper-order": "1556985882-3028",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variant-position",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-position",
    definition:
      "The font-variant-position CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.",
    name: "font-variant-position",
    "web-scraper-order": "1556985880-3027",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-variation-settings (@font-face)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variation-settings",
    definition:
      "The font-variation-settings CSS descriptor allows authors to specify low-level OpenType or TrueType font variations in the @font-face rule.",
    name: "font-variation-settings",
    "web-scraper-order": "1556985878-3026",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "font-weight",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight",
    definition:
      "The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.",
    name: "font-weight",
    "web-scraper-order": "1556985876-3025",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "format()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#format()",
    definition:
      "The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.",
    name: "src",
    "web-scraper-order": "1556985872-3024",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "fr",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value#fr",
    definition:
      "The <flex> CSS data type denotes a flexible length within a grid container. It is used in grid-template-columns, grid-template-rows and other related properties.",
    name: "<flex>",
    "web-scraper-order": "1556985870-3023",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "gap",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
    definition: "",
    name: "gap (grid-gap)",
    "web-scraper-order": "1556985861-3019",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grad",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#grad",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    name: "<angle>",
    "web-scraper-order": "1556985859-3018",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grayscale()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale",
    definition:
      "The grayscale() CSS function converts the input image to grayscale. Its result is a <filter-function>.",
    name: "grayscale()",
    "web-scraper-order": "1556985855-3016",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid",
    definition:
      "The grid CSS property is a shorthand property that sets all of the explicit grid properties (grid-template-rows, grid-template-columns, and grid-template-areas), and all the implicit grid properties (grid-auto-rows, grid-auto-columns, and grid-auto-flow), in a single declaration.",
    name: "grid",
    "web-scraper-order": "1556985853-3015",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-area",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area",
    definition:
      "The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end, specifying a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.",
    name: "grid-area",
    "web-scraper-order": "1556985851-3014",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-auto-columns",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns",
    definition:
      "The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.",
    name: "grid-auto-columns",
    "web-scraper-order": "1556985849-3013",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-auto-flow",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow",
    definition:
      "The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
    name: "grid-auto-flow",
    "web-scraper-order": "1556985847-3012",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-auto-rows",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows",
    definition:
      "The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.",
    name: "grid-auto-rows",
    "web-scraper-order": "1556985845-3011",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-column",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column",
    definition:
      "The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
    name: "grid-column",
    "web-scraper-order": "1556985843-3010",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-column-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end",
    definition:
      "The grid-column-end CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.",
    name: "grid-column-end",
    "web-scraper-order": "1556985841-3009",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-column-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start",
    definition:
      "The grid-column-start CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.",
    name: "grid-column-start",
    "web-scraper-order": "1556985839-3008",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-row",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row",
    definition:
      "The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
    name: "grid-row",
    "web-scraper-order": "1556985837-3007",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-row-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end",
    definition:
      "The grid-row-end CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.",
    name: "grid-row-end",
    "web-scraper-order": "1556985835-3006",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-row-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start",
    definition:
      "The grid-row-start CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.",
    name: "grid-row-start",
    "web-scraper-order": "1556985833-3005",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-template",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template",
    definition:
      "The grid-template CSS property is a shorthand property for defining grid columns, rows, and areas.",
    name: "grid-template",
    "web-scraper-order": "1556985830-3004",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-template-areas",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas",
    definition:
      "The grid-template-areas CSS property specifies named grid areas.",
    name: "grid-template-areas",
    "web-scraper-order": "1556985828-3003",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-template-columns",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
    definition:
      "The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.",
    name: "grid-template-columns",
    "web-scraper-order": "1556985826-3002",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "grid-template-rows",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
    definition:
      "The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.",
    name: "CSS grid-template-rows — Define grid row names and sizing",
    "web-scraper-order": "1556985824-3001",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "hanging-punctuation",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation",
    definition:
      "The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.",
    name: "hanging-punctuation",
    "web-scraper-order": "1556985820-2999",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "height (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/height",
    definition:
      "The height CSS descriptor is a shorthand descriptor for setting both min-height and max-height of the viewport. by providing one viewport length value will set both, the minimum height and the maximum height, to the value provided.",
    name: "height",
    "web-scraper-order": "1556985816-2997",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "height",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/height",
    definition:
      "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.",
    name: "height",
    "web-scraper-order": "1556985818-2998",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "hsl()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    name: "<color>",
    "web-scraper-order": "1556985810-2995",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "hsla()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsla()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    name: "<color>",
    "web-scraper-order": "1556985808-2994",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "hue-rotate()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate",
    definition:
      "The hue-rotate() CSS function rotates the hue of an element and its contents. Its result is a <filter-function>.",
    name: "hue-rotate()",
    "web-scraper-order": "1556985806-2993",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "hyphens",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens",
    definition:
      "The hyphens CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.",
    name: "hyphens",
    "web-scraper-order": "1556985804-2992",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "image()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/image#The_image()_functional_notation",
    definition:
      "The <image> CSS data type represents a two-dimensional image. There are two kinds of images: plain images, referenced with a <url>, and dynamically-generated images, generated with <gradient> or element(). Additional CSS image functions include image(), image-set(), and cross-fade(). Images can be used with numerous CSS properties, such as background-image, border-image, content, cursor, and list-style-image.",
    name: "<image>",
    "web-scraper-order": "1556985798-2990",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "image-orientation",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation",
    definition:
      "The image-orientation CSS property specifies a layout-independent correction to the orientation of an image. It should not be used for any other orientation adjustments; instead, the transform property should be used with the rotate <transform-function>.",
    name: "image-orientation",
    "web-scraper-order": "1556985795-2989",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "image-rendering",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering",
    definition:
      "The image-rendering CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.",
    name: "image-rendering",
    "web-scraper-order": "1556985793-2988",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "image-set()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/image-set",
    definition:
      "The image-set() CSS function notation is a method of letting the browser pick the most appropriate CSS image from a given set, primarily for high pixel density screens.",
    name: "image-set()",
    "web-scraper-order": "1556985791-2987",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "in",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#in",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985787-2985",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inherit",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inherit",
    definition:
      "The inherit CSS keyword causes the element for which it is specified to take the computed value of the property from its parent element. It can be applied to any CSS property, including the CSS shorthand all.",
    name: "inherit",
    "web-scraper-order": "1556985781-2982",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "initial",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/initial",
    definition:
      "The initial CSS keyword applies the initial (or default) value of a property to an element. The initial value should not be confused with the value specified by the browser's style sheet. It can be applied to any CSS property. This includes the CSS shorthand all, with which initial can be used to restore all CSS properties to their initial state.",
    name: "initial",
    "web-scraper-order": "1556985779-2981",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inline-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size",
    definition:
      "The inline-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode.",
    name: "inline-size",
    "web-scraper-order": "1556985777-2980",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset",
    definition:
      "The inset CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "inset",
    "web-scraper-order": "1556985775-2979",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#inset()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    name: "<basic-shape>",
    "web-scraper-order": "1556985773-2978",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset-block",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block",
    definition:
      "The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "inset-block",
    "web-scraper-order": "1556985771-2977",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset-block-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end",
    definition:
      "The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "inset-block-end",
    "web-scraper-order": "1556985769-2976",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset-block-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start",
    definition:
      "The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "inset-block-start",
    "web-scraper-order": "1556985767-2975",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset-inline",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline",
    definition:
      "The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "inset-inline",
    "web-scraper-order": "1556985764-2974",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset-inline-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end",
    definition:
      "The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "inset-inline-end",
    "web-scraper-order": "1556985762-2973",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "inset-inline-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start",
    definition:
      "The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "inset-inline-start",
    "web-scraper-order": "1556985760-2972",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "invert()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert",
    definition:
      "The invert() CSS function inverts the color samples in the input image. Its result is a <filter-function>.",
    name: "invert()",
    "web-scraper-order": "1556985754-2969",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "isolation",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation",
    definition:
      "The isolation CSS property determines whether an element must create a new stacking context.",
    name: "isolation",
    "web-scraper-order": "1556985752-2968",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "justify-content",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
    definition:
      "The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.",
    name: "CSS justify-content — Control spacing of grid and flex items",
    "web-scraper-order": "1556985750-2967",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "justify-items",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items",
    definition:
      "The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.",
    name: "justify-items",
    "web-scraper-order": "1556985748-2966",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "justify-self",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self",
    definition:
      "The CSS justify-self property set the way a box is justified inside its alignment container along the appropriate axis.",
    name: "justify-self",
    "web-scraper-order": "1556985746-2965",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "kHz",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/frequency#kHz",
    definition:
      "The <frequency> CSS data type represents a frequency dimension, such as the pitch of a speaking voice. It is not currently used in any CSS properties.",
    name: "<frequency>",
    "web-scraper-order": "1556985744-2964",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "left",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/left",
    definition:
      "The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.",
    name: "left",
    "web-scraper-order": "1556985729-2958",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "letter-spacing",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing",
    definition:
      "The letter-spacing CSS property sets the spacing behavior between text characters.",
    name: "letter-spacing",
    "web-scraper-order": "1556985723-2955",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "line-break",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/line-break",
    definition:
      "The line-break CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.",
    name: "line-break",
    "web-scraper-order": "1556985721-2954",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "line-height",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
    definition:
      "The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.",
    name: "CSS line-height property",
    "web-scraper-order": "1556985719-2953",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "linear-gradient()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient",
    definition:
      "The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the <gradient> data type, which is a special kind of <image>.",
    name: "CSS linear-gradient() — Create linear fades across multiple colors",
    "web-scraper-order": "1556985717-2952",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "list-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style",
    definition:
      "The list-style CSS property is a shorthand to set list style properties list-style-type, list-style-image, and list-style-position.",
    name: "list-style",
    "web-scraper-order": "1556985713-2950",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "list-style-image",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image",
    definition:
      "The list-style-image CSS property sets an image to be used as the list item marker.",
    name: "list-style-image",
    "web-scraper-order": "1556985711-2949",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "list-style-position",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position",
    definition:
      "The list-style-position CSS property sets the position of the ::marker relative to a list item.",
    name: "list-style-position",
    "web-scraper-order": "1556985709-2948",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "list-style-type",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type",
    definition:
      "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.",
    name: "list-style-type",
    "web-scraper-order": "1556985707-2947",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "local()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#local()",
    definition:
      "The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.",
    name: "src",
    "web-scraper-order": "1556985705-2946",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
    definition:
      "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.",
    name: "margin",
    "web-scraper-order": "1556985703-2945",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-block",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block",
    definition: "",
    name: "margin-block",
    "web-scraper-order": "1556985700-2944",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-block-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end",
    definition: "",
    name: "margin-block-end",
    "web-scraper-order": "1556985698-2943",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-block-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start",
    definition: "",
    name: "margin-block-start",
    "web-scraper-order": "1556985696-2942",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-bottom",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom",
    definition:
      "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    name: "margin-bottom",
    "web-scraper-order": "1556985694-2941",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-inline",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline",
    definition: "",
    name: "margin-inline",
    "web-scraper-order": "1556985692-2940",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-inline-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end",
    definition: "",
    name: "margin-inline-end",
    "web-scraper-order": "1556985690-2939",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-inline-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start",
    definition: "",
    name: "margin-inline-start",
    "web-scraper-order": "1556985688-2938",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-left",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left",
    definition:
      "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    name: "margin-left",
    "web-scraper-order": "1556985686-2937",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-right",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right",
    definition:
      "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    name: "margin-right",
    "web-scraper-order": "1556985684-2936",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "margin-top",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top",
    definition:
      "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    name: "margin-top",
    "web-scraper-order": "1556985682-2935",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask",
    definition:
      "The mask CSS property hides an element (partially or fully) by masking or clipping the image at specific points.",
    name: "mask",
    "web-scraper-order": "1556985680-2934",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-clip",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip",
    definition:
      "The mask-clip CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.",
    name: "mask-clip",
    "web-scraper-order": "1556985678-2933",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-composite",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite",
    definition:
      "The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.",
    name: "mask-composite",
    "web-scraper-order": "1556985676-2932",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-image",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image",
    definition:
      "The mask-image CSS property sets the image that is used as mask layer for an element.",
    name: "mask-image",
    "web-scraper-order": "1556985674-2931",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-mode",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode",
    definition:
      "The mask-mode CSS property sets whether the mask reference defined by mask-image is treated as a luminance or alpha mask.",
    name: "mask-mode",
    "web-scraper-order": "1556985672-2930",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin",
    definition: "The mask-origin CSS property sets the origin of a mask.",
    name: "mask-origin",
    "web-scraper-order": "1556985670-2929",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-position",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position",
    definition:
      "The mask-position CSS property sets the initial position, relative to the mask position layer set by mask-origin, for each defined mask image.",
    name: "mask-position",
    "web-scraper-order": "1556985667-2928",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-repeat",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat",
    definition:
      "The mask-repeat CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.",
    name: "mask-repeat",
    "web-scraper-order": "1556985665-2927",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size",
    definition:
      "The mask-size CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.",
    name: "mask-size",
    "web-scraper-order": "1556985663-2926",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mask-type",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type",
    definition:
      "The mask-type CSS property sets whether an SVG <mask> element is used as a luminance or an alpha mask. It applies to the <mask> element itself.",
    name: "mask-type",
    "web-scraper-order": "1556985661-2925",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "matrix()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix",
    definition:
      "The matrix() CSS function defines a homogeneous 2D transformation matrix. Its result is a <transform-function> data type.",
    name: "matrix()",
    "web-scraper-order": "1556985659-2924",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "matrix3d()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d",
    definition:
      "The matrix3d() CSS function defines a 3D transformation as a 4x4 homogeneous matrix. Its result is a <transform-function> data type.",
    name: "matrix3d()",
    "web-scraper-order": "1556985657-2923",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "max()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/max",
    definition: "",
    name: "max()",
    "web-scraper-order": "1556985655-2922",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "max-height (@viewport)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/max-height",
    definition:
      "The max-height CSS descriptor specifies the maximum height of the viewport of a document defined via the @viewport at-rule.",
    name: "max-height",
    "web-scraper-order": "1556985651-2920",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "max-height",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/max-height",
    definition:
      "The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.",
    name: "max-height",
    "web-scraper-order": "1556985653-2921",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "max-width (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/max-width",
    definition:
      "The max-width CSS descriptor specifies the maximum width of the viewport of a document defined via the @viewport at-rule.",
    name: "max-width",
    "web-scraper-order": "1556985647-2918",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "max-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/max-width",
    definition:
      "The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.",
    name: "max-width",
    "web-scraper-order": "1556985649-2919",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "max-zoom (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/max-zoom",
    definition:
      "The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.",
    name: "max-zoom",
    "web-scraper-order": "1556985645-2917",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min",
    definition: "",
    name: "min()",
    "web-scraper-order": "1556985641-2915",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min-block-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size",
    definition:
      "The min-block-size CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.",
    name: "min-block-size",
    "web-scraper-order": "1556985639-2914",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min-height (@viewport)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/min-height",
    definition:
      "The min-height CSS descriptor specifies the minimum height of the viewport of a document defined via the @viewport at-rule.",
    name: "min-height",
    "web-scraper-order": "1556985635-2912",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min-height",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
    definition:
      "The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.",
    name: "min-height",
    "web-scraper-order": "1556985637-2913",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min-inline-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size",
    definition:
      "The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.",
    name: "min-inline-size",
    "web-scraper-order": "1556985632-2911",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min-width (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/min-width",
    definition:
      "The min-width CSS descriptor specifies the minimum width of the viewport of a document defined via @viewport.",
    name: "min-width",
    "web-scraper-order": "1556985628-2909",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
    definition:
      "The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.",
    name: "min-width",
    "web-scraper-order": "1556985630-2910",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "min-zoom (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/min-zoom",
    definition:
      "The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.",
    name: "min-zoom",
    "web-scraper-order": "1556985626-2908",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "minmax()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/minmax",
    definition:
      "The minmax() CSS function defines a size range greater than or equal to min and less than or equal to max. It is used with CSS Grids.",
    name: "minmax()",
    "web-scraper-order": "1556985624-2907",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mix-blend-mode",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode",
    definition:
      "The mix-blend-mode CSS property sets how an element's content should blend with the content of the element's parent and the element's background.",
    name: "mix-blend-mode",
    "web-scraper-order": "1556985622-2906",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "mm",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#mm",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985620-2905",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "ms",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/time#ms",
    definition:
      "The <time> CSS data type represents a time value expressed in seconds or milliseconds. It is used in animation, transition, and related properties.",
    name: "<time>",
    "web-scraper-order": "1556985618-2904",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "negative (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/negative",
    definition:
      "When defining custom counter styles, the negative descriptor lets you alter the representations of negative counter values, by providing a way to specify symbols to be appended or prepended to the counter representation when the value is negative.",
    name: "negative",
    "web-scraper-order": "1556985614-2902",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "object-fit",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",
    definition:
      "The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.",
    name: "object-fit",
    "web-scraper-order": "1556985600-2895",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "object-position",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",
    definition:
      "The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.",
    name: "object-position",
    "web-scraper-order": "1556985597-2894",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "opacity",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
    definition:
      "The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.",
    name: "opacity",
    "web-scraper-order": "1556985591-2891",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "opacity()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity",
    definition:
      "The opacity() CSS function applies transparency to the samples in the input image. Its result is a <filter-function>.",
    name: "opacity()",
    "web-scraper-order": "1556985589-2890",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "order",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/order",
    definition:
      "The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.",
    name: "order",
    "web-scraper-order": "1556985585-2888",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "orientation (@viewport)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/orientation",
    definition:
      "The orientation CSS descriptor controls the orientation of a document defined by @viewport.",
    name: "orientation",
    "web-scraper-order": "1556985583-2887",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "ornaments()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#ornaments()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    name: "font-variant-alternates",
    "web-scraper-order": "1556985579-2885",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "orphans",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/orphans",
    definition:
      "The orphans CSS property sets the minimum number of lines in a block container that must be shown at the bottom of a page, region, or column.",
    name: "orphans",
    "web-scraper-order": "1556985577-2884",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "outline",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline",
    definition:
      "The outline CSS property is a shorthand to set various outline properties in a single declaration: outline-style, outline-width, and outline-color.",
    name: "outline",
    "web-scraper-order": "1556985573-2882",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "outline-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color",
    definition:
      "The outline-color CSS property sets the color of an element's outline.",
    name: "outline-color",
    "web-scraper-order": "1556985571-2881",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "outline-offset",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset",
    definition:
      "The outline-offset CSS property sets the amount of space between an outline and the edge or border of an element.",
    name: "outline-offset",
    "web-scraper-order": "1556985569-2880",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "outline-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style",
    definition:
      "The outline-style CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the border.",
    name: "outline-style",
    "web-scraper-order": "1556985567-2879",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "outline-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width",
    definition:
      "The outline-width CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the border.",
    name: "outline-width",
    "web-scraper-order": "1556985565-2878",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "overflow",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
    definition:
      "The overflow shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for overflow-x and overflow-y.",
    name: "overflow",
    "web-scraper-order": "1556985562-2877",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "overflow-wrap",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap",
    definition:
      "The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.",
    name: "CSS overflow-wrap — Control wrapping of text overflow or wrapping",
    "web-scraper-order": "1556985560-2876",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "overflow-x",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x",
    definition:
      "The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.",
    name: "overflow-x",
    "web-scraper-order": "1556985558-2875",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "overflow-y",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y",
    definition:
      "The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.",
    name: "overflow-y",
    "web-scraper-order": "1556985556-2874",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "pad (@counter-style)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/pad",
    definition:
      "The pad descriptor can be used with custom counter style definitions when you need the marker representations to have a minimum length. If a marker representation is smaller than the specified pad length, then the marker will be padded with the specified pad symbol. Marker representations longer than the pad length are constructed as normal. Pad descriptor takes the minimum marker length as an integer and a symbol to be used for padding as the second parameter. A common usage of the pad descriptor is when you need your list to start numbering from 01 and go through 02, 03 and so on, instead of just 1, 2, 3...",
    name: "pad",
    "web-scraper-order": "1556985554-2873",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding",
    definition:
      "The padding CSS property sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.",
    name: "padding",
    "web-scraper-order": "1556985552-2872",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-block",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block",
    definition: "",
    name: "padding-block",
    "web-scraper-order": "1556985550-2871",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-block-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end",
    definition:
      "The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "padding-block-end",
    "web-scraper-order": "1556985548-2870",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-block-start",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start",
    definition: "",
    name: "padding-block-start",
    "web-scraper-order": "1556985546-2869",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-bottom",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom",
    definition:
      "The padding-bottom CSS property sets the height of the padding area on the bottom of an element.",
    name: "padding-bottom",
    "web-scraper-order": "1556985544-2868",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-inline",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline",
    definition: "",
    name: "padding-inline",
    "web-scraper-order": "1556985542-2867",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-inline-end",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end",
    definition:
      "The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "padding-inline-end",
    "web-scraper-order": "1556985540-2866",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-inline-start",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start",
    definition:
      "The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the padding-top, padding-right, padding-bottom, or padding-left property depending on the values defined for writing-mode, direction, and text-orientation.",
    name: "padding-inline-start",
    "web-scraper-order": "1556985538-2865",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-left",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left",
    definition:
      "The padding-left CSS property sets the width of the padding area on the top of an element.",
    name: "padding-left",
    "web-scraper-order": "1556985536-2864",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-right",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right",
    definition:
      "The padding-right CSS property sets the width of the padding area on the right of an element.",
    name: "padding-right",
    "web-scraper-order": "1556985534-2863",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "padding-top",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top",
    definition:
      "The padding-top CSS property sets the height of the padding area on the top of an element.",
    name: "padding-top",
    "web-scraper-order": "1556985532-2862",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "page-break-after",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after",
    definition:
      "The page-break-after CSS property adjusts page breaks after the current element.",
    name: "page-break-after",
    "web-scraper-order": "1556985527-2860",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "page-break-before",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before",
    definition:
      "The page-break-before CSS property adjusts page breaks before the current element.",
    name: "page-break-before",
    "web-scraper-order": "1556985525-2859",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "page-break-inside",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside",
    definition:
      "The page-break-inside CSS property adjusts page breaks inside the current element.",
    name: "page-break-inside",
    "web-scraper-order": "1556985523-2858",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "pc",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#pc",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985521-2857",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "perspective",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective",
    definition:
      "The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.",
    name: "perspective",
    "web-scraper-order": "1556985517-2855",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "perspective()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective",
    definition:
      "The perspective() CSS function defines a transformation that sets the distance between the user and the z=0 plane. Its result is a <transform-function> data type.",
    name: "perspective()",
    "web-scraper-order": "1556985515-2854",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "perspective-origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin",
    definition:
      "The perspective-origin CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.",
    name: "perspective-origin",
    "web-scraper-order": "1556985513-2853",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "place-content",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-content",
    definition:
      "The place-content CSS property is a shorthand for align-content and justify-content. It can be used in any layout method which utilizes both of these alignment values.",
    name: "place-content",
    "web-scraper-order": "1556985511-2852",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "place-items",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-items",
    definition:
      "The CSS place-items shorthand property sets the align-items and justify-items properties, respectively. If the second value is not set, the first value is also used for it.",
    name: "place-items",
    "web-scraper-order": "1556985509-2851",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "place-self",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/place-self",
    definition:
      "The place-self CSS property is a shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.",
    name: "place-self",
    "web-scraper-order": "1556985507-2850",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "pointer-events",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
    definition:
      "The  pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.",
    name: "pointer-events",
    "web-scraper-order": "1556985503-2848",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "polygon()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape#polygon()",
    definition:
      "The <basic-shape> CSS data type represents a shape used in the clip-path, shape-outside, and offset-path properties.",
    name: "<basic-shape>",
    "web-scraper-order": "1556985501-2847",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "position",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
    definition:
      "The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.",
    name: "CSS position property",
    "web-scraper-order": "1556985497-2845",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "prefix (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/prefix",
    definition:
      'The prefix descriptor of the @counter-style rule specifies content that will be prepended to the marker representation. If not specified, the default value will be "" (an empty string).',
    name: "prefix",
    "web-scraper-order": "1556985495-2844",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "pt",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#pt",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985492-2843",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "px",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#px",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985490-2842",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "quotes",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/quotes",
    definition: "The quotes CSS property sets how quotation marks appear.",
    name: "quotes",
    "web-scraper-order": "1556985486-2840",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rad",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#rad",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    name: "<angle>",
    "web-scraper-order": "1556985484-2839",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "radial-gradient()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient",
    definition:
      "The radial-gradient() CSS function creates an image consisting of a progressive transition between two or more colors that radiate from an origin. Its shape may be a circle or an ellipse. The function's result is an object of the <gradient> data type, which is a special kind of <image>.",
    name: "radial-gradient()",
    "web-scraper-order": "1556985482-2838",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "range (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/range",
    definition:
      "When defining custom counter styles, the range descriptor lets the author specify a range of counter values over which the style is applied. If a counter value is outside the specified range, then the fallback style will be used to construct the representation of that marker. Value of the range descriptor can be either auto or a comma separated list of lower and upper bounds specified as integers.",
    name: "range",
    "web-scraper-order": "1556985480-2837",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rect()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/shape#rect()",
    definition:
      "The <shape> CSS data type defines the specific form (shape) of a region. The region represents the part of an element to which the clip property applies.",
    name: "<shape>",
    "web-scraper-order": "1556985472-2833",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rem",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985470-2832",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "repeat()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/repeat",
    definition:
      "The repeat() CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.",
    name: "repeat()",
    "web-scraper-order": "1556985468-2831",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "repeating-linear-gradient()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient",
    definition:
      "The repeating-linear-gradient() CSS function creates an image consisting of repeating linear gradients. It is similar to linear-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container. The function's result is an object of the <gradient> data type, which is a special kind of <image>.",
    name: "repeating-linear-gradient()",
    "web-scraper-order": "1556985466-2830",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "repeating-radial-gradient()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-radial-gradient",
    definition:
      "The repeating-radial-gradient() CSS function creates an image consisting of repeating gradients that radiate from an origin. It is similar to radial-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container, similar to repeating-linear-gradient() . The function's result is an object of the <gradient> data type, which is a special kind of <image>.",
    name: "repeating-radial-gradient()",
    "web-scraper-order": "1556985464-2829",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "resize",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resize",
    definition:
      "The resize CSS property sets whether an element is resizable, and if so, in which directions.",
    name: "resize",
    "web-scraper-order": "1556985459-2827",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "revert",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/revert",
    definition:
      "The revert CSS keyword rolls back the cascade so that a property takes on the value it would have had if there were no styles in the current style origin (author, user, or user-agent). Thus, it resets the property to the default value established by the user-agent stylesheet (or by user styles, if any exist). It can be applied to any CSS property, including the CSS shorthand all.",
    name: "revert",
    "web-scraper-order": "1556985455-2825",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rgb()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    name: "<color>",
    "web-scraper-order": "1556985453-2824",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rgba()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgba()",
    definition:
      "The <color> CSS data type represents a color in the sRGB color space. A <color> may also include an alpha-channel transparency value, indicating how the color should composite with its background.",
    name: "<color>",
    "web-scraper-order": "1556985451-2823",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "right",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/right",
    definition:
      "The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.",
    name: "right",
    "web-scraper-order": "1556985447-2821",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rotate",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/rotate",
    definition:
      "The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform property.",
    name: "rotate",
    "web-scraper-order": "1556985443-2819",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rotate()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate",
    definition:
      "The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. Its result is a <transform-function> data type.",
    name: "CSS rotate() — Transform function to adjust rotation of an element",
    "web-scraper-order": "1556985441-2818",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rotate3d()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d",
    definition:
      "The rotate3d() CSS function defines a transformation that rotates an element around a fixed axis in 3D space, without deforming it. Its result is a <transform-function> data type.",
    name: "rotate3d()",
    "web-scraper-order": "1556985439-2817",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rotateX()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX",
    definition:
      "The rotateX() CSS function defines a transformation that rotates an element around the abscissa (horizontal axis) without deforming it. Its result is a <transform-function> data type.",
    name: "rotateX()",
    "web-scraper-order": "1556985437-2816",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rotateY()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY",
    definition:
      "The rotateY() CSS function defines a transformation that rotates an element around the ordinate (vertical axis) without deforming it. Its result is a <transform-function> data type.",
    name: "rotateY()",
    "web-scraper-order": "1556985435-2815",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "rotateZ()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ",
    definition:
      "The rotateZ() CSS function defines a transformation that rotates an element around the z-axis without deforming it. Its result is a <transform-function> data type.",
    name: "rotateZ()",
    "web-scraper-order": "1556985433-2814",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "row-gap",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap",
    definition:
      "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.",
    name: "row-gap (grid-row-gap)",
    "web-scraper-order": "1556985431-2813",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "s",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/time#s",
    definition:
      "The <time> CSS data type represents a time value expressed in seconds or milliseconds. It is used in animation, transition, and related properties.",
    name: "<time>",
    "web-scraper-order": "1556985429-2812",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "saturate()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate",
    definition:
      "The saturate() CSS function super-saturates or desaturates the input image. Its result is a <filter-function>.",
    name: "saturate()",
    "web-scraper-order": "1556985427-2811",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scale",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scale",
    definition:
      "The scale CSS property allows you to specify scale transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
    name: "scale",
    "web-scraper-order": "1556985424-2810",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scale()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale",
    definition:
      "The scale() CSS function defines a transformation that resizes an element on the 2D plane. Because the amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at different scales. Its result is a <transform-function> data type.",
    name: "CSS scale() transform function",
    "web-scraper-order": "1556985422-2809",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scale3d()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d",
    definition:
      "The scale3d() CSS function defines a transformation that resizes an element in 3D space. Because the amount of scaling is defined by a vector, it can resize different dimensions at different scales. Its result is a <transform-function> data type.",
    name: "scale3d()",
    "web-scraper-order": "1556985420-2808",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scaleX()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleX",
    definition:
      "The scaleX() CSS function defines a transformation that resizes an element along the x-axis (horizontally). Its result is a <transform-function> data type.",
    name: "scaleX()",
    "web-scraper-order": "1556985418-2807",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scaleY()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleY",
    definition:
      "The scaleY() CSS function defines a transformation that resizes an element along the y-axis (vertically). Its result is a <transform-function> data type.",
    name: "scaleY()",
    "web-scraper-order": "1556985416-2806",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scaleZ()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleZ",
    definition:
      "The scaleZ() CSS function defines a transformation that resizes an element along the z-axis. Its result is a <transform-function> data type.",
    name: "scaleZ()",
    "web-scraper-order": "1556985414-2805",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-behavior",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior",
    definition:
      "The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.",
    name: "scroll-behavior",
    "web-scraper-order": "1556985410-2803",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin",
    definition:
      "The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands.",
    name: "scroll-margin",
    "web-scraper-order": "1556985408-2802",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-block",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block",
    definition:
      "The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension.",
    name: "scroll-margin-block",
    "web-scraper-order": "1556985406-2801",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-block-end",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-end",
    definition:
      "The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-block-end",
    "web-scraper-order": "1556985404-2800",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-block-start",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-start",
    definition:
      "The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-block-start",
    "web-scraper-order": "1556985402-2799",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-bottom",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom",
    definition:
      "The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-bottom",
    "web-scraper-order": "1556985400-2798",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-inline",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline",
    definition:
      "The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension.",
    name: "scroll-margin-inline",
    "web-scraper-order": "1556985398-2797",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-inline-end",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end",
    definition:
      "The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-inline-end",
    "web-scraper-order": "1556985396-2796",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-inline-start",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start",
    definition:
      "The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-inline-start",
    "web-scraper-order": "1556985394-2795",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-left",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left",
    definition:
      "The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-left",
    "web-scraper-order": "1556985392-2794",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-right",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right",
    definition:
      "The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-right",
    "web-scraper-order": "1556985389-2793",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-margin-top",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top",
    definition:
      "The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.",
    name: "scroll-margin-top",
    "web-scraper-order": "1556985387-2792",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding",
    definition:
      "The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands.\n\n \n\n The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding",
    "web-scraper-order": "1556985385-2791",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-block",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block",
    definition:
      "The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension.",
    name: "scroll-padding-block",
    "web-scraper-order": "1556985383-2790",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-block-end",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-end",
    definition:
      "The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-block-end",
    "web-scraper-order": "1556985381-2789",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-block-start",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-start",
    definition:
      "The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-block-start",
    "web-scraper-order": "1556985379-2788",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-bottom",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom",
    definition:
      "The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-bottom",
    "web-scraper-order": "1556985377-2787",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-inline",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline",
    definition:
      "The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension.\n\n \n\n The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-inline",
    "web-scraper-order": "1556985375-2786",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-inline-end",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end",
    definition:
      "The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-inline-end",
    "web-scraper-order": "1556985373-2785",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-inline-start",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start",
    definition:
      "The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-inline-start",
    "web-scraper-order": "1556985371-2784",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-left",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left",
    definition:
      "The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-left",
    "web-scraper-order": "1556985369-2783",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-right",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right",
    definition:
      "The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-right",
    "web-scraper-order": "1556985367-2782",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-padding-top",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top",
    definition:
      "The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.",
    name: "scroll-padding-top",
    "web-scraper-order": "1556985365-2781",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-snap-align",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align",
    definition:
      "The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.",
    name: "scroll-snap-align",
    "web-scraper-order": "1556985363-2780",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-snap-stop",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop",
    definition:
      'The scroll-snap-stop CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.',
    name: "scroll-snap-stop",
    "web-scraper-order": "1556985361-2779",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scroll-snap-type",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type",
    definition:
      "The scroll-snap-type CSS property sets how strictly snap points are enforced on the scroll container in case there is one.",
    name: "scroll-snap-type",
    "web-scraper-order": "1556985359-2778",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scrollbar-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color",
    definition:
      "The scrollbar-color CSS property sets the color of the scrollbar track and thumb.",
    name: "scrollbar-color",
    "web-scraper-order": "1556985357-2777",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "scrollbar-width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
    definition:
      "The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.",
    name: "scrollbar-width",
    "web-scraper-order": "1556985354-2776",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "sepia()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia",
    definition:
      "The sepia() CSS function converts the input image to sepia, giving it a warmer, more yellow/brown appearance. Its result is a <filter-function>.",
    name: "sepia()",
    "web-scraper-order": "1556985348-2774",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "shape-image-threshold",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold",
    definition:
      "The shape-image-threshold CSS property sets the alpha channel threshold used to extract the shape using an image as the value for shape-outside.",
    name: "shape-image-threshold",
    "web-scraper-order": "1556985343-2772",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "shape-margin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin",
    definition:
      "The shape-margin CSS property sets a margin for a CSS shape created using shape-outside.",
    name: "shape-margin",
    "web-scraper-order": "1556985341-2771",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "shape-outside",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside",
    definition:
      "The shape-outside CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; shape-outside provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.",
    name: "shape-outside",
    "web-scraper-order": "1556985339-2770",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "skew()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew",
    definition:
      "The skew() CSS function defines a transformation that skews an element on the 2D plane. Its result is a <transform-function> data type.",
    name: "skew()",
    "web-scraper-order": "1556985337-2769",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "skewX()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX",
    definition:
      "The skewX() CSS function defines a transformation that skews an element in the horizontal direction on the 2D plane. Its result is a <transform-function> data type.",
    name: "skewX()",
    "web-scraper-order": "1556985335-2768",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "skewY()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY",
    definition:
      "The skewY() CSS function defines a transformation that skews an element in the vertical direction on the 2D plane. Its result is a <transform-function> data type.",
    name: "skewY()",
    "web-scraper-order": "1556985333-2767",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "speak-as (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/speak-as",
    definition:
      "The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue.",
    name: "speak-as",
    "web-scraper-order": "1556985329-2765",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "src (@font-face)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src",
    definition:
      "The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.",
    name: "src",
    "web-scraper-order": "1556985327-2764",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "steps()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#steps()",
    definition:
      "The <timing-function> CSS data type denotes a mathematical function that describes how fast one-dimensional values change during animations. This lets you vary the animation's speed over the course of its duration.",
    name: "<timing-function>",
    "web-scraper-order": "1556985325-2763",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "styleset()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#styleset()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    name: "font-variant-alternates",
    "web-scraper-order": "1556985319-2760",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "stylistic()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#stylistic()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    name: "font-variant-alternates",
    "web-scraper-order": "1556985315-2758",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "suffix (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/suffix",
    definition:
      'The suffix descriptor of the@counter-style rule specifies content that will be appended to the marker representation. If not specified, the default value will be "\\2E\\20" (". ", a full stop followed by a space).',
    name: "suffix",
    "web-scraper-order": "1556985313-2757",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "swash()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates#swash()",
    definition:
      "The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.",
    name: "font-variant-alternates",
    "web-scraper-order": "1556985306-2754",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "symbols (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/symbols",
    definition:
      "The symbols CSS descriptor is used to specify the symbols that the specified counter system will use to construct counter representations. A symbol can be a string, image, or identifier. It is used within the @counter-style at-rule.",
    name: "symbols",
    "web-scraper-order": "1556985304-2753",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "symbols()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/symbols",
    definition:
      "The symbols() CSS function lets you define counter styles inline, directly as the value of a property such as list-style. Unlike @counter-style, symbols() is anonymous (i.e., it can only be used once). Although less powerful, it is shorter and easier to write than @counter-style.",
    name: "symbols()",
    "web-scraper-order": "1556985302-2752",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "system (@counter-style)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/system",
    definition:
      "The system descriptor specifies the algorithm to be used for converting the integer value of a counter to a string representation. It is used in a @counter-style to define the behavior of the defined style.",
    name: "system",
    "web-scraper-order": "1556985300-2751",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "tab-size",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size",
    definition:
      "The tab-size CSS property is used to customize the width of a tab (U+0009) character.",
    name: "tab-size",
    "web-scraper-order": "1556985298-2750",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "table-layout",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout",
    definition:
      "The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.",
    name: "table-layout",
    "web-scraper-order": "1556985296-2749",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-align",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align",
    definition:
      "The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.",
    name: "text-align",
    "web-scraper-order": "1556985286-2747",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-align-last",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last",
    definition:
      "The text-align-last CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.",
    name: "text-align-last",
    "web-scraper-order": "1556985284-2746",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-combine-upright",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright",
    definition:
      "The text-combine-upright CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.",
    name: "text-combine-upright",
    "web-scraper-order": "1556985282-2745",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-decoration",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration",
    definition:
      "The text-decoration shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, and text-decoration-style.",
    name: "text-decoration",
    "web-scraper-order": "1556985280-2744",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-decoration-color",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color",
    definition:
      "The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.",
    name: "text-decoration-color",
    "web-scraper-order": "1556985278-2743",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-decoration-line",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line",
    definition:
      "The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.",
    name: "text-decoration-line",
    "web-scraper-order": "1556985276-2742",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-decoration-style",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style",
    definition:
      "The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.",
    name: "text-decoration-style",
    "web-scraper-order": "1556985274-2741",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-emphasis",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis",
    definition:
      "The text-emphasis CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for text-emphasis-style and text-emphasis-color.",
    name: "text-emphasis",
    "web-scraper-order": "1556985272-2740",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-emphasis-color",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color",
    definition:
      "The text-emphasis-color CSS property sets the color of emphasis marks. This value can also be set using the text-emphasis shorthand.",
    name: "text-emphasis-color",
    "web-scraper-order": "1556985270-2739",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-emphasis-position",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position",
    definition:
      "The text-emphasis-position CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.",
    name: "text-emphasis-position",
    "web-scraper-order": "1556985267-2738",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-emphasis-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-style",
    definition:
      "The text-emphasis-style CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the text-emphasis shorthand.",
    name: "text-emphasis-style",
    "web-scraper-order": "1556985265-2737",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-indent",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent",
    definition:
      "The text-indent CSS property sets the length of empty space (indentation) that is put before lines of text in a block.",
    name: "text-indent",
    "web-scraper-order": "1556985263-2736",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-justify",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-justify",
    definition:
      "The text-justify CSS property sets what type of justification should be applied to text when text-align: justify; is set on an element.",
    name: "text-justify",
    "web-scraper-order": "1556985261-2735",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-orientation",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation",
    definition:
      "The text-orientation CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when writing-mode is not horizontal-tb). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.",
    name: "text-orientation",
    "web-scraper-order": "1556985259-2734",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-overflow",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow",
    definition:
      "The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.",
    name: "CSS text-overflow property",
    "web-scraper-order": "1556985257-2733",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-rendering",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering",
    definition:
      "The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text.",
    name: "text-rendering",
    "web-scraper-order": "1556985255-2732",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-shadow",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow",
    definition:
      "The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.",
    name: "text-shadow",
    "web-scraper-order": "1556985253-2731",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-transform",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform",
    definition:
      "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.",
    name: "text-transform",
    "web-scraper-order": "1556985251-2730",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "text-underline-position",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position",
    definition:
      "The text-underline-position CSS property specifies the position of the underline which is set using the text-decoration property's underline value.",
    name: "text-underline-position",
    "web-scraper-order": "1556985249-2729",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "top",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/top",
    definition:
      "The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.",
    name: "top",
    "web-scraper-order": "1556985241-2725",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "touch-action",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
    definition:
      "The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).",
    name: "touch-action",
    "web-scraper-order": "1556985239-2724",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transform",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
    definition:
      "The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.",
    name: "transform",
    "web-scraper-order": "1556985237-2723",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transform-box",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box",
    definition:
      "The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.",
    name: "transform-box",
    "web-scraper-order": "1556985235-2722",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transform-origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",
    definition:
      "The transform-origin CSS property sets the origin for an element's transformations.",
    name: "transform-origin",
    "web-scraper-order": "1556985230-2720",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transform-style",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style",
    definition:
      "The transform-style CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.",
    name: "transform-style",
    "web-scraper-order": "1556985228-2719",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transition",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
    definition:
      "The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.",
    name: "transition",
    "web-scraper-order": "1556985226-2718",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transition-delay",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",
    definition:
      "The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.",
    name: "transition-delay",
    "web-scraper-order": "1556985224-2717",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transition-duration",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration",
    definition:
      "The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.",
    name: "transition-duration",
    "web-scraper-order": "1556985222-2716",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transition-property",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property",
    definition:
      "The transition-property CSS property sets the CSS properties to which a transition effect should be applied.",
    name: "transition-property",
    "web-scraper-order": "1556985220-2715",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "transition-timing-function",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
    definition:
      "The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.",
    name: "transition-timing-function",
    "web-scraper-order": "1556985218-2714",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "translate",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/translate",
    definition:
      "The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
    name: "translate",
    "web-scraper-order": "1556985216-2713",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "translate()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate",
    definition:
      "The translate() CSS function repositions an element in the horizontal and/or vertical directions. Its result is a <transform-function> data type.",
    name: "CSS translate() transform function",
    "web-scraper-order": "1556985214-2712",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "translate3d()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d",
    definition:
      "The translate3d() CSS function repositions an element in 3D space. Its result is a <transform-function> data type.",
    name: "CSS translate3d() — Transform function to move the element in 3D",
    "web-scraper-order": "1556985212-2711",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "translateX()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX",
    definition:
      "The translateX() CSS function repositions an element horizontally on the 2D plane. Its result is a <transform-function> data type.",
    name: "translateX()",
    "web-scraper-order": "1556985210-2710",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "translateY()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY",
    definition:
      "The translateY() CSS function repositions an element vertically on the 2D plane. Its result is a <transform-function> data type.",
    name: "translateY()",
    "web-scraper-order": "1556985208-2709",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "translateZ()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ",
    definition:
      "The translateZ() CSS function repositions an element along the z-axis in 3D space, i.e., closer to or farther away from the viewer. Its result is a <transform-function> data type.",
    name: "translateZ()",
    "web-scraper-order": "1556985206-2708",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "turn",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#turn",
    definition:
      "The <angle> CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. It is used, for example, in <gradient>s and in some transform functions.",
    name: "<angle>",
    "web-scraper-order": "1556985204-2707",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "unicode-bidi",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi",
    definition:
      "The unicode-bidi CSS property, together with the direction property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The unicode-bidi property overrides this algorithm and allows the developer to control the text embedding.",
    name: "unicode-bidi",
    "web-scraper-order": "1556985202-2706",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "unicode-range (@font-face)",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range",
    definition:
      "The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.",
    name: "unicode-range",
    "web-scraper-order": "1556985199-2705",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "unset",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/unset",
    definition:
      "The unset CSS keyword resets a property to its inherited value if it inherits from its parent, and to its initial value if not. In other words, it behaves like the inherit keyword in the first case, and like the initial keyword in the second case. It can be applied to any CSS property, including the CSS shorthand all.",
    name: "unset",
    "web-scraper-order": "1556985197-2704",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "url()",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/url#The_url()_functional_notation",
    definition:
      "The <url> CSS data type denotes a pointer to a resource, such as an image or a font. URLs can be used in numerous CSS properties, such as background-image, cursor, and list-style.",
    name: "<url>",
    "web-scraper-order": "1556985193-2702",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "user-zoom (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/user-zoom",
    definition:
      "The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport.",
    name: "user-zoom",
    "web-scraper-order": "1556985191-2701",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "var()",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
    definition:
      'The var() CSS function can be used to insert the value of a custom property (sometimes called a "CSS variable") instead of any part of a value of another property.',
    name: "var()",
    "web-scraper-order": "1556985187-2699",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "vertical-align",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",
    definition:
      "The vertical-align CSS property sets vertical alignment of an inline or table-cell box.",
    name: "CSS vertical-align property",
    "web-scraper-order": "1556985185-2698",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "vh",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vh",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985183-2697",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "visibility",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",
    definition:
      "The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.",
    name: "visibility",
    "web-scraper-order": "1556985179-2695",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "vmax",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vmax",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985175-2693",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "vmin",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vmin",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985173-2692",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "vw",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#vw",
    definition:
      "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.",
    name: "<length>",
    "web-scraper-order": "1556985171-2691",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "white-space",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space",
    definition:
      "The white-space CSS property sets how white space inside an element is handled.",
    name: "white-space",
    "web-scraper-order": "1556985169-2690",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "widows",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/widows",
    definition:
      "The widows CSS property sets the minimum number of lines in a block container that must be shown at the top of a page, region, or column.",
    name: "widows",
    "web-scraper-order": "1556985167-2689",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "width (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/width",
    definition:
      "The width CSS descriptor is shorthand for setting both the min-width and the max-width of the viewport. By providing one viewport length value, that value will determine both the min-width and the max-width to the value provided.",
    name: "width",
    "web-scraper-order": "1556985162-2687",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "width",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/width",
    definition:
      "The width CSS property sets an element's width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.",
    name: "width",
    "web-scraper-order": "1556985164-2688",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "will-change",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
    definition:
      "The will-change CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.",
    name: "will-change",
    "web-scraper-order": "1556985160-2686",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "word-break",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/word-break",
    definition:
      "The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.",
    name: "word-break",
    "web-scraper-order": "1556985158-2685",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "word-spacing",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing",
    definition:
      "The word-spacing CSS property sets the length of space between words and between tags.",
    name: "word-spacing",
    "web-scraper-order": "1556985156-2684",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "word-wrap",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap",
    definition:
      "The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.",
    name: "CSS overflow-wrap — Control wrapping of text overflow or wrapping",
    "web-scraper-order": "1556985154-2683",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "writing-mode",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode",
    definition:
      "The writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.",
    name: "writing-mode",
    "web-scraper-order": "1556985152-2682",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "x",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#x",
    definition:
      "The <resolution> CSS data type, used for describing resolutions in media queries, denotes the pixel density of an output device, i.e., its resolution.",
    name: "<resolution>",
    "web-scraper-order": "1556985150-2681",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "z-index",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
    definition:
      "The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.",
    name: "z-index",
    "web-scraper-order": "1556985148-2680",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  },
  {
    "css-property": "zoom (@viewport)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/zoom",
    definition:
      "The zoom CSS descriptor sets the initial zoom factor of a document defined by the @viewport at-rule.",
    name: "zoom",
    "web-scraper-order": "1556985146-2679",
    "web-scraper-start-url":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index"
  }
];
