'use strict';;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5d5ce621-484d-4733-b8fc-8916480e2460",e._sentryDebugIdIdentifier="sentry-dbid-5d5ce621-484d-4733-b8fc-8916480e2460")}catch(e){}}();

var _global =
      typeof window !== 'undefined' ?
        window :
        typeof global !== 'undefined' ?
          global :
          typeof self !== 'undefined' ?
            self :
            {};

    _global.SENTRY_RELEASE={id:"447a27c75e3e93d6057f770be9ab586144c59537"};

const ms_c2c = (_ctaUrl, { prefix, suffix, params }) => {
    if (c2cEnabled(window.location.search)) {
        const c2cUrl = buildc2cText({
            currUrl: window.location.href,
            prefix: prefix,
            suffix: suffix,
            params: params,
        });
        navigator.clipboard.writeText(c2cUrl);
    }
};
const buildc2cText = ({ currUrl, prefix, suffix, params }) => {
    const search = currUrl.split("?")[1];
    let resultParams = "";
    if (search) {
        const search_params = search.split("&");
        search_params.forEach((param) => {
            const [key, value] = param.split("=");
            if (params.includes(key) && value)
                resultParams += param + "&";
        });
        resultParams = resultParams.substring(0, resultParams.length - 1);
    }
    const suffixes = suffix.split("&");
    let resultSuffix = "";
    for (const suff of suffixes) {
        const [key] = suff.split("=");
        if (!resultParams.includes(key))
            resultSuffix += suff + "&";
    }
    resultSuffix = resultSuffix.substring(0, resultSuffix.length - 1);
    const parts = [resultParams, resultSuffix].filter((s) => s != null && s.trim() != "");
    const qstr = parts.join("&");
    const c2cUrl = prefix + qstr;
    return c2cUrl;
};
const c2cEnabled = (search) => {
    if (search) {
        const params = search.split("?")[1].split("&");
        for (const param of params) {
            const [key, value] = param.split("=");
            if (key == "c2c" && (value == "1" || value == "true"))
                return true;
        }
    }
    return false;
};

const implementGeoLocation = ({ utmLocation, redirectUrl, allowedLocations = ["US"], }) => {
    if (!utmLocation || !allowedLocations.includes(utmLocation.toUpperCase())) {
        window.location.href = redirectUrl;
    }
};

const getBrowserName = () => {
    var _a;
    const userAgent = window.navigator.userAgent;
    const userAgentData = navigator.userAgentData;
    const browserMapping = [
        { name: "Firefox", condition: (ua) => ua.includes("Firefox") },
        {
            name: "Samsung Internet",
            condition: (ua) => ua.includes("SamsungBrowser"),
        },
        {
            name: "Opera",
            condition: (ua) => ua.includes("Opera") || ua.includes("OPR"),
        },
        {
            name: "Internet Explorer",
            condition: (ua) => ua.includes("Trident"),
        },
        {
            name: "Microsoft Edge",
            condition: (ua) => ua.includes("Edg") || ua.includes("Edge"),
        },
        {
            name: "Brave",
            condition: (ua, uaData) => uaData === null || uaData === void 0 ? void 0 : uaData.brands.some((f) => { var _a; return (_a = f.brand) === null || _a === void 0 ? void 0 : _a.includes("Brave"); }),
        },
        {
            name: "Chrome",
            condition: (ua) => ua.includes("Chrome"),
        },
        {
            name: "Safari",
            condition: (ua) => ua.includes("Safari"),
        },
    ];
    const browser_name = (_a = browserMapping.find((browser) => browser.condition(userAgent, userAgentData))) === null || _a === void 0 ? void 0 : _a.name;
    return browser_name !== null && browser_name !== void 0 ? browser_name : "Browser";
};
const isSafariBrowser = (browserName) => browserName == "Safari";

const popupStyles = (document) => {
    const css = `
    body {
    line-height: 1.5;
    #element-__gpage-block-zex3pci6xo-416 > div > h1 {
    font-weight: normal;
    }
    
    p {
    margin-bottom: 0px !important;
      }
    }
    dialog.qrcode-dialog>article {
      max-width: 90%;
      width: 90%;
    }
    dialog.qrcode-dialog>article h4 {
      margin-bottom: unset;
    }

    dialog>article div.qrcode-paragraph {
      display: flex;
      align-items: center;
    }
    dialog>article div#ms-qrcode {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }    
    dialog.qrcode-dialog>article button {
      width: 40%;
      align-items: center;
      margin: 0 auto;
      display: block
    }
    div#ms-qrcode img {
      width: 18rem;
      height: 18rem;
    }
    dialog.qrcode-dialog>article h1 {
      margin-bottom: unset;
    } 
    dialog.qrcode-dialog>article .grid {
      background: linear-gradient(#0276B1, #0276B1) no-repeat center/.5px 100%;
    }
    
    @media (max-width: 768px) {
      #hold_up_get_coupons {
          max-width: 90%;
      }
    }
    @media (max-width: 990px),  @media (max-width: 991px) {
      dialog.qrcode-dialog>article .grid {
        background: unset !important;
      } 
      dialog>article div.qrcode-container {
        border-top: 0.5px solid rgb(2, 118, 177, 0.5);
        margin-top: 1rem;
        padding-top: 1rem;
      }
    } 
    
    dialog>article>div.grid>div button {
      margin-bottom: 1rem;
    }
    dialog>article>div.grid>div h3.strong {
      font-size: 1rem;
    }
        
    dialog>article>.headings {
      text-align: center;
      margin-bottom: unset;
      background-color: unset;
      border-bottom: unset;
    }
    dialog article .headings>:last-child {
      --color: unset;
    }
    dialog {
      background: #001c20 !important;
    }
    dialog>article>footer {
      text-align: center !important;
    }
    dialog>article {
      text-align: center;
    }
    dialog>article>h2,
    dialog>article>h3,
    dialog>article>h4,
    dialog>article>div.grid>div>h2.m1,
    dialog>article>div.grid>div>h3.p1,    
    dialog>article>div.grid>div>h4.p2 {
      margin-bottom: unset;
      line-height: 1.5;
    }
    dialog>article>div.grid>div>h2.m2 {
      margin-bottom: revert;
    }
    dialog>article>h3:last-child {
      margin-bottom: 0px !important;
    }
    dialog>article>h3, dialog>article>div.grid>div>h3.ps, dialog>article>div.grid>div>h3.p1 {
      opacity: 0.5;
    }
    dialog>article>h4.p2, dialog>article>div.grid>div>h4.p2 {
      margin-top: 0px !important;
      margin-bottom: unset;
      opacity: 0.4;
      font-size: 1rem;
    }
    dialog>article>h4.p1 {
      opacity: 0.6;
    }
    dialog>article>button,
    dialog>article>button:is([aria-current],:hover,:active,:focus),
    dialog>article>div.grid>div button,
    dialog>article>div.grid>div button:is([aria-current],:hover,:active,:focus) {
      width: 55%;
      display: table-cell;
      vertical-align: middle;
      margin-top: var(--typography-spacing-vertical);
      --border-color: unset;
      box-shadow: 0px 0.3rem 0.3rem 0px rgba(0,0,0,0.55);
      border-radius: 0.3rem; 
      font-weight: bold;
    }
    dialog>article>footer>img {
      width: 20%;
      opacity: .4;
    }
    dialog>article>footer img:not(:last-child) {
      margin-right: 1rem;
    }
    dialog>article>footer>h6 {
      margin-bottom: unset;
      opacity: 0.6;
    }
    .hidden
    {
      display: none !important;
    }
    .no-scroll {
      overflow: hidden;
    }

    .range-slider {
      -webkit-appearance: none;
      width: 100%;
      height: 21px;
      outline: none;
      -webkit-transition: .2s;
      transition: background .2s;
      border-radius: 55px;
      margin-bottom: 0px !important;
      --range-border-color: none;
      box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25) inset;
    }

    .range-slider:hover {
     --range-border-color: none;

    }

    [type=checkbox], [type=radio], [type=range], progress {
    accent-color: none !important;
    padding-bottom: 12px;
    }
 
    [type=range]:focus, [type=range]:hover {
      --range-border-color: none;
    }

    .range-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 35px;
      height: 35px;
      background: #FFFFFF;
      cursor: pointer;
      border: solid 5px #0289CE;
      margin-bottom: 10px;
    }

    .range-slider::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 35px;
      height: 35px;
      background: #FFFFFF;
      cursor: pointer;
      border: solid 5px #0289CE;
      margin-bottom: 5px;
      padding-bottom: 0px;
    }

    [type="checkbox"], [type="radio"], [type="range"], progress::-moz-range-thumb {
      padding-bottom: 0px;
    }

    .top-bar-button {
        background: #FF8A00;
        color: #FFFFFF;
        border-radius: 2px;
        width: 160px;
        height: 36px;
        font-size: 16px;
        font-weight: 700;
        font-family: Roboto, Arial, sans-serif;
        padding: 0px;
        margin: 0px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
  `;
    const style = document.createElement("style");
    style.textContent = css;
    const picocss = document.createElement("link");
    picocss.setAttribute("rel", "stylesheet");
    picocss.setAttribute("type", "text/css");
    picocss.setAttribute("href", "https://cdn.jsdelivr.net/npm/@picocss/pico@1.5.13/css/pico.min.css");
    return [picocss, style];
};

const popups = {
    ts: "ts",
    amzngc: "amzngc",
    m1: "m1",
    hm4: "hm4",
    hm3: "hm3",
    hm2: "hm2",
    hm1: "hm1",
    hd1: "hd1",
    hd2: "hd2",
    hd3: "hd3",
    hd4: "hd4",
    hdi1: "hdi1",
    hdi1b: "hdi1b",
    hdi2: "hdi2",
    th1: "th1",
    t1: "t1",
    lbd1: "lbd1",
    lbd2: "lbd2",
    t1a: "t1a",
    t3: "t3",
    tb1: "tb1",
    p1: "p1",
    p2: "p2",
    p3: "p3",
    p4: "p4",
    p5: "p5",
    p6: "p6",
    t2: "t2",
    th2: "th2",
    lbd3: "lbd3",
    hdi2b: "hdi2b",
    hdi3: "hdi3",
    hdi4: "hdi4",
    hdi5: "hdi5",
    hdi6: "hdi6",
    hdi7: "hdi7",
    hdi8: "hdi8",
    hdi9: "hdi9",
    hdi10: "hdi10",
    hdi11: "hdi11",
    hdi12: "hdi12",
    hdua: "hdua",
    hduc: "hduc",
    hdub: "hdub",
    hduh: "hduh",
    hduo: "hduo",
    wlcm: "wlcm",
    wlcm2: "wlcm2",
    hduog: "hduog",
    hduhg: "hduhg",
    md1: "md1",
    hduhb: "hduhb",
    tp1: "tp1",
    tp2: "tp2",
    sl1: "sl1",
    sl2: "sl2",
    sp1: "sp1",
    sp3: "sp3",
    hw1: "hw1",
    xmas: "xmas",
    blf: "blf",
    blf2: "blf2",
    cw1: "cw1",
    cw2: "cw2",
    isHM: (popup) => [popups.hm4, popups.hm3, popups.hm2, popups.hm1].includes(popup),
    isSPS: (popup) => [popups.sp1, popups.sp3].includes(popup),
    isCW: (popup) => [popups.cw1, popups.cw2].includes(popup),
    isHDWide: (popup) => [popups.hd3, popups.hd4].includes(popup),
    isWelcome: (popup) => [popups.wlcm, popups.wlcm2].includes(popup),
    isTiming: (popup) => [
        popups.hdub,
        popups.th2,
        popups.lbd3,
        popups.hduh,
        popups.hduo,
        popups.hduog,
        popups.hduhg,
        popups.md1,
        popups.hduhb,
    ].includes(popup),
    isHDI: (popup) => [
        popups.hdi1,
        popups.hdi1b,
        popups.hdi2,
        popups.th1,
        popups.t1,
        popups.lbd1,
        popups.lbd2,
        popups.t2,
        popups.p1,
        popups.p2,
        popups.p3,
        popups.p4,
        popups.p5,
        popups.p6,
        popups.hdi2b,
        popups.hdi3,
        popups.hdi4,
        popups.hdi8,
        popups.hdi9,
    ].includes(popup),
    isHDINew: (popup) => [popups.hdi10, popups.hdi11, popups.hdi12].includes(popup),
    isDynamic: (popup) => [popups.t3, popups.t1a].includes(popup),
    isToasti: (popup) => [popups.tb1].includes(popup),
    isBlackFriday: (popup) => [popups.blf, popups.blf2].includes(popup),
    isRangeSlider: (popup) => [popups.sl1, popups.sl2].includes(popup),
    isHDIWide: (popup) => [
        popups.hdi2,
        popups.th1,
        popups.t1,
        popups.lbd1,
        popups.lbd2,
        popups.t3,
        popups.t2,
        popups.p1,
        popups.p2,
        popups.p3,
        popups.p4,
        popups.p5,
        popups.p6,
        popups.hdi2b,
        popups.hdi4,
        popups.hdi8,
        popups.hdi9,
    ].includes(popup),
};
const isMarginZero = (popup) => [popups.hduh, popups.th2, popups.hduhg, popups.md1].includes(popup);
const browserNameRegex = /browser|google chrome|chrome|firefox|microsoft edge|edge|opera|apple safari|safari/gi;
const queryStringToArray = (queryString) => queryString.slice(queryString.indexOf("?") + 1).split("&");
const queryStringAsList = (queryString) => queryStringToArray(queryString).map((curr) => {
    const [key, value] = curr.split("=");
    return { key, value };
});
const logDebug = (msDebug, message) => {
    if (msDebug == "1") {
        console.log(`MS: ${message}`);
    }
};

function getTemplateText(attribute) {
    var _a;
    if (!attribute) {
        return "";
    }
    const isValidObject = typeof attribute === "object";
    return isValidObject ? (_a = attribute.text) !== null && _a !== void 0 ? _a : "" : attribute;
}
function buildCenteredHeading(content) {
    return `
    <h2 class="m1" style="font-family: Roboto, Arial, sans-serif; font-size: 18px; font-weight: 400; display: flex; justify-content: center;">
      ${getTemplateText(content)}
    </h2>`;
}
function buildStandardHeading(content) {
    return `<h2 class="m1" style="font-family: Roboto, Arial, sans-serif; font-size: 18px; font-weight: 400;">
    ${getTemplateText(content)}
  </h2>`;
}

