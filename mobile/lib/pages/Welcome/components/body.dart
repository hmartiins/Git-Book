import 'package:flutter/material.dart';
import 'package:mobile/components/button.dart';
import 'package:mobile/pages/Login/login_screen.dart';
import 'package:mobile/pages/Register/register_screen.dart';
import 'package:mobile/pages/Welcome/components/background.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Background(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text("Bem vindo",
              style: TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              )),
          SizedBox(height: size.height * 0.04),
          SvgPicture.asset(
            "assets/img/studyng.svg",
            height: size.height * 0.38,
          ),
          SizedBox(height: size.height * 0.04),
          Button(
            textButton: 'LOGIN',
            handlePressButton: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) {
                  return LoginScreen();
                }),
              );
            },
          ),
          Button(
            textButton: 'CADASTRE-SE',
            handlePressButton: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) {
                  return RegisterScreen();
                }),
              );
            },
          )
        ],
      ),
    );
  }
}
