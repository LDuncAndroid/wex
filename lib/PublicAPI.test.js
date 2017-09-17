var PublicAPI_1 = require("./PublicAPI");
beforeEach(function () {
    fetch.resetMocks();
});
it("info", async(), {
    const: api = new PublicAPI_1["default"](),
    const: ret = {
        test: "value1"
    },
    fetch: .mockResponseOnce(JSON.stringify(ret)),
    expect: function (await) {
        if (await === void 0) { await = api.info(); }
    }, toEqual: function (ret) { },
    expect: function (fetch, mock, calls) { }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "https://btc-e.com/api/3/info" : _b;
    } });
;
it("ticker", async(), {
    const: api = new PublicAPI_1["default"](),
    const: value = { test: 1 },
    fetch: .mockResponseOnce(JSON.stringify({
        btc_usd: value
    })),
    expect: function (await) {
        if (await === void 0) { await = api.ticker(_1.ValutePair.BTC_USD); }
    }, toEqual: function (value) { },
    expect: function (fetch, mock, calls) { }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "https://btc-e.com/api/3/ticker/btc_usd" : _b;
    } });
;
it("tickers", async(), {
    const: api = new PublicAPI_1["default"](),
    const: value1 = { test: 1 },
    const: value2 = { test2: 1 },
    fetch: .mockResponseOnce(JSON.stringify({
        btc_usd: value1,
        usd_btc: value2
    })),
    expect: function (await) {
        if (await === void 0) { await = api.tickers([_1.ValutePair.USD_RUR, _1.ValutePair.ETH_BTC]); }
    }, toEqual: function (_a) { },
    expect: function (fetch, mock, calls) { }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "https://btc-e.com/api/3/ticker/usd_rur-eth_btc" : _b;
    } });
;
it("depth", async(), {
    const: value = { test: 1 },
    fetch: .mockResponseOnce(JSON.stringify({ eth_eur: value })),
    const: api = new PublicAPI_1["default"](),
    expect: function (await) {
        if (await === void 0) { await = api.depth(_1.ValutePair.ETH_EUR); }
    }, toEqual: function (value) { },
    expect: function (fetch, mock, calls) { }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "https://btc-e.com/api/3/depth/eth_eur" : _b;
    } });
;
it("trades", async(), {
    const: value = { test: 1 },
    fetch: .mockResponseOnce(JSON.stringify({ dsh_ltc: value })),
    const: api = new PublicAPI_1["default"](),
    expect: function (await) {
        if (await === void 0) { await = api.trades(_1.ValutePair.DSH_LTC); }
    }, toEqual: function (value) { },
    expect: function (fetch, mock, calls) { }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "https://btc-e.com/api/3/trades/dsh_ltc" : _b;
    } });
;
