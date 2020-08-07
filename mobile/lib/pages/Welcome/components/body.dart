import 'package:flutter/material.dart';
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
          Text(
            "Bem vindo",
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold, 
              color: Colors.white,
            )
          ),
          SvgPicture.asset(
            "assets/img/studyng.svg", 
            height: size.height * 0.38,  
          ),
          
        ],
      ),
    );
  }
}
