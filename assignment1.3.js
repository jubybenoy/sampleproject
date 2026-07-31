function datatype(value) {
  console.log(value, "=",typeof value);
}

datatype("juby");             // String
datatype(42);                  // Number
datatype(true);                // Boolean
datatype(undefined);           // Undefined
datatype(null);                // Null (typeof shows "object")
datatype(98765467n);                // BigInt
datatype(Symbol("rollno"));        // Symbol
datatype({ name: "miguel" });     // Object
datatype([1, 2, 3]);           // Array (also type "object")
datatype(function fruits(){});  // Function



