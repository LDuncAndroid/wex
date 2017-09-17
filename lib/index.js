function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
require("isomorphic-fetch");
var PublicAPI_1 = require("./PublicAPI");
exports.PublicAPI = PublicAPI_1.default;
var TradeAPI_1 = require("./TradeAPI");
exports.TradeAPI = TradeAPI_1.default;
__export(require("./PublicAPI"));
__export(require("./TradeAPI"));
(function (Valute) {
    Valute[Valute["BTC"] = "btc"] = "BTC";
    Valute[Valute["USD"] = "usd"] = "USD";
    Valute[Valute["LTC"] = "ltc"] = "LTC";
    Valute[Valute["ETH"] = "eth"] = "ETH";
    Valute[Valute["RUR"] = "rur"] = "RUR";
    Valute[Valute["EUR"] = "eur"] = "EUR";
    Valute[Valute["NMC"] = "nmc"] = "NMC";
    Valute[Valute["NVC"] = "nvc"] = "NVC";
    Valute[Valute["PPC"] = "ppc"] = "PPC";
    Valute[Valute["DSH"] = "dsh"] = "DSH";
})(exports.Valute || (exports.Valute = {}));
var Valute = exports.Valute;
(function (ValutePair) {
    ValutePair[ValutePair["BTC_USD"] = "btc_usd"] = "BTC_USD";
    ValutePair[ValutePair["BTC_RUR"] = "btc_rur"] = "BTC_RUR";
    ValutePair[ValutePair["BTC_EUR"] = "btc_eur"] = "BTC_EUR";
    ValutePair[ValutePair["LTC_BTC"] = "ltc_btc"] = "LTC_BTC";
    ValutePair[ValutePair["LTC_USD"] = "ltc_usd"] = "LTC_USD";
    ValutePair[ValutePair["LTC_RUR"] = "ltc_rur"] = "LTC_RUR";
    ValutePair[ValutePair["LTC_EUR"] = "ltc_eur"] = "LTC_EUR";
    ValutePair[ValutePair["NMC_BTC"] = "nmc_btc"] = "NMC_BTC";
    ValutePair[ValutePair["NMC_USD"] = "nmc_usd"] = "NMC_USD";
    ValutePair[ValutePair["NVC_BTC"] = "nvc_btc"] = "NVC_BTC";
    ValutePair[ValutePair["NVC_USD"] = "nvc_usd"] = "NVC_USD";
    ValutePair[ValutePair["USD_RUR"] = "usd_rur"] = "USD_RUR";
    ValutePair[ValutePair["EUR_USD"] = "eur_usd"] = "EUR_USD";
    ValutePair[ValutePair["EUR_RUR"] = "eur_rur"] = "EUR_RUR";
    ValutePair[ValutePair["PPC_BTC"] = "ppc_btc"] = "PPC_BTC";
    ValutePair[ValutePair["PPC_USD"] = "ppc_usd"] = "PPC_USD";
    ValutePair[ValutePair["DSH_BTC"] = "dsh_btc"] = "DSH_BTC";
    ValutePair[ValutePair["DSH_USD"] = "dsh_usd"] = "DSH_USD";
    ValutePair[ValutePair["DSH_RUR"] = "dsh_rur"] = "DSH_RUR";
    ValutePair[ValutePair["DSH_EUR"] = "dsh_eur"] = "DSH_EUR";
    ValutePair[ValutePair["DSH_LTC"] = "dsh_ltc"] = "DSH_LTC";
    ValutePair[ValutePair["DSH_ETH"] = "dsh_eth"] = "DSH_ETH";
    ValutePair[ValutePair["ETH_BTC"] = "eth_btc"] = "ETH_BTC";
    ValutePair[ValutePair["ETH_USD"] = "eth_usd"] = "ETH_USD";
    ValutePair[ValutePair["ETH_EUR"] = "eth_eur"] = "ETH_EUR";
    ValutePair[ValutePair["ETH_LTC"] = "eth_ltc"] = "ETH_LTC";
    ValutePair[ValutePair["ETH_RUR"] = "eth_rur"] = "ETH_RUR";
})(exports.ValutePair || (exports.ValutePair = {}));
var ValutePair = exports.ValutePair;
(function (OrderType) {
    OrderType[OrderType["Buy"] = "buy"] = "Buy";
    OrderType[OrderType["Sell"] = "sell"] = "Sell";
})(exports.OrderType || (exports.OrderType = {}));
var OrderType = exports.OrderType;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Active"] = 0] = "Active";
    OrderStatus[OrderStatus["Executed"] = 1] = "Executed";
    OrderStatus[OrderStatus["Canceled"] = 2] = "Canceled";
    OrderStatus[OrderStatus["CanceledButPartiallyExecuted"] = 3] = "CanceledButPartiallyExecuted";
})(exports.OrderStatus || (exports.OrderStatus = {}));
var OrderStatus = exports.OrderStatus;
