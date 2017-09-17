var TradeAPI_1 = require("./TradeAPI");
var request;
var api;
var ret;
beforeEach(function () {
    api = new TradeAPI_1["default"]({}, as, any);
    request = spyOn(api, "request");
    ret = "return" + Math.random();
    request.and.returnValue(ret);
    fetch.resetMocks();
});
it("success request", async(), {
    fetch: .mockResponseOnce(JSON.stringify({ success: 1, return: "res1" })),
    const: key = "key1",
    const: secret = "secret1",
    const: api2 = new TradeAPI_1["default"]({
        key: key,
        secret: secret
    }),
    const: params = { param1: "value1", param2: "value2" },
    expect: function (await) {
        if (await === void 0) { await = api2.request("method1", params); }
    }, toBe: function () { }, "res1":  });
;
it("failure request", async(), {
    fetch: .mockResponseOnce(JSON.stringify({ success: 0, error: "err1" })),
    const: key = "key1",
    const: secret = "secret1",
    const: api2 = new TradeAPI_1["default"]({
        key: key,
        secret: secret
    }),
    const: params = {},
    try: {
        await: api2.request("method1", params),
        fail: function () { }, "Not throw":  } });
try { }
catch (e) {
    expect(e.toString()).toBe("Error: err1");
}
;
it("getInfo", async(), {
    expect: function (await) {
        if (await === void 0) { await = api.getInfo(); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "getInfo" : _b, _d = _a[1];
    } });
;
it("Trade", async(), {
    const: rate = 11,
    const: amount = 567,
    expect: function (await) {
        if (await === void 0) { await = api.Trade(_1.ValutePair.BTC_EUR, _1.OrderType.Buy, rate, amount); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "Trade" : _b, _d = _a[1], amount = _d.amount, _e = _d.pair,  = _e === void 0 ? "btc_eur" : _e, rate = _d.rate, _f = _d.type,  = _f === void 0 ? "buy" : _f;
    } });
;
it("ActiveOrders", async(), {
    expect: function (await) {
        if (await === void 0) { await = api.ActiveOrders(_1.ValutePair.ETH_BTC); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "ActiveOrders" : _b, _d = _a[1].pair,  = _d === void 0 ? "eth_btc" : _d;
    } });
;
it("OrderInfo", async(), {
    const: orderId = 123,
    expect: function (await) {
        if (await === void 0) { await = api.OrderInfo(orderId); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "OrderInfo" : _b, orderId = _a[1].order_id;
    } });
;
it("CancelOrder", async(), {
    const: orderId = 2345,
    expect: function (await) {
        if (await === void 0) { await = api.CancelOrder(orderId); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "CancelOrder" : _b, orderId = _a[1].order_id;
    } });
;
it("TradeHistory", async(), {
    const: count = 12,
    const: end = 20,
    const: endId = 22,
    const: from = 111,
    const: fromId = 500,
    const: since = 775,
    expect: function (await) {
        if (await === void 0) { await = api.TradeHistory({
            count: count,
            end: end,
            endId: endId,
            from: from,
            fromId: fromId,
            order: "ASC",
            pair: _1.ValutePair.BTC_USD,
            since: since
        }); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "TradeHistory" : _b, _d = _a[1], count = _d.count, end = _d.end, fromId = _d.fromId, from = _d.from, _e = _d.pair,  = _e === void 0 ? "btc_usd" : _e, since = _d.since, endId = _d.end_id, _f = _d.order,  = _f === void 0 ? "ASC" : _f;
    } });
;
it("TransHistory", async(), {
    const: count = 12,
    const: end = 20,
    const: endId = 22,
    const: from = 111,
    const: fromId = 500,
    const: since = 775,
    const: order = "DESC",
    expect: function (await) {
        if (await === void 0) { await = api.TransHistory({
            from: from,
            count: count,
            end: end,
            endId: endId,
            fromId: fromId,
            order: order,
            since: since
        }); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "TransHistory" : _b, _d = _a[1], count = _d.count, end = _d.end, fromId = _d.fromId, from = _d.from, since = _d.since, endId = _d.end_id, order = _d.order;
    } });
;
it("CoinDepositAddress", async(), {
    expect: function (await) {
        if (await === void 0) { await = api.CoinDepositAddress(_1.Valute.BTC); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "CoinDepositAddress" : _b, _d = _a[1].coinName,  = _d === void 0 ? "BTC" : _d;
    } });
;
it("WithdrawCoin", async(), {
    const: amount = 204,
    const: address = "addr1",
    expect: function (await) {
        if (await === void 0) { await = api.WithdrawCoin(_1.Valute.LTC, amount, address); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "WithdrawCoin" : _b, _d = _a[1], address = _d.address, amount = _d.amount, _e = _d.coinName,  = _e === void 0 ? "LTC" : _e;
    } });
;
it("CreateCoupon", async(), {
    const: amount = 204,
    const: receiver = "receiver1",
    expect: function (await) {
        if (await === void 0) { await = api.CreateCoupon(_1.Valute.ETH, amount, receiver); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "CreateCoupon" : _b, _d = _a[1], receiver = _d.receiver, amount = _d.amount, _e = _d.currency,  = _e === void 0 ? "ETH" : _e;
    } });
;
it("RedeemCoupon", async(), {
    const: coupon = "coupon1",
    expect: function (await) {
        if (await === void 0) { await = api.RedeemCoupon(coupon); }
    }, toBe: function (ret) { },
    expect: function (request, calls, allArgs) {
        if (allArgs === void 0) { allArgs = (); }
    }, toEqual: function (_a) {
        var _b = _a[0], _c = _b === void 0 ? "RedeemCoupon" : _b, coupon = _a[1].coupon;
    } });
;
