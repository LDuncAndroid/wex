var _1 = require(".");
var util_1 = require("./util");
/**
 * This API allows to trade on the exchange and receive information about the account.
 * To use this API, you need to create an API key. https://btc-e.com/tapi/docs#main
 */
var TradeAPI = (function () {
    function TradeAPI(config) {
        this.config = config;
        /**
         * Returns information about the user’s current balance, API-key privileges,
         * the number of open orders and Server Time.
         * To use this method you need a privilege of the key info.
         */
        this.async = getInfo();
    }
    TradeAPI.prototype.Promise = function () {
        funds: Funds; // Your account balance available for trading. Doesn’t include funds on your open orders.
        rights: {
            info: number;
            trade: number;
            withdraw: number;
        }
        ;
        transaction_count: number; // Deprecated, is equal to 0.
        open_orders: number; // The number of your open orders.
        server_time: number; // Server time (MSK).
    };
    return TradeAPI;
})();
 > {
    return: this.request("getInfo", {})
};
async;
Trade(pair, _1.ValutePair, type, _1.OrderType, rate, number, amount, number);
Promise < {
    received: number,
    remains: number,
    /*
    * Is equal to 0 if the request was fully “matched” by the opposite orders,
    * otherwise the ID of the executed order will be returned.
    */
    order_id: number,
    funds: Funds
} > {
    return: this.request("Trade", {
        pair: pair,
        type: type,
        rate: rate,
        amount: amount
    })
};
async;
ActiveOrders(pair, _1.ValutePair);
Promise < (_a = {},
    // index - Order ID.
    _a[index] = number,
    _a
);
{
    pair: string; // The pair on which the order was created.
    type: _1.OrderType; // Order type, buy/sell.
    amount: number; // The amount of currency to be bought/sold.
    rate: number; // Sell/Buy price.
    timestamp_created: number; // The time when the order was created.
    status: _1.OrderStatus; // Deprecated, is always equal to 0.
}
;
 > {
    return: this.request("ActiveOrders", {
        pair: pair
    })
};
async;
OrderInfo(orderId, _1.OrderID);
Promise < (_b = {},
    // index - Order ID.
    _b[index] = number,
    _b
);
{
    pair: string; // The pair on which the order was created
    type: _1.OrderType; // Order type, buy/sell.
    start_amount: number; // The initial amount at the time of order creation.
    amount: number; // The remaining amount of currency to be bought/sold.
    rate: number; // Sell/Buy price.
    timestamp_created: number; // The time when the order was created.
    // 0 - active, 1 – executed order, 2 - canceled, 3 – canceled, but was partially executed.
    status: 0 | 1 | 2 | 3;
}
;
 > {
    return: this.request("OrderInfo", {
        order_id: orderId
    })
};
async;
CancelOrder(orderId, _1.OrderID);
Promise < {
    order_id: _1.OrderID,
    funds: Funds
} > {
    return: this.request("CancelOrder", {
        order_id: orderId
    })
};
async;
TradeHistory(params ?  : {
    from: number,
    count: number,
    fromId: number,
    endId: number,
    order: "ASC" | "DESC",
    since: number,
    end: number,
    pair: _1.ValutePair
});
Promise < (_c = {},
    _c[index] = number,
    _c
);
{
    pair: string; // The pair on which the trade was executed.
    type: _1.OrderType; // Trade type, buy/sell.
    amount: number; // The amount of currency was bought/sold.
    rate: number; // Sell/Buy price.
    order_id: _1.OrderID; // Order ID.
    is_your_order: 1 | 0; // Is equal to 1 if order_id is your order, otherwise is equal to 0.
    timestamp: number; // Trade execution time.
}
;
 > {
    params:  = params || {},
    const: p, any:  = { params: params },
    if: function (params, endId) {
        p.end_id = params.endId;
        delete p.endId;
    },
    return: this.request("TradeHistory", p)
};
async;
TransHistory(params ?  : {
    from: number,
    count: number,
    fromId: number,
    endId: number,
    order: "ASC" | "DESC",
    since: number,
    end: number
});
Promise < (_d = {},
    // index - Transaction ID.
    _d[index] = number,
    _d
);
{
    type: number; // Transaction type. 1/2 - deposit/withdrawal, 4/5 - credit/debit.
    amount: number; // Transaction amount.
    currency: string; // Transaction currency.
    desc: string; // Transaction description.
    // Transaction status. 0 - canceled/failed, 1 - waiting for acceptance, 2 - successful, 3 – not confirmed
    status: 0 | 1 | 2 | 3;
    timestamp: number; // Transaction time.
}
;
 > {
    params:  = params || {},
    const: p, any:  = { params: params },
    if: function (params, endId) {
        p.end_id = params.endId;
        delete p.endId;
    },
    return: this.request("TransHistory", p)
};
async;
CoinDepositAddress(coinName, _1.Valute);
Promise < {
    address: string
} > {
    return: this.request("CoinDepositAddress", {
        coinName: coinName.toUpperCase()
    })
};
async;
WithdrawCoin(coinName, _1.Valute, amount, number, address, string);
Promise < {
    tId: number,
    amountSent: number,
    funds: Funds
} > {
    return: this.request("WithdrawCoin", {
        coinName: coinName.toUpperCase(),
        amount: amount,
        address: address
    })
};
async;
CreateCoupon(currency, _1.Valute, amount, number, receiver, string);
Promise < {
    coupon: string,
    transID: number,
    funds: Funds
} > {
    return: this.request("CreateCoupon", {
        currency: currency.toUpperCase(),
        amount: amount,
        receiver: receiver
    })
};
async;
RedeemCoupon(coupon, string);
Promise < {
    couponAmount: number,
    couponCurrency: string,
    transID: number,
    funds: Funds
} > {
    return: this.request("RedeemCoupon", {
        coupon: coupon
    })
};
async;
request(method, string, params, (_e = {}, _e[index] = string, _e.any = any, _e));
{
    var nonce = Math.round((new Date()).getTime() / 1000);
    params.nonce = nonce;
    params.method = method;
    var postData = Object.keys(params)
        .map(function (paramName) { return ({ name: paramName, value: params[paramName] }); })
        .sort(function (param1, param2) { return param1.name > param2.name ? 1 : -1; })
        .map(function (param) {
        return param.name + "=" + param.value;
    }).join("&");
    var sign = util_1.generateSign(postData, this.config.secret);
    var headers = {
        "Key": this.config.key,
        "Sign": sign,
        "Content-Type": "application/x-www-form-urlencoded"
    };
    var response = await, fetch_1 = ("https://btc-e.com/tapi", {
        method: "POST",
        headers: headers,
        body: postData
    });
    var res = await, response, json = ();
    if (res.success === 0) {
        throw new Error(res.error);
    }
    return res.return;
}
exports["default"] = TradeAPI;
var _a, _b, _c, _d, _e;