const templates = function () {
    return {
        hnyde: {
            key: "hnyde",
            title: "Warte kurz!",
            subtitleOne: "Willst du wirklich nicht mehr sparen, wenn du online einkaufst?",
            paragraphOne: "Während du online shoppst,",
            paragraphOneSplit: "findet Honey die besten Aktionscodes.",
            paragraphTwo: "Spare bei alle deinen Lieblingssachen. Einfacher geht's nicht!",
            mainAdvFirstLine: "Mehr als",
            mainAdvSecondLine: "$800 Millionen gespart",
            button: {
                color: "#FF7227",
            },
            link: {
                color: "#9ca2aa",
                title: "Nein, danke",
            },
        },
        wtfox: {
            key: "wtfox",
            title: "Warte kurz!",
            subtitleOne: "Sie wollen wirklich keine kostenfreien Angebote für eine Photovoltaik Anlage?",
            paragraphOne: "Die Preise für Strom steigen immer weiter.",
            paragraphOneSplit: "",
            paragraphTwo: "",
            mainAdvFirstLine: "Sie können bis zu 30% Ihrer",
            mainAdvSecondLine: "Stromkosten sparen!",
            button: {
                color: "#0276B1",
                title: "Ja, bitte Angebote vergleichen",
            },
            link: {
                color: "#9ca2aa",
                title: "Nein, danke",
            },
            footer: {
                text: "Tatsächliche Ergebnisse können abweichen.",
            },
        },
        hnyuk: {
            key: "hnyuk",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "Honey only notifies you",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join the millions of customers who have found",
            mainAdvFirstLine: "Over $800 million",
            mainAdvSecondLine: "in savings",
            button: {
                color: "#FF7227",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        hnyca: {
            key: "hnyca",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "Honey only notifies you",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join the millions of customers who have found",
            mainAdvFirstLine: "Over $800 million",
            mainAdvSecondLine: "in savings",
            button: {
                color: "#FF7227",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        1: {
            key: "1",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        tbl: {
            key: "tbl",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        mobsaf: {
            key: "mobsaf",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        m1: {
            key: "m1",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        th1: {
            key: "th1",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important;",
            },
            subtitleOne: {
                color: "#0289CE",
                text: "DID YOU MISS OUT ON PRIME DAY?",
                fontSize: "28px",
                style: "width: 100%;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Hurry, limited time discounts just for you.",
                style: "color: #000000; font-size: 20px; font-weight: 400; margin-top: 26px;",
            },
            mainAdvSecondLine: {
                text: "",
                style: "",
            },
            button: {
                style: "background: #0289CE; width: 520px; font-size: 24px; margin-bottom: 40px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        th2: {
            key: "th2",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "MISSED PRIME DAY? LAST CHANCE",
                style: "font-size: 28px; color: #0289CE; font-weight: 700; width: 500px; line-height: 124%",
            },
            mainAdvSecondLine: {
                text: "DEALS ARE ENDING SOON!",
                style: "font-size: 28px; color: #0289CE; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#0289CE",
                title: "GET PRIME DAY COUPON SAVINGS",
                style: "font-size: 23px; border-radius: 8px;",
            },
            link: {
                style: "color: #A1A1A1; font-weight: 500; font-style: normal; font-size: 18px; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        t1: {
            key: "t1",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "YOU DESERVE TO SAVE!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Just two clicks and you save on flights,",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "hotels, rentals, and more!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE TRAVEL COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        t1a: {
            key: "t1a",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "YOU DESERVE TO SAVE!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Just two clicks and you save on flights,",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "hotels, rentals, and more!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE TRAVEL COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        t3: {
            key: "t3",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "YOU DESERVE A",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {
                color: "#5FA2C5",
                text: "$10 REWARDS BONUS!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            mainAdvFirstLine: {
                text: "And you can save on flights, hotels,",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "rentals, and more!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
            },
            link: {
                color: "#919191",
                title: "Decline $10 rewards bonus",
            },
        },
        tb1: {
            key: "tb1",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "YOU DESERVE A",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {
                color: "#5FA2C5",
                text: "$10 REWARDS BONUS!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            mainAdvFirstLine: {
                text: "And you can save on flights, hotels,",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "rentals, and more!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
            },
            link: {
                color: "#919191",
                title: "Decline $10 rewards bonus",
            },
        },
        t2: {
            key: "t2",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "YOU COULD BE MISSING OUT",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {
                color: "#5FA2C5",
                text: "ON TRAVEL COUPON CODES",
                fontSize: "28px",
                style: "width: 100%;",
            },
            mainAdvFirstLine: {
                text: "Just two clicks and you save on flights,",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "hotels, rentals, and more!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE TRAVEL COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        lbd1: {
            key: "lbd1",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5492DA",
                text: "LAST CHANCE FOR LABOR DAY SALES!",
                fontSize: "22px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Just two clicks and you can",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "save at over 100k stores for free!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0260CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        lbd2: {
            key: "lbd2",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5492DA",
                text: "YOU COULD BE MISSING OUT ON",
                fontSize: "22px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {
                color: "#5492DA",
                text: "LABOR DAY SAVINGS!",
                fontSize: "22px",
                style: "width: 100%; margin-top: 14px;",
            },
            mainAdvFirstLine: {
                text: "Just two clicks and you can",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "save at over 100k stores for free!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0260CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        lbd3: {
            key: "lbd3",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #5492DA; font-weight: 700; width: 500px; line-height: 124%",
            },
            mainAdvSecondLine: {
                text: "ON LABOR DAY SAVINGS",
                style: "font-size: 28px; color: #5492DA; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#0260CE",
                title: "GET PRIME DAY COUPON SAVINGS",
                style: "font-size: 23px; border-radius: 8px;",
            },
            link: {
                style: "color: #A1A1A1; font-weight: 500; font-style: normal; font-size: 18px; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        hd4: {
            key: "hd4",
            title: "Don't you want to save money?",
            paragraphOneSplit: "100K",
            mainAdvFirstLine: "Get free automatic coupons and save at over",
            mainAdvSecondLine: "retailers with just two clicks.",
            button: {
                color: "#B2CE00",
                title: "Yes, Get Savings!",
            },
            link: {
                color: "#B9B9B9",
                title: "No thanks, I don’t need more savings",
            },
        },
        hdi2: {
            key: "hdi2",
            title: {
                color: "#000",
                text: "WAIT!",
                fontSize: "54px",
            },
            subtitleOne: {
                color: "#0074AF",
                text: "YOU DESERVE TO SAVE!",
                fontSize: "30px",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Just two clicks and you can",
                style: "color: #000000; font-size: 24px; font-weight: 500; margin-top: 26px;",
            },
            mainAdvSecondLine: {
                text: "save at over 100K stores for free!",
                style: "color: #292929; font-size: 24px; font-weight: 500;",
            },
            button: {
                style: "background: #0289CE; width: 520px; font-size: 20px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline free coupons",
                fontSize: "16px",
            },
        },
        hdi1b: {
            key: "hdi1b",
            title: {
                color: "#000",
                text: "Hold Up!",
                fontSize: "54px",
            },
            subtitleOne: {
                color: "#04A44E",
                text: "Do you actually not want automatic savings at checkout?",
                fontSize: "28px",
            },
            paragraphOneSplit: {
                text: "Join millions of customers who found ",
                fontSize: "18px",
                color: "#919191",
            },
            mainAdvFirstLine: "",
            paragraphTwo: {
                text: "Over <span style='font-weight: bold;'>$800 million</span>",
                style: "font-size: 36px; font-style: normal; font-weight: 400;",
            },
            mainAdvSecondLine: {
                text: "in savings last year",
                style: "font-size: 36px; font-style: normal; font-weight: 400;",
            },
            button: {
                style: "background: #17D16D; width: 520px; font-size: 30px; font-weight: 600; line-height: 29px",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#919191",
                title: "Decline free coupons",
            },
        },
        hdi2b: {
            key: "hdi2b",
            title: {
                color: "#000",
                text: "WAIT!",
                fontSize: "54px",
            },
            subtitleOne: {
                color: "#04A44E",
                text: "YOU DESERVE TO SAVE!",
                fontSize: "30px",
            },
            paragraphOneSplit: "asdfasdfasdf",
            mainAdvFirstLine: {
                text: "Just two clicks and you can",
                style: "color: #292929; font-size: 24px; font-weight: 500; margin-top: 26px;",
            },
            mainAdvSecondLine: {
                text: "save at over 100K stores for free!",
                style: "color: #292929; font-size: 24px; font-weight: 500;",
            },
            button: {
                title: "GET FREE AUTOMATIC COUPONS",
                style: "background: #17D16D; width: 547px; font-size: 26px;",
            },
            link: {
                color: "#919191",
                title: "Decline free coupons",
            },
        },
        hdi4: {
            key: "hdi4",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "55px",
            },
            subtitleOne: {
                color: "#6394AD",
                text: "YOU DESERVE A",
                fontSize: "28px",
            },
            paragraphOneSplit: {
                color: "#6394AD",
                text: "$10 REWARDS BONUS!",
                fontSize: "28px",
            },
            mainAdvFirstLine: "And you deserve to save at",
            mainAdvSecondLine: "over 100K stores for free!",
            button: {
                color: "#0289CE",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
                style: "width: 547px",
            },
            link: {
                color: "#686868",
                title: "Decline $10 rewards bonus",
                style: "width: 100%;",
            },
        },
        p1: {
            key: "p1",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "DON'T MISS OUT!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {
                text: "",
                fontSize: "",
                color: "",
            },
            mainAdvFirstLine: {
                text: "With our 100% free tool, you'll never have",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "to wait for a sale again!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        p2: {
            key: "p2",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "GET THE BEST DEALS NOW!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {
                text: "",
                fontSize: "",
                color: "",
            },
            mainAdvFirstLine: {
                text: "With our 100% free tool, you'll never have",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "to wait for a sale again!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        p3: {
            key: "p3",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "DON'T MISS OUT!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "With our 100% free tool, you'll never have",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "to wait for a sale again!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET YOUR FREE COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        p4: {
            key: "p4",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "GET THE BEST DEALS NOW!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "With our 100% free tool, you'll never have",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "to wait for a sale again!",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET YOUR FREE COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        p5: {
            key: "p5",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "DON'T LEAVE WITHOUT SAVING!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Our 100% free tool makes sure you never have",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "to wait for a sale again by applying coupons",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET YOUR FREE COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        p6: {
            key: "p6",
            title: {
                color: "#003D5C",
                text: "WAIT!",
                fontSize: "64px",
                style: "font-weight: 500!important; margin-top: 20px;",
            },
            subtitleOne: {
                color: "#5FA2C5",
                text: "DON'T LEAVE WITHOUT SAVING!",
                fontSize: "28px",
                style: "width: 100%; margin-top: 14px;",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Our 100% free tool makes sure you never have",
                style: "color: #212121; font-size: 20px; font-weight: 500; margin-top: 48px; font-family: Roboto, Arial, Sans-serif;",
            },
            mainAdvSecondLine: {
                text: "to wait for a sale again by applying coupons",
                style: "color: #212121; font-size: 20px; font-weight: 500; font-family: Roboto, Arial, Sans-serif;",
            },
            button: {
                style: "background: #0289CE; width: 495px; height: 60px; font-size: 24px; margin-bottom: 24px; margin-top: 48px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline coupons",
            },
        },
        hdi6a: {
            key: "hdi6a",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Just two clicks and you can",
            mainAdvFirstLine: "Start saving at over",
            mainAdvSecondLine: "100K+ stores for free!",
            button: {
                color: "linear-gradient(90deg, #FF8B3C 0%, #FD4C46 85%);",
                title: "Yes, Get Free Coupons",
                shadow: "none !important",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        hdi6c: {
            key: "hdi6c",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "You deserve a $10 rewards bonus!",
            paragraphOneSplit: "",
            paragraphTwo: "Just two clicks and you can",
            mainAdvFirstLine: "Start saving at over",
            mainAdvSecondLine: "100K+ stores for free!",
            button: {
                color: "#0276B1",
                title: "Redeem your $10 rewards bonus",
            },
            link: {
                color: "#9ca2aa",
                title: "Decline $10 rewards bonus",
            },
        },
        hdua: {
            key: "hdua",
            title: "HURRY, OFFER ENDS SOON",
            subtitleOne: "Don't miss out on your free gift card!",
            mainAdvFirstLine: "Your gift card will be sent to your inbox after",
            mainAdvSecondLine: "creating your free account.",
            button: {
                color: "#0476B1",
                title: "CLAIM $25 GIFT CARD",
            },
            link: {
                color: "#919191",
                title: "No, thanks",
            },
        },
        hduc: {
            key: "hduc",
            title: "hold up!",
            subtitleOne: "Get your free $25 Amazon gift card",
            mainAdvFirstLine: "Sign up today to claim a $25 Amazon gift card",
            mainAdvSecondLine: "to enjoy on your first shopping experience. ",
            button: {
                color: "#0476B1",
                title: "CLAIM $25 GIFT CARD",
            },
            link: {
                color: "#919191",
                title: "No, thanks",
            },
        },
        hdub: {
            key: "hdub",
            title: {
                text: "HURRY OFFER ENDS SOON",
                style: "color: #B1B1B1; font-size: 23px; margin: 0px;",
            },
            subtitleOne: {
                text: "Don't miss out on your free gift card!",
                style: "color: #000; font-size: 40px; width: 364px;",
            },
            mainAdvFirstLine: {
                text: "Your $10 gift card will be sent to your inbox after",
                style: "font-size: 18px; color: #000;",
            },
            mainAdvSecondLine: {
                text: "creating your free account.",
                style: "font-size: 18px; color: #000;",
            },
            button: {
                color: "#0476B1",
                title: "GET YOUR FREE GIFT CARD",
            },
            link: {
                style: "color: #919191; font-weight: normal; font-style: normal; text-decoration: underline;",
                title: "CONTINUE WITHOUT OFFER",
            },
        },
        hduh: {
            key: "hduh",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #0289CE; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON PRIME DAY SAVINGS!",
                style: "font-size: 28px; color: #0289CE; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#0289CE",
                title: "GET PRIME DAY COUPONS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        hduhg: {
            key: "hduhg",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px; font-family: Roboto, Arial, sans-serif !important",
            },
            subtitleOne: {
                text: "YOU DESERVE A $10 REWARDS BONUS!",
                style: "color: #6394AD; font-size: 10px; width: 364px; display: none;",
            },
            mainAdvFirstLine: {
                text: "YOU DESERVE A",
                style: "font-size: 28px; color: #098D46; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "$10 REWARDS BONUS!",
                style: "font-size: 28px; color: #098D46; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#17D16D",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline $10 rewards bonus",
            },
        },
        md1: {
            key: "md1",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px; font-family: Roboto, Arial, sans-serif !important",
            },
            subtitleOne: {
                text: "YOU COULD BE MISSING OUT",
                style: "color: #6394AD; font-size: 10px; width: 364px; display: none;",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #d5909e; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON MOTHER'S DAY SAVINGS!",
                style: "font-size: 28px; color: #d5909e; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#ff5252",
                title: "GET MOTHER’S DAY COUPON SAVINGS!",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        hduhb: {
            key: "hduhb",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px; font-family: Roboto, Arial, sans-serif !important",
            },
            subtitleOne: {
                text: "YOU DESERVE A $10 REWARDS BONUS!",
                style: "color: #6394AD; font-size: 10px; width: 364px; display: none;",
            },
            mainAdvFirstLine: {
                text: "YOU DESERVE A",
                style: "font-size: 28px; color: #6394AD; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "$10 REWARDS BONUS!",
                style: "font-size: 28px; color: #6394AD; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#0289CE",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline $10 rewards bonus",
            },
        },
        hduo: {
            key: "hduo",
            title: {
                text: "WAIT!",
                style: "color: #003D5C; font-size: 45px; margin-bottom: 25px; width: 380px; ",
            },
            subtitleOne: {
                text: "YOU COULD BE MISSING OUT ON PRIME DAY SAVINGS!",
                style: "color: #0289CE; font-size: 24px; width: 370px",
            },
            paragraphOne: {
                text: "OFFER ENDS SOON",
                style: "color: #B9B9B9; font-size: 20px; margin-bottom: -20px; margin-top: 30px; font-weight: 450; display: none;",
            },
            mainAdvFirstLine: {
                text: "Automatically claim up to 70% off!",
                style: "font-size: 22px; color: #000; font-weight: 450;",
            },
            mainAdvSecondLine: {
                text: "over 100K stores for free!",
                style: "font-size: 22px; color: #000; font-weight: 450; display: none;",
            },
            button: {
                color: "#0289CE",
                title: "GET PRIME DAY COUPONS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: normal; font-style: normal; text-decoration: none; margin-top: -10px;",
                title: "Decline coupons",
            },
        },
        hduog: {
            key: "hduog",
            title: {
                text: "Wait!",
                style: "color: #003D5C; font-size: 45px; margin-bottom: 25px; font-family: Roboto, Arial, sans-serif !important",
            },
            subtitleOne: {
                text: "YOU DESERVE A $10 REWARDS BONUS!",
                style: "color: #098D46; font-size: 24px; width: 100%;",
            },
            paragraphOne: {
                text: "OFFER ENDS SOON",
                style: "color: #B9B9B9; font-size: 20px; margin-bottom: -20px; margin-top: 30px; font-weight: 450;",
            },
            mainAdvFirstLine: {
                text: "And you deserve to save at",
                style: "font-size: 22px; color: #000; font-weight: 450; font-family: Roboto, Arial, sans-serif !important",
            },
            mainAdvSecondLine: {
                text: "over 100K stores for free!",
                style: "font-size: 22px; color: #000; font-weight: 450; font-family: Roboto, Arial, sans-serif !important",
            },
            button: {
                color: "#17D16D",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
                style: "font-size: 23px; margin-top: 40px;",
            },
            link: {
                style: "color: #919191; font-weight: normal; font-style: normal; text-decoration: none;",
                title: "Decline $10 rewards bonus",
            },
        },
        hdi8: {
            key: "hdi8",
            title: {
                color: "#000",
                text: "WAIT!",
                fontSize: "54px",
            },
            subtitleOne: {
                color: "#BE171A",
                text: "YOU DESERVE TO SAVE!",
                fontSize: "30px",
            },
            paragraphOneSplit: {},
            mainAdvFirstLine: {
                text: "Just two clicks and you can",
                style: "color: #000000; font-size: 24px; font-weight: 500; margin-top: 26px;",
            },
            mainAdvSecondLine: {
                text: "save at over 100K stores for free!",
                style: "color: #292929; font-size: 24px; font-weight: 500;",
            },
            button: {
                style: "background: #F83336; width: 520px; font-size: 20px;",
                title: "GET FREE AUTOMATIC COUPONS",
            },
            link: {
                color: "#919191",
                title: "Decline free coupons",
            },
        },
        hdi9: {
            key: 'hdi9',
            title: {
                color: '#000',
                text: "WAIT!",
                fontSize: "65px"
            },
            subtitleOne: {
                color: '#12B261',
                text: "YOU DESERVE A",
                fontSize: "26px"
            },
            paragraphOneSplit: {
                color: '#12B261',
                text: "$10 REWARDS BONUS!",
                fontSize: "26px"
            },
            mainAdvFirstLine: {
                text: "And you deserve to save at",
                style: "color:#000000;font-size:34px;font-weight:500;margin-top:26px;"
            },
            mainAdvSecondLine: {
                text: "over 100K stores for free!",
                style: "color:#292929;font-size:34px;font-weight:500;"
            },
            button: {
                style: "background:#17D16D;width:547px;font-size:18px;letter-spacing:1px;",
                title: "REDEEM YOUR $10 REWARDS BONUS!"
            },
            link: {
                color: "#686868",
                title: "Decline $10 rewards bonus"
            }
        },
        sl1: {
            key: "sl1",
            title: {
                text: "Wait! Shop smart, <br/> cruise more!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px; font-family: Roboto, Arial, sans-serif !important",
            },
            subtitleOne: {
                text: "How many purchases do you typically make online monthly?",
                style: "color: #000; font-size: 16px; font-weight: normal; font-style: normal; margin-top: 32px",
            },
            button: {
                color: "#0289CE",
                title: "GET MY SAVINGS NOW",
                style: "font-size: 24px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline my savings",
            },
        },
        sl2: {
            key: "sl2",
            title: {
                text: "Wait! Shop smart, <br/> cruise more!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px; font-family: Roboto, Arial, sans-serif !important",
            },
            subtitleOne: {
                text: "Slide to see how much you can save!",
                style: "color: #000; font-size: 16px; font-weight: normal; font-style: normal; margin-top: 32px",
            },
            button: {
                color: "#0289CE",
                title: "GET MY SAVINGS NOW",
                style: "font-size: 24px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline my savings",
            },
        },
        tp1: {
            key: "tp1",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        tp2: {
            key: "tp2",
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save",
            },
        },
        sp1: {
            key: "sp1",
            title: "Hold Up!",
            subtitleOne: "Join thousands of seniors who found <br /> over $800M in savings last year!",
            paragraphOne: "I saved over $400 on my last flight!",
            paragraphOneSplit: "",
            paragraphTwo: "“I’ve always wanted to travel more in retirement but thought business class was out of reach. This savings tool changed that—I saved over $400 on my last flight!”",
            mainAdvFirstLine: "– Evelyn, 70 –",
            mainAdvSecondLine: "",
            button: {
                color: "#0289CE",
                title: "GET MY SAVINGS NOW",
            },
            link: {
                color: "#B8B6B6",
                title: "Decline my savings",
            },
        },
        sp3: {
            key: "sp3",
            title: "Hold Up!",
            subtitleOne: "Join thousands of customers who found <br /> over $800M in savings last year!",
            paragraphOne: "I saved over $600 on my flights and hotels!",
            paragraphOneSplit: "",
            paragraphTwo: "“I’ve traveled to Europe twice this year, and this travel savings tool helped me save over $600 on flights and hotels. Couldn’t believe how easy it was to find these hidden deals!”",
            mainAdvFirstLine: "– Mark, 48 –",
            mainAdvSecondLine: "",
            button: {
                color: "#0289CE",
                title: "GET MY SAVINGS NOW",
            },
            link: {
                color: "#B8B6B6",
                title: "Decline my savings",
            },
        },
        hw1: {
            key: "hw1",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #000000; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #D56600; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON HALLOWEEN SAVINGS",
                style: "font-size: 28px; color: #D56600; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#F97800",
                title: "GET HALLOWEEN SAVINGS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        xmas: {
            key: "xmas",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #7D001B; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 38px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #97BC72; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON HOLIDAY SAVINGS",
                style: "font-size: 28px; color: #97BC72; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#DE0000",
                title: "GET HOLIDAY SAVINGS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        blf: {
            key: "blf",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #000000; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #E68A00; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON BLACK FRIDAY SAVINGS",
                style: "font-size: 28px; color: #E68A00; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#0289CE",
                title: "GET BLACK FRIDAY SAVINGS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        blf2: {
            key: "blf2",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #DF0031; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON BLACK FRIDAY SAVINGS",
                style: "font-size: 28px; color: #DF0031; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#000000",
                title: "GET BLACK FRIDAY SAVINGS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #919191; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        cw1: {
            key: "cw1",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #E68A00; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON CYBER WEEK SAVINGS",
                style: "font-size: 28px; color: #E68A00; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#0289CE",
                title: "GET CYBER WEEK SAVINGS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #0289CE; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        cw2: {
            key: "cw2",
            title: {
                text: "Offer Ends Soon!",
                style: "color: #003D5C; font-weight: 700; font-size: 38px; margin-bottom: -10px; margin-top: 20px;",
            },
            subtitleOne: {
                text: "",
                style: "",
            },
            mainAdvFirstLine: {
                text: "YOU COULD BE MISSING OUT",
                style: "font-size: 28px; color: #DF0031; font-weight: 700;",
            },
            mainAdvSecondLine: {
                text: "ON CYBER WEEK SAVINGS",
                style: "font-size: 28px; color: #DF0031; font-weight: 700; margin-bottom: 28px;",
            },
            button: {
                color: "#000000",
                title: "GET CYBER WEEK SAVINGS",
                style: "font-size: 23px;",
            },
            link: {
                style: "color: #000000; font-weight: 450; font-style: normal; text-decoration: none;",
                title: "Decline coupons",
            },
        },
        hdi10: {
            key: "hdi10",
            title: {
                color: "#000",
                text: "WAIT!",
                fontSize: "69px",
            },
            subtitleOne: {
                color: "#0276B1",
                text: "YOU DESERVE A",
                fontSize: "28px",
            },
            paragraphOneSplit: {
                color: "#0276B1",
                text: "$10 REWARDS BONUS!",
                fontSize: "28px",
            },
            mainAdvFirstLine: {
                text: "And you deserve to save at ",
                style: "color: #24333E; font-size: 39px; font-weight: 500; margin-top: 16px;",
            },
            mainAdvSecondLine: {
                text: "over 100k stores for free!",
                style: "color: #24333E; font-size: 39px; font-weight: 500;",
            },
            button: {
                style: "background: #0276B1; height: 62px; width: 520px; font-size: 20px;",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
            },
            link: {
                color: "#9CA2AA",
                title: "Decline $10 rewards bonus",
                fontSize: "16px",
            },
        },
        hdi11: {
            key: "hdi11",
            title: {
                color: "#1B2832",
                text: "WAIT!",
                fontSize: "55px",
            },
            subtitleOne: {
                color: "#0276B1",
                text: "YOU'RE ELIGIBLE FOR",
                fontSize: "37px",
            },
            paragraphOneSplit: {
                color: "#0276B1",
                text: "A $10 REWARDS!",
                fontSize: "37px",
            },
            mainAdvFirstLine: {
                text: "Join 10M other users saving",
                style: "color: #24333E; font-size: 29px; font-weight: 600; margin-top: 26px;",
            },
            mainAdvSecondLine: {
                text: "up to 50% on their purchases",
                style: "font-size: 29px; font-style: normal; font-weight: 600;",
            },
            button: {
                style: "background: #0276B1; width: 355px; font-size: 18px; font-weight: 600; line-height: 29px",
                title: "Claim Your $10 Bonus",
            },
            link: {
                color: "#9CA2AA",
                title: "No, Don't Save",
            },
        },
        hdi12: {
            key: "hdi12",
            title: {
                color: "#1B2832",
                text: "WAIT!",
                fontSize: "55px",
            },
            subtitleOne: {
                color: "#0276B1",
                text: "YOU DESERVE A",
                fontSize: "37px",
            },
            paragraphOneSplit: {
                color: "#0276B1",
                text: "$10 REWARDS BONUS!",
                fontSize: "37px",
            },
            mainAdvFirstLine: {
                text: "And you deserve to save at ",
                style: "color: #24333E; font-size: 29px; font-weight: 600; margin-top: 26px;",
            },
            mainAdvSecondLine: {
                text: "over 100k stores for free!",
                style: "font-size: 29px; font-style: normal; font-weight: 600;",
            },
            button: {
                style: "background: #0276B1; width: 569px; font-size: 25px; font-weight: 600; line-height: 29px; height: 62px; margin-top: 18px;",
                title: "REDEEM YOUR $10 REWARDS BONUS!",
            },
            link: {
                color: "#9CA2AA",
                title: "Decline $10 rewards bonus",
            },
        },
        hdi13: {
            key: 'hdi13',
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save"
            },
        },
        hdi14: {
            key: 'hdi14',
            title: "Hold Up!",
            subtitleOne: "Do you actually not want automatic savings at checkout?",
            paragraphOne: "We only notify",
            paragraphOneSplit: "when there are likely savings.",
            paragraphTwo: "Join millions of customers who found",
            mainAdvFirstLine: "Over $800 million in",
            mainAdvSecondLine: "savings last year",
            button: {
                color: "#0276B1",
                title: "Yes, Get Coupons",
            },
            link: {
                color: "#9ca2aa",
                title: "No, Don't Save"
            },
        },
        wlcm: {
            key: "wlcm",
            title: {
                color: "#1B2832",
                text: "WAIT!",
                fontSize: "84px",
            },
            subtitleOne: {
                color: "#0276B1",
                text: "WE OWE YOU A $10 BONUS!",
                fontSize: "37px",
            },
            paragraphOneSplit: {
                color: "#0276B1",
                text: "",
                fontSize: "37px",
            },
            mainAdvFirstLine: {
                text: `You’ve got Capital One Shopping 😊 \n
        Now grab your $10 bonus. It only takes a 
        few seconds - it’s kinda genius. `,
                style: `
          color: #24333E; 
          font-size: 27px; 
          font-weight: 600; 
          margin-top: 26px;
          padding-left: 32px;
          padding-right: 32px;
          line-height: 38px;
          `,
            },
            mainAdvSecondLine: {
                text: "over 100k stores for free!",
                style: "font-size: 29px; font-style: normal; font-weight: 600; display: none;",
            },
            button: {
                style: "background: #0276B1; width: 569px; font-size: 25px; font-weight: 600; line-height: 29px; height: 69px; margin-top: 44px; border-radius: 12px;",
                title: "CLAIM MY $10 BONUS",
            },
            link: {
                color: "#9CA2AA",
                title: "Decline the $10 bonus",
            },
        },
        wlcm2: {
            key: "wlcm2",
            title: {
                color: "#1B2832",
                text: "WAIT!",
                fontSize: "84px",
            },
            subtitleOne: {
                color: "#0276B1",
                text: "WE OWE YOU A $10 BONUS!",
                fontSize: "37px",
            },
            paragraphOneSplit: {
                color: "#0276B1",
                text: "",
                fontSize: "37px",
            },
            mainAdvFirstLine: {
                text: `You’ve got Capital One Shopping 😊 \n
        Now grab your $10 bonus. It only takes a 
        few seconds - it’s kinda genius. `,
                style: `
          color: #24333E; 
          font-size: 27px; 
          font-weight: 600; 
          margin-top: 26px;
          padding-left: 32px;
          padding-right: 32px;
          line-height: 38px;
          `,
            },
            mainAdvSecondLine: {
                text: "over 100k stores for free!",
                style: "font-size: 29px; font-style: normal; font-weight: 600; display: none;",
            },
            button: {
                style: "background: #0276B1; width: 569px; font-size: 25px; font-weight: 600; line-height: 29px; height: 69px; margin-top: 44px; border-radius: 12px;",
                title: "CLAIM MY $10 BONUS",
            },
            link: {
                color: "#9CA2AA",
                title: "Decline the $10 bonus",
            },
        },
    };
};
window.templates = templates;

let countdown;
const topBarData = {
    tp1: {
        title: "Grab your $10 reward today — Boost Your Savings!",
        buttonTitle: "REDEEM $10 NOW",
    },
    tp2: {
        title: "Don’t miss out on a $10 bonus—Redeem your reward!",
        buttonTitle: "REDEEM NOW",
    },
};
const style = document.createElement("style");
style.innerHTML = `
  .top-bar-button:hover {
    text-decoration: none;
    background-color: #FFB800 !important; 
  }
`;
document.head.appendChild(style);
const getEspecialOffer = () => {
    const mockElement = document.getElementById("timer-mock-data");
    if (mockElement) {
        mockElement.remove();
    }
    return `
    <p style="
    color: rgba(255, 255, 255, 0.70); 
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.8px;
    font-family: Roboto, Arial, sans-serif;
    "
    >SPECIAL OFFER</p>
    `;
};
const getTemplateForCounTime = (formattedMinutes, formattedSeconds) => {
    return ` 
              <div
              style="
                 width: 43.369px;
                 height: 33.269px;
                 flex-shrink: 0;
                 border-radius: 4px;
                 background: rgba(255, 255, 255, 0.30);
                 justify-content: center;
                 align-items: center;
                 display: flex;
              "
              >
              <p 
              id="hour-element"
              style="
                    color: #FFF;
                 text-align: center;
                 font-family: Roboto, Arial, sans-serif;
                 font-size: 22px;
                 font-style: normal;
                 font-weight: 700;
                 line-height: normal;
                 letter-spacing: 0.88px;
              "
              >00</p></div> 
              <p
              style="
                  color: #FFF;
                     font-family: Poppins;
                     font-size: 22px;
                     font-style: normal;
                     font-weight: 400;
                     line-height: normal;
                     letter-spacing: 0.88px;
                     margin: 0px 2px;
              "
              >:</p>
              <div
             style="
                 width: 43.369px;
                 height: 33.269px;
                 flex-shrink: 0;
                 border-radius: 4px;
                 background: rgba(255, 255, 255, 0.30);
                 justify-content: center;
                 align-items: center;
                 display: flex;
              "
              ><p 
              id="minutes-element"
              style="
                    color: #FFF;
                 text-align: center;
                 font-family: Roboto, Arial, sans-serif;
                 font-size: 22px;
                 font-style: normal;
                 font-weight: 700;
                 line-height: normal;
                 letter-spacing: 0.88px;
              ">${formattedMinutes}</p></div> 
              <p style="
                  color: #FFF;
                     font-family: Poppins;
                     font-size: 22px;
                     font-style: normal;
                     font-weight: 400;
                     line-height: normal;
                     letter-spacing: 0.88px;
                     margin: 0px 2px;
              ">:</p>
              <div
                 style="
                 width: 43.369px;
                 height: 33.269px;
                 flex-shrink: 0;
                 border-radius: 4px;
                 background: rgba(255, 255, 255, 0.30);
                 justify-content: center;
                 align-items: center;
                 display: flex;
              "
              ><p 
              id="seconds-element"
              style="
                    color: #FFF;
                 text-align: center;
                 font-family: Roboto, Arial, sans-serif;
                 font-size: 22px;
                 font-style: normal;
                 font-weight: 700;
                 line-height: normal;
                 letter-spacing: 0.88px;
              ">${formattedSeconds}</p></div>
                 `;
};
const getCountDownTiming = () => {
    setTimeout(() => {
        const timeContainer = document.getElementById("timerContainer");
        const ifContainerexist = document.querySelector("#button-container-div");
        const targetDate = new Date().getTime() + 5 * 60 * 1000;
        countdown = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();
            // Find the distance between now and the target date
            const distance = targetDate - now;
            // Time calculations for days, hours, minutes, and seconds
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Add leading zero to hours, minutes, and seconds if they are less than 10
            const formattedMinutes = minutes.toString().padStart(2, "0");
            const formattedSeconds = seconds.toString().padStart(2, "0");
            if (distance < 1000) {
                clearInterval(countdown);
                if (ifContainerexist) {
                    ifContainerexist.style.top = "-80px";
                    setTimeout(() => {
                        ifContainerexist.remove();
                    }, 1000);
                }
                // window.location.href=fallback.url
            }
            if (timeContainer) {
                timeContainer.innerHTML = getTemplateForCounTime(formattedMinutes, formattedSeconds);
            }
        }, 1000);
    }, 200);
};
const getBodyDisplay = (popup) => {
    console.log({ popup });
    if (popups.tp1 === popup) {
        return getEspecialOffer();
    }
    return getCountDownTiming();
};
const showTopBar = (display) => {
    var _a;
    const ifContainerexist = document.querySelector("#button-container-div");
    if (ifContainerexist) {
        ifContainerexist.remove();
    }
    const body = document.querySelector("body");
    const buttonContainer = document.createElement("div");
    const params = new URLSearchParams(window.location.search);
    const popup = (_a = params.get("popup")) !== null && _a !== void 0 ? _a : "";
    buttonContainer.style.display = display;
    buttonContainer.id = "button-container-div";
    buttonContainer.style.position = "fixed";
    buttonContainer.style.zIndex = "9999999";
    buttonContainer.style.top = "-80px";
    buttonContainer.style.transition = "top 2s ease";
    buttonContainer.style.left = "0px";
    buttonContainer.style.width = "100%";
    buttonContainer.style.background = "#213478";
    buttonContainer.style.boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
    buttonContainer.style.height = "66px";
    buttonContainer.innerHTML = `
    <div style="display: flex; width: 100%; flex-direction: row;">
        <a href="#" class="url-link" style="display: flex; width: 100%; text-decoration: none;">
            <div style="display: flex; flex: 2; margin-left: 80px;">
                <div id="timerContainer"
                    style="
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    ">
                    ${getBodyDisplay(popup)}
                </div>
            </div>
            <div style="
            display: flex; 
            flex: 8;
            justify-content: center;
            align-items: center;
            ">
                <p style="
                color: #FFFFFF; 
                font-size: 16px;
                font-weight: 500;
                font-family: Roboto, Arial, sans-serif;
                margin-right: 50px;
                ">
                ${topBarData[popup].title}
                </p>
                <div class="url-link top-bar-button"
                style="
                    background: #FF8A00;
                    color: #FFFFFF;
                    border-radius: 2px;
                    width: 160px;
                    height: 36px;
                    font-size: 16px;
                    font-weight: 700;
                    font-family: Roboto, Arial, sans-serif;
                    padding: 0px;
                    margin: 0px;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                ">
                    ${topBarData[popup].buttonTitle}
                </div>
            </div>
            <div style="display: flex; flex: 2; justify-content: flex-end;">
                <button
                id="holdup_close" 
                style="
                background: none;
                margin: 0px;
                padding: 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25px;
                border: none;
                margin-right: 13px;
                cursor: pointer;
                ">
                    <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
                </button>
            </div>
        </a>
    </div>
    `;
    body === null || body === void 0 ? void 0 : body.appendChild(buttonContainer);
    setTimeout(() => {
        buttonContainer.style.top = "0px";
        const closeButton = document.querySelector("#holdup_close");
        if (closeButton) {
            closeButton.addEventListener("click", function (event) {
                event.stopPropagation();
                buttonContainer.style.top = "-80px";
                event.preventDefault();
                setTimeout(() => {
                    buttonContainer.remove();
                    clearInterval(countdown);
                }, 1000);
            });
        }
    }, 500);
};

const getUniqueRandomNumber = () => {
    const lastRandomNumber = -1;
    let newRandomNumber;
    do {
        newRandomNumber = Math.floor(Math.random() * 3);
    } while (newRandomNumber === lastRandomNumber);
    return newRandomNumber;
};
const appStoreView = () => `
<div id="hold_up_get_coupons_banner"
    style="
      width: 100%;
      position: fixed;
      transform: translate3d(0,0,0);
      top: 0px;
      background: #F2F2F2;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      height: 87px;
      display: flex;
      align-items: center;
      ">
    <div style="display: flex; height: 100%; justify-content: center; align-items: center; padding: 10px; width:10%;">
      <button  id="hold_up_get_coupons_close"
      style="background: none; 
      color: #4E4E4E; 
      width: 17px; 
      height: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin-bottom: 0px;
      padding: 0px;">
        <img src="https://cdn.onlineshoppingtools.com/clear.svg" style="width: 17px; height: 17px;" />
      </button>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; width:60%;">
      <img src="https://cdn.onlineshoppingtools.com/be7538e4dc16b60939190f820bc45ddf.png" style="width: 56px; height: 56px; border-radius: 5px;" />
      <div style="display: flex; flex-direction: column; margin-left: 15px; margin-right: 15px;">
      <p 
        style="
        margin-bottom: 0px;
        color: #282828;
        font-size: 15px;
        ">Capital One Shopping</p>
      <img src="https://cdn.onlineshoppingtools.com/starsgroup.svg" style="width: 81px; height: 15px;" />
    </div>
  </div>
  <div style="width:30%;">
  <Button id="hold_up_get_coupons_view"
  style="
  width: 91px;
  height: 38px;
  padding: 0px;
  background: none;
  border-radius: 5px;
  border: solid 1px #868686;
  color: #282828;
  font-family: Roboto;
  font-size: 16px;
  margin: 0px;
  "
  >View</Button>
  </div>
  </div>`;
const buttonLabels = {
    [popups.t1a]: "Travel Savings!",
    [popups.t3]: "$10 Rewards",
};
const showBottomButton = (display) => {
    var _a, _b;
    const ifContainerexist = document.querySelector("#button-container-div");
    if (ifContainerexist) {
        ifContainerexist.remove();
    }
    const body = document.querySelector("body");
    const buttonContainer = document.createElement("div");
    const params = new URLSearchParams(window.location.search);
    const popup = (_a = params.get("popup")) !== null && _a !== void 0 ? _a : "";
    const holdup = (_b = params.get("holdup")) !== null && _b !== void 0 ? _b : "";
    console.log({ popup, buttonLabels });
    buttonContainer.style.display = display;
    buttonContainer.id = "button-container-div";
    buttonContainer.style.position = "fixed";
    buttonContainer.style.zIndex = "9999999";
    buttonContainer.style.bottom = "0px";
    buttonContainer.style.left = "30px";
    buttonContainer.innerHTML = `
  <button
  id="remove-button-id"
  style="
    background: rgba(0, 0, 0, 0.55);
    border: none;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: -10px;
    left: -13px;
    border-radius: 100%;
  "
  >X</button>
  <button
  style="background: #0289CE;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 180px;
  height: 54px;
  font-size: 20px;
  font-style: normal;
  color: #FFF;
  font-family: Roboto, Arial, sans-serif;
  line-height: 10px;
  font-weight: 700;
  padding: 4px 8px;
  "
  id="over-button-id"
  >
  ${buttonLabels[popup] ? buttonLabels[popup] : "$10 Rewards!"}
  </button>
  `;
    body === null || body === void 0 ? void 0 : body.appendChild(buttonContainer);
    const closeButton = document.querySelector("#over-button-id");
    const removeButton = document.querySelector("#remove-button-id");
    if (closeButton) {
        closeButton.addEventListener("click", (event) => {
            event.preventDefault();
            buttonContainer.remove();
            const dynamicCtaUrl = window.dataLayer.filter((item) => item.dynamic_cta_url);
            const msTemplate = window.dataLayer.filter((item) => item.msTemplate);
            if (popup === popups.t3) {
                window.location.href = "https://cos-rd.com/18/14656";
                return;
            }
            window.generatePopupExperience({
                holdup,
                popup,
                msDebug: "1",
                redirectUrl: dynamicCtaUrl[0]
                    ? dynamicCtaUrl[0]["dynamic_cta_url"]
                    : "",
                fallbackUrl: window.location.href,
                holdupUrl: "http://google.com?q=holdUpUrl",
                qrcodeUrl: "https://cos-rd.com/60/12945?popup=1?popup=1&utm_source=gdn_dca&postback=&adgroup=&campaign=&device=&creative=&publisher=&source=&atnid=543f349b-365a-4532-a056-c76edb4a0e65&holdup=qr&ms_env=dev&holdup=qr&ms_debug=1",
                templates: msTemplate[0] ? msTemplate[0]["msTemplate"] : templates(),
                openInNewTab: false,
                hideHeader: true,
            });
        });
    }
    if (removeButton) {
        removeButton.addEventListener("click", function () {
            buttonContainer.remove();
        });
    }
};
const fadeOutAndRemove = () => {
    const params = new URLSearchParams(window.location.search);
    const popup = params.get("popup");
    const Element = document.querySelector("#toasti-bar-container");
    if (!(Element === null || Element === void 0 ? void 0 : Element.style))
        return;
    if (popup === "tbl") {
        Element.style.opacity = "0";
        Element.style.bottom = "180px";
    }
    else if (popup === "tbr") {
        Element.style.opacity = "0";
        Element.style.top = "0px";
    }
    // displayToastiBarInSecond(5000)
    Element.addEventListener("transitionend", function (event) {
        console.log("Transition end", event);
        if (event.propertyName === "opacity") {
            // Check if the transition is for opacity
            setTimeout(() => {
                Element.remove(); // Remove the element from the DOM
                fadeInAndAddElement();
            }, 1000);
        }
    });
};
const fadeInAndAddElement = () => {
    const randomNumber = getUniqueRandomNumber();
    const bodyList = [
        {
            id: "steven",
            description: `Steven in Seattle, WA <strong>Redeemed a $20 Macy's Gift Card</strong>`,
            link: "4 minutes ago",
        },
        {
            id: "chris",
            description: `Chris in Atlanta, GA <br /> <strong>Saved $8 at Amazon</strong>`,
            link: "5 minutes ago",
        },
        {
            id: "julia",
            description: `Julia in San Diego, CA <br /> <strong>Earned $10 bonus</strong>`,
            link: "5 minutes ago",
        },
    ];
    const body = document.querySelector("body");
    const buttonContainer = document.createElement("div");
    const params = new URLSearchParams(window.location.search);
    const popup = params.get("popup");
    buttonContainer.id = "toasti-bar-container";
    buttonContainer.style.cssText = `
    background: white;
    width: 314px;
    height: 121px;
    opacity: 0;
    transition: opacity 3s ease, left 2s ease, right 2s ease, bottom 2s ease, top 2s ease, transform 0.5s ease-out;
    position: fixed;
    z-index: 99999999;
    display: block;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
   ${popup === "tbl" ? " transform: translateX(-100%);" : "right: -314px "}
  `;
    const elementBody = bodyList[randomNumber];
    buttonContainer.innerHTML = `
 <button
   id="remove-button-id"
   style="
     background: white;
     border: none;
     position: absolute;
     width: 25px;
     height: 25px;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0px;
     margin: 0px;
     top: 12px;
     right: 12px;
   "
   aria-label="Remove"
 >
   <img src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/08/close-xx.svg" alt="Close button"/>
 </button>

<a href="#" class="url-link" style="display: block; height: 121px; text-decoration: none; color: inherit;">
 <div style="display: flex; justify-content: flex-start; align-items: flex-start; padding: 17px;">
   <div style="display: block; width: 42px; height: 42px;">
     <img src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/08/png_oculus-5.png" style="width: 100%; height: 100%" alt="Oculus Logo"/>
   </div>
   <div style="display: flex; margin-left: 15px; max-width: 189px; flex-direction: column; flex: 7; justify-content: center;">
     <p style="font-family: Roboto, Arial, sans-serif; font-size: 16px; color: #083C5C; margin-top: 0px; min-height: 72px">
      ${elementBody.description}
     </p>
     <p style="font-family: Roboto, Arial, sans-serif; font-size: 16px; margin-top: 0px; color: #2350D9;">
        ${elementBody.link}
     </p>
   </div>
 </div>
</a>

 `;
    body === null || body === void 0 ? void 0 : body.appendChild(buttonContainer);
    setTimeout(() => {
        if (popup === "tbl") {
            buttonContainer.style.opacity = "1";
            buttonContainer.style.bottom = "30px";
            buttonContainer.style.transform = "translateX(30px)";
        }
        else if (popup === "tbr") {
            buttonContainer.style.opacity = "1";
            buttonContainer.style.top = "90px";
            buttonContainer.style.right = "30px";
        }
        setTimeout(() => {
            console.log("Callind Removed");
            fadeOutAndRemove();
        }, 4000);
    }, 1000);
};
const showToastiBar = () => {
    // Set a timeout to transition the appearance of the container
    const displayToastiBarInSecond = function () {
        const existElement = Array.isArray(window.dataLayer) &&
            window.dataLayer.find(function (data) {
                return data["tostiBar"];
            });
        if (existElement) {
            return;
        }
        fadeInAndAddElement();
    };
    displayToastiBarInSecond();
    document.addEventListener("click", (event) => {
        var _a;
        const removeButton = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest("#remove-button-id");
        if (removeButton) {
            const element = document.querySelector("#toasti-bar-container");
            if (element)
                element.remove();
        }
    }, true);
};

const getFooter$1 = (popup) => {
    const footers = {
        [popups.m1]: `
      <footer style="margin-top: 30px;">
        <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg"/>
        <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg"/>
        <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg"/>
      </footer>`,
        [popups.hm2]: `
      <footer style="background: #F0F4F7; position: absolute; bottom: 10%;">
        <img src="https://cdn.onlineshoppingtools.com/resources/brands-bw.png" style="width: 100%; opacity: unset;"/>
      </footer>`,
        [popups.hm1]: `
      <footer style="margin-top: 30px;">
        <img src="https://cdn.onlineshoppingtools.com/resources/brands-colored.png" style="width: 100%; opacity: unset;"/>
      </footer>`,
    };
    return footers[popup] || "";
};
const getDialogStyles = (popup) => ({
    dialogStyle: popups.hm2 === popup ? "padding: unset;" : "",
    articleStyle: popups.hm2 === popup
        ? `height: 100vh; width: 100%; margin: unset; background: #F0F4F7; padding-left: unset; padding-right: unset;`
        : "",
    closeModalXStyle: popups.hm2 === popup
        ? `margin-right: 1rem; position: relative; top: 2rem;`
        : "",
    headingStyle: popups.hm2 === popup ? "padding-bottom: 20%;" : "",
});
const generateContent = ({ popup, template, holdupContext, fallback, }) => {
    const line1 = `<h3 style="font-family: Roboto, Arial, sans-serif; font-size: 18px; font-weight: 400; display: flex; justify-content: center; color: #000000; opacity: 1; line-height: 120%;">
          ${getTemplateText(template.line1)}
         </h3>`;
    const line2 = `<h3 style="font-family: Roboto, Arial, sans-serif; font-size: 18px; font-weight: 500; display: flex; justify-content: center; color: #000000; opacity: 1; line-height: 120%;">
         <span style="font-family: Roboto, Arial, sans-serif; font-size: 18px; font-weight: 500; color: #0289CE;">${getTemplateText(template.paragraph1Split)}</span>&nbsp;
         <span style="font-family: Roboto, Arial, sans-serif; font-size: 18px; font-weight: 500; color: #000000;">
         ${getTemplateText(template.line2)}
         </span>
      </h3>`;
    const holdupStyle = popups.hm3 === popup
        ? `background: #E4E6EB; border: none;`
        : `font-style: italic; text-decoration: underline;`;
    const holdupProps = popups.hm3 === popup ? 'role="button" class="secondary"' : "";
    const actions = `
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        width: 100%;
        max-width: 383px;
        height: 58px;
        font-weight: 600;
        font-family: Roboto, Arial, sans-serif;
        font-size: 22px;
        box-shadow: none;
        line-height: normal;
        margin-bottom: 12px;
        color: #FFFFFF;
        margin-top: 31px;
        ">${holdupContext.text}
      </button>
      <br>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          color: ${fallback.color}; 
          font-weight: normal;
          ${holdupStyle}
          font-size: 18px;
          font-family: Roboto, Arial, sans-serif;
          width: 70%;
          "
          >${fallback.title}
        </a>
        `;
    return [line1, line2, actions];
};
const desktopModalView = ({ popup, holdupContext, fallback, template, }) => {
    const { dialogStyle, articleStyle, closeModalXStyle, headingStyle } = getDialogStyles(popup);
    const content = generateContent({ popup, template, holdupContext, fallback });
    const topView = popups.hm4 === popup ? appStoreView() : "";
    const templateTitle = getTemplateText(template.title);
    const footer = getFooter$1(popup);
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                background: rgba(0,0,0,0.5) !important; 
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            <article 
            style="
            background-color: #E8F7FF;
            margin: 0px;
            background-image: url('https://cdn.onlineshoppingtools.com/hd-images/image-bg-not-close.svg');
             width: 500px;  
             height: 610px; ${articleStyle}"
             >
              <header style="padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset; border-bottom: unset; margin-bottom: 0px;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}"
                  id="holdup_close"  
                  style="background: none; 
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="height: 173px; display: flex; justify-content: center; align-items: center; margin-top: 100px;">
                <h1 style="color: #000; width: 364px; font-weight: 600; font-size: 36px; font-family: Roboto, Arial, sans-serif; line-height: normal; margin: 0px;">
                  ${templateTitle}
                </h1>
                </div>
              </header>
              ${content.join("")}
              ${footer}
            </article>
          </dialog>
        `;
};

const getFontStyle = () => `
            <style>
            /* Define font-face rules to specify font families */
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
            }
    
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
            }
  
            @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap') format('woff2');
          }
          
          @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 700;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap') format('woff2');
          }
            
            </style>
`;

const generateDesktopV2Content = ({ popup, template, holdupContext, fallback, }) => {
    const line2 = `<h2 class="m1" style="font-family: Roboto, Arial, sans-serif; font-size: 20px; font-weight: 400; color: #FFFFFF;">${getTemplateText(template.line1)}</h2>`;
    const line3 = `<h2 class="m2" style="color: #FFFFFF; font-family: Roboto, Arial, sans-serif; font-size: 20px; font-weight: 300; display: flex; justify-content: center;">
          at over&nbsp;
         <span class="m2" style="font-family: Roboto, Arial, sans-serif; font-size: 20px; font-weight: 300; color: #7FE672;">${getTemplateText(template.paragraph1Split)}</span>&nbsp;
         <span class="m2" style="font-family: Roboto, Arial, sans-serif; font-size: 20px; font-weight: 300;">
         ${getTemplateText(template.line2)}
         </span>
      </h2>`;
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const RightArrow = `<image 
      src="https://cdn.onlineshoppingtools.com/hd-images/green-arrow.svg" 
      style="width: 40.77px; height: 71.54px; position: absolute; top: -4px; right: 9px;"
      />`;
    const actions = `
    <div style="display: flex; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        color: #004360;
        width: 100%;
        max-width: 336px;
        line-height: 19px;
        height: 46px;
        font-weight: 500;
        font-size: 20px;
        box-shadow: none;
        margin-bottom: 12px;
        margin-top: 26px;
        ">
        ${RightArrow}
        ${holdupContext.text}
  
      </button>
      <br>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          color: ${fallback.color}; 
          font-weight: normal;
          font-style: normal;
          text-decoration: underline;
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif;
          width: 70%;
          "
          >${fallback.title}
        </a>
        </div>
        `;
    return [line2, line3, actions];
};
const desktopV2ModalView = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopV2Content({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const templateTitle = getTemplateText(template.title);
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                background: rgba(0,0,0,0.5) !important; 
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
              ${getFontStyle()}
            <article style="background-color: #004360;background-image: url('https://cdn.onlineshoppingtools.com/hd-images/holdup2grow.svg');margin: 0px; width: 500px;  height: 610px; 
             ">
              <header style="border-bottom: unset; margin-bottom: 28px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}" id="holdup_close" style="background: none; color: #4E4E4E; width: 31px; height: 31px;display: flex;justify-content: center;align-items: center;border: none;margin-bottom: 0px;padding: 0px;${closeModalXStyle}">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="height: 173px; display: flex; justify-content: center; align-items: center; margin-top: 70px; flex-direction: column;">
                <h1 style="color: #000; width: 364px; font-weight: 500; font-size: 48px; line-height: normal; margin: 0px; color: #FFFFFF;">${templateTitle}</h1>
                <h1 style="color: #000; width: 364px; font-weight: 500; font-size: 48px; line-height: normal; margin: 0px; color: #FFFFFF;">${getTemplateText(template.paragraph2)}</h1>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

const generateDesktopAMZWideContent = ({ popup, template, holdupContext, fallback, }) => {
    const line2 = `<h2 
    class="m1" 
    style="
    font-family: Roboto, Arial, sans-serif !important; 
    font-size: 16px; 
    font-weight: 400;
    margin-bottom: 0px;
    color: #000;
    ">${getTemplateText(template.line1)}</h2>`;
    const line3 = `
        <h2 
        class="m2" 
        style="
        font-family: Roboto, Arial, sans-serif !important; 
        font-size: 16px; 
        font-weight: 400; 
        color: #000;
        display: flex; 
        justify-content: center;
        margin-bottom: 14px;
        ">
         <span class="m2" style="font-family: Roboto, Arial, sans-serif !important; font-size: 16px; font-weight: 400; color: #000;">
         ${getTemplateText(template.line2)}
         </span>
      </h2>`;
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        color: #FFFFFF;
        width: 100%;
        max-width: 392px;
        line-height: 19px;
        height: 52px;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 15px;
        margin-top: 16px;
        font-family: Roboto, Arial, sans-serif !important;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55));
        ">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" 
          ${holdupProps}
          style="
          color: ${fallback.color}; 
          font-weight: normal;
          font-style: normal;
          text-decoration: underline;
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif !important;
          width: 70%;
          "
          >${fallback.title}
        </a>
        </div>
        `;
    const line4 = `
    <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 0px;
      padding-left: 15px;
      padding-right: 15px;
      "
    >
    <label
    style="
      color: #000;
      display: flex;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      width: 392px;
    "
    >Your email address</label>
    <input 
    placeholder="email address"
    style="
      display: flex;
      width: 392px;
      height: 48px;
      padding: 16px 17px;
      color: #A0A0A0;
      font-family: Roboto, Arial, sans-serif;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 0px;
    "
     />
    </div>`;
    return [line2, line3, line4, actions];
};
const desktopAMZWideModalView = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopAMZWideContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    const templateTitle = getTemplateText(template.title);
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            ${getFontStyle()}
            <article style="
            background-color: #FFC700;
            border-radius: 10px;
            display: flex;
            margin: 0px; 
            padding: 0px;
            width: 808px;  
            height: 504px; 
             ">
            <div style="
            background: url(https://cdn.onlineshoppingtools.com/hda/Group%20135173.svg);
            width: 325px;
            position: relative;
            display: block;
            background-size: contain;
            background-repeat: no-repeat;
            ">
            </div>
            <div 
            style="
            background: #FFFFFF;
            width: 469px;
            ">
            <header 
            style="
            border-bottom: unset; 
            margin-bottom: 0px; 
            padding-bottom: 0px; 
            padding-top: 15px;
             padding-right: 15px; 
             background-color: unset;
             ">
            <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
            <a 
               href="${fallback.url}" 
               id="holdup_close" 
               style="background: none; 
               color: #4E4E4E; 
               width: 31px; 
               height: 31px;
               display: flex;
               justify-content: center;
               align-items: center;
               border: none;
               margin-bottom: 0px;
               padding: 0px;
               ${closeModalXStyle}
               ">
            <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
            </a>
            </div>
             <div style="
              display: flex; 
              justify-content: center;
               align-items: center; 
               flex-direction: column;
               margin-bottom: 18px;
               ">
             <h1 style="
             color: #B2B0B0; 
             text-transform: uppercase;
             width: 364px; 
             font-weight: 700; 
             font-size: 26px; 
             line-height:
              normal; margin: 0px;
              font-family: Poppins, Arial, Sans-serif;
              margin-bottom: 10px;
              ">${templateTitle}</h1>
             <h2 style="
             color: #000; 
             width: 364px; 
             font-weight: 700; 
             font-size: 35px; 
             line-height: normal; 
             margin: 0px;"
             font-family: Poppins, Arial, Sans-serif;
             >${getTemplateText(template.subtitle)}</h2>
             </div>
           </header>
           ${content.join("")}
            </div>
            </article>
          </dialog>
        `;
};

const generateDesktopIterationViews = ({ popup, template, holdupContext, fallback, }) => {
    var _a, _b, _c, _d, _e, _f;
    const requiresHdiStyling = popup === "hdi9";
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1Split = template.paragraph1Split;
    const tempParagraph2 = template.paragraph2;
    const subHeaderStyled = `
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      font-style: normal;
      line-height: 120%;
      ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    `;
    const paragraph1 = (h) => {
        var _a;
        return `<h${h} class="p1" style="color: #959ea4;">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h${h}>`;
    };
    const paragraph1Split = `<h2
      style="
      color: ${(_a = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.color) !== null && _a !== void 0 ? _a : ""};
      text-align: center;
      font-family: Roboto, Arial, Sans-serif;
      font-size: ${(_b = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.fontSize) !== null && _b !== void 0 ? _b : ""};
      font-style: normal;
      font-weight: 700;
      line-height: 133%;
      opacity: 1;
      "
      >${(_c = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.text) !== null && _c !== void 0 ? _c : ""}</h2>`;
    const p2 = `<h3
      style="
      ${tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.style};
      font-family: Roboto, Arial, sans-serif;
      line-height: 120%;
      opacity: 1;
      ">
      ${(_d = tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.text) !== null && _d !== void 0 ? _d : ""}
      </h3>`;
    const line1 = `<h2
      style="${subHeaderStyled}"
      >${(_e = tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text) !== null && _e !== void 0 ? _e : ""}
      </h2>`;
    const line2 = `<h2
      style="
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      ${tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.style}
      "
      >${(_f = tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.text) !== null && _f !== void 0 ? _f : ""}</h2>`;
    const actions = `
      <button id="hold_up_get_coupons" 
      style="
      box-shadow: none;
      height: 64px;
      border-radius: 8px;
      font-family: Roboto, Arial, sans-serif;
      ${holdupContext.style}
      ">
      ${holdupContext.text}</button>
        <br>
        <a 
        href="${fallback.url}" 
        style="
        color: ${fallback.color}; 
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        font-family: Roboto, Arial, Sans-serif;
        ${requiresHdiStyling ? "text-decoration: none;" : ""}
        "
        >${fallback.title}</a>
        `;
    const content = popup == "wtfox"
        ? [
            template.paragraph2,
            paragraph1(4),
            line1,
            line2,
            paragraph1Split,
            actions,
        ]
        : [paragraph1(3), paragraph1Split, p2, line1, line2, actions];
    return content;
};
const generateDesktopIteration = ({ popup, holdupContext, fallback, template, }) => {
    var _a;
    const content = generateDesktopIterationViews({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const isDiffBackground = ["hdi5", "hdi6", "hdi7", "hdi11"].includes(popup);
    const requiresHdiStyling = popup === "hdi9";
    return `
        <dialog open data-theme="light"  ${isDiffBackground && `style="background: #212121 !important;"`}>
        <style>
        /* Define font-face rules to specify font families */
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
        }
  
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
        }
  
        </style>
          <article style="width: ${[
        popups.t1,
        popups.t2,
        popups.p3,
        popups.p4,
        popups.p5,
        popups.p6,
        popups.lbd1,
        popups.lbd2,
    ].includes(popup)
        ? "auto"
        : "643px"}">
            <header class="headings" style="padding: 12px 14px; margin-bottom: -12px">
            <div style="display: flex; justify-content: flex-end; align-items: center;">
            ${requiresHdiStyling
        ? `<span style="width: 31px; height: 31px;" />`
        : `
            <a 
               href="${fallback.url}" 
               id="holdup_close" 
               style="background: none; 
               color: #4E4E4E; 
               width: 31px; 
               height: 31px;
               display: flex;
               justify-content: center;
               align-items: center;
               border: none;
               margin-bottom: 0px;
               padding: 0px;
               ">
            <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 42px; height: 42px;" />
            </a>
            `}
            </div>
              <h1 
              style="
              color: ${title.color};
              text-align: center;
              font-family: Roboto, Arial, Sans-serif;
              font-size: ${title.fontSize};
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              margin-bottom: 0px;
              margin-top: 16px;
              ${title === null || title === void 0 ? void 0 : title.style}
              "
              >${title.text}</h1>
              <div 
              style="
              display: flex;
              justify-content: center;
              ">
              <h2 
              style="
              color: ${subtitle.color}; 
              text-align: center; 
              font-family: ${(_a = subtitle.fontFamily) !== null && _a !== void 0 ? _a : "Roboto, Arial, Sans-serif;"}
              font-size: ${subtitle.fontSize};
              font-style: normal;
              font-weight: 700;
              width: 500px;
              line-height: 133%;
              margin-bottom: ${popups.isHDIWide(popup) ? "0px" : "32px;"};
              margin-top: 16px;
              ${subtitle === null || subtitle === void 0 ? void 0 : subtitle.style}
              ">${subtitle.text}</h2>
              </div>
            </header>
            ${content.join("")}
            ${!popups.isHDIWide(popup)
        ? `
            <footer style="background: #F1F1F1;">
              <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg" style="width: 146px; height: 28px;"/>
              <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg" style="width: 79px; height: 20px;"/>
              <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg" style="width: 98px; height: 18px;"/>
            </footer>`
        : ""}
          </article>
        </dialog>
      `;
};

const linkCss = () => `
color: #4E4E4E; 
width: 31px; 
height: 31px;
display: flex;
justify-content: center;
align-items: center;
border: none;
margin-bottom: 0px;
padding: 0px;
position: fixed;
top: 14px;
right: 14px;`;
const generateDesktopWideContent = ({ popup, template, holdupContext, fallback, }) => {
    const line2 = `<h2 class="m1" style="font-family: Roboto, Arial, sans-serif; font-size: 30px; font-weight: 300; color: #FFFFFF;">${getTemplateText(template.line2)}</h2>`;
    const line3 = `<h2 class="m2" style="color: #FFFFFF; font-family: Roboto, Arial, sans-serif; font-size: 30px; font-weight: 300; display: flex; justify-content: center;">
         <span style="font-family: Roboto, Arial, sans-serif; font-size: 30px; font-weight: 300; color: ${popups.hd3 == popup ? "#FF8B3C" : "#B2CE00"};">${getTemplateText(template.paragraph1Split)}</span>&nbsp;${getTemplateText(template.line2)}
      </h2>`;
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const LeftArrow = popup === "hd4"
        ? `<image 
      src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/03/left-arrow.svg" 
      style="width: 57.69px; height: 101.2px; position: absolute; top: -44px; right: 565px;"
      />`
        : "";
    const RightArrow = popup === "hd3"
        ? `<image 
      src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/03/right-arrow.svg" 
      style="width: 57.69px; height: 101.2px; position: absolute; top: -44px; right: -65px;"
      />`
        : "";
    const actions = `
      <div style="display: flex; position: relative; flex-direction: column; width: 100%; align-items: center;">
      
      <button 
        id="hold_up_get_coupons" 
        style="
        background: ${popups.hd3 == popup
        ? "linear-gradient(90deg, rgba(253,76,70,1) 16%, rgba(255,139,60,1) 71%)"
        : holdupContext.color};
        color: ${popups.hd3 == popup ? "#FFFFFF" : "#293158"};;
        width: 100%;
        max-width: 558px;
        line-height: 19px;
        height: 70px;
        font-weight: 600;
        font-family: Roboto, Arial, sans-serif;
        font-size: 26px;
        font-style: normal;
        box-shadow: none;
        margin-bottom: 24px;
        margin-top: 26px;
        position: relative;
        transition: background-color 0.3s, color 0.3s;
        border: ${popups.hd3 == popup ? "none" : ""};
        "
        onmouseover="this.style.background = ${popups.hd3 == popup
        ? "'linear-gradient(90deg,  rgba(255,139,60,1) 16%, rgba(253,76,70,1) 71%)'"
        : holdupContext.color}"
        onmouseout="this.style.background = ${popups.hd3 == popup
        ? "'linear-gradient(90deg, rgba(253,76,70,1) 16%, rgba(255,139,60,1) 71%)'"
        : holdupContext.color}"
        >
        ${LeftArrow}
        ${RightArrow}
        ${holdupContext.text}
      </button>
      <br>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          color: ${fallback.color}; 
          font-weight: 400;
          font-style: normal;
          line-height: 29px;
          text-decoration: underline;
          font-size: 22px;
          font-family: Roboto, Arial, sans-serif;
          width: 70%;
          "
          >${fallback.title}
        </a>
        </div>
        `;
    return [line2, line3, actions];
};
const desktopWideModalView = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopWideContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const templateTitle = getTemplateText(template.title);
    const BottomLogosImages = popup === "hd3"
        ? `<image 
        src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/03/all-deskto-logos.svg" 
        style="margin-top: 44px; width: 100%; max-width: 1066px; height: 60.33px;"
        />`
        : "";
    const TopLogosImages = popup === "hd4"
        ? `<image 
        src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/03/all-deskto-logos.svg" 
        style="width: 100%; max-width: 1066px; height: 60.33px;"
        />`
        : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                background: ${popups.hd3 == popup
        ? "rgba(0, 0, 0, 0.48) !important"
        : "rgba(41, 49, 88, 0.48) !important"}; 
                display: flex; 
                flex-direction: column;
                padding: 0px;
              ">
            ${topView}
            <article style="background: none; width: 100%; max-width: 100%;  height: 100vh;  margin: 0px;  border-radius: 0px; display: flex; justify-content: center; align-items: center; flex-direction: column;
             ">
             <div>
             ${TopLogosImages}
             </div>
              <header style="border-bottom: unset; margin-bottom: 20px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}" 
                  style="background: ${popups.hd3 == popup ? "#FFFFFF" : "#C4C4C4"}; 
                  ${linkCss()}
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/clear.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-top: 70px; flex-direction: column;">
                <h1 style="color: #000; width: 564px; font-weight: 500; font-size: 75px; font-family: Roboto, Arial, sans-serif; line-height: 80px; margin: 0px; color: #FFFFFF;">${templateTitle}</h1>
                </div>
              </header>
              ${content.join("")}
              ${BottomLogosImages}
            </article>
          </dialog>
        `;
};

const getFooter = (footer) => {
    if (!footer) {
        return `
      <footer style="margin-top: 20px;">
        <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg"/>
        <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg"/>
        <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg"/>
      </footer>`.trim();
    }
    return footer.text
        ? `<footer>
    <h6>${footer.text}</h6>
  </footer>`
        : "";
};
const views$1 = ({ popup, template, holdupContext, fallback, }) => {
    var _a;
    const requiresHdiStyling = popup === "hdi14" || popup === "hdi13" || popup === "1";
    const paragraph1 = (h) => `<h${h} class="p1">${typeof template.paragraph1 === "string" ? template.paragraph1 : ""}</h${h}>`;
    const paragraph1Split = `<h3 class="ps">${typeof template.paragraph1Split === "string" ? template.paragraph1Split : ""}</h3>`;
    const paragraph2 = `<h4 class="p2" style="margin-top: 22px;">${typeof template.paragraph2 === "string" ? template.paragraph2 : ""}</h4>`;
    const line1 = `<h2 class="m1" style="margin-bottom: -12px;">${typeof template.line1 === "string" ? template.line1 : ""}</h2>`;
    const line2 = `<h2 class="m2">${typeof template.line2 === "string" ? template.line2 : ""}</h2>`;
    const hdi14ButtonStyle = requiresHdiStyling ? `
  background: #0276B1;
   width: 569px; 
   font-size: 25px;
   font-weight: 600; 
   line-height: 29px; 
   height: 69px; 
   margin-top: 44px;
  border-radius: 12px;
  ` : "";
    const hdi14LinkStyle = requiresHdiStyling ? `
    font-size: 19px;
    text-decoration: none;
    color: #9CA2AA;
    font-family: Roboto, Arial, sans-serif !important;
    width: 70%;
  ` : `
  color: ${fallback.color};
  font-weight: bold; 
  font-family: 'Poppins' !important;
  `;
    const actions = `
      <button 
      id="hold_up_get_coupons" 
      style="
      background: ${holdupContext.color};
      box-shadow: ${(_a = holdupContext.shadow) !== null && _a !== void 0 ? _a : "none"};
      font-size: 0.9rem;
      font-family: Roboto, Arial, sans-serif !important;
      ${hdi14ButtonStyle}
      "
      >
      ${holdupContext.text}</button>
        <br>
        <a href="${fallback.url}" id="holdup_dismiss"
        style="
      ${hdi14LinkStyle}
      ">${fallback.title}</a>
        `;
    const content = popup == "wtfox"
        ? [paragraph2, paragraph1(4), line1, line2, paragraph1Split, actions]
        : [paragraph1(3), paragraph1Split, paragraph2, line1, line2, actions];
    return content;
};
const view = ({ popup, holdupContext, fallback, template, footer, }) => {
    var _a;
    const requiresHdiStyling = popup === "hdi14" || popup === "hdi13" || popup === "1";
    const content = views$1({ popup, template, holdupContext, fallback });
    const isValidObject = typeof template.title === "object" && template.title !== null;
    const templateTitle = (_a = (isValidObject
        ? template.title.text
        : template.title)) !== null && _a !== void 0 ? _a : "";
    return `
        <dialog open data-theme="light">
          ${getFontStyle()}
          <article style="margin-top: 0px !important; margin-bottom: 0px !important;">
            <header class="headings" style="margin-bottom: -12px; padding-top: 15px; padding-bottom: 15px;">
            <div style="display: flex; justify-content: flex-end; align-items: center;">
              ${requiresHdiStyling
        ? `<span style="width: 31px; height: 31px;" />`
        : `
                              <a 
               href="${fallback.url}" 
               id="holdup_close" 
               style="background: none; 
               color: #4E4E4E; 
               width: 31px; 
               height: 31px;
               display: flex;
               justify-content: center;
               align-items: center;
               border: none;
               margin-bottom: 0px;
               padding: 0px;
               ">
             <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 42px; height: 42px;" />
            </a>
                  `}
            </div>
              <h1 class="strong">${typeof templateTitle === "string"
        ? templateTitle
        : JSON.stringify(templateTitle)}</h1>
              <h2 class="strong" style="font-weight: bold; font-family: 'Poppins' !important">${typeof template.subtitle === "string"
        ? template.subtitle
        : JSON.stringify(template.subtitle)}</h2>
            </header>
            ${content.join("")}
            ${getFooter(footer)}
          </article>
        </dialog>
      `;
};

const generateDesktopAMZContent = ({ popup, template, holdupContext, fallback, }) => {
    const line2 = buildStandardHeading(template.line1);
    const line3 = buildCenteredHeading(template.line2);
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        color: #FFFFFF;
        width: 100%;
        max-width: 392px;
        line-height: 19px;
        height: 52px;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 15px;
        margin-top: 26px;
        font-family: Roboto, Arial, sans-serif;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55));
        ">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          color: ${fallback.color}; 
          font-weight: normal;
          font-style: normal;
          text-decoration: underline;
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif;
          width: 70%;
          "
          >${fallback.title}
        </a>
        </div>
        `;
    const line4 = `
    <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 0px;
    "
    >
    <label
    style="
      color: #000;
      display: flex;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      width: 392px;
    "
    >Your email address</label>
    <input 
    placeholder="email address"
    style="
      display: flex;
      width: 392px;
      height: 48px;
      padding: 16px 17px;
      color: #A0A0A0;
      font-family: Roboto, Arial, sans-serif;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 0px;
    "
     />
    </div>`;
    return [line2, line3, line4, actions];
};
const desktopAMZModalView = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopAMZContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    const templateTitle = getTemplateText(template.title);
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
              ${getFontStyle()}
            <article style="
            background-color: #FFFFFF;
            border-radius: 10px;
            margin: 0px; 
            width: 581px;  
            height: 683px; 
             ">
              <header style="border-bottom: unset; margin-bottom: 0px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}"
                  id="holdup_close" 
                  style="background: none; 
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
               <div style="
               display: flex;
               width: 100%;
               justify-content: center;
               margin-bottom: 18px;
               ">
               <img src="https://cdn.onlineshoppingtools.com/hda/amazon-top-image.svg" style="width: 134.29px; height: 116.036px;" />
               </div>
                <div style="height: 173px; display: flex; justify-content: center; align-items: center; margin-top: 0px; flex-direction: column;">
                <h1 style="
                color: #B1B1B1; 
                width: 364px; 
                font-weight: 600; 
                font-size: 23px; 
                line-height:
                 normal; margin: 0px;
                 font-family: Poppins, Arial, Sans-serif;
                 margin-bottom: 5px;
                 ">${templateTitle}</h1>
                <h2 style="
                color: #000; 
                width: 364px; 
                font-weight: 700; 
                font-size: 40px; 
                line-height: normal; 
                margin: 0px;"
                font-family: Poppins, Arial, Sans-serif;
                >${getTemplateText(template.subtitle)}</h2>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

// Helper function to get font size based on popup type
const getCountdownFontSize = (popup) => {
    const smallFontPopups = [
        popups.hduo,
        popups.wlcm,
        popups.th2,
        popups.hduh,
        popups.hduog,
        popups.hduhg,
        popups.md1,
        popups.lbd3,
    ];
    return smallFontPopups.includes(popup) ? "38px" : "50px";
};
const generateDesktopTimingContent = ({ popup, template, holdupContext, fallback, }) => {
    let line5 = "";
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1 = template.paragraph1;
    // Set the date we're counting down to
    const targetDate = new Date().getTime() + 10 * 60 * 1000;
    const isWelcome = popups.isWelcome(popup);
    // Update the countdown every 1 second
    const countdown = setInterval(() => {
        let timefontColor = "#E68A00";
        if (popup === popups.lbd3) {
            timefontColor = "#DB0000";
        }
        else if (popup === popups.md1) {
            timefontColor = "#0c344c";
        }
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the target date
        const distance = targetDate - now;
        // Time calculations for days, hours, minutes, and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Add leading zero to hours, minutes, and seconds if they are less than 10
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.innerHTML = `
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: ${getCountdownFontSize(popup)};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedHours}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: ${getCountdownFontSize(popup)};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedMinutes}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: ${getCountdownFontSize(popup)};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedSeconds}</span>
        </div>
        `;
        }
        if (distance <= 1) {
            clearInterval(countdown);
            window.location.href = fallback.url;
        }
    }, 1000);
    const line2 = `<h2 
    class="m1" 
    style="
    font-family: Roboto, Arial, sans-serif !important; 
    font-weight: 400; 
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    ">
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text}
    </h2>`;
    const line3 = `
        <h2 
        class="m2" 
        style="
        font-family: Roboto, Arial, sans-serif !important; 
        font-weight: 400; 
        display: flex; 
        justify-content: center; 
        ${tempLine2.style}
        ">
        ${tempLine2.text}
      </h2>`;
    if (tempParagraph1) {
        line5 = `
      <h2 
      class="m2" 
      style="
      font-family: Roboto, Arial, sans-serif !important; 
      font-weight: 400; 
      display: flex; 
      justify-content: center; 
      ${tempParagraph1.style}
      ">
      ${tempParagraph1.text}
    </h2>`;
    }
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; margin-top: 30px; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="${isWelcome ? "welcome_get_coupons" : "hold_up_get_coupons"}" 
        style="background-color: ${holdupContext.color}; 
        border-color: ${holdupContext.color};
        color: #FFFFFF;
        width: 100%;
        max-width: ${popup === popups.hdub ? "392px" : "495px"};
        line-height: 19px;
        height: ${popup === popups.hdub ? "52px" : "64px"};
        font-weight: 700;
        font-size: 23px;
        margin-bottom: ${popup === popups.hduo ||
        popup === popups.wlcm ||
        popup === popups.hduog
        ? "30px"
        : "29px"};
        font-family: Roboto, Arial, sans-serif !important;
        filter: ${popup === popups.hdub
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55))"
        : ""};
        ">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" id="${isWelcome ? "welcome_dismiss" : "holdup_dismiss"} 
          ${holdupProps}
          style="
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif !important;
          width: 70%;
          ${fallback.style}
          "
          >${fallback.title}
        </a>
        </div>
        `;
    let timingTemplate = `
    <div
    id="countdown"
    style="
    display: flex;
    justify-content:center;
    margin-top: ${popup === popups.hduh ||
        popup == popups.th2 ||
        popup === popups.hduhg ||
        popup == popups.md1
        ? "0px"
        : "21px"};
    padding-top: 10px;
    padding-bottom: 10px;
    "
    >
  
    </div>
    `;
    let line4 = `
    <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 0px;
    "
    >
    <label
    style="
      color: #000;
      display: flex;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      width: 392px;
    "
    >Your email address</label>
    <input 
    placeholder="email address"
    style="
      display: flex;
      width: 392px;
      height: 48px;
      padding: 16px 17px;
      color: #A0A0A0;
      font-family: Roboto, Arial, sans-serif !important;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 0px;
    "
     />
    </div>`;
    if (popup !== popups.hdub) {
        line4 = "";
    }
    if (popup === popups.hduo || popup === popups.wlcm) {
        timingTemplate = "";
    }
    const element = [line2, line3, line5, timingTemplate, line4, actions];
    return element;
};
const desktopTimingModalView = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopTimingContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const isWelcome = popups.isWelcome(popup);
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            <style>
            /* Define font-face rules to specify font families */
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
            }
    
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
            }
  
            @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap') format('woff2');
          }
          
          @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 700;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap') format('woff2');
          }
            
            </style>
            <article style="
            background-color: #FFFFFF;
            border-radius: 10px;
            margin: 0px; 
            width: 560px;  
            height: auto; 
             ">
              <header style="border-bottom: unset; margin-bottom: 0px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}" 
                  id="${isWelcome ? "welcome_close" : "holdup_close"}" 
                  style="background: none; 
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="
                height: ${popup === popups.hdub ? "173px" : "auto"}; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                margin-top: 0px;
                flex-direction: column;
                margin-bottom: ${popup === popups.hdub ? "0px" : "30px"};
                 ">
                <h1 style="
                width: 364px; 
                font-weight: 600;  
                line-height: normal;
                 ${title.style}
                 ">${title.text}</h1>
                <h2 style="
                font-weight: 700;  
                line-height: normal; 
                margin: 0px;
                ${subtitle.style}
                "
                >${subtitle.text}</h2>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

const generateDynamicTemplateViews = ({ popup, template, holdupContext, fallback, }) => {
    var _a, _b, _c, _d, _e, _f;
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1Split = template.paragraph1Split;
    const tempParagraph2 = template.paragraph2;
    const subHeaderStyled = `
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      font-style: normal;
      line-height: 120%;
      ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    `;
    const paragraph1 = (h) => {
        var _a;
        return `<h${h} class="p1" style="color: #959ea4;">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h${h}>`;
    };
    const paragraph1Split = `<h2
      style="
      color: ${(_a = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.color) !== null && _a !== void 0 ? _a : ""};
      text-align: center;
      font-family: Roboto, Arial, Sans-serif;
      font-size: ${(_b = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.fontSize) !== null && _b !== void 0 ? _b : ""};
      font-style: normal;
      font-weight: 700;
      line-height: 133%;
      opacity: 1;
      "
      >${(_c = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.text) !== null && _c !== void 0 ? _c : ""}</h2>`;
    const p2 = `<h3
      style="
      ${tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.style};
      font-family: Roboto, Arial, sans-serif;
      line-height: 120%;
      opacity: 1;
      ">
      ${(_d = tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.text) !== null && _d !== void 0 ? _d : ""}
      </h3>`;
    const line1 = `<h2
      style="${subHeaderStyled}"
      >${(_e = tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text) !== null && _e !== void 0 ? _e : ""}
      </h2>`;
    const line2 = `<h2
      style="
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      ${tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.style}
      "
      >${(_f = tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.text) !== null && _f !== void 0 ? _f : ""}</h2>`;
    const actions = `
      <button id="hold_up_get_coupons" 
      style="
      box-shadow: none;
      height: 64px;
      border-radius: 8px;
      font-family: Roboto, Arial, sans-serif;
      ${holdupContext.style}
      ">
      ${holdupContext.text}</button>
        <br>
        <button
        style="
        color: ${fallback.color}; 
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        font-family: Roboto, Arial, Sans-serif;
        background: none;
        box-shadow: none;
        padding: 0px;
        margin: 0px;
        width: auto;
        "
        onclick="window.closeGeneralModal()"
        >${fallback.title}</button>
        `;
    const content = popup == "wtfox"
        ? [
            template.paragraph2,
            paragraph1(4),
            line1,
            line2,
            paragraph1Split,
            actions,
        ]
        : [paragraph1(3), paragraph1Split, p2, line1, line2, actions];
    return content;
};
const generateDynamicTemplate = ({ popup, holdupContext, fallback, template, }) => {
    var _a;
    const tempTitle = template.title;
    const subtitle = template.subtitle;
    const title = template.hideHeader ? "" : tempTitle.text;
    window.closeGeneralModal();
    document.body.style.overflow = "hidden";
    if (window.displayButtonContainer) {
        window.displayButtonContainer("none");
    }
    const content = generateDynamicTemplateViews({
        popup,
        template,
        holdupContext,
        fallback,
    });
    return `
        <dialog open data-theme="light" style="background: ${template.modalBackground}">
        <style>
        /* Define font-face rules to specify font families */
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
        }
  
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
        }
  
        </style>
          <article style="width: ${[popups.t3, popups.t1a].includes(popup) ? "auto" : "643px"}">
            <header class="headings" style="padding: 12px 14px; margin-bottom: -12px">
            <div style="display: flex; justify-content: flex-end; align-items: center;">
            <button 
               id="holdup_close" 
               style="background: none; 
               color: #4E4E4E; 
               width: 31px; 
               height: 31px;
               display: flex;
               justify-content: center;
               align-items: center;
               border: none;
               margin-bottom: 0px;
               padding: 0px;
               
               onclick="window.closeGeneralModal()"
               ">
            <img 
            src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" 
            style="width: 42px; height: 42px;" 
            />
            </button>
            </div>
              <h1 
              style="
              color: ${tempTitle.color};
              text-align: center;
              font-family: Roboto, Arial, Sans-serif;
              font-size: ${tempTitle.fontSize};
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              margin-bottom: 0px;
              margin-top: 16px;
              ${tempTitle === null || tempTitle === void 0 ? void 0 : tempTitle.style}
              "
              >${title}</h1>
              <div 
              style="
              display: flex;
              justify-content: center;
              ">
              <h2 
              style="
              color: ${subtitle.color}; 
              text-align: center; 
              font-family: ${(_a = subtitle.fontFamily) !== null && _a !== void 0 ? _a : "Roboto, Arial, Sans-serif;"}
              font-size: ${subtitle.fontSize};
              font-style: normal;
              font-weight: 700;
              width: 500px;
              line-height: 133%;
              margin-bottom: 0px;
              margin-top: 16px;
              ${subtitle === null || subtitle === void 0 ? void 0 : subtitle.style}
              ">${subtitle.text}</h2>
              </div>
            </header>
            ${content.join("")}
          </article>
        </dialog>
      `;
};

const generateTastiBarTemplateViews = ({ popup, template, holdupContext, fallback, }) => {
    var _a, _b, _c, _d, _e, _f;
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1Split = template.paragraph1Split;
    const tempParagraph2 = template.paragraph2;
    const subHeaderStyled = `
    text-align: center;
    font-family: Poppins, Arial, Sans-serif;
    font-style: normal;
    line-height: 120%;
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
  `;
    const paragraph1 = (h) => {
        var _a;
        return `<h${h} class="p1" style="color: #959ea4;">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h${h}>`;
    };
    const paragraph1Split = `<h2
    style="
    color: ${(_a = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.color) !== null && _a !== void 0 ? _a : ""};
    text-align: center;
    font-family: Roboto, Arial, Sans-serif;
    font-size: ${(_b = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.fontSize) !== null && _b !== void 0 ? _b : ""};
    font-style: normal;
    font-weight: 700;
    line-height: 133%;
    opacity: 1;
    "
    >${(_c = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.text) !== null && _c !== void 0 ? _c : ""}</h2>`;
    const p2 = `<h3
    style="
    ${tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.style};
    font-family: Roboto, Arial, sans-serif;
    line-height: 120%;
    opacity: 1;
    ">
    ${(_d = tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.text) !== null && _d !== void 0 ? _d : ""}
    </h3>`;
    const line1 = `<h2
    style="${subHeaderStyled}"
    >${(_e = tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text) !== null && _e !== void 0 ? _e : ""}
    </h2>`;
    const line2 = `<h2
    style="
    text-align: center;
    font-family: Poppins, Arial, Sans-serif;
    ${tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.style}
    "
    >${(_f = tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.text) !== null && _f !== void 0 ? _f : ""}</h2>`;
    const actions = `
    <button id="hold_up_get_coupons" 
    style="
    box-shadow: none;
    height: 64px;
    border-radius: 8px;
    font-family: Roboto, Arial, sans-serif;
    ${holdupContext.style}
    ">
    ${holdupContext.text}</button>
      <br>
      <button
      style="
      color: ${fallback.color}; 
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      font-family: Roboto, Arial, Sans-serif;
      background: none;
      box-shadow: none;
      padding: 0px;
      margin: 0px;
      width: auto;
      "
      onclick="window.closeGeneralModal()"
      >${fallback.title}</button>
      `;
    const content = popup == "wtfox"
        ? [
            template.paragraph2,
            paragraph1(4),
            line1,
            line2,
            paragraph1Split,
            actions,
        ]
        : [paragraph1(3), paragraph1Split, p2, line1, line2, actions];
    return content;
};
const generateTastiBarTemplate = ({ popup, holdupContext, fallback, template, }) => {
    var _a;
    const tempTitle = template.title;
    const subtitle = template.subtitle;
    const title = template.hideHeader ? "" : tempTitle.text;
    window.closeGeneralModal();
    const content = generateTastiBarTemplateViews({
        popup,
        template,
        holdupContext,
        fallback,
    });
    return `
      <dialog open data-theme="light" style="background: ${template.modalBackground}">
      <style>
      /* Define font-face rules to specify font families */
      @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
      }
      @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
      }
      @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
      }

      @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
      }
      @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
      }
      @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
      }

      </style>
        <article style="width: ${[popups.t3, popups.t1a].includes(popup) ? "auto" : "643px"}">
          <header class="headings" style="padding: 12px 14px; margin-bottom: -12px">
          <div style="display: flex; justify-content: flex-end; align-items: center;">
          <button 
             id="holdup_close" 
             style="background: none; 
             color: #4E4E4E; 
             width: 31px; 
             height: 31px;
             display: flex;
             justify-content: center;
             align-items: center;
             border: none;
             margin-bottom: 0px;
             padding: 0px;
             
             onclick="window.closeGeneralModal()"
             ">
          <img 
          src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" 
          style="width: 42px; height: 42px;" 
          />
          </button>
          </div>
            <h1 
            style="
            color: ${tempTitle.color};
            text-align: center;
            font-family: Roboto, Arial, Sans-serif;
            font-size: ${tempTitle.fontSize};
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 0px;
            margin-top: 16px;
            ${tempTitle === null || tempTitle === void 0 ? void 0 : tempTitle.style}
            "
            >${title}</h1>
            <div 
            style="
            display: flex;
            justify-content: center;
            ">
            <h2 
            style="
            color: ${subtitle.color}; 
            text-align: center; 
            font-family: ${(_a = subtitle.fontFamily) !== null && _a !== void 0 ? _a : "Roboto, Arial, Sans-serif;"}
            font-size: ${subtitle.fontSize};
            font-style: normal;
            font-weight: 700;
            width: 500px;
            line-height: 133%;
            margin-bottom: 0px;
            margin-top: 16px;
            ${subtitle === null || subtitle === void 0 ? void 0 : subtitle.style}
            ">${subtitle.text}</h2>
            </div>
          </header>
          ${content.join("")}
        </article>
      </dialog>
    `;
};

const rangeValues = [
    {
        rangeId: 1,
        months: 1,
        saving: 131,
        bg: "linear-gradient(90deg, #0073AE 0%, #D9D9D9 0%)",
    },
    {
        rangeId: 20.8,
        months: 5,
        saving: 655,
        bg: "linear-gradient(90deg, #0073AE 20%, #D9D9D9 0%)",
    },
    {
        rangeId: 40.6,
        months: 10,
        saving: "1,310",
        bg: "linear-gradient(90deg, #0073AE 40%, #D9D9D9 0%)",
    },
    {
        rangeId: 60.4,
        months: 15,
        saving: "1,965",
        bg: "linear-gradient(90deg, #0073AE 60%, #D9D9D9 0%)",
    },
    {
        rangeId: 80.2,
        months: 20,
        saving: "2,620",
        bg: "linear-gradient(90deg, #0073AE 80%, #D9D9D9 0%)",
    },
    {
        rangeId: 100,
        months: 25,
        saving: "3,275",
        bg: "linear-gradient(90deg, #0073AE 100%, #D9D9D9 0%)",
    },
];
const line4 = `
<div
id="range-slider-container"
style="
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 0px;
"
>
</div>`;
const line5 = `
<div
style="
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 0px;
"
>
<div
id="amount-container"
style="
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0px 40px;
"
>
<div
id="monthly-purchases"
>
<p
style="
  color: #000;
  font-family: Roboto, Arial, sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
