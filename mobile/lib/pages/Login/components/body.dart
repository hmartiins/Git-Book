import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/button.dart';
import 'package:mobile/components/input_field.dart';
import 'package:mobile/components/password_field.dart';
import 'package:mobile/components/text_account_check.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/pages/Login/components/background.dart';
import 'package:mobile/pages/Register/register_screen.dart';

class Body extends StatelessWidget {
  const Body({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Background(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          SizedBox(
            height: size.height * 0.02,
          ),
          Text(
            "LOGIN",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: Colors.white,
              fontSize: 26,
            ),
          ),
          SizedBox(
            height: size.height * 0.04,
          ),
          SvgPicture.asset(
            "assets/img/loginAsset.svg",
            height: size.height * 0.34,
          ),
          InputField(
            hintText: "Email",
            icon: Icons.email,
            onChanged: (vl) {},
          ),
          PasswordField(
            onChanged: (vl) {},
          ),
          Button(
            textButton: "LOGIN",
            handlePressButton: () {},
          ),
          TextAccountCheck(
            login: true,
            press: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return RegisterScreen();
                  },
                ),
              );
            },
          )
        ],
      ),
    );
  }
}
