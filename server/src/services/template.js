function templateHtml() {
  const template = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #f6f6f6;
        }
        hr {
          margin: 10px;
        }
        .container {
          width: 100%;
          max-width: 750px;
          margin: 0 auto;
          font-family: 'Lato', sans-serif;
        }
        .header {
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f0f0;
        }
        .welcome {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-bottom: 20px;
          background-color: #18a851;

          text-align: center;
        }
        .welcome img {
          margin: 35px 0;
        }
        .welcome h1 {
          font: 900 38px lato;
          color: #eeeeee;
          letter-spacing: 1px;
        }
        .welcome h4 {
          font: 900 20px lato;
          margin: 15px 0;
          color: #dad9ff;
          letter-spacing: 1px;
        }
        .data {
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-left: 1px solid #18a851;
          border-right: 1px solid #18a851;
        }
        .hr {
          width: 100%;
          border: 1px solid #dfdfdf;
        }
        .data h3 {
          font: 900 24px lato;
          color: rgb(27, 27, 27);
          margin: 20px;
        }
        .data form {
          width: 100%;
          padding: 20px 50px;
        }
        .data form .form-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
        }
        .data form .form-group {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
        }
        .data form .form-row + .form-row {
          margin-top: 25px;
        }
        .data form .form-group label {
          font: normal 18px lato;
          color: #424242;
        }
        .data form .form-group input {
          width: 95%;
          height: 45px;
          padding: 0 8px;
          font: 400 16px lato;
          background-color: #e7e7e7;
          color: #111111;
          border: 0;
          border-radius: 8px;
        }
        .data form .form-group a {
          width: 50%;
          height: 45px;
          padding: 15px;
          background-color: transparent;
          border: 1px solid #18a851;
          border-radius: 20px;
          text-decoration: none;
          color: #18a851;
          margin: 0 auto;
          margin-bottom: 30px;

          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
        }
        .data form .form-group a:hover {
          color: #b4ffd2;
          background-color: #18a851;
          box-shadow: inset 0px 0.5px 5px rgb(4, 121, 62);
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #18a851;
          flex-direction: column;
          padding: 30px 0;

          font: 400 16px lato;
        }
        .footer hr {
          width: 100%;
          border: 1px solid #0c9744;
        }
        .footer p {
          color: #292929b9;
          font-weight: 900;
          margin-top: 5px;
        }
        .footer span {
          color: #383838b9;
          margin-top: 5px;
        }
        @media (max-width: 700px) {
          .data form .form-row {
            flex-direction: column;
          }
          .data form .form-group + .form-group {
            margin-top: 25px;
          }
          .data form .form-group input {
            width: 100%;
          }
        }
        @media (max-width: 550px) {
          .data form .form-group a {
            width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img
            src="https://lh3.googleusercontent.com/Stt5csACUUx-PUvjEL9Y6zGrftxDpcSfghpATo45ZPkFXWSSEZww_ul9UaafjcS4KMO3Ex5vY82-D-74J0g0mgyiJTsRVr30Lh8VMKYicp89C9VzuxlCorne-X0zM3otgJ25OFLRvBELc9UvZNgmC04TIYyuoU8mYsLWTTPA2UpCefAv2GLhW3PuPorlJeSnnrz88mFxPTojhpL_oo5T-WnkZaM-nSoLlWGO17cPeDvNtuQaI-wf8-2WC-fUF3UGmOVpgjGwGjL0275jIhDdKEoBLgH42IlDu9tDWKMmKmfA54a-i0G3g3rWrZL4MlD5vsk4yhMEKqx4VHI5VGfXbHQlUKNf8Naay51Gc4hAc8y4-A17mZZKBMA1PP9bfzEAgsKxd1g7RYy1yncLXzi7ig-BnVSM8mYV_Q735zn8GzxXc_HVDtW3ofxrxR7OXMoHH7X19UWSTnJ3gTnOxH2mMRvBs5OuQ7GpGv_L1IOthPuqHF2P8dcKeWQ9b6duz7UF4f2dckChprYjBIQztQGuoV7Hhn0hszeC8xOpgrocjKBonGEqW_D5blLo5bN5RShXXw860h0UNI6-WocQc1WhaTR6TwpNtZ0ZMJ-7dpDvl6vCrx9fzJXxFgcglyTiicQ-PwFUGvq19WqA5ZVX64eIummU-PO5iCC388ylDy3S_epy0Y5pqvMCbGf-vc5N=w253-h55-no?authuser=0"
            alt="logo"
          />
        </div>

        <div class="welcome">
          <img
            src="https://lh3.googleusercontent.com/ZI4vLqHr4pSYLaQcysHgOiagclHdnd-k8NHb4E4L_6Alw62OErV9jwqLQnekso6KRzXLK9PJkkp3T1UWGvbiw1KA8HpmzsioglFglH6eYrYyqGLXV_3STrspO_zlMuxThowXaQcpFho3FwsMueN7GCoozFHz8EOm7mR5NUDmxMT5wGBe6UAElHmoOStOXrgAh-UlSK4dPE81FGRCWeyYP3R2B2m38C8OrTfwJEas7eyGvQ148VPn9iHbWFJZq3HNcZjfQE4nPDsAdaHmKGQMb2dFdtkvTCW8WKx2kGNoypNvDifGdw0alYgu43-ZZ3mBsLu_dlcUPKgGPYYJPTT75fYVeqSd670tVcaio5NgGmSrcuNFXr9-M-r6YHADov_n6cnQJFhBkP_xBdSsWf8RNezYb2gMXVenkQ5IAiq-NUMWskx5p4lxpn6BlC2ZZRYPxVYhseR22n1Kpib7ApSDTG5a-mai9QOwk4d4voso60al89TukG6HXkS6UKDS_wCSdI0dL0w8MoYwvB3yDQP-QE4w9gogmjyQLuZjlh-SirsiWtDZYByZIyIiD6AiSoBnw1AdQJQwKlB6FQiGw4u9PHIs7lWUvDwDHbyWuuCXRaGCoYvx3E_U3vZ5u4UnLcKT4TySY_gIBSZnBPc6ecCmYSSda15UcR6bHCsX6pxDrqVImPWlEZPPtfUFec7j=w702-h662-no?authuser=0"
            alt="email welcome"
            width="62%"
          />

          <div class="message">
            <h1>Hi Leticia,</h1>
            <h1>welcome to Git's Book!</h1>
            <h4>Thank you for subscribing!</h4>
          </div>
        </div>

        <div class="data">
          <h3 style="color: #3c3c3c">Your data</h3>
          <hr class="hr" />

          <form>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Leticia" readonly />
              </div>
              <div class="form-group">
                <label for="email">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="teste@email.com"
                  readonly
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="fone">Fone:</label>
                <input
                  type="text"
                  name="fone"
                  placeholder="13-997507070"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="birth">Date of birth:</label>
                <input type="date" name="birth" value="2000-01-01" readonly />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <a href="#">Change some data</a>
              </div>
            </div>
          </form>
        </div>

        <div class="footer">
          <img
            src="https://lh3.googleusercontent.com/Stt5csACUUx-PUvjEL9Y6zGrftxDpcSfghpATo45ZPkFXWSSEZww_ul9UaafjcS4KMO3Ex5vY82-D-74J0g0mgyiJTsRVr30Lh8VMKYicp89C9VzuxlCorne-X0zM3otgJ25OFLRvBELc9UvZNgmC04TIYyuoU8mYsLWTTPA2UpCefAv2GLhW3PuPorlJeSnnrz88mFxPTojhpL_oo5T-WnkZaM-nSoLlWGO17cPeDvNtuQaI-wf8-2WC-fUF3UGmOVpgjGwGjL0275jIhDdKEoBLgH42IlDu9tDWKMmKmfA54a-i0G3g3rWrZL4MlD5vsk4yhMEKqx4VHI5VGfXbHQlUKNf8Naay51Gc4hAc8y4-A17mZZKBMA1PP9bfzEAgsKxd1g7RYy1yncLXzi7ig-BnVSM8mYV_Q735zn8GzxXc_HVDtW3ofxrxR7OXMoHH7X19UWSTnJ3gTnOxH2mMRvBs5OuQ7GpGv_L1IOthPuqHF2P8dcKeWQ9b6duz7UF4f2dckChprYjBIQztQGuoV7Hhn0hszeC8xOpgrocjKBonGEqW_D5blLo5bN5RShXXw860h0UNI6-WocQc1WhaTR6TwpNtZ0ZMJ-7dpDvl6vCrx9fzJXxFgcglyTiicQ-PwFUGvq19WqA5ZVX64eIummU-PO5iCC388ylDy3S_epy0Y5pqvMCbGf-vc5N=w253-h55-no?authuser=0"
            alt="logo"
            class="mt-3"
          />
          <hr />
          <p>Git’s Books - 2020</p>
          <span>Veja as condições de uso da Git’s Books</span>
        </div>
      </div>
    </body>
  </html>  
  `;

  return template;
}

module.exports = templateHtml;
