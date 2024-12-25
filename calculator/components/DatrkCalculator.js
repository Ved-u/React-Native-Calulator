import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp
// } from 'react-native-responsive-screen'

const DatrkCalculator = () => {
  const [expression, setExpression] = useState(""); // For user input
  const [result, setResult] = useState(""); // For calculation result

  // Function to handle button presses
  const handlePress = (value) => {
    if (value === "AC") {
      setExpression(""); // Clear the expression
      setResult(""); // Clear the result
    } else if (value === "DEL") {
      setExpression(expression.slice(0, -1)); // Remove the last character
    } else if (value === "=") {
      try {
        const evalExpression = expression.replace(/X/g, "*"); // Replace 'X' with '*'
        const evalResult = eval(evalExpression); // Evaluate the expression
        setResult(evalResult.toString());
      } catch {
        setResult("Error"); // Handle invalid expressions
      }
    } else {
      setExpression(expression + value); // Append the value to the expression
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.valuebox}>
        <View style={styles.titlebox}>
          <Ionicons name="calculator-outline" size={30} color="#f9f9f9" />
          <Text style={styles.titlt}>calculator</Text>
        </View>
        <Text style={styles.calculator_Text}>{expression || "0"}</Text>
        <Text style={styles.Result_Text}>{result}</Text>
      </View>


      <View style={styles.btnbox}>
        <View style={styles.btnrow}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handlePress("AC")}
          >
            <Text style={styles.symbolic_Text}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handlePress("DEL")}
          >
            <Ionicons name="backspace-outline" size={25} color="#ff4c29" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress("%")}>
            <Text style={styles.symbolic_Text}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress("/")}>
            <Text style={styles.symbolic_Text}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnrow}>
          {["9", "8", "7", "X"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.btn}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.btnrow}>
          {["6", "5", "4", "-"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.btn}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.btnrow}>
          {["3", "2", "1", "+"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.btn}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.btnrow}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress(".")}>
            <Text style={styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress("0")}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.equal_btn}
            onPress={() => handlePress("=")}
          >
            <Text style={styles.text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.info_alig}>
        <Text style={styles.info}> ➣   Calc By Vedant Utpat</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 2,
    backgroundColor: "#082032",
    paddingRight: 20,
    paddingLeft:10,
    paddingBottom:40,
    justifyContent:'center'
  },
  valuebox: {
    flex: 0.7,
    // padding:10,
  },
  titlebox: {
    width: "40%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  titlt: {
    color: "#f9f9f9",
    fontSize: 20,
  },
  calculator_Text: {
    alignSelf: "flex-end",
    fontSize: 30,
    color: "#f9f9f9",
    marginTop: 20,
  },
  Result_Text: {
    alignSelf: "flex-end",
    fontSize: 60,
    color: "#f9f9f9",
    fontWeight: "bold",
  },
  btnbox: {
    flex: 1.1,
    paddingRight: 10,
    marginRight:0.1,
    flex: 1.7,
    justifyContent: "space-evenly",
  },
  btnrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
  },
  btn: {
    width: 75,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 25,
    borderColor: "white",
    borderWidth: 1,
    padding: 3,
    margin:3
  },
  text: {
    fontSize: 25,
    color: "#f9f9f9",
  },
  symbolic_Text: {
    fontSize: 25,
    color: "#ff4c29",
  },
  equal_btn: {
    width: 150,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 25,
    backgroundColor: "#90EE90",
    marginLeft:7,
    marginTop:8,
    marginBottom:6
  },
  info:{
    color:'white'
  },
  info_alig:{
    paddingLeft:40
  }
});

export default DatrkCalculator;
