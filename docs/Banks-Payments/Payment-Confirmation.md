# Payment-Confirmation

**Description**

> This API is used to confirm the payment from user to payment service provider. 
> This APi validates the service is up and request is successfully reached to payment parthers. Also you need to provide one time password this password is safe and secured transfered from payment gateway to service providers.
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
  "OTP": "123456",
  "ReferenceID": "DFDS799D",
  "MobileNumber": "SHAREDEARLIER// +255908916224",
  "CustomerAccountNumber": "67867892347823",
  "IsSuccess": true
  }
}
```