"
id="month-output"
>1</p>
<p
style="
color: #000;
text-align: center;
font-family: inherit;
font-size: 16px;
font-style: normal;
font-weight: 400;
"
>Monthly Purchases</p>
</div>
<div
id="annual-savings"
>
<p
style="
color: #0289CE;
font-family: Roboto, Arial, sans-serif;
font-size: 42px;
font-style: normal;
font-weight: 400;
"
id="saving-output"
>$131</p>
<p
style="
  color: #000;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  "
>Est. Annual Savings</p>
</div>
</div>
<div 
id="bottom-container"
style="
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 38px;
"
>
<p
style="
  color: #BCBCBC;
  text-align: center;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400; 
"
>Estimated Annual Savings when savings are found</p>
</div>
</div>`;
const generateDesktopRangeSliderContent = ({ popup, holdupContext, fallback, }) => {
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; margin-top: 30px; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button id="hold_up_get_coupons" style="background-color: ${holdupContext.color}; border-color: ${holdupContext.color};color: #FFFFFF;width: 100%;max-width: ${popup === popups.hdub ? "392px" : "495px"};line-height: 19px;height: ${popup === popups.hdub ? "52px" : "64px"};font-weight: 700;font-size: 23px;margin-bottom: ${popup === popups.hduo || popup === popups.hduog ? "30px" : "29px"};
        font-family: Roboto, Arial, sans-serif !important;
        filter: ${popup === popups.hdub
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55))"
        : ""};">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style=" font-size: 16px; font-family: Roboto, Arial, sans-serif !important; width: 70%; ${fallback.style}">${fallback.title}</a>
        </div>
        `;
    const inputRange = document.createElement("input");
    if (inputRange) {
        inputRange.type = "range";
        inputRange.id = "sl-range-element";
        inputRange.min = "1";
        inputRange.max = "100";
        inputRange.step = "19.8";
        inputRange.value = "1";
        inputRange.classList.add("range-slider");
        inputRange.style.background =
            "linear-gradient(90deg, #0073AE 0%, #D9D9D9 0%)";
    }
    const element = [line4, line5, actions];
    setTimeout(() => {
        const rangeElementContainer = document.querySelector("#range-slider-container");
        rangeElementContainer === null || rangeElementContainer === void 0 ? void 0 : rangeElementContainer.append(inputRange);
        const monthOutput = document.querySelector("#month-output");
        const savingOutput = document.querySelector("#saving-output");
        inputRange.addEventListener("input", (event) => {
            var _a, _b, _c, _d;
            const value = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
            const rangeValue = rangeValues.find((item) => item.rangeId == Number(value));
            if (monthOutput) {
                monthOutput.textContent = `${(_b = rangeValue === null || rangeValue === void 0 ? void 0 : rangeValue.months) !== null && _b !== void 0 ? _b : ""}`;
            }
            if (savingOutput) {
                savingOutput.textContent = `$ ${(_c = rangeValue === null || rangeValue === void 0 ? void 0 : rangeValue.saving) !== null && _c !== void 0 ? _c : ""}`;
            }
            inputRange.style.background = (_d = rangeValue === null || rangeValue === void 0 ? void 0 : rangeValue.bg) !== null && _d !== void 0 ? _d : "";
        });
    }, 1000);
    return element;
};
const desktopRangeSliderModalView = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopRangeSliderContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            ${getFontStyle()}
            <article style="
            background-color: #FFFFFF;
            border-radius: 10px;
            margin: 0px; 
            width: 560px;  
            height: auto; 
             ">
              <header style="border-bottom: unset; margin-bottom: 0px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}" 
                  id="holdup_close" 
                  style="background: none; 
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="
                height: ${popup === popups.hdub ? "173px" : "auto"}; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                margin-top: 0px;
                flex-direction: column;
                margin-bottom: ${popup === popups.hdub ? "0px" : "30px"};
                 ">
                <h1 style="
                width: 364px; 
                font-weight: 600;  
                line-height: normal;
                 ${title.style}
                 ">${title.text}</h1>
                <h2 style="
                font-weight: 700;  
                line-height: normal; 
                margin: 0px;
                ${subtitle.style}
                "
                >${subtitle.text}</h2>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

