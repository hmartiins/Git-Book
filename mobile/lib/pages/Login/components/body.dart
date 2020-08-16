import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/button.dart';
import 'package:mobile/components/input_field.dart';
import 'package:mobile/components/password_field.dart';
import 'package:mobile/components/text_account_check.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/pages/Login/components/background.dart';

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
          Text(
            "LOGIN",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: Colors.white,
              fontSize: 26,
            ),
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
          TextAccountCheck()
        ],
      ),
    );
  }
}
