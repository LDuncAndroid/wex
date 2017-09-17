import { OrderID, OrderStatus, OrderType, Valute, ValutePair } from ".";
import { generateSign } from "./util";
/**
 * This API allows to trade on the exchange and receive information about the account.
 * To use this API, you need to create an API key. https://btc-e.com/tapi/docs#main
 */
class TradeAPI {
    constructor(config) {
        this.config = config;
        /**
         * Returns information about the user’s current balance, API-key privileges,
         * the number of open orders and Server Time.
         * To use this method you need a privilege of the key info.
         */
        this.async = getInfo();
    }
    Promise() {
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
    }
}
 > {
    return: this.request("getInfo", {})
};
async;
Trade(pair, ValutePair, type, OrderType, rate, number, amount, number);
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
        pair,
        type,
        rate,
        amount,
    })
};
async;
ActiveOrders(pair, ValutePair);
Promise < {
    // index - Order ID.
    [index]: number };
{
    pair: string; // The pair on which the order was created.
    type: OrderType; // Order type, buy/sell.
    amount: number; // The amount of currency to be bought/sold.
    rate: number; // Sell/Buy price.
    timestamp_created: number; // The time when the order was created.
    status: OrderStatus; // Deprecated, is always equal to 0.
}
;
 > {
    return: this.request("ActiveOrders", {
        pair,
    })
};
async;
OrderInfo(orderId, OrderID);
Promise < {
    // index - Order ID.
    [index]: number };
{
    pair: string; // The pair on which the order was created
    type: OrderType; // Order type, buy/sell.
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
        order_id: orderId,
    })
};
async;
CancelOrder(orderId, OrderID);
Promise < {
    order_id: OrderID,
    funds: Funds
} > {
    return: this.request("CancelOrder", {
        order_id: orderId,
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
    pair: ValutePair
});
Promise < {
    [index]: number };
{
    pair: string; // The pair on which the trade was executed.
    type: OrderType; // Trade type, buy/sell.
    amount: number; // The amount of currency was bought/sold.
    rate: number; // Sell/Buy price.
    order_id: OrderID; // Order ID.
    is_your_order: 1 | 0; // Is equal to 1 if order_id is your order, otherwise is equal to 0.
    timestamp: number; // Trade execution time.
}
;
 > {
    params:  = params || {},
    const: p, any:  = { params },
    if(params, endId) {
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
Promise < {
    // index - Transaction ID.
    [index]: number };
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
    const: p, any:  = { params },
    if(params, endId) {
        p.end_id = params.endId;
        delete p.endId;
    },
    return: this.request("TransHistory", p)
};
async;
CoinDepositAddress(coinName, Valute);
Promise < {
    address: string
} > {
    return: this.request("CoinDepositAddress", {
        coinName: coinName.toUpperCase(),
    })
};
async;
WithdrawCoin(coinName, Valute, amount, number, address, string);
Promise < {
    tId: number,
    amountSent: number,
    funds: Funds
} > {
    return: this.request("WithdrawCoin", {
        coinName: coinName.toUpperCase(),
        amount,
        address,
    })
};
async;
CreateCoupon(currency, Valute, amount, number, receiver, string);
Promise < {
    coupon: string,
    transID: number,
    funds: Funds
} > {
    return: this.request("CreateCoupon", {
        currency: currency.toUpperCase(),
        amount,
        receiver,
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
        coupon,
    })
};
async;
request(method, string, params, { [index]: string, any });
{
    const nonce = Math.round((new Date()).getTime() / 1000);
    params.nonce = nonce;
    params.method = method;
    const postData = Object.keys(params)
        .map((paramName) => ({ name: paramName, value: params[paramName] }))
        .sort((param1, param2) => param1.name > param2.name ? 1 : -1)
        .map((param) => {
        return param.name + "=" + param.value;
    }).join("&");
    const sign = generateSign(postData, this.config.secret);
    const headers = {
        "Key": this.config.key,
        "Sign": sign,
        "Content-Type": "application/x-www-form-urlencoded",
    };
    const response = await, fetch = ("https://btc-e.com/tapi", {
        method: "POST",
        headers,
        body: postData,
    });
    const res = await, response, json = ();
    if (res.success === 0) {
        throw new Error(res.error);
    }
    return res.return;
}
export default TradeAPI;