const views = ({ popup, template, holdupContext, fallback, }) => {
    var _a, _b, _c, _d, _e;
    const paragraph1 = (h) => { var _a; return `<h${h} class="p1">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h${h}>`; };
    const paragraph1Split = `<h3 class="ps">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h3>`;
    const paragraph2 = `<h4 class="p2" style="margin-top: 22px;">${(_b = getTemplateText(template.paragraph2)) !== null && _b !== void 0 ? _b : ""}</h4>`;
    const line1 = `<h2 class="m1" style="margin-bottom: -12px;">${(_c = getTemplateText(template.line1)) !== null && _c !== void 0 ? _c : ""}</h2>`;
    const line2 = `<h2 class="m2">${(_d = getTemplateText(template.line2)) !== null && _d !== void 0 ? _d : ""}</h2>`;
    const actions = `
      <button 
      id="hold_up_get_coupons" 
      style="
      background: ${holdupContext.color};
      box-shadow: ${(_e = holdupContext.shadow) !== null && _e !== void 0 ? _e : "none"};
      font-size: 0.9rem;"
      >
      ${holdupContext.text}</button>
        <br>
        <a href="${fallback.url}" id="holdup_dismiss" style="color: ${fallback.color}; font-weight: bold;">${fallback.title}</a>
        `;
    const content = popup == "wtfox"
        ? [paragraph2, paragraph1(4), line1, line2, paragraph1Split, actions]
        : [paragraph1(3), paragraph1Split, paragraph2, line1, line2, actions];
    return content;
};
const qrView = ({ popup, holdupContext, fallback, template, }) => {
    var _a, _b, _c;
    const content = views({ popup, template, holdupContext, fallback });
    return `
        <dialog open data-theme='light' class='qrcode-dialog'>
          <article style="margin-top: 0px !important; margin-bottom: 0px !important;">
            <div class='grid'>
              <div>
                <h1 class='strong'>${getTemplateText(template.title)}</h1>
                <h3 class='strong'>${getTemplateText(template.subtitle)}</h2>
                ${content.join("")}
              </div>
              <div class='qrcode-container'>
                  <h1>${(_a = template.qrcode) === null || _a === void 0 ? void 0 : _a.download}</h4>
                  <h4>${(_b = template.qrcode) === null || _b === void 0 ? void 0 : _b.save}</h4>
                  <h4>${(_c = template.qrcode) === null || _c === void 0 ? void 0 : _c.bonus}</h4>
                  <div id='ms-qrcode'></div>
                  
              </div>
            </div>
          </article>
        </dialog>
      `;
};

const generateFooterContent = (footer) => {
    let footerContent = "";
    if (!footer) {
        footerContent = `
            <footer style="margin-top: 30px;">
              <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg"/>
              <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg"/>
              <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg"/>
            </footer>`;
    }
    else if (footer.text) {
        footerContent = `<footer>
              <h6>${footer.text}</h6>
             </footer>`;
    }
    return footerContent;
};
const PspViews = ({ template, holdupContext, fallback }) => {
    var _a, _b, _c;
    const paragraph1 = `<h4 
    style="
      color: #000;
      text-align: center;
      font-family: Roboto, Arial, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      margin-bottom: 8px;
        ">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h4>`;
    const paragraph2 = `<p 
    style="
    color: #000;
    font-family: Roboto, Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    "
    >${getTemplateText(template.paragraph2)}</p>`;
    const line1 = `<p 
    style="
    color: #000;
    text-align: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 30px !important;
    ">${(_b = getTemplateText(template.line1)) !== null && _b !== void 0 ? _b : ""}</p>`;
    const actions = `
      <button 
      id="hold_up_get_coupons" 
      style="
      background: ${holdupContext.color};
      box-shadow: ${(_c = holdupContext.shadow) !== null && _c !== void 0 ? _c : "none"};
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 0px;
      "
      >
      ${holdupContext.text}</button>
        <a href="${fallback.url}" id="holdup_dismiss" 
        style="
        color: ${fallback.color}; 
        font-weight: 500;
        font-size: 18px;
        margin-top: 23px;
        display: flex;
        justify-content: center;
        ">${fallback.title}</a>
        `;
    return [paragraph1, paragraph2, line1, actions];
};
const Pspview = ({ popup, holdupContext, fallback, template, footer = null, }) => {
    const content = PspViews({ popup, template, holdupContext, fallback });
    return `
        <dialog open data-theme="light">
        ${getFontStyle()}
          <article style="margin-top: 0px !important; margin-bottom: 0px !important;">
            <header class="headings" style="padding: 12px 14px; margin-bottom: -12px;">
            <div style="display: flex; justify-content: flex-end; align-items: center;">
            <a 
               href="${fallback.url}" 
               id="holdup_close" 
               style="background: none; 
               color: #4E4E4E; 
               width: 31px; 
               height: 31px;
               display: flex;
               justify-content: center;
               align-items: center;
               border: none;
               margin-bottom: 0px;
               padding: 0px;
               ">
            <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 42px; height: 42px;" />
            </a>
            </div>
              <h1 style="
              color: #000;
              text-align: center;
              font-family: Roboto, Arial, sans-serif;
              font-size: 48px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              ">${getTemplateText(template.title)}</h1>
              <h2 style="font-size: 24px; color: #000; font-weight: bold; margin-top: 18px;">${getTemplateText(template.subtitle)}</h2>
            </header>
            <div 
            id="starts-container"
            style="
              width: 100%;
              display: flex;
              flex-direction: column;
              margin-top: 36px;
              align-items: center;
            "
            >
            <div
            style="
              width: 288px;
              height: 1px;
              background: #B5B5B5;
            "
            ></div>
            <div style="margin-top: 40px;">
            <img 
            src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/10/group-starts.svg" 
            style="
            width: 113px;
            height: 21px;
            "
            />
            </div>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 11px;">
            <div style="width: 464px;">
            ${content.join("")}
            </div>
            </div>
            
            ${generateFooterContent(footer)}
          </article>
        </dialog>
      `;
};

const generateDesktopHallowingContent = ({ popup, template, holdupContext, fallback, }) => {
    const marginTop = isMarginZero(popup) ? "0px" : "21px";
    let line5 = "";
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1 = template.paragraph1;
    // Set the date we're counting down to
    const targetDate = new Date().getTime() + 10 * 60 * 1000;
    // Update the countdown every 1 second
    const countdown = setInterval(() => {
        const timefontColor = "#000000";
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the target date
        const distance = targetDate - now;
        // Time calculations for days, hours, minutes, and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Add leading zero to hours, minutes, and seconds if they are less than 10
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.innerHTML = `
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedHours}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedMinutes}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedSeconds}</span>
        </div>
        `;
        }
        if (distance <= 1) {
            clearInterval(countdown);
            window.location.href = fallback.url;
        }
    }, 1000);
    const line2 = `<h2 
    class="m1" 
    style="
    font-family: Roboto, Arial, sans-serif !important; 
    font-weight: 400; 
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    ">
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text}
    </h2>`;
    const line3 = `
        <h2 
        class="m2" 
        style="
        font-family: Roboto, Arial, sans-serif !important; 
        font-weight: 400; 
        display: flex; 
        justify-content: center; 
        ${tempLine2.style}
        ">
        ${tempLine2.text}
      </h2>`;
    if (template.paragraph1) {
        line5 = `
      <h2 
      class="m2" 
      style="
      font-family: Roboto, Arial, sans-serif !important; 
      font-weight: 400; 
      display: flex; 
      justify-content: center; 
      ${tempParagraph1.style}
      ">
      ${tempParagraph1.text}
    </h2>`;
    }
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; margin-top: 30px; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        border-color: ${holdupContext.color};
        color: #FFFFFF;
        width: 100%;
        max-width: ${popup === popups.hdub ? "392px" : "495px"};
        line-height: 19px;
        height: ${popup === popups.hdub ? "52px" : "64px"};
        font-weight: 700;
        font-size: 23px;
        margin-bottom: ${popup === popups.hduo || popup === popups.hduog ? "30px" : "29px"};
        font-family: Roboto, Arial, sans-serif !important;
        filter: ${popup === popups.hdub
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55))"
        : ""};
        ">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif !important;
          width: 70%;
          ${fallback.style}
          "
          >${fallback.title}
        </a>
        </div>
        `;
    let timingTemplate = `
    <div
    id="countdown"
    style="
    display: flex;
    justify-content:center;
    margin-top: ${marginTop};
    padding-top: 10px;
    padding-bottom: 10px;
    "
    >
  
    </div>
    `;
    let line4 = `
    <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 0px;
    "
    >
    <label
    style="
      color: #000;
      display: flex;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      width: 392px;
    "
    >Your email address</label>
    <input 
    placeholder="email address"
    style="
      display: flex;
      width: 392px;
      height: 48px;
      padding: 16px 17px;
      color: #A0A0A0;
      font-family: Roboto, Arial, sans-serif !important;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 0px;
    "
     />
    </div>`;
    if (popup !== popups.hdub) {
        line4 = "";
    }
    if (popup === popups.hduo) {
        timingTemplate = "";
    }
    const element = [line2, line3, line5, timingTemplate, line4, actions];
    return element;
};
const desktopHallowingModal = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopHallowingContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            <style>
            /* Define font-face rules to specify font families */
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
            }
    
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
            }
  
            @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap') format('woff2');
          }
          
          @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 700;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap') format('woff2');
          }
            
            </style>
            <article style="
            background-color: #FFFFFF;
            border-radius: 10px;
            margin: 0px; 
            width: 581px;  
            height: 539px; 
            position: relative;
             ">
            <div 
            id="spider-container"
            style="
            width: 64.351px; 
            height: 106px;
            position: absolute;
            right: 30px;
            top: 0px;
            transition: top 3s ease;
            ;
            ">
            <img 
            src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/10/halloween-spider.svg" 
            style="width: 100%; height: auto;" />
            </div>
              <header style="border-bottom: unset; margin-bottom: 0px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}"
                  id="holdup_close"  
                  style="background: none; 
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="
                height: ${popup === popups.hdub ? "173px" : "auto"}; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                margin-top: 0px;
                flex-direction: column;
                margin-bottom: ${popup === popups.hdub ? "0px" : "30px"};
                 ">
                <h1 style="
                width: 364px; 
                font-weight: 600;  
                line-height: normal;
                margin-top:18px;
                 ${title.style}
                 ">${title.text}</h1>
                <h2 style="
                font-weight: 700;  
                line-height: normal; 
                margin: 0px;
                ${subtitle.style}
                "
                >${subtitle.text}</h2>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

const generateDesktopBlackFridayContent = ({ popup, template, holdupContext, fallback, }) => {
    const marginTop = isMarginZero(popup) ? "0px" : "21px";
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1 = template.paragraph1;
    let line5 = "";
    // Set the date we're counting down to
    const targetDate = new Date().getTime() + 10 * 60 * 1000;
    // Update the countdown every 1 second
    const countdown = setInterval(() => {
        const timefontColor = popups.blf2 === popup ? "#003263" : "#000000";
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the target date
        const distance = targetDate - now;
        // Time calculations for days, hours, minutes, and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Add leading zero to hours, minutes, and seconds if they are less than 10
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.innerHTML = `
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedHours}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedMinutes}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedSeconds}</span>
        </div>
        `;
        }
        if (distance <= 1) {
            clearInterval(countdown);
            window.location.href = fallback.url;
        }
    }, 1000);
    const line2 = `<h2 
    class="m1" 
    style="
    font-family: Roboto, Arial, sans-serif !important; 
    font-weight: 400; 
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    ">
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text}
    </h2>`;
    const line3 = `
        <h2 
        class="m2" 
        style="
        font-family: Roboto, Arial, sans-serif !important; 
        font-weight: 400; 
        display: flex; 
        justify-content: center; 
        ${tempLine2.style}
        ">
        ${tempLine2.text}
      </h2>`;
    if (template.paragraph1) {
        line5 = `
      <h2 
      class="m2" 
      style="
      font-family: Roboto, Arial, sans-serif !important; 
      font-weight: 400; 
      display: flex; 
      justify-content: center; 
      ${tempParagraph1.style}
      ">
      ${tempParagraph1.text}
    </h2>`;
    }
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; margin-top: 30px; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        border-color: ${holdupContext.color};
        color: #FFFFFF;
        width: 100%;
        max-width: ${popup === popups.hdub ? "392px" : "495px"};
        line-height: 19px;
        height: ${popup === popups.hdub ? "52px" : "64px"};
        font-weight: 700;
        font-size: 23px;
        margin-bottom: 20px;
        font-family: Roboto, Arial, sans-serif !important;
        filter: ${popup === popups.hdub
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55))"
        : ""};
        ">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif !important;
          width: 70%;
          ${fallback.style}
          "
          >${fallback.title}
        </a>
        </div>
        `;
    let timingTemplate = `
    <div
    id="countdown"
    style="
    display: flex;
    justify-content:center;
    margin-top: ${marginTop};
    padding-top: 10px;
    padding-bottom: 10px;
    "
    >
  
    </div>
    `;
    let line4 = `
    <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 0px;
    "
    >
    <label
    style="
      color: #000;
      display: flex;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      width: 392px;
    "
    >Your email address</label>
    <input 
    placeholder="email address"
    style="
      display: flex;
      width: 392px;
      height: 48px;
      padding: 16px 17px;
      color: #A0A0A0;
      font-family: Roboto, Arial, sans-serif !important;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 0px;
    "
     />
    </div>`;
    if (popup !== popups.hdub) {
        line4 = "";
    }
    if (popup === popups.hduo) {
        timingTemplate = "";
    }
    const element = [line2, line3, line5, timingTemplate, line4, actions];
    return element;
};
const desktopBlackFridayModal = ({ popup, holdupContext, fallback, template, }) => {
    var _a;
    const content = generateDesktopBlackFridayContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const closeModalXStyle = ((_a = template.closeModalXStyle) === null || _a === void 0 ? void 0 : _a.style) || "";
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const checkMarkIcon = popups.blf === popup
        ? "https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/10/top-ticket.svg"
        : "https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/11/red-check-mark.svg";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            <style>
            /* Define font-face rules to specify font families */
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
            }
    
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
            }
  
            @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap') format('woff2');
          }
          
          @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 700;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap') format('woff2');
          }
            
            </style>
            <article style="
            background-color: #FFFFFF;
            border-radius: 10px;
            margin: 0px; 
            width: 581px;  
            height: 539px; 
            position: relative;
            padding-bottom: 30px;
             ">
              <header style="border-bottom: unset; margin-bottom: 0px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}"
                  id="holdup_close"  
                  style="background: none; 
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="
                height: ${popup === popups.hdub ? "173px" : "auto"}; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                margin-top: 0px;
                flex-direction: column;
                margin-bottom: ${popup === popups.hdub ? "0px" : "20px"};
                 ">
            <div 
            id="spider-container"
            style="
            width: 64.351px;
            right: 30px;
            top: 0px;
            transition: top 3s ease;
            ;
            ">
            <img 
            src="${checkMarkIcon}" 
            style="
            width: 54px; 
            height: 54px;" 
            />
            </div>
                <h1 style="
                width: 364px; 
                font-weight: 600;  
                line-height: normal;
                margin-top:18px;
                 ${title.style}
                 ">${title.text}</h1>
                <h2 style="
                font-weight: 700;  
                line-height: normal; 
                margin: 0px;
                ${subtitle.style}
                "
                >${subtitle.text}</h2>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

