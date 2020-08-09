import 'package:flutter/material.dart';
import 'package:mobile/components/text_field_container.dart';

import '../constants.dart';

class InputField extends StatelessWidget {
  final String hintText;
  final IconData icon;
  final ValueChanged<String> onChanged;
  const InputField({
    Key key,
    this.hintText,
    this.icon,
    this.onChanged,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFieldContainer(
      child: TextField(
        onChanged: onChanged,
        style: TextStyle(color: Colors.white),
        decoration: InputDecoration(
          icon: Icon(
            icon,
            color: kPrimaryLightColor,
          ),
          hintText: hintText,
          hintStyle: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.w500,
          ),
          fillColor: Colors.white,
          border: InputBorder.none,
        ),
      ),
    );
  }
}
