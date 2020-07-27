# Payment-confirmation


**Description**

> This is the final API for payment confirmation where payment gateway will confirm if the payment is made succesfull or failed due to some reason. 
> 
> Merchant needs to share a webhook URL where PG can give a callback. Merchant can respond to URL with some data that can be used for there futher analysis or can leave response to PG as bank. HTTP status code is a factor consider for success or failure
> 

**NOTE**

> IsSuccess in body is a optional paramter which you can pass to simulate the success and failure scenario. while in actual integration you need to pass IsSuccess if passed will be ignored


**Additional Info**

> For more information on postive and negetive request response can be found under models. 


**API Request**

```json http
{
  "method": "post",
  "url": "https://merchant.confirmpayment.com/pay",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "success": true,
    "responseCode": 200,
    "message": "Token successfully generated",
    "data": {
      "operator": "Airtel",
      "reference": "2020-07-10T03:22:38.033Z",
      "utilityref": "2020-07-10T03:22:38.033Z",
      "amount": "1000",
      "transid": "2020-07-10T03:22:38.033Z",
      "msisdn": "2020-07-10T03:22:38.033Z"
    }
  }
}
```