const generateDesktopCyberWeekContent = ({ popup, template, holdupContext, fallback, }) => {
    const marginTop = isMarginZero(popup) ? "0px" : "21px";
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1 = template.paragraph1;
    let line5 = "";
    // Set the date we're counting down to
    const targetDate = new Date().getTime() + 10 * 60 * 1000;
    // Update the countdown every 1 second
    const countdown = setInterval(() => {
        const timefontColor = popups.blf2 === popup ? "003263" : "#000000";
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the target date
        const distance = targetDate - now;
        // Time calculations for days, hours, minutes, and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Add leading zero to hours, minutes, and seconds if they are less than 10
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.innerHTML = `
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedHours}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedMinutes}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedSeconds}</span>
        </div>
        `;
        }
        if (distance <= 1) {
            clearInterval(countdown);
            window.location.href = fallback.url;
        }
    }, 1000);
    const line2 = `<h2 
    class="m1" 
    style="
    font-family: Roboto, Arial, sans-serif !important; 
    font-weight: 400; 
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    ">
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text}
    </h2>`;
    const line3 = `
        <h2 
        class="m2" 
        style="
        font-family: Roboto, Arial, sans-serif !important; 
        font-weight: 400; 
        display: flex; 
        justify-content: center; 
        ${tempLine2.style}
        ">
        ${tempLine2.text}
      </h2>`;
    if (template.paragraph1) {
        line5 = `
      <h2 
      class="m2" 
      style="
      font-family: Roboto, Arial, sans-serif !important; 
      font-weight: 400; 
      display: flex; 
      justify-content: center; 
      ${tempParagraph1.style}
      ">
      ${tempParagraph1.text}
    </h2>`;
    }
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; margin-top: 30px; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        border-color: ${holdupContext.color};
        color: #FFFFFF;
        width: 100%;
        max-width: ${popup === popups.hdub ? "392px" : "495px"};
        line-height: 19px;
        height: ${popup === popups.hdub ? "52px" : "64px"};
        font-weight: 700;
        font-size: 23px;
        margin-bottom: 20px;
        font-family: Roboto, Arial, sans-serif !important;
        filter: ${popup === popups.hdub
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55))"
        : ""};
        ">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif !important;
          width: 70%;
          ${fallback.style}
          "
          >${fallback.title}
        </a>
        </div>
        `;
    let timingTemplate = `
    <div
    id="countdown"
    style="
    display: flex;
    justify-content:center;
    margin-top: ${marginTop};
    padding-top: 10px;
    padding-bottom: 10px;
    "
    >
  
    </div>
    `;
    let line4 = `
    <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 0px;
    "
    >
    <label
    style="
      color: #000;
      display: flex;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      width: 392px;
    "
    >Your email address</label>
    <input 
    placeholder="email address"
    style="
      display: flex;
      width: 392px;
      height: 48px;
      padding: 16px 17px;
      color: #A0A0A0;
      font-family: Roboto, Arial, sans-serif !important;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 0px;
    "
     />
    </div>`;
    if (popup !== popups.hdub) {
        line4 = "";
    }
    if (popup === popups.hduo) {
        timingTemplate = "";
    }
    const element = [line2, line3, line5, timingTemplate, line4, actions];
    return element;
};
const desktopCycerWeekModal = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopCyberWeekContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const checkMarkIcon = popups.cw1 === popup
        ? "https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/10/top-ticket.svg"
        : "https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/11/red-check-mark.svg";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            <style>
            /* Define font-face rules to specify font families */
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
            }
    
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
            }
  
            @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap') format('woff2');
          }
          
          @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 700;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap') format('woff2');
          }
            
            </style>
            <article style="
            background-color: #FFFFFF;
            border-radius: 10px;
            margin: 0px; 
            width: 581px;  
            height: 539px; 
            position: relative;
            padding-bottom: 30px;
             ">
              <header style="border-bottom: unset; margin-bottom: 0px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}"
                  id="holdup_close"  
                  style="background: none; 
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="
                height: ${popup === popups.hdub ? "173px" : "auto"}; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                margin-top: 0px;
                flex-direction: column;
                margin-bottom: ${popup === popups.hdub ? "0px" : "20px"};
                 ">
            <div 
            id="spider-container"
            style="
            width: 64.351px;
            right: 30px;
            top: 0px;
            transition: top 3s ease;
            ;
            ">
            <img 
            src="${checkMarkIcon}" 
            style="
            width: 54px; 
            height: 54px;" 
            />
            </div>
                <h1 style="
                width: 364px; 
                font-weight: 600;  
                line-height: normal;
                margin-top:18px;
                 ${title.style}
                 ">${title.text}</h1>
                <h2 style="
                font-weight: 700;  
                line-height: normal; 
                margin: 0px;
                ${subtitle.style}
                "
                >${subtitle.text}</h2>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

const generateDesktopXmasContent = ({ popup, template, holdupContext, fallback, }) => {
    const marginTop = isMarginZero(popup) ? "0px" : "21px";
    let line5 = "";
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1 = template.paragraph1;
    // Set the date we're counting down to
    const targetDate = new Date().getTime() + 10 * 60 * 1000;
    // Update the countdown every 1 second
    const countdown = setInterval(() => {
        const timefontColor = "#7D001B";
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the target date
        const distance = targetDate - now;
        // Time calculations for days, hours, minutes, and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Add leading zero to hours, minutes, and seconds if they are less than 10
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.innerHTML = `
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedHours}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedMinutes}</span>:
        </div>
        <div
        style="
        color: ${timefontColor};
        font-family: Poppins, Arial, Sans-serif;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.52px;
        "
        >
        <span
        style="
        border-radius: 4px;
        background: #EAEAEA;
        padding: 8px;
        margin: 8px;
        width: 73px;
        height: 56px;
        font-family: Poppins, Arial, Sans-serif;
        font-weight: 400;
        "
        >${formattedSeconds}</span>
        </div>
        `;
        }
        if (distance <= 1) {
            clearInterval(countdown);
            window.location.href = fallback.url;
        }
    }, 1000);
    const line2 = `<h2 
    class="m1" 
    style="
    font-family: Roboto, Arial, sans-serif !important; 
    font-weight: 400; 
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    ">
    ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text}
    </h2>`;
    const line3 = `
        <h2 
        class="m2" 
        style="
        font-family: Roboto, Arial, sans-serif !important; 
        font-weight: 400; 
        display: flex; 
        justify-content: center; 
        ${tempLine2.style}
        ">
        ${tempLine2.text}
      </h2>`;
    if (template.paragraph1) {
        line5 = `
      <h2 
      class="m2" 
      style="
      font-family: Roboto, Arial, sans-serif !important; 
      font-weight: 400; 
      display: flex; 
      justify-content: center; 
      ${tempParagraph1.style}
      ">
      ${tempParagraph1.text}
    </h2>`;
    }
    const holdupProps = popups.hm3 == popup ? 'role="button" class="secondary"' : "";
    const actions = `
    <div style="display: flex; margin-top: 30px; position: relative; flex-direction: column; width: 100%; align-items: center;">
      <button 
        id="hold_up_get_coupons" 
        style="background-color: ${holdupContext.color}; 
        border-color: ${holdupContext.color};
        color: #FFFFFF;
        width: 100%;
        max-width: ${popup === popups.hdub ? "392px" : "495px"};
        line-height: 19px;
        height: ${popup === popups.hdub ? "52px" : "64px"};
        font-weight: 700;
        font-size: 23px;
        margin-bottom: ${popup === popups.hduo || popup === popups.hduog ? "30px" : "20px"};
        font-family: Roboto, Arial, sans-serif !important;
        filter: ${popup === popups.hdub
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55))"
        : ""};
        ">
        ${holdupContext.text}
  
      </button>
        <a href="${fallback.url}" id="holdup_dismiss" 
          ${holdupProps}
          style="
          font-size: 16px;
          font-family: Roboto, Arial, sans-serif !important;
          width: 70%;
          ${fallback.style}
          "
          >${fallback.title}
        </a>
        </div>
        `;
    let timingTemplate = `
    <div
    id="countdown"
    style="
    display: flex;
    justify-content:center;
    margin-top: ${marginTop};
    padding-top: 10px;
    padding-bottom: 10px;
    "
    >
  
    </div>
    `;
    let line4 = `
    <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 0px;
    "
    >
    <label
    style="
      color: #000;
      display: flex;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      width: 392px;
    "
    >Your email address</label>
    <input 
    placeholder="email address"
    style="
      display: flex;
      width: 392px;
      height: 48px;
      padding: 16px 17px;
      color: #A0A0A0;
      font-family: Roboto, Arial, sans-serif !important;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 0px;
    "
     />
    </div>`;
    if (popup !== popups.hdub) {
        line4 = "";
    }
    if (popup === popups.hduo) {
        timingTemplate = "";
    }
    const element = [line2, line3, line5, timingTemplate, line4, actions];
    return element;
};
const desktopXmasModal = ({ popup, holdupContext, fallback, template, }) => {
    const content = generateDesktopXmasContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const topView = popups.hm4 == popup ? appStoreView() : "";
    const dialogStyle = popups.hm2 == popup ? "padding: unset;" : "";
    const closeModalXStyle = popups.hm2 == popup
        ? `margin-right: 1rem;
           position: relative;
           top: 2rem;`
        : "";
    const headingStyle = popups.hm2 == popup ? "padding-bottom: 20%;" : "";
    return `
          <dialog 
            open 
            data-theme="light" 
            class="modal-is-opening"
            style="
                display: flex; 
                flex-direction: column;
                ${dialogStyle}">
            ${topView}
            <style>
            /* Define font-face rules to specify font families */
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
            }
    
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
            }
  
            @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 400;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap') format('woff2');
          }
          
          @font-face {
              font-family: 'Roboto Condensed';
              font-style: normal;
              font-weight: 700;
              src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap') format('woff2');
          }
            
            </style>
            <article style="
            background-color: #FFFFFF;
            border-radius: 10px;
            margin: 0px; 
            width: 581px;  
            height: 539px; 
            position: relative;
             ">
            <div 
            id="spider-container"
            style="
            position: absolute;
            right: 250px;
            top: 20px;
            ;
            ">
            <img 
            src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/12/xmaxtop.svg" 
            style="width: 64px; height: 64px;" />
            </div>
              <header style="border-bottom: unset; margin-bottom: 0px; padding-bottom: 0px; padding-top: 15px; padding-right: 15px; background-color: unset;">
               <div style="display: flex; justify-content: flex-end; align-items: center; ${headingStyle}">
               <a 
                  href="${fallback.url}" 
                  id="holdup_close"  
                  style="background: none;
                  color: #4E4E4E; 
                  width: 31px; 
                  height: 31px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                  margin-bottom: 0px;
                  padding: 0px;
                  ${closeModalXStyle}
                  ">
               <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 24px; height: 24px;" />
               </a>
               </div>
                <div style="
                height: ${popup === popups.hdub ? "173px" : "auto"}; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                margin-top: 0px;
                flex-direction: column;
                margin-bottom: ${popup === popups.hdub ? "0px" : "30px"};
                 ">
                <h1 style="
                width: 364px; 
                font-weight: 600;  
                line-height: normal;
                margin-top:18px;
                 ${title.style}
                 ">${title.text}</h1>
                <h2 style="
                font-weight: 700;  
                line-height: normal; 
                margin: 0px;
                ${subtitle.style}
                "
                >${subtitle.text}</h2>
                </div>
              </header>
              ${content.join("")}
            </article>
          </dialog>
        `;
};

const generateDesktopIterationNewViews = ({ popup, template, holdupContext, fallback, }) => {
    var _a, _b, _c, _d, _e, _f;
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1Split = template.paragraph1Split;
    const tempParagraph2 = template.paragraph2;
    const notBold = [popups.hdi10, popups.wlcm].includes(popup);
    const isWelcome = popups.isWelcome(popup);
    const subHeaderStyled = `
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      font-style: normal;
      line-height: 120%;
      ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    `;
    const paragraph1 = (h) => {
        var _a;
        return `<h${h} class="p1" style="color: #959ea4;">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h${h}>`;
    };
    const paragraph1Split = `<h2
      style="
      color: ${(_a = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.color) !== null && _a !== void 0 ? _a : ""};
      text-align: center;
      font-family: Roboto, Arial, Sans-serif;
      font-size: ${(_b = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.fontSize) !== null && _b !== void 0 ? _b : ""};
      font-style: normal;
      font-weight: 700;
      line-height: 133%;
      opacity: 1;
      "
      >${(_c = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.text) !== null && _c !== void 0 ? _c : ""}</h2>`;
    const p2 = `<h3
      style="
      ${tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.style};
      font-family: Roboto, Arial, sans-serif;
      line-height: 120%;
      opacity: 1;
      ">
      ${(_d = tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.text) !== null && _d !== void 0 ? _d : ""}
      </h3>`;
    const line1 = `<h2
      style="${subHeaderStyled}"
      >${(_e = tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text) !== null && _e !== void 0 ? _e : ""}
      </h2>`;
    const line2 = `<h2
      style="
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      ${tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.style}
      "
      >${(_f = tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.text) !== null && _f !== void 0 ? _f : ""}</h2>`;
    const actions = `
      <button id="${isWelcome ? "welcome_get_coupons" : "hold_up_get_coupons"}" 
      style="
      box-shadow: none;
      height: 55px;
      border-radius: 8px;
      font-family: Roboto, Arial, sans-serif;
      ${holdupContext.style}
      ">
      ${holdupContext.text}</button>
        <br>
        <a
        id="${isWelcome ? "welcome_dismiss" : "holdup_dismiss"}" 
        href="${fallback.url}" 
        style="
        color: ${fallback.color}; 
        font-size: 19px;
        font-style: normal;
        font-weight: ${notBold ? "400" : "600"};
        font-family: Roboto, Arial, Sans-serif;
        "
        >${fallback.title}</a>
        `;
    const content = popup == "wtfox"
        ? [
            template.paragraph2,
            paragraph1(4),
            line1,
            line2,
            paragraph1Split,
            actions,
        ]
        : [paragraph1(3), paragraph1Split, p2, line1, line2, actions];
    return content;
};
const generateDesktopIterationNew = ({ popup, holdupContext, fallback, template, }) => {
    var _a;
    const content = generateDesktopIterationNewViews({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const shouldHideFooter = [popups.hdi10, popups.wlcm].includes(popup);
    const isWelcome = popups.isWelcome(popup);
    return `
        <dialog open data-theme="light">
        <style>
        /* Define font-face rules to specify font families */
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
        }
  
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
        }
  
        </style>
          <article style="width: ${isWelcome ? "650px" : "670px"}; height: ${isWelcome ? "610px" : "auto"}">
            <header class="headings" style="padding: 12px 14px; margin-bottom: -12px">
            <div style="display: flex; justify-content: flex-end; align-items: center;">
            <a 
               href="${fallback.url}" 
               id="${isWelcome ? "welcome_close" : "holdup_close"}" 
               style="background: none; 
               color: #4E4E4E; 
               width: 31px; 
               height: 31px;
               display: flex;
               justify-content: center;
               align-items: center;
               border: none;
               margin-bottom: 0px;
               padding: 0px;
               ">
            <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 42px; height: 42px;" />
            </a>
            </div>
              <h1 
              style="
              color: ${title.color};
              text-align: center;
              font-family: Roboto, Arial, Sans-serif;
              font-size: ${title.fontSize};
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              margin-bottom: 0px;
              margin-top: 16px;
              ${title === null || title === void 0 ? void 0 : title.style}
              "
              >${title.text}</h1>
              <div 
              style="
              display: flex;
              justify-content: center;
              ">
              <h2 
              style="
              color: ${subtitle.color}; 
              text-align: center; 
              font-family: ${(_a = subtitle.fontFamily) !== null && _a !== void 0 ? _a : "Roboto, Arial, Sans-serif;"}
              font-size: ${subtitle.fontSize};
              font-style: normal;
              font-weight: 700;
              width: 500px;
              line-height: 133%;
              margin-bottom: 0px;
              margin-top: ${isWelcome ? "0px" : "16px"};
              ${subtitle === null || subtitle === void 0 ? void 0 : subtitle.style}
              ">${subtitle.text}</h2>
              </div>
            </header>
            ${content.join("")}
            ${!shouldHideFooter
        ? `
            <footer style="background: #FBFBFC; margin-top: 20px; padding-top: 18px; padding-bottom: 18px;">
              <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg" style="width: 126px; height: 26px;"/>
              <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg" style="width: 154px; height: 57px;"/>
              <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg" style="width: 153px; height: 36px;"/>
            </footer>`
        : ""}
          </article>
        </dialog>
      `;
};

const generateDesktopWelcomeContent = ({ popup, template, holdupContext, fallback, }) => {
    var _a, _b, _c, _d, _e, _f;
    const tempLine1 = template.line1;
    const tempLine2 = template.line2;
    const tempParagraph1Split = template.paragraph1Split;
    const tempParagraph2 = template.paragraph2;
    const notBold = [popups.hdi10, popups.wlcm, popups.wlcm2].includes(popup);
    const isWelcome = popups.isWelcome(popup);
    const subHeaderStyled = `
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      font-style: normal;
      line-height: 120%;
      ${tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.style}
    `;
    const paragraph1 = (h) => {
        var _a;
        return `<h${h} class="p1" style="color: #959ea4;">${(_a = getTemplateText(template.paragraph1)) !== null && _a !== void 0 ? _a : ""}</h${h}>`;
    };
    const paragraph1Split = `<h2
      style="
      color: ${(_a = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.color) !== null && _a !== void 0 ? _a : ""};
      text-align: center;
      font-family: Roboto, Arial, Sans-serif;
      font-size: ${(_b = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.fontSize) !== null && _b !== void 0 ? _b : ""};
      font-style: normal;
      font-weight: 700;
      line-height: 133%;
      opacity: 1;
      "
      >${(_c = tempParagraph1Split === null || tempParagraph1Split === void 0 ? void 0 : tempParagraph1Split.text) !== null && _c !== void 0 ? _c : ""}</h2>`;
    const p2 = `<h3
      style="
      ${tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.style};
      font-family: Roboto, Arial, sans-serif;
      line-height: 120%;
      opacity: 1;
      ">
      ${(_d = tempParagraph2 === null || tempParagraph2 === void 0 ? void 0 : tempParagraph2.text) !== null && _d !== void 0 ? _d : ""}
      </h3>`;
    const line1 = `<h2
      style="${subHeaderStyled}"
      >${(_e = tempLine1 === null || tempLine1 === void 0 ? void 0 : tempLine1.text) !== null && _e !== void 0 ? _e : ""}
      </h2>`;
    const line2 = `<h2
      style="
      text-align: center;
      font-family: Poppins, Arial, Sans-serif;
      ${tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.style}
      "
      >${(_f = tempLine2 === null || tempLine2 === void 0 ? void 0 : tempLine2.text) !== null && _f !== void 0 ? _f : ""}</h2>`;
    const actions = `
      <button id="${isWelcome ? "welcome_get_coupons" : "hold_up_get_coupons"}" 
      style="
      box-shadow: none;
      height: 55px;
      border-radius: 8px;
      font-family: Roboto, Arial, sans-serif;
      ${holdupContext.style}
      ">
      ${holdupContext.text}</button>
        <br>
        <a
        id="${isWelcome ? "welcome_dismiss" : "holdup_dismiss"}" 
        href="${fallback.url}" 
        style="
        color: ${fallback.color}; 
        font-size: 19px;
        font-style: normal;
        font-weight: ${notBold ? "400" : "600"};
        font-family: Roboto, Arial, Sans-serif;
        ${popup === popups.wlcm2 ? "text-decoration: none;" : ""}
        "
        >${fallback.title}</a>
        `;
    return [paragraph1(3), paragraph1Split, p2, line1, line2, actions];
};
const generateDesktopWelcome = ({ popup, holdupContext, fallback, template, }) => {
    var _a;
    const content = generateDesktopWelcomeContent({
        popup,
        template,
        holdupContext,
        fallback,
    });
    const title = template.title;
    const subtitle = template.subtitle;
    const shouldHideFooter = [
        popups.hdi10,
        popups.wlcm,
        popups.wlcm2,
    ].includes(popup);
    const isWelcome = popups.isWelcome(popup);
    return `
        <dialog open data-theme="light">
        <style>
        /* Define font-face rules to specify font families */
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('woff2');
        }
  
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.googleapis.com/css?family=Poppins:400&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap') format('woff2');
        }
        @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.googleapis.com/css?family=Poppins:700&display=swap') format('woff2');
        }
  
        </style>
          <article style="width: ${isWelcome ? "650px" : "670px"}; height: auto">
            <header class="headings" style="padding: 12px 14px; margin-bottom: -12px">
            <div style="display: flex; justify-content: flex-end; align-items: center;">
            ${popup !== popups.wlcm2
        ? `
                <a 
                href="${fallback.url}" 
                id="${isWelcome ? "welcome_close" : "holdup_close"}" 
                style="background: none; 
                color: #4E4E4E; 
                width: 31px; 
                height: 31px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                margin-bottom: 0px;
                padding: 0px;
                ">
                <img src="https://cdn.onlineshoppingtools.com/hd-images/clear-close-btn.svg" style="width: 42px; height: 42px;" />
            </a>`
        : `<span style="width: 31px; height: 31px;" />`}
            </div>
              <h1 
              style="
              color: ${title.color};
              text-align: center;
              font-family: Roboto, Arial, Sans-serif;
              font-size: ${title.fontSize};
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              margin-bottom: 0px;
              margin-top: 0px;
              ${title === null || title === void 0 ? void 0 : title.style}
              "
              >${title.text}</h1>
              <div 
              style="
              display: flex;
              justify-content: center;
              ">
              <h2 
              style="
              color: ${subtitle.color}; 
              text-align: center; 
              font-family: ${(_a = subtitle.fontFamily) !== null && _a !== void 0 ? _a : "Roboto, Arial, Sans-serif;"}
              font-size: ${subtitle.fontSize};
              font-style: normal;
              font-weight: 700;
              width: 500px;
              line-height: 133%;
              margin-bottom: 0px;
              margin-top: ${isWelcome ? "0px" : "16px"};
              ${subtitle === null || subtitle === void 0 ? void 0 : subtitle.style}
              ">${subtitle.text}</h2>
              </div>
            </header>
            ${content.join("")}
            ${!shouldHideFooter
        ? `
            <footer style="background: #FBFBFC; margin-top: 20px; padding-top: 18px; padding-bottom: 18px;">
              <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg" style="width: 126px; height: 26px;"/>
              <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg" style="width: 154px; height: 57px;"/>
              <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg" style="width: 153px; height: 36px;"/>
            </footer>`
        : ""}
          </article>
        </dialog>
      `;
};

const getView = (popup) => {
    const templateMachine = {
        [popups.hd1]: desktopModalView,
        [popups.hd2]: desktopV2ModalView,
        [popups.hdua]: desktopAMZModalView,
        [popups.hduc]: desktopAMZWideModalView,
        [popups.hw1]: desktopHallowingModal,
        [popups.xmas]: desktopXmasModal,
    };
    return templateMachine[popup] || null;
};

const popupHandlers = {
    Timing: desktopTimingModalView,
    HDWide: desktopWideModalView,
    SPS: Pspview,
    HDI: generateDesktopIteration,
    HDINew: generateDesktopIterationNew,
    Dynamic: generateDynamicTemplate,
    Toasti: generateTastiBarTemplate,
    RangeSlider: desktopRangeSliderModalView,
    BlackFriday: desktopBlackFridayModal,
    CW: desktopCycerWeekModal,
    Welcome: generateDesktopWelcome,
};
const findPopupHandler = (popup) => {
    for (const key in popupHandlers) {
        if (popupHandlers[key]) {
            const isPopupFunction = popups[`is${key}`];
            if (isPopupFunction === null || isPopupFunction === void 0 ? void 0 : isPopupFunction(popup)) {
                return popupHandlers[key];
            }
        }
    }
    return null;
};

const popupView = ({ popup, holdupContext, fallback, template, footer = null, }) => {
    const handler = findPopupHandler(popup);
    if (handler)
        return handler({ popup, holdupContext, fallback, template });
    const customView = getView(popup);
    if (customView)
        return customView({ popup, holdupContext, fallback, template });
    return getDefaultView({ popup, holdupContext, fallback, template, footer });
};
const getDefaultView = ({ popup, holdupContext, fallback, template, footer }) => holdupContext.holdup === "qr"
    ? qrView({ popup, holdupContext, fallback, template })
    : view({ popup, holdupContext, fallback, template, footer });

const generateQRCode = (url, msDebug) => {
    const qrcodejs = document.createElement("script");
    qrcodejs.setAttribute("src", "https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs@gh-pages/qrcode.min.js");
    qrcodejs.onload = () => {
        const qrcodeElement = document.getElementById("ms-qrcode");
        if (qrcodeElement) {
            const qrcode = new QRCode(qrcodeElement, {
                text: url,
                width: 128,
                height: 128,
                correctLevel: QRCode.CorrectLevel.L,
            });
            if (msDebug == "1") {
                console.log(qrcode);
            }
        }
        setTimeout(() => {
            qrcodejs.remove();
        }, 200);
    };
    document.head.append(qrcodejs);
};

const countDownClock = (number = 100, format = "seconds") => {
    const daysElement = document.querySelector(".days");
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".seconds");
    function displayTimeLeft(seconds) {
        if (daysElement) {
            daysElement.textContent = Math.floor(seconds / 86400).toString();
        }
        if (hoursElement) {
            hoursElement.textContent = Math.floor((seconds % 86400) / 3600).toString();
        }
        if (minutesElement) {
            minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60).toString();
        }
        if (secondsElement) {
            secondsElement.textContent = (seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60).toString();
        }
    }
    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;
        const countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    }
    switch (format) {
        case "seconds":
            return timer(number);
        case "minutes":
            return timer(number * 60);
        case "hours":
            return timer(number * 60 * 60);
        case "days":
            return timer(number * 60 * 60 * 24);
    }
};
function generatePopupExperience({ templates, redirectUrl, fallbackUrl, popup, holdupUrl, msDebug, holdup, qrcodeUrl, c2cConf, openInNewTab = true, hideHeader = false, skipHoldUpModal = false, skipInterval = false, }) {
    var _a;
    if (!skipHoldUpModal) {
        document.body.style.overflow = "hidden";
    }
    const mainElements = document.querySelectorAll("body > main");
    if (mainElements && mainElements.length > 0 && mainElements[0].style) {
        mainElements[0].style.paddingTop = "0px";
    }
    if (window.displayButtonContainer) {
        window.displayButtonContainer("block");
    }
    const popupValue = popup !== null && popup !== void 0 ? popup : "";
    const template = templates[popupValue];
    const { title = "", subtitleOne, closeModalXStyle, paragraphOne, paragraphOneSplit, paragraphTwo, mainAdvFirstLine, mainAdvSecondLine, button, link, footer = null, } = template || {};
    const qrcode = (template === null || template === void 0 ? void 0 : template.qrcode) || {};
    const browser = getBrowserName();
    logDebug(msDebug, `browserName: ${browser}`);
    const body = document.querySelector("body");
    if (body && !skipHoldUpModal) {
        body.style.overflow = "hidden";
    }
    // Image preloads
    const imageUrls = [
        "https://cdn.onlineshoppingtools.com/hd-images/image-bg-not-close.svg",
        "https://cdn.onlineshoppingtools.com/hd-images/holdup2grow.svg",
        "https://cdn.onlineshoppingtools.com/hd-images/image-bg-not-close.svg",
    ];
    imageUrls.forEach((url) => {
        if (body) {
            const imageLink = document.createElement("link");
            imageLink.as = "image";
            imageLink.href = url;
            body.appendChild(imageLink);
        }
    });
    const fontUrls = [
        "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap",
    ];
    fontUrls.forEach((url) => {
        if (body) {
            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", url);
            link.setAttribute("crossOrigin", "anonymous");
            document.head.appendChild(link);
        }
    });
    // end preload
    const presentDay = new Date().getTime();
    const endDay = new Date("04/19/2023").getTime();
    const diffTime = Math.abs(endDay - presentDay);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const amazonSuccessTitle = "Success!";
    const successparagraph = "You are now registered!  Add the free Capital One Shopping extension to your browser to receive your gift card.";
    const firefoxSuccess = "Firefox users will be taken to Capital One Shopping to add the extension.  Users will only receive a gift card once a Capital One Shopping download is detected.";
    const browsersSuccess = "users will be taken to the web store to add the extension.  Users will only receive a gift card after a Capital One Shopping download is detected.";
    const amazonPopUp = document.createElement("div");
    const popUpGeneral = document.createElement("div");
    const amazonScriptElem = document.createElement("script");
    amazonScriptElem.setAttribute("src", "https://assets.loginwithamazon.com/sdk/na/login1.js");
    document.head.appendChild(amazonScriptElem);
    const taxHoldUp = document.createElement("div");
    const generalStyle = popUpGeneral.style;
    popUpGeneral.id = "general-popup";
    const amazonStyle = amazonPopUp.style;
    const taxHoldUpTyle = taxHoldUp.style;
    generalStyle.display = "none";
    generalStyle.position = "fixed";
    generalStyle.top = "0";
    generalStyle.left = "0";
    generalStyle.height = "100vh";
    generalStyle.width = "100vw";
    generalStyle.zIndex = "777777777";
    generalStyle.background =
        popups.isHM(popupValue) || popups.isHDWide(popupValue)
            ? "rgba(0,0,0,0.6)"
            : "none";
    amazonStyle.display = "none";
    amazonStyle.position = "fixed";
    amazonStyle.top = "0";
    amazonStyle.left = "0";
    amazonStyle.height = "100vh";
    amazonStyle.width = "100vw";
    amazonStyle.zIndex = "1000000";
    amazonStyle.background = "white";
    taxHoldUpTyle.display = "none";
    taxHoldUpTyle.position = "fixed";
    taxHoldUpTyle.top = "0";
    taxHoldUpTyle.left = "0";
    taxHoldUpTyle.height = "100vh";
    taxHoldUpTyle.width = "100vw";
    taxHoldUpTyle.zIndex = "1000000";
    taxHoldUpTyle.background = "white";
    const modalStyles = popupStyles(document);
    const addPopupStyles = () => {
        for (const element of modalStyles) {
            document.head.append(element);
        }
        if (popups.isHM(popupValue))
            document.body.classList.add("no-scroll");
    };
    const getHoldupUrl = () => holdupUrl && holdupUrl != "undefined" ? holdupUrl : redirectUrl;
    if (template) {
        const holdupContext = {
            text: (_a = button === null || button === void 0 ? void 0 : button.title) !== null && _a !== void 0 ? _a : `Ja, zu ${browser} hinzufügen`,
            color: button === null || button === void 0 ? void 0 : button.color,
            shadow: button === null || button === void 0 ? void 0 : button.shadow,
            style: button === null || button === void 0 ? void 0 : button.style,
            url: holdupUrl,
            holdup: holdup,
        };
        const fallback = {
            title: link === null || link === void 0 ? void 0 : link.title,
            color: link === null || link === void 0 ? void 0 : link.color,
            url: fallbackUrl,
            style: link === null || link === void 0 ? void 0 : link.style,
        };
        popUpGeneral.innerHTML = popupView({
            popup: template.key,
            holdupContext,
            fallback,
            template: {
                title,
                subtitle: subtitleOne,
                paragraph1: paragraphOne,
                paragraph1Split: paragraphOneSplit,
                paragraph2: paragraphTwo,
                line1: mainAdvFirstLine,
                line2: mainAdvSecondLine,
                qrcode: qrcode,
                modalBackground: !openInNewTab ? "rgba(0, 0, 0, 0.5) !important" : "",
                hideHeader: hideHeader,
                closeModalXStyle,
            },
            footer,
        });
    }
    amazonPopUp.innerHTML = `
  <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; color: #2D2D2D; background-color: #001c20; font-family: 'Montserrat';">
  <div style="display: flex; justify-content: start; align-items: center; position: relative; background-color: white; flex-direction: column; width: 780px; border: 1px solid black; ">
    <p style="font-family: 'Poppins'; font-weight: bold; font-size: 64px; line-height: 77px; text-align: center; margin-bottom: 30px; margin-top: 60px; color: #2c2d2d;" id="pop_amazon_title">Hold Up!</p>
    <p style="font-family: 'Roboto'; font-weight: 400; font-size: 27px; line-height: 30px; text-align: center; margin-top: 0; margin-bottom: 30px; max-width: 565px;" id="pop_amazon_paragraph">We're giving away a FREE $10 Amazon gift card to the next 500 people who download the Capital One Shopping extension.</p>
    <div style="display: flex; flex-direction: row; justify-content: center; max-width: 425px; margin-bottom: 30px;">
    <input type="checkbox" style="width: 80px;" id="checkbox_amazon_login" />
    <p style="font-family: 'Roboto'; font-weight: normal; font-size: 14px; line-height: 1.4; text-align: left; margin-top: 0; margin-bottom: 10px; color: #2c2d2d; margin-left: 18px;" id="pop_amazon_check_paragraph">
    By checking this box, you agree to OnlineShoppingTools™ collecting and processing your email address for the purpose of delivering an e-gift card as stated in the Terms and Conditions and Privacy Policy.
    </p>
    </div>
    <button id="atn_hold_up_login" style="display: flex; text-decoration: none; align-items: center; justify-content: center; cursor: pointer; border: none; margin-bottom: 80px; letter-spacing: 0.02em; background: none;" disabled>
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_312x64.png" class="chakra-image css-196ifv2">
    </button>
    <button id="atn_hold_up_continue" style="display: flex; text-decoration: none; align-items: center; justify-content: center; color: white; max-width: 496px; min-width: 382px; height: 84px; font-family: 'Helvetica'; font-size: 28px; line-height: 32px; border-radius: 5px; background-color: rgb(49, 109, 244); cursor: pointer; font-weight: bold; border: none; margin-bottom: 60px; margin-top: 30px; letter-spacing: 0.02em; box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.55); display: none;" >
    <p style="color: #FFFFFF; font-size: 36px;">Continue</p>
    </button>
    <div style="width: 100%; display: flex; justify-content: center; margin-bottom: 65px; align-items: center;">
      <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg" style="width: 185px; height: 34px; opacity: 0.3; margin: 0 28.5px;" />
      <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg" style="width: 100px; height: 25px; opacity: 0.3; margin: 0 28.5px;" />
      <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg" style="width: 124px; height: 22px; opacity: 0.3; margin: 0 28.5px;" />
    </div>
  </div>
