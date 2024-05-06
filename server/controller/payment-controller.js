import PaytmChecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantKey } from "../index.js";

import formidable from "formidable";
import https from 'https';

export const addPaymentGetway = async (req, res) => {
    try{
       let paytmCheckSum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey)

       let params = {
        ...paytmParams, 'CHECKSUMHASH': paytmCheckSum
       }
       res.status(200).json(params);
    }catch (error){
        res.status(500).json({ error: error.message })
    }
}

// This is for paytm response to redirect into to the our orignal ui:-

export const paytmResponse = (req, res) => {
    const form = new formidable.IncomingForm();
    let paytmCheckSum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    let isVerifySignature = PaytmChecksum.verifySignature(req.body, paytmMerchantKey, paytmCheckSum);
    if(isVerifySignature){
        let paytmParams = {};
        paytmParams['MID'] = req.body.MID;
        paytmParams['ORDERID'] = req.body.ORDERID;

        paytmCheckSum.generateSignature(paytmParams, paytmMerchantKey).then(function(checkSum){
            paytmParams['CHECKSUMHASH'] = checkSum;

            let post_data = JSON.stringify(paytmParams);

            let options = {
                hostname: 'secruregw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                headers: {
                    'Content Type': 'application/json',
                    'Content Length': post_data.length
                }
            }
            let res = '';
            let post_req = https.request(options, function(post_res){
                post_res.on('data', function(chunk){
                    res += chunk;
                });
                post_res.on('end', function(){
                    let result = JSON.parse(res)
                    res.redirect('https://localhost:3000')
                })
            });

            post_req.write(post_data);
            post_req.end();

        })
    }else{
        console.log("checkSum Mismatched")
    }
}