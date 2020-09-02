function templateHtml() {
  const template = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
      />
      <title></title>
  
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #f6f6f6;
        }
        .primaryBg {
          background-color: #18a851;
        }
        .title {
          color: #eeeeee;
        }
        .subTitle {
          color: #dad9ff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-4">
            <img
              src="https://lh3.googleusercontent.com/Stt5csACUUx-PUvjEL9Y6zGrftxDpcSfghpATo45ZPkFXWSSEZww_ul9UaafjcS4KMO3Ex5vY82-D-74J0g0mgyiJTsRVr30Lh8VMKYicp89C9VzuxlCorne-X0zM3otgJ25OFLRvBELc9UvZNgmC04TIYyuoU8mYsLWTTPA2UpCefAv2GLhW3PuPorlJeSnnrz88mFxPTojhpL_oo5T-WnkZaM-nSoLlWGO17cPeDvNtuQaI-wf8-2WC-fUF3UGmOVpgjGwGjL0275jIhDdKEoBLgH42IlDu9tDWKMmKmfA54a-i0G3g3rWrZL4MlD5vsk4yhMEKqx4VHI5VGfXbHQlUKNf8Naay51Gc4hAc8y4-A17mZZKBMA1PP9bfzEAgsKxd1g7RYy1yncLXzi7ig-BnVSM8mYV_Q735zn8GzxXc_HVDtW3ofxrxR7OXMoHH7X19UWSTnJ3gTnOxH2mMRvBs5OuQ7GpGv_L1IOthPuqHF2P8dcKeWQ9b6duz7UF4f2dckChprYjBIQztQGuoV7Hhn0hszeC8xOpgrocjKBonGEqW_D5blLo5bN5RShXXw860h0UNI6-WocQc1WhaTR6TwpNtZ0ZMJ-7dpDvl6vCrx9fzJXxFgcglyTiicQ-PwFUGvq19WqA5ZVX64eIummU-PO5iCC388ylDy3S_epy0Y5pqvMCbGf-vc5N=w253-h55-no?authuser=0"
              alt="logo"
            />
          </div>
        </div>
  
        <div class="row">
          <div
            class="col-md-8 offset-md-2 text-center mt-4 pt-5 primaryBg rounded-top"
          >
            <hr />
            <img
              src="https://lh3.googleusercontent.com/ZI4vLqHr4pSYLaQcysHgOiagclHdnd-k8NHb4E4L_6Alw62OErV9jwqLQnekso6KRzXLK9PJkkp3T1UWGvbiw1KA8HpmzsioglFglH6eYrYyqGLXV_3STrspO_zlMuxThowXaQcpFho3FwsMueN7GCoozFHz8EOm7mR5NUDmxMT5wGBe6UAElHmoOStOXrgAh-UlSK4dPE81FGRCWeyYP3R2B2m38C8OrTfwJEas7eyGvQ148VPn9iHbWFJZq3HNcZjfQE4nPDsAdaHmKGQMb2dFdtkvTCW8WKx2kGNoypNvDifGdw0alYgu43-ZZ3mBsLu_dlcUPKgGPYYJPTT75fYVeqSd670tVcaio5NgGmSrcuNFXr9-M-r6YHADov_n6cnQJFhBkP_xBdSsWf8RNezYb2gMXVenkQ5IAiq-NUMWskx5p4lxpn6BlC2ZZRYPxVYhseR22n1Kpib7ApSDTG5a-mai9QOwk4d4voso60al89TukG6HXkS6UKDS_wCSdI0dL0w8MoYwvB3yDQP-QE4w9gogmjyQLuZjlh-SirsiWtDZYByZIyIiD6AiSoBnw1AdQJQwKlB6FQiGw4u9PHIs7lWUvDwDHbyWuuCXRaGCoYvx3E_U3vZ5u4UnLcKT4TySY_gIBSZnBPc6ecCmYSSda15UcR6bHCsX6pxDrqVImPWlEZPPtfUFec7j=w702-h662-no?authuser=0"
              alt="email welcome"
              width="62%"
            />
          </div>
  
          <div class="col-md-8 offset-md-2 text-center primaryBg pb-4">
            <h1 class="font-weight-bold title">Hi Leticia,</h1>
            <h1 class="font-weight-bold title">welcome to Git's Book!</h1>
            <h4 class="subTitle mt-4">Thank you for subscribing!</h4>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-8 offset-md-2 border border-success border-bottom-0">
            <h3 style="color: #3c3c3c" class="font-weight-bold mt-5 text-center">
              Your data
            </h3>
            <hr />
  
            <form>
              <div class="form-row mt-5">
                <div class="form-group col-lg-6">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Leticia"
                    readonly
                  />
                </div>
                <div class="form-group col-lg-6">
                  <label for="email">E-mail:</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="teste@email.com"
                    readonly
                  />
                </div>
              </div>
  
              <div class="form-row mt-3">
                <div class="form-group col-lg-6">
                  <label for="fone">Fone:</label>
                  <input
                    type="text"
                    name="fone"
                    class="form-control"
                    placeholder="13-997507070"
                    readonly
                  />
                </div>
                <div class="form-group col-lg-6">
                  <label for="birth">Date of birth:</label>
                  <input
                    type="date"
                    name="birth"
                    class="form-control"
                    value="2000-01-01"
                    readonly
                  />
                </div>
                <div class="form-group col-lg-6 offset-lg-3">
                  <a
                    href="#"
                    class="btn btn-outline-success btn-block rounded-pill mt-4 mb-5"
                    >Change some data</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-8 offset-md-2 primaryBg text-center rounded-bottom">
            <img
              src="https://lh3.googleusercontent.com/Stt5csACUUx-PUvjEL9Y6zGrftxDpcSfghpATo45ZPkFXWSSEZww_ul9UaafjcS4KMO3Ex5vY82-D-74J0g0mgyiJTsRVr30Lh8VMKYicp89C9VzuxlCorne-X0zM3otgJ25OFLRvBELc9UvZNgmC04TIYyuoU8mYsLWTTPA2UpCefAv2GLhW3PuPorlJeSnnrz88mFxPTojhpL_oo5T-WnkZaM-nSoLlWGO17cPeDvNtuQaI-wf8-2WC-fUF3UGmOVpgjGwGjL0275jIhDdKEoBLgH42IlDu9tDWKMmKmfA54a-i0G3g3rWrZL4MlD5vsk4yhMEKqx4VHI5VGfXbHQlUKNf8Naay51Gc4hAc8y4-A17mZZKBMA1PP9bfzEAgsKxd1g7RYy1yncLXzi7ig-BnVSM8mYV_Q735zn8GzxXc_HVDtW3ofxrxR7OXMoHH7X19UWSTnJ3gTnOxH2mMRvBs5OuQ7GpGv_L1IOthPuqHF2P8dcKeWQ9b6duz7UF4f2dckChprYjBIQztQGuoV7Hhn0hszeC8xOpgrocjKBonGEqW_D5blLo5bN5RShXXw860h0UNI6-WocQc1WhaTR6TwpNtZ0ZMJ-7dpDvl6vCrx9fzJXxFgcglyTiicQ-PwFUGvq19WqA5ZVX64eIummU-PO5iCC388ylDy3S_epy0Y5pqvMCbGf-vc5N=w253-h55-no?authuser=0"
              alt="logo"
              class="mt-3"
            />
            <hr />
            <p class="text-black-50 font-weight-bold mb-1">Git’s Books - 2020</p>
            <span class="text-black-50"
              >Veja as condições de uso da Git’s Books</span
            >
          </div>
        </div>
      </div>
    </body>
  </html>  
  `;

  return template;
}

module.exports = templateHtml;
