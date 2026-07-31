function datatype(value) {
  console.log(value, "=",typeof value);
}

datatype("Hello");             // String
datatype(42);                  // Number
datatype(true);                // Boolean
datatype(undefined);           // Undefined
datatype(null);                // Null (typeof shows "object")
datatype(123n);                // BigInt
datatype(Symbol("id"));        // Symbol
datatype({ name: "Anu" });     // Object
datatype([1, 2, 3]);           // Array (also type "object")
datatype(function fruits(){});  // Function