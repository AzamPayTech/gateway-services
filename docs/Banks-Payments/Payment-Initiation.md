# Payment-Initiation

**Description**

> This API is used to initiate the payment from user to payment service provider. 
> This APi validates the service is up and request is successfully reached to payment parthers. This request also validates the information provided by merchant from payment partners.
> 
> Request can be seen as below, the token in authorizations is the response for API of token. How ever it is not mandtody to generate token again and again or to genreate token Via token generation API. You can self generate the API with dedicated auth scheme assigned on admin panel. 


**NOTE**

> IsSuccess in body is a optional paramter which you can pass to simulate the success and failure scenario. while in actual integration you need to pass IsSuccess if passed will be ignored


**Additional Info**

> For more information on postive and negetive request response can be found under models. 


**API Request**

```json http
{
  "method": "post",
  "url": "http://3.120.144.2:3000/azam/mock/v1/checkout",
  "headers": {
    "Authorization": "UxjnkkasdBkasd6886838nasd",
    "Content-Type": "application/json"
  },
  "body": {
  "MobileNumber": "+25590801212",
  "AccountNumber": "213e34343543",
  "MerchantRefID": "ATHRV",
  "Amount": "1000",
  "RefernceNumber": "HFMXJ*&(*",
  "IsSuccess": true
  }
}
```