</div>
`;
    taxHoldUp.innerHTML = `
  <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; color: #2D2D2D; background-color: #001c20; font-family: 'Montserrat';">
  <div style="display: flex; justify-content: start; align-items: center; position: relative; background-color: white; flex-direction: column; width: 780px; height: 780px; border: 1px solid black; padding-top: 30px;">
  <p style="font-family: 'Roboto'; font-weight: bold; font-size: 56px; line-height: 40px; text-align: center; margin-bottom: 20px; margin-top: 30px; color: #2c2d2d; letter-spacing: 2px;">It's tax refund time!</p>
    <p style="font-family: 'Roboto'; font-weight: 500; font-size: 28px; line-height: 39px; text-align: center; margin-top: 20px; margin-bottom: 26px; color: #2c2d2d;">You're almost out of time to file your taxes.</p>
    <div style="display: flex; width: 443px;  justify-content: space-between; margin-bottom: 36px; margin-top: 10px;">
    
      <div style="display: flex; border: solid 2px #c9292a; flex-direction: column; background-color: #fef5f1; justify-content: center; align-items: center; width: 90px; height: 93px;">
          <p class="days" style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 30px;"></p>
          <p style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 26px;">Days</p>
      </div>

      <div style="display: flex; border: solid 2px #c9292a; flex-direction: column; background-color: #fef5f1; justify-content: center; align-items: center; width: 90px; height: 93px;">
          <p class="hours" style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 30px;"></p>
          <p style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 26px;">Hours</p>
      </div>

      <div style="display: flex; border: solid 2px #c9292a; flex-direction: column; background-color: #fef5f1; justify-content: center; align-items: center; width: 90px; height: 93px;">
          <p class="minutes" style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 30px;"></p>
          <p style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 26px;">Min</p>
      </div>

      <div style="display: flex; border: solid 2px #c9292a; flex-direction: column; background-color: #fef5f1; justify-content: center; align-items: center; width: 90px; height: 93px;">
          <p class="seconds" style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 30px;"></p>
          <p style="margin: 0px; color: #c9292a; font-family: 'Roboto'; font-weight: bold; font-size: 26px;">Sec</p>
      </div>

    </div>
    <p style="font-family: 'Roboto'; font-weight: 500; font-size: 30px; line-height: 28px; text-align: center; margin-top: 0; margin-bottom: 38px; color: #2c2d2d;">Don't let taxes stress you out.</p>
    <p style="font-family: 'Roboto'; font-weight: 500; font-size: 30px; line-height: 28px; text-align: center; margin-top: 0; margin-bottom: 10px; color: #2c2d2d;">It's fast, easy, and totally free.</p>
    <button id="hold_up_get_coupons" style="display: flex; flex-direction: column; text-decoration: none; align-items: center; justify-content: center; color: white; max-width: 496px; min-width: 394px; height: 74px; font-family: 'Helvetica'; font-size: 28px; line-height: 32px; background-color: #1E881B; cursor: pointer; font-weight: bold; border: none; margin-bottom: 15px; margin-top: 50px; letter-spacing: 0.02em; padding-top: 10px; border-radius: 5px; box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.55);">
      Start for Free
      <span style="font-size: 14px;" id="hold_up_get_coupons">Pay only when you file</span>
    </button>
    <a href="${fallbackUrl}" id="holdup_dismiss" style="font-family: 'Helvetica'; text-decoration: none; font-weight: normal; font-size: 18px; line-height: 31px; text-align: center; margin-bottom: 45px; color: #9ca2aa; letter-spacing: 0.02em; cursor: pointer;">No Thanks</a>
    <div style="width: 100%; display: flex; justify-content: center; margin-bottom: 35px; margin-top: 35px; align-items: center;">
      <img src="https://cdn.onlineshoppingtools.com/usa-today-black.svg" style="width: 185px; height: 34px; opacity: 0.3; margin: 0 28.5px;" />
      <img src="https://cdn.onlineshoppingtools.com/forbes-black.svg" style="width: 100px; height: 25px; opacity: 0.3; margin: 0 28.5px;" />
      <img src="https://cdn.onlineshoppingtools.com/mashable-black.svg" style="width: 124px; height: 22px; opacity: 0.3; margin: 0 28.5px;" />
    </div>
  </div>
