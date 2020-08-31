import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/components/button.dart';
import 'package:mobile/components/input_field.dart';
import 'package:mobile/components/password_field.dart';
import 'package:mobile/components/text_account_check.dart';
import 'package:mobile/pages/Login/components/background.dart';
import 'package:mobile/pages/Login/login_screen.dart';

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
            "CADASTRO",
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
            "assets/img/bookLover.svg",
            height: size.height * 0.3,
          ),
          InputField(
            hintText: "Seu nome",
            onChanged: (value) {},
            icon: Icons.face,
          ),
          InputField(
            hintText: "Seu email",
            onChanged: (value) {},
            icon: Icons.email,
          ),
          PasswordField(
            onChanged: (vl) {},
          ),
          SizedBox(
            height: size.height * 0.017,
          ),
          Button(
            textButton: "CONTINUAR",
            handlePressButton: () {},
          ),
          TextAccountCheck(
            login: false,
            press: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return LoginScreen();
                  },
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
