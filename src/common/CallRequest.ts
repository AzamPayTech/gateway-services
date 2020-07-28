const rp = require('request-promise');

export default async function callRequest(options: any): Promise<any> {
  // eslint-disable-next-line @typescript-eslint/return-await
  options.rejectUnAuthorized = false
  return rp(options)
    .then((response: any) => {
      console.log("in reposne=====", response)
      if (response) {
        return {
          success: true,
          message: 'Response retrieved successfully',
          data: response,
        };
      } else {
        return {
          success: false,
          message: 'Something went wrong. No data found',
          data: {},
        };
      }
    })
    .catch((err: any) => {
      console.log("in acthc------", err)
      return {
        success: false,
        message: 'Something went wrong while requesting',
        data: err,
      };
    });
}