</div>
`;
    const popupsMapping = {
        [popups.ts]: taxHoldUp,
        [popups.amzngc]: amazonPopUp,
        default: popUpGeneral,
    };
    if (body) {
        body.append(popupsMapping[popupValue] || popupsMapping.default);
    }
    const action2Button = document.getElementById("hold_up_get_coupons");
    const action2ButtonView = document.getElementById("hold_up_get_coupons_view");
    const action2welcomeButton = document.getElementById("welcome_get_coupons");
    const action2ButtonClose = document.getElementById("hold_up_get_coupons_close");
    const amazonCheckbox = document.getElementById("checkbox_amazon_login");
    const amazonLoginButton = document.getElementById("atn_hold_up_login");
    const continueButton = document.getElementById("atn_hold_up_continue");
    if (msDebug == "1") {
        console.log(action2Button);
    }
    for (const actionBtn of [
        action2Button,
        action2welcomeButton,
        action2ButtonView,
    ]) {
        if (actionBtn) {
            actionBtn.onclick = () => {
                const url = getHoldupUrl();
                if (c2cConf) {
                    ms_c2c(url, c2cConf);
                }
                const win = window.open(url, "_blank");
                if (!win) {
                    window.location.href = url;
                }
            };
        }
    }
    if (action2ButtonClose) {
        action2ButtonClose.onclick = () => {
            const banner = document.getElementById("hold_up_get_coupons_banner");
            if (banner)
                banner.classList.add("hidden");
        };
    }
    if (amazonCheckbox && amazonLoginButton) {
        amazonLoginButton.style.opacity = "0.4";
        amazonLoginButton.disabled = true;
        amazonLoginButton.onclick = () => {
            loginWithAmazon();
        };
        amazonCheckbox.onclick = () => {
            if (amazonCheckbox.checked) {
                amazonLoginButton.disabled = false;
                amazonLoginButton.style.opacity = "1";
            }
            else {
                amazonLoginButton.disabled = true;
                amazonLoginButton.style.opacity = "0.4";
            }
        };
    }
    function onAmazonSuccess() {
        const title = document.getElementById("pop_amazon_title");
        const paragraph = document.getElementById("pop_amazon_paragraph");
        const checkText = document.getElementById("pop_amazon_check_paragraph");
        if (amazonCheckbox) {
            amazonCheckbox.style.display = "none";
        }
        if (title) {
            title.textContent = "";
            title.textContent = amazonSuccessTitle;
        }
        if (paragraph) {
            paragraph.textContent = "";
            paragraph.textContent = successparagraph;
        }
        if (checkText) {
            checkText.textContent = "";
            checkText.textContent =
                browser === "Firefox"
                    ? firefoxSuccess
                    : browser + " " + browsersSuccess;
        }
        if (amazonLoginButton && continueButton) {
            amazonLoginButton.style.display = "none";
            continueButton.style.display = "flex";
        }
    }
    function loginWithAmazon() {
        const options = {
            scope: "profile",
            response_type: "code",
            redirect_uri: "http://127.0.0.1:5500/index.html?popup=amzngc",
            pkce: true,
        };
        window.amazon.Login.setClientId("amzn1.application-oa2-client.9de677edccdd4a21849e00175ea1ebfe");
        window.amazon.Login.authorize(options, (response) => {
            if (response.error) {
                alert("oauth error " + response.error);
                return;
            }
            onAmazonSuccess();
            window.amazon.Login.retrieveToken(response.code, (response) => {
                if (response.error) {
                    alert("oauth error " + response.error);
                    return;
                }
                window.amazon.Login.retrieveProfile(response.access_token);
            });
        });
    }
    const showPopup = (intervalId) => {
        addPopupStyles();
        modalStyles[0].onload = function () {
            popUpGeneral.style.display = "block";
        };
        if (holdup === "qr") {
            generateQRCode(qrcodeUrl, msDebug);
        }
        if (intervalId) {
            clearInterval(intervalId);
        }
    };
    const showClock = (intervalId) => {
        taxHoldUp.style.display = "block";
        countDownClock(diffDays, "days");
        if (intervalId) {
            clearInterval(intervalId);
        }
    };
    const showAmazonPopup = (intervalId) => {
        amazonPopUp.style.display = "block";
        if (intervalId) {
            clearInterval(intervalId);
        }
    };
    if (openInNewTab) {
        if (c2cConf) {
            ms_c2c(redirectUrl, c2cConf);
        }
        const win = window.open(redirectUrl, "_blank");
        if (skipInterval) {
            // Show popup immediately without waiting for window to close
            if (popup === "ts") {
                showClock();
            }
            else if (popup === "amzngc") {
                showAmazonPopup();
            }
            else if (!skipHoldUpModal) {
                showPopup();
            }
        }
        else {
            const intervalId = setInterval(() => {
                if (win === null || win === void 0 ? void 0 : win.closed) {
                    clearInterval(intervalId);
                    if (popup === "ts") {
                        showClock(intervalId);
                    }
                    else if (popup === "amzngc") {
                        showAmazonPopup(intervalId);
                    }
                    else if (!skipHoldUpModal) {
                        showPopup(intervalId);
                    }
                }
            }, 100);
            document.addEventListener("visibilitychange", function () {
                if (document.visibilityState === "visible") {
                    if (popup === "ts") {
                        showClock();
                    }
                    else if (popup === "amzngc") {
                        showAmazonPopup();
                    }
                    else if (!skipHoldUpModal) {
                        showPopup(intervalId);
                    }
                }
            });
        }
    }
    else if (skipInterval) {
        // Show popup immediately
        if (popup === "ts") {
            showClock();
        }
        else if (popup === "amzngc") {
            showAmazonPopup();
        }
        else if (!skipHoldUpModal) {
            showPopup();
        }
    }
    else {
        const intervalId = setInterval(() => {
            if (popup === "ts") {
                showClock(intervalId);
            }
            else if (popup === "amzngc") {
                showAmazonPopup(intervalId);
            }
            else if (!skipHoldUpModal) {
                showPopup(intervalId);
            }
        }, 100);
    }
}
function closeGeneralModal() {
    if (window.displayButtonContainer) {
        window.displayButtonContainer("none");
    }
    // Select the <link> element by its href attribute
    // remove css
    const linkElement = document.querySelector('link[href="https://cdn.jsdelivr.net/npm/@picocss/pico@1.5.13/css/pico.min.css"]');
    if (linkElement) {
        // Remove the <link> element from the DOM
        linkElement.remove();
    }
    const popupModal = document.getElementById("general-popup");
    document.body.classList.remove("no-scroll");
    document.body.style.overflow = "auto";
    if (popupModal) {
        popupModal.remove();
    }
    const existElement = Array.isArray(window.dataLayer) &&
        window.dataLayer.find(function (data) {
            return data["buttonClosedBy"];
        });
    if (existElement) {
        return;
    }
    // showBottomButton('block')
    showToastiBar();
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dist = {};

var alea$1 = {exports: {}};

alea$1.exports;

(function (module) {
	// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
	// http://baagoe.com/en/RandomMusings/javascript/
	// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
	// Original work is under MIT license -

	// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	// THE SOFTWARE.



	(function(global, module, define) {

	function Alea(seed) {
	  var me = this, mash = Mash();

	  me.next = function() {
	    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
	    me.s0 = me.s1;
	    me.s1 = me.s2;
	    return me.s2 = t - (me.c = t | 0);
	  };

	  // Apply the seeding algorithm from Baagoe.
	  me.c = 1;
	  me.s0 = mash(' ');
	  me.s1 = mash(' ');
	  me.s2 = mash(' ');
	  me.s0 -= mash(seed);
	  if (me.s0 < 0) { me.s0 += 1; }
	  me.s1 -= mash(seed);
	  if (me.s1 < 0) { me.s1 += 1; }
	  me.s2 -= mash(seed);
	  if (me.s2 < 0) { me.s2 += 1; }
	  mash = null;
	}

	function copy(f, t) {
	  t.c = f.c;
	  t.s0 = f.s0;
	  t.s1 = f.s1;
	  t.s2 = f.s2;
	  return t;
	}

	function impl(seed, opts) {
	  var xg = new Alea(seed),
	      state = opts && opts.state,
	      prng = xg.next;
	  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; };
	  prng.double = function() {
	    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
	  };
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); };
	  }
	  return prng;
	}

	function Mash() {
	  var n = 0xefc8249d;

	  var mash = function(data) {
	    data = String(data);
	    for (var i = 0; i < data.length; i++) {
	      n += data.charCodeAt(i);
	      var h = 0.02519603282416938 * n;
	      n = h >>> 0;
	      h -= n;
	      h *= n;
	      n = h >>> 0;
	      h -= n;
	      n += h * 0x100000000; // 2^32
	    }
	    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
	  };

	  return mash;
	}


	if (module && module.exports) {
	  module.exports = impl;
	} else {
	  this.alea = impl;
	}

	})(
	  commonjsGlobal,
	  module); 
} (alea$1));

var aleaExports = alea$1.exports;

var xor128$1 = {exports: {}};

xor128$1.exports;

(function (module) {
	// A Javascript implementaion of the "xor128" prng algorithm by
	// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this, strseed = '';

	  me.x = 0;
	  me.y = 0;
	  me.z = 0;
	  me.w = 0;

	  // Set up generator function.
	  me.next = function() {
	    var t = me.x ^ (me.x << 11);
	    me.x = me.y;
	    me.y = me.z;
	    me.z = me.w;
	    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
	  };

	  if (seed === (seed | 0)) {
	    // Integer seed.
	    me.x = seed;
	  } else {
	    // String seed.
	    strseed += seed;
	  }

	  // Mix in string seed, then discard an initial batch of 64 values.
	  for (var k = 0; k < strseed.length + 64; k++) {
	    me.x ^= strseed.charCodeAt(k) | 0;
	    me.next();
	  }
	}

	function copy(f, t) {
	  t.x = f.x;
	  t.y = f.y;
	  t.z = f.z;
	  t.w = f.w;
	  return t;
	}

	function impl(seed, opts) {
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); };
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else {
	  this.xor128 = impl;
	}

	})(
	  commonjsGlobal,
	  module); 
} (xor128$1));

var xor128Exports = xor128$1.exports;

var xorwow$1 = {exports: {}};

xorwow$1.exports;

(function (module) {
	// A Javascript implementaion of the "xorwow" prng algorithm by
	// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this, strseed = '';

	  // Set up generator function.
	  me.next = function() {
	    var t = (me.x ^ (me.x >>> 2));
	    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
	    return (me.d = (me.d + 362437 | 0)) +
	       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
	  };

	  me.x = 0;
	  me.y = 0;
	  me.z = 0;
	  me.w = 0;
	  me.v = 0;

	  if (seed === (seed | 0)) {
	    // Integer seed.
	    me.x = seed;
	  } else {
	    // String seed.
	    strseed += seed;
	  }

	  // Mix in string seed, then discard an initial batch of 64 values.
	  for (var k = 0; k < strseed.length + 64; k++) {
	    me.x ^= strseed.charCodeAt(k) | 0;
	    if (k == strseed.length) {
	      me.d = me.x << 10 ^ me.x >>> 4;
	    }
	    me.next();
	  }
	}

	function copy(f, t) {
	  t.x = f.x;
	  t.y = f.y;
	  t.z = f.z;
	  t.w = f.w;
	  t.v = f.v;
	  t.d = f.d;
	  return t;
	}

	function impl(seed, opts) {
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); };
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else {
	  this.xorwow = impl;
	}

	})(
	  commonjsGlobal,
	  module); 
} (xorwow$1));

var xorwowExports = xorwow$1.exports;

var xorshift7$1 = {exports: {}};

xorshift7$1.exports;

(function (module) {
	// A Javascript implementaion of the "xorshift7" algorithm by
	// François Panneton and Pierre L'ecuyer:
	// "On the Xorgshift Random Number Generators"
	// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this;

	  // Set up generator function.
	  me.next = function() {
	    // Update xor generator.
	    var X = me.x, i = me.i, t, v;
	    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
	    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
	    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
	    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
	    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
	    X[i] = v;
	    me.i = (i + 1) & 7;
	    return v;
	  };

	  function init(me, seed) {
	    var j, X = [];

	    if (seed === (seed | 0)) {
	      // Seed state array using a 32-bit integer.
	      X[0] = seed;
	    } else {
	      // Seed state using a string.
	      seed = '' + seed;
	      for (j = 0; j < seed.length; ++j) {
	        X[j & 7] = (X[j & 7] << 15) ^
	            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
	      }
	    }
	    // Enforce an array length of 8, not all zeroes.
	    while (X.length < 8) X.push(0);
	    for (j = 0; j < 8 && X[j] === 0; ++j);
	    if (j == 8) X[7] = -1; else X[j];

	    me.x = X;
	    me.i = 0;

	    // Discard an initial 256 values.
	    for (j = 256; j > 0; --j) {
	      me.next();
	    }
	  }

	  init(me, seed);
	}

	function copy(f, t) {
	  t.x = f.x.slice();
	  t.i = f.i;
	  return t;
	}

	function impl(seed, opts) {
	  if (seed == null) seed = +(new Date);
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (state.x) copy(state, xg);
	    prng.state = function() { return copy(xg, {}); };
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else {
	  this.xorshift7 = impl;
	}

	})(
	  commonjsGlobal,
	  module); 
} (xorshift7$1));

var xorshift7Exports = xorshift7$1.exports;

var xor4096$1 = {exports: {}};

xor4096$1.exports;

(function (module) {
	// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
	//
	// This fast non-cryptographic random number generator is designed for
	// use in Monte-Carlo algorithms. It combines a long-period xorshift
	// generator with a Weyl generator, and it passes all common batteries
	// of stasticial tests for randomness while consuming only a few nanoseconds
	// for each prng generated.  For background on the generator, see Brent's
	// paper: "Some long-period random number generators using shifts and xors."
	// http://arxiv.org/pdf/1004.3115v1.pdf
	//
	// Usage:
	//
	// var xor4096 = require('xor4096');
	// random = xor4096(1);                        // Seed with int32 or string.
	// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
	// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
	//
	// For nonzero numeric keys, this impelementation provides a sequence
	// identical to that by Brent's xorgens 3 implementaion in C.  This
	// implementation also provides for initalizing the generator with
	// string seeds, or for saving and restoring the state of the generator.
	//
	// On Chrome, this prng benchmarks about 2.1 times slower than
	// Javascript's built-in Math.random().

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this;

	  // Set up generator function.
	  me.next = function() {
	    var w = me.w,
	        X = me.X, i = me.i, t, v;
	    // Update Weyl generator.
	    me.w = w = (w + 0x61c88647) | 0;
	    // Update xor generator.
	    v = X[(i + 34) & 127];
	    t = X[i = ((i + 1) & 127)];
	    v ^= v << 13;
	    t ^= t << 17;
	    v ^= v >>> 15;
	    t ^= t >>> 12;
	    // Update Xor generator array state.
	    v = X[i] = v ^ t;
	    me.i = i;
	    // Result is the combination.
	    return (v + (w ^ (w >>> 16))) | 0;
	  };

	  function init(me, seed) {
	    var t, v, i, j, w, X = [], limit = 128;
	    if (seed === (seed | 0)) {
	      // Numeric seeds initialize v, which is used to generates X.
	      v = seed;
	      seed = null;
	    } else {
	      // String seeds are mixed into v and X one character at a time.
	      seed = seed + '\0';
	      v = 0;
	      limit = Math.max(limit, seed.length);
	    }
	    // Initialize circular array and weyl value.
	    for (i = 0, j = -32; j < limit; ++j) {
	      // Put the unicode characters into the array, and shuffle them.
	      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
	      // After 32 shuffles, take v as the starting w value.
	      if (j === 0) w = v;
	      v ^= v << 10;
	      v ^= v >>> 15;
	      v ^= v << 4;
	      v ^= v >>> 13;
	      if (j >= 0) {
	        w = (w + 0x61c88647) | 0;     // Weyl.
	        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
	        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
	      }
	    }
	    // We have detected all zeroes; make the key nonzero.
	    if (i >= 128) {
	      X[(seed && seed.length || 0) & 127] = -1;
	    }
	    // Run the generator 512 times to further mix the state before using it.
	    // Factoring this as a function slows the main generator, so it is just
	    // unrolled here.  The weyl generator is not advanced while warming up.
	    i = 127;
	    for (j = 4 * 128; j > 0; --j) {
	      v = X[(i + 34) & 127];
	      t = X[i = ((i + 1) & 127)];
	      v ^= v << 13;
	      t ^= t << 17;
	      v ^= v >>> 15;
	      t ^= t >>> 12;
	      X[i] = v ^ t;
	    }
	    // Storing state as object members is faster than using closure variables.
	    me.w = w;
	    me.X = X;
	    me.i = i;
	  }

	  init(me, seed);
	}

	function copy(f, t) {
	  t.i = f.i;
	  t.w = f.w;
	  t.X = f.X.slice();
	  return t;
	}
	function impl(seed, opts) {
	  if (seed == null) seed = +(new Date);
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (state.X) copy(state, xg);
	    prng.state = function() { return copy(xg, {}); };
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else {
	  this.xor4096 = impl;
	}

	})(
	  commonjsGlobal,                                     // window object or global
	  module); 
} (xor4096$1));

var xor4096Exports = xor4096$1.exports;

var tychei$1 = {exports: {}};

tychei$1.exports;

(function (module) {
	// A Javascript implementaion of the "Tyche-i" prng algorithm by
	// Samuel Neves and Filipe Araujo.
	// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this, strseed = '';

	  // Set up generator function.
	  me.next = function() {
	    var b = me.b, c = me.c, d = me.d, a = me.a;
	    b = (b << 25) ^ (b >>> 7) ^ c;
	    c = (c - d) | 0;
	    d = (d << 24) ^ (d >>> 8) ^ a;
	    a = (a - b) | 0;
	    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
	    me.c = c = (c - d) | 0;
	    me.d = (d << 16) ^ (c >>> 16) ^ a;
	    return me.a = (a - b) | 0;
	  };

	  /* The following is non-inverted tyche, which has better internal
	   * bit diffusion, but which is about 25% slower than tyche-i in JS.
	  me.next = function() {
	    var a = me.a, b = me.b, c = me.c, d = me.d;
	    a = (me.a + me.b | 0) >>> 0;
	    d = me.d ^ a; d = d << 16 ^ d >>> 16;
	    c = me.c + d | 0;
	    b = me.b ^ c; b = b << 12 ^ d >>> 20;
	    me.a = a = a + b | 0;
	    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
	    me.c = c = c + d | 0;
	    b = b ^ c;
	    return me.b = (b << 7 ^ b >>> 25);
	  }
	  */

	  me.a = 0;
	  me.b = 0;
	  me.c = 2654435769 | 0;
	  me.d = 1367130551;

	  if (seed === Math.floor(seed)) {
	    // Integer seed.
	    me.a = (seed / 0x100000000) | 0;
	    me.b = seed | 0;
	  } else {
	    // String seed.
	    strseed += seed;
	  }

	  // Mix in string seed, then discard an initial batch of 64 values.
	  for (var k = 0; k < strseed.length + 20; k++) {
	    me.b ^= strseed.charCodeAt(k) | 0;
	    me.next();
	  }
	}

	function copy(f, t) {
	  t.a = f.a;
	  t.b = f.b;
	  t.c = f.c;
	  t.d = f.d;
	  return t;
	}
	function impl(seed, opts) {
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); };
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else {
	  this.tychei = impl;
	}

	})(
	  commonjsGlobal,
	  module); 
} (tychei$1));

var tycheiExports = tychei$1.exports;

var seedrandom$1 = {exports: {}};

/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (module) {
	(function (global, pool, math) {
	//
	// The following constants are related to IEEE 754 limits.
	//

	var width = 256,        // each RC4 output is 0 <= x < 256
	    chunks = 6,         // at least six RC4 outputs for each double
	    digits = 52,        // there are 52 significant digits in a double
	    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
	    startdenom = math.pow(width, chunks),
	    significance = math.pow(2, digits),
	    overflow = significance * 2,
	    mask = width - 1,
	    nodecrypto;         // node.js crypto module, initialized at the bottom.

	//
	// seedrandom()
	// This is the seedrandom function described above.
	//
	function seedrandom(seed, options, callback) {
	  var key = [];
	  options = (options == true) ? { entropy: true } : (options || {});

	  // Flatten the seed string or build one from local entropy if needed.
	  var shortseed = mixkey(flatten(
	    options.entropy ? [seed, tostring(pool)] :
	    (seed == null) ? autoseed() : seed, 3), key);

	  // Use the seed to initialize an ARC4 generator.
	  var arc4 = new ARC4(key);

	  // This function returns a random double in [0, 1) that contains
	  // randomness in every bit of the mantissa of the IEEE 754 value.
	  var prng = function() {
	    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
	        d = startdenom,                 //   and denominator d = 2 ^ 48.
	        x = 0;                          //   and no 'extra last byte'.
	    while (n < significance) {          // Fill up all significant digits by
	      n = (n + x) * width;              //   shifting numerator and
	      d *= width;                       //   denominator and generating a
	      x = arc4.g(1);                    //   new least-significant-byte.
	    }
	    while (n >= overflow) {             // To avoid rounding up, before adding
	      n /= 2;                           //   last byte, shift everything
	      d /= 2;                           //   right using integer math until
	      x >>>= 1;                         //   we have exactly the desired bits.
	    }
	    return (n + x) / d;                 // Form the number within [0, 1).
	  };

	  prng.int32 = function() { return arc4.g(4) | 0; };
	  prng.quick = function() { return arc4.g(4) / 0x100000000; };
	  prng.double = prng;

	  // Mix the randomness into accumulated entropy.
	  mixkey(tostring(arc4.S), pool);

	  // Calling convention: what to return as a function of prng, seed, is_math.
	  return (options.pass || callback ||
	      function(prng, seed, is_math_call, state) {
	        if (state) {
	          // Load the arc4 state from the given state if it has an S array.
	          if (state.S) { copy(state, arc4); }
	          // Only provide the .state method if requested via options.state.
	          prng.state = function() { return copy(arc4, {}); };
	        }

	        // If called as a method of Math (Math.seedrandom()), mutate
	        // Math.random because that is how seedrandom.js has worked since v1.0.
	        if (is_math_call) { math[rngname] = prng; return seed; }

	        // Otherwise, it is a newer calling convention, so return the
	        // prng directly.
	        else return prng;
	      })(
	  prng,
	  shortseed,
	  'global' in options ? options.global : (this == math),
	  options.state);
	}

	//
	// ARC4
	//
	// An ARC4 implementation.  The constructor takes a key in the form of
	// an array of at most (width) integers that should be 0 <= x < (width).
	//
	// The g(count) method returns a pseudorandom integer that concatenates
	// the next (count) outputs from ARC4.  Its return value is a number x
	// that is in the range 0 <= x < (width ^ count).
	//
	function ARC4(key) {
	  var t, keylen = key.length,
	      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

	  // The empty key [] is treated as [0].
	  if (!keylen) { key = [keylen++]; }

	  // Set up S using the standard key scheduling algorithm.
	  while (i < width) {
	    s[i] = i++;
	  }
	  for (i = 0; i < width; i++) {
	    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
	    s[j] = t;
	  }

	  // The "g" method returns the next (count) outputs as one number.
	  (me.g = function(count) {
	    // Using instance members instead of closure state nearly doubles speed.
	    var t, r = 0,
	        i = me.i, j = me.j, s = me.S;
	    while (count--) {
	      t = s[i = mask & (i + 1)];
	      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
	    }
	    me.i = i; me.j = j;
	    return r;
	    // For robust unpredictability, the function call below automatically
	    // discards an initial batch of values.  This is called RC4-drop[256].
	    // See http://google.com/search?q=rsa+fluhrer+response&btnI
	  })(width);
	}

	//
	// copy()
	// Copies internal state of ARC4 to or from a plain object.
	//
	function copy(f, t) {
	  t.i = f.i;
	  t.j = f.j;
	  t.S = f.S.slice();
	  return t;
	}
	//
	// flatten()
	// Converts an object tree to nested arrays of strings.
	//
	function flatten(obj, depth) {
	  var result = [], typ = (typeof obj), prop;
	  if (depth && typ == 'object') {
	    for (prop in obj) {
	      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
	    }
	  }
	  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
	}

	//
	// mixkey()
	// Mixes a string seed into a key that is an array of integers, and
	// returns a shortened string seed that is equivalent to the result key.
	//
	function mixkey(seed, key) {
	  var stringseed = seed + '', smear, j = 0;
	  while (j < stringseed.length) {
	    key[mask & j] =
	      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
	  }
	  return tostring(key);
	}

	//
	// autoseed()
	// Returns an object for autoseeding, using window.crypto and Node crypto
	// module if available.
	//
	function autoseed() {
	  try {
	    var out;
	    if (nodecrypto && (out = nodecrypto.randomBytes)) {
	      // The use of 'out' to remember randomBytes makes tight minified code.
	      out = out(width);
	    } else {
	      out = new Uint8Array(width);
	      (global.crypto || global.msCrypto).getRandomValues(out);
	    }
	    return tostring(out);
	  } catch (e) {
	    var browser = global.navigator,
	        plugins = browser && browser.plugins;
	    return [+new Date, global, plugins, global.screen, tostring(pool)];
	  }
	}

	//
	// tostring()
	// Converts an array of charcodes to a string
	//
	function tostring(a) {
	  return String.fromCharCode.apply(0, a);
	}

	//
	// When seedrandom.js is loaded, we immediately mix a few bits
	// from the built-in RNG into the entropy pool.  Because we do
	// not want to interfere with deterministic PRNG state later,
	// seedrandom will not call math.random on its own again after
	// initialization.
	//
	mixkey(math.random(), pool);

	//
	// Nodejs and AMD support: export the implementation as a module using
	// either convention.
	//
	if (module.exports) {
	  module.exports = seedrandom;
	  // When in node.js, try using crypto package for autoseeding.
	  try {
	    nodecrypto = require('crypto');
	  } catch (ex) {}
	} else {
	  // When included as a plain script, set up Math.seedrandom global.
	  math['seed' + rngname] = seedrandom;
	}


	// End anonymous scope, and pass initial values.
	})(
	  // global: `self` in browsers (including strict mode and web workers),
	  // otherwise `this` in Node and other environments
	  (typeof self !== 'undefined') ? self : commonjsGlobal,
	  [],     // pool: entropy pool starts empty
	  Math    // math: package containing random, pow, and seedrandom
	); 
} (seedrandom$1));

var seedrandomExports = seedrandom$1.exports;

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = aleaExports;

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = xor128Exports;

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = xorwowExports;

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = xorshift7Exports;

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = xor4096Exports;

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = tycheiExports;

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = seedrandomExports;

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

var seedrandom = sr;

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(dist, "__esModule", { value: true });
/**
 * This PRNG allows seeding, unlike the lame `Math.random()`.
 * Use it like so:
   ```js
   let seededRandFunc = new seedrandom(seed);
   seededRandFunc(); // Number from 0 to 1
   ```
 */
const seedrandom_1 = __importDefault(seedrandom);
/**
 * Contains static weighted chooser functions.
 */
class Chooser {
}
/**
 * Choose an index based on the weights provided in the number array. Higher weights increase likeliness of being chosen.
 * Returns the chosen index, or `-1` if the array was empty or all weights were `0`.
 *
 * Only the first argument is required.
 *
 * Allows an optional random seed and default weight to use if array values are not numbers.
 *
 * All negative weights are converted to their absolute value.
 *
 * @param weights Weights as an array of numbers.
 * @param seed Optional. Seed used for pseudorandom number generator (PRNG). Defaults to `Math.random()`.
 * @param defaultWeight Optional. Default weight to use if one of the values is not a number. Defaults to `1`.
 *
 * @returns The chosen index as a number, or `-1` if the array was empty or all weights were `0`.
 */
Chooser.chooseWeightedIndex = (weights, seed = Math.random(), defaultWeight = 1) => {
    // If the array is falsy, not an array, or empty, return -1.
    if (!weights || !Array.isArray(weights) || weights.length <= 0) {
        return -1;
    }
    // Keep it positive.
    defaultWeight = Math.abs(defaultWeight);
    let cumulative = 0;
    // Add all weights to cumulative, and build an array of each cumulative value.
    // For example, if the weights are [5, 30, 10], this would build an array
    // containing [5, 35, 45], and cumulative=45.
    const ranges = weights.map((weight) => (cumulative += typeof weight === 'number' && weight >= 0 ? Math.abs(weight) : defaultWeight));
    // Get our PRNG function using the seed.
    const seededRandFunc = new seedrandom_1.default(seed);
    // Select our value.
    const selectedValue = seededRandFunc() * cumulative;
    // If the selected value is within one of the ranges, that's our choice!
    for (let index = 0; index < ranges.length; index++) {
        if (selectedValue < ranges[index]) {
            return index;
        }
    }
    // If nothing was chosen, all weights were 0 or something went wrong.
    return -1;
};
/**
 * Choose an object based on the `"weight"` properties in the object within the provided array.
 * Higher weights increase likeliness of being chosen.
 * Returns the chosen object, or `null` if the array was empty or all weights were `0`.
 *
 * Only the first argument is required.
 *
 * Optionally, you can specify a weight property key, a default weight to use if weight values are not numbers, and random seed.
 *
 * All negative weights are converted to their absolute value.
 *
 * @param arrayOfObjects An array of objects to choose from. Each item should have a weight property.
 * @param weightPropertyKey Optional. The weight property key to use on each object. Defaults to `"weight"`.
 * @param defaultWeight Optional. Default weight to use if one of the values is not a number. Defaults to `1`.
 * @param seed Optional. Seed used for pseudorandom number generator (PRNG). Defaults to `Math.random()`.
 *
 * @returns The chosen object, or `null` if the array was empty or all weights were `0`.
 */
Chooser.chooseWeightedObject = (arrayOfObjects, weightPropertyKey = 'weight', defaultWeight = 1, seed = Math.random()) => {
    // If the array is falsy, not an array, or empty, return null.
    if (!arrayOfObjects || !Array.isArray(arrayOfObjects) || arrayOfObjects.length <= 0) {
        return null;
    }
    // Drop the sign. https://www.youtube.com/watch?v=I7Hea6tdg0c
    defaultWeight = Math.abs(defaultWeight);
    // Collect the weights from the objects into an array.
    const weights = arrayOfObjects.map((currItem) => {
        // When in doubt, we'll use the default.
        let currWeight = defaultWeight;
        // We expect each item to have the weight property
        if (!!currItem) {
            const propValue = currItem[weightPropertyKey];
            // Use the abs of the prop value, but only if it's a number.
            if (typeof propValue === 'number') {
                currWeight = Math.abs(propValue);
            }
        }
        return currWeight;
    });
    // Choose an index based on the weights...
    const chosenIndex = Chooser.chooseWeightedIndex(weights, seed, defaultWeight);
    // If an index was chosen, return the object for that index.
    if (chosenIndex >= 0) {
        return arrayOfObjects[chosenIndex];
    }
    else {
        // Otherwise all weights were 0 or something went wrong. Return null.
        return null;
    }
};
var _default = dist.default = Chooser;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$3 = Array.isArray;

var isArray_1 = isArray$3;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$3 = freeGlobal || freeSelf || Function('return this')();

var _root = root$3;

var root$2 = _root;

/** Built-in value references. */
var Symbol$3 = root$2.Symbol;

var _Symbol = Symbol$3;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$2;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;

var baseGetTag$1 = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$3(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag$1(value) == symbolTag);
}

var isSymbol_1 = isSymbol$3;

var isArray$2 = isArray_1,
    isSymbol$2 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag = _baseGetTag,
    isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

var root$1 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1,
    isMasked = _isMasked,
    isObject = isObject_1,
    toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$2(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$2;

var getNative$1 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$1(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var eq = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

var _Map = Map$1;

var Hash = _Hash,
    ListCache = _ListCache,
    Map = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var Symbol = _Symbol,
    arrayMap = _arrayMap,
    isArray$1 = isArray_1,
    isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray = isArray_1,
    isKey = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$1;

var isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _toKey = toKey$1;

var castPath = _castPath,
    toKey = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$1;

var baseGet = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var get$1 = /*@__PURE__*/getDefaultExportFromCjs(get_1);

/* eslint-disable @typescript-eslint/no-explicit-any */
const buildCTALinks = ({ context, browser, queryString = "", sourceLinks = {}, appendQueryString, utmSource, msDebug, }) => {
    const deviceType = context === null || context === void 0 ? void 0 : context.deviceType;
    const os = context === null || context === void 0 ? void 0 : context.os;
    logDebug(msDebug, `deviceType: ${deviceType}`);
    logDebug(msDebug, `os: ${os}`);
    const defaultUrl = (src, branch) => { var _a, _b, _c; return (_c = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.default) !== null && _b !== void 0 ? _b : src === null || src === void 0 ? void 0 : src[branch]) !== null && _c !== void 0 ? _c : src === null || src === void 0 ? void 0 : src.default; };
    const holdupUrl = (src, branch) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return (_g = (_e = (_c = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.holdup) === null || _b === void 0 ? void 0 : _b.default) !== null && _c !== void 0 ? _c : (_d = src === null || src === void 0 ? void 0 : src[branch]) === null || _d === void 0 ? void 0 : _d.holdup) !== null && _e !== void 0 ? _e : (_f = src === null || src === void 0 ? void 0 : src.holdup) === null || _f === void 0 ? void 0 : _f.default) !== null && _g !== void 0 ? _g : src === null || src === void 0 ? void 0 : src.holdup;
    };
    const welcomeUrl = (src, branch) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return (_g = (_e = (_c = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.welcome) === null || _b === void 0 ? void 0 : _b.default) !== null && _c !== void 0 ? _c : (_d = src === null || src === void 0 ? void 0 : src[branch]) === null || _d === void 0 ? void 0 : _d.welcome) !== null && _e !== void 0 ? _e : (_f = src === null || src === void 0 ? void 0 : src.welcome) === null || _f === void 0 ? void 0 : _f.default) !== null && _g !== void 0 ? _g : src === null || src === void 0 ? void 0 : src.welcome;
    };
    const qrcodeUrl = (src, branch) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return (_g = (_e = (_c = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.qrcode) === null || _b === void 0 ? void 0 : _b.default) !== null && _c !== void 0 ? _c : (_d = src === null || src === void 0 ? void 0 : src[branch]) === null || _d === void 0 ? void 0 : _d.qrcode) !== null && _e !== void 0 ? _e : (_f = src === null || src === void 0 ? void 0 : src.qrcode) === null || _f === void 0 ? void 0 : _f.default) !== null && _g !== void 0 ? _g : src === null || src === void 0 ? void 0 : src.qrcode;
    };
    const findUrls = (src, branch) => {
        return {
            defaultUrl: defaultUrl(src, branch),
            holdupUrl: holdupUrl(src, branch),
            welcomeUrl: welcomeUrl(src, branch),
            qrcodeUrl: qrcodeUrl(src, branch),
        };
    };
    const defaultParams = (src, branch) => { var _a, _b, _c, _d, _e; return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.default) === null || _d === void 0 ? void 0 : _d.params) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params; };
    const holdupParams = (src, branch) => { var _a, _b, _c, _d, _e; return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.holdup) === null || _d === void 0 ? void 0 : _d.params) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params; };
    const welcomeParams = (src, branch) => { var _a, _b, _c, _d, _e; return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.welcome) === null || _d === void 0 ? void 0 : _d.params) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params; };
    const qrcodeParams = (src, branch) => { var _a, _b, _c, _d, _e; return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.qrcode) === null || _d === void 0 ? void 0 : _d.params) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params; };
    const findParams = (src, branch) => {
        return {
            defaultParams: defaultParams(src, branch),
            holdupParams: holdupParams(src, branch),
            welcomeParams: welcomeParams(src, branch),
            qrcodeParams: qrcodeParams(src, branch),
        };
    };
    const defaultParamsMapping = (src, branch) => {
        var _a, _b, _c, _d, _e;
        return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params_mapping) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.default) === null || _d === void 0 ? void 0 : _d.params_mapping) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params_mapping;
    };
    const holdupParamsMapping = (src, branch) => {
        var _a, _b, _c, _d, _e;
        return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params_mapping) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.holdup) === null || _d === void 0 ? void 0 : _d.params_mapping) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params_mapping;
    };
    const welcomeParamsMapping = (src, branch) => {
        var _a, _b, _c, _d, _e;
        return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params_mapping) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.welcome) === null || _d === void 0 ? void 0 : _d.params_mapping) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params_mapping;
    };
    const qrcodeParamsMapping = (src, branch) => {
        var _a, _b, _c, _d, _e;
        return (_e = (_b = (_a = src === null || src === void 0 ? void 0 : src[branch]) === null || _a === void 0 ? void 0 : _a.params_mapping) !== null && _b !== void 0 ? _b : (_d = (_c = src === null || src === void 0 ? void 0 : src[branch]) === null || _c === void 0 ? void 0 : _c.qrcode) === null || _d === void 0 ? void 0 : _d.params_mapping) !== null && _e !== void 0 ? _e : src === null || src === void 0 ? void 0 : src.params_mapping;
    };
    const findParamsMapping = (src, branch) => {
        return {
            defaultParamsMapping: defaultParamsMapping(src, branch),
            holdupParamsMapping: holdupParamsMapping(src, branch),
            welcomeParamsMapping: welcomeParamsMapping(src, branch),
            qrcodeParamsMapping: qrcodeParamsMapping(src, branch),
        };
    };
    const emptyContext = (ctx) => ctx.holdupUrl === undefined &&
        ctx.welcomeUrl === undefined &&
        ctx.default === undefined &&
        ctx.qrcode === undefined &&
        ctx.params.holdup === undefined &&
        ctx.params.welcome === undefined &&
        ctx.params.default === undefined &&
        ctx.params.qrcode === undefined &&
        ctx.params_mapping.holdup === undefined &&
        ctx.params_mapping.welcome === undefined &&
        ctx.params_mapping.default === undefined &&
        ctx.params_mapping.qrcode === undefined;
    const buildContext = (src, branch) => {
        const { defaultUrl, holdupUrl, welcomeUrl, qrcodeUrl } = findUrls(src, branch);
        const { defaultParams, holdupParams, welcomeParams, qrcodeParams } = findParams(src, branch);
        const { defaultParamsMapping, holdupParamsMapping, welcomeParamsMapping, qrcodeParamsMapping, } = findParamsMapping(src, branch);
        return {
            holdup: holdupUrl,
            welcome: welcomeUrl,
            default: defaultUrl,
            qrcode: qrcodeUrl,
            params: {
                holdup: holdupParams,
                welcome: welcomeParams,
                default: defaultParams,
                qrcode: qrcodeParams,
            },
            params_mapping: {
                holdup: holdupParamsMapping,
                welcome: welcomeParamsMapping,
                default: defaultParamsMapping,
                qrcode: qrcodeParamsMapping,
            },
        };
    };
    const buildNodes = () => {
        var _a;
        const buildQueryStringNodes = () => queryStringAsList(queryString !== null && queryString !== void 0 ? queryString : "").reduce((acc, curr) => {
            var _a;
            const root = (_a = get$1(sourceLinks, `query_string.${curr.key}`)) !== null && _a !== void 0 ? _a : {};
            const utm = get$1(sourceLinks, `${utmSource}.query_string.${curr.key}`);
            const device_os = get$1(sourceLinks, `${utmSource}.${deviceType}.${os}.query_string.${curr.key}`);
            const device = get$1(sourceLinks, `${utmSource}.${deviceType}.query_string.${curr.key}`);
            const web_browser = get$1(sourceLinks, `${utmSource}.${browser}.query_string.${curr.key}`);
            const nodes = [
                buildContext(device_os, curr.value),
                buildContext(device, curr.value),
                buildContext(web_browser, curr.value),
                buildContext(utm, curr.value),
                buildContext(root, curr.value),
            ];
            return acc.concat(nodes);
        }, []);
        const queryStringNodes = buildQueryStringNodes();
        const utmSourceDeviceType = (_a = sourceLinks[utmSource]) === null || _a === void 0 ? void 0 : _a[deviceType !== null && deviceType !== void 0 ? deviceType : ""];
        const contextNodes = [
            buildContext(utmSourceDeviceType, os),
            buildContext(utmSourceDeviceType, null),
            buildContext(utmSourceDeviceType, os),
            buildContext(utmSourceDeviceType, null),
            buildContext(sourceLinks[deviceType], os),
            buildContext(sourceLinks[deviceType], null),
            buildContext(sourceLinks[utmSource], browser),
            buildContext(sourceLinks, utmSource),
            buildContext(sourceLinks, "default"),
            buildContext(sourceLinks, null),
        ];
        const nodes = queryStringNodes.concat(contextNodes);
        return nodes.filter((ctx) => !emptyContext(ctx));
    };
    const getValue = (nodes, prop) => {
        for (const l of nodes) {
            const y = l[prop];
            if (y)
                return y;
        }
        return undefined;
    };
    const getValueFrom = (nodes, from, prop) => {
        for (const l of nodes) {
            const y = get$1(l, `${from}.${prop}`);
            if (y)
                return y;
        }
        return undefined;
    };
    const pruneQueryString = (queryString) => queryString.endsWith("&")
        ? queryString.slice(0, -1) // remove last '&'
        : queryString;
    const buildQueryString = (queryString, customParams) => {
        const paramArr = queryStringToArray(queryString);
        const newQueryString = paramArr.reduce((acc, curr) => {
            const [key] = curr.split("=");
            const hasKey = customParams.includes(key);
            return hasKey ? `${acc}${curr}&` : acc;
        }, "");
        return newQueryString ? `?${pruneQueryString(newQueryString)}` : "";
    };
    const buildQueryStringMapping = (queryString, params_mapping) => {
        const doMapping = () => {
            const params = queryStringAsList(queryString);
            const newQueryString = params.reduce((acc, curr) => {
                var _a, _b;
                const pkey = (_b = (_a = params_mapping === null || params_mapping === void 0 ? void 0 : params_mapping.filter((c) => c.source === curr.key)[0]) === null || _a === void 0 ? void 0 : _a.target) !== null && _b !== void 0 ? _b : curr.key;
                return `${acc}${pkey}=${curr.value}&`;
            }, "");
            return newQueryString ? `?${pruneQueryString(newQueryString)}` : "";
        };
        if (params_mapping && (params_mapping === null || params_mapping === void 0 ? void 0 : params_mapping.length) > 0)
            return doMapping();
        else
            return queryString;
    };
    const buildUrlWithParams = (url, params, params_mapping) => {
        if (params && (params === null || params === void 0 ? void 0 : params.length) > 0) {
            const newQueryString = buildQueryString(queryString, params);
            let qsparams = buildQueryStringMapping(newQueryString, params_mapping);
            const urlWithQryPrms = url.indexOf("?") > -1;
            if (urlWithQryPrms && qsparams.startsWith("?")) {
                qsparams = "&" + qsparams.substring(1);
            }
            return `${url}${qsparams}`;
        }
        else {
            const qsparams = buildQueryStringMapping(queryString, params_mapping);
            const resultUrl = `${url}${qsparams}`;
            const urlParts = resultUrl.split("?");
            if (urlParts.length === 3) {
                const [base, params1, params2] = urlParts;
                return `${base}?${params1}&${params2}`;
            }
            return resultUrl;
        }
    };
    const buildUrl = (url, params, params_mapping) => {
        return appendQueryString && url
            ? buildUrlWithParams(url, params, params_mapping)
            : url;
    };
    const buildLinks = () => {
        const nodes = buildNodes();
        const getParams = (prop) => getValueFrom(nodes, "params", prop);
        const getParamsMapping = (prop) => getValueFrom(nodes, "params_mapping", prop);
        const findUrl = (prop) => {
            const value = getValue(nodes, prop);
            if (Array.isArray(value)) {
                const weighted = _default.chooseWeightedObject(value);
                return weighted === null || weighted === void 0 ? void 0 : weighted.default;
            }
            return value;
        };
        const context = {
            default: findUrl("default"),
            holdup: findUrl("holdup"),
            welcome: findUrl("welcome"),
            qrcode: findUrl("qrcode"),
            params: {
                default: getParams("default"),
                welcome: getParams("welcome"),
                holdup: getParams("holdup"),
                qrcode: getParams("qrcode"),
            },
            params_mapping: {
                default: getParamsMapping("default"),
                welcome: getParamsMapping("welcome"),
                holdup: getParamsMapping("holdup"),
                qrcode: getParamsMapping("qrcode"),
            },
        };
        return {
            holdup: buildUrl(context.holdup, context.params.holdup, context.params_mapping.holdup),
            welcome: buildUrl(context.welcome, context.params.welcome, context.params_mapping.welcome),
            default: buildUrl(context.default, context.params.default, context.params_mapping.default),
            qrcode: buildUrl(context.qrcode, context.params.qrcode, context.params_mapping.qrcode),
        };
    };
    const links = buildLinks();
    return links;
};

const isMobile = () => {
    const userAgent = window.navigator.userAgent;
    return (/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|CRiOS|OPiOS|Mobile|FxiOS/i.exec(userAgent) !== null);
};
const isIOS = () => {
    const userAgent = window.navigator.userAgent;
    return /iPhone|iPad|iPod/i.exec(userAgent) != null;
};
const isAndroid = () => {
    const userAgent = window.navigator.userAgent;
    return /Android/i.exec(userAgent) !== null;
};
const isWindows = () => {
    const userAgent = window.navigator.userAgent;
    return /Windows/i.exec(userAgent) !== null;
};
const isMac = () => {
    const userAgent = window.navigator.userAgent;
    return /Mac/i.exec(userAgent) !== null && !isIOS();
};

const modernizrScript = 
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssvmaxunit-setclasses !*/
`
    !function (e, t, n) { function o(e, t) { return typeof e === t } function s() { var e, t, n, s, i, r, a; for (var l in u) if (u.hasOwnProperty(l)) { if (e = [], t = u[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase()); for (s = o(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)r = e[i], a = r.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), c.push((s ? "" : "no-") + a.join("-")) } } function i(e) { var t = h.className, n = Modernizr._config.classPrefix || ""; if (m && (t = t.baseVal), Modernizr._config.enableJSClass) { var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)"); t = t.replace(o, "$1" + n + "js$2") } Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), m ? h.className.baseVal = t : h.className = t) } function r(t, n, o) { var s; if ("getComputedStyle" in e) { s = getComputedStyle.call(e, t, n); var i = e.console; if (null !== s) o && (s = s.getPropertyValue(o)); else if (i) { var r = i.error ? "error" : "log"; i[r].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else s = !n && t.currentStyle && t.currentStyle[o]; return s } function a(e, t) { return e - 1 === t || e === t || e + 1 === t } function l() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : m ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) } function d() { var e = t.body; return e || (e = l(m ? "svg" : "body"), e.fake = !0), e } function f(e, n, o, s) { var i, r, a, f, c = "modernizr", u = l("div"), p = d(); if (parseInt(o, 10)) for (; o--;)a = l("div"), a.id = s ? s[o] : c + (o + 1), u.appendChild(a); return i = l("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : u).appendChild(i), p.appendChild(u), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), u.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = h.style.overflow, h.style.overflow = "hidden", h.appendChild(p)), r = n(u, e), p.fake ? (p.parentNode.removeChild(p), h.style.overflow = f, h.offsetHeight) : u.parentNode.removeChild(u), !!r } var c = [], u = [], p = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, t) { var n = this; setTimeout(function () { t(n[e]) }, 0) }, addTest: function (e, t, n) { u.push({ name: e, fn: t, options: n }) }, addAsyncTest: function (e) { u.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = p, Modernizr = new Modernizr; var h = t.documentElement, m = "svg" === h.nodeName.toLowerCase(), v = p.testStyles = f; v("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function (e) { var t = e.childNodes[2], n = e.childNodes[1], o = e.childNodes[0], s = parseInt((n.offsetWidth - n.clientWidth) / 2, 10), i = o.clientWidth / 100, l = o.clientHeight / 100, d = parseInt(50 * Math.max(i, l), 10), f = parseInt(r(t, null, "width"), 10); Modernizr.addTest("cssvmaxunit", a(d, f) || a(d, f - s)) }, 3), s(), i(c), delete p.addTest, delete p.addAsyncTest; for (var g = 0; g < Modernizr._q.length; g++)Modernizr._q[g](); e.Modernizr = Modernizr }(window, document);
    `;

const isSafariInApp = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = modernizrScript;
    document.head.appendChild(script);
    const container = document.createElement("ul");
    container.classList.add("cssvmaxunit-container");
    const li1 = document.createElement("li");
    li1.classList.add("cssvmaxunit");
    const li2 = document.createElement("li");
    li2.classList.add("setclasses");
    li2.textContent = "setclasses";
    container.appendChild(li1);
    container.appendChild(li2);
    document.body.appendChild(container);
    const style = document.createElement("style");
    style.textContent =
        "ul.cssvmaxunit-container{-webkit-column-count:3;-moz-column-count:3;column-count:3;opacity:0}li.cssvmaxunit{color:green}.no-cssvmaxunit li.cssvmaxunit,.no-setclasses li.setclasses{color:red}";
    document.head.append(style);
    const cssvmaxunit = typeof Modernizr !== "undefined" ? Modernizr.cssvmaxunit : false;
    const browserName = getBrowserName();
    const isSafari = isSafariBrowser(browserName);
    const safariInApp = isMobile() && isSafari && Boolean(cssvmaxunit);
    setTimeout(() => {
        script.remove();
        style.remove();
        container.remove();
        document.documentElement.classList.remove("cssvmaxunit");
    }, 100);
    return safariInApp;
};
const safariInAppExperience = ({ yes, no, other, msDebug, }) => {
    const updateElement = (selector, modify) => {
        if (!selector.startsWith("#") && !selector.startsWith(".")) {
            logDebug(msDebug, `invalid selector: '${selector}'`);
            return;
        }
        if (selector.startsWith("#")) {
            const elem = document.getElementById(selector.substring(1));
            if (!elem)
                return;
            modify(elem);
            return;
        }
        Array.from(document.getElementsByClassName(selector.substring(1))).forEach((elem) => modify(elem));
    };
    const hide = (elem) => (elem.style.display = "none");
    const show = (elem) => (elem.style.display = "inline");
    const buildContext = ({ hide, show, event }) => {
        return {
            hide: hide || [],
            show: show || [],
            event: event,
        };
    };
    const inApp = isSafariInApp();
    const browserName = getBrowserName();
    const isSafari = isSafariBrowser(browserName);
    logDebug(msDebug, `browserName: ${browserName}`);
    logDebug(msDebug, `safariInApp: ${inApp}`);
    const isSafariContext = isSafari ? buildContext(no) : buildContext(other);
    const context = inApp ? buildContext(yes) : isSafariContext;
    for (const selector of context.hide) {
        updateElement(selector, hide);
    }
    for (const selector of context.show) {
        updateElement(selector, show);
    }
    if (typeof context.event === "function") {
        context.event(browserName);
    }
};

const findOS = () => {
    if (isIOS())
        return "ios";
    if (isAndroid())
        return "android";
    if (isWindows())
        return "windows";
    if (isMac())
        return "macos";
    // Returns the final OS by default since one of the 5 will always trigger
    return "linux";
};
const getDeviceInfo = () => {
    const os = findOS();
    const isIOS = os == "ios";
    const isInApp = isSafariInApp();
    const detected = isIOS && isInApp ? "ios_in_app" : os;
    return {
        deviceType: isMobile() ? "mobile" : "desktop",
        os: detected,
    };
};

const changeButtonCTA = () => {
    const parentElement = document.querySelector(".om-cta");
    let buttonElement = parentElement
        ? parentElement.querySelectorAll("div")[0].querySelectorAll("button")[0]
        : null;
    if (buttonElement) {
        buttonElement.replaceWith(buttonElement.cloneNode(true));
    }
    buttonElement = parentElement
        ? parentElement.querySelectorAll("div")[0].querySelectorAll("button")[0]
        : null;
    const urlObject = new URL(document.location.href).searchParams;
    const popup = urlObject.get("popup");
    const debug = urlObject.get("ms_debug");
    const dynamicCtaUrl = window.dataLayer.filter((item) => item.dynamic_cta_url);
    if (buttonElement) {
        buttonElement.addEventListener("click", function (event) {
            event.preventDefault();
            if (debug) {
                console.log({
                    redirectUrl: dynamicCtaUrl[0]
                        ? dynamicCtaUrl[0]["dynamic_cta_url"]
                        : "",
                    fallbackUrl: window.location.href,
                    popup: popup,
                });
            }
            const campaignPopup = document.querySelector(".CampaignType--popup");
            if (campaignPopup) {
                campaignPopup.style.display = "none";
            }
            generatePopupExperience({
                msDebug: debug,
                redirectUrl: dynamicCtaUrl[0]
                    ? dynamicCtaUrl[0]["dynamic_cta_url"]
                    : "",
                fallbackUrl: window.location.href,
                popup: popup,
            });
        });
    }
};
const changeCTALinks = ({ sourceLinks, appendQueryString, utmSource, defaultUrlKeys = [], shouldAddHashLink = false, msDebug, redirect, }) => {
    let browser = getBrowserName().toLowerCase();
    if (browser.includes("edge"))
        browser = "edge";
    logDebug(msDebug, `browserName: ${browser}`);
    const context = getDeviceInfo();
    logDebug(msDebug, `DeviceInfo: ${JSON.stringify(context)}`);
    const queryString = window.location.search;
    const links = buildCTALinks({
        context,
        browser,
        queryString,
        sourceLinks,
        appendQueryString,
        utmSource,
        msDebug,
    });
    if (redirect == "1" || redirect == "true") {
        logDebug(msDebug, "Redirecting ...");
        window.location.href = links.default;
        return;
    }
    const elements = [
        document.getElementsByClassName("btn"), // ctaButtons
        document.querySelectorAll(".contents .url-link"), // ctaLinks
        document.querySelectorAll(".element-container-link .elementor-button-link "), // Elementor button
        document.getElementsByClassName("cta-install-button"), // cosCtaButtons
        document.querySelectorAll(".element-container-link .elementor-button-link "), // Elementor button
        document.getElementsByClassName("cta-cos-link"), // cosCtaLinks
        document.querySelectorAll(".father-url-link a"), // swipepages
    ];
    const shouldReplace = (ctaElement) => {
        var _a;
        let replace = true;
        for (const url of defaultUrlKeys) {
            if ((_a = ctaElement.href) === null || _a === void 0 ? void 0 : _a.includes(url)) {
                replace = false;
                break;
            }
        }
        return replace;
    };
    const modifyCTAElement = (ctaElement) => {
        if (shouldAddHashLink && shouldAddHashLink !== "0") {
            ctaElement.href = "#";
            ctaElement.removeAttribute("target");
        }
        else {
            ctaElement.href = links.default;
        }
    };
    const buildCTAElements = () => {
        const ctaElements = [];
        for (const element of elements) {
            for (const item of element) {
                ctaElements.push(item);
            }
        }
        return ctaElements;
    };
    const ctaElements = [...new Set(buildCTAElements())];
    for (const ctaElement of ctaElements) {
        if (shouldReplace(ctaElement)) {
            modifyCTAElement(ctaElement);
        }
    }
    return links;
};
const replaceCTALinks = ({ sourceLinks, appendQueryString, utmSource, defaultUrlKeys = [], shouldAddHashLink = false, }) => {
    const links = changeCTALinks({
        sourceLinks,
        appendQueryString,
        utmSource,
        defaultUrlKeys,
        shouldAddHashLink,
    });
    return links === null || links === void 0 ? void 0 : links.default;
};

const fakeAdElement = () => {
    const fakeAd = document.createElement("div");
    const fakeAdClasses = [
        "ms-fake-ad",
        "ad",
        "ads",
        "adsbox",
        "doubleclick",
        "ad-placement",
        "ad-placeholder",
        "adbadge",
        "BannerAd",
        "textads",
        "banner-ads",
        "banner_ads",
        "ad-unit",
        "ad-zone",
        "ad-space",
        "adsbox",
    ];
    fakeAd.setAttribute("class", fakeAdClasses.join(" "));
    fakeAd.setAttribute("id", "ms-fake-ad-" + new Date().getTime());
    fakeAd.style.height = "1px";
    return fakeAd;
};
const pixelElement = (actionUrl, atnid) => {
    const pixel = document.createElement("img");
    pixel.src = `${actionUrl}?atnid=${atnid}`;
    pixel.setAttribute("style", "width:1px;height:1px;");
    return pixel;
};
const styleChanged = (ad) => {
    if (window.getComputedStyle) {
        const style = window.getComputedStyle(ad);
        const display = style.getPropertyValue("display");
        const visibility = style.getPropertyValue("visibility");
        return display === "none" || visibility === "hidden";
    }
    return false;
};
const adBlockerDetector = ({ actionUrl, atnid, msDebug, }) => {
    logDebug(msDebug, "Ad-Blocking detection running...");
    setTimeout(() => {
        const fakeAd = fakeAdElement();
        const body = document.querySelector("body");
        const addPixel = () => {
            const pixel = pixelElement(actionUrl, atnid);
            fakeAd.appendChild(pixel);
        };
        const removeAd = () => {
            setTimeout(() => {
                fakeAd.remove();
            }, 100);
        };
        const detectAsync = async () => {
            try {
                await fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
                    method: "HEAD",
                    mode: "no-cors",
                    cache: "no-store",
                });
                logDebug(msDebug, "Ad-Block disabled");
                addPixel();
                removeAd();
            }
            catch (_a) {
                logDebug(msDebug, "Ad-Block enabled");
                removeAd();
            }
        };
        if (body) {
            body.appendChild(fakeAd);
        }
        const style_changed = styleChanged(fakeAd);
        if (style_changed) {
            logDebug(msDebug, "Ad-Block enabled");
            removeAd();
        }
        else {
            detectAsync();
        }
    }, 500);
};

const replaceBrowserNames = ({ msDebug, } = {}) => {
    const browserName = getBrowserName();
    logDebug(msDebug, `browser: ${browserName}`);
    const ctaButtons = document.getElementsByClassName("btn");
    const ctaLinks = document.querySelectorAll(".contents .url-link");
    const cosCtaButtons = document.querySelectorAll(".cta-install-button #browser-text");
    const cosCtaLinks = document.getElementsByClassName("cta-cos-link");
    const ctaButtonsLinks = Array.from(document.querySelectorAll(".elementor-button-link")).map((buttonLink) => buttonLink.querySelector(".elementor-button-text"));
    const elementGroups = [
        ctaButtons,
        ctaLinks,
        cosCtaButtons,
        cosCtaLinks,
        ctaButtonsLinks,
    ];
    const replaceName = (element, search) => {
        const text = element.innerText;
        const replaced = text.replace(search, browserName);
        if (text !== replaced) {
            element.innerText = replaced;
        }
    };
    for (const group of elementGroups) {
        for (const element of group) {
            if (element != null) {
                replaceName(element, browserNameRegex);
                replaceName(element, `Mobile ${browserName}`);
            }
        }
    }
};

const containerStyle = (background) => `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: ${background};
  `;
const modalStyle = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 360px;
  width: 360px;
  border-radius: 8px; 
  `;
const closeContainerStyle = `
  width: 100%;
  margin-bottom: 55px;
  `;
const cosCloseContainerStyle = `
  position: relative;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const closeLogoStyle = `
  width: 155px;
  height: 43.3px;
  background-image: url(https://cdn.ivaws.com/wikibuy-assets/images/upload_content/c1_shopping_blue.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-top: 0px;
`;
const closeImageStyle = `
  position: absolute;
  top: 15px;
  right: 15px;
  width: 14px;
  height:14px;
  cursor: pointer;
  `;
const stepStyle = `
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  opacity: 0;
  transition: 2ms opacity ease-in-out;
  animation-name: animateFadeIn;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;
const keyframeStyle = `
@keyframes animateFadeIn {
  to {
    opacity: 1;
  }
}
`;
const progressCircleBeforeStyle = (className, barWidth, backgroundColor) => `
.${className}::before {
  content: "";
  position: absolute;
  height: calc(100% - ${barWidth});
  width: calc(100% - ${barWidth});
  background-color: ${backgroundColor};
  border-radius: 50%;
  z-index: -10;
} 
`;

function ProgressCircle({ size, padding, barWidth, backgroundColor, className, imageSource, duration, imageSize = "150px", }) {
    // Add Circle ::before content
    const style = document.createElement("style");
    style.textContent = progressCircleBeforeStyle(className, barWidth, backgroundColor);
    document.head.appendChild(style);
    // Create Circle Element
    const progressCircle = `
    <div class="${className}" 
        style="
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: ${size};
        width: ${size};
        border-radius: 50%;
        z-index: -10;
        padding: ${padding};"
      >
      <img src=${imageSource} style="height: ${imageSize}; width: ${imageSize}; margin: 20px; z-index: 10;"/>
    </div>
  `;
    // Circle loading logic
    let progress = 0;
    let elapsed = 0;
    const tick = duration / 100;
    const handleProgress = (startValue, endValue, elapsedTime) => {
        const element = document.getElementsByClassName(className)[0];
        if (!element)
            return;
        const normalizedElapsedTime = elapsedTime / duration;
        const result = progress >= 50
            ? endValue * normalizedElapsedTime * normalizedElapsedTime + startValue
            : -endValue * (elapsedTime / duration) * (elapsedTime / duration - 2) +
                startValue;
        progress = Math.min(result, 100);
        const isHalfOver = result === endValue;
        elapsed = isHalfOver ? 0 : elapsed + duration / 100;
        setTimeout(() => {
            // Get Specific Progress Circle Element
            element.style.background = `
        conic-gradient(#0276B1 ${progress * 3.6}deg, #FCFCFC ${progress * 3.6}deg)
        `;
        }, duration / 100);
    };
    // Run Progress once first while interval loads
    handleProgress(0, 50, 0);
    // Run interval until progress is complete
    const int = setInterval(() => {
        if (progress === 100) {
            return clearInterval(int);
        }
        if (progress < 50) {
            handleProgress(0, 50, elapsed);
        }
        else {
            handleProgress(50, 100, elapsed);
        }
    }, tick);
    return progressCircle;
}

function getStep1(stepTime, imageSource, progressBackground = "#E8E9E9") {
    const step1 = document.createElement("div");
    step1.style.cssText = stepStyle;
    step1.innerHTML = `
  <p style="margin-bottom: 20px; font-size: 13px; font-family: Poppins, Arial, Sans-serif">
    Checking Browser 
    <span style="font-weight: bold; font-family: Poppins, Arial, Sans-serif">
      compatibility for
    </span>
  </p>
  <p style="position: relative; z-index: 1; padding-left: 40px; padding-right: 40px; padding-top: 4px; padding-bottom: 4px; color: white; background-color: #013C5A; border-radius: 9999px; font-size: 12px; font-family: Poppins, Arial, Sans-serif; text-transform: uppercase; font-weight: bold; text-align: center">
    Coupons & shopping rewards at checkout
  </p>
  <div style="display: flex; align-items: center; justify-content: center; position: relative; width: 100%; top: -30px;">
    ${ProgressCircle({
        className: "ms-spinny-progress-1",
        size: "auto",
        barWidth: "12.5px",
        backgroundColor: progressBackground,
        padding: "24px",
        duration: stepTime,
        imageSource: imageSource,
        imageSize: "125px",
    })}
  </div>
  `;
    return step1;
}

function getStep2() {
    const step2 = document.createElement("div");
    step2.style.cssText = stepStyle;
    step2.innerHTML = `
  <div class="ms-spinny-transformed" style="width: 120px; height: 50px; position: relative; margin: 40px auto; transition: all 0.3s 0s ease-out;">
    <div style="background-color: #273C46; border-radius: 80px; height: 40px; width: 100%">
      <div style="display: flex; justify-content: center; align-items: center; background-color: #0276B1; width: 46px; height: 46px; position: absolute; left: 0; border-radius: 46px; top: -3px;">
        <img src="https://i.postimg.cc/qq7Ffpwd/checkmark-white.png" style="height: 20px; width: 25px;" />
      </div>
      <div style="position: absolute; right: 0; left: 0; top: 10px; padding-left: 25px; text-align: center; color: white; font-family: Poppins, Arial, Sans-serif;">
        YES
      </div>
    </div>
  </div>
  <div class="ms-spinny-transformed" style="transition: all 0.3s 0s ease-out; ">
    <h5 style="width: 100%; margin-bottom: 8px; font-size: 20px; line-height: 1.1; text-align: center; font-family: Poppins, Arial, Sans-serif; color: #404340;">
      Yes! You are eligible!
    </h5>
    <p style="font-size: 14px; color: #A1A1A1; font-family: Poppins, Arial, Sans-serif;">
      to get automatic coupons and <br /> Shopping Rewards at checkout.
    </p>
  </div>
  `;
    return step2;
}

function getStep3(stepTime, imageSource, progressBackground = "#E8E9E9") {
    const step3 = document.createElement("div");
    step3.style.cssText = stepStyle;
    step3.innerHTML = `
  <p style="margin-bottom: 32px; font-size: 13px; font-family: Poppins, Arial, Sans-serif; text-align: center; width: 75%;">
    Now loading the most recent version of the browser extension
  </p>
  <div style="position: relative; width: 100%; top: -15px; display: flex; justify-content: center; align-items: center;">
    ${ProgressCircle({
        className: "ms-spinny-progress-2",
        size: "auto",
        barWidth: "12.5px",
        backgroundColor: progressBackground,
        padding: "24px",
        duration: stepTime,
        imageSource: imageSource,
    })} 
  </div>
  `;
    return step3;
}

function getCosStep1() {
    const step1 = document.createElement("div");
    step1.style.cssText = stepStyle;
    step1.innerHTML = `
  <p style="margin-bottom: 20px; margin-top: -10px; font-size: 13px; font-family: Poppins, Arial, Sans-serif; max-width: 300px; text-align: center;">
    Checking browser 
    <span style="font-weight: bold; font-family: "Poppins", Arial, Sans-serif;">
      compatibility for
    </span>
  </p>
  <p style="display: flex; justify-content: center; align-items: center; position: relative; margin: 0 auto; padding: 0 10px; height: 45px; min-width: 200px; width: 95%; line-height: 15px; color: white; background-color: #013D5B; border-radius: 40px; font-size: 12px; font-family: Poppins, Arial, Sans-serif; text-transform: uppercase; font-weight: bold; text-align: center; ">
    Coupons & shopping rewards<br />at checkout
  </p>
  <div style="display: flex; align-items: center; justify-content: center; position: relative; max-width: 200px; max-height: 200px; padding: 0 0 10px 10px; top: -30px;">
    ${ProgressCircle({
        className: "ms-spinny-progress-1",
        size: "auto",
        barWidth: "11px",
        backgroundColor: "#E8E9E9",
        padding: "2px",
        duration: 3000 / 2 + 100,
        imageSource: "https://cdn.ivaws.com/wikibuy-assets/images/wb_credits.svg",
    })}
  </div>
  `;
    return step1;
}

function getCosStep2() {
    const step2 = document.createElement("div");
    step2.style.cssText = stepStyle;
    step2.innerHTML = `
  <div class="ms-spinny-transformed" style="width: 120px; height: 50px; position: relative; margin: 40px auto 10px auto; transition: all 0.3s 0s ease-out;">
    <div style="background-color: #273C46; border-radius: 80px; height: 40px; width: 100%">
      <div style="display: flex; justify-content: center; align-items: center; background-color: #0276B1; width: 46px; height: 46px; position: absolute; left: 0; border-radius: 46px; top: -3px;">
        <img src="https://i.postimg.cc/qq7Ffpwd/checkmark-white.png" style="height: 20px; width: 25px;" />
      </div>
      <div style="position: absolute; right: 0; left: 0; top: 10px; padding-left: 25px; text-align: center; color: white; font-family: Poppins, Arial, Sans-serif;">
        YES
      </div>
    </div>
  </div>
  <div class="ms-spinny-transformed" style="transition: all 0.3s 0s ease-out; position: relative; bottom: 20px;">
    <h5 style="width: 100%; margin: 33px 0 0 0; font-size: 24px; font-weight: 600; line-height: 1.1; text-align: center; font-family: Poppins, Arial, Sans-serif; color: #121212;">
      Yes! You are eligible!
    </h5>
    <p style="font-size: 14px; color: #121212; font-family: Poppins, Arial, Sans-serif; margin-top: 5px; text-align: center;">
      to get automatic coupons and <br /> Shopping Rewards at checkout.
    </p>
  </div>
  `;
    return step2;
}

function getCosStep3() {
    const step3 = document.createElement("div");
    step3.style.cssText = stepStyle;
    step3.innerHTML = `
  <p style="margin: -10px auto 20px; font-size: 13px; font-weight: 300; font-family: Poppins, Arial, Sans-serif; text-align: center; max-width: 300px;">
    Capital One Shopping is loading the most recent version of the browser extension
  </p>
  <div style="position: relative; width: 100%; max-width: 200px; max-height: 200px; display: flex; justify-content: center; align-items: center;">
    ${ProgressCircle({
        className: "ms-spinny-progress-2",
        size: "190px",
        barWidth: "11px",
        backgroundColor: "white",
        padding: "2px",
        duration: 3000 / 2 + 100,
        imageSize: "100px",
        imageSource: "https://cdn.ivaws.com/wikibuy-assets/images/upload_content/c1_shopping_icon.svg",
    })} 
  </div>
  `;
    return step3;
}

const getSpinnySteps = (isCOSBranded, stepConfig) => {
    if (isCOSBranded || !stepConfig) {
        return {
            step1: getCosStep1(),
            step2: getCosStep2(),
            step3: getCosStep3(),
        };
    }
    return {
        step1: getStep1(stepConfig[1].time / 2 + 100, stepConfig[1].source, stepConfig[1].progressBackground),
        step2: getStep2(),
        step3: getStep3(stepConfig[3].time / 2 + 100, stepConfig[3].source, stepConfig[3].progressBackground),
    };
};

const initialConfig = {
    1: {
        time: 3000,
        source: "https://i.postimg.cc/rmjHYDSJ/cash-2.png",
        progressBackground: "#E8E9E9",
    },
    2: {
        time: 3000,
        progressBackground: "#E8E9E9",
        source: "",
    },
    3: {
        time: 3000,
        source: "https://i.postimg.cc/hv35cNZQ/modal-savings.png",
        progressBackground: "#E8E9E9",
    },
};
function runSpinnyExperience({ background = "#001c20", stepConfig = initialConfig, isCosBranded = false, sourceLinks, utmSource, }) {
    // Misc Config Variables
    const DEFAULT_STEP_TIME = 3000;
    let browser = getBrowserName().toLowerCase();
    if (browser.includes("edge"))
        browser = "edge";
    const context = getDeviceInfo();
    const queryString = window.location.search;
    const links = buildCTALinks({
        context,
        browser,
        queryString,
        sourceLinks,
        appendQueryString: true,
        utmSource,
    });
    const redirectUrl = links.default;
    // Append Fonts and general styles
    const style = document.createElement("style");
    style.textContent = keyframeStyle;
    const poppinsLink = document.createElement("link");
    poppinsLink.setAttribute("rel", "stylesheet");
    poppinsLink.setAttribute("type", "text/css");
    poppinsLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
    document.head.append(style, poppinsLink);
    // DOM Element Creation
    const container = document.createElement("div");
    container.className = "ms-spinny-container";
    container.style.cssText = containerStyle(background);
    const modal = document.createElement("div");
    modal.className = "ms-spinny-modal";
    modal.style.cssText = modalStyle;
    const closeContainer = document.createElement("div");
    if (!isCosBranded) {
        closeContainer.style.cssText = closeContainerStyle;
        closeContainer.onclick = () => {
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
            else {
                container.style.display = "none";
            }
        };
    }
    // container styles for cos branded modal
    closeContainer.style.cssText = cosCloseContainerStyle;
    const closeLogo = document.createElement("div");
    closeLogo.style.cssText = closeLogoStyle;
    const closeImage = document.createElement("img");
    closeImage.src = "https://i.postimg.cc/ZR4zCtbW/xmark.png";
    closeImage.style.cssText = closeImageStyle;
    // Steps Creation
    const { step1, step2, step3 } = getSpinnySteps(isCosBranded, stepConfig);
    // Dom Element Chain Appending
    closeContainer.append(isCosBranded ? closeLogo : closeImage);
    modal.append(closeContainer);
    modal.append(step1);
    container.append(modal);
    const body = document.querySelector("body");
    if (body) {
        body.append(container);
    }
    // Countdown Logic
    let currentStep = 1;
    const steps = {
        1: step1,
        2: step2,
        3: step3,
    };
    // Helper functions
    const updateTransformAnimation = (transformValues = ["-20px", "20px"]) => {
        const elements = document.querySelectorAll(".ms-spinny-transformed");
        elements.forEach((element, index) => {
            const transform = element.style.transform;
            element.style.transform =
                transform === "" ? `translate3d(0,${transformValues[index]},0)` : "";
        });
    };
    const updateStep = () => {
        modal.removeChild(steps[currentStep]);
        modal.appendChild(steps[(currentStep + 1)]);
        currentStep++;
    };
    // Initial Timeout to start step 2 transform animation
    setTimeout(() => {
        updateTransformAnimation();
    }, (stepConfig[currentStep].time || DEFAULT_STEP_TIME) + 100);
    const int = setInterval(() => {
        if (currentStep === 1) {
            setTimeout(() => {
                updateTransformAnimation();
            }, (stepConfig[2].time || DEFAULT_STEP_TIME) - 400);
        }
        if (currentStep === 3) {
            clearInterval(int);
            if (redirectUrl) {
                window.location.href = redirectUrl;
                return;
            }
            else {
                container.style.display = "none";
            }
        }
        updateStep();
    }, stepConfig[currentStep].time || DEFAULT_STEP_TIME);
}

const showAdvertorialPopup = (display) => {
    console.log({ display });
    const body = document.querySelector("body");
    const advertorialPopupContainer = document.createElement("div");
    advertorialPopupContainer.id = "advertorial-container-div";
    advertorialPopupContainer.style.position = "fixed";
    advertorialPopupContainer.style.zIndex = "9999999";
    advertorialPopupContainer.style.width = '100%';
    advertorialPopupContainer.style.display = display;
    advertorialPopupContainer.style.height = '100%';
    advertorialPopupContainer.style.top = '0px';
    advertorialPopupContainer.style.left = '0px';
    advertorialPopupContainer.style.transition = '2 ease';
    advertorialPopupContainer.style.backgroundColor = 'rgba(0,0,0,.8)';
    advertorialPopupContainer.style.justifyContent = 'center';
    advertorialPopupContainer.style.alignItems = 'center';
    advertorialPopupContainer.innerHTML = `
        <div style="padding-top: 20px; border-radius: 8px; background: #FFFFFF; width: 960px; height: 376px; display: flex; align-items: center; flex-direction: column;">
        <div style="display: flex; width: 940px; justify-content: end; padding-right: 16px;">
        <a id="adv-close-button" href="#" style="font-family: eicons; font-weight:400; font-style: normal; line-height: 1; color: #2D3E53; cursor: pointer; text-decoration: none;">
        <img src="https://www.onlineshoppingtools.com/wp-content/uploads/sites/5/2024/12/popup-close.svg" width="15" height="15" />
        </a>
        </div>
        <div style="padding: 0px 16px 0px 16px; display: flex; flex-direction: column;">
        <p style="text-shadow: 0px 0px 10px rgba(0,0,0,0.3); line-height: 1.5; color: #2D3E53; font-size: 16px;">
        OnlineShoppingTools is an independent, advertising-supported service that offers consumer shopping advice. 
        The offers or products that appear on OnlineShoppingTools are from third party advertisers or partners 
        from which OnlineShoppingTools receives compensation. This compensation may impact how and where products 
        appear on this site, including, for example, the order in which they are shown. Other factors, such as our 
        proprietary website’s rules and the likelihood of applicants’ approval, impact how and where products appear on our site.
        </p>
        <p style="text-shadow: 0px 0px 10px rgba(0,0,0,0.3); line-height: 1.5; color: #2D3E53; font-size: 16px;">
        The compensation from our advertising partners allows OnlineShoppingTools to offer you free access to comparison 
        tools and information. The offers listed on OnlineShoppingTools do not encompass the entire universe of products 
        available from various merchants. Because offers change frequently, please visit merchant sites for current information.
        </p>
        <p style="text-shadow: 0px 0px 10px rgba(0,0,0,0.3); line-height: 1.5; color: #2D3E53; font-size: 16px;">
        Editorial Note: Our editorial team’s content is not provided or commissioned by any financial institution or partner. 
        The opinions, reviews, or recommendations expressed in any article mentioned are solely those of our editorial team.
        </p>
        </div>
        </div>
    `;
    body === null || body === void 0 ? void 0 : body.appendChild(advertorialPopupContainer);
};

// Runtime context information
const ms = {
    build_date: '"2025-10-15T20:13:04.135Z"',
    version: '2.1.0',
    env: 'undefined'
};

const exitCapture = () => {
    const target = document.querySelector("body");
    if (!target)
        return null;
    let updatedFooter = false;
    let updatedModal = false;
    const observer = new MutationObserver(function () {
        const exitCaptureButton = document.querySelector("#ec-cta-btn button");
        const stickyFooterButton = document.querySelector("#sf-cta-btn span");
        if (exitCaptureButton && !updatedModal) {
            replaceName(exitCaptureButton);
            updatedModal = true;
        }
        if (stickyFooterButton && !updatedFooter) {
            replaceName(stickyFooterButton);
            updatedFooter = true;
        }
        function replaceName(element) {
            const text = element.innerText;
            const browser = getBrowserName().toLowerCase();
            const replaced = text.replace(/browser|google chrome|chrome|firefox|microsoft edge|edge|opera|apple safari|safari/gi, browser);
            if (text !== replaced) {
                element.innerText = replaced;
            }
        }
    });
    const config = { attributes: true, childList: true, characterData: true };
    observer.observe(target, config);
};

async function hasCOSInstalled() {
    try {
        const response = await fetch("chrome-extension://nenlahapcbofgnanklpelkaejcehkggg/assets/icons/shopping-icon16.png");
        if (response.ok) {
            window.dataLayer.push({
                hasCOSInstalled: "1",
                event: "cos_install_check",
            });
        }
        return response.ok;
    }
    catch (_a) {
        return false;
    }
}

window.runSpinnyExperience = runSpinnyExperience;
window.changeButtonCTA = changeButtonCTA;
window.exitCapture = exitCapture;
window.implementGeoLocation = implementGeoLocation;
window.getBrowserName = getBrowserName;
window.getDeviceInfo = getDeviceInfo;
window.generatePopupExperience = generatePopupExperience;
window.closeGeneralModal = closeGeneralModal;
window.msAdBlockerDetector = adBlockerDetector;
window.replaceBrowserNames = replaceBrowserNames;
window.replaceCTALinks = replaceCTALinks;
window.replaceCTAHoldupLinks = changeCTALinks;
window.buildCTALinks = buildCTALinks;
window.isSafariInApp = isSafariInApp;
window.safariInAppExperience = safariInAppExperience;
window.dataLayer = window.dataLayer || [];
window.ms = ms;
window.showBottomButton = showBottomButton;
window.showToastiBar = showToastiBar;
window.showTopBar = showTopBar;
window.showAdvertorialPopup = showAdvertorialPopup;
window.hasCOSInstalled = hasCOSInstalled;
//# sourceMappingURL=ms.js.map
