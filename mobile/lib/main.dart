import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/pages/Welcome/welcome_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Git\'s Book Welcome', 
      theme: ThemeData(
        primaryColor: kPrimaryColor,
        scaffoldBackgroundColor: Color(0xFF262136)
      ),
      home: WelcomeScreen(),
    );
  }
}