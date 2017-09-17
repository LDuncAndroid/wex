var _1 = require(".");
var PublicAPI = (function () {
    function PublicAPI() {
        /**
         * This method provides all the information about currently active pairs,
         * such as the maximum number of digits after the decimal point,
         * the minimum price, the maximum price, the minimum transaction size,
         * whether the pair is hidden, the commission for each pair.
         *
         * A hidden pair (hidden=1) remains active but is not displayed in the list of pairs on the main page.
         * The Commission is displayed for all users, it will not change even
         * if it was reduced on your account in case of promotional pricing.
         * If one of the pairs is disabled, it will simply disappear from the list.
         */
        this.async = info();
    }
    PublicAPI.prototype.Promise = function () {
        server_time: number; // UNIX timestamp
        decimal_places: number; // number of decimals allowed during trading.
        min_price: number; // minimum price allowed during trading.
        max_price: number; // maximum price allowed during trading.
        min_amount: number; // minimum sell / buy transaction size.
        hidden: 0 | 1; // whether the pair is hidden, 0 or 1.
        fee: number; // commission for this pair.
    };
    return PublicAPI;
})();
 > {
    const: response = await, fetch: function () { }, "https://btc-e.com/api/3/info": ,
    return: await, response: .json()
};
async;
ticker(pair, _1.ValutePair);
Promise < ITickerValue > (_a = {
        const: response = await,
        fetch: function () { },
        "https://btc-e.com/api/3/ticker/": +pair,
        return: function (await) {
            if (await === void 0) { await = response.json(); }
        }
    },
    _a[pair] = ,
    _a
);
async;
tickers(pairs, _1.ValutePair[]);
Promise < ITickerResult > {
    const: response = await, fetch: function () { }, "https://btc-e.com/api/3/ticker/": +pairs.map(function (pair) { return pair; }).join("-"),
    return: await, response: .json()
};
async;
depth(pair, _1.ValutePair);
Promise < {
    asks: Array(),
    bids: Array()
} > (_b = {
        const: response = await,
        fetch: function () { },
        "https://btc-e.com/api/3/depth/": +pair,
        return: function (await) {
            if (await === void 0) { await = response.json(); }
        }
    },
    _b[pair] = ,
    _b
);
async;
trades(pair, _1.ValutePair);
Promise < Array < {
    type: "ask" | "bid",
    price: number,
    amount: number,
    tid: number,
    timestamp: number
} >> (_c = {
        const: response = await,
        fetch: function () { },
        "https://btc-e.com/api/3/trades/": +pair,
        return: function (await) {
            if (await === void 0) { await = response.json(); }
        }
    },
    _c[pair] = ,
    _c
);
exports["default"] = PublicAPI;
var _a, _b, _c;
