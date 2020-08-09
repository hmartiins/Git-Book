import 'package:flutter/material.dart';
import 'package:mobile/main.dart';

class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: size.height,
        child: Stack(
          alignment: Alignment.center,
          children: <Widget>[
            Positioned(
                top: 0,
                left: 0,
                child: Image.asset(
                  "assets/img/main_top.png",
                  width: size.width * 0.36,
                )),
            Positioned(
              bottom: 0,
              right: 0,
              child: Image.asset(
                "assets/img/login_bottom.png",
                width: size.width * 0.6,
              ),
            )
          ],
        ),
      ),
    );
  }
}
