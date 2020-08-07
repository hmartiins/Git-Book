import 'package:flutter/material.dart';
import '../constants.dart';

class Button extends StatelessWidget {
  final String textButton;
  final Function handlePressButton;
  final Color colorButton, textColor;

  const Button({
    Key key,
    this.textButton,
    this.handlePressButton,
    this.colorButton = kPrimaryColor,
    this.textColor = Colors.white,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      width: size.width * 0.8,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(24.5),
          child: FlatButton(
          padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
          color: kPrimaryColor,
          onPressed: handlePressButton, 
          child: Text(
            textButton,
            style: TextStyle(
              color: textColor, 
              fontWeight: FontWeight.bold,
              fontSize: 17
            ),
          )
        ),
      ),
    );
  }
}

