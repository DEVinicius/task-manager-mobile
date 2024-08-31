import React from "react";
import { Text, View } from "react-native";
import { CardStyle } from "./style";

interface CardProps {
  backgroundColor: string;
  children: any;
}

export function Card({ backgroundColor, children }: CardProps) {
  return <View style={CardStyle(backgroundColor)}>{children}</View>;
}
