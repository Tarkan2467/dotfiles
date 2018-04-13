// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: '"Operator Mono", "Inconsolata for Powerline", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: "rgba(197,148,197,0.8)",

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: "BLOCK",

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: "#d8dee9",

    // terminal background color
    backgroundColor: "#0f1c23",

    // border color (window, tabs)
    borderColor: "#5fb3b3",

    // hyperborder colors  - More standard - '#ec5f67', '#f99157', '#fac863'
    hyperBorder: {
      borderColors: ["#5fb3b3"],
      blurredColors: ["#c594c5", "#6699cc", "#5fb3b3", "#99c794"],
      borderWidth: "2px"
    },

    // Clicking on them Links
    hyperlinks: {
      clickAction: "open",
      defaultBrowser: true
    },

    // custom css to embed in the main window
    css: `li.tab-active{border-bottom: 1px solid #fac863 !important}`,

    // custom css to embed in the terminal window
    termCSS: `x-row{height: 14px; line-height: 1.2;} .unicode-node{font-size: 10px; padding: 2px 0;} .cursor-node[style]{background-color: rgba(197,148,197,1) !important; border-color: rgba(197,148,197,1) !important;} x-screen a{color: #fac863; !important} x-screen a.hover{text-decoration: none;}`,

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: "",

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: "",

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: "12px 14px",

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: "#0f1c23",
      red: "#ed6f7d",
      green: "#99c794",
      yellow: "#fac863",
      blue: "#5a9bcf",
      magenta: "#c5a5c5",
      cyan: "#5fb3b3",
      white: "#d8dee9",
      lightBlack: "#343d46",
      lightRed: "#D6838C",
      lightGreen: "#C1DCBE",
      lightYellow: "#FFDE9B",
      lightBlue: "#8ABEE7",
      lightMagenta: "#EDCDED",
      lightCyan: "#9BE2E2",
      lightWhite: "#ffffff"
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: "/bin/zsh",

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ["--login"],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: "SOUND",

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyperterm-oceanic-next",
    "hyperborder",
    "hyperterm-lastpass",
    "hypercwd",
    "hyperlinks",
    "hyper-alt-click",
    "hyperterm-paste",
    "hyper-confirm"
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};