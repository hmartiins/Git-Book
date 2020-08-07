import 'package:flutter/material.dart';
import 'package:mobile/pages/Welcome/components/background.dart';

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
            style: TextStyle(fontWeight: FontWeight.bold, color: Colors.white)
          ),
        ],
      ),
    );
  }
}
