import {
    r as e,
    R as t,
    a as n
} from "./vendor.274e0611.js";
! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
const a = "https://mainnet.infura.io/v3/30ea44a7f7a54d0d899346ed5a0929fd",
    i = "0x7081B015d3fdd8a0E2b3E6aFEE144432Fa7aA7B0",
    r = window.Web3,
    s = window.ethereum,
    p = JSON.parse('[{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"string","name":"baseUri","type":"string"},{"internalType":"string","name":"contractURi","type":"string"},{"internalType":"string","name":"stubURi","type":"string"},{"internalType":"address","name":"_proxyRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"buyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTokensOfOwner","outputs":[{"internalType":"uint16[]","name":"_tokensIDs","type":"uint16[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mintToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseUri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"contractURi","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newmintLimitPerTransaction","type":"uint256"}],"name":"setMintLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRecipient","type":"address"}],"name":"setRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"newSale","type":"bool"}],"name":"setSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"stubURi","type":"string"}],"name":"setStubURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stubURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
    u = new r(a),
    q = 0.1;
let o = [];
const y = async () => {
    if (o = await s.request({
            method: "eth_requestAccounts"
        }), console.log(o), "0x1" == window.ethereum.chainId) console.log("Already connected to ethereum mainnet...");
    else try {
        await s.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: "0x1"
            }]
        })
    } catch (e) {
        if (4902 === error.code) try {
            await s.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x1",
                    rpcUrl: a
                }]
            })
        } catch (t) {}
    }
}, d = new u.eth.Contract(p, i), l = document.querySelector(".enableEthereumButton"), m = document.querySelector("#mint");
document.querySelector("#mintnumber"), document.addEventListener("DOMContentLoaded", (function(e) {
    y()
})), m.addEventListener("click", (async () => {
    let e = document.getElementById("mintnumber").value,
        t = e >= 5 ? .1 : .1;
    const n = await d.methods.mint(o[0], e).encodeABI(),
        a = (e * t * 1e18).toString(16),
        r = (1e5 * +e).toString(16);
    s.request({
        method: "eth_sendTransaction",
        params: [{
            from: o[0],
            to: i,
            value: a,
            data: n,
            gas: r
        }]
    }).then((e => console.log(e))).catch((e => console.error))
})), l.addEventListener("click", (() => {
    y()
}));
let c = 23;
let xter = setInterval((() => {
    if (c > 98) {
        clearInterval(xter);
    } else {
        c++;
        document.getElementById("flash").innerText = c;
    }
}), 2500);
const b = () => (e.exports.useState(0), window.up = () => {
    let e = parseInt(document.querySelector("#mintnumber").value) + 1;
    document.querySelector("#mintnumber").value = parseInt(e), document.querySelector("#num").innerText = parseInt(e);
    let t = parseFloat(e * q);
    document.querySelector("#total").innerText = `${t.toFixed(2)}`
}, window.down = () => {
    let e = parseInt(document.querySelector("#mintnumber").value) - 1;
    if (e <= 0) return;
    document.querySelector("#mintnumber").value = parseInt(e), document.querySelector("#num").innerText = parseInt(e);
    let t = parseFloat(e * q);
    document.querySelector("#total").innerText = `${t.toFixed(2)}`
}, t.createElement("div", null));
n.render(t.createElement(t.StrictMode, null, t.createElement(b, null)), document.getElementById("main"));